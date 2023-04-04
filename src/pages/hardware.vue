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
          <ServicesVerticalPanel :tabs="tabs1" id="移动存储"/>
          <ServicesVerticalPanel :tabs="tabs2" id="网络产品"/>
          <ServicesVerticalPanel :tabs="tabs3" id="智能终端"/>
          <ServicesVerticalPanel :tabs="tabs4" id="数据采集"/>
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
  logo: '/img/hardware/hardware.png',
  name: '硬件产品',
  desc: '让海量警务服务快速赋能基层派出所，从“汗水警务”迈向“智慧警务”'
})
const anchors = ref<Anchor[]>([
  { title: '移动存储', href: '#移动存储' },
  { title: '网络产品', href: '#网络产品' },
  { title: '智能终端', href: '#智能终端' },
  { title: '数据采集', href: '#数据采集' }
])
const tabs1 = reactive<Tab[]>([
  { 
    name: '移动U盘',
    logo: '/img/app/icon_u.png',
    content: {
      desc: '移动U盘',
      cover: '/img/hardware/mobileu.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    } 
  },
  { 
    name: '移动硬盘',
    logo: '/img/app/icon_mobileu.png',
    content: {
      desc: '移动硬盘',
      cover: '/img/hardware/ydyp.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    } 
  }
])
const tabs2 = reactive<Tab[]>([
  { 
    name: '网关',
    logo: '/img/home/router.png',
    content: {
      desc: '跨网通讯网关、跨网络安全通讯协议转换系统',
      cover: '/img/hardware/wg.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    } 
  },
  { 
    name: '4G工业路由器',
    logo: '/img/app/dhhz.png',
    content: {
      desc: '奥尔特云|云终端 阅卷Pad',
      cover: '/img/hardware/ly.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    } 
  },
  { 
    name: '5G工业路由器',
    logo: '/img/app/5Gdh.png',
    content: {
      desc: '奥尔特云|云终端 阅卷Pad',
      cover: '/img/hardware/5gly.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    } 
  },
  { 
    name: '交换机',
    logo: '/img/app/dhjhj.png',
    content: {
      desc: '交换机',
      cover: '/img/hardware/jhj.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    } 
  },
])
const tabs3 = reactive<Tab[]>([
  { 
    name: '国产化笔记本',
    logo: '/img/app/icon_pc.png',
    content: {
      desc: '奥尔特云|云终端 笔记本电脑',
      cover: '/img/hardware/cn_pc.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    } 
  },
  { 
    name: '国产平板电脑',
    logo: '/img/app/icon_pad.png',
    content: {
      desc: '奥尔特云|云终端 阅卷Pad',
      cover: '/img/hardware/cn_pad.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    } 
  },
  { 
    name: '消费电子',
    logo: '/img/app/icon_cpu.png',
    content: {
      desc: '消费电子',
      cover: '/img/hardware/cn_pc.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    } 
  },
  { 
    name: 'IOT元件库',
    logo: '/img/app/icon_iot.png',
    content: {
      desc: 'IOT元件库',
      cover: '/img/hardware/cn_pad.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    } 
  }
])
const tabs4 = reactive<Tab[]>([
  { 
    name: '动环盒子',
    logo: '/img/app/icon_box.png',
    content: {
      desc: '动环盒子',
      cover: '/img/hardware/dhhz.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    } 
  },
  { 
    name: '动环交换机',
    logo: '/img/app/icon_change.png',
    content: {
      desc: '动环交换机',
      cover: '/img/hardware/dhjhj.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    } 
  },
  { 
    name: '动环网关',
    logo: '/img/app/icon_wlan.png',
    content: {
      desc: '动环网关',
      cover: '/img/hardware/dhwg.png',
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
  &_main {
    padding-top: 40px;
    width: 100%;
    box-sizing: border-box;
  }
}
</style>