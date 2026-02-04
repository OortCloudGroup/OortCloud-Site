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
          <ServicesPanel id="检务宝" :tabs="tabs1" />
          <ServicesPanel id="移动检务" :tabs="tabs2" />
          <ServicesPanel id="阳光检务" :tabs="tabs3" />
          <ServicesPanel id="移动阅卷" :tabs="tabs4" />
          <ServicesPanel id="远程送达" :tabs="tabs5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Anchor {
  title: string,
  href: string
}

interface Tab {
  name: string,
  logo: string,
  content: Object
}

interface Head {
  logo: any,
  name: string,
  desc: string
}

const header = reactive<Head>({
  logo: '/img/app/jiancha.png',
  name: '智慧检务',
  desc: '智慧检务移动平台是基于国产化华为云、华为智慧屏、华为智能协作能力无缝结合的检务一体化平台，同时支持了面向基层的SaaS应用软件，以及为第三方应用开发提供个性化需求快速迭代底座'
})
const anchors = ref<Anchor[]>([
  { title: '检务宝', href: '#检务宝' },
  { title: '移动检务', href: '#移动检务' },
  { title: '阳光检务', href: '#阳光检务' },
  { title: '移动阅卷', href: '#移动阅卷' },
  { title: '远程送达', href: '#远程送达' }
])
const tabs1 = reactive<Tab[]>([
  {
    name: '检务宝',
    logo: '/img/app/jianwubao.png',
    content: {
      desc: '移动检务宝平台',
      cover: '/img/services/inspection/jianwubao.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    }
  }
])
const tabs2 = reactive<Tab[]>([
  {
    name: '移动检务',
    logo: '/img/app/ydjw.png',
    content: {
      desc: '服务检察干警移动办公办案业务',
      cover: '/img/services/inspection/ydjw.png',
      buttons: [
        { name: '了解更多', link: '/product_mobileInspection' }
      ]
    }
  }
])
const tabs3 = reactive<Tab[]>([
  {
    name: '阳光检务',
    logo: '/img/app/ygjw.png',
    content: {
      desc: '服务人民群众、律师、人大政协、公司办理业务',
      cover: '/img/services/inspection/ygjw.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    }
  }
])
const tabs4 = reactive<Tab[]>([
  {
    name: '移动阅卷',
    logo: '/img/app/ydyj.png',
    content: {
      desc: '检务移动终端辅助业务系统',
      cover: '/img/services/inspection/ydyj.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    }
  }
])
const tabs5 = reactive<Tab[]>([
  {
    name: '远程送达',
    logo: '/img/app/ycsd.png',
    content: {
      desc: '司法文书远程送达系统',
      cover: '/img/services/inspection/ycsd.png',
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
