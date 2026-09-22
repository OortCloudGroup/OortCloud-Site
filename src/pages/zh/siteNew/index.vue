<template>
  <div class="home_page vls">
    <div class="platTop w1380">
      <!-- <div class="VLStream flexRowAC">
        超级APP
        <br />
        应用大全
      </div> -->
      <!-- <div class="second_title">
        个人和企业面向场景智能化的超级效率战略能力
        <br />
        -- 奥尔特云新一代 新质生产力平台
      </div>
      <div class="plat_d">
        简单、高效、又<span style="color: #2278FF;">实惠</span>!
      </div>
      <div class="flexRowAC useBox">
        <nuxt-link class="seeMore" to="/zh/siteNew/industy/buy">
          立即使用-完全免费
        </nuxt-link>
        <div class="seeMore u1">
          安排演示
        </div>
      </div> -->
      <div class="header">
        <div class="header_left">
          <div class="header_left_title">
            Welcome to the<br />
            OortCloud Super AI Agent
          </div>
          <div class="header_left_content">
            Your everyday Al companion that understands your work, helps you stay focused,<br />
            and moves you from idea to impact with less friction and more flow.
          </div>
          <div class="header_left_buttom">
            <div v-if="isLogin" class="buttom1" @click="handleStart">
              Start
            </div>
            <a v-else class="buttom1" :href="gotoLoginURL" target="_blank" rel="noopener noreferrer">
              Sign in
            </a>
            <nuxt-link class="buttom2" to="/zh/siteNew/industy/buy">
              Buy OortCloud Super AI Agent
            </nuxt-link>
          </div>
        </div>
        <div class="header_right">
          <img src="@/assets/software/gw_img.png" alt="" />
        </div>
      </div>
      <div class="start">
        Start a conversation with these prompts in OortCloud Super AI Agent
      </div>
    </div>
    <!-- <div class="productBox w1380" style="padding-bottom: 10px;">
      <div class="proT" style="margin-top: 60px;">
        应用程序
      </div>
      <div class="flexRowAC appBox">
        <div v-for="(item, i) in appList" :key="i" class="appItem flexRowAC">
          <img class="appItemImg" :src="item.img" alt="" />
          {{ item['t'] }}
          <div class="appItem_s">
            {{ item['dec'] }}
          </div>
        </div>
      </div>
      <div class="flexRowAC useBox">
        <div class="seeMore flexRowAC">
          查看所有应用程序
          <img class="lineImg" src="@/assets/software/price_icon.png" alt="" />
        </div>
      </div>
    </div> -->
    <!-- <div class="w1380 webBottomImg">
      <video class="wBImg" src="/documents/演示视频.mp4" controls autoplay muted />
    </div> -->
    <div class="productBox w1380" style="padding-bottom: 10px;">
      <div class="appSlider" :class="{ 'is-start': !canScrollLeft, 'is-end': !canScrollRight }">
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
        <!-- 横向滚动的应用列表 -->
        <div ref="appListRef" class="appScrollBox">
          <div v-for="(item, i) in appList" :key="i" class="appItem flexRowAC">
            <img class="appItemImg" :src="item.img" alt="" />
            <div class="appItem_t">
              {{ item['t'] }}
            </div>
            <div class="appItem_s">
              {{ item['dec'] }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="productBox w1190 tokenPlanBox">
      <div class="tokenPlan">
        <div class="tokenPlan_header">
          <img class="tokenPlan_logo" src="@/assets/img/tokenPlan/logo.png" alt="" />
          <span class="tokenPlan_name">OortCloud Token Plan</span>
          <span class="tokenPlan_sub">欢迎订阅</span>
        </div>
        <div class="tokenPlan_desc">
          欢迎使用 OortCloud！订阅 OortCloud Token Plan，20元/月起，Qwen, DeepSeek, Kimi, GLM等顶级模型尝鲜，更有<span class="tokenPlan_hl">OortCodex</span>和<span class="tokenPlan_hl">DSH For OortCloud Work</span>以及<span class="tokenPlan_hl">VLStream数据分析生态</span>共享额度，高效开启AI生产力。<br />
          开始使用，登录你的 OortCloud 账户。获得强大模型、高质量的工程、成本分析等。
        </div>
        <div class="tokenPlan_btns">
          <a
            class="tokenPlan_btn primary"
            :href="oortCodexUseURL"
            target="_blank"
            rel="noopener noreferrer"
          >
            立即使用
          </a>
          <nuxt-link class="tokenPlan_btn secondary" to="/zh/siteNew/price">
            升级订阅
          </nuxt-link>
        </div>
        <div class="tokenPlan_carousel">
          <n-carousel
            autoplay
            draggable
            :interval="2000"
            dot-placement="bottom"
            :show-arrow="false"
          >
            <img
              v-for="(item, i) in tokenPlanBanners"
              :key="i"
              class="tokenPlan_carousel_img"
              :src="item"
              alt=""
            />
            <template #dots="{ total, currentIndex, to }">
              <div class="tokenPlan_dots">
                <button
                  v-for="idx in total"
                  :key="idx"
                  type="button"
                  class="tokenPlan_dot"
                  :class="{ active: idx - 1 === currentIndex }"
                  @click="to(idx - 1)"
                >
                  <img
                    :src="idx - 1 === currentIndex ? tokenPlanDotActive : tokenPlanDot"
                    alt=""
                  />
                </button>
              </div>
            </template>
          </n-carousel>
        </div>
        <div class="tokenPlan_footer">
          <span>VLStream在线体验网址:</span>
          <a href="https://vlstream.oortcloudsmart.com:2443/bus/vls-ui/login" target="_blank" rel="noopener noreferrer">
            <img class="tokenPlan_footer_icon" src="@/assets/img/tokenPlan/link.png" alt="" />
            https://vlstream.oortcloudsmart.com:2443/bus/vls-ui/login
          </a>
          <span>默认账号密码: admin / Codex@123456</span>
        </div>
      </div>
    </div>
    <div class="productBox w1190" style="padding-bottom: 0px;">
      <div class="proT" style="padding-bottom: 40px;">
        想象一下，<span class="vlsUs vlsUs2">海量商业智能体</span> 尽在您的指尖
      </div>
    </div>
    <div class="proTitleBox w1190 plan">
      <div class="plan_t">
        有什么需要改进吗?我们有相应的智能体来满足您的需求。
        <br />
        免去复杂流程，不收取额外费用，只需一键安装，即可立即使用。
      </div>
      <div class="plan_t">
        每个智能体都是一个简化流程的利器，为更多人赋予力量!
        <br />
        尽情想象，当每个人都能拥有方便工作的合适工具，并实现完美整合时，将会带来何等影响!
      </div>
    </div>
    <div class="productBox w1190">
      <div class="proT" style="padding-bottom: 0px;">
        提升您的 <span style="color: #2278FF;">工作品质</span>
      </div>
      <div class="w1190 webBottomImg2">
        <video class="wBImg" src="/documents/首页.mp4" controls autoplay muted />
      </div>
    </div>
    <div class="productBox w1190">
      <div class="proT">
        促进生产力的程序
      </div>
      <div class="w1190 webBottomImg">
        <img class="wBImg" src="@/assets/software/home.png" alt="" />
      </div>
      <div class="proT_d">
        <span class="vlsUs vlsUs3">体验真正极速 </span>，告别繁琐数据录入，智能 AI助手，用户界面更快90 亳秒内搞定全部操作--比眨眼还快。
      </div>
    </div>
    <div class="productBox w1190">
      <div class="proT">
        集技术之大成的平台
      </div>
      <div class="platformGrid">
        <div
          v-for="item in platformDevices"
          :key="item.name"
          class="platformGrid_item"
        >
          <div class="platformGrid_frame">
            <img class="platformGrid_img" :src="item.img" :alt="item.name" />
          </div>
          <div class="platformGrid_name">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="productBox w1190">
      <div class="proT">
        企业<span style="color: #2278FF;">软件</span> 应该如此!
      </div>
      <div class="softBox flexRowAC">
        <div class="softIt flexRowAC">
          <div class="softIt_t">
            开源
          </div>
          <div class="softIt_d d1">
            系统技术的背后是一个由超过
            50多名开发者组成的全球社群。我们以开源精神为纽带，共同拥有一个愿景:“创造变革，赋能员工，将公司带入新境界”。
          </div>
          <div class="softIt_d">
            OortCloud 提供两个版本服务:
          </div>
          <div class="softIt_d">
            <span class="softIt_d_dot">社群版: </span>开放源码，100%免费
          </div>
          <div class="softIt_d">
            <span class="softIt_d_dot">企业版: </span>额外应用程序、基础设施及专业服务。
          </div>
          <div class="softIt_btn flexRowAC">
            版本对比
          </div>
          <img class="softIt_img" src="@/assets/homeImg/home_bg1.png" alt="" />
        </div>
        <div class="softIt it1 flexRowAC">
          <div class="softIt_t">
            没有供应商锁定束缚
          </div>
          <div class="softIt_d d1">
            无专有数据格式，只有
            PostgreSQL，数据完全属于您！没有软件束缚，您可以拥有源代码、GitHub访问权限，自由选择在我们的基础设施上托管，或者自行搭建在本地。
          </div>
          <a
            class="softIt_btn flexRowAC"
            href="https://github.com/OortCloudGroup"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img class="softIt_btn_img" src="@/assets/VLimg2.0/GitHub.png" alt="" />
            在GitHub关注我们
          </a>
          <img class="softIt_img" src="@/assets/homeImg/home_bg2.png" alt="" />
        </div>
        <div class="softIt it2 flexRowAC">
          <div class="softIt_t">
            贴心定制化，释放无限想象力
          </div>
          <div class="softIt_d d1">
            使用 Oort Cloud Studio 自动执行操作、设计自定义屏幕、自定义报告或 web 钩子。
          </div>
          <img class="softIt_img" src="@/assets/homeImg/home_bg3.png" alt="" />
        </div>
        <div class="softIt it3 flexRowAC">
          <div class="softIt_t">
            合理定价
          </div>
          <div class="softIt_d d1">
            没有基于使用量的定价，没有追加销售额外功能，没有长期合约束缚，没有托管限制，更没有意外费用...每个用户只有一次性单一价格，所有服务全包。
          </div>
          <div class="softIt_btn flexRowAC">
            查看定价
          </div>
          <img class="softIt_img" src="@/assets/homeImg/home_bg4.png" alt="" />
        </div>
        <div class="softIt it4 flexRowAC">
          <div class="softIt_t">
            200多款社区应用程序
          </div>
          <div class="softIt_d d1">
            基于其开源开发模式，OortCloud 拥有强大的商业应用程序商店。试想一下，无论何种业务需求，都能轻松获取相应的应用程序。
          </div>
          <div class="softIt_btn flexRowAC" @click="browseCommunityApps">
            浏览社群应用程序
          </div>
          <img class="softIt_img" src="@/assets/homeImg/home_bg5.png" alt="" />
        </div>
        <div class="softIt it5 flexRowAC">
          <div class="softIt_t">
            绝不是说说玩而已
          </div>
          <div class="softIt_d d1">
            "大多数软件可能只达到您期望的70%功能和效果。然而，OortCloud
            远远超出预期，将彻底改变市场格局，带来翻天浏览社群应用程序覆地的变革。"- 匿名同行。
          </div>
          <img class="softIt_img" src="@/assets/homeImg/home_bg6.png" alt="" />
        </div>
      </div>
    </div>
    <div class="productBox use_t w1190">
      <div class="proT" style="padding-bottom: 20px;">
        全球 <span style="color: #2278FF;">1.200万</span> 用户
      </div>
      <div class="use_t_t">
        与 OortCloud 携手增长业务
      </div>
      <img class="use_t_img" src="@/assets/software/home2.png" alt="" />
    </div>
    <div class="productBox w1190">
      <div class="proT">
        <span style="color: #2278FF;">释放</span> 您的无限增潜能
      </div>
      <div class="flexRowAC useBox">
        <nuxt-link class="seeMore" to="/zh/siteNew/industy/buy">
          现在开始-免费
        </nuxt-link>
        <img class="useImg" src="@/assets/software/icon_sfqn.png" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useSessionStorage } from '@vueuse/core'
