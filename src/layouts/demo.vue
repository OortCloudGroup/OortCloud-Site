<!--演示页面的layout-->
<template>
  <div class="defalut_layout">
    <DemoHeader/>
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
    background-image: url('/img/demo/bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .page_body {
    height: calc(100% - 64px);
    overflow: auto;
  }

</style>
