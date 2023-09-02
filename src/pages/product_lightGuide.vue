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
      <img src="/img/product/light_guide/banner2.png" alt="" />
    </div>
    <div class="product_intro_3">
      <p class="title">
        「产品特点」
      </p>
      <div class="function">
        <div class="item card-a">
          <p>光单向传输无反馈信号</p>
          <p>将数据从源端单向传输到目的端，利用光的不可逆性完成数据单向导入。</p>
        </div>
        <div class="item card-b">
          <p>安全性</p>
          <p>对导入的文件进行安全性及合规性检查，确保数据的完全性、完整性。</p>
        </div>
        <div class="item card-c">
          <p>兼容性</p>
          <p>支持主流移动存储设备，设备即插即导入，无需取出存储卡。</p>
        </div>
        <div class="item card-d">
          <p>灵活性</p>
          <p>可通过策略管控导入的文件类型，可自主选择导入文件及文件存放路径，支持文本文件在线预览，剪切部数据单向导入。</p>
        </div>
      </div>
    </div>
    <div class="product_intro_4">
      <p class="title">
        「产品功能」
      </p>
      <div class="intro">
        <div class="item">
          <p>自动审计</p>
          <p>大容量光单导设备上所有的光单向文件传输数据都进行详细审计，日志信息包含设备信息、操作人信息、文件信息和操作日期等，便于统计和查询。</p>
        </div>
        <div class="item">
          <p>智能生成密匙</p>
          <p>可通过策略来控制大容量光单导设备允许导入的文件</p>
        </div>
        <div class="item">
          <p>自主操作</p>
          <p>可自主选择大容量存储设备中的文件进行导入，支持单选、部分选、全文文件操作，并且可自定义文件的存放的路径。</p>
        </div>
        <div class="item">
          <p>支持文本在线预览</p>
          <p>支持文本在线预览，预览文件时可以选择文件中的部分内容直接复制导剪切板中，并将剪切板中的内容单向导入导内部网络计算机中。</p>
        </div>
        <div class="item">
          <p>支持主流设备即插即导入</p>
          <p>对数码相机、数码摄像机、扫描仪、录音笔、执法记录仪等主流带存储功能的设备可实现即插即导入，无需将存储卡取出，使用方便快捷。</p>
        </div>
        <div class="item">
          <p>安全检查</p>
          <p>专用大容量传输设备对导入文件进行安全检查，包括文件类型和格式合规性检查、杀毒扫描等。</p>
        </div>
      </div>
    </div>
    <div class="product_intro_5">
      <div class="left">
        <div class="title">
          产品价值
        </div>
        <div class="paragraph">
          <img src="/img/product/light_guide/1.png" /><span>光单向传输，无反馈信号，保证数据的单向性传输</span>
        </div>
        <div class="paragraph">
          <img src="/img/product/light_guide/2.png" /><span>确保满足单位内外网数据同步需求，同时保证了数据的安全性、完整性</span>
        </div>
        <div class="paragraph">
          <img src="/img/product/light_guide/3.png" /><span>有效防止数据传输时病毒木马跨网自动传播，保证内网数据安全</span>
        </div>
        <div class="paragraph">
          <img src="/img/product/light_guide/3.png" /><span>方便、快捷，提高工作效率</span>
        </div>
      </div>
      <div class="right">
        <img src="/img/product/light_guide/intro_01.png" alt="" />
      </div>
    </div>
    <div class="product_intro_5">
      <div class="left">
        <div class="title">
          应用场景
        </div>
        <div class="paragraph">
          <img src="/img/product/light_guide/1.png" /><span>外部工作秘密数据需光单向导入到单位内部计算机</span>
        </div>
        <div class="paragraph">
          <img src="/img/product/light_guide/2.png" /><span>主流移动存储设备中文件光单向导入到单位内部计算机</span>
        </div>
        <div class="paragraph">
          <img src="/img/product/light_guide/3.png" /><span>大容量文件需光单向导入到单位内部计算机</span>
        </div>
      </div>
      <div class="right">
        <img src="/img/product/light_guide/intro_02.png" alt="" />
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
  logo: '/img/product/light_guide/icon.png',
  name: '单向光导机',
  title: '大容量信息设备光单向传输系统',
  excerpt: '大容量信息设备光单向传输系统，解决大量分散的外部数据源导入内网的问题',
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
  width: 100%;
}
.product_intro_2 .title {
  padding-top: 157px;
  margin-left: 786px;
  font-size: 32px;
  color: #ffffff;
  font-weight: 600;
}
.product_intro_2 .paragraph {
  margin-top: 68px;
  margin-left: 766px;
  width: 847px;
  font-size: 16px;
  color: #333333;
  line-height: 30px;
  font-weight: 400;
}
.product_intro_3 {
  padding: 122px 100px;
  background: url(/img/product/light_guide/bg.png) no-repeat;
  background-size: 100%;
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
  width: 302px;
  height: 404px;
}
.product_intro_3 .function .card-a {
  background: url(/img/product/light_guide/card_a.png) no-repeat;
}
.product_intro_3 .function .card-b {
  background: url(/img/product/light_guide/card_b.png) no-repeat;
}
.product_intro_3 .function .card-c {
  background: url(/img/product/light_guide/card_c.png) no-repeat;
}
.product_intro_3 .function .card-d {
  background: url(/img/product/light_guide/card_d.png) no-repeat;
}
.product_intro_3 .function .item p:nth-of-type(1) {
  margin-top: 83px;
  font-size: 28px;
  color: #051261;
  font-weight: 700;
  align-self: center;
}
.product_intro_3 .function .item p:nth-of-type(2) {
  margin: 47px 0 0 17px;
  font-size: 16px;
  color: #506079;
  line-height: 24px;
  font-weight: 400;
}
.product_intro_4 {
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  max-width: 1500px;
  justify-content: center;
  flex-wrap: wrap;
}
.product_intro_4 .intro .item {
  margin-right: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 450px;
  height: 257px;
  background: url(/img/product/light_guide/card2.png);
}
@media screen and (max-width: 1537px) {
  .product_intro_4 .intro .item {
    width: 350px;
  }
}
.product_intro_4 .intro .item p:nth-of-type(1) {
  margin-left: 13px;
  margin-top: 33px;
  font-size: 26px;
  color: #051261;
  font-weight: 600;
}
.product_intro_4 .intro .item p:nth-of-type(2) {
  margin-left: 24px;
  margin-top: 54px;
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

</style>
