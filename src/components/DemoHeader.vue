<template>
  <div class="demo_header">
    <img src="/img/demo/logo_white.png"/>
    <span>信息资源服务平台</span>
    <span></span>
    <span>模拟跨多网入口</span>
  </div>
</template>

<script lang="ts">

</script>

<style scoped lang="scss">


  .demo_header {
    height: 64px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #2856A5;
    img {
      height: 48px;
      margin: 0 32px;
    }
    span:nth-of-type(1) {
      font-size: 24px;
      color: #FFFFFF;
      letter-spacing: 0;
      font-weight: 400;
      margin: 0 16px;
    }
    span:nth-of-type(2) {
      height: 24px;
      width: 1px;
      background-color: #fff;
    }
    span:nth-of-type(3) {
      font-size: 18px;
      color: #FFFFFF;
      margin: 0 16px;
      font-weight: 400;
    }
  }

</style>
