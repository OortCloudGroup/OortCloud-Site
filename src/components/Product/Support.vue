<template>
  <div id="服务支持">
    <div id="service" class="services">
      <div class="info1">
        <p class="title">
          服务支持
        </p>
        <p class="title2">
          使用指南
        </p>
        <div class="download">
          <div class="download_title">
            <img src="/img/pdf.png" />
            <span>【主打胶片】{{ name }}</span>
          </div>
          <a :href="link" target="_blank">下载</a>
        </div>
      </div>
      <div class="info2">
        <p class="title">
          平台支持范围
        </p>
        <div>
          <p>售后服务时间：7*12小时</p>
          <p>售后服务内容：</p>
          <p>1、支持现有应用注册、联调、发布等开发工作</p>
          <p>2、协助现有移动应用注册、联调、发布等到平台的相关开发工作。</p>
          <p>
            3、与第三方系统对接能力支持。具备与统一身份系统（包含单点登录）对接能力，具备统一二维码登录能力，具备与统一提醒服务对接能力，具备其他第三方H5应用、原生应用接入能力以及多开发商管理能力。以及多种和个性化移动应用分类支持,多种屏幕适配支持。开启内部登录集成可以使用机构自有的帐号、密码登录客户端以及管理后台，可使用HTTP登录认证。
          </p>
          <p>服务热线：18938083835</p>
          <p>服务邮箱：zhangxuelian@oortcloudsmart.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.services {
  padding-top: 68px;
  height: 695px;
  display: flex;
  flex-direction: column;
  background: #f8f9fb;
}
.services .info1 {
  height: 357px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(/img/service_bg.png);
}
.services .info1 .title {
  margin-top: 80px;
  font-size: 46px;
  color: #051261;
  letter-spacing: 4.45px;
  font-weight: 600;
}
.services .info1 .title2 {
  margin-top: 20px;
  font-size: 28px;
  color: #051261;
  letter-spacing: 2.71px;
  font-weight: 600;
}
.services .info1 .download {
  margin-top: 40px;
  width: 700px;
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f0f0f0;
}
.services .info1 .download_title {
  display: flex;
  align-items: center;
}
.services .info1 .download img {
  padding-left: 10px;
  width: 32px;
  height: 32px;
}
.services .info1 .download span {
  font-size: 16px;
  color: #051261;
  letter-spacing: 1.55px;
  font-weight: 400;
}
.services .info1 .download a {
  width: 100px;
  height: 100%;
  background: #2038ec;
  font-size: 16px;
  color: #ffffff !important;
  letter-spacing: 1.55px;
  font-weight: 400;
  text-align: center;
  line-height: 54px;
}
.services .info2 {
  margin: 0 auto;
  margin-top: 40px;
  width: 1090px;
}
.services .info2 .title {
  font-size: 24px;
  color: #3f4151;
  letter-spacing: 2.32px;
  font-weight: 600;
}
.services .info2 > div {
  margin-top: 24px;
  font-size: 14px;
  color: #506079;
  letter-spacing: 0;
  line-height: 22px;
  font-weight: 600;
}
</style>
