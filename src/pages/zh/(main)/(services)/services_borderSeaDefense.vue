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
          <ServicesPanel id="指挥调度" :tabs="tabs1" />
          <ServicesPanel id="综合预警" :tabs="tabs2" />
          <ServicesPanel id="可视化指挥" :tabs="tabs3" />
          <ServicesPanel id="指挥控制" :tabs="tabs4" />
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
  logo: '/img/demo/menu/zhbhf.png',
  name: '智慧边海防',
  desc: '智慧检务移动平台是基于国产化华为云、华为智慧屏、华为智能协作能力无缝结合的检务一体化平台，同时支持了面向基层的SaaS应用软件，以及为第三方应用开发提供个性化需求快速迭代底座'
})
const anchors = ref<Anchor[]>([
  { title: '指挥调度', href: '#指挥调度' },
  { title: '综合预警', href: '#综合预警' },
  { title: '可视化指挥', href: '#可视化指挥' },
  { title: '指挥控制', href: '#指挥控制' }
])
const tabs1 = reactive<Tab[]>([
  {
    name: '指挥调度',
    logo: '/img/app/yjzhdd.png',
    content: {
      desc: '指挥调度，警情、警力、现场、调度、过程可视',
      cover: '/img/services/border_sea_defense/zhdd.png',
      buttons: [
        { name: '了解更多', link: '' },
        { name: '立即购买', link: '' },
        { name: '在线体验', link: '' }
      ]
    }
  }
])
const tabs2 = reactive<Tab[]>([
  {
    name: '综合预警',
    logo: '/img/home/yycp_29.png',
    content: {
      desc: '移动端千万级消息推送平台',
      cover: '/img/services/border_sea_defense/zhyj.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    }
  }
])
const tabs3 = reactive<Tab[]>([
  {
    name: '可视化指挥',
    logo: '/img/home/kshzh.png',
    content: {
      desc: '雷视一体化可视融合指挥',
      cover: '/img/services/border_sea_defense/kshzh.png',
      buttons: [
        { name: '了解更多', link: '' },
        { name: '在线体验', link: '' }
      ]
    }
  }
])
const tabs4 = reactive<Tab[]>([
  {
    name: '指挥控制',
    logo: '/img/home/zhkz.png',
    content: {
      desc: '基于GIS的泛在感知指挥联动',
      cover: '/img/services/border_sea_defense/zhkz.png',
      buttons: [
        { name: '了解更多', link: '' },
        { name: '在线体验', link: '' }
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
