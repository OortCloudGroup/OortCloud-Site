import config from '../../config/index.js'
import { getToken } from './auth.js'
import { tr } from './i18n.js'

export function apiBase() {
  if (typeof window !== 'undefined' && typeof window.SUBSCRIPTION_API_BASE === 'string') {
    return window.SUBSCRIPTION_API_BASE.replace(/\/+$/, '')
  }
  const origin = String(config.busURL || '').replace(/\/+$/, '')
  return origin + '/bus/apaas-newapi'
}

export function bizError(msg, status, code) {
  const e = new Error(msg || tr('toast.requestFailed'))
  e.status = status || 0
  if (code) e.code = String(code)
  return e
}

export function isBizOk(body) {
  if (!body) return false
  if (body.success === true) return true
  if (body.success === false) return false
  if (body.message !== undefined && body.message !== null && body.message !== '') {
    return body.message === 'success'
  }
  return true
}

export function apiFetch(path, options) {
  const opts = { method: 'GET', credentials: 'include', headers: {}}
  options = options || {}
  if (options.method) opts.method = options.method
  if (options.body !== undefined) opts.body = options.body
  if (options.headers) Object.assign(opts.headers, options.headers)
  const t = getToken()
  if (t) {
    opts.headers.Authorization = 'Bearer ' + t
    opts.headers.accessToken = t
  }
  if (opts.body !== undefined && !opts.headers['Content-Type']) {
    opts.headers['Content-Type'] = 'application/json'
  }

  return fetch(apiBase() + path, opts).then((res) => {
    return res.json().catch(() => null).then((body) => {
      const bizCode = body && body.code
      if (res.status === 401) {
        throw bizError((body && body.message) || tr('toast.unauthorized'), 401, bizCode)
      }
      if (!res.ok) {
        throw bizError((body && body.message) || tr('toast.httpError', { status: res.status }), res.status, bizCode)
      }
      if (!isBizOk(body)) {
        throw bizError((body && body.message) || tr('toast.bizError'), res.status, bizCode)
      }
      return body
    })
  }).catch((err) => {
    if (err && err.status) throw err
    throw bizError(tr('toast.networkError'), 0)
  })
}
