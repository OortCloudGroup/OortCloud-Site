
import request from '../request'

// 获取套餐列表
export const mealList = (data) => {
  return request('/openapis/platformPackages/v1/public_list', {
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
