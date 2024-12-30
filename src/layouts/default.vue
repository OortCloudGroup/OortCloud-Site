<template>
  <div class="defalut_layout">
    <common-header-vls v-if="flag" class="defalut_hea" @handle="handle" />
    <NavHeader v-else />
    <div class="page_body">
      <slot />
      <common-bottom-vls v-if="flag" />
      <Bottom v-else />
    </div>
    <el-dialog
      v-model="hVisi"
      width="100%"
      top="0"
      :show-close="false"
      class="headDia"
    >
      <common-header-vls v-if="flag" class="defalut_hea" @handle="handle" />
      <industry :item="hVisiT" />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Industry from '@/pages/siteNew/industry.vue'

const router = useRouter()
let flag = ref(false)
let hVisi = ref(false)
let hVisiT = ref('')

const handle = (val, t) => {
  hVisiT.value = t
  if (val === '/') hVisi.value = true
}

watch(() => router.currentRoute.value, (newValue) => {
  flag.value = false
  if (newValue.path !== '/') hVisi.value = false
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

:deep(.el-dialog){
  padding: 0;

  .el-dialog__header{
    padding: 0;
  }
  .defalut_hea{
    height: 82px;
    position: relative;
  }
}
</style>
