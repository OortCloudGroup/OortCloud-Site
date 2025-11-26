<template>
  <div class="page_container">
    <div class="panel_wrapper">
      <h2 class="panel_title">
        所有演示
      </h2>
      <AppPanel :data="doubleSysApp" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const doubleSysApp = ref({
  apps: [
    {
      name: '移动警务服务总线',
      logo: '/img/demo/menu/bus.png',
      excerpt: '移动警务服务总线',
      link: '/demoIndex'
    },
    {
      name: '园林',
      logo: '/img/demo/menu/yl.png',
      excerpt: '园林',
      link: '/demoIndex'
    },
    {
      name: '武装',
      logo: '/img/demo/menu/wz.png',
      excerpt: '武装',
      link: '/demoIndex'
    },
    {
      name: 'XOA数字化办公',
      logo: '/img/demo/menu/oa.png',
      excerpt: '生产力工具',
      link: '/demoXOA'
    },
    {
      name: '档案',
      logo: '/img/demo/menu/da.png',
      excerpt: '智能档案馆管理系统演示平台',
      link: '/'
    },
    {
      name: '交通微劝导系统',
      logo: '/img/demo/menu/wqd.png',
      excerpt: '提升交通安全意识，落实交通宣传劝导',
      link: '/demoWQD'
    },
    {
      name: '指挥调度一张图',
      logo: '/img/demo/menu/map.png',
      excerpt: '总揽指挥调度一张图，用于电子指挥大屏操作',
      link: '/demoOneMap'
    },
    {
      name: '安保',
      logo: '/img/demo/menu/ab.png',
      excerpt: '安保',
      link: '/demoIndex'
    },
    {
      name: 'XCreator敏捷发布平台',
      logo: '/img/demo/menu/xc.png',
      excerpt: '全媒体矩阵信息发布平台',
      link: '/demoXCreator'
    },
    {
      name: '即时通讯',
      logo: '/img/home/xl_1.png',
      excerpt: '单聊、群聊、图文、视频等即时通讯IM',
      link: '/demoIM'
    }
  ]
})
</script>

<style lang="scss" scoped>
  .page_container {
    width: 70%;
    margin: 0 auto;
    min-height: 1080px;
  }
.panel_wrapper {
  padding: 60px 0;
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  height: auto;
  box-sizing: border-box;
}
.panel_title {
  padding: 0 16px;
  font-size: 24px;
  color: #5378b7;
  font-weight: 600;
}

</style>
