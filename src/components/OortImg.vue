<template>
  <img :src="processedSrc" alt="" />
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true
  }
})

const { src } = toRefs(props)

// 旧网关地址
const OLD_GATEWAY = 'http://183.62.103.20:21410'
const NEW_GATEWAY = 'https://workup-dev.myoumuamua.com:6433'

// 处理后的图片地址
const processedSrc = computed(() => {
  if (!src.value) return ''
  // 如果地址以旧网关开头，则替换为新网关
  if (src.value.startsWith(OLD_GATEWAY)) {
    return src.value.replace(OLD_GATEWAY, NEW_GATEWAY)
  }
  return src.value
})
</script>
