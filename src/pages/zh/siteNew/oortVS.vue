<template>
  <div class="home_page vls">
    <div class="w1380 top">
      <div class="flexRow">
        <div>
          <img class="oort_logo" src="@/assets/img/oortLogo.png" alt="" />
        </div>
        <div class="flexRow">
          <div>
            <div class="title1">
              OORTCLOUD Visual Studio
            </div>
            <div class="title2">
              OORTCLOUD AI 原生 IDE，智能编码，一触即发
            </div>
          </div>
        </div>
      </div>
      <img class="VLStream_top" src="@/assets/img/oortVS_img1.png" alt="" />
    </div>
    <div class="w1380">
      <div class="title1">
        安全可靠的开发环境
      </div>
      <div class="content">
        无需下载，无需配置，在浏览器中一键初始化开发环境
      </div>
      <div class="proTitleBox w1380 flexRowAC">
        <div class="item_first">
          <div class="titleSize">
            支持多种方式创建项目
          </div>
          <div class="contentSize">
            支持从模板创建项目以及从 Git 导入项目，满足不同项目开发需求
          </div>
        </div>
        <div class="item_second">
          <div class="titleSize">
            开箱即用的开发
            <br />
            环境
          </div>
          <div class="contentSize">
            无需配置开发环境，选择模板立即
            <br />
            开始开发
          </div>
        </div>
        <div class="item_third">
          <div class="titleSize">
            快速稳定
          </div>
          <div class="contentSize">
            秒级创建多区域、多集群的部署，
            <br />
            提供稳定、低延迟的保证
          </div>
        </div>
      </div>
    </div>
    <div class="w1380">
      <div class="title1">
        开发支撑能力
      </div>
      <div class="content">
        基于H5移动中台的“云+端”一体化应用开发生态
      </div>
      <div class="box1 flexRow">
        <div class="box1_item">
          <img src="@/assets/img/oortVS_img2.png" alt="" />
          <span>信息化统筹建设的抓手</span>
        </div>
        <div class="box1_item">
          <img src="@/assets/img/oortVS_img3.png" alt="" />
          <span>集约化建设的利器</span>
        </div>
      </div>
      <div class="flexRow" style="justify-content: space-between;">
        <img src="@/assets/img/oortVS_img4.png" alt="" class="img1" />
        <img src="@/assets/img/oortVS_img5.png" alt="" class="img2" />
      </div>
    </div>
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

.home_page.vls {
  background-color: #fff;
}

.w1380 {
  width: 1380px;
  margin: 0 auto;
  padding-bottom: 160px;
}
.oort_logo{
  width: 67px;
  height: 80px;
  margin-right: 10px;
}
.top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
}

.flexRow{
  display: flex;
}
.title1{
  font-family: OPPOSans;
  font-size: 50px;
  font-weight: bold;
  color: #3D3D3D;
  margin-bottom: 20px;
}
.title2{
  font-size: 32px;
  font-weight: normal;
  color: #717781;
}
.content{
  font-size: 20px;
  font-weight: normal;
  color: #717781;
}

.proTitleBox{
  margin-top: 80px;
  img{
    width: 1380px;
    height: 640px;
  }
}

.item_first{
  width: 703px;
  height: 568px;
  margin-right: 20px;
  border: 1px solid #b2bac8;
  background: url('@/assets/img/cjxm.png');
  background-size: cover;
  border-radius: 24px;
  text-align: center;
}
.item_second{
  width: 338px;
  height: 568px;
  margin-right: 20px;
  border: 1px solid #b2bac8;
  background: url('@/assets/img/kfhj.png');
  background-size: cover;
  border-radius: 24px;
  text-align: center;
}

.item_third{
  width: 338px;
  height: 568px;
  border: 1px solid #b2bac8;
  background: url('@/assets/img/kswd.png');
  background-size: cover;
  border-radius: 24px;
  text-align: center;
}
.titleSize{
  font-size: 40px;
  font-weight: bold;
  line-height: 60px;
  margin-top: 40px;
}
.contentSize{
  font-size: 20px;
  font-weight: normal;
  color: #717781;
  line-height: 30px;
  margin-top: 24px;
}
.box1{
  margin: 60px 0;
}
.box1_item{
  display: flex;
  padding: 0 26px;
  margin-right: 20px;
  height: 80px;
  background: linear-gradient(286deg, #42A9FF 14%, #2278FF 76%);
  align-items: center;
  border-radius: 24px;
  span{
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }
}
.img1{
  width: 730px;
}
.img2{
  width: 628px;
}
</style>