import { NCarousel } from 'naive-ui'
import { getLastIndustry, getMyIndustryList } from '@/api/modules/industryScene'
import { buildIndustryHomepageUrl, getIndustryHomepageUrl } from '@/utils/industryScene'
import config from '@/config/index.js'
// import homeApp_a1 from '@/assets/site/homeApp_a1.png'
// import homeApp_a2 from '@/assets/site/homeApp_a2.png'
// import homeApp_a3 from '@/assets/site/homeApp_a3.png'
// import homeApp_a4 from '@/assets/site/homeApp_a4.png'
// import homeApp_a5 from '@/assets/site/homeApp_a5.png'
// import homeApp_a6 from '@/assets/site/homeApp_a6.png'
// import homeApp_a7 from '@/assets/site/homeApp_a7.png'
// import homeApp_d1 from '@/assets/site/homeApp_d1.png'
// import homeApp_d2 from '@/assets/site/homeApp_d2.png'
// import homeApp_d3 from '@/assets/site/homeApp_d3.png'
// import homeApp_d4 from '@/assets/site/homeApp_d4.png'
// import homeApp_d5 from '@/assets/site/homeApp_d5.png'

// import homeApp_yp from '@/assets/site/homeApp_yp.png'
// import homeApp_sprh from '@/assets/site/homeApp_sprh.png'
// import homeApp_sphy from '@/assets/site/homeApp_sphy.png'
// import homeApp_AI from '@/assets/site/homeApp_AI.png'
// import homeApp_zhdd from '@/assets/site/homeApp_zhdd.png'
// import homeApp_jsxt from '@/assets/site/homeApp_jsxt.png'
// import homeApp_a8 from '@/assets/site/homeApp_a8.png'
// import homeApp_a9 from '@/assets/site/homeApp_a9.png'
// import homeApp_b1 from '@/assets/site/homeApp_b1.png'
// import homeApp_c1 from '@/assets/site/homeApp_c1.png'
// import homeApp_c2 from '@/assets/site/homeApp_c2.png'
// import homeApp_c3 from '@/assets/site/homeApp_c3.png'
// import homeApp_c4 from '@/assets/site/homeApp_c4.png'
// import homeApp_c5 from '@/assets/site/homeApp_c5.png'
import ty from '@/assets/img/ty.png'
import bg from '@/assets/img/bg.png'
import yx from '@/assets/img/yx.png'
import bc from '@/assets/img/bc.png'
import yw from '@/assets/img/yw.png'
import hr from '@/assets/img/hr.png'
import hy from '@/assets/img/hy.png'
import gz from '@/assets/img/gz.png'
import platformCustomPhone from '@/assets/software/custom-phone.png'
import platformUnmannedCabinet from '@/assets/software/unmanned-cabinet.png'
import platformLawRecorder from '@/assets/software/law-recorder.png'
import platformEBadge from '@/assets/software/e-badge.png'
import platformELicensePlate from '@/assets/software/e-license-plate.png'
import platformVlstreamCamera from '@/assets/software/vlstream-camera.png'
import platformAiPrinter from '@/assets/software/ai-printer.png'
import tokenBannerTokenPlan from '@/assets/img/tokenPlan/token-plan.png'
import tokenBannerOortCodex from '@/assets/img/tokenPlan/oortcodex.png'
import tokenBannerDsh from '@/assets/img/tokenPlan/dsh.png'
import tokenBannerVlstream from '@/assets/img/tokenPlan/vlstream.png'
import tokenBannerAiManga from '@/assets/img/tokenPlan/ai-manga.png'
import tokenBannerAiCamera from '@/assets/img/tokenPlan/ai-camera.png'
import tokenPlanDot from '@/assets/img/tokenPlan/dot.png'
import tokenPlanDotActive from '@/assets/img/tokenPlan/dot-active.png'

