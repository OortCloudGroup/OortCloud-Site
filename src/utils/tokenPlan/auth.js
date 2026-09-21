import config from '../../config/index.js'

function getLoginRedirect() {
  return typeof window !== 'undefined'
    ? window.location.origin + '/zh/siteNew/price'
    : 'https://oortcloudsmart.com/zh/siteNew/price'
}

function readTokenFromQuery() {
  if (typeof window === 'undefined') return ''
  try {
    const params = new URLSearchParams(window.location.search || '')
    return params.get('access_token') || ''
  } catch (e) {
    return ''
  }
}

/** 登录回跳参数落盘后从地址栏去掉，避免退出登录后 URL 残留 token 被再次当成已登录。 */
function stripAuthQuery() {
  if (typeof window === 'undefined') return
  try {
    const url = new URL(window.location.href)
    if (!url.searchParams.has('access_token') && !url.searchParams.has('id') && !url.searchParams.has('tenant_id')) {
      return
    }
    url.searchParams.delete('access_token')
    url.searchParams.delete('id')
    url.searchParams.delete('tenant_id')
    window.history.replaceState(null, '', url.pathname + url.search + url.hash)
  } catch (e) { /* 忽略 */ }
}

function readToken() {
  if (typeof window === 'undefined') return ''
  try {
    const fromStorage = sessionStorage.getItem('accessToken') || ''
    if (fromStorage) return fromStorage
    // 登录回跳时 token 先出现在 URL，NavHeader 异步 verify 后才写入 sessionStorage。
    // 此处同步落盘，避免 pending 恢复时误判未登录再次跳登录页。
    const fromQuery = readTokenFromQuery()
    if (fromQuery) {
      try {
        sessionStorage.setItem('accessToken', fromQuery)
      } catch (e) { /* 忽略 */ }
      stripAuthQuery()
      return fromQuery
    }
    return ''
  } catch (e) {
    return ''
  }
}

export function getToken() {
  return readToken()
}

export function isLoggedIn() {
  return !!readToken()
}

export function clearToken() {
  if (typeof window === 'undefined') return
  try {
    sessionStorage.removeItem('accessToken')
  } catch (e) { /* 忽略 */ }
  stripAuthQuery()
}

export function loginRedirect(newTab) {
  const url =
    config.busURL +
    '/bus/apaas-web/loginPage/index.html?appname=' +
    encodeURIComponent('OortCloud Site') +
    '&redirect_uri=' +
    encodeURIComponent(getLoginRedirect())
  if (newTab && typeof window !== 'undefined') {
    const win = window.open(url, '_blank')
    if (!win) window.location.href = url
    return
  }
  if (typeof window !== 'undefined') window.location.href = url
}

export function ensureLoggedIn() {
  if (isLoggedIn()) return Promise.resolve(true)
  loginRedirect(false)
  return Promise.resolve(false)
}
