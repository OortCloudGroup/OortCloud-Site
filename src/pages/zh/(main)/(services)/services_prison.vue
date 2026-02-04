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
          <ServicesPanel id="狱内通" :tabs="tabs1" />
          <ServicesPanel id="惠警应用" :tabs="tabs2" />
          <ServicesPanel id="智慧监狱应用" :tabs="tabs3" />
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
  logo: '/img/demo/menu/jy.png',
  name: '司法监狱',
  desc: ''
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
