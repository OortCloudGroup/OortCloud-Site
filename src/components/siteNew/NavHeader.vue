<template>
  <div class="nav flexRowAC" :class="{navFixed:isSticky}">
    <div class="navImg">
      <img class="navLogo" src="@/assets/bottomImg/logo1.png" alt="" />
    </div>
    <div class="flexRowAC nav_t">
      <div v-if="!!mainTitle" class="mainNavTitle" @click="mainNavClick(mainTitle)">
        <span>{{ mainTitle }}</span>
        <img class="arrow_img" src="@/assets/navheader/arrow.png" />
        <span class="colLine"/>
      </div>
      <div
        v-for="(itd,i) in navList"
        :key="i"
        class="nav_title"
        :class="{nav_t_line:(isActPath===itd.path&&(itd.title.includes(propTemp) || i>2 || itd.classify)) || isActPath===itd.path&& !!mainTitle}"
        @click="navClick(itd.path,itd.title )"
      >
        <span>{{ itd.title }}</span>
      </div>
    </div>
    <div class="flexRowAC nav_r">
      <NuxtLink to="http://oort.oortcloudsmart.com:23410" target="_blank">
        <div class="login_but">
          <span>登录/注册</span>
        </div>
      </NuxtLink>
      <el-popover placement="bottom" trigger="click" popper-class="popover_panel">
        <template #reference>
          <img class="right_info_nine" src="@/assets/navheader/nightpointpng.png" />
        </template>
        <commonRightPoPover @more-opr="moreOpr" />
      </el-popover>
      <!--      <el-dropdown v-if="langText" :hide-on-click="false" @command="toggleLang">-->
      <!--        <div class="flexRowAC langBox">-->
      <!--          <img class="demo_img" src="@/assets/VLimg/lang.png" alt="" />-->
      <!--          <div class="langBoxT">-->
      <!--            {{ langText }}-->
      <!--          </div>-->
      <!--          <el-icon color="#333">-->
      <!--            <CaretBottom />-->
      <!--          </el-icon>-->
      <!--        </div>-->
      <!--        <template #dropdown>-->
      <!--          <el-dropdown-menu>-->
      <!--            <el-dropdown-item command="zh" :disabled="lang==='zh'">-->
      <!--              简体中文-->
      <!--            </el-dropdown-item>-->
      <!--            <el-dropdown-item command="en" :disabled="lang==='en'">-->
      <!--              English-->
      <!--            </el-dropdown-item>-->
      <!--          </el-dropdown-menu>-->
      <!--        </template>-->
      <!--      </el-dropdown>-->
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import commonRightPoPover from './components/commonRightPoPover.vue'
// import { useI18n } from 'vue-i18n'

// const { locale, t } = useI18n()
// let lang = ref('')
// let langText = ref('')
const prop = defineProps(['item', 'sel', 'isSticky'])
const propTemp = ref(prop.item)
const router = useRouter()
const route = useRoute()
const isActPath = computed(() => {
  let routePath = route.path
  if (route.path === '/serviceExtend') {
    routePath = '/service'
  }
  if (route.path === '/productworkUp' || route.path === '/productxoa' || route.path === '/productaPaas' || route.path === '/productmPaas') {
    routePath = '/product'
  }
  return routePath
})
const emit = defineEmits(['handle'])
let menu = [
  { title: '应用程序', path: '/zh/siteNew' },
  { title: '行业', path: '/zh/siteNew' },
  { title: '社区', path: '/zh/siteNew' },
  { title: '定价', path: '/zh/siteNew/price' },
  { title: '联系方式', path: '/zh/siteNew/contactUs' }
]
const navList = ref(menu)

// const toggleLang = (val) => {
//   lang.value = val === 'en' ? 'en' : 'zh'
//   langText.value = val === 'en' ? 'English' : '简体中文'
// }
const navClick = (path, t) => {
  emit('handle', t)
  router.push(path)
}

const mainNavClick = (t) => {
  emit('handle', t)
}

