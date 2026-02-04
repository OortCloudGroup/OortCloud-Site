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
          <ServicesPanel id="消防宝" :tabs="tabs1" />
          <ServicesPanel id="消防指挥调度" :tabs="tabs2" />
          <ServicesPanel id="消防战训管理" :tabs="tabs3" />
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
  logo: '/img/demo/menu/xf.png',
  name: '消防',
  desc: ''
})
const anchors = ref<Anchor[]>([
  { title: '消防宝', href: '#消防宝' },
  { title: '消防指挥调度', href: '#消防指挥调度' },
  { title: '消防战训管理', href: '#消防战训管理' }
])
const tabs1 = reactive<Tab[]>([
  {
    name: '消防宝',
    logo: '/img/app/xfb.png',
    content: {
      desc: '战备勤管理与消防指挥研判平台',
      cover: '/img/services/fire_fighting/xfb.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    }
  }
])
const tabs2 = reactive<Tab[]>([
  {
    name: '消防指挥调度',
    logo: '/img/app/xfzhdd.png',
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
const tabs3 = reactive<Tab[]>([
  {
    name: '消防战训管理',
    logo: '/img/app/xfzxgl.png',
    content: {
      desc: '消防战训管理',
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
