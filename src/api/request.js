
import { ofetch } from 'ofetch'

// 创建请求实例
const request = ofetch.create({
  baseURL: 'http://192.168.60.76:32620/bus/apaas-appstore',
  timeout: 10000, // 超时时间
  headers: {
    'Content-Type': 'application/json'
  },
  // 请求拦截
  onRequest({ options }) {
    // 示例：添加token
    const token = useCookie('token').value
    if (token) {
      options.headers.Authorization = `Bearer ${token}`
    }
  },
  // 响应拦截
  onResponseError({ response }) {
    // 示例：统一错误处理
    if (response.status === 401) {
      navigateTo('/login') // 未登录跳转登录页
    }
    console.error('接口错误:', response.status, response._data)
  }
})

export default request
