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
          <img src="/img/product/anti_fraud/banner.png" alt="">
        </div>
        <div class="product_intro_3">
          <div class="left">
            <div class="step">
              <p><img src="/img/product/anti_fraud/step1.png"><span>海报生成</span></p>
              <p>分享链接，生成推广海报。每位工作人员专
                属海报，统计到每位工作人员推广量</p>
            </div>
            <div class="step">
              <p><img src="/img/product/anti_fraud/step2.png"><span>民众扫码</span></p>
              <p>民众扫海报上的二维码，并且引导到反诈APP下载页，后台统计推广的民众的数
                量。并且会通过微信的唯一ID，对民众扫描数量去重</p>
            </div>
            <div class="step">
              <p><img src="/img/product/anti_fraud/step3.png"><span>统计后台</span></p>
              <p>根据单位统计，个人工作量统计等。后台做统计排名，自动检查判断。群众上传
                的截图是否准确，群众选择的常驻地是否准确，群众是否已经实名认证</p>
            </div>
          </div>
          <div class="right"><img src="/img/product/anti_fraud/Purefront.png"></div>
        </div>
        <div class="product_intro_4">
          <div class="left">
            <p class="title">推广场景</p>
            <p class="paragraph">“国家反诈中心APP”推广安装对于减少电诈警情很有明显成效。据统计，安装率1/4，警情降到50%，安装率1/2，警情降到20%。</p>
            <p class="paragraph">参考全国各地对国家反诈中心APP推广安装很多有益的推广措施。调动成员单位，基层广大的力量参与推广安装。</p>
          </div>
          <div class="right">
            <div class="right__item">
              <div class="right__item__img">
                <img src="/img/product/anti_fraud/intro_01.png">
              </div>
              <div class="right__item__content">
                花园入口
              </div>
            </div>
            <div class="right__item">
              <div class="right__item__img">
                <img src="/img/product/anti_fraud/intro_02.png">
              </div>
              <div class="right__item__content">
                酒店入口
              </div>
            </div>
          </div>
        </div>
        <div class="product_intro_5">
          <div class="grid">
            <div>
              <img src="/img/product/anti_fraud/item1.png">
              <p>多级组织架构统计</p>
              <p>可以深入统计到各单位，街道，乡镇，行政村，自然村。</p>
            </div>
            <div>
              <img src="/img/product/anti_fraud/item2.png">
              <p>多级管理员设置</p>
              <p>可以设置一二三四级管理员，管理各自辖区统计数。理员通过微信扫码登。</p>
            </div>
            <div>
              <img src="/img/product/anti_fraud/item3.png">
              <p>数据安全</p>
              <p>脱敏存储、加密存储，不会存储可识别的用户信息。</p>
            </div>
            <div>
              <img src="/img/product/anti_fraud/item4.png">
              <p>高并发</p>
              <p>采用分布式架构，满足大量群众并发扫码使用场景</p>
            </div>
            <div>
              <img src="/img/product/anti_fraud/item5.png">
              <p>高可用</p>
              <p>满足使用范围广，使用频率高的目标。</p>
            </div>
            <div class="title">
              产品特点
            </div>
            <div>
              <img src="/img/product/anti_fraud/item6.png">
              <p>界面清爽</p>
              <p>界面清爽，操作流畅，简便。</p>
            </div>
            <div>
              <img src="/img/product/anti_fraud/item7.png">
              <p>自动审核</p>
              <p>自动审核群众上传的截图是否正确。选择的常驻地是否正确，是否已经实名认证。自动检测三者正确形成闭环。</p>
            </div>
            <div>
              <img src="/img/product/anti_fraud/item8.png">
              <p>数据导出</p>
              <p>导出GAB比对接口文件。可在大数据平台中比对时带多级部门备注，可以清晰细化到更加具体的比对范围。</p>
            </div>
            <div>
              <img src="/img/product/anti_fraud/item9.png">
              <p>产品成熟度高</p>
              <p>快速交付，当天上线，通过配置满足各种微小细节需求。</p>
            </div>
            <div>
              <img src="/img/product/anti_fraud/item10.png">
              <p>价格低</p>
              <p>大量应用案例已经平摊了研发成本，用户总体拥有成本低。</p>
            </div>

          </div>
        </div>
      </div>

      <div class="user" id="用户案例">
        <p class="title">用户案例</p>
        <div class="item">
          <p class="third_title">四会市</p>
          <p>全肇庆使用，为贯彻落实习近平总书记、李克强总理对打击治理电信网络诈骗犯罪工作作出重要指示批示精神，当前，全国上下正在全力推动“国家反诈中心”App的安装工作，该APP集诈骗举报、诈骗预警、身份验证、风险查询、骗局曝光等功能于一体，群众开启APP预警功能后，能有效预警涉诈来电、短信，是预警拦截、防范宣传的国字号“利器”，是有效预防和压降电信网络诈骗犯罪的重要途径。前期，虽然通过各级党委政府的共同努力，我辖区App安装人数已有XXX万人，安装率为XXX%，但是却低于全省平均水平XXX%，更低于XXX（XXX.XXX%）、XXX(XXX%)、XXX(XXX%)等周边地区。经过分析，其中一个原因是由于该APP后台统计安装数据只有到县区级，而不能统计到镇街，更不能统计到个人。</p>
          <br />
          <p>因此，为进一步推动该项工作，以更快实现全县常住人口安装率达到70%以上目标，我局现借鉴深圳、东莞等地经验做好，聘请软件开发公司开发了“国家反诈中心APP推广码”系统，该系统主要功能是可以为推广app的工作人员生成一个唯一的二维码，群众通过手机扫描该二维码后可以自动跳转到app的下载页面。这样做仅方便了群众的下载安装，又实现准确统计到每个工作人员的推广安装任务数，从而进一步压实每名工作人员的工作职责。</p>
        </div>
        <div class="item">
          <div class="third_title">河源市</div>
          <p>国家反诈中心APP推广安装对于减少电诈警情很有明显成效。</p>
          <p>据统计，安装率1/4，警情降到50%，安装率1/2，警情降到20%。</p>
        </div>
        <div class="item">
          <div class="third_title">惠州市</div>
          <p>工作人员通过点击微信中二维码生成分享链接，生成推广海报，民众扫描海报上的二维码，并且引导到反诈APP下载页，后台统计推广的民众的数量。并且会通过微信的唯一ID，对民众扫描数量去重。</p>
        </div>
        <div class="item">
          <div class="third_title">湖北省仙桃市</div>
          <p>1、海报生成。工作人员通过点击微信中二维码生成分享链接，生成推广海报。每位工作人员专属海报，统计到每位工作人员推广量。</p>
          <p>2、民众扫码。民众扫海报上的二维码，并且引导到反诈APP下载页，后台统计推广的民众的数量。并且会通过微信的唯一ID，对民众扫描数量去重。</p>
          <p>3、统计后台。根据单位统计，个人工作量统计等。后台做统计排名，自动检查判断。群众上传的截图是否准确，群众选择的常驻地是否准确，群众是否已经实名认证。</p>
        </div>
        <div class="item">
          <div class="third_title">山西运城芮城县</div>
          <p>“国家反诈中心APP”推广统计平台是通过制作推广人员个人专属推广二维码，实现推广任务数统计到个人，警民携手，齐心反诈，压实块责任的推广统计平台。</p>
        </div>
        <div class="item">
          <div class="third_title">山东津利县</div>
          <p>反诈推广统计平台，是通过三个核心功能，一是生成专属的二维码海报。二是引导群众下载。。三是统计扫码数或上传截图数，最多可以落实到四级统计，比如到街道、到村社区、到自然村。推进反诈App的安装量。</p>
          <br />
          <p>面向推广人员，人人可以生成一个自己的推广专属海报。</p>
          <p>也就是一个二维码海报，这个二维码，就是推广人员用于 自己 生成，查看海报，查看战果，查看统计排名的。</p>
          <br />
          <p>面向群众，通过扫推广人员的二维码，引导下载安装，安装完成后，再次扫推广人员的二维码，上传安装后的截图。</p>
          <br />
          <p>后台管理人员可以实时看到各单位的战果。每个推广人员也可以看到各单位的排名与个人排名。</p>
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
  logo: '/img/product/anti_fraud/icon.png',
  name: '反诈中心推广统计平台',
  title: '全面反诈 识骗防诈',
  excerpt: '奥尔特云产品——反诈App推广神器！推广人员生成推广二维码海报，引导群众下载，实现推广统计到个人，量化推广工作',
  buttons: [
    {
      name: '立即购买',
      link: 'https://marketplace.huaweicloud.com/contents/174bd256-4011-4988-89d8-d72c47e6741c#productid=OFFI698082226463612928'
    }
  ],
  swipes: [
    '/img/product/anti_fraud/swipe_1.png',
    '/img/product/anti_fraud/swipe_2.png',
    '/img/product/anti_fraud/swipe_3.png',
    '/img/product/anti_fraud/swipe_4.png',
  ]
})
const support = ref({
  name: '反诈推广使用汇报（通用版本2022.2.8刷新）.pptx',
  link: 'https://portal-data-cn.obs.cn-north-4.myhuaweicloud.com/marketplace/public/app/attachment/20220208/ee39408b-6a22-4088-9d4b-1c11c74db7cf/2202080741135427.pptx'
})
</script>

