/* ==========================================================================
   订阅购买流程 store（自 assets/js/subscription.js 迁移）
   --------------------------------------------------------------------------
   订阅套餐：点击 → 本地立即解析套餐（按钮数据 / FALLBACK_PLANS，不阻塞）→
     未登录：savePending + 用户手势内 loginRedirect(true) 新标签页登录，
             登录成功后经 oort-auth:refreshed（跨页）或页面加载 pending
             消费（同页回跳兜底）自动恢复，直达支付弹窗；
     已登录：直接打开支付弹窗（账单 + 收款码合并视图），立即以默认支付
             方式（微信）下单出码，弹框内可切换微信 / 支付宝。
   Credit Pack 加量包：走账户额度充值（top-up）接口，不复用订阅下单接口。
     未登录展示读取 /api/subscription/public/resource-pack；登录后优先读取
     /api/user/topup/info 的 resource_pack，购买金额 = unit_price × quantity；
     接口失败或无数据时回退 PACK_DEFAULTS 本地配置，绝不阻塞购买流程。
     下单前调用 /api/user/amount 试算实付金额；
     下单请求体 { amount }（POST /api/user/alipay|wechat/pay），
     轮询 /api/user/alipay|wechat/topup/{tradeNo}，
     试算 / 下单 / 状态接口均返回 credits，支付成功页直接展示。
   会员卡（membership card，kind='card'）：走 /api/membership-card/* 接口。
     商品来自 /api/membership-card/public/plans（仅启用的一年一月套餐），
     下单请求体 { plan_id, quantity }（quantity 1-99）；金额由后端按
     price_amount_cny × quantity 计算并在支付回调校验，前端不提交 amount；
     轮询 /api/membership-card/alipay|wechat/{tradeNo}（每 2.5 秒），
     status=success 后按 quantity 生成会员卡（不立即创建订阅），
     成功页展示生成张数并广播 oort-card-purchased 供「我的会员卡」刷新。
     契约见 membership-card-api.md。
   ensurePlans() 仅用于订阅套餐真实 id / 支付方式的非阻塞补全（并行，失败不阻塞）。
   接口定义参见 subscription-purchase-api.md
   登录认证由 $lib/stores/auth.js 提供；弹窗 UI 由 PayModal.svelte 渲染，
   本 store 只维护响应式状态（pay）与业务函数。
   ========================================================================== */
import { writable } from './svelteStore.js'
import { browser } from './browser.js'
import { apiFetch, bizError } from './client.js'
import { getToken, isLoggedIn, loginRedirect, ensureLoggedIn } from './auth.js'
import { tr } from './i18n.js'
import { showToast } from './toast.js'
import { fmtCNY, fmtCredits, creditsForAmount } from './format.js'
import {
  CARD_PATH,
  CARD_QTY_MAX,
  CARD_POLL_INTERVAL,
  clampCardQty,
  buildCardOrderPayload
} from './membershipCardApi.js'
import { ENTERPRISE_PATH } from './enterpriseSubscriptionApi.js'

/* ---------- 配置 ---------- */
const CONFIG = {
  PENDING_KEY: 'oc_pending_subscription',
  PENDING_MAX_AGE: 30 * 60 * 1000, // 中断的购买流程最多保留 30 分钟
  POLL_INTERVAL: 2000, // 每 2 秒查询一次订单状态
  POLL_MAX_ERRORS: 3, // 轮询连续失败容忍次数
  PATH_PLANS: '/api/subscription/public/plans',
  PATH_UPGRADE_OPTIONS: '/api/subscription/upgrade-options',
  PATH_STATUS: '/api/status',
  PATH_RESOURCE_PACK_PUBLIC: '/api/subscription/public/resource-pack',
  PATH_TOPUP_INFO: '/api/user/topup/info',
  PATH_AMOUNT_PREVIEW: '/api/user/amount',
  PATH_ALIPAY_PAY: '/api/subscription/alipay/pay',
  PATH_WECHAT_PAY: '/api/subscription/wechat/pay',
  PATH_ALIPAY_QUERY: '/api/subscription/alipay/',
  PATH_WECHAT_QUERY: '/api/subscription/wechat/',
  /* Credits 加量包走账户额度充值（top-up）接口，不复用订阅下单接口：
     只有充值试算 / 充值下单 / 充值订单状态接口返回 credits 字段，
     满足「试算与支付成功展示 credits」。参见 topup-credits-api.md。 */
  PATH_USER_ALIPAY_PAY: '/api/user/alipay/pay',
  PATH_USER_WECHAT_PAY: '/api/user/wechat/pay',
  PATH_USER_ALIPAY_QUERY: '/api/user/alipay/topup/',
  PATH_USER_WECHAT_QUERY: '/api/user/wechat/topup/',
  /* 加量包支付成功后的账户刷新（契约 §7：刷新用户信息与充值记录，非阻塞） */
  PATH_USER_SELF: '/api/user/self',
  PATH_TOPUP_SELF: '/api/user/topup/self'
}

/* 支付方式元信息：文案走 i18n（labelKey / tipKey），接口路径区分订阅与充值。 */
const PAY_METHOD_META = {
  alipay_direct: {
    labelKey: 'pay.methods.alipay',
    payPath: CONFIG.PATH_ALIPAY_PAY,
    queryPath: CONFIG.PATH_ALIPAY_QUERY,
    tipKey: 'pay.qr.tipAlipay'
  },
  wechat_direct: {
    labelKey: 'pay.methods.wechat',
    payPath: CONFIG.PATH_WECHAT_PAY,
    queryPath: CONFIG.PATH_WECHAT_QUERY,
    tipKey: 'pay.qr.tipWechat'
  }
}

/* 加量包（账户充值）专用接口映射：下单 { amount }、按 trade_no 轮询。
   与订阅套餐的 PAY_METHOD_META 区分：充值试算 / 下单 / 状态接口才返回
   credits 字段，满足「试算与支付成功展示 credits」。 */
const PACK_META = {
  alipay_direct: {
    labelKey: 'pay.methods.alipay',
    payPath: CONFIG.PATH_USER_ALIPAY_PAY,
    queryPath: CONFIG.PATH_USER_ALIPAY_QUERY,
    tipKey: 'pay.qr.tipAlipayTopup'
  },
  wechat_direct: {
    labelKey: 'pay.methods.wechat',
    payPath: CONFIG.PATH_USER_WECHAT_PAY,
    queryPath: CONFIG.PATH_USER_WECHAT_QUERY,
    tipKey: 'pay.qr.tipWechatTopup'
  }
}

/* 会员卡专用接口映射：下单 { plan_id, quantity }、按 trade_no 轮询。
   契约 §2：仅支持国内支付宝当面付与微信 Native 扫码。 */
const CARD_META = {
  alipay_direct: {
    labelKey: 'pay.methods.alipay',
    payPath: CARD_PATH.alipayPay,
    queryPath: CARD_PATH.alipayQuery,
    tipKey: 'pay.qr.tipAlipayCard'
  },
  wechat_direct: {
    labelKey: 'pay.methods.wechat',
    payPath: CARD_PATH.wechatPay,
    queryPath: CARD_PATH.wechatQuery,
    tipKey: 'pay.qr.tipWechatCard'
  }
}

/* 企业订阅专用接口：按席位下单，订单状态接口与个人订阅完全隔离。 */
const ENTERPRISE_META = {
  alipay_direct: {
    labelKey: 'pay.methods.alipay',
    payPath: ENTERPRISE_PATH.alipayPay,
    queryPath: ENTERPRISE_PATH.alipayQuery,
    tipKey: 'pay.qr.tipAlipayEnterprise'
  },
  wechat_direct: {
    labelKey: 'pay.methods.wechat',
    payPath: ENTERPRISE_PATH.wechatPay,
    queryPath: ENTERPRISE_PATH.wechatQuery,
    tipKey: 'pay.qr.tipWechatEnterprise'
  }
}

/* 企业追加席位专用接口：服务端按当前订阅剩余周期计算金额和新增额度。 */
const ENTERPRISE_ADDON_META = {
  alipay_direct: {
    labelKey: 'pay.methods.alipay',
    payPath: ENTERPRISE_PATH.seatAddonAlipayPay,
    queryPath: ENTERPRISE_PATH.seatAddonAlipayQuery,
    tipKey: 'pay.qr.tipAlipayEnterpriseAddon'
  },
  wechat_direct: {
    labelKey: 'pay.methods.wechat',
    payPath: ENTERPRISE_PATH.seatAddonWechatPay,
    queryPath: ENTERPRISE_PATH.seatAddonWechatQuery,
    tipKey: 'pay.qr.tipWechatEnterpriseAddon'
  }
}

/* 企业共享资源包专用接口：额度归属租户共享池，不进入个人钱包。 */
const ENTERPRISE_PACK_META = {
  alipay_direct: {
    labelKey: 'pay.methods.alipay',
    payPath: ENTERPRISE_PATH.resourcePackAlipayPay,
    queryPath: ENTERPRISE_PATH.resourcePackAlipayQuery,
    tipKey: 'pay.qr.tipAlipayEnterprisePack'
  },
  wechat_direct: {
    labelKey: 'pay.methods.wechat',
    payPath: ENTERPRISE_PATH.resourcePackWechatPay,
    queryPath: ENTERPRISE_PATH.resourcePackWechatQuery,
    tipKey: 'pay.qr.tipWechatEnterprisePack'
  }
}

