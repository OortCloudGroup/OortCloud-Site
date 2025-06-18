<template>
  <div class="defalut_layout">
    <div ref="anchor" />
    <NavHeader v-if="!subMenuFlag" class="defalut_hea" :is-sticky="isSticky" @handle="handle" />
    <SubNavHeader v-if="subMenuFlag && !diaSubMenuFlag" :main-menu="MAIN_MENU" :is-sticky="isSticky" class="defalut_hea" :menu="menuItems" :is-open="false" :active-idx="activeIdx" @show-list="showList" @back-main-page="backMainPage" />
    <div class="page_body">
      <slot />
      <Bottom />
    </div>
    <el-dialog
      v-model="hVisi"
      width="100%"
      top="0"
      :show-close="false"
      class="headDia"
    >
      <NavHeader v-if="hVisiT && !diaSubMenuFlag" :item="hVisiT" class="defalut_hea" @handle="handle" />
      <SubNavHeader v-else :menu="menuItems" :main-menu="MAIN_MENU" class="defalut_hea" :is-open="true" :active-idx="activeIdx" @show-list="showList" @back-main-page="backMainPage" />
      <industry :item="hVisiT" @handle="handleI" />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useScroll, useElementBounding } from '@vueuse/core'
import Industry from '@/pages/zh/siteNew/industry.vue'
import NavHeader from '@/components/siteNew/NavHeader.vue'
import Bottom from '@/components/siteNew/Bottom.vue'
import SubNavHeader from '@/components/siteNew/SubNavHeader.vue'

const route = useRoute()
const router = useRouter()
let hVisi = ref(false)
let hVisiT = ref('')

const handle = (t) => {
  if (t === '应用程序' || t === '行业' || t === '社区' || t === '街道') {
    hVisiT.value = t
    hVisi.value = true
  } else {
    hVisi.value = false
  }
}

const activeIdx = ref(0)
const showList = (isOpenSub, activeIndex) => {
  hVisiT.value = '应用程序'
  hVisi.value = isOpenSub
  diaSubMenuFlag.value = isOpenSub
  activeIdx.value = activeIndex
}

const subMenuFlag = ref(false)
const menuItems = ref([])
const diaSubMenuFlag = ref(false)
// 选择
const handleI = (val) => {
  updateMenuState(val?.path)
  router.push(val?.path)
}

onMounted(() => {
  updateMenuState(route.path)
})

const updateMenuState = (path) => {
  const matchedMenu = MAIN_MENU.value.find(menu => menu.subMenuItems.some(item => item.path === path))
  if (matchedMenu) {
    menuItems.value = matchedMenu
    subMenuFlag.value = true
    let numIndex = matchedMenu?.subMenuItems.findIndex(item => item.path === path)
    activeIdx.value = numIndex
  } else {
    subMenuFlag.value = false
  }
  diaSubMenuFlag.value = false
  hVisi.value = false
}

const backMainPage = () => {
  subMenuFlag.value = false
}

const MAIN_MENU = ref(
  [
    {
      title: '问题反馈',
      subMenuItems: [
        { id: 'summary', subTitle: '概括', path: '/zh/siteNew/software/problemFeedback' },
        { id: 'function', subTitle: '功能', path: '' }
      ]
    },
    {
      title: '云备忘录',
      subMenuItems: [
        { id: 'summary', subTitle: '概括', path: '/zh/siteNew/software/cloudMemo' },
        { id: 'function', subTitle: '功能', path: '' }
      ]
    },
    {
      title: '云相册',
      subMenuItems: [
        { id: 'summary', subTitle: '概括', path: '/zh/siteNew/software/cloudAlbum' },
        { id: 'function', subTitle: '功能', path: '' }
      ]
    },
    {
      title: '云盘',
      subMenuItems: [
        { id: 'summary', subTitle: '概括', path: '/zh/siteNew/software/cloudDisk' },
        { id: 'function', subTitle: '功能', path: '' }
      ]
    },
    {
      title: '云文档',
      subMenuItems: [
        { id: 'summary', subTitle: '概括', path: '/zh/siteNew/software/cloudDocument' },
        { id: 'function', subTitle: '功能', path: '' }
      ]
    },
    {
      title: '云清单',
      subMenuItems: [
        { id: 'summary', subTitle: '概括', path: '/zh/siteNew/software/cloudList' },
        { id: 'function', subTitle: '功能', path: '' }
      ]
    },
    {
      title: 'WMS',
      subMenuItems: [
        { id: 'summary', subTitle: '概括', path: '/zh/siteNew/software/wms' },
        { id: 'function', subTitle: '功能', path: '' }
      ]
    },
    {
      title: '任务管理',
      subMenuItems: [
        { id: 'summary', subTitle: '概括', path: '/zh/siteNew/software/taskManagement' },
        { id: 'function', subTitle: '功能', path: '' }
      ]
    },
    {
      title: '合同管理',
      subMenuItems: [
        { id: 'summary', subTitle: '概括', path: '/zh/siteNew/software/contractManagement' },
        { id: 'function', subTitle: '功能', path: '' }
      ]
    },
    {
      title: '文档管理',
      subMenuItems: [
        { id: 'summary', subTitle: '概括', path: '/zh/siteNew/software/documentManagement' },
        { id: 'function', subTitle: '功能', path: '' }
      ]
    },
    {
      title: '智能客服',
      subMenuItems: [
        { id: 'summary', subTitle: '概括', path: '/zh/siteNew/software/intelligentCustomerService' },
        { id: 'function', subTitle: '功能', path: '' }
      ]
    },
    {
      title: '知识论坛',
      subMenuItems: [
        { id: 'summary', subTitle: '概括', path: '/zh/siteNew/software/knowledgeForum' },
        { id: 'function', subTitle: '功能', path: '' }
      ]
    },
    {
      title: '问卷调查',
      subMenuItems: [
        { id: 'summary', subTitle: '概括', path: '/zh/siteNew/software/questionnaireSurvey' },
        { id: 'function', subTitle: '功能', path: '' }
      ]
    }
  ]
)

const anchor = ref(null)
const { y } = useScroll(window)

const { top: anchorTop } = useElementBounding(anchor)

const isSticky = computed(() => {
  return y.value > anchorTop.value
})
</script>

<style lang="scss" scoped>

.defalut_layout, .page {
}

.page_body {
  /* height: calc(100vh - 82px); */
}

.main_body {
  background-color: #F7F7F7;
  min-height: calc(100vh - 140px - 300px);
}

:deep(.el-dialog) {
  padding: 0;

  .el-dialog__header {
    padding: 0;
  }

  .defalut_hea {
    height: 82px;
    position: relative;
  }
}

</style>
