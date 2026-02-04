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
          <ServicesPanel id="内网“微信”" :tabs="tabs1" />
          <ServicesPanel id="门户与应用市场" :tabs="tabs2" />
          <ServicesPanel id="统一门户与统一认证" :tabs="tabs3" />
          <ServicesPanel id="企业微信智慧工作台" :tabs="tabs4" />
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
  logo: '/img/demo/menu/qy.png',
  name: '企业',
  desc: ''
})
const anchors = ref<Anchor[]>([
  { title: '内网“微信”', href: '#内网“微信”' },
  { title: '门户与应用市场', href: '#门户与应用市场' },
  { title: '统一门户与统一认证', href: '#统一门户与统一认证' },
  { title: '企业微信智慧工作台', href: '#企业微信智慧工作台' }
])
const tabs1 = reactive<Tab[]>([
  {
    name: '内网“微信”',
    logo: '/img/app/nwwx.png',
    content: {
      desc: '私有化部署内网“微信”APP',
      cover: '/img/services/enterprise/wechat.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    }
  }
])
const tabs2 = reactive<Tab[]>([
  {
    name: '门户与应用市场',
    logo: '/img/app/mhyysc.png',
    content: {
      desc: '把小程序搬进APP,快速打造超级APP',
      cover: '/img/services/enterprise/mhyyysc.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    }
  }
])
const tabs3 = reactive<Tab[]>([
  {
    name: '统一门户与统一认证',
    logo: '/img/app/tymh.png',
    content: {
      desc: '信息系统内部门户和统一身份管理系统',
      cover: '/img/services/enterprise/sso.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    }
  }
])
const tabs4 = reactive<Tab[]>([
  {
    name: '企业微信智慧工作台',
    logo: '/img/app/qygzt.png',
    content: {
      desc: '接入企业微信的工作台和移动办公系统',
      cover: '/img/services/enterprise/dashboard.png',
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
