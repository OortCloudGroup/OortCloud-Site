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
          <ServicesPanel id="一网通办" :tabs="tabs1" />
          <ServicesPanel id="一网统管" :tabs="tabs2" />
          <ServicesPanel id="一网协同" :tabs="tabs3" />
          <ServicesPanel id="公务出行" :tabs="tabs4" />
          <ServicesPanel id="政易通" :tabs="tabs5" />
          <ServicesPanel id="大数据IOC可视化" :tabs="tabs6" />
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
  logo: '/img/demo/menu/zf.png',
  name: '政府',
  desc: '政务云领域建设打造出安全、可靠、独特的解决方案体系，通过创新的服务能力，借助云计算、大数据，以及人工智能的优势，实现政府简化流程、提升效率、保障安全、降低成本的目标，助力政府实现数字化转型。'
})
const anchors = ref<Anchor[]>([
  { title: '一网通办', href: '#一网通办' },
  { title: '一网统管', href: '#一网统管' },
  { title: '一网协同', href: '#一网协同' },
  { title: '公务出行', href: '#公务出行' },
  { title: '政易通', href: '#政易通' },
  { title: '大数据IOC可视化', href: '#大数据IOC可视化' }
])
const tabs1 = reactive<Tab[]>([
  {
    name: '一网通办',
    logo: '/img/home/ywtb.png',
    content: {
      desc: '政务服务“一网通办”，智慧互联网+服务助手平台',
      cover: '/img/services/goverment/ywtb.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    }
  }
])
const tabs2 = reactive<Tab[]>([
  {
    name: '一网统管',
    logo: '/img/home/ywtg.png',
    content: {
      desc: '政府治理“一网统管”',
      cover: '/img/services/goverment/ywtg.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    }
  }
])
const tabs3 = reactive<Tab[]>([
  {
    name: '一网协同',
    logo: '/img/home/ywxt.png',
    content: {
      desc: '政府运行“一网协同”',
      cover: '/img/services/goverment/ywxt.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    }
  }
])
const tabs4 = reactive<Tab[]>([
  {
    name: '公务出行',
    logo: '/img/home/spell_car.png',
    content: {
      desc: '为机关单位提供公车出行服务',
      cover: '/img/services/goverment/gwcx.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    }
  }
])
const tabs5 = reactive<Tab[]>([
  {
    name: '政易通',
    logo: '/img/app/qywx.png',
    content: {
      desc: '跨地区、跨层级、跨部门政务协同',
      cover: '/img/services/border_sea_defense/zhkz.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    }
  }
])
const tabs6 = reactive<Tab[]>([
  {
    name: '大数据IOC可视化',
    logo: '/img/app/dsjioc.png',
    content: {
      desc: '数据可视化决策支持',
      cover: '/img/services/border_sea_defense/zhkz.png',
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
