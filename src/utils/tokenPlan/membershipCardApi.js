/* ==========================================================================
   会员卡接口封装（契约：apaas-token-gateway-newapi/docs/membership-card-api.md）
   --------------------------------------------------------------------------
   业务规则要点：
   - 一张会员卡对应一个 duration_unit=month / duration_value=1 的订阅套餐；
     价格、Credits、用户分组与额度重置规则均读取订阅套餐配置。
   - 支付成功后按购买数量生成会员卡，不会立即创建订阅；
     卡自生成起 90 天内有效，每张只能兑换一次。
   - 会员卡绑定购买账号，不支持转让；仅购买账号可查看兑换码并兑换。
   - 当前账号存在生效中的订阅时不能兑换；兑换成功后一个月订阅立即生效。
   - 仅支持国内支付宝当面付与微信 Native 扫码。

   本文件只做「接口路径 + 请求 + 错误码映射」，不持有响应式状态；
   状态与业务编排在 $lib/stores/membershipCard.js，
   下单 / 出码 / 轮询复用 $lib/stores/subscription.js 的支付弹窗链路。
   ========================================================================== */
import { apiFetch } from './client.js'
import { tr } from './i18n.js'

/* ---------- 接口路径（契约 §2） ---------- */
export const CARD_PATH = {
  /* 会员卡商品列表（无需登录） */
  plans: '/api/membership-card/public/plans',
  /* 我的会员卡（登录，仅本人卡片） */
  self: '/api/membership-card/self',
  /* 兑换会员卡（登录，仅限购买账号） */
  redeem: '/api/membership-card/redeem',
  /* 支付宝当面付：下单 / 状态 */
  alipayPay: '/api/membership-card/alipay/pay',
  alipayQuery: '/api/membership-card/alipay/',
  /* 微信 Native：下单 / 状态 */
  wechatPay: '/api/membership-card/wechat/pay',
  wechatQuery: '/api/membership-card/wechat/'
}

/* 购买张数范围（契约 §4：quantity 1-99） */
export const CARD_QTY_MIN = 1
export const CARD_QTY_MAX = 99

/* 会员卡订单状态轮询间隔（契约 §5：建议每 2.5 秒） */
export const CARD_POLL_INTERVAL = 2500

/* 兑换码长度（契约 §6：32 位） */
export const CARD_KEY_LEN = 32

/* 卡状态 / 订单状态枚举 */
export const CARD_STATUS = ['unused', 'redeemed', 'expired']
export const CARD_ORDER_STATUS = ['pending', 'success', 'failed', 'expired']

/* ---------- 机器错误码 → i18n key（契约 §7） ----------
   前端必须匹配 code，不要匹配中文 message。 */
const CARD_ERROR_KEYS = {
  membership_card_invalid_params: 'card.errors.invalidParams',
  membership_card_payment_disabled: 'card.errors.paymentDisabled',
  membership_card_payment_failed: 'card.errors.paymentFailed',
  membership_card_order_not_found: 'card.errors.orderNotFound',
  membership_card_not_found: 'card.errors.notFound',
  membership_card_owner_mismatch: 'card.errors.ownerMismatch',
  membership_card_redeemed: 'card.errors.redeemed',
  membership_card_expired: 'card.errors.expired',
  membership_card_active_subscription: 'card.errors.activeSubscription',
  membership_card_redeem_failed: 'card.errors.redeemFailed'
}

/* 张数收敛到 1-99（非法输入回退 1） */
export function clampCardQty(raw) {
  let q = parseInt(raw, 10)
  if (!isFinite(q) || isNaN(q) || q < CARD_QTY_MIN) q = CARD_QTY_MIN
  if (q > CARD_QTY_MAX) q = CARD_QTY_MAX
  return q
}

/* 取业务机器错误码（apiFetch 已把 body.code 挂到 Error.code） */
export function cardErrorCode(err) {
  return String((err && err.code) || '')
}

/* 是否为指定机器错误码 */
export function isCardErrorCode(err, code) {
  return cardErrorCode(err) === code
}

/* 错误码 → 本地化文案；未收录的 code 退回服务端 message，再退回通用文案 */
export function cardErrorMessage(err) {
  const key = CARD_ERROR_KEYS[cardErrorCode(err)]
  if (key) return tr(key)
  return (err && err.message) || tr('card.errors.generic')
}

/* 判断是否「已有生效订阅」导致的兑换失败（UI 可据此引导用户） */
export function isActiveSubscriptionError(err) {
  return isCardErrorCode(err, 'membership_card_active_subscription')
}

/* ---------- 请求封装 ---------- */

/* 会员卡商品列表（公开，无需登录）：GET /api/membership-card/public/plans */
export function requestCardPlans() {
  return apiFetch(CARD_PATH.plans)
}

/* 我的会员卡（登录）：GET /api/membership-card/self */
export function requestMyCards() {
  return apiFetch(CARD_PATH.self)
}

/* 兑换会员卡（登录，仅购买账号）：POST /api/membership-card/redeem { key } */
export function requestRedeemCard(key) {
  return apiFetch(CARD_PATH.redeem, {
    method: 'POST',
    body: JSON.stringify({ key: String(key || '').trim() })
  })
}

/* 创建购买订单（契约 §4）：POST /api/membership-card/{alipay|wechat}/pay
   请求体 { plan_id, quantity }；金额由后端按 price_amount_cny × quantity 计算，
   前端不得自行提交 amount。 */
export function buildCardOrderPayload(planId, quantity) {
  return { plan_id: planId, quantity: clampCardQty(quantity) }
}

/* 订单状态查询地址：GET /api/membership-card/{alipay|wechat}/{tradeNo} */
export function cardQueryUrl(method, tradeNo) {
  const base = method === 'alipay_direct' ? CARD_PATH.alipayQuery : CARD_PATH.wechatQuery
  return base + encodeURIComponent(tradeNo || '')
}
