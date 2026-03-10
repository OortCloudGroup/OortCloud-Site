<template>
  <div class="defalut_layout">
    <NavHeader />
    <div style="height: 64px;width: 100%;" />
    <div class="nav_container">
      <!-- 侧边菜单 -->
      <div class="nav_menu">
        <SidebarMenu />
      </div>
      <!-- 轮播图 -->
      <div class="carousel_container">
        <Carousel :carouse-list="carouseList" />
      </div>
    </div>
    <slot />
    <Bottom />
  </div>
</template>

<script setup lang="ts">
const carouseList = ref([
  {
    url: '/img/home/bg_2.png',
    title: '创造无限可能',
    desc: '公共安全“私有云智能化应用建设解决方案”提供商',
    buttons: []
  },
  {
    url: '/img/home/jwb.png',
    title: '警务宝一体机',
    desc: '面向派出所、警务室的一体化智慧基层平台',
    buttons: [
      { text: '立即购买', link: 'https://marketplace.huaweicloud.com/contents/ee446d40-ce7c-447f-84e9-4ca0a1fe2f0f' },
      { text: '了解详情', link: '/JWBdetail' },
      { text: '立即体验', link: 'http://map.oort.oortcloudsmart.com:31610/oort/oortcloud-policefront/console_manage/index.html#/' },
      { text: '观看视频', link: 'https://player.youku.com/embed/XNTExNzc3Mzg2NA==' }]
  },
  {
    url: '/img/home/yzt_bg.png',
    title: '指挥调度一张图',
    desc: '打造全警钟、全平台、资源整合、系统集成、信息共享，实现接警、指挥、调度为一体的指挥中心，从而更有效的提高治安预防、控制、制止的反应能力',
    buttons: [
      { text: '立即购买', link: 'https://marketplace.huaweicloud.com/contents/ee446d40-ce7c-447f-84e9-4ca0a1fe2f0f' },
      { text: '了解详情', link: 'https://onemap.oortcloudsmart.com/' },
      { text: '立即体验', link: 'http://map.oort.oortcloudsmart.com:18080/onemap/main.jsp' },
      { text: '观看视频', link: 'https://player.youku.com/embed/XNTExNzc3Mzg2NA==' }
    ]
  },
  {
    url: '/img/home/sypt.png',
    title: '私有云部署的移动安全办公云平台',
    desc: '对标公有云上的钉钉，企业微信的专门私有化部署的数字化移动协同办公平台，数据自己掌握，安全可控。打造了一个涵盖即时消息、电子邮件、音视频会议、资料分享、流程申请与',
    buttons: [
      { text: '立即购买', link: 'https://marketplace.huaweicloud.com/contents/6b7d495c-97b6-4807-858d-48dbe3bcee75' },
      { text: '了解详情', link: 'https://www.myoumuamua.com/' },
      { text: '观看视频', link: 'https://v.qq.com/txp/iframe/player.html?vid=h3155cunx94' }
    ]
  },
  {
    url: '/img/home/mhck.png',
    title: '门户与应用仓库',
    desc: '快速打造数字化超级App，拥有领先于市场的小程序容器技术，可为您提供敏捷、安全的最佳实践，是数字化时代下企业移动开发的不二之选。',
    buttons: [
      { text: '立即购买', link: 'https://marketplace.huaweicloud.com/contents/e15d419a-1569-4d70-b093-36ce1d820cd9' },
      { text: '了解详情', link: '/product' },
      { text: '立即体验', link: 'https://myoumuamua.com/download.html' }
    ]
  },
  {
    url: '/img/home/mhck.png',
    title: '智慧档案',
    desc: '集文件档案管理与业务处理于一体的自动化软件，可实现文件档案采集、整理、利用等工作，对目录和电子原文两层对象进行管理；同时依托计算机辅助开展档案统计、鉴定、销毁、借阅、催还及参考资料编研等业务。',
    buttons: [
      { text: '立即购买', link: 'https://marketplace.huaweicloud.com/contents/6d75e4f6-6825-49f1-8acc-52dcffa4b9b6#productid=OFFI768401716871081984' },
      { text: '立即体验', link: 'https://www.oortcloudsmart.com/zh/demoDA/' }
    ]
  }
])
</script>

<style>
.user {
  padding: 168px 0 100px 0;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.user .title {
  font-size: 46px;
  color: #051261;
  letter-spacing: 4.45px;
  text-align: center;
  font-weight: 600;
}
.user .item {
  margin-top: 60px;
  width: 1100px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;
  color: #506079;
  letter-spacing: 0;
  line-height: 22px;
  font-weight: 600;
}
.user .item .second_title {
  font-size: 28px;
  color: #051261;
  letter-spacing: 2.71px;
  line-height: 37px;
}
.user .item .third_title {
  margin-top: 30px;
  font-size: 24px;
  color: #3f4151;
  letter-spacing: 2.32px;
}
.user .item > div {
  padding: 0;
}
.user .item > div:nth-of-type(1) {
  margin-top: 30px;
}
</style>
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
