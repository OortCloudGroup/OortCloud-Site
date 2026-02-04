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
          <ServicesPanel id="档案宝" :tabs="tabs1" />
          <ServicesPanel id="项目解决方案" :tabs="tabs2" />
          <ServicesPanel id="外包服务" :tabs="tabs3" />
          <ServicesPanel id="硬件产品" :tabs="tabs4" />
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
  logo: '/img/demo/menu/da.png',
  name: '智慧档案',
  desc: '加强档案数据库的建设，建立与完善档案目录数据库、纸质档案全文数据库和多媒体数据库，建立区域性档案目录和现行文件全文数据库是大势所趋'
})
const anchors = ref<Anchor[]>([
  { title: '档案宝', href: '#档案宝' },
  { title: '项目解决方案', href: '#项目解决方案' },
  { title: '外包服务', href: '#外包服务' },
  { title: '硬件产品', href: '#硬件产品' }
])
const tabs1 = reactive<Tab[]>([
  {
    name: '档案宝',
    logo: '/img/home/dab.png',
    content: {
      desc: '电子档案安全管理平台、声像档案管理系统',
      cover: '/img/services/document/dab.png',
      buttons: [
        { name: '了解更多', link: '/product_archiveSoftware' }
      ]
    }
  }
])
const tabs2 = reactive<Tab[]>([
  {
    name: '项目解决方案',
    logo: '/img/app/xmjjfa.png',
    content: {
      desc: '数字档案馆/室，智慧档案库房',
      cover: '/img/services/document/xmjjfa.png',
      buttons: [
        { name: '了解更多', link: '/product_projectSolution' }
      ]
    }
  }
])
const tabs3 = reactive<Tab[]>([
  {
    name: '外包服务',
    logo: '/img/app/wbfw.png',
    content: {
      desc: '档案整理、数字化加工、档案信息化咨询',
      cover: '/img/services/document/wbfw.png',
      buttons: [
        { name: '了解更多', link: '/product_outService' }
      ]
    }
  }
])
const tabs4 = reactive<Tab[]>([
  {
    name: '硬件产品',
    logo: '/img/home/yjcp.png',
    content: {
      desc: '密集架、扫描仪、除湿机、档案盒',
      cover: '/img/services/document/yjcp.png',
      buttons: [
        { name: '了解更多', link: '/product_outService' }
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
