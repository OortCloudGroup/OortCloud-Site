<template>
  <div class="defalut_layout">
    <NavHeader class="defalut_hea" @handle="handle" />
    <div class="page_body">
      <slot />
      <Bottom />
    </div>
    <el-dialog
      v-model="hVisi"
      width="100%"
      top="0"
      :show-close="false"
      class="headDia"
    >
      <NavHeader v-if="hVisiT" :item="hVisiT" class="defalut_hea" @handle="handle" />
      <industry :item="hVisiT" />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Industry from '@/pages/zh/siteNew/industry.vue'
import NavHeader from '@/components/siteNew/NavHeader.vue'
import Bottom from '@/components/siteNew/Bottom.vue'

let hVisi = ref(false)
let hVisiT = ref('')

const handle = (t) => {
  hVisiT.value = t
  hVisi.value = true
}

</script>

<style lang="scss" scoped>

.defalut_layout, .page {
}

.page_body {
  /* height: calc(100vh - 82px); */
}

.main_body {
  background-color: #F7F7F7;
  min-height: calc(100vh - 140px - 300px);
}

:deep(.el-dialog) {
  padding: 0;

  .el-dialog__header {
    padding: 0;
  }

  .defalut_hea {
    height: 82px;
    position: relative;
  }
}
</style>
