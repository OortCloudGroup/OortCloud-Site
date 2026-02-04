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
          <ServicesPanel id="专属“微信”IMandMiniprogram" :tabs="tabs1" />
          <ServicesPanel id="政务服务GovernmentServices" :tabs="tabs2" />
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
  logo: '/img/demo/menu/hw.png',
  name: '海外[一带一路] English',
  desc: ''
})
const anchors = ref<Anchor[]>([
  { title: '专属“微信”IM And Mini Program', href: '#专属“微信”IMandMiniprogram' },
  { title: '政务服务 Government Services', href: '#政务服务GovernmentServices' }
])
const tabs1 = reactive<Tab[]>([
  {
    name: '专属“微信”IM And Mini Program',
    logo: '/img/app/zfwx.png',
    content: {
      desc: '应用定制开发一站式服务',
      cover: '/img/services/oversea/wx.png',
      buttons: [
        { name: '了解更多', link: '' }
      ]
    }
  }
])
const tabs2 = reactive<Tab[]>([
  {
    name: '政务服务 Government Services',
    logo: '/img/app/zwfw.png',
    content: {
      desc: 'IT驻场运营运维',
      cover: '/img/services/oversea/zw.png',
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
