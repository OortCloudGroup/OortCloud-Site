<template>
  <div class="page_container">
    <ProductHeader
      :logo="headerContent.logo"
      :name="headerContent.name"
      :title="headerContent.title"
      :excerpt="headerContent.excerpt"
      :buttons="headerContent.buttons"
      :swipes="headerContent.swipes"
      :is-swiper="false"
    >
      <template #bannerInfo>
        <p class="right_tip">*以上图片仅供参考，请以实物为准</p>
      </template>
    </ProductHeader>

    <div>
      <div class="product_intro_2" id="users">
        <div class="title">
          产品系列
        </div>
        <div class="content">
          <div class="content_item bg_1">
            <div class="content_item_top">
              <h3>多功能路由器</h3>
              <p>持多种工业协议解析及定制应用开发</p>
            </div>
            <ul class="content_item_bottom">
              <li>支持Docker</li>
              <li>NPU算力1.6Tops</li>
              <li>支持扩展TF 128GB</li>
              <li>支持定制EMMC</li>
              <li>支持代码开源自主编译</li>
              <li>支持2.4G/5.8G双频二选一</li>
            </ul>
          </div>
          <div class="content_item bg_2">
            <div class="content_item_top">
              <h3>5G工业路由器</h3>
              <p>工业自动化、智能建筑、消防、公共安全、环境保护、气象、数字化医疗</p>
            </div>
            <ul class="content_item_bottom">
              <li>5G全网通</li>
              <li>云平台管理</li>
              <li>硬件看门狗</li>
              <li>网络部署</li>
              <li>双重备份</li>
              <li>工业化设计</li>
              <li>抗强电磁干扰</li>
              <li>安全防护</li>
            </ul>
          </div>
          <div class="content_item bg_3">
            <div class="content_item_top">
              <h3>无线路由器</h3>
              <p>WiFi6搭配mesh分布式，多路以太网口设备稳定不掉线</p>
            </div>
            <ul class="content_item_bottom">
              <li>RAM 2GB DDR4</li>
              <li>ROM 32GB EMMC</li>
              <li>2.5Gbps 3个以太网接口</li>
              <li>1*千兆以太网接口</li>
              <li>双USB2.0接口</li>
            </ul>
          </div>
          <div class="content_item bg_4">
            <div class="content_item_top">
              <h3>4G工业路由器</h3>
              <p>4G视频直播, 4G融合通讯, 多网多链路聚合</p>
            </div>
            <ul class="content_item_bottom">
              <li>4G全网通</li>
              <li>云平台管理</li>
              <li>硬件看门狗</li>
              <li>网络部署</li>
              <li>双重备份</li>
              <li>工业化设计</li>
              <li>双星定位</li>
              <li>安全防护</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="product_intro_3">
        <div class="title">规格参数</div>
        <div class="bar_container">
          <div class="bar_wrap">
            <div class="bar" :style="[firstBarVis ? collapseStyle : '']" @click="handleClickBar(1)">
              <img class="bar_index" :src="`/img/product/router/index_1${firstBarVis ? '_active' : ''}.png`" alt="">
              <div class="bar_title">
                <img class="bar_title_img"  :src="`/img/product/router/index_icon_1${firstBarVis ? '_active' : ''}.png`" alt="">
                <span>多功能路由器</span>
              </div>
              <img class="bar_link" :src="`/img/product/router/icon_arrow_${firstBarVis ? 'down' : 'right'}.png`" alt="">
            </div>
          </div>
          <n-collapse-transition :show="firstBarVis">
            <div class="bar_content" />
          </n-collapse-transition>
        </div>
        <div class="bar_container">
          <div class="bar_wrap">
            <div class="bar" :style="[secondBarVis ? collapseStyle : '']" @click="handleClickBar(2)">
              <img class="bar_index" :src="`/img/product/router/index_2${secondBarVis ? '_active' : ''}.png`" alt="">
              <div class="bar_title">
                <img class="bar_title_img"  :src="`/img/product/router/index_icon_2${secondBarVis ? '_active' : ''}.png`" alt="">
                <span>5G工业路由器</span>
              </div>
              <img class="bar_link" :src="`/img/product/router/icon_arrow_${secondBarVis ? 'down' : 'right'}.png`" alt="">
            </div>
          </div>
          <n-collapse-transition :show="secondBarVis">
            <img class="bar_content" src="/img/product/router/second_content.png" alt="">
          </n-collapse-transition>
        </div>
        <div class="bar_container">
          <div class="bar_wrap">
            <div class="bar" :style="[thirdBarVis ? collapseStyle : '']" @click="handleClickBar(3)">
              <img class="bar_index" :src="`/img/product/router/index_3${thirdBarVis ? '_active' : ''}.png`" alt="">
              <div class="bar_title">
                <img class="bar_title_img"  :src="`/img/product/router/index_icon_3${thirdBarVis ? '_active' : ''}.png`" alt="">
                <span>无线路由器</span>
              </div>
              <img class="bar_link" :src="`/img/product/router/icon_arrow_${thirdBarVis ? 'down' : 'right'}.png`" alt="">
            </div>
          </div>
          <n-collapse-transition :show="thirdBarVis">
            <img class="bar_content" src="/img/product/router/third_content.png" alt="">
          </n-collapse-transition>
        </div>
        <div class="bar_container">
          <div class="bar_wrap">
            <div class="bar" :style="[forthBarVis ? collapseStyle : '']" @click="handleClickBar(4)">
              <img class="bar_index" :src="`/img/product/router/index_4${forthBarVis ? '_active' : ''}.png`" alt="">
              <div class="bar_title">
                <img class="bar_title_img"  :src="`/img/product/router/index_icon_4${forthBarVis ? '_active' : ''}.png`" alt="">
                <span>4G工业路由器</span>
              </div>
              <img class="bar_link" :src="`/img/product/router/icon_arrow_${forthBarVis ? 'down' : 'right'}.png`" alt="">
            </div>
          </div>
          <n-collapse-transition :show="forthBarVis">
            <img v-show="forthBarVis" class="bar_content" src="/img/product/router/forth_content.png" alt="">
          </n-collapse-transition>
        </div>
      </div>
    </div>

    <!-- 服务支持 -->
    <ProductSupport v-if="support" :name="support.name" :link="support.link" />
  </div>
