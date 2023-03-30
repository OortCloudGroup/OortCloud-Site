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
      <img src="/img/product/mid_machine/banner2.png" alt="">
    </div>
    <div class="product_intro_3">
      <p class="title">「产品特点」</p>
      <div class="function">
        <div class="item card-a">
          <p>操作简单</p>
          <p>采用触摸屏手写操作简易便用。</p>
        </div>
        <div class="item card-b">
          <p>自主可控</p>
          <p>满足国家国产化策略大前提，适配国产化操作系统和国产CPU。</p>
        </div>
        <div class="item card-c">
          <p>安全可靠</p>
          <p>一体化专用硬件构架，不链接任何网络，完全物理隔离，杜绝网络接口、红外、蓝牙、无线等接入方式，不运行、不储存、不自动传播病毒。</p>
        </div>
      </div>
    </div>
    <div class="product_intro_4">
      <p class="title">「产品功能」</p>
      <div class="intro">
        <div class="item1">
          <div class="box">
            <p><img src="/img/product/mid_machine/item1.png"><span>交换行为可控</span></p>
            <p>支持文本在线预览，预览文件时可以选择文件中的部分内容直接复制导剪切板中，并将剪切板中的内容单向导入导内部网络计算机中。</p>
          </div>
          <div class="box">
            <p><img src="/img/product/mid_machine/item2.png"><span>直观人性化的数据统计</span></p>
            <p>支持文本在线预览，预览文件时可以选择文件中的部分内容直接复制导剪切板中，并将剪切板中的内容单向导入导内部网络计算机中。</p>
          </div>
          <div class="box">
            <p><img src="/img/product/mid_machine/item3.png"><span>安全的全面检查</span></p>
            <p>对交换文件进行全面的安全检查，包括文件类型真实性检查、格式合规性检查、病毒木马扫描、敏感信息（按关键字或密级）检查等。</p>
          </div>
        </div>
        <div class="item2">
          <div class="box">
            <p><img src="/img/product/mid_machine/item4.png"><span>全面日志审计</span></p>
            <p>专用中间机上的所有数据交换都有日志生成，包括交换的文件中是否携带病毒、是否包含夹带信息、是否包含敏感词等，便于审计追溯。</p>
          </div>
          <div class="box">

            <p><img src="/img/product/mid_machine/item5.png"><span>移动存储介质支持</span></p>
            <p>基于国产化Linux操作系统研发的中间机支持兼容所有普通移动存储介质（普通U盘、移动硬盘等）以及新研制适配的Linux安全U盘。</p>
          </div>
          <div class="box">
            <p><img src="/img/product/mid_machine/item6.png"><span>图形报表、直观分析</span></p>
            <p>提供了强大的系统功能，高校完善的二维报表，支持柱状图、折线图、饼图等图形展示，为管理者提供清晰视觉支持。</p>

          </div>
          <div class="box">
            <p><img src="/img/product/mid_machine/item7.png"><span>精准的敏感信息检索</span></p>
            <p>精准的敏感信息检索，采用全文检索、文件密件智能分析与学习、自动检索等技术，实时动态监控计算机违规存储敏感文件的行为，及时向监控中心报警，以便保密管理人员事前管理、事中监控、事后追踪。</p>

          </div>
        </div>
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
  logo: '/img/product/mid_machine/icon.png',
  name: '新一代“中间机”',
  title: '移动储存安全交换系统',
  excerpt: '“移动存储安全交换系统”简称“中间机”，是新一代中间机的标志，专用于各种移动存储介质之间的信息安全交换',
  buttons: [
    // {
    //   name: '立即购买',
    //   link: 'https://marketplace.huaweicloud.com/contents/174bd256-4011-4988-89d8-d72c47e6741c#productid=OFFI698082226463612928'
    // }
  ],
  swipes: [
    '/img/product/mid_machine/banner.png'
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
.product_intro_2 {
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
  background: url(/img/product/mid_machine/bg.png);
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
  background: url(/img/product/mid_machine/card_a.png) no-repeat;
}
.product_intro_3 .function .card-b {
  background: url(/img/product/mid_machine/card_b.png) no-repeat;
}
.product_intro_3 .function .card-c {
  background: url(/img/product/mid_machine/card_c.png) no-repeat;
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
  padding: 100px 180px;
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
.product_intro_4 .item1,
.product_intro_4 .item2 {
  display: flex;
  justify-content: center;
}
.product_intro_4 .box {
  margin-top: 20px;
  margin-left: 20px;
  padding: 18px 20px;
  width: 343px;
  height: 210px;
  background: #fafafa;
}
.product_intro_4 .box p:nth-of-type(1) {
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #051261;
  font-weight: 600;
}
.product_intro_4 .box p:nth-of-type(1) img {
  margin-right: 12px;
}
.product_intro_4 .box p:nth-of-type(2) {
  margin-top: 20px;
  font-size: 16px;
  color: #506079;
  line-height: 24px;
  font-weight: 400;
}
#users {
  margin-bottom: 80px;
  height: auto;
}
#users p:last-child {
  padding-left: 364px;
  margin-top: 60px;
  font-size: 28px;
  color: #051261;
  letter-spacing: 2.71px;
  font-weight: 600;
  align-self: flex-start;
}

</style>