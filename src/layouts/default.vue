<template>
  <div class="defalut_layout">
    <NavHeader></NavHeader>
    <div class="page_body">
      <slot />
      <Bottom></Bottom>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

  .defalut_layout {
    width: 100vw;
    height: 100vh;
  }

  .page_body {
    height: calc(100% - 64px);
    overflow: auto;
  }

</style>
