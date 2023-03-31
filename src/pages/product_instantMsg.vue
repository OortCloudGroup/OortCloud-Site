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
      </div>

      <div class="product_intro_3">
        <div class="left">
          <p class="title">全面适配 形态多样</p>
          <p class="paragraph">安全即时通讯服务已全面支持主流操作系统及<span style="color: #FF2222">国产</span>操作系统、<span
              style="color: #FF2222">国产</span>移动终端、<span
              style="color: #FF2222">国产</span>芯片、国产数据库、国产加密算法、主流浏览器等。拥有云交付标准软件版、支持鲲鹏适配版，满足不同场景用户需求。</p>
        </div>
        <div class="right">
          <div class="item">
            <img src="/img/product/office/gch.png">
            <p>国产化</p>
          </div>
          <div class="item">
            <img src="/img/product/office/kunpeng.png">
            <p>支持鲲鹏云部署</p>
          </div>
        </div>
      </div>
      <div class="product_intro_4">
        <div class="left">
          <p class="title">云交付 自主可控</p>
          <p class="paragraph">通信信息由自己掌控，结合信息加密管理机制，对所有信息、数据进行三端加密、五维防护，实现数据信息真正为用户私有，保证加密数据不被破解泄露，无法监听及查看。</p>
        </div>
        <div class="right">
          <div class="item">
            <img src="/img/product/office/intro4_item1.png">
            <p>华为云主机交付</p>
          </div>
          <div class="item">
            <img src="/img/product/office/intro4_item2.png">
            <p>数据自主可控</p>
          </div>
        </div>
      </div>
      <div class="product_intro_5">
        <div class="left">
          <p class="title">功能丰富 多端同步</p>
          <p class="paragraph">丰富实用的安全即时通讯功能，具备单聊、群聊、位置、语音等基础功能，还具备阅读水印、工作圈、首长点评推送等特色功能
            ，以及音视频会议功能。支持移动端、双系统、华为Pad、PC端、国产化操作系统、华为IdeaHub等多种办公终端等多端同步。</p>
        </div>
        <div class="right">
          <div class="item">
            <img src="/img/product/office/intro5_item1.png">
            <p>PC端</p>
          </div>
          <div class="item">
            <img src="/img/product/office/intro5_item2.png">
            <p>手机端或双系统</p>
          </div>
          <div class="item">
            <img src="/img/product/office/intro5_item3.png">
            <p>华为IdeaHub</p>
          </div>
          <div class="item">
            <img src="/img/product/office/intro5_item4.png">
            <p>华为Pad</p>
          </div>
        </div>
      </div>
      <div class="product_intro_6">
        <div class="left">
          <p class="title">安全设计 隐私保护</p>
          <p class="paragraph">
            基于三端（服务器端、通道、客户端）加密，五维（访问、通讯、存储、使用、管理）防护的安全设计理念；设有推送消息保护、禁转消息、密聊等多种隐私保护功能，数据全生命周期加密，保护数据隐私安全。</p>
        </div>
        <div class="right">
          <div class="item">
            <img src="/img/product/office/intro6_item1.png">
            <p>多级组织架构统计</p>
            <p>可以设置多级组织架构和
              多级管理员。</p>
          </div>
          <div class="item">
            <img src="/img/product/office/intro6_item2.png">
            <p>界面清爽</p>
            <p>界面清爽，操作流程，简便</p>
          </div>
          <div class="item">
            <img src="/img/product/office/intro6_item3.png">
            <p>数据安全</p>
            <p>脱敏存储、加密存储，不会
              存储可识别的用户信息。</p>
          </div>
        </div>
      </div>
      <div class="product_intro_7">
        <div class="left">
          <div class="title">扩展能力强 广泛适用</div>
          <div class="paragraph">
            安全即时通讯服务具有内置的应用市场和应用工作台；统一的开发开放平台和第三方开发接口。在应用市场中，开发者可以通过接口或SDK开发适合自己的应用，实现满足自己需求的特色应用或衍生品，支持VUE、H5、MUI、uni-app、移动端原生、PC-Web、PC原生等应用开发。
          </div>
        </div>
        <div class="right">
          <img src="/img/product/office/intro7_item.png">
        </div>
      </div>
      <div class="product_intro_7">
        <div class="left">
          <div class="title">畅享 安全通讯</div>
          <div class="paragraph">
            办公宝支持文字、语音、图片、视频等多种即时通讯方式，更有月后积分功能，消息自动销毁，保障信息安全
          </div>
        </div>
        <div class="right">
          <img src="/img/product/instant_msg/item1.png">
        </div>
      </div>
      <div class="product_intro_7">
        <div class="left">
          <div class="title">即时通讯</div>
          <div class="paragraph">单聊、群聊实现类微信功能和消息推送统一入口，可创建、加入群组，发起交流或群聊，满足内部会商、沟通协同需要，避免使用公众微信平台交流工作信息的泄密风险
          </div>
        </div>
        <div class="right">
          <img src="/img/product/instant_msg/item2.png">
        </div>
      </div>
      <div class="product_intro_7">
        <div class="left">
          <div class="title">多端协同办公</div>
          <div class="paragraph">可实现多个终端同时登陆，同步协同办公，支持个人设备之间的资料互传
          </div>
        </div>
        <div class="right">
          <img src="/img/product/instant_msg/item3.png">
        </div>
      </div>
      <div class="product_intro_7">
        <div class="left">
          <div class="title">语音视频会议</div>
          <div class="paragraph">轻松发起多方音视频会议，打破空间限制，随时随地组会交流
          </div>
        </div>
        <div class="right">
          <img src="/img/product/instant_msg/item4.png">
        </div>
      </div>
      <div class="product_intro_7">
        <div class="left">
          <div class="title">短视频</div>
          <div class="paragraph">工作方法，工作技巧，小发明，小创造，以“抖音”小视频的形式发布到动态圈。
          </div>
        </div>
        <div class="right">
          <img src="/img/product/instant_msg/item5.png">
        </div>
      </div>
      <div class="product_intro_7">
        <div class="left">
          <div class="title">云课堂</div>
          <div class="paragraph">
            为将各单位专业技术培训视频及党史理论思想学习，重要会议记录视频按类别、时间、热度等收集展示，结合点赞、评论功能增强互动性。同时设有统计查看学习记录及排名展示所有用户学习“成绩”的功能，增强学习效果。便利：碎片化学习，提升工作人员业务能力。
          </div>
        </div>
        <div class="right">
          <img src="/img/product/instant_msg/item2.png">
        </div>
      </div>
      <div class="product_intro_8">
        <div class="title">
          开箱即用的功能
        </div>
        <div class="icon-list">
          <div class="icon-list__item">
            <div class="icon-list__item__icon">
              <img src="/img/product/instant_msg/ic/ic_01.png">
            </div>
            <div class="icon-list__item__content">消息</div>
          </div>
          <div class="icon-list__item">
            <div class="icon-list__item__icon">
              <img src="/img/product/instant_msg/ic/ic_02.png">
            </div>
            <div class="icon-list__item__content">群管理</div>
          </div>
          <div class="icon-list__item">
            <div class="icon-list__item__icon">
              <img src="/img/product/instant_msg/ic/ic_03.png">
            </div>
            <div class="icon-list__item__content">公众号</div>
          </div>
          <div class="icon-list__item">
            <div class="icon-list__item__icon">
              <img src="/img/product/instant_msg/ic/ic_04.png">
            </div>
            <div class="icon-list__item__content">通讯录</div>
          </div>
          <div class="icon-list__item">
            <div class="icon-list__item__icon">
              <img src="/img/product/instant_msg/ic/ic_05.png">
            </div>
            <div class="icon-list__item__content">音频会议</div>
          </div>
          <div class="icon-list__item">
            <div class="icon-list__item__icon">
              <img src="/img/product/instant_msg/ic/ic_05.png">
            </div>
            <div class="icon-list__item__content">短视频</div>
          </div>
          <div class="icon-list__item">
            <div class="icon-list__item__icon">
              <img src="/img/product/instant_msg/ic/ic_06.png">
            </div>
            <div class="icon-list__item__content">云课堂</div>
          </div>
          <div class="icon-list__item">
            <div class="icon-list__item__icon">
              <img src="/img/product/instant_msg/ic/ic_07.png">
            </div>
            <div class="icon-list__item__content">我的文件</div>
          </div>
          <div class="icon-list__item">
            <div class="icon-list__item__icon">
              <img src="/img/product/instant_msg/ic/ic_08.png">
            </div>
            <div class="icon-list__item__content">实时视频会议</div>
          </div>
          <div class="icon-list__item">
            <div class="icon-list__item__icon">
              <img src="/img/product/instant_msg/ic/ic_09.png">
            </div>
            <div class="icon-list__item__content">新闻中心</div>
          </div>
        </div>
        <div class="icon-list">
          <div class="icon-list__item">
            <div class="icon-list__item__icon">
              <img src="/img/product/instant_msg/ic/ic_09.png">
            </div>
            <div class="icon-list__item__content">邮件</div>
          </div>
          <div class="icon-list__item">
            <div class="icon-list__item__icon">
              <img src="/img/product/instant_msg/ic/ic_10.png">
            </div>
            <div class="icon-list__item__content">动态发微博</div>
          </div>
          <div class="icon-list__item">
            <div class="icon-list__item__icon">
              <img src="/img/product/instant_msg/ic/ic_11.png">
            </div>
            <div class="icon-list__item__content">应用仓库</div>
          </div>
          <div class="icon-list__item">
            <div class="icon-list__item__icon">
              <img src="/img/product/instant_msg/ic/ic_12.png">
            </div>
            <div class="icon-list__item__content">消息</div>
          </div>
        </div>
      </div>

      <!-- 服务支持 -->
      <ProductSupport v-if="support" :name="support.name" :link="support.link" />
    </ProductAnchorWrapper>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "product"
})

