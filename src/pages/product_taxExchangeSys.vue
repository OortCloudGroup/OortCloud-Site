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
      <img src="/img/product/tax_exchange_sys/banner2.png" alt="">
    </div>
    <div class="product_intro_3">
      <p class="app">功能描述</p>
      <table class="table_1">
        <tr class="col">
          <td>文件清理</td>
          <td>可以设置时间周期对文件服务器存储的文件进行定期自动清理，以节省空间资源</td>
        </tr>
        <tr class="col">
          <td>日志统计</td>
          <td>可分、时间，对各区上传的正常文件数量、带病毒文件数量进行分类统计。</td>
        </tr>
        <tr class="col">
          <td>摆渡机状态监控</td>
          <td>对摆渡机的状态进行监控，发现有异常情况（如连接中断等），将弹窗提示告知管理员。</td>
        </tr>
        <tr class="col">
          <td>自动审计</td>
          <td>在摆渡机上的所有操作记录将会自动形成日志记录，方便管理员事后审计及追踪。（包括上传的文件名、文件大小、上传时间、上传人员等信息）</td>
        </tr>
        <tr class="col">
          <td>安全检查</td>
          <td>对用户上传的文件进行安全检查，包括文件格式检查、文件合规性检查、文件隐藏夹带检查、病毒扫描检测等。</td>
        </tr>
        <tr class="col">
          <td>文件加密储存</td>
          <td>所有上传到文件服务器的文件都经过加密处理，以保证文件存储的安全性。</td>
        </tr>
        <tr class="col">
          <td>记录、文件上传记录</td>
          <td>括文件格式检查、文件合规性检查、文件隐藏夹带检查、病毒扫描检测等。</td>
        </tr>
        <tr class="col">
          <td>策略管理</td>
          <td>可由管理员统一制定摆渡机管理策略，也可按部门或科室分别制定和下发策略，灵活性强。</td>
        </tr>
        <tr class="col">
          <td>病毒扫描、查杀</td>
          <td>内置的病毒查杀模块实时对上传的文件进行病毒木马扫描、查杀、拦截，实现文件安全上传。</td>
        </tr>
      </table>
    </div>
    <div class="product_intro_4">
      <p class="title">「产品功能」</p>
      <div class="intro">
        <div class="item">
          <p>简单易用</p>
          <p>摆渡机采用触摸式，傻瓜式操作界面，简便易用。</p>
        </div>
        <div class="item">
          <p>集中交换</p>
          <p>在摆渡机上集中进行文件交换和查杀病毒，提高办公效率并有效杜绝办税大厅办公电脑病毒感染。</p>
        </div>
        <div class="item">
          <p>不运行、不存储</p>
          <p>摆渡机设有安全机制，确保不运行除了系统预置之外的任何程序，禁止打开或运行任何格式的文件（如
            office/txt/exe等），只能基于文件的上传操作；且摆渡机在交换过程中除了保留交换的日志记录外，不保留任何交换文件的内容。</p>
        </div>
        <div class="item">
          <p>不中毒</p>
          <p>摆渡机安装了自主研发的主机安全防护系统，系统上无法运行任何系统预置之外的程序，确保病毒木马无法感染专用机。数据交换时，系统可对交换文件进行病毒木马扫描查杀，确保了交换介质之间不会自动传播病毒木马。</p>
        </div>
        <div class="item">
          <p>文件统一存储、合理分类</p>
          <p>文件上传到后端管理系统后，将根据个人账户创建存放目录，文件存放于对应的个人账户目录下，确保文件存储唯一性，防止其它用户盗用非个人账户的文件。</p>
        </div>
        <div class="item">
          <p>病毒库实时更新</p>
          <p>具备病毒库自动更新模块，通过安全隔离光单向导入技术，自动在互联网下载杀毒软件的最新病毒库更新包，单向导入内网，自动更新到杀毒模块的病毒库服务器。</p>
        </div>
      </div>
    </div>
    <div class="product_intro_5">
      <p class="title">「产品价值」</p>
      <div class="main1">
        <p class="paragraph">通过实施此套税务数据安全交换系统，可以搭建税务系统内网与外部（通过移动存储介质 ) 数据安全交换的桥梁
          ，很好地解决税务内网与外网间数据安全交换的问题，防止病毒木马进入内网，提高办税效率和服务质量，提升满意度。</p>
        <img src="/img/product/tax_exchange_sys/intro_01.png">
      </div>
      <div class="main2">
        <div class="left">
          <div class="paragraph"><img src="/img/product/tax_exchange_sys/1.png"><span>自动对上传的文件进行病毒木马 查杀及敏感内容检测，
              不仅降低了内网病毒减染，还防止了敏感文件外泄。</span></div>
          <div class="paragraph"><img src="/img/product/tax_exchange_sys/2.png"><span>税务人员通过业务编号或账号密码即可轻松获取相应文
              件，减轻税务人员的工作量，提高了工作效率。</span>
          </div>
          <div class="paragraph"><img src="/img/product/tax_exchange_sys/3.png"><span>系统提供详细的日志信息、精细的统计数据、全局的区
              域管理、 实时的监控告警等管理手段，也让管理变得更
              加便捷、规范。</span>
          </div>
        </div>
        <img src="/img/product/tax_exchange_sys/intro_02.png">
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
  logo: '/img/product/tax_exchange_sys/icon.png',
  name: '税务自助交换安全系统',
  title: '税务行业的数据安全交换产品',
  excerpt: '税务自助数据安全交换系统，是应用于税务行业的数据安全交换产品，拥有病毒扫描 / 查杀、敏感信息检查、不存储、不中毒等多种安全功能。',
  buttons: [
    // {
    //   name: '立即购买',
    //   link: 'https://marketplace.huaweicloud.com/contents/174bd256-4011-4988-89d8-d72c47e6741c#productid=OFFI698082226463612928'
    // }
  ],
  swipes: [
    '/img/product/tax_exchange_sys/banner.png'
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
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product_intro_3 .title {
  margin: 80px 0 0;
  font-size: 60px;
  color: #f70400;
  text-align: center;
  line-height: 70px;
  font-weight: 700;
}
.product_intro_3 .app {
  margin-top: 65px;
  padding: 16px 0;
  width: 1060px;
  font-size: 48px;
  text-align: center;
  background-color: #0332cd;
  color: #fff;
}
.product_intro_3 .table_1 {
  border-bottom: 2.2px solid #0332cd;
}
.product_intro_3 .table_1 .col td:nth-of-type(1) {
  width: 296px;
  font-size: 40px;
  color: #0b163a;
  letter-spacing: 6px;
  font-weight: 400;
  text-align: center;
  border-left: 2.2px solid #0332cd;
  border-right: 2.2px solid rgba(0, 0, 0, 0.2);
}
.product_intro_3 .table_1 .col td:nth-of-type(2) {
  padding: 20px 0 20px 37px;
  width: 720px;
  font-size: 30px;
  color: #40434a;
  letter-spacing: 4.5px;
  line-height: 42px;
  font-weight: 400;
  border-right: 2.2px solid #0332cd;
}
.product_intro_3 .table_1 .col:nth-child(2n + 1) {
  background: rgba(0, 0, 0, 0.1);
}
.product_intro_4 {
  padding: 100px 40px;
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
  max-width: 1500px;
  display: flex;
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
  background: url(/img/product/tax_exchange_sys/card2.png);
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
.product_intro_5 .main1 {
  margin-bottom: 120px;
}
.product_intro_5 .main1,
.product_intro_5 .main2 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.product_intro_5 .main1 .paragraph {
  margin-right: 115px;
  width: 525px;
  font-size: 14px;
  color: #051261;
  line-height: 22px;
  font-weight: 400;
}
.product_intro_5 .left {
  margin-right: 302px;
}
.product_intro_5 .left .paragraph {
  display: flex;
  align-items: flex-start;
  margin-top: 46px;
  width: 340px;
  font-size: 16px;
  color: #051261;
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
#service {
  width: 100%;
}

</style>