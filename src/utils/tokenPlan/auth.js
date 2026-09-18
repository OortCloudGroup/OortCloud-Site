import config from '../../config/index.js'

const LOGIN_REDIRECT =
  typeof window !== 'undefined'
    ? window.location.origin + '/zh/siteNew/price'
    : 'https://oortcloudsmart.com/zh/siteNew/price'

function readToken() {
  if (typeof window === 'undefined') return ''
  try {
    return sessionStorage.getItem('accessToken') || ''
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

export function loginRedirect(newTab) {
  const url =
    config.busURL +
    '/bus/apaas-web/loginPage/index.html?appname=' +
    encodeURIComponent('OortCloud Site') +
    '&redirect_uri=' +
    encodeURIComponent(LOGIN_REDIRECT)
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