definePageMeta({
  layout: 'site-new'
})

const route = useRoute()
// 登录态与场景选择弹框由 NavHeader 统一维护（Nuxt useState 全局共享），首页只消费
const siteUserInfo = useState('siteUserInfo', () => null)
const siteSceneDialogVisible = useState('siteSceneDialogVisible', () => false)
const accessTokenStorage = useSessionStorage('accessToken', '')
const tenantIdStorage = useSessionStorage('tenantId', '')
const starting = ref(false)
const getQueryValue = value => Array.isArray(value) ? value[0] : value
const isLogin = computed(() => !!siteUserInfo.value)
const auth = computed(() => ({
  accessToken: accessTokenStorage.value || getQueryValue(route.query.access_token) || '',
  tenantId: tenantIdStorage.value || getQueryValue(route.query.tenant_id) || ''
}))
const oortCodexUseURL = computed(() => {
  const base = 'https://workup.oortcloudsmart.com:2443/bus/apaas-web/oortcodexweb/index.html'
  const token = auth.value.accessToken
  return token ? `${base}?accessToken=${encodeURIComponent(token)}` : base
})
const gotoLoginURL = computed(() => {
  const redirectUri = process.client
    ? window.location.origin + route.path
    : 'https://oortcloudsmart.com/zh/siteNew/'
  return config.busURL +
    '/bus/apaas-web/loginPage/index.html?appname=' +
    encodeURIComponent(config.ssoAppName) +
    '&redirect_uri=' +
    encodeURIComponent(redirectUri)
})

