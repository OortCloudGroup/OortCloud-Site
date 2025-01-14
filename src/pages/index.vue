<template>
  <div />
</template>

<script setup lang="ts">
// 跳转 过渡页 根据客户浏览器环境调整到对应的语言网站
import { useRouter } from 'vue-router'
const router = useRouter()
// 跳转到网站
// router.push('/zh/')
// 跳转到生成力平台网站
router.push('/zh/siteNew/')
</script>
