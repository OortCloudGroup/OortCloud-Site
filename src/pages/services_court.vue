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
          <ServicesPanel :tabs="tabs1" id="移动办公加密通信服务"/>
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
  logo: '/img/app/fayuan.png',
  name: '法院',
  desc: '加强档案数据库的建设，建立与完善档案目录数据库、纸质档案全文数据库和多媒体数据库，建立区域性档案目录和现行文件全文数据库是大势所趋'
})
const anchors = ref<Anchor[]>([
  { title: '移动办公加密通信服务', href: '#移动办公加密通信服务' }
])
const tabs1 = reactive<Tab[]>([
  { 
    name: '移动办公加密通信服务',
    logo: '/img/app/ydbgjm.png',
    content: {
      desc: '应用定制开发一站式服务',
      cover: '/img/services/enterprise/wechat.png',
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