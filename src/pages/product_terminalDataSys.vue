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
      <img src="/img/product/terminal_data_sys/banner2.png" alt="" />
    </div>
    <div class="product_intro_3">
      <p class="title">
        「产品功能」
      </p>
      <div class="function">
        <div class="item">
          <p>系统管理</p>
          <p>统一管理台、策略配置管理、系统账号管理。</p>
        </div>
        <div class="item">
          <p>安全检测</p>
          <p>恶意代码检测、隐藏信息检测、敏感信息检测。</p>
        </div>
        <div class="item">
          <p>安全审计</p>
          <p>文件传输审计、异常拦截审计、系统管理审计。</p>
        </div>
        <div class="item">
          <p>数据传输</p>
          <p>文件上传下载、文件传输管理、异常文件拦截。</p>
        </div>
      </div>
    </div>
    <div class="product_intro_4">
      <p class="title">
        「产品特点」
      </p>
      <div class="function">
        <div class="item card-a">
          <p>数据传输多重保障</p>
          <div class="intro">
            <p>传输多任务并发</p>
            <p>数据断点续传</p>
            <p>传输状况实时监控</p>
            <p>数独实时控制</p>
          </div>
        </div>
        <div class="item card-b">
          <p>多能力支撑</p>
          <div class="intro">
            <p>多种主流文件格式支持</p>
            <p>数据优先传输</p>
            <p>支持PC、WEB、微信等多种用户端进行同步文件</p>
          </div>
        </div>
        <div class="item card-c">
          <p>系统安全性高</p>
          <div class="intro">
            <p>病毒、异常夹带检测</p>
            <p>敏感信息、涉密文件检测</p>
            <p> 全量行为审计</p>
            <p>数据传输加密</p>
          </div>
        </div>
        <div class="item card-d">
          <p>快速便捷的文件同步传输</p>
          <div class="intro">
            <p>主流IM风格交互操作，使用熟悉无压力</p>
            <p>支持单文件、批量文件上传</p>
            <p>简单拖拉、右键等操作，实现文件一对一、一对多用户同步</p>
          </div>
        </div>
      </div>
    </div>
    <div class="product_intro_5">
      <p class="title">
        「产品价值」
      </p>
      <div class="function">
        <div class="left">
          <div class="line" />
          <div class="main">
            <div>
              <p class="title2">
                数据安全传输，保证合规
              </p>
              <p class="paragraph">
                数据传输集中管控，满足公安、法院及检察等行业边界接入规范要求。
              </p>
            </div>
            <div>
              <p class="title2">
                数据内外网交换，快速便捷
              </p>
              <p class="paragraph">
                支持多种客户端传输文件，简单拖拉便可完成内外网文件传输。
              </p>
            </div>
            <div>
              <p class="title2">
                数据传输多保障，可靠无负担
              </p>
              <p class="paragraph">
                多种安全检测、丰富行为审计、数据传输加密；可控制传输速度、可断点续传、可定义优先传输。
              </p>
            </div>
            <div>
              <p class="title2">
                构建可管可控、安全高兴的传输方案
              </p>
              <p class="paragraph">
                对于公安、检察、法院、税务、政务及企业等机构，利用本系统可构建安全高效的内外网数据传输方案。
              </p>
            </div>
          </div>
        </div>
        <div class="right">
          <img src="/img/product/terminal_data_sys/product_value.png" />
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
  logo: '/img/product/terminal_data_sys/icon.png',
  name: '终端数据跨网安全传输系统',
  title: '终端数据跨网安全传输系统',
  excerpt: '终端数据跨网安全传输系统包括前置服务器、后置服务器及客户端，系统集成了数据传输、安全检测、敏感信息检测及行为审计等功能。 / 查杀、敏感信息检查、不存储、不中毒等多种安全功能。',
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
.product_intro_2 {
  width: 100%;
  height: 640px;
  display: flex;
  justify-content: center;
}
.product_intro_2 img {
  height: 640px;
}
.product_intro_2 .title {
  padding-top: 157px;
  margin-left: 466px;
  font-size: 32px;
  color: #ffffff;
  font-weight: 600;
}
.product_intro_2 .paragraph {
  margin-top: 68px;
  margin-left: 446px;
  width: 847px;
  font-size: 16px;
  color: #333333;
  line-height: 30px;
  font-weight: 400;
}
.product_intro_3 {
  padding: 122px 100px;
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
  align-items: center;
  flex-direction: column;

  width: 342px;
  height: 205px;
  background: url(/img/product/terminal_data_sys/function.png);
}
.product_intro_3 .function .item p:nth-of-type(1) {
  margin-top: 32px;
  font-size: 24px;
  color: #051261;
  letter-spacing: 2.32px;
  font-weight: 600;
}
.product_intro_3 .function .item p:nth-of-type(2) {
  margin-left: 28px;
  margin-top: 32px;
  font-size: 16px;
  color: #000333;
  letter-spacing: 1.55px;
  line-height: 24px;
  font-weight: 400;
}
.product_intro_4 {
  padding: 122px 100px;
  background: #fcfcfc;
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
.product_intro_4 .function {
  display: flex;
  justify-content: center;
  align-items: center;
}
.product_intro_4 .function .item {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 302px;
  height: 404px;
}
.product_intro_4 .function .card-a {
  background: url(/img/product/light_guide/card_a.png) no-repeat;
}
.product_intro_4 .function .card-b {
  background: url(/img/product/light_guide/card_b.png) no-repeat;
}
.product_intro_4 .function .card-c {
  background: url(/img/product/light_guide/card_c.png) no-repeat;
}
.product_intro_4 .function .card-d {
  background: url(/img/product/light_guide/card_d.png) no-repeat;
}
.product_intro_4 .function .item > p:nth-of-type(1) {
  margin-top: 83px;
  font-size: 26px;
  color: #051261;
  font-weight: 700;
  align-self: center;
}
.product_intro_4 .function .item .intro {
  margin: 47px 0 0 0px;
  font-size: 16px;
  color: #506079;
  line-height: 24px;
  font-weight: 400;
  text-align: center;
}
.product_intro_5 {
  padding: 122px 360px;
  background: #fcfcfc;
}
.product_intro_5 .title {
  margin-bottom: 80px;
  font-size: 46px;
  color: #051261;
  letter-spacing: 4.45px;
  line-height: 62px;
  font-weight: 600;
  text-align: center;
}
.product_intro_5 .function {
  display: flex;
  align-items: center;
}
.product_intro_5 .left {
  display: flex;
  align-items: center;
}
.product_intro_5 .left .line {
  margin-bottom: 20px;
  width: 2px;
  height: 458px;
  background: #1b20ff;
}
.product_intro_5 .left .main > div {
  margin-top: 40px;
}
.product_intro_5 .left .main .title2 {
  display: flex;
  align-items: center;
  margin-left: 30px;
  width: 360px;
  height: 36px;
  line-height: 36px;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  font-weight: 400;
  background: #1b20ff;
  border-radius: 18px;
}
.product_intro_5 .left .main .title2::before {
  content: '';
  display: inline-block;
  margin-left: -51px;
  margin-right: 30px;
  width: 36px;
  height: 36px;
  border-radius: 9999px;
  border: 2px solid rgba(27, 32, 255, 1);
  background: #ffffff;
  z-index: 10;
}
.product_intro_5 .left .main .paragraph {
  margin-top: 24px;
  margin-left: 30px;
  font-size: 16px;
  color: #000333;
  font-weight: 400;
}
.product_intro_5 .right {
  margin-left: 55px;
}
</style>