export const PAY_METHODS = ['wechat_direct', 'alipay_direct']

/* 默认支付方式：微信付款码（需求：弹框打开即默认选中） */
const DEFAULT_PAY_METHOD = 'wechat_direct'

const RESET_KEYS = { never: 1, daily: 1, weekly: 1, monthly: 1, custom: 1 }
const UNIT_KEYS = { year: 1, month: 1, day: 1, hour: 1 }
const DEFAULT_CREDITS_PER_CNY = 25
let creditsPerCny = DEFAULT_CREDITS_PER_CNY
let creditsRateInflight = null

/* 响应式汇率（定价页 / 加量包展示用） */
export const creditsRate = writable(DEFAULT_CREDITS_PER_CNY)

function localCreditsForAmount(amount) {
  return creditsForAmount(amount, creditsPerCny)
}

/* 后端不可达时的兜底套餐（与页面静态展示一致；无 id，
   下单时若仍缺 id 会走可见的兜底补全，绝不静默失败） */
const FALLBACK_PLANS = [
  { id: null, title: 'Pro', priceAmount: 20, seats: 1, paymentMethods: [] },
  { id: null, title: 'Pro+', priceAmount: 60, seats: 3, paymentMethods: [] },
  { id: null, title: 'Ultra', priceAmount: 200, seats: 10, paymentMethods: [] }
]

function refreshFallbackPlanCredits() {
  for (const plan of FALLBACK_PLANS) {
    plan.totalCredits = localCreditsForAmount(plan.priceAmount)
    plan.priceText = fmtCNY(plan.priceAmount)
    plan.desc = fmtCredits(plan.totalCredits) + tr('pay.planDesc.creditsSuffix') +
      tr('pay.planDesc.seatsSuffix', { seats: plan.seats })
  }
}
refreshFallbackPlanCredits()

/* Credit Pack 本地兜底配置：接口失败或旧版后端未返回 resource_pack 时使用。 */
const PACK_DEFAULTS = {
  unitCredits: 2000,
  unitPrice: 20,
  maxQty: 50
}

/* ---------- 响应式弹窗状态 ----------
   DOM 渲染由 PayModal.svelte 依据本状态完成。 */
const st = {
  open: false,
  view: 'bill', // bill | success | expired
  plan: null,
  packCfg: null, // 弹框内加量包配置 { unitPrice, unitCredits, quantity }
  trialPending: false, // 加量包试算请求在途（切档去抖：跳过并发试算）
  lastCredits: null, // 最近一次下单 / 轮询响应携带的 credits（成功页展示）
  lastCardQty: 0, // 会员卡订单轮询响应携带的生成张数（成功页展示）
  tradeNo: null,
  method: null,
  selectedMethod: DEFAULT_PAY_METHOD, // 当前选中的支付方式（默认微信付款码）
  expiresAt: 0,
  remainMs: 0, // 二维码剩余有效毫秒（0 = 不显示倒计时）
  pollErrors: 0,
  creating: false,
  syncing: false, // 加量包套餐信息同步中（下单前的短等待），期间禁止改数量 / 切支付方式
  session: 0, // 每次打开弹窗自增，用于丢弃上一次会话的异步结果
  orders: {}, // 按支付方式缓存已创建订单：{ method: { tradeNo, qrText, expiresAt, amount } }
  /* 展示字段 */
  statusText: '',
  errorText: '',
  qrText: '', // 当前收款码内容（组件用 qrcode-generator 渲染）
  qrLoading: false,
  qrTip: '',
  amountText: '',
  descText: '',
  qty: 1,
  qtyMax: PACK_DEFAULTS.maxQty,
  unitLine: '',
  successMsg: '',
  expiredMsg: ''
}

export const pay = writable({ ...st })
function commit() { pay.set({ ...st }) }

/* 定价页加量包展示信息（公开接口 / topup info 合并结果） */
export const packInfo = writable(null)
/* 登录用户套餐展示：公开列表提供全部卡片，upgrade-options 只授权可购买 ID。 */
export const upgradeOptions = writable({
  status: 'public',
  currentPlan: null,
  plans: null,
  purchasableIds: [],
  message: ''
})

let pollTimer = null
let cdTimer = null
let plansCache = null
/* 加量包套餐接口缓存与在途请求去重（见 fetchPackPlanInfo） */
let packApiCache = null
let packApiInflight = null
let inited = false
let upgradeRequestSeq = 0

/* ---------- pending（中断流程暂存） ----------
   结构向后兼容：旧数据无 kind 字段时按 subscribe 处理。
   kind: 'subscribe' 订阅套餐 | 'pack' 加量包
   加量包额外携带 qty / credits，用于登录回来后原样恢复下单参数。 */
export function savePending(plan) {
  if (!browser) return
  try {
    sessionStorage.setItem(CONFIG.PENDING_KEY, JSON.stringify({
      kind: plan.kind || 'subscribe',
      id: plan.id == null ? null : plan.id,
      title: plan.title,
      priceText: plan.priceText || '',
      desc: plan.desc || '',
      paymentMethods: plan.paymentMethods || [],
      paymentMethodsKnown: !!plan.paymentMethodsKnown,
      qty: plan.qty || 0,
      amount: plan.amount || 0, // 加量包充值面值（top-up 下单参数）
      credits: plan.credits || 0,
      totalCredits: plan.totalCredits || 0,
      unlimited: !!plan.unlimited,
      unitCredits: plan.unitCredits || 0,
      unitPrice: plan.unitPrice || 0,
      maxQty: plan.maxQty || 0,
      minQty: plan.minQty || 0,
      validityMonths: plan.validityMonths || 0,
      ts: Date.now()
    }))
  } catch (e) { /* 忽略存储异常 */ }
}
export function readPending() {
  if (!browser) return null
  try {
    const raw = sessionStorage.getItem(CONFIG.PENDING_KEY)
    if (!raw) return null
    const p = JSON.parse(raw)
    if (!p || !p.title) return null
    if (Date.now() - (p.ts || 0) > CONFIG.PENDING_MAX_AGE) return null
    if (!p.kind) p.kind = 'subscribe' // 兼容旧结构
    return p
  } catch (e) { return null }
}
export function clearPending() {
  if (!browser) return
  try { sessionStorage.removeItem(CONFIG.PENDING_KEY) } catch (e) { /* 忽略 */ }
}

/* ---------- 支付方式文案 ---------- */
export function methodLabel(method) {
  const meta = PAY_METHOD_META[method] || PACK_META[method] || CARD_META[method] || ENTERPRISE_META[method] || ENTERPRISE_ADDON_META[method] || ENTERPRISE_PACK_META[method]
  return meta ? tr(meta.labelKey) : method
}
function metaFor(method) {
  const kind = st.plan && st.plan.kind
  if (kind === 'pack') return PACK_META[method]
  if (kind === 'card') return CARD_META[method]
  if (kind === 'enterprise') return ENTERPRISE_META[method]
  if (kind === 'enterprise_seat_addon') return ENTERPRISE_ADDON_META[method]
  if (kind === 'enterprise_pack') return ENTERPRISE_PACK_META[method]
  return PAY_METHOD_META[method]
}
function methodTip(method) {
  const meta = metaFor(method)
  return meta ? tr(meta.tipKey) : ''
}

/* ---------- Credits 换算配置 ---------- */
function notifyCreditsRate() {
  creditsRate.set(creditsPerCny)
  if (browser) {
    try {
      document.dispatchEvent(new CustomEvent('oort-credits-rate', {
        detail: { creditsPerCny }
      }))
    } catch (e) { /* 忽略事件异常 */ }
  }
}

export function fetchCreditsRate(force) {
  if (creditsRateInflight && !force) return creditsRateInflight
  creditsRateInflight = apiFetch(CONFIG.PATH_STATUS).then((body) => {
    const rate = Number(body && body.data && body.data.credits_per_cny)
    creditsPerCny = isFinite(rate) && rate > 0 ? rate : DEFAULT_CREDITS_PER_CNY
    refreshFallbackPlanCredits()
    if (plansCache) {
      for (const plan of plansCache) {
        if (!plan.unlimited && Number(plan.priceAmount) > 0) {
          plan.totalCredits = localCreditsForAmount(plan.priceAmount)
          if (plan.sourcePlan) plan.desc = describePlan(plan.sourcePlan, plan.priceAmount)
        }
      }
    }
    if (st.plan && st.plan.kind === 'pack') {
      normalizePackPlan(st.plan)
      st.descText = st.plan.desc
      if (st.packCfg) st.packCfg.credits = st.plan.credits
      renderPackTierControls()
      commit()
    }
    notifyCreditsRate()
    return creditsPerCny
  }).catch(() => {
    creditsPerCny = DEFAULT_CREDITS_PER_CNY
    refreshFallbackPlanCredits()
    notifyCreditsRate()
    return creditsPerCny
  }).then((rate) => {
    creditsRateInflight = null
    return rate
  })
  return creditsRateInflight
}

