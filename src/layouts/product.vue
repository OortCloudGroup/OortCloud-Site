<template>
  <div class="defalut_layout">
    <NavHeader></NavHeader>
    <div style="height: 64px;width: 100%;"></div>
    <div class="nav_container">
      <!-- 侧边菜单 -->
      <div class="nav_menu">
        <SidebarMenu />
      </div>
      <!-- 轮播图 -->
      <div class="carousel_container">
        <Carousel :carouse-list="carouseList"></Carousel>
      </div>
    </div>
    <div class="cd_bottom">
    <div class="cd_bottom_list">
      <a href="./productdetail_mhyyyck.html" target="_blank" class="cd_bottom_list_item">
        <img src="/img/home/xl_3.png" />
        <div class="cd_bottom_list_item_right">
          <span>门户与应用仓库</span>
          <span>把小程序搬进APP,快速打造超级APP</span>
        </div>
      </a>
      <a href="./productdetail_jstx.html" class="cd_bottom_list_item" target="_blank">
        <img src="/img/home/xl_1.png" />
        <div class="cd_bottom_list_item_right">
          <span>即时通讯</span>
          <span>单聊、群聊、图文、视频等即时通讯IM</span>
        </div>
      </a>
      <a href="#" class="cd_bottom_list_item" target="_blank">
        <img src="/img/home/xl_4.png" />
        <div class="cd_bottom_list_item_right">
          <span>移动应用开发支撑平台</span>
          <span>移动应用开发支撑平台</span>
        </div>
      </a>
      <a href="https://myoumuamua.com/" class="cd_bottom_list_item" target="_blank">
        <img src="/img/home/xl_2.png" />
        <div class="cd_bottom_list_item_right">
          <span>私有云部署的移动安全办公云平台</span>
          <span>私有云部署的移动安全办公云平台</span>
        </div>
      </a>
    </div>
    <div class="cd_bottom_list">
      <div class="cd_bottom_list_item">
        <img src="/img/home/xl_5.png" />
        <div class="cd_bottom_list_item_right">
          <span>安全管控MDM</span>
          <span>设备管家--MDM移动终端安全管理平台</span>
        </div>
      </div>
      <a href="http://map.oort.oortcloudsmart.com:31610/oort/oortcloud-policefront/console_manage/index.html#/"
        class="cd_bottom_list_item" target="_blank">
        <img src="/img/home/xl_6.png" />
        <div class="cd_bottom_list_item_right">
          <span>定制手机型安全终端</span>
          <span>手机终端安全加固组件与刷机服务包</span>
        </div>
      </a>
      <a href="http://map.oort.oortcloudsmart.com:31610/oort/oortcloud-policefront/console_manage/index.html#/"
        class="cd_bottom_list_item" target="_blank">
        <img src="/img/home/xl_7.png" />
        <div class="cd_bottom_list_item_right">
          <span>定制安全Pad终端</span>
          <span>Pad终端安全加固组件与刷机服务包</span>
        </div>
      </a>
      <NuxtLink to="/more" class="cd_bottom_list_item">
        <img src="/img/home/gd_1.png" />
        <div class="cd_bottom_list_item_right"
          style="display: flex; flex-direction: row; align-items: center; margin-left: 18px">
          <span style="color: #2e4bf1">更多</span>
          <img src="/img/home/gd_2.png" style="width: 16px; height: 16px" />
        </div>
      </NuxtLink>
    </div>
  </div>
    <slot />
    <Bottom></Bottom>
  </div>
</template>

<script setup lang="ts">
const carouseList = ref([
  {url: '/img/home/jwb.png', title: '警务宝一体机', desc: '面向派出所、警务室的一体化智慧基层平台', buttons: [
    {text: '立即购买'} , {text: '了解详情'}, {text: '立即体验'}, {text: '观看视频'}
  ]},
  {url: '/img/home/yzt_bg.png', title: '智慧调度一张图', desc: '打造全警钟、全平台、资源整合、系统集成、信息共享，实现接警、指挥、调度为一体的指挥中心，从而更有效的提高治安预防、控制、制止的反应能力',
  buttons: [{text: '立即购买'} , {text: '了解详情'}, {text: '立即体验'}, {text: '观看视频'}]},
  {url: '/img/home/sypt.png', title: '私有云部署的移动安全办公云平台', desc: '对标公有云上的钉钉，企业微信的专门私有化部署的数字化移动协同办公平台，数据自己掌握，安全可控。打造了一个涵盖即时消息、电子邮件、音视频会议、资料分享、流程申请与',
  buttons: [{text: '立即购买'} , {text: '了解详情'}, {text: '立即体验'}, {text: '观看视频'}]},
  {url: '/img/home/mhck.png', title: '门户与应用仓库', desc: '快速打造数字化超级App，拥有领先于市场的小程序容器技术，可为您提供敏捷、安全的最佳实践，是数字化时代下企业移动开发的不二之选。',
  buttons: [{text: '立即购买'} , {text: '了解详情'}, {text: '立即体验'}]}
])

