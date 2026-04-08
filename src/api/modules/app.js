
import { useSessionStorage } from '@vueuse/core'
import request from '../request'

const token = useSessionStorage('accessToken', '')
const tenantId = useSessionStorage('tenantId', '')
const headers = {
  'Content-Type': 'application/json',
  tenantId: tenantId.value,
  accesstoken: token.value,
  appid: 'e1a36857e77c4e238703a06e0e57e7a0',
  secretkey: '557d8735b655426cb21a4771b901de61',
  requesttype: 'app'
}
// 获取套餐列表
export const mealList = (data) => {
  return request('/apaas-appstore/openapis/platformPackages/v1/public_list', {
    method: 'POST',
    body: data
  })
}

// 套餐详情
export const mealDetail = (data) => {
  return request('/apaas-appstore/openapis/platformPackages/v1/public_detail', {
    method: 'POST',
    body: data
  })
}

// 获取应用列表
export const appList = (data) => {
  return request('/apaas-appstore/marketApps/v1/list', {
    method: 'POST',
    body: data
  })
}

// 应用详情
export const appDetail = (data) => {
  return request('/apaas-appstore/marketApps/v1/detail', {
    method: 'POST',
    body: data
  })
}

// 获取应用的套餐列表
export const appMealList = (data) => {
  return request('/apaas-appstore/openapis/marketPackages/v1/public_list', {
    method: 'POST',
    body: data
  })
}

// 获取应用的套餐详情
export const appMealDetail = (data) => {
  return request('/apaas-appstore/openapis/marketPackages/v1/public_detail', {
    method: 'POST',
    body: data
  })
}

// 套餐对比
export const mealCompare = (data) => {
  return request('/apaas-appstore/openapis/platformPackages/v1/public_compare', {
    method: 'POST',
    body: data
  })
}

// 创建统一收银台订单
export const createOrder = (data) => {
  return request('/apaas-appstore/checkout/v1/createOrder', {
    method: 'POST',
    body: data,
    headers: { accessToken: token.value }
  })
}

// 创建支付单
export const createBill = (data) => {
  return request('/apaas-payment-service/pay/v1/create', {
    method: 'POST',
    body: data,
    headers
  })
}

// 订单详情
export const orderDetail = (data) => {
  return request('/apaas-order-service/orders/v1/detail', {
    method: 'POST',
    body: data,
    headers
  })
}

// 能力点
export const capabilityList = (data) => {
  return request('/apaas-appstore/openapis/marketApps/v1/public_capability_price_list', {
    method: 'POST',
    body: data,
    headers
  })
}

// 收银台总价
export const calcPrice = (data) => {
  return request('/apaas-appstore/checkout/v1/calcPrice', {
    method: 'POST',
    body: data,
    headers
  })
}
