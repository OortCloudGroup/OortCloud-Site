/* ==========================================================================
   企业订阅 store
   --------------------------------------------------------------------------
   从独立企业订阅接口拉取公开套餐，并映射为定价页及统一支付弹窗所需字段。
   企业订单提交 { plan_id, seat_quantity }，不复用个人订阅下单接口。
   ========================================================================== */
import { writable } from './svelteStore.js'
import {
  getEnterprisePlans,
  getEnterpriseResourcePack
} from './enterpriseSubscriptionApi.js'
import { openPayModal, startResumeFlow } from './subscription.js'
import { fmtCNY } from './format.js'

export const entPlans = writable([])
export const entPlansLoading = writable(false)
export const entPlansError = writable('')
export const entResourcePack = writable(null)
export const entResourcePackLoading = writable(false)
export const entResourcePackError = writable('')

let plansCache = null
let plansInflight = null
let resourcePackCache = null
let resourcePackInflight = null

function paymentMethodsOf(plan) {
  const methods = []
  if (plan.available_wechat) methods.push('wechat_direct')
  if (plan.available_alipay) methods.push('alipay_direct')
  return methods
}

function deriveEntItem(plan) {
  const minSeats = Math.max(1, parseInt(plan.min_seats, 10) || 1)
  const pricePerSeat = Number(plan.price_per_seat) || 0
  const creditsPerSeat = Number(plan.credits_per_seat) || 0
  return {
    kind: 'enterprise',
    id: plan.id,
    title: plan.title || '',
    subtitle: String(plan.subtitle || ''),
    currency: plan.currency || 'CNY',
    pricePerSeat,
    priceText: fmtCNY(pricePerSeat),
    minQty: minSeats,
    maxQty: 10000,
    qty: minSeats,
    unitPrice: pricePerSeat,
    unitCredits: creditsPerSeat,
    creditsPerSeat,
    durationValue: Number(plan.duration_value) || 0,
    durationUnit: String(plan.duration_unit || ''),
    feats: Array.isArray(plan.features) ? plan.features.filter(Boolean) : [],
    paymentMethods: paymentMethodsOf(plan),
    paymentMethodsKnown: true
  }
}

function deriveResourcePack(raw) {
  const source = raw || {}
  /* 企业资源包使用独立服务端配置；这里不回退个人资源包或写死价格，
     避免后台调整企业单价后页面仍展示旧金额。 */
  const unitPrice = Number(source.price != null ? source.price : source.unit_price) || 0
  const unitCredits = Number(source.credits != null ? source.credits : source.unit_credits) || 0
  const paymentMethods = paymentMethodsOf(source)
  return {
    kind: 'enterprise_pack',
    title: source.title || '共享资源包',
    unitPrice,
    unitCredits,
    priceText: fmtCNY(unitPrice),
    qty: 1,
    minQty: 1,
    maxQty: 99,
    validityMonths: Number(source.validity_months) || 0,
    enabled: source.enabled !== false && unitPrice > 0 && unitCredits > 0,
    paymentMethods,
    paymentMethodsKnown: raw != null
  }
}

export function fetchEnterprisePlans(force) {
  if (plansCache && !force) return Promise.resolve(plansCache)
  if (plansInflight && !force) return plansInflight
  entPlansLoading.set(true)
  entPlansError.set('')
  plansInflight = getEnterprisePlans().then((list) => {
    plansCache = (list || []).map(deriveEntItem)
    entPlans.set(plansCache)
    return plansCache
  }).catch((err) => {
    entPlansError.set((err && err.message) || 'error')
    entPlans.set([])
    return []
  }).then((list) => {
    entPlansLoading.set(false)
    plansInflight = null
    return list
  })
  return plansInflight
}

export function fetchEnterpriseResourcePack(force) {
  if (resourcePackCache && !force) return Promise.resolve(resourcePackCache)
  if (resourcePackInflight && !force) return resourcePackInflight
  entResourcePackLoading.set(true)
  entResourcePackError.set('')
  resourcePackInflight = getEnterpriseResourcePack().then((raw) => {
    resourcePackCache = deriveResourcePack(raw)
    entResourcePack.set(resourcePackCache)
    return resourcePackCache
  }).catch((err) => {
    /* 独立配置加载失败时不展示可购买的伪配置，避免价格与实际下单金额不一致。 */
    resourcePackCache = null
    entResourcePack.set(null)
    entResourcePackError.set((err && err.message) || 'error')
    return null
  }).then((pack) => {
    entResourcePackLoading.set(false)
    resourcePackInflight = null
    return pack
  })
  return resourcePackInflight
}

export function startEnterprisePurchase(ent, seatQuantity) {
  if (!ent || ent.id == null) return false
  const qty = Math.max(ent.minQty || 1, Math.min(ent.maxQty || 10000, parseInt(seatQuantity, 10) || ent.minQty || 1))
  startResumeFlow({ ...ent, kind: 'enterprise', qty }, true)
  return true
}

export function startEnterpriseSeatAddonPurchase(overview, seatQuantity) {
  const subscription = overview && overview.subscription
  if (!subscription || !overview.can_manage) return false
  const qty = Math.max(1, Math.min(10000, parseInt(seatQuantity, 10) || 1))
  const paymentMethods = []
  if (overview.available_wechat) paymentMethods.push('wechat_direct')
  if (overview.available_alipay) paymentMethods.push('alipay_direct')
  const plan = {
    kind: 'enterprise_seat_addon',
    id: subscription.plan_id,
    title: subscription.plan_title || '企业订阅',
    qty,
    minQty: 1,
    maxQty: Math.max(1, 10000 - (Number(subscription.seat_quantity) || 0)),
    priceText: '',
    paymentMethods,
    paymentMethodsKnown: true
  }
  if (!paymentMethods.length) return false
  /* 此入口只存在于已成功读取 /enterprise-subscription/self 的账户页，
     当前会话已经过服务端鉴权。直接打开支付弹窗，避免仅以 sessionStorage
     Token 判断登录态时把 cookie 会话误判为未登录，造成点击后没有弹窗。 */
  openPayModal(plan)
  return true
}

export function startEnterpriseResourcePackPurchase(pack) {
  if (!pack || pack.enabled === false) return false
  startResumeFlow({ ...pack, kind: 'enterprise_pack', qty: 1 }, true)
  return true
}
