/* Nested dict lookup with {placeholder} interpolation. Keys: pay.* / pricing.* / card.* / toast.* */
import pay from './dicts/pay.js'
import pricing from './dicts/pricing.js'
import card from './dicts/card.js'

const ROOT = {
  pay,
  pricing,
  card,
  toast: {
    requestFailed: '请求失败，请稍后重试',
    unauthorized: '登录已过期，请重新登录',
    httpError: '请求失败（{status}）',
    bizError: '业务处理失败',
    networkError: '网络异常，请稍后重试'
  }
}

function lookup(path) {
  const parts = String(path || '').split('.')
  let cur = ROOT
  for (let i = 0; i < parts.length; i++) {
    if (cur == null) return undefined
    cur = cur[parts[i]]
  }
  return cur
}

export function tr(key, vars) {
  let text = lookup(key)
  if (text == null) return key
  if (typeof text !== 'string') return text
  if (!vars) return text
  return text.replace(/\{(\w+)\}/g, (_, k) => (vars[k] != null ? String(vars[k]) : ''))
}

export function t(key, vars) {
  return tr(key, vars)
}
