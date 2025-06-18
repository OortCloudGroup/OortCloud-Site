<template>
  <div class="nav flexRowAC" :class="{navFixed:isSticky}">
    <div class="navImg">
      <img class="navLogo" src="@/assets/bottomImg/logo1.png" alt="" />
    </div>
    <div class="flexRowAC nav_t">
      <div class="nav_t_l" @click="showList">
        <span>{{ menuTitle }}</span>
        <img
          class="nav_t_l_img"
          src="@/assets/navheader/arrow.png"
        />
      </div>
      <div
        v-for="(item,i) in navList"
        :key="i"
        class="nav_title"
        :class="{'nav_t_line': activeIndex === i}"
        @click="navClick(item,i)"
      >
        <span>{{ item.subTitle }}</span>
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
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import commonRightPoPover from './components/commonRightPoPover.vue'

const route = useRoute()
const router = useRouter()
const emit = defineEmits(['showList', 'backMainPage'])
const props = defineProps({
  menu: {
    type: Object,
    default: () => ({ title: '', subMenuItems: [] })
  },
  isSticky: {
    type: Boolean,
    default: true
  },
  isOpen: {
    type: Boolean,
    default: false
  },
  mainMenu: {
    type: Array,
    required: true
  },
  activeIdx: {
    type: Number,
    default: 0
  }
})

watch(() => props.isOpen, (newVal) => {
  isOpenSub.value = newVal
  emit('showList', isOpenSub.value)
})

const menuTitle = ref(props.menu.title)
const navList = ref([...props.menu.subMenuItems])
const activeIndex = ref(props?.activeIdx)
// 监听props.menu变化
watch(() => props.menu, (newMenu) => {
  menuTitle.value = newMenu.title
  navList.value = [...newMenu.subMenuItems]
  activeIndex.value = 0
}, { deep: true })

const mainMenuData = ref([...props.mainMenu])

watch(() => route.path, (newPath) => {
  const matchedMenu = mainMenuData.value.find(menu =>
    menu.subMenuItems.some(item => item.path === newPath))
  if (matchedMenu) {
    menuTitle.value = matchedMenu?.title
    navList.value = matchedMenu?.subMenuItems
    let numIndex = matchedMenu?.subMenuItems.findIndex(item => item.path === newPath)
    activeIndex.value = numIndex
  }
  if (newPath === '/zh/siteNew') {
    emit('backMainPage')
  }
}, { immediate: false })

const navClick = (item, index) => {
  activeIndex.value = index
  router.push(item?.path)
}

const isOpenSub = ref(props.isOpen)
const showList = () => {
  isOpenSub.value = !isOpenSub.value
  emit('showList', isOpenSub.value, activeIndex.value)
}

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
    .nav_t_l{
      display: flex;
      align-items: center;
      gap:1px;
      padding-right: 20px;
      border-right: 2px solid #C3C3C3;
      .nav_t_l_img{
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
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
</style>
