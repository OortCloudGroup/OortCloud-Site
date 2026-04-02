<template>
  <div class="page_container">
    <div class="panel_wrapper">
      <h2 class="panel_title">
        所有演示
      </h2>
      <AppPanelNew :data="doubleSysApp" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const doubleSysApp = ref({
  apps: [
    {
      name: '智慧公安',
      logo: '/img/demo/menu/ga.png',
      excerpt: '移动警务服务总线',
      link: '/demoGA'
    },
    {
      name: '智慧园林',
      logo: '/img/demo/menu/yl.png',
      excerpt: '物联网与GIS一张网技术驱动的园林全流程精细化管控平台',
      link: '/demoYL'
    },
    {
      name: '智慧武装',
      logo: '/img/demo/menu/wz.png',
      excerpt: '军地一张网、数据一条链、资源一个库、态势一幅图',
      // link: '/demoIndex'
      link: '/demoWZ'
    },
    // {
    //   name: 'XOA数字化办公',
    //   logo: '/img/demo/menu/oa.png',
    //   excerpt: '生产力工具',
    //   link: '/demoXOA'
    // },
    {
      name: '智慧档案',
      logo: '/img/home/zhda.png',
      excerpt: '符合国档规范标准的全门类档案收管存用综合管理系统',
      link: '/demoDA2'
    },
    {
      name: '智慧检务',
      logo: '/img/demo/menu/jcy.png',
      excerpt: '基于新一代信息技术的检察业务与管理全流程融合赋能平台',
      link: '/demoJW'
    },
    {
      name: '指挥调度',
      logo: '/img/home/zhddyzt.png',
      excerpt: '总揽指挥调度一张图、用于大屏、调度、过程可视',
      link: '/demoOneMap'
    },
    {
      name: '智慧安保',
      logo: '/img/home/zhab.png',
      excerpt: '安全风险智能预警及可视化指挥防护平台',
      link: '/demoAB'
    },
    {
      name: '智慧宣传',
      logo: '/img/demo/menu/xc.png',
      excerpt: '全媒体矩阵信息发布平台',
      link: '/demoXC'
    },
    {
      name: '智慧街道',
      logo: '/img/demo/menu/jd.png',
      excerpt: '网格任务闭环与多端协同指挥调度平台',
      link: '/demoJD'
    },
    {
      name: '智慧监狱',
      logo: '/img/demo/menu/jy.png',
      excerpt: '执法任务一体化平台',
      link: '/demoIM'
    },
    {
      name: '企业办公',
      logo: '/img/demo/menu/oa.png',
      excerpt: '新一代OA数字化办公生产力工具',
      link: '/demoXOA'
    },
    {
      name: '智慧党建',
      logo: '/img/demo/menu/dj.png',
      excerpt: '新一代OA数字化办公生产力工具',
      link: '/demoDJ'
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