// 已登录后按钮为 Start：点击直达当前生效场景（行业 / 场景 / 职能）的首页
const handleStart = async() => {
  if (starting.value) return
  starting.value = true
  try {
    const entityId = siteUserInfo.value?.user_id || siteUserInfo.value?.userId || ''
    const selectedRes = await getLastIndustry(auth.value, entityId)
    const currentId = selectedRes?.code === 200 ? selectedRes.data?.industry_id : ''
    const listRes = await getMyIndustryList(auth.value)
    const list = listRes?.code === 200 ? (listRes.data?.list || {}) : {}
    const allConfig = [...(list.hyConfig || []), ...(list.cjConfig || []), ...(list.znConfig || [])]
    const currentScene = allConfig.find(item => item.industry_id === currentId)
    const homepageUrl = buildIndustryHomepageUrl(getIndustryHomepageUrl(currentScene))
    if (homepageUrl) {
      window.location.href = homepageUrl
      return
    }
    // 没有当前生效场景（或场景未配置首页）时，打开场景选择弹框让用户先选场景
    siteSceneDialogVisible.value = true
  } catch {
    siteSceneDialogVisible.value = true
  } finally {
    starting.value = false
  }
}

const browseCommunityApps = () => {
  if (!isLogin.value) {
    navigateTo('/zh/siteNew/software/unLogin')
    return
  }
  const token = auth.value.accessToken
  window.sessionStorage.setItem('tempObj', JSON.stringify({
    accessToken: token,
    fromWhere: 'console_manage'
  }))
  window.open(
    config.busURL + config.frontURLStr + '/app_market/index.html#/moreApp?accessToken=' + token + '&fromWhere=console_manage',
    '_blank'
  )
}

