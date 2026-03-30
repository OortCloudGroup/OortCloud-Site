
import request from '../request'

// 获取套餐列表
export const mealList = (data) => {
  return request('/openapis/platformPackages/v1/public_list', {
    method: 'POST',
    body: data
  })
}

// 套餐详情
export const mealDetail = (data) => {
  return request('/openapis/platformPackages/v1/public_detail', {
    method: 'POST',
    body: data
  })
}

// 获取应用列表
export const appList = (data) => {
  return request('/marketApps/v1/list', {
    method: 'POST',
    body: data
  })
}

// 应用详情
export const appDetail = (data) => {
  return request('/marketApps/v1/detail', {
    method: 'POST',
    body: data
  })
}

// 获取应用的套餐列表
export const appMealList = (data) => {
  return request('/openapis/marketPackages/v1/public_list', {
    method: 'POST',
    body: data
  })
}

// 获取应用的套餐详情
export const appMealDetail = (data) => {
  return request('/openapis/marketPackages/v1/public_detail', {
    method: 'POST',
    body: data
  })
}

// 套餐对比
export const mealCompare = (data) => {
  return request('/openapis/platformPackages/v1/public_compare', {
    method: 'POST',
    body: data
  })
}
