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
          <ServicesPanel id="AIoTPaaS物联网服务平台" :tabs="tabs1" />
          <ServicesPanel id="硬核物联网" :tabs="tabs2" />
          <ServicesPanel id="动环盒子（4G）" :tabs="tabs3" />
          <ServicesPanel id="动环交换机（4G）" :tabs="tabs4" />
          <ServicesPanel id="5G动环网关" :tabs="tabs5" />
          <ServicesPanel id="路由器" :tabs="tabs6" />
          <ServicesPanel id="红环main_loop消费型电子" :tabs="tabs7" />
          <ServicesPanel id="硬件定制" :tabs="tabs8" />
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
  logo: '/img/demo/menu/wlw.png',
  name: '物联网与硬件定制',
  desc: ''
})
const anchors = ref<Anchor[]>([
  { title: 'AIoTPaaS物联网服务平台', href: '#AIoTPaaS物联网服务平台' },
  { title: '硬核物联网', href: '#硬核物联网' },
  { title: '动环盒子（4G）', href: '#动环盒子（4G）' },
  { title: '动环交换机（4G）', href: '#动环交换机（4G）' },
  { title: '5G动环网关', href: '#5G动环网关' },
  { title: '路由器', href: '#路由器' },
  { title: '红环main_loop消费型电子', href: '#红环main_loop消费型电子' },
  { title: '硬件定制', href: '#硬件定制' }
])
const tabs1 = reactive<Tab[]>([
  {
    name: 'AIoTPaaS物联网服务平台',
    logo: '/img/app/AiIOT.png',
    content: {
      desc: '面向智慧城市智能计算，智能装备，智能感知设备的物联网PaaS平台',
      cover: '/img/services/smart_police_station/zhyzt.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    }
  }
])
const tabs2 = reactive<Tab[]>([
  {
    name: '硬核物联网',
    logo: '/img/app/zhxz.png',
    content: {
      desc: '硬核物联网',
      cover: '/img/services/epidemic/fk.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    }
  }
])
const tabs3 = reactive<Tab[]>([
  {
    name: '动环盒子（4G）',
    logo: '/img/app/dhhz.png',
    content: {
      desc: '带温湿度、光感、电源1进10路出，带电池和4G告警模块的动环监控',
      cover: '/img/services/iot/dhhz.png',
      buttons: [
        { name: '了解更多', link: '/product_dynamicRingBox' }
      ]
    }
  }
])
const tabs4 = reactive<Tab[]>([
  {
    name: '动环交换机（4G）',
    logo: '/img/app/dhjhj.png',
    content: {
      desc: '带交换机功能的动环监控',
      cover: '/img/services/iot/dhjhj.png',
      buttons: [
        { name: '了解更多', link: '/product_dynamicLoopSwitch' }
      ]
    }
  }
])
const tabs5 = reactive<Tab[]>([
  {
    name: '5G动环网关',
    logo: '/img/app/5Gdh.png',
    content: {
      desc: '带5G数据网关，可以实现远程控制的动环监控',
      cover: '/img/services/iot/dhwg.png',
      buttons: [
        { name: '了解更多', link: '/product_dynamicGateway' }
      ]
    }
  }
])
const tabs6 = reactive<Tab[]>([
  {
    name: '路由器',
    logo: '/img/home/router.png',
    content: {
      desc: '多功能路由器、5G工业路由器、无线路由器、4G工业路由器',
      cover: '/img/services/iot/router.png',
      buttons: [
        { name: '了解更多', link: '/product_router' }
      ]
    }
  }
])
const tabs7 = reactive<Tab[]>([
  {
    name: '红环main_loop消费型电子',
    logo: '/img/app/zhxz.png',
    content: {
      desc: '红环main_loop系列消费电子产品',
      cover: '/img/services/epidemic/fk.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    }
  }
])
const tabs8 = reactive<Tab[]>([
  {
    name: '硬件定制',
    logo: '/img/app/yjdz.png',
    content: {
      desc: '多功能路由器、5G工业路由器、无线路由器、4G工业路由器',
      cover: '/img/services/iot/yjdz.png',
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
