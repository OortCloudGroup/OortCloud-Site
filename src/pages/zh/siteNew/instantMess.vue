<template>
  <div class="home_page vls">
    <div class="platTopOut flexRowAC w1380">
      <div class="platTop">
        <div class="VLStream">
          即时通讯
        </div>
        <div class="plat_cent">
          实现类微信功能和消息推送统一入口，可创建、加入群组，
          发起交流或群聊，满足内部会商、沟通协同需要，避免使用
          公众微信平台交流工作信息的泄密风险。
        </div>
        <div class="flexRowAC useBox" style="justify-content: flex-start">
          <div class="seeMore">
            立即试用
          </div>
          <div class="seeMore u3">
            立即购买
          </div>
          <div class="seeMore u1">
            安排演示
          </div>
        </div>
      </div>
      <img class="platTopOutImg" src="@/assets/software/instantMess_c1.png" alt="" />
    </div>
    <div class="w1380 webBottomImg">
      <video class="wBImg" src="/documents/即时通讯.mp4" controls autoplay muted />
    </div>
    <div class="tabSwitch">
      <div class="tabItem" @click="scrollToSection('section0')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section0'}">概述</span>
        <span class="line" :class="{activeLine:activeSection==='section0'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section1')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section1'}">SDK</span>
        <span class="line" :class="{activeLine:activeSection==='section1'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section2')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section2'}">下载</span>
        <span class="line" :class="{activeLine:activeSection==='section2'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section3')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section3'}">最佳实践</span>
        <span class="line" :class="{activeLine:activeSection==='section3'}" />
      </div>
    </div>

    <div id="section0" ref="section0">
      <div class="flexRowAC w1380 colMenu">
        <div class="left-menu">
          <div
            v-for="(item, index) in menuItems"
            :key="index"
            class="menu-item"
            :class="{ active: activeIndex === index }"
            @click="selectMenu(index)"
          >
            <div class="menu-content-wrapper">
              <div class="line" />
              <div class="text-content">
                <div class="menu-text">
                  {{ item.title }}
                </div>
                <div v-show="activeIndex === index" class="content-detail">
                  <p>{{ currentItem.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-content">
          <div class="content-image">
            <img :src="currentItem.image" :alt="currentItem.title" />
          </div>
        </div>
      </div>
    </div>

    <div id="section1" ref="section1">
      <div class="productBox CloudBox w1380">
        <div class="cl_t">
          SDK
        </div>
        <img class="cl_t_img" src="@/assets/software/instantMess/sdk.png" />
      </div>
    </div>

    <div id="section2" ref="section2">
      <div class="productBox CloudBox w1380">
        <div class="cl_t">
          下载
        </div>
        <div class="cl_list">
          <div v-for="(row, rowIndex) in downloadRows" :key="rowIndex" class="w1380 flexRowAC cl_list_jc">
            <div v-for="item in row" :key="item.key" class="cl_item">
              <img class="cl_item_img" :src="item.icon" />
              <span class="cl_item_title">{{ item.title }}</span>
              <span class="cl_item_v">版本号：{{ item.version }}</span>
              <div class="cl_item_bt">
                <a class="cl_bt cl_item_bt1" :href="getDownloadLink(item.key, 'sdk')" target="_blank" rel="noopener">
                  SDK下载
                </a>
                <a class="cl_bt cl_item_bt2" :href="getDownloadLink(item.key, 'demo')" target="_blank" rel="noopener">
                  Demo下载
                </a>
              </div>
              <div class="cl_item_b">
                <a class="cl_item_d" :href="getDownloadLink(item.key, 'log')" target="_blank" rel="noopener">更新日志</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="section3" ref="section3">
      <div class="productBox CloudBox w1380">
        <div class="cl_t">
          最佳实践
        </div>
        <div class="sj_list">
          <div class="w1380 flexRowAC sj_jc">
            <div class="sj_item">
              <img class="sj_item_img" src="@/assets/software/instantMess/zhzfywxt.png" />
              <span class="sj_item_t">智慧政府一网协同</span>
              <span class="sj_item_d">即时通讯、私有云部署的移动安全办公云平台、门户与应用仓库、移动应用开发支撑平台、安全管控MDM等</span>
            </div>
            <div class="sj_item">
              <img class="sj_item_img" src="@/assets/software/instantMess/zhzfywtg.png" />
              <span class="sj_item_t">智慧政府一网统管</span>
              <span class="sj_item_d">PGIS地图引擎能力支撑平台(PGISPaaS)、指挥调度一张图、大数据IOC可视化平台等</span>
            </div>
            <div class="sj_item">
              <img class="sj_item_img" src="@/assets/software/instantMess/dxgqyq.png" />
              <span class="sj_item_t">大型国企央企</span>
              <span class="sj_item_d">国企央企、内部超级App，个性化需求迭代、智能客服、定制手机型安全终端、移动新型OA效率管理等</span>
            </div>
            <div class="sj_item">
              <img class="sj_item_img" src="@/assets/software/instantMess/ggaq.png" />
              <span class="sj_item_t">公共安全</span>
              <span class="sj_item_d">移动警务、移动检务、移动应急管理、移动司法监所、移动端服务化能力支撑平台等</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="productBox w1380">
      <div class="proT">
        成功案例
      </div>
      <div class="productImg p5Out flexRowAC">
        <div class="item img1">
          <div class="bottom">
            <p>城市风光</p>
          </div>
        </div>
        <div class="item img2">
          <div class="bottom">
            <p>专业服务</p>
          </div>
        </div>
        <div class="item img3">
          <div class="bottom">
            <p>教育机构</p>
          </div>
        </div>
        <div class="item img4">
          <div class="bottom">
            <p>精准分析</p>
          </div>
        </div>
      </div>
    </div>
    <div class="productBox w1380">
      <div class="proT">
        现在开始体验
      </div>
      <div class="flexRowAC productItem">
        <div class="productImg productItem1 product1">
          <img class="pro1_1" src="@/assets/software/down1_.png" alt="" />
          <div class="pro1_1_s flexRowAC">
            SaaS版本
            <span class="pro1_1_s_b">14天功能全免费试用</span>
          </div>
          <div class="pro1_2 flexRowAC">
            <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />
            7天快速迭代，问题敏捷解决
          </div>
          <div class="pro1_2 flexRowAC">
            <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />
            快速启用，精简运维
          </div>
          <div class="pro1_2 flexRowAC">
            <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />
            更低建设成本
          </div>
          <div class="pro3 flexRowAC">
            <div class="pro3_btn flexRowAC">
              申请试用
            </div>
            <div class="pro3_btn p3b flexRowAC">
              详细功能
            </div>
          </div>
        </div>
        <div class="productImg productItem1 product1">
          <img class="pro1_1" src="@/assets/software/down1.png" alt="" />
          <div class="pro1_1_s flexRowAC">
            私有化部署
            <span class="pro1_1_s_b">1v1 定制方案量身打造</span>
          </div>
          <div class="pro1_2 flexRowAC">
            <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />
            1v1 专家服务，定制化解决方案
          </div>
          <div class="pro1_2 flexRowAC">
            <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />
            本地化灵活部署，私有化数据存储
          </div>
          <div class="pro1_2 flexRowAC">
            <img class="pro1_2_i" src="@/assets/software/down2.png" alt="" />
            高可用架构与完备容灾方案
          </div>
          <div class="pro3 flexRowAC">
            <div class="pro3_btn flexRowAC">
              申请试用
            </div>
            <div class="pro3_btn p3b flexRowAC">
              详细功能
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="productBox w1380">
      <div class="proT">
        资料下载
      </div>
      <div class="productImg product2Out flexRowAC">
        <div class="product2Out_it flexRowAC">
          <div class="pro2o_l flexRowAC">
            <img class="pro2o_l_l" src="@/assets/software/down3.png" alt="" />
            移动通讯平台V1.0技术白皮书（盖章，扫描）.pdf
          </div>
          <div class="pro2o_2" @click="downloadPDF">
            下载
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'
import downloadConfig from '../instantMess_download_config.json'
import product5_1 from '@/assets/VLimg2.0/product5_1.png'
import product5_2 from '@/assets/VLimg2.0/product5_2.png'
import product5_3 from '@/assets/VLimg2.0/product5_3.png'
import product5_4 from '@/assets/VLimg2.0/product5_4.png'
import product5_5 from '@/assets/VLimg2.0/product5_5.png'
import product5_6 from '@/assets/VLimg2.0/product5_6.png'
import product5_7 from '@/assets/VLimg2.0/product5_7.png'
import bg1 from '@/assets/software/instantMess/jstx_zhdzsy_bg.png'
import bg2 from '@/assets/software/instantMess/workup_aqtx_bg.png'
import bg3 from '@/assets/software/instantMess/workup_yysphy_bg2.png'
import bg4 from '@/assets/software/instantMess/workup_yysphy_bg.png'
import iconDowYhql from '@/assets/software/instantMess/icon_dow_yhql.png'
import iconDowYhql2 from '@/assets/software/instantMess/icon_dow_yhql2.png'

definePageMeta({
  layout: 'site-new'
})

const downloadPDF = () => {
  const link = document.createElement('a')
  link.href = '/documents/移动通讯平台V1.0技术白皮书（盖章，扫描）.pdf'
  link.download = '移动通讯平台V1.0技术白皮书（盖章，扫描）.pdf'
  link.click()
}

const DEFAULT_DOWNLOAD_LINKS = {
  sdk: '',
  demo: '',
  log: ''
}

const downloadLinkConfig = ref(downloadConfig)

const downloadRows = [
  [
    { key: 'im', title: 'IM', version: 'V1.0.0', icon: iconDowYhql, showDemoEntry: true },
    { key: 'appMarket', title: '应用市场', version: 'V1.0.0', icon: iconDowYhql2 },
    { key: 'imAppMarket', title: 'IM+应用市场', version: 'V1.0.0', icon: iconDowYhql }
  ],
  [
    { key: 'audioVideo', title: '音视频', version: 'V1.0.0', icon: iconDowYhql },
    { key: 'imAppMarketAudioVideo', title: 'IM+应用市场+音视频', version: 'V1.0.0', icon: iconDowYhql2 },
    { key: 'homeImAppMarketAudioVideo', title: '首页+IM+应用市场+音视频', version: 'V1.0.0', icon: iconDowYhql }
  ]
]

const getDownloadLink = (itemKey, linkKey) => {
  return downloadLinkConfig.value[itemKey]?.[linkKey] || DEFAULT_DOWNLOAD_LINKS[linkKey]
}

let p5Arr = ref([])
p5Arr.value = [
  { t: 'Windows', d: '版本号：V3.1.06', flag: false, img: product5_1 },
  { t: 'Android', d: '版本号：V3.1.06', flag: true, img: product5_2 },
  { t: 'iOS', d: '版本号：V3.1.06', flag: true, img: product5_3 },
  { t: 'Harmony OS', d: '版本号：V3.1.06', flag: true, img: product5_4 },
  { t: 'Linux', d: '版本号：V3.1.06', flag: false, img: product5_5 },
  { t: 'Mac OS', d: '版本号：V3.1.06', flag: false, img: product5_6 },
  { t: '银河麒麟', d: '版本号：V3.1.06', flag: false, img: product5_7 }
]

const menuItems = ref([
  {
    title: '多端聊天',
    description: '支持单聊、群聊实现类微信功能和消息推送统一入口，可创建、加入群组，发起交流或群聊。',
    image: bg1
  },
  {
    title: '畅想安全通讯',
    description: '支持文字、语音、图片、视频等多种即时通讯方式，更有月后积分功能，消息自动销毁，保障信息安全。',
    image: bg2
  },
  {
    title: '语音视频会议',
    description: '轻松发起多方音视频会议，打破空间限制，随时随地组会交流',
    image: bg3
  },
  {
    title: '便捷通讯录',
    description: '提供联系人查找、通讯、等功能，适用于多部门、跨区域的机关和企事业单位，提升沟通与工作效率。',
    image: bg4
  }
])

const activeIndex = ref(0)
const currentItem = computed(() => {
  return menuItems.value[activeIndex.value]
})

function selectMenu(index) {
  activeIndex.value = index
}

const activeSection = ref('section0')
const section0 = ref(null)
const section1 = ref(null)
const section2 = ref(null)
const section3 = ref(null)

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const viewportHeight = window.innerHeight
    const offset = viewportHeight * 0.15
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
  }
}

