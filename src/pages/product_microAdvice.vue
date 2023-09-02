<template>
  <div class="page_container">
    <ProductAnchorWrapper>
      <div id="商品详情">
        <ProductHeader
          :logo="headerContent.logo"
          :name="headerContent.name"
          :title="headerContent.title"
          :excerpt="headerContent.excerpt"
          :buttons="headerContent.buttons"
          :swipes="headerContent.swipes"
        />

        <div class="product_intro_2">
          <img src="/img/product/micro_advice/banner2.png" alt="" />
        </div>
        <div class="product_intro_4">
          <div class="step">
            <div class="step__item">
              <div class="step__item__icon">
                <img src="/img/product/micro_advice/1.png" alt="" />
                <span>出示执勤码</span>
              </div>
              <div class="step__item__content">
                工作人员通过出示执勤码给交通违法人员扫码记录上报违法信息
              </div>
            </div>
            <div class="step__item">
              <div class="step__item__icon">
                <img src="/img/product/micro_advice/2.png" alt="" />
                <span>群众扫码</span>
              </div>
              <div class="step__item__content">
                群众使用微信扫描工作人员的执勤码，引导群众纪律上报违法信息
              </div>
            </div>
            <div class="step__item">
              <div class="step__item__icon">
                <img src="/img/product/micro_advice/3.png" alt="" />
                <span>统计后台</span>
              </div>
              <div class="step__item__content">
                后台工作人员统计执勤工作人员任务信息及派发劝导任务
              </div>
            </div>
          </div>
          <div class="img">
            <img src="/img/product/micro_advice/intro_03.png" />
          </div>
        </div>
        <div class="product_intro_5">
          <div class="block__left">
            <div class="block__left__title">
              推广场景
            </div>
            <div class="block__left__content">
              <p>为有效提升交通工具驾乘人员和行人的交通安全意识，规范道路交通秩序，现推出“交通微劝导系统”，对路面各类存在不文明交通行为的群众进行宣传劝导，引导广大群众出行遵守交通规则。</p><br />
              <p>重点对电动自行车驾乘人员不戴头盔、非机动车逆行、占用机动车道通行以及行人冲红灯、乱过马路等交通违法行为进行劝导教育。</p>
            </div>
          </div>
          <div class="block__right">
            <div class="block__right__imgs">
              <img src="/img/product/micro_advice/intro_02.png" alt="" />
              <img src="/img/product/micro_advice/intro_01.png" alt="" />
            </div>
          </div>
        </div>
        <div class="product_intro_3">
          <div class="item1 intro">
            <p>数据安全</p>
            <p>脱敏存储、加密存储，不会存储可识别的用户信息。</p>
          </div>
          <div class="item2 intro">
            <p>产品成熟度高</p>
            <p>快速交付，当天上线，通过配置满足各种微小细节需求。</p>
          </div>
          <div class="item3 intro">
            <p>高并发</p>
            <p>采用分布式架构，满足大量群众并发扫码使用场景。</p>
          </div>
          <div class="item4 intro">
            <p>价格低</p>
            <p>大量应用案例已经平摊了研发成本，用户总体拥有成本低。</p>
          </div>
          <div class="item5 intro">
            <p>高可用</p>
            <p>满足使用范围广，使用频率高的目标。</p>
          </div>
          <div class="item6 intro">
            <p>界面清爽</p>
            <p>界面清爽，操作流畅，简便。</p>
          </div>
        </div>
      </div>

      <div id="用户案例" class="user">
        <p class="title">
          用户案例
        </p>
        <div class="item">
          <div class="second_title">
            东莞市
          </div>
          <p>有效提升交通工具乘驾人员和行人的交通安全意识</p>
          <p>为市民创造一个车与车和谐、车与人和谐的道路交通环境</p>
          <br />
          <p>“对电动车骑乘人员不戴头盔、冲红灯、逆行、占用机动车道通行、超载等不文明交通行为，进行劝导教育，扫码进入‘莞微劝导’小程序对其不文明的交通行为进行登记备案。”3月18日，东莞路面使用“莞微劝导”小程序进行劝导教育的执勤民警告诉记者。当前，“莞微劝导”小程序正在进一步推广使用中。</p>
          <br />
          <p>为进一步提升电动车驾乘人员和行人的交通安全意识，营造安全、有序、畅通的道路交通环境，近日，东莞组织警力在辖区开展文明交通劝导活动，对电动车驾乘人员和行人的不文明交通行为进行劝导，引导广大群众出行遵守交通规则。</p>
          <br />
          <p>在交通安全劝导活动中，执勤人员主要对过往电动车骑乘人员的不文明交通行为进行劝导教育，要求不守秩序的交通参与者通过扫描二维码进入“莞微劝导”小程序对其不文明的交通行为进行登记备案，以此督促广大交通参与者自觉遵守交通规则。</p>
          <br />
          <p>当前，东莞交警部门积极开展交通安全劝导活动，有效提升了群众的交通安全意识，有利于共同营造人车和谐、安全畅通、文明有序的道路交通环境。</p>
          <br />
          <p>引自新闻 https://www.163.com/dy/article/G5DF1518055004XG.html</p>
          <p>“莞微劝导”小程序来了！对不文明的交通行为进行登记备案</p>
        </div>
        <div class="item">
          <div class="second_title">
            惠州市
          </div>
          <p>分为群众使用和工作人员使用，以及后台管理人员使用，三个模式。</p>
          <p>1、群众</p>
          <p>使用主要是使用微信扫描工作人员出示的 执勤码 进入页面完善群众的个人信息，提交认证。</p>
          <p>然后选择违法行为，上报违法行为。违法记录三次以下为绿码，三次以上为红码。点击违法记录可查看相应交通法规。</p>
          <p>2、工作人员</p>
          <p>打开微信扫描二维码，输入管理员提供的 警员编号 和 密码 进行绑定</p>
          <p>（1）查看群众违法记录。违法人员通过微信扫一扫，扫描工作人员出示的 执勤码，上报违法记录，上报完成后工作人员可在 二维码采集 入口查看上报记录 。</p>
          <p>（2）宣教任务。待完成任务、根据实际情况上报、录入上报，劝导联系成功需要违法人员使用手机扫码进行 签名、已执行任务列表、宣教记录详情等。</p>
          <p>（3）宣教视频。工作人员对重点交通违法人员进行交通法律法规视频分享观看。</p>
          <p>3、管理人员</p>
          <p>（1）使用账号密码登录后台管理系统</p>
          <p>（2）工作人员管理。管理人员可对工作人员进行 新增删除 及人员信息 编辑修改，管理人员点击绑定入口按钮提供绑定二维码给工作人员进行微信绑定，并且告知工作人员登录警号及密码</p>
          <p>（3）劝导任务派发。管理人员针对重点违法人员进行交通安全教育劝导的任务发布</p>
          <p>（4）劝导视频发布。管理人员通过后台上传劝导教育视频，以便劝导人员进行劝导任务</p>
          <p>（5）劝导行为记录。扫码上报可查看所有交通违法人员的违法上报记录。</p>
        </div>
      </div>

      <!-- 服务支持 -->
      <ProductSupport :name="support.name" :link="support.link" />
    </ProductAnchorWrapper>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'product'
})

