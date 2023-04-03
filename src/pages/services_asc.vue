<template>
  <div class="container">
    <div class="main">
      <ServicesHeader  
        :logo="header.logo"
        :name="header.name"
        :desc="header.desc"
      />

      <div class="content">
        <ServicesSidebar :anchors="anchors" />

        <div class="content_main">
          <ServicesPanel :tabs="tabs1" id="应用软件定制"/>
          <ServicesPanel :tabs="tabs2" id="运维运营服务外包"/>
          <ServicesPanel :tabs="tabs3" id="流程自动化"/>
          <ServicesPanel :tabs="tabs4" id="微信公众号运营维护服务"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Anchor, Tab } from '~/types'

interface Head {
  logo: any,
  name: string,
  desc: string
}

const header = reactive<Head>({
  logo: '/img/app/yyrjdz2.png',
  name: '应用软件定制与运维运营服务外包',
  desc: '加强档案数据库的建设，建立与完善档案目录数据库、纸质档案全文数据库和多媒体数据库，建立区域性档案目录和现行文件全文数据库是大势所趋'
})
const anchors = ref<Anchor[]>([
  { title: '应用软件定制', href: '#应用软件定制' },
  { title: '运维运营服务外包', href: '#运维运营服务外包' },
  { title: '流程自动化', href: '#流程自动化' },
  { title: '微信公众号运营维护服务', href: '#微信公众号运营维护服务' }
])
const tabs1 = reactive<Tab[]>([
  { 
    name: '应用软件定制',
    logo: '/img/app/yyrjdz3.png',
    content: {
      desc: '应用定制开发一站式服务',
      cover: '/img/services/asc/yyrjdz.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    } 
  }
])
const tabs2 = reactive<Tab[]>([
  { 
    name: '运维运营服务外包',
    logo: '/img/app/zdh.png',
    content: {
      desc: 'IT驻场运营运维',
      cover: '/img/services/asc/yw.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    } 
  }
])
const tabs3 = reactive<Tab[]>([
  { 
    name: '流程自动化',
    logo: '/img/app/yw.png',
    content: {
      desc: '电子员工',
      cover: '/img/services/asc/zdh.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    } 
  }
])
const tabs4 = reactive<Tab[]>([
  { 
    name: '微信公众号运营维护服务',
    logo: '/img/app/wechat3.png',
    content: {
      desc: '一站式微信公众号运维运营',
      cover: '/img/services/asc/wxyw.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    } 
  }
])
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
}
.main {
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
}
.content {
  position: sticky;
  top: 90px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  column-gap: 60px;
  &_main {
    width: 100%;
    box-sizing: border-box;
  }
}
</style>