const handleScroll = () => {
  const sections = [
    { id: 'section0', ref: section0 },
    { id: 'section1', ref: section1 },
    { id: 'section2', ref: section2 },
    { id: 'section3', ref: section3 }
  ]
  const scrollPosition = window.scrollY + 200

  for (const section of sections) {
    const element = section.ref.value
    if (element) {
      const offsetTop = element.offsetTop
      const offsetHeight = element.offsetHeight
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section.id
        break
      }
    }
  }
}

onMounted(async() => {
  window.addEventListener('scroll', handleScroll)

  try {
    const res = await fetch('https://myoumuamua.com/mystatic/instantMess_download_config.json')
    const data = await res.json()
    if (data) {
      downloadLinkConfig.value = data
    }
  } catch {
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
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

.platTopOut{
  justify-content: space-between;
  padding-bottom: 160px;

  .platTopOutImg{
    flex-shrink: 0;
    width: 614px;
    height: auto;
    margin-left: 100px;
  }
}

.platTop {
  text-align: left;
  padding: 110px 0;

  .VLStream {
    color: #333333;
    font-weight: bold;
    font-size: 78px;
    padding: 8px 0;
    position: relative;
  }

  .plat_cent {
    padding: 20px 0 50px;
    color: #717781;
    font-size: 18px;
  }

  .useBox {
    justify-content: center;
    gap: 20px;

    .seeMore {
      padding: 24px 50px;
      color: #fff;
      border: 1px solid #2278FF;
      border-radius: 8px;
      background: #2278FF;
      font-weight: bold;
      font-size: 18px;
    }

    .u1 {
      color: #333;
      background-color: #F4F4F4;
      border: 1px solid #F4F4F4;
    }

    .u3{
      border-radius: 8px;
      border: 1px solid #ED2121;
      color: #ED2121;
      font-weight: bold;
      font-size: 18px;
      background: #fff;
    }
  }
}

.webBottomImg {
  padding: 70px 0 110px;
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
    padding-bottom: 80px;
    color: #333333;
    font-weight: bold;
    font-size: 58px;
    line-height: 82px;
  }

  .cl_t_img{
    width: 100%;
  }
}

.productBox {
  text-align: center;
  padding-bottom: 140px;

  .productItem {
    gap: 20px;

    .productItem1 {
      flex: 1;

      &:nth-child(1) {
        background: #2278FF;

        .pro3_btn {
          color: #2278FF;
        }
      }
    }
  }

  .proT {
    padding-bottom: 60px;
    color: #3D3D3D;
    font-weight: bold;
    font-size: 58px;
  }

  .productImg {
    width: 100%;
    height: 300px;

    .img1{
      background: url('@/assets/VLimg2.0/jyjg1.png');
    }
    .img2{
      background: url('@/assets/VLimg2.0/jyjg2.png');
    }
    .img3{
      background: url('@/assets/VLimg2.0/jyjg3.png');
    }
    .img4{
      background: url('@/assets/VLimg2.0/jyjg4.png');
    }
    .item{
      width: 300px;
      height: 300px;
      background-size: cover;
      position: relative;
      .bottom{
        position: absolute;
        bottom: 0;
        width: 300px;
        text-align: left;
        line-height: 88px;
        border-radius: 0 0 24px 24px;
        background: linear-gradient(180deg, rgba(255, 94, 16, 0) 0%, #3C80FF  100%);
        p{
          margin-left: 24px;
          font-size: 28px;
          font-weight: bold;
          color: #FFFFFF;
        }
      }
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
        cursor: pointer;
        width: 100px;
        line-height: 54px;
        color: #fff;
        height: 54px;
        background-color: #2278FF;
      }
    }
  }
}

.instantMess_c1{
  width: 825px;
  height: auto;
}

.tabSwitch{
  position: sticky;
  top: 82px;
  z-index: 9;
  background-color: #fff;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;
  border-bottom: 0.5px solid #DFDFDF;
  margin-bottom: 160px;
  .tabItem{
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    .tabTitle{
      color: #666666;
      font-size: 28px;
      letter-spacing: 2.67px;
      text-align: left;
      margin-bottom: 10px;
      transition: color 0.3s ease;
    }
    .line{
      width: 64px;
      height: 4px;
      background: transparent;
      transition: background-color 0.3s ease;
    }
    .activeTitle{
      color: #333333;
    }
    .activeLine{
      background: #4480FF;
    }
  }
}

.colMenu{
  justify-content: space-between;
  margin-bottom: 160px;
}

.left-menu {
  width: 460px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-right: 16px;

  .menu-item {
    position: relative;
    cursor: pointer;

    &:last-child {
      border-bottom: none;
    }

    &.active {
      .menu-text {
        color: #333333;
        font-size: 54px;
        line-height: 82px;
      }
    }

    .menu-content-wrapper {
      display: flex;
      gap: 16px;
      position: relative;
    }

    .line {
      position: absolute;
      left: -24px;
      top: 0;
      width: 6px;
      height: 48px;
      background-color: #E8EAED;
      transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: 33px;
    }

    &.active .line {
      height: 100%;
      background-color: #2E63FF;
    }

    .text-content {
      flex: 1;
    }

    .menu-text {
      transition: all 0.3s ease;
      color: #666666;
      font-weight: bold;
      font-size: 32px;
      line-height: 48px;
    }

    .content-detail {
      p {
        color: #717781;
        font-size: 20px;
        line-height: 30px;
        margin-top: 20px;
      }
    }
  }
}

.right-content {
  width: 700px;
  height: 450px;
  border-radius: 24px;
  background: #F9FAFB;
  border: 1px solid #E2E3E5;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  .content-image {
    width: 90%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      border-radius: 6px;
      transition: transform 0.3s ease;
    }
  }

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

    img {
      transform: scale(1.02);
    }
  }
}