const headerContent = ref({
  logo: '/img/product/micro_advice/icon.png',
  name: '微劝导',
  title: '落实交通安全宣传劝导',
  excerpt: '有效提升交通工具乘驾人员和行人的交通安全意识，为市民创造一个车与车和谐、车与人和谐的道路交通环境',
  buttons: [
    {
      name: '立即购买',
      link: 'https://marketplace.huaweicloud.com/contents/4f7fa8e3-24db-458a-88b9-e470da188c97#productid=OFFI698849366409105408'
    },
    {
      name: '在线体验',
      img: '/img/product/micro_advice/code.jpg'
    }
  ],
  swipes: [
    '/img/product/micro_advice/swipe_1.png',
    '/img/product/micro_advice/swipe_2.png',
    '/img/product/micro_advice/swipe_3.png'
  ]
})
const support = ref({
  name: '“交通微劝导系统”使用汇报.pdf',
  link: 'https://portal-data-cn.obs.cn-north-4.myhuaweicloud.com/marketplace/public/app/attachment/20220211/78e07715-5186-4dcb-84b0-2131a997b152/2202111003097896.pdf'
})
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
  position: relative;
  height: 700px;
  background: url(./img/product/micro_advice/frame.png) no-repeat 50% 50%;
}
.product_intro_3 .intro p:nth-of-type(1) {
  font-size: 24px;
  color: #424148;
  font-weight: 600;
}
.product_intro_3 .intro:nth-child(2n) p:nth-of-type(1) {
  text-align: right;
}
.product_intro_3 .intro p:nth-of-type(2) {
  width: 234px;
  font-size: 18px;
  color: #454545;
  line-height: 24px;
  font-weight: 400;
}
.product_intro_3 .item1,
.product_intro_3 .item2,
.product_intro_3 .item3,
.product_intro_3 .item4,
.product_intro_3 .item5,
.product_intro_3 .item6 {
  position: absolute;
}
.product_intro_3 .item1 {
  top: 19%;
  left: 25%;
}
.product_intro_3 .item2 {
  top: 19%;
  left: 63%;
}
.product_intro_3 .item3 {
  top: 41%;
  left: 23.5%;
}
.product_intro_3 .item4 {
  top: 41%;
  left: 64.5%;
}
.product_intro_3 .item5 {
  top: 70%;
  left: 27%;
}
.product_intro_3 .item6 {
  top: 72%;
  left: 61%;
}
.product_intro_4 {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product_intro_4 .step {
  margin-right: 150px;
}
.product_intro_4 .step .step__item {
  margin-bottom: 60px;
}
.product_intro_4 .step .step__item__icon {
  font-size: 20px;
  color: #1f3f74;
  font-weight: 700;
}
.product_intro_4 .step .step__item__content {
  margin-top: 20px;
  font-size: 14px;
  color: #717781;
  font-weight: 400;
}
.product_intro_5 {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fcfcfc;
}
.product_intro_5 .block__left__title {
  margin-bottom: 60px;
  font-size: 32px;
  color: #051261;
  letter-spacing: 3.1px;
  font-weight: 500;
}
.product_intro_5 .block__left__content {
  width: 560px;
  font-size: 14px;
  color: #717781;
  letter-spacing: 1.35px;
  line-height: 22px;
  font-weight: 500;
}
.product_intro_5 .block__right__imgs img {
  margin-left: 40px;
}

</style>