/* ---------- 公开套餐（仅非阻塞用途） ---------- */
export function describePlan(p, price) {
  const parts = []
  /* 无限套餐必须用 total_amount === 0 判断；付费套餐积分按
     /api/status 的 credits_per_cny 与人民币价格计算。 */
  if (p.total_amount === 0) {
    parts.push(tr('pay.planDesc.unlimited'))
  } else {
    const c = localCreditsForAmount(price)
    if (isFinite(c) && c > 0) parts.push(fmtCredits(c) + tr('pay.planDesc.creditsSuffix'))
  }
  if (RESET_KEYS[p.quota_reset_period]) {
    parts.push(tr('pay.planDesc.resetPrefix') + tr('pay.planDesc.reset.' + p.quota_reset_period))
  }
  if (p.duration_unit && p.duration_unit !== 'custom' && UNIT_KEYS[p.duration_unit]) {
    parts.push(tr('pay.planDesc.validityPrefix') + ' ' + (p.duration_value || '') + ' ' +
      tr('pay.planDesc.unit.' + p.duration_unit))
  }
  return parts.join(' · ') || p.subtitle || ''
}

/* 拉取套餐列表（映射为展示字段）。
   重要约束：仅允许用于展示价格文案、补全真实 id / 支付方式等「非阻塞」用途；
   订阅下单主链路不得 await 本函数。加量包需要原始字段（total_amount /
   price_amount_cny 等）组装单价与 Credits 数，走独立的 fetchPackPlanInfo，
   不复用本缓存。 */
export function ensurePlans(force) {
  if (plansCache && !force) return Promise.resolve(plansCache)
  return apiFetch(CONFIG.PATH_PLANS, { headers: {}}).then((body) => {
    const list = (body && body.data) || []
    plansCache = list.map((p) => {
      const price = p.price_amount_cny != null ? p.price_amount_cny : p.price_amount
      return {
        id: p.id,
        title: p.title || '',
        sourcePlan: p,
        priceAmount: Number(price) || 0,
        priceText: fmtCNY(price),
        desc: describePlan(p, price),
        paymentMethods: p.payment_methods || [],
        totalCredits: localCreditsForAmount(price),
        unlimited: Number(p.total_amount) === 0
      }
    })
    if (!plansCache.length) plansCache = FALLBACK_PLANS.slice()
    return plansCache
  }).catch(() => {
    plansCache = FALLBACK_PLANS.slice()
    return plansCache
  })
}

export function findPlan(list, sel) {
  const q = String(sel == null ? '' : sel).trim().toLowerCase()
  if (!q || !list.length) return null
  let i, p
  for (i = 0; i < list.length; i++) {
    if (String(list[i].id) === q) return list[i]
  }
  for (i = 0; i < list.length; i++) {
    if (String(list[i].title).toLowerCase() === q) return list[i]
  }
  for (i = 0; i < list.length; i++) {
    p = list[i]
    const title = String(p.title).toLowerCase()
    if (title.includes(q) || q.includes(title)) return p
  }
  return null
}

export function clonePlan(p, kind) {
  return {
    kind: kind || 'subscribe',
    id: p.id == null ? null : p.id,
    title: p.title || '',
    priceAmount: p.priceAmount || 0,
    priceText: p.priceText || '',
    desc: p.desc || '',
    paymentMethods: (p.paymentMethods || []).slice(),
    paymentMethodsKnown: !!p.paymentMethodsKnown,
    qty: p.qty || 0,
    amount: p.amount || 0, // 加量包充值面值（top-up 下单参数）
    credits: p.credits || 0,
    totalCredits: p.totalCredits || 0,
    unlimited: !!p.unlimited,
    unitCredits: p.unitCredits || 0,
    unitPrice: p.unitPrice || 0,
    maxQty: p.maxQty || 0,
    minQty: p.minQty || 0,
    validityMonths: p.validityMonths || 0
  }
}

function samePlanRef(a, b) {
  if (!a || !b) return false
  if (a.id != null && b.id != null) return String(a.id) === String(b.id)
  const ta = String(a.title || '').toLowerCase()
  const tb = String(b.title || '').toLowerCase()
  return !!ta && ta === tb
}

/* 用套餐列表数据补全本地计划（只补缺失字段，不覆盖本地价格文案） */
function enrichPlanFromList(plan, list) {
  const hit = findPlan(list, plan.id != null ? String(plan.id) : (plan.title || ''))
  if (!hit) return plan
  const out = clonePlan(plan, plan.kind)
  if (out.id == null) out.id = hit.id
  if (!out.paymentMethods.length) out.paymentMethods = (hit.paymentMethods || []).slice()
  if (!out.priceText) out.priceText = hit.priceText
  if (!out.desc) out.desc = hit.desc
  return out
}

/* 订阅套餐的非阻塞补全（并行执行，失败不影响主链路）：
   - 支付弹窗已打开且是同一套餐：同步更新 st.plan 与支付方式可用性；
   - pending 为同一套餐（用户去登录期间）：更新暂存，登录回来后拿到真实 id。
   注意：加量包流程不得调用本函数。 */
function enrichSubscribePlanAsync(plan) {
  ensurePlans().then((list) => {
    const enriched = enrichPlanFromList(plan, list)
    if (st.open && st.plan && samePlanRef(st.plan, plan)) {
      st.plan = enriched
      commit()
    }
    const p = readPending()
    if (p && samePlanRef(p, plan)) savePending(enriched)
  }).catch(() => { /* 非阻塞用途：失败不影响下单主链路 */ })
}

/* ---------- Credit Pack 配置：resource_pack 优先，本地兜底 ---------- */
function positiveNumber(value) {
  const n = Number(value)
  return isFinite(n) && n > 0 ? n : 0
}

/* 支付方式可用性：优先 enable_alipay_topup / enable_wechat_topup 开关，
   其次 pay_methods 数组；两者均缺失时保持两渠道可用（不因展示问题阻塞购买）。 */
function packMethodsFromInfo(d) {
  const arr = Object.prototype.toString.call(d && d.pay_methods) === '[object Array]' ? d.pay_methods : null
  let ms = []
  if (d.enable_alipay_topup === true || (arr && arr.includes('alipay')) || (arr && arr.includes('alipay_direct'))) {
    ms.push('alipay_direct')
  }
  if (d.enable_wechat_topup === true || (arr && arr.includes('wechat')) || (arr && arr.includes('wechat_direct'))) {
    ms.push('wechat_direct')
  }
  if (!ms.length && arr === null && d.enable_alipay_topup !== false && d.enable_wechat_topup !== false) {
    ms = ['alipay_direct', 'wechat_direct']
  }
  return ms
}

function toPackInfoFromApi(d) {
  if (!d) return null
  const resource = d.resource_pack || d
  let unitPrice = positiveNumber(resource.unit_price)
  let unitCredits = positiveNumber(resource.unit_credits)
  const rate = positiveNumber(resource.credits_per_cny || d.credits_per_cny)

  /* 兼容旧后端：单包字段缺失时，从 amount_options / credit_options 取一个面值。 */
  if (!unitPrice) {
    const amountOptions = Object.prototype.toString.call(d.amount_options) === '[object Array]' ? d.amount_options : []
    if (amountOptions.length) unitPrice = positiveNumber(amountOptions[0])
    const creditOptions = Object.prototype.toString.call(d.credit_options) === '[object Array]' ? d.credit_options : []
    if (!unitPrice && creditOptions.length) unitPrice = positiveNumber(creditOptions[0] && creditOptions[0].amount)
    if (!unitCredits && creditOptions.length) unitCredits = positiveNumber(creditOptions[0] && creditOptions[0].credits)
  }
  if (!unitPrice) return null
  if (!unitCredits) unitCredits = rate ? unitPrice * rate : localCreditsForAmount(unitPrice)
  return {
    unitPrice,
    unitCredits,
    creditsPerCny: rate || unitCredits / unitPrice,
    currency: resource.currency || 'CNY',
    paymentMethods: d.resource_pack ? packMethodsFromInfo(d) : [],
    paymentMethodsKnown: !!d.resource_pack,
    minTopupCredits: positiveNumber(d.min_topup_credits)
  }
}

function mergePackInfo(base, extra) {
  if (!base) return extra
  if (!extra) return base
  return {
    unitPrice: extra.unitPrice || base.unitPrice,
    unitCredits: extra.unitCredits || base.unitCredits,
    creditsPerCny: extra.creditsPerCny || base.creditsPerCny,
    currency: extra.currency || base.currency,
    paymentMethods: extra.paymentMethods || base.paymentMethods || [],
    paymentMethodsKnown: !!(extra.paymentMethodsKnown || base.paymentMethodsKnown),
    minTopupCredits: extra.minTopupCredits || base.minTopupCredits || 0
  }
}

function fetchPublicPackInfo() {
  return apiFetch(CONFIG.PATH_RESOURCE_PACK_PUBLIC).then((body) => {
    return toPackInfoFromApi((body && body.data) || null)
  }).catch(() => null)
}

