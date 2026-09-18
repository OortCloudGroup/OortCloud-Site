/* ==========================================================================
   企业订阅 API
   --------------------------------------------------------------------------
   企业订阅与个人订阅完全独立，契约见后端 docs/enterprise-subscription-api.md。
   公开套餐无需登录；支付与订单状态由 subscription store 的统一支付弹窗编排。
   ========================================================================== */
import { apiFetch } from './client.js'

export const ENTERPRISE_PATH = {
  plans: '/api/enterprise-subscription/public/plans',
  self: '/api/enterprise-subscription/self',
  members: '/api/enterprise-subscription/members',
  seats: '/api/enterprise-subscription/seats',
  orders: '/api/enterprise-subscription/orders',
  alipayPay: '/api/enterprise-subscription/alipay/pay',
  wechatPay: '/api/enterprise-subscription/wechat/pay',
  alipayQuery: '/api/enterprise-subscription/alipay/',
  wechatQuery: '/api/enterprise-subscription/wechat/',
  seatAddonAlipayPay: '/api/enterprise-subscription/seat-addon/alipay/pay',
  seatAddonWechatPay: '/api/enterprise-subscription/seat-addon/wechat/pay',
  seatAddonAlipayQuery: '/api/enterprise-subscription/seat-addon/alipay/',
  seatAddonWechatQuery: '/api/enterprise-subscription/seat-addon/wechat/',
  resourcePack: '/api/enterprise-subscription/public/resource-pack',
  resourcePackAlipayPay: '/api/enterprise-subscription/resource-pack/alipay/pay',
  resourcePackWechatPay: '/api/enterprise-subscription/resource-pack/wechat/pay',
  resourcePackAlipayQuery: '/api/enterprise-subscription/resource-pack/alipay/',
  resourcePackWechatQuery: '/api/enterprise-subscription/resource-pack/wechat/'
}

export function getEnterprisePlans() {
  return apiFetch(ENTERPRISE_PATH.plans).then(body => (body && body.data) || [])
}

export function getEnterpriseOverview() {
  return apiFetch(ENTERPRISE_PATH.self).then(body => (body && body.data) || null)
}

export function getEnterpriseMembers() {
  return apiFetch(ENTERPRISE_PATH.members).then(body => (body && body.data) || [])
}

export function updateEnterpriseSeat(userId, assigned) {
  return apiFetch(ENTERPRISE_PATH.seats, {
    method: 'PUT',
    body: JSON.stringify({ user_id: Number(userId), assigned: Boolean(assigned) })
  })
}

export function getEnterpriseOrders(page = 1, pageSize = 20) {
  const query = new URLSearchParams({ page: String(page), page_size: String(pageSize) })
  return apiFetch(ENTERPRISE_PATH.orders + '?' + query.toString()).then(body => (body && body.data) || {
    list: [], total: 0, page: 1, page_size: pageSize
  })
}

export function getEnterpriseResourcePack() {
  return apiFetch(ENTERPRISE_PATH.resourcePack).then(body => (body && body.data) || null)
}
