<template>
 <div style="height: 6.25rem; width: 100%">
    <div style="height: 6.25rem; width: 100%"></div>
    <div class="bottom_body">
      <div class="bottom_content">
        <div class="bottom_tips">
          <div class="bottom_tips_item">
            <img src="/img/home/footer_icon1.png" />
            <span>国家AAA信用企业</span>
          </div>
          <div class="bottom_tips_item">
            <img src="/img/home/footer_icon2.png" />
            <span>180+软件著作权和专利</span>
          </div>
          <div class="bottom_tips_item">
            <img src="/img/home/footer_icon3.png" />
            <span>通过ISO三大国际体系认证</span>
          </div>
        </div>
        <!-- 产品中心 -->
        <div class="bottom_href">
          <div class="bottom_href_item bottom_href_item_first">
            <img style="width: 156px;height:53px;text-align: left;" src="/img/home/oort_logo.png" />
            <span class="text2">300多种企业级产品累计服务1.5亿用户</span>
          </div>
          <div class="bottom_href_item bottom_href_item_text" style="margin-left: 20px;margin-right: 50px;">
            <span><NuxtLink to="/more" style="
                    opacity: 1;
                    font-size: 14px;
                    color: #ffffff !important;
                    font-weight: 600;
                  ">软件中心</NuxtLink></span>
            <span><a href="https://marketplace.huaweicloud.com/contents/ee446d40-ce7c-447f-84e9-4ca0a1fe2f0f#productid=OFFI766131914498846720" target="_blank">华为IdeaHub警务宝</a></span>
            <span><NuxtLink to="/JWBdetail">警务宝一体机</NuxtLink></span>
            <span><a href="https://onemap.oortcloudsmart.com" target="_blank">指挥调度一张图</a></span>
            <span><a href="#" target="_blank">私有云部署的移动安全办公云平台</a></span>
            <span><NuxtLink to="/product">门户与应用仓库</NuxtLink></span>
            <span><NuxtLink to="/product_office">办公宝</NuxtLink></span>
            <div style="margin-top: 10px">
              <NuxtLink style="
                    font-size: 14px;
                    color: #fff !important;
                    font-weight: 600;
                  " to="/more">更多 ></NuxtLink>
            </div>
          </div>
          <div class="bottom_href_item bottom_href_item_text">
            <span><NuxtLink to="/services" style="opacity: 1; font-size: 14px; color: #fff !important">解决方案</NuxtLink></span>
            <span><NuxtLink to="/services_publicSecurity">公安</NuxtLink></span>
            <span><NuxtLink to="/services_smartPoliceStation">智慧派出所</NuxtLink></span>
            <span><NuxtLink to="/services_inspection">检察</NuxtLink></span>
            <span><NuxtLink to="/services_prison">司法监狱</NuxtLink></span>
            <span><NuxtLink to="/services_borderSeaDefense">智慧边海防</NuxtLink></span>
            <span><NuxtLink to="/services_goverment">政府</NuxtLink></span>
            <div style="margin-top: 10px">
              <NuxtLink style="
                    font-size: 14px;
                    color: #fff !important;
                    font-weight: 600;
                  " to="/services">更多 ></NuxtLink>
            </div>
          </div>
          <div class="bottom_href_item bottom_href_item_text">
            <span><a style="opacity: 1; font-size: 14px; color: #fff !important">下载中心</a></span>
            <span><a href="#" target="_blank">警务宝</a></span>
            <span><a href="#" target="_blank">办公宝</a></span>
            <span><a href="#" target="_blank">视频宝</a></span>
            <span><a href="#" target="_blank">党建宝</a></span>
          </div>
          <div class="bottom_href_item bottom_href_item_text">
            <span><a style="opacity: 1; font-size: 14px; color: #fff !important" target="_blank">关于我们</a></span>
            <span><NuxtLink to="/about">公司简介</NuxtLink></span>
            <span><NuxtLink to="/about#hezuo">合作洽谈</NuxtLink></span>
          </div>
          <div class="bottom_href_item bottom_href_item_first" style="border: none;">
            <span class="bottom_href_item_first_text1">关注奥尔特云</span>
            <img src="/img/logo_googn.jpg" />
            <span class="text2">官方微信公众号</span>
          </div>
        </div>
        <!-- 底部 -->
        <div class="bottom_heee">
          <span><a href="about.html" style="opacity: 1; font-size: 14px">关于我们</a>&nbsp; | &nbsp;</span>
          <span><a href="http://oortcloudsmart.com/servceAgreement.html" target="_blank"
              style="opacity: 1; font-size: 14px">用户协议</a>&nbsp; | &nbsp;</span>
          <span><a href="http://oortcloudsmart.com/privacypolicy.html" target="_blank"
              style="opacity: 1; font-size: 14px">隐私政策</a>
            &nbsp;| &nbsp;</span>
          <span><a href="https://beian.miit.gov.cn/" target="_blank"
              style="opacity: 1; font-size: 14px">粤ICP备19160414号</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