/* 先读取无需登录的公开单包配置；已有登录态时再用 topup/info 补全支付方式。 */
export function fetchPackPlanInfo(force) {
  if (packApiCache && !force) return Promise.resolve(packApiCache)
  if (packApiInflight && !force) return packApiInflight
  packApiInflight = fetchPublicPackInfo().then((publicInfo) => {
    let loggedIn = false
    try { loggedIn = isLoggedIn() } catch (e) { loggedIn = !!getToken() }
    if (!loggedIn) return publicInfo
    return apiFetch(CONFIG.PATH_TOPUP_INFO).then((body) => {
      return mergePackInfo(publicInfo, toPackInfoFromApi((body && body.data) || null))
    }).catch(() => publicInfo)
  }).then((info) => {
    if (info) packApiCache = info
    return packApiCache
  }).then((cfg) => {
    packApiInflight = null
    return cfg
  })
  return packApiInflight
}

/* 带超时的配置拉取：超时后以当前缓存（可能为 null）resolve。 */
function fetchPackPlanInfoTimeout(ms) {
  return new Promise((resolve) => {
    let done = false
    const timer = setTimeout(() => {
      if (!done) { done = true; resolve(packApiCache) }
    }, ms || 2500)
    fetchPackPlanInfo().then((cfg) => {
      if (!done) { done = true; clearTimeout(timer); resolve(cfg) }
    })
  })
}

function currentPackConfig() {
  return {
    unitPrice: positiveNumber(packApiCache && packApiCache.unitPrice) || PACK_DEFAULTS.unitPrice,
    unitCredits: positiveNumber(packApiCache && packApiCache.unitCredits) || PACK_DEFAULTS.unitCredits,
    creditsPerCny: positiveNumber(packApiCache && packApiCache.creditsPerCny) || creditsPerCny,
    maxQty: PACK_DEFAULTS.maxQty
  }
}

/* 定价页 .credit-pack 展示区刷新：广播服务端单包价格与 Credits。 */
function refreshPackDisplay(info) {
  if (!info) return
  const detail = {
    unitPrice: info.unitPrice,
    unitCredits: info.unitCredits,
    creditsPerCny: info.creditsPerCny,
    currency: info.currency,
    paymentMethods: (info.paymentMethods || []).slice(),
    paymentMethodsKnown: !!info.paymentMethodsKnown,
    minTopupCredits: info.minTopupCredits || 0
  }
  packInfo.set(detail)
  if (browser) {
    try {
      document.dispatchEvent(new CustomEvent('oort-pack-info', { detail }))
    } catch (e) { /* 忽略事件异常 */ }
  }
}

/* ---------- 支付弹窗状态控制 ---------- */
function showPayView(name) {
  st.view = name
}
function setPayError(msg) {
  st.errorText = msg || ''
}

export function isMethodEnabled(plan, method) {
  if (plan && plan.paymentMethodsKnown) {
    return plan.paymentMethods.includes(method)
  }
  if (!plan || !plan.paymentMethods || !plan.paymentMethods.length) return true
  return plan.paymentMethods.includes(method)
}

/* 计算默认支付方式：优先微信付款码；若套餐限定了支付方式则取第一个可用项 */
export function defaultMethodFor(plan) {
  if (plan && plan.paymentMethods && plan.paymentMethods.length) {
    if (plan.paymentMethods.includes(DEFAULT_PAY_METHOD)) return DEFAULT_PAY_METHOD
    return plan.paymentMethods[0]
  }
  return DEFAULT_PAY_METHOD
}

/* 选中某个支付方式（仅更新选中态，不下单） */
function selectMethod(method) {
  if (!method) return
  st.selectedMethod = method
}

/* 打开支付弹窗：打开即完整展示「账单信息 + 收款码」：立即以默认支付方式
   （优先微信，微信不可用时取套餐第一个可用方式）下单，请求期间二维码区域
   显示加载态。 */
export function openPayModal(plan) {
  stopPolling()
  st.session += 1
  st.plan = plan
  st.tradeNo = null
  st.method = null
  st.selectedMethod = DEFAULT_PAY_METHOD
  st.expiresAt = 0
  st.remainMs = 0
  st.lastCredits = null
  st.lastCardQty = 0
  st.orders = {}
  st.creating = false
  st.syncing = false
  st.view = 'bill'
  st.statusText = ''
  st.errorText = ''
  st.qrText = ''
  st.qrLoading = false
  st.qrTip = ''
  st.successMsg = ''
  st.expiredMsg = ''
  st.descText = plan.desc || ''
  st.amountText = plan.priceText || ''
  /* 加量包场景：显示购买数量步进器并发起试算；
     会员卡场景：显示张数步进器（合计 = 单张价 × 张数，仅本地展示，
     实付金额以下单响应 amount 为准，前端不试算、不提交金额）；
     企业订阅场景：显示席位数（不得低于套餐 min_seats）；
     个人订阅套餐场景隐藏步进器。 */
  if (plan.kind === 'pack') {
    normalizePackPlan(plan)
    st.packCfg = currentPackConfig()
    renderPackTierControls()
    st.descText = plan.desc
    st.amountText = plan.priceText
    /* 接口数据已就绪（页面预热已完成）：立即以接口单包配置 / 支付方式校准 */
    if (packApiCache) syncPackFromApi(packApiCache)
    /* 试算（非阻塞）：展示实付金额与最终 credits */
    runPackTrial(plan.amount)
  } else if (plan.kind === 'card') {
    st.packCfg = null
    normalizeCardPlan(plan)
    renderCardQtyControls()
    st.descText = plan.desc
    st.amountText = plan.priceText
  } else if (plan.kind === 'enterprise') {
    st.packCfg = null
    normalizeEnterprisePlan(plan)
    renderEnterpriseQtyControls()
    st.descText = plan.desc
    st.amountText = plan.priceText
  } else if (plan.kind === 'enterprise_seat_addon') {
    st.packCfg = null
    normalizeEnterpriseSeatAddonPlan(plan)
    renderEnterpriseSeatAddonQtyControls()
    st.descText = plan.desc
    st.amountText = ''
  } else if (plan.kind === 'enterprise_pack') {
    st.packCfg = null
    normalizeEnterprisePackPlan(plan)
    renderEnterprisePackQtyControls()
    st.descText = plan.desc
    st.amountText = plan.priceText
  } else {
    st.packCfg = null
    st.qty = 1
    st.unitLine = ''
  }
  /* 账单与收款码同框展示：默认选中微信付款码并立即下单 */
  const method = defaultMethodFor(plan)
  selectMethod(method)
  showPayView('bill')
  st.open = true
  commit()
  /* 加量包：单包配置尚未从接口取到时先拉取再下单（2.5s 超时兜底），
     确保充值面值 / credits 与服务端一致；超时或失败回退本地配置，绝不阻塞。
     同步期间二维码区域同样显示加载态（随后进入下单请求，出码后隐藏）。 */
  if (plan.kind === 'pack' && !packApiCache) {
    const session = st.session
    st.statusText = tr('pay.status.syncingPack')
    setQrLoading()
    /* 同步期间（≤2.5s）禁止切数量 / 切支付方式触发下单，
       防止以未同步的旧单价创建订单；完成后统一以下单为准。 */
    st.syncing = true
    commit()
    fetchPackPlanInfoTimeout(2500).then((apiCfg) => {
      st.syncing = false
      if (session !== st.session || !st.open) return
      if (apiCfg) syncPackFromApi(apiCfg)
      st.statusText = ''
      commit()
      /* 同步后支付方式可用性可能变化：以刷新后的选中方式下单 */
      createOrder(st.selectedMethod || method)
      runPackTrial(st.plan.amount)
    })
    return
  }
  createOrder(method)
}

export function closePayModal() {
  stopPolling()
  st.open = false
  commit()
}

/* ---------- 加量包数量工具 ---------- */
export function normalizePackPlan(plan) {
  if (!plan) return
  const cfg = currentPackConfig()
  let qty = parseInt(plan.qty, 10) || 1
  qty = Math.max(1, Math.min(cfg.maxQty, qty))
  plan.qty = qty
  plan.unitPrice = cfg.unitPrice
  plan.unitCredits = cfg.unitCredits
  plan.amount = Math.round(cfg.unitPrice * qty * 100) / 100
  plan.credits = Math.round(cfg.unitCredits * qty * 1000000) / 1000000
  plan.priceText = fmtCNY(plan.amount)
  plan.desc = packDescText(plan)
}

function packDescText(plan) {
  const c = Number(plan && plan.credits)
  if (isFinite(c) && c > 0) return tr('pay.pack.desc', { credits: fmtCredits(c) })
  return tr('pay.pack.descFallback')
}

/* 数量控件状态：amount = unit_price × quantity。 */
function renderPackTierControls() {
  const cfg = currentPackConfig()
  st.qty = Math.max(1, Math.min(cfg.maxQty, parseInt(st.plan && st.plan.qty, 10) || 1))
  st.qtyMax = cfg.maxQty
  st.unitLine = tr('pay.pack.unitLine', {
    price: fmtCNY(cfg.unitPrice),
    credits: fmtCredits(cfg.unitCredits),
    rate: fmtCredits(cfg.creditsPerCny)
  })
}

/* 弹框已打开但单包信息随后才从接口取到时：用接口数据校准当前加量包
   计划（单价 / Credits / 支付方式）与账单展示。仅在下单前调用，保证展示金额与
   即将创建的订单金额一致。 */