// watch(() => locale.value, () => {
//   navList.value.forEach(item => {
//     item.title = t('menu.' + item.path)
//   })
// })
//
// onMounted(() => {
//   lang = locale
//   toggleLang(lang.value)
// })
watch(() => prop.item, (newVal) => {
  propTemp.value = newVal
}, { immediate: true })

let menuStreet = [
  { title: '首页', classify: 'streeet', path: '/zh/siteNew' },
  { title: '街道', classify: 'streeet', path: '/zh/siteNew/industy/street' },
  { title: '概述', classify: 'streeet', path: '/zh/siteNew/industy/overview' },
  { title: '功能', classify: 'streeet', path: '/zh/siteNew/price' },
  { title: '下载', classify: 'streeet', path: '/zh/siteNew/industy/download' },
  { title: '硬件', classify: 'streeet', path: '/zh/siteNew/contactUs' }
]

const MAIN_MENU = [
  {
    mainTitle: '问题反馈',
    subMenuItems: [
      { id: 'summary', title: '概括', path: '/zh/siteNew/software/problemFeedback' },
      { id: 'function', title: '功能', path: '' }
    ]
  },
  {
    mainTitle: '云备忘录',
    subMenuItems: [
      { id: 'summary', title: '概括', path: '/zh/siteNew/software/cloudMemo' },
      { id: 'function', title: '功能', path: '' }
    ]
  },
  {
    mainTitle: '云相册',
    subMenuItems: [
      { id: 'summary', title: '概括', path: '/zh/siteNew/software/cloudAlbum' },
      { id: 'function', title: '功能', path: '' }
    ]
  },
  {
    mainTitle: '云盘',
    subMenuItems: [
      { id: 'summary', title: '概括', path: '/zh/siteNew/software/cloudDisk' },
      { id: 'function', title: '功能', path: '' }
    ]
  },
  {
    mainTitle: '云文档',
    subMenuItems: [
      { id: 'summary', title: '概括', path: '/zh/siteNew/software/cloudDocument' },
      { id: 'function', title: '功能', path: '' }
    ]
  },
  {
    mainTitle: '云清单',
    subMenuItems: [
      { id: 'summary', title: '概括', path: '/zh/siteNew/software/cloudList' },
      { id: 'function', title: '功能', path: '' }
    ]
  },
  {
    mainTitle: 'WMS',
    subMenuItems: [
      { id: 'summary', title: '概括', path: '/zh/siteNew/software/wms' },
      { id: 'function', title: '功能', path: '' }
    ]
  },
  {
    mainTitle: '任务管理',
    subMenuItems: [
      { id: 'summary', title: '概括', path: '/zh/siteNew/software/taskManagement' },
      { id: 'function', title: '功能', path: '' }
    ]
  },
  {
    mainTitle: '合同管理',
    subMenuItems: [
      { id: 'summary', title: '概括', path: '/zh/siteNew/software/contractManagement' },
      { id: 'function', title: '功能', path: '' }
    ]
  },
  {
    mainTitle: '文档管理',
    subMenuItems: [
      { id: 'summary', title: '概括', path: '/zh/siteNew/software/documentManagement' },
      { id: 'function', title: '功能', path: '' }
    ]
  },
  {
    mainTitle: '智能客服',
    subMenuItems: [
      { id: 'summary', title: '概括', path: '/zh/siteNew/software/intelligentCustomerService' },
      { id: 'function', title: '功能', path: '' }
    ]
  },
  {
    mainTitle: '知识论坛',
    subMenuItems: [
      { id: 'summary', title: '概括', path: '/zh/siteNew/software/knowledgeForum' },
      { id: 'function', title: '功能', path: '' }
    ]
  },
  {
    mainTitle: '问卷调查',
    subMenuItems: [
      { id: 'summary', title: '概括', path: '/zh/siteNew/software/questionnaireSurvey' },
      { id: 'function', title: '功能', path: '' }
    ]
  }
]

const mainTitle = ref('')

