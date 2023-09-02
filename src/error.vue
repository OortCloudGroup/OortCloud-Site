/**
Created by  lanjian   on 2023/8/21  15:58
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<template>
  <div class="defalut_layout">
    <NavHeader />
    <div class="page_body">
      <div class="system">
        <img src="/img/404.png" />
        <div class="title">
          <h2>您访问的页面不存在或者网站正在升级维护中...</h2>
          <h4>为了让您更好的使用系统，我们正在对服务器进行升级，升级期间暂时无法访问，请稍后重试</h4>
          <h4>给您带来的不便，敬请谅解！</h4>
          <NuxtLink to="/">
            点击返回首页
          </NuxtLink>
        </div>
      </div>
      <Bottom />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Error'
}
</script>

<style lang="scss" scoped>

.defalut_layout {
  width: 100vw;
  height: 100vh;
}

.page_body {
  height: calc(100% - 64px);
  overflow: auto;
}

.system {
  height: 800px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  img {
    width: 500px;
  }
}

</style>
