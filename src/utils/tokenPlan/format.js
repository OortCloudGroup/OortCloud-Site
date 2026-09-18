export function pad2(n) { return (n < 10 ? '0' : '') + n }

export function fmtCNY(n) {
  const v = Number(n)
  if (!isFinite(v)) return '—'
  const s = v.toFixed(2).replace(/\.00$/, '')
  const parts = s.split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return '¥' + parts.join('.')
}

export function fmtCredits(n) {
  const v = Number(n)
  if (!isFinite(v)) return '0'
  return v.toLocaleString('en-US', { maximumFractionDigits: 6 })
}

export function fmtCountdown(ms) {
  if (ms <= 0) return '00:00'
  const total = Math.floor(ms / 1000)
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  return h > 0 ? pad2(h) + ':' + pad2(m) + ':' + pad2(s) : pad2(m) + ':' + pad2(s)
}

export function creditsForAmount(amount, creditsPerCny) {
  const value = Number(amount) * Number(creditsPerCny || 25)
  return isFinite(value) && value > 0 ? Math.round(value * 1000000) / 1000000 : 0
}

export function fmtInt(n) {
  const v = Number(n)
  if (!isFinite(v)) return '0'
  return v.toLocaleString('en-US')
}
