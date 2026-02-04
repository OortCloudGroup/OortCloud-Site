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
          <ServicesPanel id="疫情指挥调度" :tabs="tabs1" />
          <ServicesPanel id="疫情防控访客管理" :tabs="tabs2" />
          <ServicesPanel id="疫情卡口小战士" :tabs="tabs3" />
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
  logo: '/img/demo/menu/yqfk.png',
  name: '疫情防控',
  desc: '基层社会治理可视化指挥调度一张图系统和智慧社区综合信息平台'
})
const anchors = ref<Anchor[]>([
  { title: '疫情指挥调度', href: '#疫情指挥调度' },
  { title: '疫情防控访客管理', href: '#疫情防控访客管理' },
  { title: '疫情卡口小战士', href: '#疫情卡口小战士' }
])
const tabs1 = reactive<Tab[]>([
  {
    name: '疫情指挥调度',
    logo: '/img/app/yqzhdd.png',
    content: {
      desc: '基层社会治理可视化指挥调度一张图系统和智慧社区综合信息平台',
      cover: '/img/services/smart_police_station/zhyzt.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    }
  }
])
const tabs2 = reactive<Tab[]>([
  {
    name: '疫情防控访客管理',
    logo: '/img/home/yycp_10.png',
    content: {
      desc: '来访预约访客管理系统',
      cover: '/img/services/epidemic/fk.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    }
  }
])
const tabs3 = reactive<Tab[]>([
  {
    name: '疫情卡口小战士',
    logo: '/img/home/xzs.png',
    content: {
      desc: '疫情防控卡口电子哨兵',
      cover: '/img/services/epidemic/xzs.png',
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
