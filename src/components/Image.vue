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
  if (window.location.hostname !== 'localhost') {
    imgSrc.value = '/oort/oort-site' + src.value
  } else {
    imgSrc.value = src.value
  }
})

onMounted(() => {
  if (window.location.hostname !== 'localhost') {
    imgSrc.value = '/oort/oort-site' + src.value
  } else {
    imgSrc.value = src.value
  }
})
</script>