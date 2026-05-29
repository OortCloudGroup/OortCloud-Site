<template>
  <div />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const detectTargetPath = () => {
  if (typeof window === 'undefined') {
    return '/en/'
  }

  const browserLanguages = window.navigator.languages?.length
    ? window.navigator.languages
    : [window.navigator.language]

  const matchedLanguage = browserLanguages.find(language => typeof language === 'string' && language.length > 0) || 'en'

  return matchedLanguage.toLowerCase().startsWith('zh') ? '/zh/siteNew/' : '/en/'
}

router.replace(detectTargetPath())
</script>