<style scoped>
.product_intro_2 {
  width: 100%;
  height: 640px;
  display: flex;
  justify-content: center;
  background-color: rgba(242, 247, 251);
}
.product_intro_2 img {
  height: 640px;
}
.product_intro_3 {
  padding: 83px 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product_intro_3 .step p:nth-of-type(2) {
  margin-top: 18px;
  margin-bottom: 40px;
  width: 490px;
  font-size: 14px;
  color: #717781;
  line-height: 22px;
  font-weight: 400;
}
.product_intro_3 .step p:nth-of-type(1) {
  display: flex;
  align-items: center;
}
.product_intro_3 .step p:nth-of-type(1) span {
  margin-left: 12px;
  display: inline-block;
  font-size: 20px;
  color: #1f3f74;
  font-weight: 700;
}
.product_intro_4 {
  padding: 120px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fcfcfc;
}
.product_intro_4 .left .title {
  margin-bottom: 60px;
  font-size: 32px;
  color: #051261;
  letter-spacing: 3.1px;
  font-weight: 500;
}
.product_intro_4 .left .paragraph {
  margin-bottom: 20px;
  width: 560px;
  font-size: 14px;
  color: #717781;
  letter-spacing: 1.35px;
  line-height: 22px;
  font-weight: 500;
}
.product_intro_4 .right {
  display: flex;
  justify-content: center;
  align-items: center;
}
.product_intro_4 .right .right__item {
  margin-left: 40px;
}
.product_intro_4 .right .right__item__content {
  margin-top: 24px;
  font-size: 24px;
  color: #051261;
  font-weight: 500;
  text-align: center;
}
.product_intro_5 {
  padding: 60px 360px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product_intro_5 .grid {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  grid-auto-columns: auto;
  grid-auto-rows: auto;
  width: 100%;
}
.product_intro_5 .grid .title {
  grid-column: span 2 / span 2;
  font-family: SJzhilianghei-Regular;
  font-size: 68px;
  color: #3733ff;
  font-weight: 400;
}
.product_intro_5 .grid div {
  text-align: center;
}
.product_intro_5 .grid div img {
  width: 42px;
  height: 42px;
}
.product_intro_5 .grid div p:nth-of-type(1) {
  font-size: 18px;
  color: #000333;
  font-weight: 500;
}
.product_intro_5 .grid div p:nth-of-type(2) {
  width: 185px;
  font-size: 14px;
  color: #000333;
  text-align: center;
  line-height: 20px;
  font-weight: 400;
}

</style>