function syncPackFromApi(info) {
  const plan = st.plan
  if (!plan || plan.kind !== 'pack' || !info) return
  if (info.paymentMethodsKnown) {
    plan.paymentMethods = info.paymentMethods.slice()
    plan.paymentMethodsKnown = true
  }
  st.packCfg = currentPackConfig()
  normalizePackPlan(plan)
  st.descText = plan.desc
  st.amountText = plan.priceText
  renderPackTierControls()
}

/* 充值试算：实付读 pay_money，积分直接读取 credits。 */
function runPackTrial(amount) {
  if (st.trialPending) return
  const session = st.session
  st.trialPending = true
  apiFetch(CONFIG.PATH_AMOUNT_PREVIEW, {
    method: 'POST',
    body: JSON.stringify({ amount })
  }).then((body) => {
    if (session !== st.session) return
    const plan = st.plan
    if (!plan || plan.kind !== 'pack' || Number(plan.amount) !== Number(amount)) return
    const payMoney = Number(body && body.pay_money)
    const credits = Number(body && body.credits)
    if (isFinite(credits) && credits > 0) plan.credits = credits
    if (isFinite(payMoney) && payMoney > 0) plan.priceText = fmtCNY(payMoney)
    plan.desc = packDescText(plan)
    if (!st.open) return
    st.descText = plan.desc
    st.amountText = plan.priceText
    commit()
  }).catch(() => {
    /* 试算失败不阻塞下单：实付金额最终以下单响应为准 */
  }).then(() => {
    st.trialPending = false
  })
}

/* 弹框内切换购买数量：金额 / Credits 实时更新；作废旧订单，重新试算并以
   当前支付方式重新下单（旧二维码金额不符，不得继续使用）。 */
export function applyPackTierChange(raw) {
  const plan = st.plan
  if (!plan || plan.kind !== 'pack') return
  /* 配置信息同步中（下单前短等待）：忽略数量变更，同步完成后再操作。 */
  if (st.syncing) return
  const cfg = currentPackConfig()
  let qty = parseInt(raw, 10)
  if (isNaN(qty) || qty < 1) qty = 1
  if (qty > cfg.maxQty) qty = cfg.maxQty
  if (Number(plan.qty) === qty) { renderPackTierControls(); commit(); return }
  plan.qty = qty
  normalizePackPlan(plan)
  renderPackTierControls()
  st.descText = plan.desc
  st.amountText = plan.priceText
  stopPolling()
  st.session += 1
  st.orders = {}
  st.creating = false
  commit()
  runPackTrial(plan.amount)
  const m = st.selectedMethod || defaultMethodFor(plan)
  createOrder(m)
}

export function stepPackQty(delta) {
  applyPackTierChange((parseInt(st.qty, 10) || 1) + (parseInt(delta, 10) || 0))
}

/* ---------- 会员卡张数工具 ----------
   契约 §4：amount = price_amount_cny × quantity，由后端计算并在支付回调中
   再次校验，前端不能自行提交金额；此处 amount / credits 仅用于账单展示。 */
export function normalizeCardPlan(plan) {
  if (!plan) return
  const unitPrice = positiveNumber(plan.unitPrice)
  const unitCredits = positiveNumber(plan.unitCredits)
  plan.qty = clampCardQty(plan.qty)
  plan.unitPrice = unitPrice
  plan.unitCredits = unitCredits
  plan.maxQty = CARD_QTY_MAX
  plan.amount = Math.round(unitPrice * plan.qty * 100) / 100
  plan.credits = Math.round(unitCredits * plan.qty * 1000000) / 1000000
  plan.priceText = fmtCNY(plan.amount)
  plan.desc = cardDescText(plan)
}

function cardDescText(plan) {
  const c = Number(plan && plan.credits)
  if (isFinite(c) && c > 0) return tr('pay.card.desc', { credits: fmtCredits(c) })
  return tr('pay.card.descFallback')
}

/* 张数控件状态：单价行展示单张价格与单张 Credits。 */
function renderCardQtyControls() {
  const plan = st.plan
  if (!plan) return
  st.qty = clampCardQty(plan.qty)
  st.qtyMax = CARD_QTY_MAX
  st.unitLine = tr('pay.card.unitLine', {
    price: fmtCNY(plan.unitPrice),
    credits: fmtCredits(plan.unitCredits)
  })
}

/* 弹框内切换购买张数：作废旧订单（旧二维码金额不符）并以当前支付方式重新下单。 */
export function applyCardQtyChange(raw) {
  const plan = st.plan
  if (!plan || plan.kind !== 'card') return
  if (st.syncing) return
  const qty = clampCardQty(raw)
  if (Number(plan.qty) === qty) { renderCardQtyControls(); commit(); return }
  plan.qty = qty
  normalizeCardPlan(plan)
  renderCardQtyControls()
  st.descText = plan.desc
  st.amountText = plan.priceText
  stopPolling()
  st.session += 1
  st.orders = {}
  st.creating = false
  commit()
  createOrder(st.selectedMethod || defaultMethodFor(plan))
}

export function stepCardQty(delta) {
  applyCardQtyChange((parseInt(st.qty, 10) || 1) + (parseInt(delta, 10) || 0))
}

/* ---------- 企业订阅席位数量 ---------- */
function clampEnterpriseQty(plan, raw) {
  const min = Math.max(1, parseInt(plan && plan.minQty, 10) || 1)
  const max = Math.max(min, parseInt(plan && plan.maxQty, 10) || 10000)
  const qty = parseInt(raw, 10)
  return Math.max(min, Math.min(max, isNaN(qty) ? min : qty))
}

function enterpriseDescText(plan) {
  return tr('pay.enterprise.desc', {
    seats: plan.qty,
    credits: fmtCredits((Number(plan.unitCredits) || 0) * plan.qty)
  })
}

function normalizeEnterprisePlan(plan) {
  if (!plan) return
  plan.qty = clampEnterpriseQty(plan, plan.qty)
  plan.amount = Math.round((Number(plan.unitPrice) || 0) * plan.qty * 100) / 100
  plan.priceText = fmtCNY(plan.amount)
  plan.desc = enterpriseDescText(plan)
}

function renderEnterpriseQtyControls() {
  const plan = st.plan
  if (!plan) return
  st.qty = clampEnterpriseQty(plan, plan.qty)
  st.qtyMax = Math.max(st.qty, parseInt(plan.maxQty, 10) || 10000)
  st.unitLine = tr('pay.enterprise.unitLine', {
    price: fmtCNY(plan.unitPrice),
    credits: fmtCredits(plan.unitCredits)
  })
}

function normalizeEnterpriseSeatAddonPlan(plan) {
  if (!plan) return
  plan.qty = clampEnterpriseQty(plan, plan.qty)
  plan.desc = tr('pay.enterpriseAddon.desc', { seats: plan.qty })
}

function renderEnterpriseSeatAddonQtyControls() {
  const plan = st.plan
  if (!plan) return
  st.qty = clampEnterpriseQty(plan, plan.qty)
  st.qtyMax = Math.max(st.qty, parseInt(plan.maxQty, 10) || 10000)
  st.unitLine = tr('pay.enterpriseAddon.unitLine')
}

export function applyEnterpriseQtyChange(raw) {
  const plan = st.plan
  if (!plan || (plan.kind !== 'enterprise' && plan.kind !== 'enterprise_seat_addon') || st.syncing) return
  const qty = clampEnterpriseQty(plan, raw)
  if (Number(plan.qty) === qty) {
    if (plan.kind === 'enterprise_seat_addon') renderEnterpriseSeatAddonQtyControls()
    else renderEnterpriseQtyControls()
    commit()
    return
  }
  plan.qty = qty
  if (plan.kind === 'enterprise_seat_addon') {
    normalizeEnterpriseSeatAddonPlan(plan)
    renderEnterpriseSeatAddonQtyControls()
    st.amountText = ''
  } else {
    normalizeEnterprisePlan(plan)
    renderEnterpriseQtyControls()
    st.amountText = plan.priceText
  }
  st.descText = plan.desc
  stopPolling()
  st.session += 1
  st.orders = {}
  st.creating = false
  commit()
  createOrder(st.selectedMethod || defaultMethodFor(plan))
}

export function stepEnterpriseQty(delta) {
  applyEnterpriseQtyChange((parseInt(st.qty, 10) || 1) + (parseInt(delta, 10) || 0))
}

/* ---------- 企业共享资源包数量 ---------- */
function clampEnterprisePackQty(plan, raw) {
  const max = Math.max(1, parseInt(plan && plan.maxQty, 10) || 99)
  const qty = parseInt(raw, 10)
  return Math.max(1, Math.min(max, isNaN(qty) ? 1 : qty))
}

function enterprisePackDescText(plan) {
  return tr('pay.enterprisePack.desc', {
    credits: fmtCredits((Number(plan.unitCredits) || 0) * plan.qty)
  })
}

function normalizeEnterprisePackPlan(plan) {
  if (!plan) return
  plan.qty = clampEnterprisePackQty(plan, plan.qty)
  plan.amount = Math.round((Number(plan.unitPrice) || 0) * plan.qty * 100) / 100
  plan.credits = Math.round((Number(plan.unitCredits) || 0) * plan.qty * 1000000) / 1000000
  plan.priceText = fmtCNY(plan.amount)
  plan.desc = enterprisePackDescText(plan)
}

