/**
Created by  lanjian   on 2023/8/20  18:05
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<template>
  <div class="page_container">
    <div class="demo_title">
      <span>欢迎使用</span>
    </div>
    <div v-if="demoConfig.length > 0" class="demo_body">
      <div class="demo_body_item">
        <span>{{ demoConfig[0].description }}</span>
        <a :href="demoConfig[0].index[0].url" target="_blank">
          <img src="/img/demo/index/1_pc.png" />
        </a>
        <NuxtLink to="/zh/demoDownload1">
          <img src="/img/demo/index/1_mobile.png" />
        </NuxtLink>
        <a :href="demoConfig[0].index[2].url" target="_blank">
          <img src="/img/demo/index/1_manage.png" style="margin-top: 5rem" />
        </a>
      </div>
      <div class="demo_body_gap">
        <span>隔离网闸</span>
      </div>
      <div class="demo_body_item">
        <span>{{ demoConfig[1].description }}</span>
        <a :href="demoConfig[1].index[0].url" target="_blank">
          <img src="/img/demo/index/2_pc.png" />
        </a>
        <NuxtLink to="/zh/demoDownload2">
          <img src="/img/demo/index/2_mobile.png" />
        </NuxtLink>
        <a :href="demoConfig[1].index[2].url" target="_blank">
          <img src="/img/demo/index/2_manage.png" style="margin-top: 5rem" />
        </a>
      </div>
      <div class="demo_body_gap">
        <span>隔离网闸</span>
      </div>
      <div class="demo_body_item">
        <span>{{ demoConfig[2].description }}</span>
        <a :href="demoConfig[2].index[0].url" target="_blank">
          <img src="/img/demo/index/3_pc.png" />
        </a>
        <NuxtLink to="/zh/demoDownload3">
          <img src="/img/demo/index/3_mobile.png" />
        </NuxtLink>
        <a :href="demoConfig[2].index[2].url" target="_blank">
          <img src="/img/demo/index/3_manage.png" style="margin-top: 5rem" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>

import demoIndexConfig from '../../demoIndex_config.json'
definePageMeta({
  layout: 'demo',
  title: '信息资源服务平台',
  subTitle: '模拟跨多网入口',
  logo: '/img/demo/logo_white.png',
  isGetAjax: true // 是否去获取配置信息
})

useSeoMeta({
  title: '信息资源服务平台',
  ogTitle: '信息资源服务平台',
  description: '模拟跨多网入口',
  ogDescription: '模拟跨多网入口',
  ogImage: '/img/demo/logo_white.png'
})

export default {
  name: 'DemoIndex',
  data() {
    return {
      demoConfig: []
    }
  },
  // 一开始就请求一个config.json
  async mounted() {
    console.log(demoIndexConfig)
    this.demoConfig = demoIndexConfig
    console.log('fetch')
    const res = await fetch('https://myoumuamua.com/mystatic/demoIndex_config.json')
    const data = await res.json()
    console.log(data)
    if (data) {
      this.demoConfig = data
    }
  }
}

</script>

<style lang="scss" scoped>
  .page_container {
    width: 70%;
    margin: 0 auto;
    min-height: 1080px;
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
    &_item {
      width: 320px;
      height: 855px;
      display: flex;
      flex-direction: column;
      background: #FFFFFF;
      border-radius: 8px;
      align-items: center;
      span {
        width: 280px;
        height: 36px;
        font-size: 36px;
        color: #333333;
        letter-spacing: 0;
        font-weight: 400;
        margin: 40px 0px 80px 0px;
      }
      img:hover {
        scale: 1.03;
      }
      img {
        cursor: pointer;
        margin: 10px 0px;
        width: 280px;
        height: 160px;
      }
      img:nth-of-type(3) {
        margin-top: 70px;
      }
    }
    &_gap {
      width: 72px;
      height: 855px;
      background-color: #FFE9E9;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 22px;
      span {
        width: 20px;
        font-size: 20px;
        color: #EA0000;
        letter-spacing: 0;
        text-align: center;
        line-height: 40px;
        font-weight: 400;
      }
    }
  }

</style>
