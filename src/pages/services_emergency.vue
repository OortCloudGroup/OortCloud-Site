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
          <ServicesPanel :tabs="tabs1" id="应急宝"/>
          <ServicesPanel :tabs="tabs2" id="应急指挥调度"/>
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
  logo: '/img/app/yingji.png',
  name: '应急',
  desc: '加强档案数据库的建设，建立与完善档案目录数据库、纸质档案全文数据库和多媒体数据库，建立区域性档案目录和现行文件全文数据库是大势所趋'
})
const anchors = ref<Anchor[]>([
  { title: '应急宝', href: '#应急宝' },
  { title: '应急指挥调度', href: '#应急指挥调度' }
])
const tabs1 = reactive<Tab[]>([
  { 
    name: '应急宝',
    logo: '/img/app/yjb.png',
    content: {
      desc: '战备勤管理与应急指挥研判平台',
      cover: '/img/services/enterprise/wechat.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    } 
  }
])
const tabs2 = reactive<Tab[]>([
  { 
    name: '应急指挥调度',
    logo: '/img/app/yjzhdd2.png',
    content: {
      desc: '指挥调度，警情、警力、现场、调度、过程可视',
      cover: '/img/services/smart_police_station/zhyzt.png',
      buttons: [
        { name: '了解更多', link: '' },
        { name: '立即购买', link: '' },
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