<template>
  <div />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const DEFAULT_LANGUAGE = 'en'
const STATIC_LANGUAGE_CODES = ['en', 'es', 'ar', 'de', 'fr', 'ja', 'pt', 'ru', 'ko', 'id', 'tr']
const SUPPORTED_LANGUAGE_CODES = ['zh', ...STATIC_LANGUAGE_CODES]

// 根据浏览器语言匹配站点首页路径
const detectTargetPath = () => {
  if (typeof window === 'undefined') {
    return '/en/'
  }

  const browserLanguages = window.navigator.languages?.length
    ? window.navigator.languages
    : [window.navigator.language]

  const matchedLanguage = browserLanguages
    .map(language => language?.toLowerCase().split(/[-_]/)[0])
    .find(language => SUPPORTED_LANGUAGE_CODES.includes(language || '')) || DEFAULT_LANGUAGE

  // return matchedLanguage === 'zh' ? '/zh/siteNew/' : `/${matchedLanguage}/`
  return matchedLanguage === 'zh' ? '/ch/' : `/${matchedLanguage}/`
}

onMounted(() => {
  const targetPath = detectTargetPath()

  // // AI 生成的多语言静态页不走框架内路由，使用浏览器地址跳转
  // if (targetPath === '/zh/siteNew/') {
  //   router.replace(targetPath)
  //   return
  // }

  window.location.href = targetPath
})

</script>