.cl_list{
  display: flex;
  flex-direction: column;
  gap: 40px;
  .cl_list_jc{
    justify-content: space-between;
  }
  .cl_item{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 383px;
    height: 474px;
    border-radius: 24px;
    background: #FFFFFF;
    box-shadow: 0 0 48px 0 #07005714;
    padding: 50px 0 40px 0;
    box-sizing: border-box;
    .cl_item_img{
      width: 100px;
      height: 100px;
    }
    .cl_item_title{
      color: #3D3D3D;
      font-weight: bold;
      font-size: 24px;
      line-height: 36px;
      margin: 38px 0 4px 0;
    }
    .cl_item_v{
      color: #717781;
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 60px;
    }
    .cl_item_bt{
      display: flex;
      gap: 12px;
      margin-bottom: 36px;
      .cl_bt{
        width: 158px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        font-size: 18px;
        font-weight: bold;
        text-decoration: none;
      }
      .cl_item_bt1{
        background: #2278FF;
        box-shadow: 0 4px 10px 0 #2278FF33;
        color: #FFFFFF;
        cursor: pointer;
      }

      .cl_item_bt2{
        background: #FFFFFF;
        border: 1px solid #2278FF;
        color: #2278FF;
        cursor: pointer;
      }

    }
    .cl_item_b{
      display: flex;
      gap: 10px;
      align-items: center;
      .cl_item_d{
        color: #2278FF;
        font-size: 16px;
        line-height: 24px;
        text-decoration: none;
      }
      .cl_item_line{
        width: 1px;
        height: 18px;
        background: #CCCCCC;
      }
    }
  }
}

.sj_list{
  display: flex;
  .sj_jc{
    justify-content: space-between;
  }
  .sj_item{
    width: 282px;
    height: 396px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 24px;
    background: #FFFFFF;
    box-shadow: 0 18px 48px 0 #0049B614;
    padding: 0 13px;
    .sj_item_img{
      width: 72.28px;
      height: 74px;
      margin: 47px 0 37px 0;
    }
    .sj_item_t{
      color: #3D3D3D;
      font-weight: bold;
      font-size: 32px;
      line-height: 48px;
      margin-bottom: 30px;
    }
    .sj_item_d{
      color: #3D3D3D;
      font-size: 18px;
      line-height: 26px;
      text-align: center;
    }
  }
}
</style>