</template>

<script setup>
import { NCollapseTransition } from 'naive-ui';

definePageMeta({
  layout: "product"
})

const headerContent = ref({
  logo: '/img/product/router/icon.png',
  name: '路由器',
  title: '路由器',
  excerpt: '多功能路由器、5G工业路由器、无线路由器、4G工业路由器',
  buttons: [
    // {
    //   name: '立即购买',
    //   link: 'https://marketplace.huaweicloud.com/contents/d11ed8d8-c144-45f6-bf27-60e6338f4925#productid=OFFI705244014768824320'
    // }
  ],
  swipes: [
    '/img/product/router/router_info1.png'
  ]
})
const support = ref(null)

const collapseStyle = ref({
  background: 'linear-gradient(-76deg, #76B0FF 0%, #3174E0 100%)',
  color: '#fff'
})
const firstBarVis = ref(false)
const secondBarVis = ref(false)
const thirdBarVis = ref(false)
const forthBarVis = ref(false)

const handleClickBar = (index) => {
  if (index === 1) {
    firstBarVis.value = !firstBarVis.value
  }
  if (index === 2) {
    secondBarVis.value = !secondBarVis.value
  }
  if (index === 3) {
    thirdBarVis.value = !thirdBarVis.value
  }
  if (index === 4) {
    forthBarVis.value = !forthBarVis.value
  }
}
</script>

<style scoped>
.right_tip {
  text-align: center;
  font-size: 12px;
  color: #999999;
}
.product_intro_2 {
  padding: 100px 0;
  height: 888px;
  width: 100%;
  box-sizing: border-box;
}
.product_intro_2 .title {
  font-size: 46px;
  color: #1F3F74;
  text-align: center;
}
.product_intro_2 .content {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  height: 566px;
}
.product_intro_2 .content_item {
  position: relative;
  padding: 24px 32px;
  width: 288px;
  height: 546px;
  box-sizing: border-box;
}
.product_intro_2 .content_item_top h3 {
  font-size: 20px;
  color: #FFFFFF;
  font-weight: 600;
}
.product_intro_2 .content_item_top p {
  margin-top: 16px;
  font-size: 12px;
  color: #FFFFFF;
}
.product_intro_2 .content_item_bottom {
  position: absolute;
  top: 65px;
  left: 48px;
  list-style-type: disc;
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
.product_intro_2 .content_item_bottom li {
  font-size: 18px;
  list-style-type: disc;
  color: #051261;
  font-weight: 600;
}
.product_intro_2 .bg_1 {
  background: url(/img/product/router/type_bg.png) no-repeat;
  background-size: 100%;
}
.product_intro_2 .bg_2 {
  background: url(/img/product/router/type_bg_2.png) no-repeat;
  background-size: 100%;
}
.product_intro_2 .bg_3 {
  background: url(/img/product/router/type_bg_3.png) no-repeat;
  background-size: 100%;
}
.product_intro_2 .bg_4 {
  background: url(/img/product/router/type_bg_4.png) no-repeat;
  background-size: 100%;
}
.product_intro_3 {
  padding: 100px 0;
  background-color: #FCFCFC;
  box-sizing: border-box;
}
.product_intro_3 .title {
  margin-bottom: 80px;
  font-size: 46px;
  color: #1F3F74;
  text-align: center;
}
.product_intro_3 .bar_wrap {
  display: flex;
  padding: 4px;
  margin: 0 auto 20px;
  width: 1200px;
  height: 58px;
  border-radius: 10px;
  background: #FFFFFF;
  box-shadow: 0px 2px 8px 0px rgba(49,116,224,0.08);
  box-sizing: border-box;
  cursor: pointer;
}
.product_intro_3 .bar {
  padding: 0 20px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #F5F9FF;
  border-radius: 8px;
  font-size: 16px;
  color: #051261;
}
.product_intro_3 .bar_index {
  width: 30px;
  height: 30px;
}
.product_intro_3 .bar_title {
  display: flex;
  align-items: center;
  margin-left: 40px;
  flex: 1;
}
.product_intro_3 .bar_title img {
  width: 36px;
  height: 36px;
}
.product_intro_3 .bar_title span {
  margin-left: 12px;
  vertical-align: middle;
}
.product_intro_3 .bar_link {
  width: 24px;
  height: 24px;
}
.product_intro_3 .bar_content {
  margin: 40px auto;
  display: flex;
  justify-content: center;
  width: 755px;
  object-fit: contain;
}
</style>