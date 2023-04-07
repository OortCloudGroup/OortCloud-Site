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

// watch(src, () => {
//   imgSrc.value = '/oort/oort-site' + src.value
//   console.log(src.value, imgSrc.value)
// })

onMounted(() => {
  console.log(src.value, imgSrc.value)
  imgSrc.value = '/oort/oort-site' + src.value
  console.log(src.value, imgSrc.value)
})
</script>