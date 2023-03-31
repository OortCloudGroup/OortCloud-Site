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
    />

    <div class="product_intro_2">
      <img src="/img/product/mobile_inspection/intro1.png">
    </div>
    <div class="product_intro_3">
      <p class="title">智慧检务平台总体架构图</p>
      <img src="/img/product/mobile_inspection/intro2.png">
    </div>

    <!-- 服务支持 -->
    <ProductSupport v-if="support" :name="support.name" :link="support.link" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "product"
})

const headerContent = ref({
  logo: '/img/product/mobile_inspection/icon.svg',
  name: '移动检务',
  title: '移动检务',
  excerpt: '涵盖即时消息、电子邮件、音视频会议、资料分享、流程申请与审批、网络社交、疫情防控、健康管理等服务功能，打通企业工作编辑，助力工作效率，让工作更美好',
  buttons: [
    // {
    //   name: '立即购买',
    //   link: 'https://marketplace.huaweicloud.com/contents/174bd256-4011-4988-89d8-d72c47e6741c#productid=OFFI698082226463612928'
    // }
  ],
  swipes: [
    '/img/product/light_guide/banner.png'
  ]
})
const support = ref(null)
</script>

<style scoped>
.product_intro_2,
.product_intro_3 {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product_intro_3 {
  flex-direction: column;
}
.product_intro_3 .title {
  margin-bottom: 80px;
  font-size: 46px;
  color: #051261;
  letter-spacing: 4.45px;
  font-weight: 600;
}
</style>