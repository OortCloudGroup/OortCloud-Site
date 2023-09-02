<template>
  <img :src="imgSrc" alt="" />
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true
  }
})

let { src } = toRefs(props)

const imgSrc = ref('')

watch(src, () => {
  imgSrc.value = src.value
})

onMounted(() => {
  imgSrc.value = src.value
})
</script>