let appList = ref([])
appList.value = [

  { t: 'OortCodex', dec: '把想法变成现实的能力属于每一个人', img: ty },
  { t: 'DSH For OortCloud Work', dec: '工作任务自动完成', img: bg },
  { t: 'OortCodex IDE', dec: '面向高效的软件工程化交付场景', img: bc },

  { t: '营销', dec: 'AI 生成话术，分析回放展示活动', img: yx },
  { t: '运维', dec: 'AI 故障排查，流程监控 7*24 小时', img: yw },
  { t: 'HR', dec: 'AI 筛选简历，面试意向绩效分析', img: hr },

  { t: '会议', dec: 'AI 生成纪要，多语言实时转写', img: hy },
  { t: '感知', dec: '多模态理解，智能研判资产安全', img: gz }
]
// appList.value = [
//   { t: '通知公告', img: homeApp_a1 },
//   { t: '备忘录', img: homeApp_a2 },
//   { t: '视频会议', img: homeApp_a3 },
//   { t: '人脸识别', img: homeApp_a4 },
//   { t: '云课堂', img: homeApp_a5 },
//   //
//   { t: '安全邮箱', img: homeApp_a6 },
//   { t: '智能审批', img: homeApp_a7 },
//   { t: '随手拍', img: homeApp_a8 },
//   { t: '会议助手', img: homeApp_a9 },
//   { t: '微投票', img: homeApp_b1 },
//   //
//   { t: '微清单', img: homeApp_c1 },
//   { t: '微问卷', img: homeApp_c2 },
//   { t: '差旅标准', img: homeApp_c3 },
//   { t: '工作汇报', img: homeApp_c4 },
//   { t: '即时通讯', img: homeApp_c5 },
//   //
//   { t: '新闻播报', img: homeApp_d1 },
//   { t: '每日菜谱', img: homeApp_d2 },
//   { t: '服务缴费', img: homeApp_d3 },
//   { t: '打卡签到', img: homeApp_d4 },
//   { t: '云相册', img: homeApp_d5 }
// ]

const tokenPlanBanners = [
  tokenBannerTokenPlan,
  tokenBannerOortCodex,
  tokenBannerAiManga,
  tokenBannerVlstream,
  tokenBannerDsh,
  tokenBannerAiCamera
]

