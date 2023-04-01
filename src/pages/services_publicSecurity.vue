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
          <ServicesPanel :tabs="tabs1" id="华为IdeaHub警务宝"/>
          <ServicesPanel :tabs="tabs1" id="移动警务"/>
          <ServicesPanel :tabs="tabs1" id="治安宝"/>
          <ServicesPanel :tabs="tabs1" id="为民服务"/>
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
  logo: '/img/app/jinghui.png',
  name: '公安',
  desc: '让海量警务服务快速赋能基层派出所，从“汗水警务”迈向“智慧警务”'
})
const anchors = ref<Anchor[]>([
  { title: '华为IdeaHub警务宝', href: '#华为IdeaHub警务宝' },
  { title: '移动警务', href: '#移动警务' },
  { title: '治安宝', href: '#治安宝' },
  { title: '为民服务', href: '#为民服务' }
])
const tabs1 = reactive<Tab[]>([
  { 
    name: '警务宝一体机',
    logo: '/img/app/jwb.png',
    content: {
      desc: '分局-派出所-警务站多任务多级联动',
      link: '',
      cover: '/img/services/public_security/jwb.png'
    } 
  },
  {
    name: '警务宝应用平台',
    logo: '/img/app/jwb2.png',
    content: {
      desc: '跨网段、多终端、全连接任务协同办理',
      link: '',
      cover: '/img/services/public_security/jwbyy.png'
    } 
  },
  {
    name: '基层一站式工作平台',
    logo: '/img/app/jcpt.png',
    content: {
      desc: '图查要素，屏观态势，打造警务信息化基石',
      link: '',
      cover: '/img/services/public_security/jcpt.png'
    } 
  },
  {
    name: '领导驾驶舱',
    logo: '/img/app/ldjsc2.png',
    content: {
      desc: '领导指挥一屏纵览',
      link: '',
      cover: '/img/services/public_security/ldjsc.png'
    }
  },
  {
    name: '指挥调度一张图',
    logo: '/img/app/zhyzt.png',
    content: {
      desc: '可视化实战指挥调度一张图系统',
      link: '',
      cover: '/img/services/public_security/yzt.png'
    }
  },
  {
    name: '110报警定位服务',
    logo: '/img/home/yycp_27.png',
    content: {
      desc: '110报警精准位置服务',
      link: '',
      cover: '/img/services/public_security/110dw.png'
    }
  },
  {
    name: '合成作战',
    logo: '/img/home/yycp_25.png',
    content: {
      desc: '“情指勤舆”一体化合成作战中心',
      link: '',
      cover: '/img/services/public_security/hczz.png'
    }
  },
  {
    name: '综合预警平台',
    logo: '/img/home/yycp_29.png',
    content: {
      desc: '移动端千万级消息推送平台',
      link: '',
      cover: '/img/services/public_security/yjpt.png'
    }
  },
  {
    name: '移动警务服务总线',
    logo: '/img/home/yycp_7.png',
    content: {
      desc: '基于OpenSergo统一微服务治理警务服务总线软件',
      link: '',
      cover: '/img/services/public_security/ydjw.png'
    }
  },
  {
    name: '案事件督办协作',
    logo: '/img/home/yycp_31.png',
    content: {
      desc: '案事件流转，督办协作管理平台',
      link: '',
      cover: '/img/services/public_security/dbxz.png'
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
    padding-top: 40px;
    width: 100%;
    box-sizing: border-box;
  }
}
</style>