<template>
  <div class="defalut_layout">
    <common-header-vls v-if="flag" />
    <NavHeader v-else />
    <div class="page_body">
      <slot />
      <common-bottom-vls v-if="flag" />
      <Bottom v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const router = useRouter()
let flag = ref(false)
watch(() => router.currentRoute.value, (newValue) => {
  flag.value = false
  if (newValue.path === '/' || newValue.path.includes('siteNew')) {
    flag.value = true
  }
}, { immediate: true })
</script>

<style scoped>

  .defalut_layout,.page {
    height: 100%;
    overflow: auto;
    width: 100%;
  }

  .page_body {
    height: calc(100% - 64px);
    overflow: auto;
  }

  .main_body {
    background-color: #F7F7F7;
    min-height: calc(100vh - 140px - 300px);
  }

</style>
