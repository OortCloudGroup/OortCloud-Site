/**
Created by  lanjian   on 2023/8/21  15:58
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<template>
  <div class="defalut_layout">
    <template v-if="!isSiteNewError">
      <NavHeader />
      <div class="page_body">
        <div class="system">
          <img src="/img/404.png" />
          <div class="title">
            <h2>您访问的页面不存在或者网站正在升级维护中...</h2>
            <h4>为了让您更好的使用系统，我们正在对服务器进行升级，升级期间暂时无法访问，请稍后重试</h4>
            <h4>给您带来的不便，敬请谅解！</h4>
            <NuxtLink to="/zh/">
              点击返回首页
            </NuxtLink>
          </div>
        </div>
        <Bottom />
      </div>
    </template>
    <template v-else>
      <NavHeaderSiteNew />
      <div class="error">
        <div class="error_body">
          <img src="@/assets/404.png" />
          <h1> 您访问的页面不存在！！！</h1>
          <span>错误信息: {{ error.message }}</span>
          <nuxt-link to="/zh/siteNew/" class="error_body_link">
            返回首页
          </nuxt-link>
        </div>
      </div>
      <Bottom v-if="!isSiteNewError" />
      <BottomSiteNew v-else />
    </template>
  </div>
</template>

<script>

import BottomSiteNew from '@/components/siteNew/Bottom.vue'
import NavHeaderSiteNew from '@/components/siteNew/NavHeader.vue'

export default {
  name: 'Error',
  components: {
    BottomSiteNew,
    NavHeaderSiteNew
  },
  props: ['error'],
  data() {
    return {
      isSiteNewError: false
    }
  },
  created() {
    if (this.error && this.error.statusCode === 404) {
      if (this.error.message.includes('/siteNew')) {
        this.isSiteNewError = true
      }
    }
  }
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
.error  {
    width: 100%;
    height: calc(100vh - 140px - 300px);
    display: flex;
    flex-direction: row;
    align-items: center;
    &_body {
      width: 400px;
      margin:  0 auto;
      display: flex;
      flex-direction: column;
      img {
        width: 300px;
        height: auto;
        margin: 20px;
      }
      h1 {
        margin:10px 0px;
        color: #666;
        font-size: 40px;
      }
      span {
        margin:10px 0px;
        font-size: 20px;
        color:#666;
      }
      &_link {
        margin:10px 0px;
        color: #D70415;
        font-size: 20px;
      }
    }
  }

</style>
