/* Minimal svelte/store writable shim for Vue (subscribe / set / update). */
export function writable(initial) {
  let value = initial
  const subscribers = new Set()
  const store = {
    subscribe(run) {
      subscribers.add(run)
      run(value)
      return () => subscribers.delete(run)
    },
    set(next) {
      value = next
      subscribers.forEach(run => run(value))
    },
    update(fn) {
      store.set(fn(value))
    }
  }
  return store
}

export function get(store) {
  let value
  const unsub = store.subscribe((v) => { value = v })
  unsub()
  return value
}
