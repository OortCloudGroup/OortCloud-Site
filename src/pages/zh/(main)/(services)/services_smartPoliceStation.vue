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
          <ServicesPanel id="华为IdeaHub警务宝" :tabs="tabs1" />
          <ServicesPanel id="基层民警一体化工作平台" :tabs="tabs2" />
          <ServicesPanel id="指挥一张图" :tabs="tabs3" />
          <ServicesPanel id="枪弹装备室" :tabs="tabs4" />
          <ServicesPanel id="领导驾驶舱" :tabs="tabs5" />
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
  logo: '/img/demo/menu/zhpcs.png',
  name: '智慧派出所',
  desc: '让海量警务服务快速赋能基层派出所，从“汗水警务”迈向“智慧警务”'
})
const anchors = ref<Anchor[]>([
  { title: '华为IdeaHub警务宝', href: '#华为IdeaHub警务宝' },
  { title: '基层民警一体化工作平台', href: '#基层民警一体化工作平台' },
  { title: '指挥一张图', href: '#指挥一张图' },
  { title: '枪弹装备室', href: '#枪弹装备室' },
  { title: '领导驾驶舱', href: '#领导驾驶舱' }
])
const tabs1 = reactive<Tab[]>([
  {
    name: '华为IdeaHub警务宝',
    logo: '/img/app/jwb.png',
    content: {
      desc: '华为IdeaHub智慧屏+奥尔特云警务应用平台',
      cover: '/img/services/smart_police_station/ideaHub.png',
      buttons: [
        { name: '了解更多', link: '/JWBdetail' },
        { name: '立即购买', link: 'https://marketplace.huaweicloud.com/contents/ee446d40-ce7c-447f-84e9-4ca0a1fe2f0f' },
        { name: '在线体验', link: 'http://map.oort.oortcloudsmart.com:31610/oort/oortcloud-policefront/console_manage/index.html#/' }
      ]
    }
  }
])
const tabs2 = reactive<Tab[]>([
  {
    name: '基层民警一体化工作平台',
    logo: '/img/home/yycp_21.png',
    content: {
      desc: '图查要素，屏观态势，打造警务信息化基石',
      cover: '/img/services/smart_police_station/jcmj.png',
      buttons: [
        { name: '了解更多', link: '' },
        { name: '立即购买', link: '' },
        { name: '在线体验', link: '' }
      ]
    }
  }
])
const tabs3 = reactive<Tab[]>([
  {
    name: '指挥一张图',
    logo: '/img/app/zhyzt.png',
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
const tabs4 = reactive<Tab[]>([
  {
    name: '枪弹装备室',
    logo: '/img/app/qd.png',
    content: {
      desc: '枪弹柜、警用装备柜及其管理平台',
      cover: '/img/services/smart_police_station/qdzbs.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    }
  }
])
const tabs5 = reactive<Tab[]>([
  {
    name: '领导驾驶舱',
    logo: '/img/app/ldjsc2.png',
    content: {
      desc: '领导指挥一屏纵览',
      cover: '/img/services/smart_police_station/ldjsc.png',
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
