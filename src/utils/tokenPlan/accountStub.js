/* Minimal account stubs used by membershipCardStore. */
export const PATH = {
  subSelf: '/api/subscription/self'
}

export function handleAuthError(err) {
  return !!(err && err.status === 401)
}
