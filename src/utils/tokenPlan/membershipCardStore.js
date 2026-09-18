/* ==========================================================================
   会员卡业务 store（membership card）
   --------------------------------------------------------------------------
   职责：会员卡商品缓存、「我的会员卡」列表状态、兑换编排与生效订阅探测。
   下单 / 出码 / 轮询不在本文件：复用 $lib/stores/subscription.js 的支付弹窗
   链路（kind='card'，入口 startCardPurchase）；接口路径与错误码映射见
   $lib/api/membershipCard.js。契约见 membership-card-api.md。

   业务规则（契约 §1）：
   - 一张会员卡对应一个 duration_unit=month / duration_value=1 的订阅套餐；
   - 支付成功按购买数量生成会员卡，不立即创建订阅；
   - 会员卡自生成起 90 天内有效，每张只能兑换一次；
   - 会员卡绑定购买账号、不可转让，仅购买账号可查看兑换码并兑换；
   - 当前账号存在生效中的订阅时不能兑换；兑换成功后一个月订阅立即生效。
   ========================================================================== */
import { writable } from './svelteStore.js'
import { browser } from './browser.js'
import { apiFetch } from './client.js'
import { tr } from './i18n.js'
import { showToast } from './toast.js'
import { handleAuthError, PATH as ACCOUNT_PATH } from './accountStub.js'
import {
  CARD_QTY_MIN,
  CARD_QTY_MAX,
  CARD_KEY_LEN,
  requestCardPlans,
  requestMyCards,
  requestRedeemCard,
  clampCardQty,
  cardErrorMessage,
  isActiveSubscriptionError
} from './membershipCardApi.js'

/* ---------- 会员卡商品（公开接口，无需登录） ---------- */
export const cardPlans = writable([])
export const cardPlansLoading = writable(false)
export const cardPlansError = writable('')

/* ---------- 我的会员卡（需登录，仅本人卡片） ---------- */
export const myCards = writable([])
export const myCardsLoading = writable(false)
export const myCardsError = writable('')
/* 是否已加载过一次（面板懒加载判定用） */
export const myCardsLoaded = writable(false)

/* ---------- 兑换态 ---------- */
export const redeeming = writable(false)
/* 当前账号是否存在生效中的订阅（兑换前置提示；最终以后端事务校验为准） */
export const hasActiveSub = writable(false)

let plansCache = null
let plansInflight = null
let cardsInflight = null
let inited = false

/* ---------- 数据规整 ---------- */
function positiveNumber(value) {
  const n = Number(value)
  return isFinite(n) && n > 0 ? n : 0
}

/* 商品对象保留后端原始字段（下单需要 id / payment_methods），
   另附展示字段：单张价格、单张 Credits、张数范围。 */
export function normalizeCardProduct(raw) {
  const src = raw || {}
  const price = src.price_amount_cny != null ? src.price_amount_cny : src.price_amount
  const unitPrice = positiveNumber(price)
  const unitCredits = positiveNumber(src.total_credits)
  const methods = Object.prototype.toString.call(src.payment_methods) === '[object Array]'
    ? src.payment_methods.slice()
    : []
  return {
    raw: src,
    id: src.id == null ? null : src.id,
    title: src.title || '',
    subtitle: src.subtitle || '',
    unitPrice,
    unitCredits,
    currency: src.currency || 'CNY',
    durationUnit: src.duration_unit || 'month',
    durationValue: Number(src.duration_value) || 1,
    paymentMethods: methods,
    qtyMin: CARD_QTY_MIN,
    qtyMax: CARD_QTY_MAX,
    purchasable: src.id != null && unitPrice > 0
  }
}

/* 卡片记录（契约 §6）：状态 unused / redeemed / expired。 */
export function normalizeCardRecord(raw) {
  const src = raw || {}
  const status = src.status === 'redeemed' || src.status === 'expired' ? src.status : 'unused'
  return {
    id: src.id == null ? null : src.id,
    planId: src.plan_id == null ? null : src.plan_id,
    planTitle: src.plan_title || '',
    tradeNo: src.trade_no || '',
    key: src.key || '',
    status,
    createdTime: Number(src.created_time) || 0,
    expiredTime: Number(src.expired_time) || 0,
    redeemedTime: Number(src.redeemed_time) || 0,
    subscriptionId: Number(src.subscription_id) || 0,
    /* 展示辅助：可兑换 = 未使用且未过期且有兑换码 */
    canRedeem: status === 'unused' && !!src.key
  }
}

/* 兑换码掩码：仅购买账号可见完整码，列表默认展示首尾各 4 位。 */
export function maskCardKey(key) {
  const k = String(key || '')
  if (!k) return ''
  if (k.length <= 8) return k
  return k.slice(0, 4) + '••••••••' + k.slice(-4)
}

