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
      <img src="/img/product/u_disk/banner2.png" alt="">
    </div>
    <div class="product_intro_3">
      <p class="title">「功能描述」</p>
      <div class="function">
        <div class="item">
          <p>密码保护</p>
          <p>安全U盘可以设置密码保护，需要通过密码认证后才能打开 安全U盘，支持设置输入密码的阈值，如口令错误次数达到 阈值，安全U盘中的数据自动销毁。</p>
        </div>
        <div class="item">
          <p>在线操作</p>
          <p>安全U盘中存储的文件支持在线打开、编辑、存储。无需把安全U盘中的文件拷贝到计算机上也可以进行操作，使用习惯与普通U盘一样，操作简单易用。</p>
        </div>
        <div class="item">
          <p>读写控制</p>
          <p>安全U盘在计算机上使用通过策略进行控制，在不同网络环境的计算机可根据策略控制U盘的读写行为。</p>
        </div>
        <div class="item">
          <p>自动审计</p>
          <p>可自动审计安全U盘的操作及交换行为，如对文件的修改、删除、复制，以及文件名修改等详细信息。</p>
        </div>
      </div>
    </div>
    <div class="product_intro_4">
      <p class="title">「产品介绍」</p>
      <div class="intro">
        <div class="item">
          <p>双重加密</p>
          <p>安全U盘具采用硬件加密芯片和高强度软件加密算法对数据进行双重加密存储，具备防止暴力破解、数据恢复等功能。</p>
        </div>
        <div class="item">
          <p>智能生成密钥</p>
          <p>独特的加密密匙智能动态生成技术，防止逆向工程活暴力破解手段绕开U盘密码读取数据。</p>
        </div>
        <div class="item">
          <p>数据自毁功能</p>
          <p>安全U盘具有数据自毁功能。启用数据自毁功能后，如果连续输入密码错误次数达到用户预先设定值，则安全U盘自动销毁数据。销毁数据后，U盘中的数据将无法恢复，确保U盘丢失后，数据资料不被非法手段获取。</p>
        </div>
        <div class="item">
          <p>防病毒、木马自动传播</p>
          <p>安全U盘采用专用文件格式级专有操作方式，即使主机中了病毒，病毒也无法感染U盘或直接将带病毒文件自动写入U盘，在原理上避免病毒或木马通过U盘自动传播，从而避免敏感信息通过U盘自动外泄的可能。</p>
        </div>
      </div>
    </div>
    <div class="product_intro_5">
      <div class="left">
        <div class="title">产品价值</div>
        <div class="paragraph"><img src="/img/product/u_disk/1.png"><span>采用硬件加密芯片和高强度软件加密算法对数据进行双重加密存储，具备防止暴
            力破解、数据恢复等功能</span></div>
        <div class="paragraph"><img src="/img/product/u_disk/2.png"><span>防止病毒、木马感染安全U盘和自动传播</span></div>
        <div class="paragraph"><img src="/img/product/u_disk/3.png"><span>安全U盘的数据交换行为进行全方位的审计</span></div>
      </div>
      <div class="right_1">
        <img src="/img/product/u_disk/intro_01.png">
      </div>
    </div>
    <div class="product_intro_5">
      <div class="left">
        <div class="title">应用场景</div>
        <div class="paragraph"><img src="/img/product/u_disk/1.png"><span>同时使用多个网络（例如存在工作内网和互联网、其他隔离网络等）的单位，使用
            移动存储介质在多个网络之间进行信息交换</span></div>
        <div class="paragraph"><img src="/img/product/u_disk/2.png"><span>在用户内网计算机上使用或用于外出携带重要工作文档</span></div>
        <div class="paragraph"><img src="/img/product/u_disk/3.png"><span>用于存储和处理敏感或重要文件</span></div>
      </div>
      <div class="right_2">
        <img src="/img/product/u_disk/intro_02.png">
      </div>
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
  logo: '/img/product/u_disk/icon.png',
  name: '安全U盘系统',
  title: '红盘、蓝盘',
  excerpt: '专用于数据安全存储、防泄密、防病毒感染的USB移动存储系统',
  buttons: [
    // {
    //   name: '立即购买',
    //   link: 'https://marketplace.huaweicloud.com/contents/174bd256-4011-4988-89d8-d72c47e6741c#productid=OFFI698082226463612928'
    // }
  ],
  swipes: [
    '/img/product/u_disk/banner.png'
  ]
})
const support = ref(null)
</script>

<style scoped>
.product_intro_2 {
  width: 100%;
  height: 640px;
  display: flex;
  justify-content: center;
}
.product_intro_2 img {
  height: 640px;
}
.product_intro_3 {
  padding: 122px 100px;
  background: url(/img/product/u_disk/bg.png);
}
.product_intro_3 .title {
  margin-bottom: 80px;
  font-size: 46px;
  color: #051261;
  letter-spacing: 4.45px;
  line-height: 62px;
  font-weight: 600;
  text-align: center;
}
.product_intro_3 .function {
  display: flex;
  justify-content: center;
  align-items: center;
}
.product_intro_3 .function .item {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 405px;
  height: 340px;
  background: url(/img/product/u_disk/card.png);
}
.product_intro_3 .function .item p:nth-of-type(1) {
  margin: 29px 0 0 13px;
  font-size: 28px;
  color: #051261;
  font-weight: 700;
}
.product_intro_3 .function .item p:nth-of-type(2) {
  margin: 64px 0 0 12px;
  font-size: 16px;
  color: #506079;
  line-height: 24px;
  font-weight: 400;
}
.product_intro_4 {
  padding: 100px 291px;
}
.product_intro_4 .title {
  margin-bottom: 80px;
  font-size: 46px;
  color: #051261;
  letter-spacing: 4.45px;
  line-height: 62px;
  font-weight: 600;
  text-align: center;
}
.product_intro_4 .intro {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.product_intro_4 .intro .item {
  margin-right: 20px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 640px;
  height: 146px;
  background: url(/img/product/u_disk/card2.png);
}
.product_intro_4 .intro .item p:nth-of-type(1) {
  margin-left: 62px;
  margin-top: 12px;
  font-size: 26px;
  color: #051261;
  font-weight: 600;
}
.product_intro_4 .intro .item p:nth-of-type(2) {
  margin-left: 62px;
  margin-top: 8px;
  max-width: 555px;
  font-size: 16px;
  color: #506079;
  line-height: 24px;
  font-weight: 400;
}
.product_intro_5 {
  padding: 85px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product_intro_5 .left .title {
  font-size: 32px;
  color: #051261;
  letter-spacing: 3.1px;
  font-weight: 500;
}
.product_intro_5 .left .paragraph {
  margin-top: 46px;
  width: 560px;
  font-size: 16px;
  color: #051261;
  line-height: 24px;
  font-weight: 400;
}
.product_intro_5 .right_2 {
  margin-left: 100px;
}

</style>