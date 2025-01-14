<template>
  <div class="defalut_layout">
    <NavHeader />
    <div class="page_body">
      <slot />
      <Bottom />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>

.defalut_layout, .page {
  height: 100vh;
  overflow: auto;
  width: 100vw;
}

.page_body {
  height: calc(100vh - 64px);
  width: 100vw;
  overflow: auto;
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