const headerContent = ref({
  logo: '/img/product/instant_msg/icon.png',
  name: '即时通讯',
  title: '私有化部署的内网“微信”',
  excerpt: '涵盖即时消息、电子邮件、音视频会议、资料分享、流程申请与审批、网络社交、疫情防控、健康管理等服务功能，打通企业工作编辑，助力工作效率，让工作更美好',
  buttons: [
    {
      name: '立即购买',
      link: 'https://marketplace.huaweicloud.com/contents/e6996d8e-bed3-4ae6-ac26-3c29fe58e400#productid=OFFI766186631930212352'
    }
  ],
  swipes: [
    '/img/product/instant_msg/swipe_1.png',
    '/img/product/instant_msg/swipe_1.png',
    '/img/product/instant_msg/swipe_1.png',
    '/img/product/instant_msg/swipe_1.png',
    '/img/product/instant_msg/swipe_1.png',
  ]
})
const support = ref(null)
</script>

<style scoped>
.product_intro_3 {
  padding: 100px 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product_intro_3 .left .title {
  font-size: 32px;
  color: #051261;
  letter-spacing: 3.1px;
  font-weight: 500;
}
.product_intro_3 .left .paragraph {
  margin-top: 60px;
  width: 560px;
  font-size: 14px;
  color: #717781;
  letter-spacing: 1.35px;
  line-height: 22px;
  font-weight: 400;
}
.product_intro_3 .right {
  display: flex;
}
.product_intro_3 .right .item {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.product_intro_3 .right .item:nth-of-type(2) {
  margin-left: 74px;
}
.product_intro_3 .right .item:nth-of-type(1) p {
  margin-top: 24px;
}
.product_intro_3 .right .item:nth-of-type(2) p {
  margin-top: 20px;
}
.product_intro_3 .right .item p {
  font-size: 24px;
  color: #051261;
  font-weight: 500;
}
.product_intro_4 {
  padding: 100px 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fcfcfc;
}
.product_intro_4 .left .title {
  font-size: 32px;
  color: #051261;
  letter-spacing: 3.1px;
  font-weight: 500;
}
.product_intro_4 .left .paragraph {
  margin-top: 60px;
  width: 560px;
  font-size: 14px;
  color: #717781;
  letter-spacing: 1.35px;
  line-height: 22px;
  font-weight: 400;
}
.product_intro_4 .right {
  display: flex;
}
.product_intro_4 .right .item {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.product_intro_4 .right .item:nth-of-type(2) {
  margin-left: 74px;
}
.product_intro_4 .right .item:nth-of-type(1) p {
  margin-top: 24px;
}
.product_intro_4 .right .item:nth-of-type(2) p {
  margin-top: 20px;
}
.product_intro_4 .right .item p {
  font-size: 24px;
  color: #051261;
  font-weight: 500;
}
.product_intro_5 {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fdfeff;
}
.product_intro_5 .left .title {
  font-size: 32px;
  color: #051261;
  letter-spacing: 3.1px;
  font-weight: 500;
}
.product_intro_5 .left .paragraph {
  margin-top: 60px;
  width: 560px;
  font-size: 14px;
  color: #717781;
  letter-spacing: 1.35px;
  line-height: 22px;
  font-weight: 400;
}
.product_intro_5 .right {
  display: flex;
}
.product_intro_5 .right .item {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.product_intro_5 .right .item {
  margin-left: 40px;
  width: 168px;
}
.product_intro_5 .right .item:nth-of-type(1) p {
  margin-top: 50px;
}
.product_intro_5 .right .item:nth-of-type(2) p {
  margin-top: 25px;
}
.product_intro_5 .right .item:nth-of-type(3) p {
  margin-top: 16px;
}
.product_intro_5 .right .item:nth-of-type(4) p {
  margin-top: 64px;
}
.product_intro_5 .right .item p {
  font-size: 24px;
  color: #051261;
  font-weight: 500;
}
.product_intro_6 {
  padding: 100px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fcfcfc;
}
.product_intro_6 .left .title {
  font-size: 32px;
  color: #051261;
  letter-spacing: 3.1px;
  font-weight: 500;
}
.product_intro_6 .left .paragraph {
  margin-top: 60px;
  width: 560px;
  font-size: 14px;
  color: #717781;
  letter-spacing: 1.35px;
  line-height: 22px;
  font-weight: 400;
}
.product_intro_6 .right {
  display: flex;
}
.product_intro_6 .right .item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 192px;
}
.product_intro_6 .right .item {
  margin-left: 40px;
}
.product_intro_6 .right .item p:nth-of-type(1) {
  margin-top: 24px;
  font-size: 24px;
  color: #051261;
  font-weight: 500;
}
.product_intro_6 .right .item p:nth-of-type(2) {
  margin-top: 12px;
  font-size: 14px;
  color: #717781;
  text-align: center;
  line-height: 22px;
  font-weight: 400;
}
.product_intro_7 {
  padding-top: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fdfeff;
}
.product_intro_7 .left .title {
  font-size: 32px;
  color: #051261;
  letter-spacing: 3.1px;
  font-weight: 500;
}
.product_intro_7 .left .paragraph {
  margin-top: 60px;
  width: 560px;
  font-size: 14px;
  color: #717781;
  letter-spacing: 1.35px;
  line-height: 22px;
  font-weight: 400;
}
.product_intro_8 {
  padding: 90px 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fcfcfc;
}
.product_intro_8 .title {
  margin-bottom: 80px;
  font-size: 46px;
  color: #051261;
  letter-spacing: 4.45px;
  text-align: center;
  font-weight: 600;
}
.product_intro_8 .icon-list {
  margin-bottom: 40px;
  display: flex;
}
.product_intro_8 .icon-list .icon-list__item {
  margin-left: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.product_intro_8 .icon-list .icon-list__item__icon img {
  width: 86px;
  height: 86px;
}
.product_intro_8 .icon-list .icon-list__item__content {
  margin-top: 12px;
  font-size: 16px;
  color: #757b84;
  letter-spacing: 0;
  text-align: center;
  font-weight: 400;
}

</style>