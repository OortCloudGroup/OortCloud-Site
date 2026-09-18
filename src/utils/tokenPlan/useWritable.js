import { ref, onMounted, onUnmounted } from 'vue'

/** Bridge a svelte-like writable store into a Vue ref. */
export function useWritable(store) {
  const state = ref(null)
  let unsub = null
  const sync = (v) => { state.value = v }
  // Seed immediately so template has a value before mount
  if (store && typeof store.subscribe === 'function') {
    unsub = store.subscribe(sync)
  }
  onUnmounted(() => {
    if (unsub) unsub()
  })
  return state
}

/** Same as useWritable but also re-subscribes on mount (SSR-safe). */
export function useWritableClient(store, initial = null) {
  const state = ref(initial)
  let unsub = null
  onMounted(() => {
    if (!store) return
    unsub = store.subscribe((v) => { state.value = v })
  })
  onUnmounted(() => {
    if (unsub) unsub()
  })
  return state
}
