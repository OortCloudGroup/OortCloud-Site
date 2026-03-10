<template>
  <div class="home_page vls">
    <div class="page-start">
      <div class="nav flexRowAC" :class="{navFixed:isSticky}">
        <div class="navImg" @click="pushToHeader">
          <img class="navLogo" src="@/assets/software/jz_logo.png" alt="" />
        </div>
        <div v-if="isLogin" class="flexRowAC nav_t">
          <div v-if="!!mainTitle" class="mainNavTitle" @click="mainNavClick(mainTitle)">
            <span>{{ mainTitle }}</span>
            <img class="arrow_img" src="@/assets/navheader/arrow.png" />
            <span class="colLine" />
          </div>
          <div
            v-for="(itd,i) in navList"
            :key="i"
            class="nav_title"
            :class="{nav_t_line: isActPath===itd.path && (itd.title.includes(propTemp) || i>2 || itd.classify) || isActPath===itd.path && !!mainTitle}"
          >
            <span>{{ $t(`menu.${itd.key}`) }}</span>
          </div>
        </div>
        <div class="flexRowAC nav_r">
          <div class="login_but">
            <span>{{ $t('common.login') }}</span>
          </div>
        </div>
      </div>
      <div class="header">
        <div class="header_left">
          <div class="header_left_title">
            {{ $t('home.welcome_title') }}<br />
            {{ $t('home.welcome_title2') }}
          </div>
          <div class="header_left_content">
            {{ $t('home.welcome_desc') }}
          </div>
          <div class="header_left_buttom">
            <div class="buttom1">
              {{ $t('common.login') }}
            </div>
            <div class="buttom2">
              {{ $t('home.buy_btn') }}
            </div>
          </div>
        </div>
      </div>
      <div class="start">
        {{ $t('home.start_conversation') }}
      </div>
      <div class="appSlider">
        <div class="appSlider_controls">
          <img
            class="sliderBtn prev"
            :disabled="!canScrollLeft"
            :class="{ disabled: !canScrollLeft }"
            src="@/assets/software/Arrow_left.png"
            alt=""
            @click="scrollLeft"
          />
          <img
            class="sliderBtn next"
            :disabled="!canScrollRight"
            :class="{ disabled: !canScrollRight }"
            src="@/assets/software/Arrow_right.png"
            alt=""
            @click="scrollRight"
          />
        </div>
        <div ref="appListRef" class="appScrollBox">
          <div v-for="(items, i) in appList" :key="i" class="appItem flexRowAC">
            <img class="appItemImg" :src="items.img" alt="" />
            <div class="appItem_t">
              {{ $t(`app_list.${items.key}`) }}
            </div>
            <div class="appItem_s">
              {{ $t(`app_list.${items.descKey}`) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="productBox proT_d">
      <span class="vlsUs vlsUs3">{{ $t('home.experience_speed') }}</span>{{ $t('home.experience_speed2') }}
    </div>
    <div class="productBox w1380">
      <div class="proT">
        {{ $t('home.enterprise_software') }}
      </div>
      <div class="softBox flexRowAC">
        <div class="softIt flexRowAC">
          <div class="softIt_t">
            {{ $t('home.open_source_title') }}
          </div>
          <div class="softIt_d d1">
            {{ $t('home.open_source_desc1') }}
          </div>
          <div class="softIt_d">
            {{ $t('home.open_source_desc2') }}
          </div>
          <div class="softIt_d">
            <span class="softIt_d_dot">{{ $t('home.open_source_community') }}</span>
          </div>
          <div class="softIt_d">
            <span class="softIt_d_dot">{{ $t('home.open_source_enterprise') }}</span>
          </div>
          <div class="softIt_btn flexRowAC">
            {{ $t('home.version_compare') }}
          </div>
          <img class="softIt_img" src="@/assets/homeImg/home_bg1.png" alt="" />
        </div>
        <div class="softIt it1 flexRowAC">
          <div class="softIt_t">
            {{ $t('home.no_vendor_lock_title') }}
          </div>
          <div class="softIt_d d1">
            {{ $t('home.no_vendor_lock_desc') }}
          </div>
          <div class="softIt_btn flexRowAC">
            <img class="softIt_btn_img" src="@/assets/VLimg2.0/GitHub.png" alt="" />
            {{ $t('home.follow_github') }}
          </div>
          <img class="softIt_img" src="@/assets/homeImg/home_bg2.png" alt="" />
        </div>
        <div class="softIt it2 flexRowAC">
          <div class="softIt_t">
            {{ $t('home.customization_title') }}
          </div>
          <div class="softIt_d d1">
            {{ $t('home.customization_desc') }}
          </div>
          <img class="softIt_img" src="@/assets/homeImg/home_bg3.png" alt="" />
        </div>
        <div class="softIt it3 flexRowAC">
          <div class="softIt_t">
            {{ $t('home.pricing_title') }}
          </div>
          <div class="softIt_d d1">
            {{ $t('home.pricing_desc') }}
          </div>
          <div class="softIt_btn flexRowAC">
            {{ $t('home.view_pricing') }}
          </div>
          <img class="softIt_img" src="@/assets/homeImg/home_bg4.png" alt="" />
        </div>
        <div class="softIt it4 flexRowAC">
          <div class="softIt_t">
            {{ $t('home.apps_title') }}
          </div>
          <div class="softIt_d d1">
            {{ $t('home.apps_desc') }}
          </div>
          <div class="softIt_btn flexRowAC">
            {{ $t('home.browse_apps') }}
          </div>
          <img class="softIt_img" src="@/assets/homeImg/home_bg5.png" alt="" />
        </div>
        <div class="softIt it5 flexRowAC">
          <div class="softIt_t">
            {{ $t('home.not_joking_title') }}
          </div>
          <div class="softIt_d d1">
            {{ $t('home.not_joking_desc') }}
          </div>
          <img class="softIt_img" src="@/assets/homeImg/home_bg6.png" alt="" />
        </div>
      </div>
    </div>
    <div class="productBox use_t w1380">
      <div class="proT" style="padding-bottom: 20px;">
        {{ $t('home.global_users') }}
      </div>
      <div class="use_t_t">
        {{ $t('home.grow_business') }}
      </div>
      <img class="use_t_img" src="@/assets/software/home2.png" alt="" />
    </div>
    <div class="productBox w1380">
      <div class="proT">
        {{ $t('home.unlock_potential') }}
      </div>
      <div class="flexRowAC useBox">
        <div class="seeMore">
          {{ $t('home.start_free') }}
        </div>
        <img class="useImg" src="@/assets/software/icon_sfqn.png" />
      </div>
    </div>

    <div class="bottom_page">
      <div class="bottom_content">
        <div class="bottom_tips">
          <img src="@/assets/software/jz_logo.png" alt="KINGDOM" />
        </div>

        <div class="bottom_main">
          <div class="bottom_left">
            <div class="subscribe_box">
              <input
                type="email"
                class="subscribe_input"
                :placeholder="$t('common.subscribe_placeholder')"
              />
              <button class="subscribe_btn">
                {{ $t('common.subscribe') }}
              </button>
            </div>

            <div class="nav_links">
              <div class="nav_item" @click="viewPath">
                <img src="@/assets/software/wmdgs.png" alt="" />
                <span>{{ $t('common.our_company') }}</span>
              </div>
              <div class="nav_item">
                <img src="@/assets/software/lxwm.png" alt="" />
                <span>{{ $t('common.contact_us') }}</span>
              </div>
              <div class="nav_item">
                <img src="@/assets/software/flys.png" alt="" />
                <span>{{ $t('common.legal_privacy') }}</span>
              </div>
              <div class="nav_item">
                <img src="@/assets/software/aq.png" alt="" />
                <span>{{ $t('common.security') }}</span>
              </div>
            </div>
          </div>

          <div class="bottom_right">
            <form>
              <label for="locale-select">{{ $t('common.language') }}: </label>
              <select id="locale-select" v-model="$i18n.locale">
                <option value="en">
                  English
                </option>
                <option value="zh">
                  简体中文
                </option>
              </select>
            </form>
            <!-- <div class="lang_select">
              <img src="@/assets/bottomImg/chinese.png" alt="简体中文" />
              <span>{{ $t('common.simplified_chinese') }}</span>
              <span class="lang_arrow">▼</span>
            </div> -->

            <div class="company_desc">
              <p>{{ $t('home.company_intro1') }}</p>
              <p>{{ $t('home.company_intro2') }}</p>
            </div>

            <div class="social_icons">
              <img src="@/assets/bottomImg/bo1.png" alt="微博" />
              <img src="@/assets/bottomImg/bo2.png" alt="微信" />
              <img src="@/assets/bottomImg/bo3.png" alt="QQ" />
              <img src="@/assets/bottomImg/bo4.png" alt="LinkedIn" />
              <img src="@/assets/bottomImg/bo5.png" alt="抖音" />
              <img src="@/assets/bottomImg/bo6.png" alt="电话" />
              <img src="@/assets/bottomImg/bo7.png" alt="头条" />
              <img src="@/assets/bottomImg/bo8.png" alt="知乎" />
            </div>
          </div>
        </div>
      </div>

      <div class="icpBox flexRowAC">
        {{ $t('home.website_made_with') }}
        <img class="icpBox_img" src="@/assets/software/jz_logo.png" alt="" />
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          style="opacity: 1; font-size: 14px; color: #fff;"
        >粤ICP备19160414号</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useScroll, useElementBounding } from '@vueuse/core'
// import commonRightPoPover from '@/components/siteNew/components/commonRightPoPover.vue'
import homeApp_a5 from '@/assets/site/homeApp_a5.png'
import homeApp_a6 from '@/assets/site/homeApp_a6.png'
import homeApp_a7 from '@/assets/site/homeApp_a7.png'
import homeApp_yp from '@/assets/site/homeApp_yp.png'
import homeApp_sprh from '@/assets/site/homeApp_sprh.png'
import homeApp_sphy from '@/assets/site/homeApp_sphy.png'
import homeApp_AI from '@/assets/site/homeApp_AI.png'
import homeApp_zhdd from '@/assets/site/homeApp_zhdd.png'
import homeApp_jsxt from '@/assets/site/homeApp_jsxt.png'

definePageMeta({
  layout: 'demo2'
})

// 修改appList，使用key关联语言文件
let appList = ref([])
appList.value = [
  { key: 'ai_office', descKey: 'ai_office_desc', img: homeApp_AI },
  { key: 'command_dispatch', descKey: 'command_dispatch_desc', img: homeApp_zhdd },
  { key: 'real_time_collaboration', descKey: 'real_time_collaboration_desc', img: homeApp_jsxt },
  { key: 'cloud_classroom', descKey: 'cloud_classroom_desc', img: homeApp_a5 },
  { key: 'intelligent_approval', descKey: 'intelligent_approval_desc', img: homeApp_a7 },
  { key: 'secure_email', descKey: 'secure_email_desc', img: homeApp_a6 },
  { key: 'cloud_disk', descKey: 'cloud_disk_desc', img: homeApp_yp },
  { key: 'video_fusion', descKey: 'video_fusion_desc', img: homeApp_sprh },
  { key: 'video_conference', descKey: 'video_conference_desc', img: homeApp_sphy }
]

const appListRef = ref(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(true)

const checkScrollStatus = () => {
  if (!appListRef.value) return
  const { scrollLeft, scrollWidth, clientWidth } = appListRef.value
  canScrollLeft.value = scrollLeft > 0
  canScrollRight.value = scrollLeft + 1 < scrollWidth - clientWidth
}

const scrollLeft = () => {
  appListRef.value.scrollBy({ left: -350, behavior: 'smooth' })
}
const scrollRight = () => {
  appListRef.value.scrollBy({ left: 350, behavior: 'smooth' })
}

onMounted(() => {
  appListRef.value?.addEventListener('scroll', checkScrollStatus)
  checkScrollStatus()
})

// 定义组件属性
const prop = defineProps({
  item: {
    type: String,
    default: ''
  },
  sel: {
    type: [String, Number],
    default: ''
  },
  isLogin: {
    type: Boolean,
    default: true
  }
})

// 初始化变量
const propTemp = ref(prop.item)
const router = useRouter()
const route = useRoute()
const emit = defineEmits(['handle'])

// 核心菜单（使用key关联语言文件）
let menu = [
  { key: 'pricing', path: '/zh/siteNew/price' },
  { key: 'contact_us', path: '/zh/siteNew/contactUs' }
]
const navList = ref(menu)

// 计算当前激活的路由路径
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

// 导航点击事件
// const navClick = (path, t) => {
//   emit('handle', t)
//   router.push(path)
// }

// 主导航点击事件
const mainNavClick = (t) => {
  emit('handle', t)
}

// 返回首页
const pushToHeader = () => {
  router.push('/')
}

// 监听props.item变化
watch(() => prop.item, (newVal) => {
  propTemp.value = newVal
}, { immediate: true })

// 主标题（保留变量避免模板报错）
const mainTitle = ref('')

// 监听路由变化更新菜单状态
watch(isActPath, () => {
  mainTitle.value = ''
  navList.value = menu // 始终使用精简后的菜单
}, { immediate: true })

const anchor = ref(null)
const { y } = useScroll(window)

const { top: anchorTop } = useElementBounding(anchor)

const isSticky = computed(() => {
  return y.value > anchorTop.value
})

const viewPath = () => {
  window.open('https://www.szkingdom.global/', '_blank')
}
</script>

<style scoped lang="scss">
.home_page {
  position: relative;
}

.home_page.vls {
  background-color: #fff;
}

.w1380 {
  width: 1380px;
  margin: 0 auto;
}

// 查看更多
//.seeMore {
//  display: inline-block;
//  padding: 24px 50px;
//  color: #fff;
//  border: 1px solid #2278FF;
//  border-radius: 8px;
//  background: #2278FF;
//  box-shadow: 0px 4px 10px 0px #FF5E1033;
//  font-weight: bold;
//  font-size: 18px;
//}

.platTop {
  text-align: center;
  padding: 40px 0 20px;

  .plat {
    display: inline-block;
    padding: 12px 24px;
    color: #FF5E10;
    font-size: 18px;
    border-radius: 18px;
    border: 1px solid #E9E9E9;
  }

  .VLStream {
    font-family: DingTalk-JinBuTi;
    justify-content: center;
    color: #333333;
    font-weight: bold;
    font-size: 240px;
    line-height: 260px;
    padding: 8px 0;
    position: relative;

    .VLStream_img {
      width: 222px;
      height: 222px;
      position: absolute;
      right: 336px;
      top: -50px;
    }
  }

  .second_title {
    font-family: DingTalk-JinBuTi;
    justify-content: center;
    color: #1B1B1B;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: 0px;
    text-align: center;

  }

  .plat_d {
    color: #333333;
    font-weight: bold;
    font-size: 48px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 40px;
  }

  .plat_a {
    color: #333333;
    font-weight: bold;
    font-size: 58px;
  }

  .plat_cent {
    padding: 20px 0 50px;
    color: #717781;
    font-size: 18px;
  }
}

.useBox {
  position: relative;
  justify-content: center;
  gap: 20px;

  .seeMore {
    padding: 24px 50px;
    color: #fff;
    border: 1px solid #2278FF;
    border-radius: 8px;
    background: #2278FF;
    //box-shadow: 0px 4px 10px 0px #FF5E1033;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 50px;
  }

  .useImg{
    position: absolute;
    width: 106px;
    height: 87px;
    left: 850px;
  }

  .u1 {
    color: #333;
    background-color: #F4F4F4;
    border: 1px solid #F4F4F4;
  }

  .seeMore.u2 {
    display: flex;
    gap: 10px;
    border: 1px solid #333;
    background-color: #333;

    .u2_img {
      width: 28px;
      height: 26px;
    }
  }
}

.WebRTC {
  gap: 24px;
  padding-bottom: 80px;
  animation: scroll 35s linear infinite;

  .webItem {
    width: auto;
    height: 120px;
    border-radius: 16px;
    background: #E8F7FC;
    color: #5C6C00;
    gap: 14px;
    flex-wrap: nowrap;
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.webBottomImg {
  padding: 110px 0;
  height: initial;

  .wBImg {
    width: 100%;
    height: initial;
    border-radius: 24px;
  }
}

.webBottomImg2 {
  padding: 110px 0 0 0;
  height: initial;

  .wBImg {
    width: 100%;
    height: initial;
    border-radius: 24px;
  }
}

.CloudBox {
  padding-bottom: 100px;
  justify-content: space-between;
  align-items: flex-start;

  .cl_t {
    letter-spacing: 0;
    padding-top: 30px;
    padding-bottom: 40px;
    color: #333333;
    font-weight: bold;
    font-size: 54px;
    line-height: 82px;
  }

  .cl_d {
    padding-bottom: 24px;
    color: #717781;
    font-size: 20px;
  }

  .CloudL {
    width: 500px;
  }

  .CloudR {
    width: 700px;
    height: auto;

    .CloudRImg {
      width: 100%;
      height: 100%;
    }
  }

  .CloudR2 {
    width: 700px;
    height: 700px;
  }
}

.ipcBox.CloudBox {
  padding-bottom: 120px;
  justify-content: space-between;
  align-items: flex-start;

  .CloudL {
    width: 450px;
    text-align: right;
    padding-top: 60px;
  }
}

.ipcView.CloudBox {
  .CloudR {
    height: 460px;
  }
}

.productBox {
  text-align: center;
  padding-bottom: 140px;

  .proT {
    padding-bottom: 60px;
    color: #3D3D3D;
    font-weight: bold;
    font-size: 58px;
  }

  .prod {
    padding-bottom: 60px;
    color: #717781;
    font-size: 20px;
  }

  .productImg {
    width: 100%;
    height: 600px;
    padding-bottom: 60px;

    .proImg {
      width: 100%;
      height: 100%;
    }
  }

  .product1 {
    text-align: left;
    color: #fff;
    width: auto;
    height: 510px;
    background-color: #fff;
    border-radius: 24px;
    background: linear-gradient(135deg, #0C1F40 0%, #252734 98%);
    padding: 40px;

    .pro1_1 {
      width: 46px;
      height: 48px;
      margin-bottom: 46px;
    }

    .pro1_1_s {
      padding-bottom: 50px;
      gap: 12px;
      color: #FFFFFF;
      font-weight: bold;
      font-size: 24px;

      .pro1_1_s_b {
        color: #FFFFFF;
        font-size: 14px;
        border-radius: 4px;
        border: 0.5px solid #FFFFFF;
        padding: 4px 10px;
      }
    }

    .pro1_2 {
      gap: 12px;
      padding-bottom: 30px;

      .pro1_2_i {
        width: 16px;
        height: 16px;
      }
    }

    .pro3 {
      padding-top: 35px;
      gap: 30px;

      .pro3_btn {
        flex: 1;
        padding: 20px 0;
        justify-content: center;
        background-color: #fff;
        border-radius: 4px;
        color: #333;
        font-weight: bold;
        font-size: 18px;
      }

      .pro3_btn.p3b {
        background-color: transparent;
        border: 1px solid #fff;
        color: #fff;
      }
    }
  }

  .product2Out {
    padding-bottom: 0;
    height: 220px;
    justify-content: center;
    background-image: url('@/assets/software/downloadBG.png');
    background-size: 100% 100%;

    .product2Out_it {
      opacity: 1;
      color: #333333;
      font-size: 16px;

      .pro2o_l {
        padding-left: 12px;
        width: 600px;
        height: 54px;
        background-color: #F0F0F0;

        .pro2o_l_l {
          width: 34px;
          height: 34px;
          margin-right: 12px;
        }
      }

      .pro2o_2 {
        width: 100px;
        line-height: 54px;
        color: #fff;
        height: 54px;
        background-color: #2278FF;
      }
    }
  }

  .product3Out.productImg {
    height: initial;
    margin-bottom: 60px;
    padding: 40px;
    border-radius: 24px;
    background: linear-gradient(180deg, #FEF9F6 0%, #FFFFFF 100%);
    border: 1px solid #001F5019;

    .p3Box {
      justify-content: space-between;

      .p3 {
        width: 358px;
        height: 170px;
      }
    }

    .p3_title {
      padding-top: 40px;
      text-align: left;
      color: #3D3D3D;
      font-weight: bold;
      font-size: 24px;
    }

    .ps_desc {
      padding-top: 16px;
      padding-left: 60px;
      width: 900px;
      color: #3D3D3D;
      font-size: 20px;
      text-align: left;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: 40px;
        top: 26px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #333;
      }
    }
  }

  .p4Out {
    width: auto;
    height: 870px;
  }

  .p5Out {
    flex-wrap: wrap;
    gap: 40px;

    .p5Item {
      padding: 50px 0;
      flex-direction: column;
      border-radius: 40px;
      background: #FFFFFF;
      box-shadow: 0px 0px 48px 0px #07005714;
      width: 300px;
      height: 300px;
      flex-shrink: 0;
      gap: 10px;
      position: relative;
    }

    .p5Iimg {
      width: 110px;
      height: 110px;
    }

    .p5t {
      color: #3D3D3D;
      font-weight: bold;
      font-size: 24px;
    }

    .p5d {
      color: #717781;
      font-size: 14px;
    }

    .proCode {
      width: 70px;
      height: 70px;
      position: absolute;
      right: 0;
      top: 0;
      border-radius: 0px 0px 0px 0px;
    }
  }
}

.k8sMana_c1 {
  width: 692px;
  height: auto;
}

.vlsUs {
  opacity: 1;
  padding-left: 10px;
  color: #333;
}

.vlsUs1{
background-image: url("@/assets/software/icon_tou_2.png");
}

.vlsUs2{
  background-image: url("@/assets/software/icon_zs_1.png");
}

.vlsUs3{
  background-image: url("@/assets/software/icon_csl_green.png");
  background-size: 100% 100%;
}
.use_t {
  .use_t_t {
    color: #3D3D3D;
    font-weight: normal;
    font-size: 24px;
    text-align: center;
  }

  .use_t_img {
    width: 100%;
  }
}

.proTitleBox.plan {
  padding-bottom: 60px;

  .plan_t {
    padding-bottom: 48px;
    color: #333333;
    font-weight: normal;
    font-size: 24px;
    text-align: center;
  }
}

.proT_d {
  margin: 0 auto;
  width: 800px;
  color: #333333;
  font-weight: normal;
  font-size: 32px;
  text-align: center;

  > .vlsUs {
    padding-left: 6px;
  }
}

.appBox {
  padding-bottom: 60px;
  flex-wrap: wrap;
  gap: 60px 0;

  .appItem {
    flex-shrink: 0;
    width: 33%;
    font-size: 32px;
    flex-direction: column;
    justify-content: center;

    .appItemImg {
      width: 100px;
      height: 100px;
      margin-bottom: 12px;
    }

    .appItem_s{
      padding-top: 10px;
      font-size: 20px;
      color: #97A3B6;
      line-height: 26px;
    }
  }
}

.lineImg {
  width: 24px;
  height: 24px;
  margin-left: 8px;
}

.softBox {
  align-items: flex-start;
  flex-wrap: wrap;
  text-align: left;
  gap: 40px;

  .softIt {
    color: #333333;
    flex-direction: column;
    align-items: flex-start;
    width: calc(50% - 104px);
    height: calc(700px - 44px);
    padding: 40px 40px 0;
    border-radius: 36px;
    background: #FCFCE8;
    border: 2.08px solid #FFD15A3D;
  }

  .softIt_t {
    padding-bottom: 40px;
    font-weight: bold;
    font-size: 32px;
    text-align: left;

  }

  .softIt_d {
    padding-bottom: 12px;
    font-weight: normal;
    font-size: 20px;
    text-align: left;

    &.d1 {
      padding-bottom: 40px;
    }

    .softIt_d_dot {
      font-weight: bold;
      position: relative;
      padding-left: 14px;

      &:before {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        top: 12px;
        left: 0;
        background-color: #333;
        border-radius: 50%;
      }
    }
  }

  .softIt_btn {
    margin-top: 20px;
    padding: 12px 40px;
    border-radius: 12px;
    color: #fff;
    background-color: #2278FF;

    .softIt_btn_img {
      width: 28px;
      height: 28px;
      margin-right: 8px;
    }
  }

  .softIt_img {
    margin: 0 -40px 0 auto;
    height: 278px;
    width: auto;
    border-radius: 12px;
  }
}

.softIt.it1 {
  background: #EEFCE8;
  border: 2.17px solid #975BEC28;

  .softIt_img {
    height: 385px;
  }

  .softIt_btn{
    background-color: #000;
    color: #fff;
  }
}

.softIt.it2 {
  background: #E8F7FC;
  border: 2.08px solid #1ABCFE28;

  .softIt_img {
    height: 484px;
    max-width: 100%;
  }
}

.softIt.it3 {
  background: #FCE9FF;
  border: 2.08px solid #9803AF28;

  .softIt_img {
    height: 392px;
  }
}

.softIt.it4 {
  background: #FFF4EF;
  border: 2.08px solid #FFD3C0;

  .softIt_img {
    height: 392px;
  }
}

.softIt.it5 {
  background: #2B2B2B;
  border: 2.08px solid #000000;
  color: #fff;

  .softIt_img {
    height: 458px;
  }
}
.header{
  padding: 0 262px;
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin: 100px 0;
  .header_left{
    .header_left_title{
      font-family: DingTalk-JinBuTi;
      font-size: 48px;
      font-weight: normal;
      color: #fff;
      margin-bottom: 24px;
    }
    .header_left_content{
      white-space: pre-line;
      font-size: 18px;
      font-weight: normal;
      color: #fff;
      margin-bottom: 40px;
    }
    .header_left_buttom{
      display: flex;
      .buttom1, .buttom2{
        font-size: 18px;
        padding: 20px 40px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;
      }
      .buttom1{
        background-color: #2278FF;
        margin-right: 20px;
        color: #fff;
      }
      .buttom2{
        background-color: #F4F4F4;
        color: #3D3D3D;
      }
    }
  }
  .header_right{
    img{
      width: 600px;
      height: auto;
    }
  }
}
.start{
  padding: 0 262px;
  font-family: DingTalk-JinBuTi;
  text-align: left;
  font-size: 32px;
  color: #fff;
}

.appSlider {
  position: relative;
  padding: 0 262px;
  padding-bottom: 100px;

  .appSlider_controls {
    position: absolute;
    bottom: 60px;
    left: 300px;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 10;

    .sliderBtn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: #97A3B6;
      background: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      &.disabled {
        opacity: 0.3;
        cursor: not-allowed;
        filter: grayscale(100%);
      }
    }
  }

  .appScrollBox {
    display: flex;
    gap: 40px;
    overflow-x: auto;
    padding: 20px 0;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}

// 单个应用卡片
.appItem {
  flex-shrink: 0;
  width: 300px;
  flex-direction: column;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-4px);
  }

  .appItemImg {
    width: 80px;
    height: 80px;
    margin-bottom: 16px;
  }

  .appItem_t {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .appItem_s {
    font-size: 16px;
    color: #97a3b6;
    line-height: 22px;
  }
}

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

.navFixed{
  box-shadow: 0px 0px 4px 2px #333;
  background-color: #333;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  padding: 0 220px;
  width: 100%;
  height: 82px;
  z-index: 11;
}

.nav {
  width: calc(100% - 440px);
  color: #5C5C5C;
  height: 82px;
  justify-content: space-between;
  padding: 0 220px;
  .nav_t {
    cursor: pointer;
    gap: 28px;
    font-size: 18px;
    color: #fff;
  }

  .navImg {
    width: 200px;
    cursor: pointer;
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

.page-start{
  background: url(@/assets/software/jz_bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 100px;
}

.bottom_page {
  background: #252734;
  color: #fff;
}

.bottom_content {
  width: 1210px;
  margin: 0 auto;
  padding: 50px 0;
}

.bottom_tips {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  img{
    width: 170px;
    height: 40px;
  }
}

.bottom_main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.bottom_left {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.subscribe_box {
  display: flex;
  gap: 12px;
  .subscribe_input {
    width: 400px;
    height: 48px;
    padding: 0 16px;
    border: 1px solid #444857;
    border-radius: 8px;
    background: transparent;
    color: #fff;
    font-size: 14px;
    &::placeholder {
      color: #ADB5BD;
    }
  }
  .subscribe_btn {
    height: 48px;
    padding: 0 32px;
    border: none;
    border-radius: 8px;
    background: #1677ff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
      background: #4096ff;
    }
  }
}

.nav_links {
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  .nav_item {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #ADB5BD;
    cursor: pointer;
    font-size: 14px;
    transition: color 0.2s;
    &:hover {
      color: #1677ff;
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
}

.bottom_right {
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.lang_select {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 12px;
  border-bottom: 1px solid #444857;
  cursor: pointer;
  img {
    width: 20px;
    height: 14px;
  }
  .lang_arrow {
    font-size: 12px;
    color: #ADB5BD;
  }
}

.company_desc {
  font-size: 14px;
  line-height: 1.6;
  color: #ADB5BD;
  p {
    margin: 0 0 16px 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.social_icons {
  display: flex;
  gap: 16px;
  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.8;
    }
  }
}

.icpBox {
  color: #ADB5BD;
  font-size: 14px;
  width: 100%;
  justify-content: center;
  height: 60px;
  background: #1A1C24;
  gap: 16px;

  .icpBox_img {
    width: auto;
    height: 25px;
  }
}
</style>
