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
          <ServicesPanel :tabs="tabs1" id="智慧城管平台"/>
          <ServicesPanel :tabs="tabs2" id="综合行政执法平台"/>
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
  logo: '/img/app/chengguan.png',
  name: '城管',
  desc: '加强档案数据库的建设，建立与完善档案目录数据库、纸质档案全文数据库和多媒体数据库，建立区域性档案目录和现行文件全文数据库是大势所趋'
})
const anchors = ref<Anchor[]>([
  { title: '智慧城管平台', href: '#智慧城管平台' },
  { title: '综合行政执法平台', href: '#综合行政执法平台' },
])
const tabs1 = reactive<Tab[]>([
  { 
    name: '智慧城管平台',
    logo: '/img/app/zfwx.png',
    content: {
      desc: '智慧城管大数据云平台',
      cover: '/img/services/city_manager/cgpt.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    } 
  }
])
const tabs2 = reactive<Tab[]>([
  { 
    name: '综合行政执法平台',
    logo: '/img/app/zwfw.png',
    content: {
      desc: '智慧城管综合行政执法平台',
      cover: '/img/services/city_manager/zfpt.png',
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