const updateMenuState = (path) => {
  const foundMenu = MAIN_MENU.find(menu =>
    menu.subMenuItems.some(item => item.path === path)
  )
  if (foundMenu) {
    navList.value = foundMenu.subMenuItems
    mainTitle.value = foundMenu.mainTitle
  }
}

watch(isActPath, (newVal) => {
  mainTitle.value = ''
  navList.value = menu //设置默认为主菜单
  // 街道
  if (newVal === '/zh/siteNew/industy/street' || route?.meta?.mate) {
    navList.value = menuStreet
  }
  if (newVal === '/zh/siteNew') {
    navList.value = menu
  }
  if (newVal === '/zh/siteNew/software/problemFeedback' || '/zh/siteNew/software/cloudMemo' ||
      '/zh/siteNew/software/cloudAlbum' || '/zh/siteNew/software/cloudDisk' ||
      '/zh/siteNew/software/cloudDocument' || '/zh/siteNew/software/cloudList' ||
      '/zh/siteNew/software/wms' || '/zh/siteNew/software/taskManagement' ||
      '/zh/siteNew/software/contractManagement' || '/zh/siteNew/software/documentManagement' ||
      '/zh/siteNew/software/intelligentCustomerService' || '/zh/siteNew/software/knowledgeForum' ||
      '/zh/siteNew/software/questionnaireSurvey') {
    updateMenuState(newVal)
  }
}, { immediate: true })

</script>

<style>

.popover_panel {
  width: 400px!important;
  background-color: #EDF3F9!important;
  border-radius: 10px!important;
}

.popover_panel .el-popper__arrow:before {
  background-color: #EDF3F9!important;
}

</style>

<style lang="scss" scoped>

.login_but:hover {
  background-color: #1066ef;
}
.login_but {
  cursor: pointer;
  width: 132px;
  height: 44px;
  margin: 0 10px;
  border-radius: 2px;
  background-color: #2278FF;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
    line-height: 24px;
    letter-spacing: 1px;
  }
}

.right_info_nine {
  width: 46px;
  height: 46px;
  margin: 0 12px;
  cursor: pointer;
  border-radius: 0;
  transition: border-radius 0.5s ease; /* 添加过渡效果 */
}

.right_info_nine:hover {
  border-radius: 50%;
}

:deep(.el-tooltip__trigger:focus-visible) {
  outline: unset;
}

.langBox {
  cursor: pointer;
  margin-left: 20px;
  background: rgba(216, 216, 216, 0.00);
  padding: 12px;
  border: 0.6px solid #333;

  .langBoxT {
    font-size: 14px;
    color: #333;
  }

  img.demo_img {
    width: 16px;
    height: 16px;
  }
}
.navFixed{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 82px;
  z-index: 10;
}

.nav_title::after {
  content: "";
  display: block;
  position: relative;
  width: 36px;
  margin: auto;
  top: 10px;
  border-bottom: 4px solid transparent;
}

.nav_t_line {
  color: #EB691C;
}

.nav_t_line::after {
  border-bottom: 4px solid #EB691C;
}

.nav {
  width: calc(100% - 440px);
  color: #5C5C5C;
  height: 82px;
  justify-content: space-between;
  padding: 0 220px;
  box-shadow: 0px 0px 4px 2px #DADADA;
  background-color: #fff;
  .nav_t {
    cursor: pointer;
    gap: 28px;
    font-size: 18px;
    color: #5C5C5C;
    font-weight: 700;
  }

  .navImg {
    width: 200px;
  }

  .nav_r {
    justify-content: end;
    width: 200px;
  }

  .navLogo {
    height: 48px;
    background-size: cover;
  }

  .demo_img {
    width: 24px;
    height: 24px;
    background-size: cover;
    margin-right: 8px;
  }
}

:deep(.el-dialog){
  padding: 0;

  .el-dialog__header{
    padding: 0;
  }
}

.mainNavTitle{
  display: flex;
  align-items: center;
  .arrow_img{
    width: 18px;
  }
  .colLine{
    width: 1.5px;
    height: 20px;
    background: #CCC;
    margin-left: 17px;
  }
}

</style>