const platformDevices = [
  { name: '定制手机', img: platformCustomPhone },
  { name: '无人值守设备柜', img: platformUnmannedCabinet },
  { name: '执法记录仪', img: platformLawRecorder },
  { name: '电子工牌', img: platformEBadge },
  { name: '电子车牌', img: platformELicensePlate },
  { name: 'VLStream AI 摄像机', img: platformVlstreamCamera },
  { name: 'AI 自助打印机', img: platformAiPrinter }
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

.w1190 {
  width: 1190px;
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

.platformGrid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 70px 36px;
  padding: 60px 0 110px;

  &_item {
    width: 232px;
    height: 240px;
    text-align: center;
  }

  &_frame {
    background: #fff;
  }

  &_img {
    width: 100%;
    height: 100%;
    display: block;
  }

  &_name {
    margin-top: 14px;
    font-size: 16px;
    color: #333;
    line-height: 1.4;
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
    line-height: 30px;
    font-size: 20px;
    text-align: center;
  }
}

.proT_d {
  margin: 0 auto;
  width: 600px;
  color: #333333;
  font-weight: normal;
  font-size: 20px;
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
  align-items: stretch;
  flex-wrap: wrap;
  text-align: left;
  gap: 40px;

  .softIt {
    color: #333333;
    flex-direction: column;
    align-items: flex-start;
    width: calc(50% - 104px);
    min-height: calc(700px - 44px);
    height: auto;
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
    text-decoration: none;
    cursor: pointer;

    .softIt_btn_img {
      width: 28px;
      height: 28px;
      margin-right: 8px;
    }
  }

  .softIt_img {
    margin: auto -40px 0 auto;
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
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin-bottom: 100px;
  .header_left{
    .header_left_title{
      font-family: DingTalk-JinBuTi;
      font-size: 48px;
      font-weight: normal;
      color: #333333;
      margin-bottom: 24px;
    }
    .header_left_content{
      font-size: 18px;
      font-weight: normal;
      color: #333333;
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
  font-family: DingTalk-JinBuTi;
  text-align: left;
  font-size: 32px;
  color: #333333;
}

.appSlider {
  position: relative;
  padding-bottom: 100px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 100px;
    width: 120px;
    pointer-events: none;
    z-index: 2;
    opacity: 1;
    transition: opacity 0.2s;
  }

  &::before {
    left: 0;
    background: linear-gradient(269deg, #ffffff00 0%, #ffffff 99%);
  }

  &::after {
    right: 0;
    background: linear-gradient(91deg, #ffffff00 0%, #ffffff 99%);
  }

  &.is-start::before {
    opacity: 0;
  }

  &.is-end::after {
    opacity: 0;
  }

  .appSlider_controls {
    position: absolute;
    bottom: 60px;
    left: 45px;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 3;

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

.tokenPlanBox {
  padding-bottom: 40px;
}

.tokenPlan {
  text-align: left;
  padding: 40px 48px 32px;

  .tokenPlan_header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  .tokenPlan_logo {
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    object-fit: contain;
  }

  .tokenPlan_name {
    font-size: 60px;
    font-weight: bold;
    background: linear-gradient(90deg, #2278ff 0%, #8851f6f7 54%, #d231eef0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .tokenPlan_sub {
    font-size: 60px;
    font-weight: bold;
    color: #3D3D3D;
  }

  .tokenPlan_desc {
    font-size: 18px;
    font-weight: normal;
    line-height: 32px;
    color: #333333;
    margin: 0 auto 40px;
    width: 930px;
    text-align: center;

    .tokenPlan_hl {
      color: #2278FF;
    }
  }

  .tokenPlan_btns {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 60px;
  }

  .tokenPlan_btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 168px;
    height: 64px;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }

    &.primary {
      background: #2278FF;
      color: #fff;
      box-shadow: 0 4px 12px rgba(34, 120, 255, 0.35);
    }

    &.secondary {
      background: #F0F0F0;
      color: #333;
    }
  }

  .tokenPlan_carousel {
    position: relative;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 16px;

    :deep(.n-carousel) {
      position: relative;
      border-radius: 12px;
    }
  }

  .tokenPlan_dots {
    position: absolute;
    left: 50%;
    bottom: 18px;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 2;
  }

  .tokenPlan_dot {
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    line-height: 0;
    transition: opacity 0.2s;

    img {
      display: block;
      width: 8px;
      height: 8px;
      object-fit: contain;
    }

    &.active img {
      width: 28px;
      height: 8px;
    }
  }

  .tokenPlan_carousel_img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    border-radius: 12px;
    cursor: grab;
  }

  .tokenPlan_footer {
    font-size: 18px;
    font-weight: normal;
    line-height: 24px;
    color: #333333;
    word-break: break-all;

    .tokenPlan_footer_icon {
      width: 20px;
      height: 20px;
      vertical-align: middle;
      margin: 0 4px;
      cursor: pointer;
    }

    a {
      color: #2278FF;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

</style>