function renderEnterprisePackQtyControls() {
  const plan = st.plan
  if (!plan) return
  st.qty = clampEnterprisePackQty(plan, plan.qty)
  st.qtyMax = Math.max(1, parseInt(plan.maxQty, 10) || 99)
  st.unitLine = tr('pay.enterprisePack.unitLine', {
    price: fmtCNY(plan.unitPrice),
    credits: fmtCredits(plan.unitCredits)
  })
}

export function applyEnterprisePackQtyChange(raw) {
  const plan = st.plan
  if (!plan || plan.kind !== 'enterprise_pack' || st.syncing) return
  const qty = clampEnterprisePackQty(plan, raw)
  if (Number(plan.qty) === qty) { renderEnterprisePackQtyControls(); commit(); return }
  plan.qty = qty
  normalizeEnterprisePackPlan(plan)
  renderEnterprisePackQtyControls()
  st.descText = plan.desc
  st.amountText = plan.priceText
  stopPolling()
  st.session += 1
  st.orders = {}
  st.creating = false
  commit()
  createOrder(st.selectedMethod || defaultMethodFor(plan))
}

export function stepEnterprisePackQty(delta) {
  applyEnterprisePackQtyChange((parseInt(st.qty, 10) || 1) + (parseInt(delta, 10) || 0))
}

/* ---------- 下单和二维码 ---------- */
/* 二维码区域状态切换：下单请求期间展示加载动画；失败时清空 */
function setQrLoading() {
  st.qrLoading = true
  st.qrText = ''
}
function setQrAreaEmpty() {
  st.qrLoading = false
  st.qrText = ''
}

/* 在账单视图内呈现某个已创建订单的收款码（不切换视图）。
   应付金额展示口径：
   - 加量包：优先服务端返回的 pay_money（折扣后实付），缺省按充值面值；
     下单响应携带的 credits 同步记录，供支付成功页展示；
   - 订阅套餐：优先服务端返回的 amount（含汇率换算），缺省保持本地文案。 */
function presentOrder(method) {
  const o = st.orders[method]
  if (!o || !metaFor(method)) return
  st.tradeNo = o.tradeNo
  st.method = method
  st.expiresAt = o.expiresAt
  if (o.credits != null) st.lastCredits = o.credits
  if (st.plan && st.plan.kind === 'pack') {
    st.amountText = o.payMoney != null ? fmtCNY(o.payMoney) : fmtCNY(st.plan.amount)
  } else if (o.amount != null) {
    st.amountText = fmtCNY(o.amount)
  }
  st.qrTip = methodTip(method)
  st.statusText = tr('pay.status.waiting')
  st.qrLoading = false
  st.qrText = o.qrText
  updateCountdown()
  commit()
}

/* 激活某个支付方式下的订单：停止旧轮询 → 展示收款码 → 对新订单开始轮询 */
function activateOrder(method) {
  stopPolling()
  presentOrder(method)
  startPolling(metaFor(method))
}

/* 切换支付方式：该方式已有订单则直接切换展示；否则创建新订单。
   套餐信息同步中（加量包下单前短等待）禁止切换，防止以旧单价创建订单。 */
export function switchToMethod(method) {
  if (!method || st.creating || st.syncing) return
  if (!isMethodEnabled(st.plan, method)) return
  setPayError('')
  selectMethod(method)
  if (st.orders[method]) {
    activateOrder(method)
  } else {
    stopPolling()
    st.statusText = ''
    commit()
    createOrder(method)
  }
}

/* 组装下单请求体：
   - 订阅套餐：{ plan_id }（契约见 subscription-purchase-api.md）
   - 加量包：{ amount }（充值面值，契约见 topup-credits-api.md）。
     不传 plan_id / quantity：充值接口按面值计费并返回 credits。
   - 会员卡：{ plan_id, quantity }（契约见 membership-card-api.md §4）。
     不传 amount：金额由后端按单张价 × 张数计算。 */
function buildOrderPayload(plan) {
  if (plan.kind === 'pack') {
    return { amount: plan.amount }
  }
  if (plan.kind === 'card') {
    return buildCardOrderPayload(plan.id, plan.qty)
  }
  if (plan.kind === 'enterprise') {
    return { plan_id: plan.id, seat_quantity: plan.qty }
  }
  if (plan.kind === 'enterprise_seat_addon') {
    return { seat_quantity: plan.qty }
  }
  if (plan.kind === 'enterprise_pack') {
    return { quantity: plan.qty }
  }
  return { plan_id: plan.id }
}

export function createOrder(method) {
  if (st.creating) return
  const plan = st.plan
  const meta = metaFor(method)
  if (!meta || !plan) {
    setPayError(tr('pay.errors.incompletePlan'))
    commit()
    return
  }
  if (!isMethodEnabled(plan, method)) {
    setPayError(tr('pay.errors.noMethod'))
    setQrAreaEmpty()
    commit()
    return
  }
  st.creating = true
  const session = st.session
  function stale() { return session !== st.session }
  setPayError('')
  /* 打开弹框即下单：请求期间二维码区域显示加载状态 */
  setQrLoading()
  st.statusText = tr('pay.status.creating')
  commit()

  function proceed(p) {
    st.plan = p
    apiFetch(meta.payPath, {
      method: 'POST',
      body: JSON.stringify(buildOrderPayload(p))
    }).then((body) => {
      if (stale()) return
      const d = (body && body.data) || {}
      /* 契约：必须返回 trade_no 与 qr_code；缺失即在模态内明确报错 */
      if (!d.qr_code || !d.trade_no) throw bizError(tr('pay.errors.qrMissing'))
      const credits = Number(d.credits)
      const payMoney = Number(d.pay_money)
      st.orders[method] = {
        tradeNo: d.trade_no,
        qrText: d.qr_code,
        expiresAt: (d.expires_at || 0) * 1000,
        amount: d.amount != null ? d.amount : null,
        payMoney: isFinite(payMoney) && payMoney > 0 ? payMoney : null,
        credits: isFinite(credits) && credits > 0 ? credits : null
      }
      /* 加量包积分以本次下单响应为准；仅旧后端缺字段时保留本地展示值。 */
      if (p.kind === 'pack') {
        if (isFinite(credits) && credits > 0) p.credits = credits
        if (isFinite(payMoney) && payMoney > 0) p.priceText = fmtCNY(payMoney)
      }
      /* 防御：请求期间支付方式已被改变（正常流程中按钮已禁用） */
      if (st.selectedMethod !== method) return
      activateOrder(method)
    }).catch((err) => {
      if (stale()) return
      if (err && err.status === 401) {
        // 登录态失效：保存选择，程序化触发登录（不离开当前页，
        // 弹窗被拦截时由 auth store 显示可点击的提示条）
        savePending(st.plan)
        closePayModal()
        showToast(tr('pay.flow.authExpired'))
        ensureLoggedIn()
      } else {
        /* 网络 / 非 200 / 业务失败：在模态内显示，绝不吞掉 */
        setPayError((err && err.message) || tr('pay.errors.createFailed'))
        setQrAreaEmpty()
        st.statusText = ''
        commit()
      }
    }).then(() => {
      if (stale()) return
      st.creating = false
      commit()
    })
  }

  if (plan.id != null) {
    proceed(plan)
    return
  }
  /* 加量包下单不需要套餐 id（充值接口按面值计费），直接下单 */
  if (plan.kind === 'pack' || plan.kind === 'enterprise_pack') {
    proceed(plan)
    return
  }
  /* 会员卡必须携带套餐 id（来自 /api/membership-card/public/plans）；
     缺失时在弹窗内明确报错，不复用订阅套餐的兜底补全（接口不同）。 */
  if (plan.kind === 'card' || plan.kind === 'enterprise') {
    st.creating = false
    setPayError(tr('pay.errors.planIdMissing'))
    setQrAreaEmpty()
    st.statusText = ''
    commit()
    return
  }

  /* 缺套餐 id 的兜底（仅订阅套餐可能出现；加量包 id 恒来自本地配置）：
     先查本地缓存，仍没有才可见地拉取一次，失败在弹窗内明确报错。 */
  const cached = plansCache ? findPlan(plansCache, plan.title) : null
  if (cached && cached.id != null) {
    const merged = clonePlan(plan, plan.kind)
    merged.id = cached.id
    if (!merged.paymentMethods.length) merged.paymentMethods = (cached.paymentMethods || []).slice()
    proceed(merged)
    return
  }
  st.statusText = tr('pay.status.syncingPlan')
  commit()
  ensurePlans(true).then((list) => {
    if (stale()) return
    const hit = findPlan(list, plan.title)
    if (!hit || hit.id == null) throw bizError(tr('pay.errors.planIdMissing'))
    const m2 = clonePlan(plan, plan.kind)
    m2.id = hit.id
    if (!m2.paymentMethods.length) m2.paymentMethods = (hit.paymentMethods || []).slice()
    proceed(m2)
  }).catch((err) => {
    if (stale()) return
    st.creating = false
    setPayError((err && err.message) || tr('pay.errors.createFailed'))
    setQrAreaEmpty()
    st.statusText = ''
    commit()
  })
}

/* ---------- 订单状态轮询 ---------- */
function updateCountdown() {
  if (!st.expiresAt) { st.remainMs = 0; return }
  const remain = st.expiresAt - Date.now()
  st.remainMs = remain > 0 ? remain : 0
}

