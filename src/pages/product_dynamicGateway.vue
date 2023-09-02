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
        <p class="right_tip">
          *以上图片仅供参考，请以实物为准
        </p>
      </template>
    </ProductHeader>

    <div>
      <div id="users" class="product_intro_2">
        <div class="title">
          产品特性
        </div>
        <div class="content">
          <img src="/img/product/dynamic_gateway/banner.png" alt="" />
        </div>
      </div>
    </div>
    <div>
      <div id="service" class="product_intro_3">
        <div class="title">
          规格参数
        </div>
        <div class="content">
          <img src="/img/product/dynamic_gateway/table.png" alt="" />
        </div>
      </div>
    </div>
    <div>
      <div id="size" class="product_intro_4">
        <div class="title">
          装配尺寸
        </div>
        <div class="content">
          <img src="/img/product/dynamic_gateway/size.png" alt="" />
        </div>
      </div>
    </div>

    <!-- 服务支持 -->
    <ProductSupport v-if="support" :name="support.name" :link="support.link" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'product'
})

const headerContent = ref({
  logo: '/img/product/dynamic_gateway/logo.png',
  name: '动环网关',
  title: '动环网关',
  excerpt: '带温湿度、光感、电源1进10路出，带电池、告警模块、交换机功能及5G数据网关，可以实现远程控制的动环监控',
  buttons: [
    // {
    //   name: '立即购买',
    //   link: 'https://marketplace.huaweicloud.com/contents/d11ed8d8-c144-45f6-bf27-60e6338f4925#productid=OFFI705244014768824320'
    // }
  ],
  swipes: [
    '/img/product/dynamic_gateway/info.png'
  ]
})
const support = ref(null)
</script>

<style scoped>
.right_tip {
  text-align: center;
  font-size: 12px;
  color: #999999;
}
.product_intro_2 {
  padding: 100px 0;
  height: 582px;
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
}
.product_intro_2 .content img {
  width: 1200px;
  height: 240px;
}
.product_intro_3 {
  padding: 100px 0;
  background-color: #FCFCFC;
  box-sizing: border-box;
  height: 2753px;
  background: url(/img/product/dynamic_ring_box/background.png) repeat-y;
  background-size: 100%;
}
.product_intro_3 .content {
  margin-top: 100px;
  display: flex;
  justify-content: center;
}
.product_intro_3 .content img {
  width: 755px;
}
.product_intro_3 .title {
  margin-bottom: 80px;
  font-size: 46px;
  color: #1F3F74;
  text-align: center;
}
.product_intro_4 {
  padding: 100px 0;
  height: 1140px;
  width: 100%;
  box-sizing: border-box;
}
.product_intro_4 .title {
  font-size: 46px;
  color: #1F3F74;
  text-align: center;
}
.product_intro_4 .content {
  margin-top: 100px;
  display: flex;
  justify-content: center;
}
.product_intro_4 .content img {
  width: 1200px;
  height: 806px;
}
</style>
