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
          <ServicesPanel id="微劝导" :tabs="tabs1" />
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
  logo: '/img/demo/menu/jcy.png',
  name: '交警',
  desc: ''
})
const anchors = ref<Anchor[]>([
  { title: '微劝导', href: '#微劝导' }
])
const tabs1 = reactive<Tab[]>([
  {
    name: '微劝导',
    logo: '/img/app/wqd.png',
    content: {
      desc: '落实公安部交管局“一盔一带”行动计划，助力文明城市迎检工作',
      cover: '/img/services/traffic_police/wqd.png',
      buttons: [
        { name: '了解更多', link: '/product_microAdvice' }
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
