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
          <ServicesPanel :tabs="tabs1" id="狱内通"/>
          <ServicesPanel :tabs="tabs2" id="惠警应用"/>
          <ServicesPanel :tabs="tabs3" id="智慧监狱应用"/>
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
  logo: '/img/app/jiancha.png',
  name: '检察',
  desc: '智慧检务移动平台是基于国产化华为云、华为智慧屏、华为智能协作能力无缝结合的检务一体化平台，同时支持了面向基层的SaaS应用软件，以及为第三方应用开发提供个性化需求快速迭代底座'
})
const anchors = ref<Anchor[]>([
  { title: '狱内通', href: '#狱内通' },
  { title: '惠警应用', href: '#惠警应用' },
  { title: '智慧监狱应用', href: '#智慧监狱应用' }
])
const tabs1 = reactive<Tab[]>([
  { 
    name: '狱内通',
    logo: '/img/app/qywx.png',
    content: {
      desc: '私有化部署的内网“微信”APP',
      cover: '/img/services/prison/ynt.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    } 
  }
])
const tabs2 = reactive<Tab[]>([
  { 
    name: '惠警应用',
    logo: '/img/app/mhyysc.png',
    content: {
      desc: '新时代建警治警爱警暖警信息化助手',
      cover: '/img/services/prison/hjyy.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    } 
  }
])
const tabs3 = reactive<Tab[]>([
  { 
    name: '智慧监狱应用',
    logo: '/img/app/zhjy.png',
    content: {
      desc: '智慧监狱业务应用',
      cover: '/img/services/prison/jyyy.png',
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