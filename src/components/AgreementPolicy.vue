<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <article class="content">
      服务协议和隐私政策
    </article>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'agreement-and-policy'
})

defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.container {
  padding: 0 200px;
  width: 100%;
  box-sizing: border-box;
}
.title {
  padding: 21px 0;
  text-align: center;
  box-sizing: border-box;
}
</style>