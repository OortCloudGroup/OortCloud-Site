<template>
  <div class="nav flexRowAC" :class="{navFixed:isFixed}">
    <div style="width: 300px;text-align: center;">
      <img class="navLogo" src="@/assets/bottomImg/logo1.png" alt="" />
    </div>
    <div class="flexRowAC nav_t">
      <div
        v-for="(itd,i) in navList"
        :key="i"
        class="nav_title"
        :class="{nav_t_line:isActPath===itd.path&&(itd.title.includes(propTemp)|| i>2 || i<3&&itd.path!=='/zh/siteNew')}"
        @click="navClick(itd.path,itd.title )"
      >
        <span>{{ itd.title }}</span>
      </div>
    </div>
    <div class="flexRowAC nav_r">
      <NuxtLink to="http://oort.oortcloudsmart.com:23410/bus/apaas-web/console_manage/index.html" target="_blank">
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
import { ref, onMounted, defineEmits, computed, onUnmounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import commonRightPoPover from './components/commonRightPoPover.vue'
// import { useI18n } from 'vue-i18n'

// const { locale, t } = useI18n()
// let lang = ref('')
// let langText = ref('')
const prop = defineProps(['item', 'sel'])
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
  { title: '应用程序', path: '/zh/siteNew/' },
  { title: '行业', path: '/zh/siteNew/' },
  { title: '社区', path: '/zh/siteNew/' },
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

const isFixed = ref(false)
function handleScroll() {
  const winHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  if (winHeight < 100) {
    isFixed.value = false
  } else {
    isFixed.value = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, true)
})

onUnmounted(() => {
  // 离开该页面需要移除，不然会报错
  window.removeEventListener('scroll', handleScroll, true)
})

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
  { title: '街道', path: '/zh/siteNew/industy/street' },
  { title: '概述', path: '/zh/siteNew/industy/overview' },
  { title: '功能', path: '/zh/siteNew/' },
  { title: '下载', path: '/zh/siteNew/price' },
  { title: '硬件', path: '/zh/siteNew/contactUs' }
]
watch(isActPath, (newVal) => {
  // 街道
  if (newVal === '/zh/siteNew/industy/street' || route?.meta?.mate) {
    navList.value = menuStreet
  }
  if (newVal === '/zh/siteNew') {
    navList.value = menu
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
  top: 28px;
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
    width: 600px;
    font-size: 18px;
    color: #5C5C5C;
    font-weight: 700;
  }

  .nav_r {
    justify-content: end;
    min-width: 120px;
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
</style>