/* 支付成功：
   - 加量包：展示本次到账 credits（来自下单 / 轮询响应，不做 quota 换算），
     并异步刷新用户信息与充值记录（契约 §7，非阻塞）；
   - 会员卡：展示本次生成张数（轮询响应 quantity，缺省取下单张数），
     异步刷新「我的会员卡」并广播 oort-card-purchased（契约 §8，非阻塞）。 */
function handleSuccess() {
  stopPolling()
  clearPending()
  const kind = st.plan && st.plan.kind
  const isPack = kind === 'pack'
  const isCard = kind === 'card'
  const isEnterprise = kind === 'enterprise'
  const isEnterpriseAddon = kind === 'enterprise_seat_addon'
  const isEnterprisePack = kind === 'enterprise_pack'
  const credits = Number(st.lastCredits)
  const cardCount = Number(st.lastCardQty) > 0
    ? Number(st.lastCardQty)
    : (parseInt(st.plan && st.plan.qty, 10) || 1)
  let msg
  if (isEnterprisePack) {
    msg = tr('pay.flow.paySuccessEnterprisePack')
    st.successMsg = tr('pay.success.msgEnterprisePack', {
      credits: fmtCredits((Number(st.plan.unitCredits) || 0) * (Number(st.plan.qty) || 1))
    })
  } else if (isEnterpriseAddon) {
    msg = tr('pay.flow.paySuccessEnterpriseAddon')
    st.successMsg = tr('pay.success.msgEnterpriseAddon', { seats: Number(st.plan.qty) || 1 })
  } else if (isEnterprise) {
    msg = tr('pay.flow.paySuccessEnterprise')
    st.successMsg = tr('pay.success.msgEnterprise')
  } else if (isCard) {
    msg = tr('pay.flow.paySuccessCard', { count: cardCount })
    st.successMsg = tr('pay.success.msgCard', { count: cardCount })
  } else if (isPack && isFinite(credits) && credits > 0) {
    msg = tr('pay.flow.paySuccessPackCredits', { credits: fmtCredits(credits) })
    st.successMsg = tr('pay.success.msgPack', { credits: fmtCredits(credits) })
  } else {
    msg = isPack ? tr('pay.flow.paySuccessPack') : tr('pay.flow.paySuccessSub')
    st.successMsg = ''
  }
  showPayView('success')
  commit()
  showToast(msg)
  if (isPack) {
    /* 契约 §7：成功后刷新 /api/user/self 与 /api/user/topup/self（非阻塞） */
    apiFetch(CONFIG.PATH_USER_SELF).catch(() => { /* 非阻塞 */ })
    apiFetch(CONFIG.PATH_TOPUP_SELF).catch(() => { /* 非阻塞 */ })
  }
  if (isCard) {
    /* 契约 §8：支付成功后刷新「我的会员卡」，兑换码由账户页面板展示 */
    apiFetch(CARD_PATH.self).catch(() => { /* 非阻塞 */ })
    if (browser) {
      try {
        document.dispatchEvent(new CustomEvent('oort-card-purchased', {
          detail: { quantity: cardCount }
        }))
      } catch (e) { /* 忽略事件异常 */ }
    }
  }
  if ((isEnterprise || isEnterpriseAddon) && browser) {
    try { document.dispatchEvent(new CustomEvent('oort-enterprise-subscription-purchased')) } catch (e) { /* 忽略 */ }
  }
  if (isEnterprisePack && browser) {
    try { document.dispatchEvent(new CustomEvent('oort-enterprise-resource-pack-purchased')) } catch (e) { /* 忽略 */ }
  }
  if (!isPack && !isCard && !isEnterprise && !isEnterpriseAddon && !isEnterprisePack) {
    /* 个人套餐支付成功后立即重新获取后端可升级列表，移除刚购买的同级套餐。 */
    refreshUpgradeOptions()
  }
}

function handleExpired(msg) {
  stopPolling()
  st.expiredMsg = msg || tr('pay.expired.msgQr')
  showPayView('expired')
  commit()
}

function startPolling(meta) {
  stopPolling()
  st.pollErrors = 0
  const isCard = !!(st.plan && st.plan.kind === 'card')
  const path = meta.queryPath + encodeURIComponent(st.tradeNo)
  /* 会员卡契约 §5 建议每 2.5 秒轮询；订阅 / 加量包沿用 CONFIG.POLL_INTERVAL */
  const interval = isCard ? CARD_POLL_INTERVAL : CONFIG.POLL_INTERVAL

  function tick() {
    if (!st.open) { stopPolling(); return }
    if (st.expiresAt && Date.now() >= st.expiresAt) {
      handleExpired(tr('pay.expired.msgQr'))
      return
    }
    apiFetch(path).then((body) => {
      st.pollErrors = 0
      const d = (body && body.data) || {}
      /* 充值状态响应携带 credits：记录供成功页展示 */
      const credits = Number(d.credits)
      if (isFinite(credits) && credits > 0) st.lastCredits = credits
      /* 会员卡状态响应携带本次生成张数（契约 §5）：记录供成功页展示 */
      const doneQty = Number(d.quantity)
      if (isCard && isFinite(doneQty) && doneQty > 0) st.lastCardQty = doneQty
      if (d.status === 'success') handleSuccess()
      else if (d.status === 'expired') handleExpired(tr('pay.expired.msgOrder'))
      else { st.statusText = tr('pay.status.waiting'); commit() }
    }).catch((err) => {
      if (err && err.status === 401) {
        stopPolling()
        st.statusText = tr('pay.status.pollAuthExpired')
        commit()
        return
      }
      st.pollErrors += 1
      if (st.pollErrors >= CONFIG.POLL_MAX_ERRORS) {
        stopPolling()
        st.statusText = tr('pay.status.pollFailed')
        commit()
      }
    })
  }

  pollTimer = setInterval(tick, interval)
  cdTimer = setInterval(() => {
    updateCountdown()
    commit()
  }, 1000)
}

export function stopPolling() {
  if (pollTimer) clearInterval(pollTimer)
  if (cdTimer) clearInterval(cdTimer)
  pollTimer = null
  cdTimer = null
}

/* 「重新下单」：清空旧订单缓存，用当前可用支付方式立即创建新订单 */
export function retryOrder() {
  setPayError('')
  st.session += 1
  st.orders = {}
  st.creating = false
  const m = (st.selectedMethod && isMethodEnabled(st.plan, st.selectedMethod))
    ? st.selectedMethod
    : defaultMethodFor(st.plan)
  selectMethod(m)
  showPayView('bill')
  commit()
  createOrder(m)
}

/* ---------- 购买入口（含登录跳转） ----------
   统一时序：
   1. savePending 保存当前选择（含套餐标识 / 加量包数量）；
   2. 未登录：用户手势内 loginRedirect(true) 新标签页打开登录页
      （被拦截时退化为当前页跳转，pending 保证回跳后自动恢复）；
      登录成功后由 oort-auth:refreshed（跨页）或页面加载 pending
      消费（同页回跳）自动打开支付弹窗，无需再次点击；
   3. 已登录：直接打开支付弹窗，打开即以默认支付方式创建订单，
      立即展示账单 + 收款码，中间不插入任何套餐拉取等待或额外确认步骤。 */
export function startResumeFlow(plan, userGesture) {
  savePending(plan)

  let loggedIn = false
  try { loggedIn = isLoggedIn() } catch (e) { loggedIn = !!getToken() }
  if (!loggedIn) {
    showToast(tr('pay.flow.needLogin'))
    if (userGesture) {
      /* 用户手势内：新标签页打开登录页；被拦截时 auth store 退化为当前页跳转 */
      loginRedirect(true)
    } else {
      ensureLoggedIn()
    }
    return
  }

  clearPending()
  try {
    openPayModal(plan)
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[subscription] 打开支付弹窗失败：', err)
    showToast(tr('pay.flow.openModalFailed'))
  }
}

/* 本地立即解析订阅套餐：优先已有缓存，其次按钮数据 + FALLBACK_PLANS。
   绝不等待套餐列表接口。
   btnData：{ planId, planTitle }（原按钮 dataset.planId / dataset.planTitle）。 */
export function resolveLocalPlan(selector, btnData) {
  const sel = String(selector == null ? '' : selector).trim()
  const btnTitle = (btnData && btnData.planTitle) || ''

  /* upgrade-options 已返回完整公开套餐字段时直接使用，确保名称可配置的套餐
     （如 Plus）也能在首次点击时携带真实 id、价格和支付方式下单。 */
  if (btnData && btnData.plan) {
    const src = btnData.plan
    const price = src.price_amount_cny != null ? src.price_amount_cny : src.price_amount
    const methods = Array.isArray(src.payment_methods) ? src.payment_methods : []
    return clonePlan({
      id: src.id,
      title: src.title || btnTitle,
      priceAmount: Number(price) || 0,
      priceText: fmtCNY(price),
      desc: describePlan(src, price),
      paymentMethods: methods,
      paymentMethodsKnown: true,
      totalCredits: Number(src.total_credits) || 0,
      unlimited: Number(src.total_amount) === 0
    }, 'subscribe')
  }

  if (plansCache && plansCache.length) {
    const hit = findPlan(plansCache, sel || btnTitle)
    if (hit) return clonePlan(hit, 'subscribe')
  }

  const title = sel || btnTitle
  let base = null
  for (let i = 0; i < FALLBACK_PLANS.length; i++) {
    if (String(FALLBACK_PLANS[i].title).toLowerCase() === String(title).toLowerCase()) {
      base = FALLBACK_PLANS[i]
      break
    }
  }
  if (!base && FALLBACK_PLANS.length === 1) base = FALLBACK_PLANS[0]
  if (!base) return null

  const plan = clonePlan(base, 'subscribe')
  if (btnData && btnData.planId) {
    const pid = parseInt(btnData.planId, 10)
    if (!isNaN(pid)) plan.id = pid
  }
  return plan
}

