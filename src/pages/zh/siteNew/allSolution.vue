<template>
  <div class="home_page vls">
    <div class="header" />
    <div class="content">
      <div class="title">
        热门方案
      </div>
      <div class="w1200 flexRow">
        <div class="item1 bg1">
          <div class="item_title">
            移动警务
          </div>
          <div class="item_content">
            通过基础设施云化、软件与硬件解耦、数据与业务解<br />
            耦、应用与平台解耦,构建开放技术架构和业务生态。
          </div>
        </div>
        <div class="item1 bg2">
          <div class="item_title">
            私有云
          </div>
          <div class="item_content">
            专为特定组织打造，数据安全有保障，资源灵活调配，<br />
            耦、应用与平台解耦,可按需定制，助力企业高效管理与运营。
          </div>
        </div>
        <div class="item1 bg3">
          <div class="item_title">
            WorkUP 超级APP
          </div>
          <div class="item_content">
            集成即时通讯、邮件、音视频会议、数据共享、流程审<br />
            批、在线社交、开放平台等功能，贯通企业办公场景，<br />
            提升效率，让工作更高效美好。
          </div>
        </div>
        <div class="item2 bg4">
          <div class="item_title">
            体育
          </div>
          <div class="item_content">
            数字技术的能力极大地扩展和丰富了体育在时间、空间、信息资源、运动形式和体验等<br />
            方面的条件，突破了传统体育的诸多限制和不足，大幅提升了公众参与体育的趣味性、<br />
            便捷性和普及度。
          </div>
        </div>
        <div class="item3 bg1">
          <div class="item_title">
            电信
          </div>
          <div class="item_content">
            融合5G与AI技术，构建智能网络，优<br />
            化服务与效率，助力行业数字化转型与<br />
            智慧应用发展。
          </div>
        </div>
        <div class="item3 bg5">
          <div class="item_title">
            能源
          </div>
          <div class="item_content">
            数字能源融合物联网、大数据与人工智<br />
            能，连接物理与数字世界，优化能量流<br />
            动，助力现代能源体系。
          </div>
        </div>
        <div class="item3 bg1">
          <div class="item_title">
            智慧校园
          </div>
          <div class="item_content">
            帮助各类教育客户快速搭建业务平台，<br />
            降低人力成本，满足多场景下的功能<br />
            需求
          </div>
        </div>
        <div class="item3 bg2">
          <div class="item_title">
            公共安全解决方案
          </div>
          <div class="item_content">
            帮助公安客户应对新形势下警务工作多<br />
            元化、复杂化、智能化的新挑战。
          </div>
        </div>
        <div class="item2 bg6">
          <div class="item_title">
            智慧政务
          </div>
          <div class="item_content">
            政务云领域建设打造出安全、可靠、独特的解决方案体系，通过创新的服务<br />
            能力，借助云计算、大数据，以及人工智能的优势，实现政府简化流程、提<br />
            升效率、保障安全、降低成本的目标，助力政府实现数字化转型。
          </div>
        </div>
      </div>
    </div>
    <div class="bottom" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'site-new'
})
</script>

<style scoped lang="scss">

.home_page {
  position: relative;
}

.flexRow{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.home_page.vls {
  background-color: #fff;
}

.w1200{
  width: 1200px;
  margin: 0 auto;
}

.header{
  width: 100%;
  height:319px;
  background: url('@/assets/img/allSolution_img1.png');
  background-size: cover
}
.content{
  height: 1227px;
}
.bottom{
  width: 100%;
  height: 500px;
  background: url('@/assets/img/allSolution_img5.png');
  background-size: cover
}
.title{
  color:#000000;
  font-family: Microsoft YaHei;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 40px;
}
.item_title{
  font-family: Microsoft YaHei;
  font-size: 18px;
  font-weight: 600;
  color: #FFFFFF;
  margin-top: 10px;
}
.item_content{
  font-family: Microsoft YaHei;
  font-size: 14px;
  font-weight: normal;
  color: #FFFFFF;
  margin-top: 18px;
}
.item1{
  padding: 20px;
  width: 343px;
  height: 130px;
  margin-bottom: 20px;
}
.item2{
  padding: 20px;
  width: 550px;
  height: 130px;
  margin-bottom: 20px;
}
.item3{
  padding: 20px;
  width: 240px;
  height: 130px;
  margin-bottom: 20px;
}
.bg1{
  background: linear-gradient(114deg, #16C1E2 -1%, #25B9EB 99%);
}
.bg2{
  background: linear-gradient(114deg, #619FF9 0%, #016FFF 100%);
}
.bg3{
  background: linear-gradient(114deg, #7361F9 6%, #5E01FF 100%);
}
.bg4{
  background: url('@/assets/img/allSolution_img2.png');
  background-size: cover
}
.bg5{
  background: url('@/assets/img/allSolution_img3.png');
  background-size: cover
}
.bg6{
  background: url('@/assets/img/allSolution_img4.png');
  background-size: cover
}
</style>
