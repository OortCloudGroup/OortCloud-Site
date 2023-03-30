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
          <div class="item1">
            <div style="width: 560px; margin-right: 140px">
              <p class="title">学习标准化、规范化</p>
              <p class="paragraph">组织部门可以发布学习资料，通过学习任务及考核任务发布工具，实时检验所属干警的学习和掌握情况，查漏缺补，快速调整学习指导方案，达到更好的学习效果。</p>
            </div>
            <img src="/img/product/party_builder/item1.png">
          </div>
          <div class="item2">
            <div style="width: 560px; margin-right: 140px">
              <p class="title">学习时间人性化安排充分利用广大人员的碎片化时间</p>
              <p class="paragraph">组织部门可以发布学习资料，通过学习任务及考核任务发布工具，实时检验所属干警的学习和掌握情况，查漏缺补，快速调整学习指导方案，达到更好的学习效果。</p>
            </div>
            <img src="/img/product/party_builder/item2.png">
          </div>
          <div class="item3">
            <div style="width: 560px; margin-right: 140px">
              <p class="title">无障碍沟通</p>
              <p class="paragraph">广大人员可以在学习过程中，通过领导信箱和组织领导进行沟通学习和工作中遇到的问题及想法，同时也便于及时掌握底层人员的心态想法，更加有利于整体学习整顿工作的开展。</p>
            </div>
            <img src="/img/product/party_builder/item3.png">
          </div>
          <div class="item4">
            <div style="width: 560px; margin-right: 140px">
              <p class="title">每日一练、每日一测</p>
              <p class="paragraph">类似学习强国App的考试模块，提供单选题、多选题、填空题等答题形式。内置题库、题库出题方式、试卷形成方式等功能。以及排行榜、每日一测、每日一考、每周一考、党史学习等考试模块。
              </p>
            </div>
            <img src="/img/product/party_builder/item4.png">
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
        <div class="product_intro_4">
          <p class="title">「软件功能」</p>
          <p class="app">App端</p>
          <table class="table_1">
            <tr class="col">
              <td>学习园地</td>
              <td>分类展示需要学习的资料点击学习，记录每个人的学习时间和次数，自动形成每个人的学习报表</td>
            </tr>
            <tr class="col">
              <td>每日一练</td>
              <td>各单位发布最近的工作学习情况教育成果展示整顿教育和工作相结合的人和事，立榜样、树典型</td>
            </tr>
            <tr class="col">
              <td>每日一测</td>
              <td>各类的考题，个人可以点击进入答题，自动评分，自助记录考试结果</td>
            </tr>
            <tr class="col">
              <td>心得笔记</td>
              <td>个人上传自己的心得笔记，领导进行批阅</td>
            </tr>
            <tr class="col">
              <td>学习任务</td>
              <td>后台管理人员发布每周的学习任务，系统自动跟踪任务的学习情况，并进行汇总，各单位领导可查看本单位干警学习任务的完成情况</td>
            </tr>
            <tr class="col">
              <td>知识竞赛</td>
              <td>单位可组织竞赛考试，指定人员或者全员进行参加自动评分，自助计算名次，可发布考试通知，考试花絮，考核名次</td>
            </tr>
            <tr class="col">
              <td>意见反馈</td>
              <td>可向系统反馈使用过程中遇到的问题</td>
            </tr>
            <tr class="col">
              <td>领导信箱</td>
              <td>各个参与学习的人员，可以和组织领导进行无障碍沟通</td>
            </tr>
            <tr class="col">
              <td>答题汇总</td>
              <td>分类别展示个人在每个类别的学习考试情况，便于个人查漏补缺</td>
            </tr>
            <tr class="col">
              <td>学习报表</td>
              <td>查看自己近一周的学习情况</td>
            </tr>
            <tr class="col">
              <td>隐患排查</td>
              <td>发表学习工作中的情况，全员可见</td>
            </tr>
            <tr class="col">
              <td>我的收藏</td>
              <td>可以将自己喜欢的文章，学习内容，工作动态等进行收藏，快速查找</td>
            </tr>
          </table>
          <p class="pc">管理后台端</p>
          <table class="table_2">
            <tr class="col">
              <td>人员管理</td>
              <td>学习管理</td>
              <td>考试管理</td>
            </tr>
            <tr class="col">
              <td>题库管理</td>
              <td>数据统计</td>
              <td>任务管理</td>
            </tr>
            <tr class="col">
              <td>信箱管理</td>
              <td>日志管理</td>
              <td>系统管理</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="user" id="用户案例">
        <p class="title">用户案例</p>
        <div class="item">
          <p class="second_title">
            XXX市 GA局在线党建云课堂
          </p>
          <div>
            <p>一、项目背景</p>
            <p> 随着短视频、微视频和视频培训在GA领域需求的不断增大，以大力发展全局移动警务工作为抓手，以新一代移动警务终端建设为契机，率先在全国开展了短视频APP建设应用，有效满足了全局信息化视频应用需求。</p>
            <br />
            <p> “云课堂”APP是在第二代移动警务“高共享、深应用”发展背景下，以智能应用为导向，充分利用移动互联、人工智能等先进技术进行研发的移动警务视频应用。该系统的使用为视频培训及召开会议会议，主要功能包括：视频录播、播放手机桌面、视频直播间、视频分享、GA宣传等功能，其建设架构及设计理念在全国均为领先，开创了移动警务视频应用新模式。</p>
            <br />
            <p>基于警务云服务中心、服务总线、基础服务、业务服务等基础设施开发而成，在疫情防控期间，方便远程课堂学习和警种授课直播提供支撑服务，实现了警种在移动警务终端视频课堂上传，移动警务终端进行课堂直播。基于统一门户、统一用户、统一服务、统一授权、数据标准等基础架构。基于身份认证、用户鉴权、消息以及音视频等通用业务服务，按照分层耦合、微服务化模式进行云上运行，共性服务共享使用，避免重复建设、降低开发成本、缩短项目周期，是实现快速开发，快速上线，集约、规范、精细、智能的管理和应用的最佳实践。</p>
            <br />
            <p>二、主要上线的模块包括：</p>
            <p>1、时政课堂：把国家和国际上的时政热点有机融入到视频课堂当中，精选时政消息，专业人士剖析讲解，可以拓展视野。</p>
            <p>2、公安科技：随着互联网、大数据等现代科技与传统行业的深度融合，公安系统迎来了许多公安黑科技，“一张图”全城监管，“智慧警车”全城护航，等等。公安科技的成熟，使得在家更舒心，出行更安心。</p>
            <p>
              3、法制讲堂：法治社会的形成，需要每一位公民的参与，做一个知法、懂法、守法的公民是每一位公民应当履行的义务。法制讲堂以易懂的方式，让每一名用户都能理解视频所讲的法律法规，全面普及法律意识。
            </p>
            <p>4、专题课程：分为防控类、打击类、综合类、民生类。</p>
            <p>
              5、在线直播：视频看完不过瘾？拿来在线直播观看名师现场指导吧。用户可开通视频直播，现场解答弹幕提问，直播录制教学视频。
            </p>
            <br />
            <p>三、使用成效</p>
            <p>在全单位大力推进移动警务建设的过程中，尤其是在疫情期间，“云课堂”APP的运行不仅有效丰富了GA宣传工作，还为民警业务学习和大量警种业务培训提供了极大地方便。有效满足了全局日常会议视频直播、视频培训的基本需求，彻底解决了移动警务用户不因地域、时间等因素的</p>
          </div>
        </div>
        <div class="item">
          <p class="second_title">
            XXX市 GA局 教育整顿与两学一做系统
          </p>
          <div>
            <p>一、项目背景</p>
            <p> 按照市局新警综平台依托“云平台”、“云计算中心”、“云数据中心”的总体建设思路，设计新型教育整顿应用平台，在智慧新警务平台的建设框架内，建设一个教育整顿应用平台、一个大数据中心、一个警务云终端应用的整体架构。系统设计结合原有各系统平台资源，以实战、实用、高效为原则，从需求分析、平台建设等各个环节，多思考、多想办法，在系统建设、功能拓展、平台操作上下功夫，不断完善教育整顿应用平台系统建设理念。</p>
            <br />
            <p> 二、建设目标</p>
            <p> 教育整顿App应用平台是在第二代移动警务“高共享、深应用”发展背景下，以智能应用为导向，充分利用移动互联、人工智能等先进技术进行研发的移动警务视频教育应用。该系统的使用为教育培训及考核测试，主要功能包括：学习、考核、排名、视频分享、公安宣传等功能，其建设架构及设计理念在全国均为领先，开创了移动警务教育整顿应用新模式。</p>
            <br />
            <p>三、建设内容</p>
            <p>教育整顿App应用平台是一个移动端视频学习平台，参照互联网思维倾力打造的警务内网在线实用技能学习平台，主要为学习者提供海量、优质的课程点播学习，知识考核等功能。教育整顿App应用平台的宗旨是，为每一位想真真正正学到些实用知识、技能的学习者，提供贴心的一站式学习服务。</p>
            <p>为将各单位专业技术培训视频及理论思想学习，重要会议记录视频按类别、时间、热度等收集展示，结合点赞、评论功能增强互动性。同时设有统计查看学习记录及排名展示所有用户学习“成绩”的功能，增强学习效果。便利：碎片化学习，提升工作人员业务能力。
              详细建设内容如下：</p>
            <p>1、通用功能</p>
            <p>最底部为四栏目从作到右依次为：学习，每日一测、排行榜、我的。交互效果参考学习强国。进入app时默认展示“学习”栏目。</p>
            <p>2、学习栏目 </p>
            <p>
              学习栏目有8个tab，依次为：推荐、要闻、党史教育、教育简报、督促检查、警示教育、警队风采、学习园地。
            </p>
            <p>3、每日一测</p>
            <p>记录做题历史，包括：分数、时间。</p>
            <p>
              4、排行榜
            </p>
            <p>排行榜分3个tab，依次为：个人榜、局榜、部门榜。</p>
            <p>5、我的</p>
            <p>包括修改密码、查看历史考试成绩、查看文章浏览历史等。</p>
            <p>6、后端管理平台</p>
            <p>建设后端管理平台，包括课程管理、权限管理、统计功能、题库管理等。</p>
          </div>
        </div>
      </div>
      
      <!-- 服务支持 -->
      <ProductSupport :name="support.name" :link="support.link" />
    </ProductAnchorWrapper>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "product"
})