</script>


<style scoped lang="scss">

.nav_container {
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.nav_menu {
  display: flex;
  min-width: 360px;
  width: 360px;
}
.carousel_container {
  height: 100%;
  flex: 1;
  width: calc(100% - 360px);
}

.cd_bottom {
  padding: 30px 0 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  /* height: 298px; */
  background: url(/img/home/cd_bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  filter: progid:DXImageTransform.Microsoft.alphaImageLoader(src='imgs/home/cd_bg.png',sizingMethod='scale');
}
@media screen and (max-width: 1537px) {
  .cd_bottom_list_item {
    width: 320px !important;
  }
}
.cd_bottom_list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.cd_bottom_list_item {
  padding: 0 24px;
  display: flex;
  align-items: center;
  width: 390px;
  height: 116px;
  background: #ffffff;
  margin: 0 10px 10px 0;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  transition: .3s;
}
.cd_bottom_list_item:hover {
  background: rgba(51, 146, 217, 0.07);
}

.cd_bottom_list_item img {
  width: 46px;
  height: 46px;
  margin-left: 12px;
}

.cd_bottom_list_item_right {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 8px;
}

.cd_bottom_list_item_right span:nth-of-type(1) {
  font-size: 16px;
  color: #333333;
  font-weight: 600;
}

.cd_bottom_list_item_right span:nth-of-type(2) {
  margin-top: 12px;
  font-size: 14px;
  color: #666666;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 64px;
  background-color: #fff;
  box-shadow: 0 0.5rem 1rem 0 rgba(105, 123, 140, 0.1);
  &_logo {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: auto;
      height: 50px;
    }
  }
  &_menu {
    flex: 1;
  }
  &_other {
    width: 10%;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    img {
      width: auto;
      height: 40px;
    }
  }
}

.header_tabs {
    list-style:none;
    height: 98%;
    padding: 0px;
    margin: 0px;
    display: flex;
    li {
      margin: 0 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 120px;
      color: #909399;
      height: 100%;
      color: #000;
      font-size: 20px;
      text-align: center;
      background-color: #fff;
      &::after {
        content: "";
        width: 0;
        height: 2.5px;
        background-color: #1856a6;
        position: absolute;
        left: 100%;
        bottom: 0;
        transition: all .4s;
      }
      &:hover {
        color: #1856a6;
        &::after {
          width: 100%;
          left: 0;
          transition-delay: 0.1s;
        }
        & ~ li::after {
          left: 0;
        }
      }
    }
  }

.li_active {
  color: #1856a6!important;
  &::after {
    content: "";
    width: 100%!important;;
    height: 2.5px!important;;
    background-color: #1856a6!important;;
    position: absolute;
    left: 0!important;;
    bottom: 0!important;;
  }
}



.bottom_body {
  width: 100%;
  min-height: 452px;
  background-color: #24292d;
}

.bottom_content {
  max-width: 1190px;
  margin: 0 auto;
}

.bottom_tips {
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 0.78px solid #666666;
}

.bottom_tips_item {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.bottom_tips_item img {
  width: 60px;
  height: 60px;
}

.bottom_tips_item span {
  margin-left: 8px;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
}

.bottom_href {
  display: flex;
  flex-direction: row;
  margin-top: 19px;
  min-height: 200px;
}

.bottom_href_item {
  display: flex;
  flex-direction: row;
  margin-top: 19px;
  /*min-width: 200px;*/
  min-width: 14%;
}

.bottom_href_item_first {
  border-right: 0.78px solid #666666;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 15px;
}

.bottom_href_item_first .bottom_href_item_first_text1 {
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
}

.bottom_href_item_first .text2 {
  font-size: 14px;
  color: #999999;
  letter-spacing: 0;
}

.bottom_href_item_first img {
  margin: 16px;
  width: 109px;
  height: 109px;
}

.bottom_href_item_text {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: flex-start;
  align-items: flex-start;
}
.bottom_href_item_text span {
  margin: 6px 0px;
  display: block;
}

.bottom_href_item_text span a {
  text-decoration: none;
  font-size: 12px;
  color: #ffffff86 !important;
  letter-spacing: 0;
}

.bottom_heee {
  margin-top: 40px;
  height: 60px;
  display: flex;
  justify-content: center;
  border-top: 0.78px solid #666666;
  flex-direction: row;
  align-items: center;
}
.bottom_heee span a {
  text-decoration: none;
  font-size: 14px;
  color: #999999;
  letter-spacing: 0;
}

.footer_imgs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 80px;
}

.footer_imgs_item {
  margin: 8px;
  width: 300px;
  position: relative;
}

.footer_imgs_item img {
  width: 100%;
  cursor: pointer;
}

.footer_imgs_item img:hover {
  transform: scale(1.01);
}

</style>