export function isValidCardKey(key) {
  const k = String(key || '').trim().toUpperCase()
  return k.length === CARD_KEY_LEN
}

/* ---------- 会员卡商品 ---------- */
export function fetchCardPlans(force) {
  if (plansCache && !force) {
    cardPlans.set(plansCache)
    return Promise.resolve(plansCache)
  }
  if (plansInflight && !force) return plansInflight
  cardPlansLoading.set(true)
  cardPlansError.set('')
  plansInflight = requestCardPlans().then((body) => {
    const list = (body && body.data) || []
    plansCache = (Array.isArray(list) ? list : []).map(normalizeCardProduct)
    cardPlans.set(plansCache)
    return plansCache
  }).catch((err) => {
    if (!handleAuthError(err)) {
      /* 商品接口无需登录：失败仅影响会员卡分区展示，不阻塞订阅 / 加量包 */
      cardPlansError.set(cardErrorMessage(err))
    }
    return plansCache || []
  }).then((list) => {
    plansInflight = null
    cardPlansLoading.set(false)
    return list
  })
  return plansInflight
}

/* ---------- 我的会员卡 ---------- */
export function fetchMyCards(force) {
  if (cardsInflight && !force) return cardsInflight
  myCardsLoading.set(true)
  myCardsError.set('')
  cardsInflight = requestMyCards().then((body) => {
    const list = (body && body.data) || []
    const cards = (Array.isArray(list) ? list : []).map(normalizeCardRecord)
    myCards.set(cards)
    myCardsLoaded.set(true)
    return cards
  }).catch((err) => {
    if (handleAuthError(err)) return []
    myCardsError.set(cardErrorMessage(err))
    myCardsLoaded.set(true)
    return []
  }).then((cards) => {
    cardsInflight = null
    myCardsLoading.set(false)
    return cards
  })
  return cardsInflight
}

/* ---------- 生效订阅探测（兑换前置提示，非阻塞） ----------
   契约 §8：用户兑换前可先刷新 /api/subscription/self；
   最终是否允许兑换以后端事务校验为准。 */
export function refreshActiveSub() {
  return apiFetch(ACCOUNT_PATH.subSelf).then((body) => {
    const subs = ((body && body.data) || {}).subscriptions || []
    let active = false
    for (let i = 0; i < subs.length; i++) {
      const s = subs[i] && subs[i].subscription
      if (s && s.status === 'active') { active = true; break }
    }
    hasActiveSub.set(active)
    return active
  }).catch(() => {
    /* 探测失败不改变判定：交由后端事务校验兜底 */
    return null
  })
}

/* ---------- 兑换会员卡 ----------
   返回 { ok, message, code, subscription }；调用方按 ok 决定后续刷新。
   已有生效订阅时给出明确文案（错误码 membership_card_active_subscription），
   不匹配中文 message。 */
export function redeemCard(key) {
  const code = String(key || '').trim()
  if (!code) {
    const msg = tr('card.errors.invalidParams')
    showToast(msg)
    return Promise.resolve({ ok: false, message: msg, code: 'membership_card_invalid_params' })
  }
  redeeming.set(true)
  return requestRedeemCard(code).then((body) => {
    const d = (body && body.data) || {}
    /* 契约 §8：兑换成功后同时刷新「我的会员卡」与订阅信息 */
    fetchMyCards(true)
    refreshActiveSub()
    showToast(tr('card.redeem.done'))
    return { ok: true, subscription: d }
  }).catch((err) => {
    if (handleAuthError(err)) {
      return { ok: false, message: tr('toast.unauthorized'), code: '' }
    }
    const message = cardErrorMessage(err)
    /* 已有生效订阅：刷新探测结果，便于面板即时更新提示 */
    if (isActiveSubscriptionError(err)) refreshActiveSub()
    showToast(message)
    return { ok: false, message, code: String((err && err.code) || '') }
  }).then((res) => {
    redeeming.set(false)
    return res
  })
}

/* ---------- 初始化：监听支付成功广播，失效卡片缓存 ----------
   会员卡支付成功由 subscription store 广播 oort-card-purchased；
   已加载过列表时立即重拉，未加载时仅清缓存（进入面板再拉）。 */
export function initMembershipCard() {
  if (inited || !browser) return
  inited = true
  document.addEventListener('oort-card-purchased', () => {
    let loaded = false
    myCardsLoaded.subscribe((v) => { loaded = v })()
    if (loaded) fetchMyCards(true)
  })
}

export { clampCardQty }
