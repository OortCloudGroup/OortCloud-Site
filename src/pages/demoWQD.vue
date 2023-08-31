/**
Created by  lanjian   on 2023/8/20  18:05
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<template>
  <div class="page_container">
    <div class="demo_title">
      <span>指挥调度一张图</span>
    </div>
    <div class="demo_body">
      demo——body
    </div>
  </div>
</template>

<script>

definePageMeta({
  layout: "demo",
  title: "交通微劝导系统",
  subTitle: "演示环境",
  logo: "/img/demo/menu/wqd.png"
})
export default {
  name: "demoIndex"
}
</script>

<style lang="scss" scoped>
  .page_container {
    width: 70%;
    margin: 0 auto;
    height: 1080px;
  }

  .demo_title {
    display: flex;
    align-items: center;
    height: 125px;
    span {
      font-size: 34px;
      color: #2956A5;
      letter-spacing: 0;
      font-weight: 400;
    }
  }

  .demo_body {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
  }



</style>
