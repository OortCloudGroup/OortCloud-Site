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
          <ServicesPanel id="智慧城管平台" :tabs="tabs1" />
          <ServicesPanel id="综合行政执法平台" :tabs="tabs2" />
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
  logo: '/img/demo/menu/cg.png',
  name: '城管',
  desc: ''
})
const anchors = ref<Anchor[]>([
  { title: '智慧城管平台', href: '#智慧城管平台' },
  { title: '综合行政执法平台', href: '#综合行政执法平台' }
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