export function startSubscribe(selector, btnData) {
  const plan = resolveLocalPlan(selector, btnData)
  if (!plan) {
    showToast(selector
      ? tr('pay.flow.planNotFound', { selector })
      : tr('pay.flow.noPurchasable'))
    return
  }
  /* 主链路：登录检查 → （未登录去登录 / 已登录直接开支付弹窗），零阻塞 */
  startResumeFlow(plan, true)
  /* 并行补全真实 id / 支付方式（非阻塞，失败不影响主链路） */
  enrichSubscribePlanAsync(plan)
}

/* ---------- Credit Pack 增购 ---------- */
export function buildPackPlan(quantity) {
  const plan = {
    kind: 'pack',
    id: null, // 充值接口不需要套餐 id
    title: tr('pay.pack.title'),
    priceText: '',
    desc: '',
    paymentMethods: ((packApiCache && packApiCache.paymentMethods) || []).slice(),
    paymentMethodsKnown: !!(packApiCache && packApiCache.paymentMethodsKnown),
    qty: parseInt(quantity, 10) || 1,
    amount: 0,
    credits: 0,
    unitCredits: 0,
    unitPrice: 0,
    maxQty: PACK_DEFAULTS.maxQty
  }
  normalizePackPlan(plan)
  return plan
}

export function startPackPurchase(quantity) {
  startResumeFlow(buildPackPlan(quantity), true)
}

/* 供其他页面（如账户页用量明细）直接唤起加量包支付弹框。
   opts.quantity / opts.qty：购买包数。（原 window.OortSubscription.openPackModal） */
export function openPackModal(opts) {
  const quantity = opts && (opts.quantity || opts.qty)
  startResumeFlow(buildPackPlan(quantity), true)
}

/* ---------- 会员卡购买 ----------
   cardPlan：/api/membership-card/public/plans 返回的原始商品对象
   （id / title / subtitle / price_amount_cny / total_credits / payment_methods）。 */
export function buildCardPlan(cardPlan, quantity) {
  const src = cardPlan || {}
  const price = src.price_amount_cny != null ? src.price_amount_cny : src.price_amount
  const methods = Object.prototype.toString.call(src.payment_methods) === '[object Array]'
    ? src.payment_methods
    : []
  const plan = {
    kind: 'card',
    id: src.id == null ? null : src.id,
    title: src.title || tr('pay.card.title'),
    priceText: '',
    desc: src.subtitle || '',
    paymentMethods: methods.slice(),
    paymentMethodsKnown: !!methods.length,
    qty: clampCardQty(quantity),
    amount: 0,
    credits: 0,
    unitCredits: positiveNumber(src.total_credits),
    unitPrice: positiveNumber(price),
    maxQty: CARD_QTY_MAX
  }
  normalizeCardPlan(plan)
  return plan
}

/* 会员卡购买入口：与订阅 / 加量包共用登录跳转与支付弹窗链路。 */
export function startCardPurchase(cardPlan, quantity) {
  const plan = buildCardPlan(cardPlan, quantity)
  if (plan.id == null) {
    showToast(tr('pay.errors.planIdMissing'))
    return
  }
  startResumeFlow(plan, true)
}

/* ---------- 初始化：URL 参数与中断流程恢复 ---------- */
export function consumeUrlParams() {
  if (!browser || !location.search) return null
  const params = new URLSearchParams(location.search)
  const sub = params.get('subscribe') || params.get('plan') || ''
  if (!sub) return null
  params.delete('subscribe')
  params.delete('plan')
  const qs = params.toString()
  try {
    history.replaceState(null, '', location.pathname + (qs ? '?' + qs : '') + location.hash)
  } catch (e) { /* 忽略 */ }
  return sub
}

/* 登录后自动恢复：读取 pending 并直达支付弹窗（订阅 / 加量包通用）。
   返回是否消费了 pending。 */
export function tryResumePending() {
  const p = readPending()
  if (!p) return false
  clearPending()
  openPayModal(p)
  return true
}

/* ---------- 定价页：展示全部公开套餐，仅允许购买后端返回的升级套餐 ---------- */
export function refreshUpgradeOptions() {
  if (!browser) return Promise.resolve(null)
  const seq = ++upgradeRequestSeq
  if (!isLoggedIn()) {
    upgradeOptions.set({ status: 'public', currentPlan: null, plans: null, purchasableIds: [], message: '' })
    return Promise.resolve(null)
  }

  upgradeOptions.set({ status: 'loading', currentPlan: null, plans: null, purchasableIds: [], message: '' })
  return Promise.all([
    apiFetch(CONFIG.PATH_PLANS, { headers: {}}),
    apiFetch(CONFIG.PATH_UPGRADE_OPTIONS)
  ]).then(([publicBody, upgradeBody]) => {
    if (seq !== upgradeRequestSeq) return null
    const data = (upgradeBody && upgradeBody.data) || {}
    const currentPlan = data.current_plan || null
    const publicPlans = publicBody && publicBody.data
    if (!Array.isArray(publicPlans) || !Array.isArray(data.upgrade_plans)) {
      throw new TypeError('套餐列表响应格式无效')
    }
    const plans = publicPlans.filter(plan => plan && plan.id != null)
    if (currentPlan && currentPlan.id != null && !plans.some(plan => String(plan.id) === String(currentPlan.id))) {
      plans.push(currentPlan)
    }
    plans.sort((a, b) => Number(a.level) - Number(b.level) || Number(a.id) - Number(b.id))
    const purchasableIds = data.upgrade_plans
      .map(item => item && item.plan ? item.plan : item)
      .filter(plan => plan && plan.id != null)
      .map(plan => String(plan.id))
    upgradeOptions.set({ status: 'ready', currentPlan, plans, purchasableIds, message: '' })
    return data
  }).catch((err) => {
    if (seq !== upgradeRequestSeq) return null
    upgradeOptions.set({
      status: 'error',
      currentPlan: null,
      plans: null,
      purchasableIds: [],
      message: (err && err.message) || tr('toast.requestFailed')
    })
    return null
  })
}

/* ---------- 模块初始化（根布局 onMount 调用一次，幂等） ---------- */
export function initSubscription() {
  if (!browser || inited) return
  inited = true

  /* 登录用户：定价页仅开放后端允许升级的套餐购买按钮 */
  refreshUpgradeOptions()
  document.addEventListener('oort-auth:logout', () => {
    upgradeRequestSeq += 1
    upgradeOptions.set({ status: 'public', currentPlan: null, plans: null, purchasableIds: [], message: '' })
  })

  /* 页面加载先读取 /api/status 的 credits_per_cny，再预热加量包配置：
     - 定价页 .credit-pack 展示区（单价 / Credits）用公开接口数据刷新；
     - 后续打开加量包弹框时可直接使用缓存，无需等待。
     失败 / 无数据时保持页面静态默认配置，不受影响。 */
  fetchCreditsRate().then(() => {
    return fetchPackPlanInfo()
  }).then((cfg) => {
    if (cfg) refreshPackDisplay(cfg)
  })

  // 路径 A（跨页通知）：新标签页登录成功后，原页面经
  // BroadcastChannel/storage → auth silentRefresh → oort-auth:refreshed，
  // 自动恢复中断的订阅 / 加量包购买，直达支付弹窗。
  document.addEventListener('oort-auth:refreshed', () => {
    refreshUpgradeOptions()
    fetchCreditsRate(true).then(() => {
      return fetchPackPlanInfo(true)
    }).then((cfg) => {
      if (cfg) refreshPackDisplay(cfg)
    })
    tryResumePending()
  })

  const sub = consumeUrlParams()
  if (sub) {
    if (sub === '1' || sub === 'true' || sub === 'resume') {
      if (!tryResumePending()) {
        showToast(tr('pay.flow.noPending'))
      }
    } else {
      startSubscribe(sub, null)
    }
    return
  }
  // 路径 B（同页回跳兜底）：未登录点击时被拦截退化为当前页跳转登录，
  // 登录成功回跳本站 → 页面加载时 auth 消费回调令牌并校验，
  // 此处检测到 pending 且已登录即自动打开支付弹窗，无需再次点击。
  // 页面加载时仅当存在明确的中断购买意图才自动继续；
  // ensureLoggedIn 内部带防重复跳转标记，未登录时不会反复触发登录跳转。
  const pending = readPending()
  if (pending) {
    ensureLoggedIn().then((loggedIn) => {
      if (!loggedIn) return // 未登录不打扰用户，选择已保留
      tryResumePending()
    })
  }
}