const headerContent = ref({
  logo: '/img/product/party_builder/icon.png',
  name: '党建宝',
  title: '教育学习管理系统',
  excerpt: '在线课程学习平台，专业技术培训、理论思想学习及重要会议记要学习',
  buttons: [
    {
      name: '立即购买',
      link: 'https://marketplace.huaweicloud.com/contents/d11ed8d8-c144-45f6-bf27-60e6338f4925#productid=OFFI705244014768824320'
    }
  ],
  swipes: [
    '/img/product/party_builder/swipe_1.png',
    '/img/product/party_builder/swipe_2.png',
    '/img/product/party_builder/swipe_3.png',
    '/img/product/party_builder/swipe_4.png',
    '/img/product/party_builder/swipe_5.png'
  ]
})
const support = ref({
  name: '智慧党建系统产品使用汇报.pdf',
  link: 'https://portal-data-cn.obs.cn-north-4.myhuaweicloud.com/marketplace/public/app/attachment/20220228/569328ee-fdcc-47e4-91d3-af1c730b14a3/2202281155181087.pdf'
})
</script>

<style scoped>
.product_intro_2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fdfeff;
}
.product_intro_2 .item1,
.product_intro_2 .item2,
.product_intro_2 .item3,
.product_intro_2 .item4 {
  flex: 1/2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 460px;
  font-weight: 500;
}
.product_intro_2 .title {
  margin-top: 120px;
  font-size: 32px;
  color: #051261;
  letter-spacing: 3.1px;
}
.product_intro_2 .paragraph {
  margin-top: 60px;
  font-size: 14px;
  color: #717781;
  letter-spacing: 1.35px;
  line-height: 22px;
}
.product_intro_2 .item1 img {
  width: 500px;
  height: 418px;
}
.product_intro_2 .item2 img {
  width: 500px;
  height: 281px;
}
.product_intro_2 .item3 img {
  width: 500px;
  height: 356px;
}
.product_intro_2 .item4 img {
  object-fit: contain;
  width: 500px;
}
.product_intro_3 {
  position: relative;
  height: 700px;
  background: url(/img/product/party_builder/frame.png) no-repeat 50% 50%;
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
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product_intro_4 .title {
  margin: 80px 0 0;
  font-size: 60px;
  color: #f70400;
  text-align: center;
  line-height: 70px;
  font-weight: 700;
}
.product_intro_4 .app,
.product_intro_4 .pc {
  margin-top: 65px;
  padding: 16px 0;
  width: 1060px;
  font-size: 48px;
  text-align: center;
  background-color: #f70400;
  color: #fff;
}
.product_intro_4 .table_1 {
  border-bottom: 2.2px solid rgba(247, 4, 0, 1);
}
.product_intro_4 .table_1 .col td:nth-of-type(1) {
  width: 296px;
  font-size: 40px;
  color: #0b163a;
  letter-spacing: 6px;
  font-weight: 400;
  text-align: center;
  border-left: 2.2px solid rgba(247, 4, 0, 1);
  border-right: 2.2px solid rgba(0, 0, 0, 0.2);
}
.product_intro_4 .table_1 .col td:nth-of-type(2) {
  padding: 20px 0 20px 37px;
  width: 720px;
  font-size: 30px;
  color: #40434a;
  letter-spacing: 4.5px;
  line-height: 42px;
  font-weight: 400;
  border-right: 2.2px solid rgba(247, 4, 0, 1);
}
.product_intro_4 .table_2 {
  width: 1060px;
  border: 1.05px solid rgba(247, 4, 0, 1);
}
.product_intro_4 .table_1 .col:nth-child(2n + 1),
.product_intro_4 .table_2 .col:nth-child(2n + 1) {
  background: rgba(0, 0, 0, 0.1);
}
.product_intro_4 .table_2 .col td {
  padding: 23px 0;
  font-size: 40px;
  color: #0b163a;
  letter-spacing: 6px;
  font-weight: 400;
  text-align: center;
}
</style>