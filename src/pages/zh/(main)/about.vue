<template>
  <div class="page_container">
    <div class="tabs">
      <n-tabs type="segment" animated :on-update:value="onClickTab">
        <n-tab-pane name="chap1">
          <template #tab>
            <div class="tab">
              <img v-if="activeTab === 'chap1'" src="/img/about/tab_1_active.png" />
              <img v-else src="/img/about/tab_1.png" />
              <span>企业简介</span>
            </div>
          </template>
          <div class="tab1_content">
            <div class="tab1_content_left">
              <div>
                <img src="/img/about/tab1_img1.png" class="tab1_img1" />
              </div>
              <div>
                <img src="/img/about/tab1_img2.png" alt="" class="tab1_img2" />
                <img src="/img/about/tab1_img3.png" alt="" class="tab1_img3" />
              </div>
            </div>
            <div class="tab1_content_right">
              <div class="tab1_content_right_1">
                <span class="span1">奥尔特云</span>
                <img src="/img/about/tab1_pic2.png" style="width: 60%;height: 80%;position: relative;top: -2.5rem;" />
              </div>
              <div class="tab1_content_right_2">
                <span class="span2">场景智能化超级效率战略能力服务商</span>
              </div>
              <div class="tab1_content_right_3" />
              <div class="tab1_content_right_5">
                奥尔特云(深圳)智慧科技有限公司创立于2019年，专注于移动警务服务总线、Workup超级APP、视频融合赋能平台VLStream，以及应用支撑平台产品研发，公司主要通过移动警务、指挥调度、私有云、大数据、AI场景应用、行业数字化转型，以及非标硬件整机定制等私有部署应用解决方案支撑落地行业场景应用。公司具有成熟的成品平台产品软件和硬件整机定制开发能力，产品在数字政府(一网统管、一网协同、一网通办、一网通享)、智慧城市(智慧园区、智慧场馆、智慧楼宇)以及数字化运营领域得到广泛应用。
              </div>
              <div class="tab1_content_right_8">
                <img src="/img/about/llq.png" alt="" />
                <a href="https://www.oortcloudsmart.com/" target="_blank">https://www.oortcloudsmart.com/</a>
              </div>
            </div>
          </div>
        </n-tab-pane>
        <n-tab-pane name="chap2">
          <template #tab>
            <div class="tab">
              <img v-if="activeTab === 'chap2'" src="/img/about/tab_2_active.png" />
              <img v-else src="/img/about/tab_2.png" />
              <span>核心竞争力</span>
            </div>
          </template>
          <n-grid x-gap="50" y-gap="50" :cols="2" style="margin-top: 36px">
            <n-grid-item />
            <n-grid-item>
              <div class="tab1_content_right_1">
                <span class="span1">奥尔特云</span>
                <img src="/img/about/tab1_pic2.png" style="width: 60%;height: 80%;position: relative;top: -2.5rem;" />
              </div>
              <div class="tab1_content_right_2">
                <span class="span2">公共安全“私有云智能化应用建设解决方案”提供商</span>
              </div>
              <div class="tab1_content_right_3" />
            </n-grid-item>
            <n-grid-item>
              <div class="box">
                <div class="box_title">
                  <img src="/img/about/icon_desktop.png" />
                  <span>团队在软件研发方法论上的积累</span>
                </div>
                <div class="box_content">
                  沉淀基础服务，助力拆烟囱建设。引入微服务化开发工程实践方法论。推进服务化开发建设。践行“开放、分层、解耦、共享”顶层设计，推行微服务化开发新模式，以一个平台跨多网统筹软件开发、支撑全警共建共享，提速信息化手段迭代升级。公安科信部门首次有了做实做强的代码落地的抓手，用新的软件研发管理方法论，切合公安科技信息化的痛点。
                </div>
              </div>
            </n-grid-item>
            <n-grid-item>
              <div class="box">
                <div class="box_title">
                  <img src="/img/about/icon_menu.png" />
                  <span>产品理念</span>
                </div>
                <div class="box_content">
                  <p>1、以基层民警减负为中心的思想的系统设计</p>
                  <p>2、令人愉悦的使用体验。</p>
                  <p>3、设计“以人为本，操作简单”系统流程。</p>
                </div>
              </div>
            </n-grid-item>
            <n-grid-item>
              <div class="box">
                <div class="box_title">
                  <img src="/img/about/icon_point.png" />
                  <span>核心优势</span>
                </div>
                <div class="box_content">
                  <p>多租户模式。</p>
                  <p>借鉴腾讯等互联网公司产品理念。</p>
                  <p>顶层规划—从烟囱建设，转向“分层，解藕，共享，服务化”建设模式。</p>
                  <p>借鉴“中台”思维，形成“五大中台”技术支撑。</p>
                  <p>参考“钉钉”模式，实现技术创新。</p>
                  <p>广泛调研，博取众长，实现管理创新。</p>
                </div>
              </div>
            </n-grid-item>
            <n-grid-item>
              <div class="box">
                <div class="box_title">
                  <img src="/img/about/icon_atom.png" />
                  <span>微服务开发</span>
                </div>
                <div class="box_content">
                  我司引入微服务化开发工程实践方法论，引领“分层、解耦”开发思路潮流，“分层、解耦”建设已经成为各地建设刚需甚至准入门槛。成为公安信息化管理抓手，理清了公安科技信息化与各警种业务的合作与分工。
                </div>
              </div>
            </n-grid-item>
          </n-grid>
        </n-tab-pane>
        <n-tab-pane name="chap3">
          <template #tab>
            <div class="tab">
              <img v-if="activeTab === 'chap3'" src="/img/about/tab_3_active.png" />
              <img v-else src="/img/about/tab_3.png" />
              <span>企业资质与荣誉</span>
            </div>
          </template>
          <n-grid x-gap="40" y-gap="40" :cols="2" style="margin-top: 36px">
            <n-grid-item>
              <img style="width: 100%" src="/img/about/tab3_pic1.png" />
            </n-grid-item>
            <n-grid-item>
              <img style="width: 100%" src="/img/about/tab3_pic2.png" />
            </n-grid-item>
            <n-grid-item>
              <img style="width: 100%" src="/img/about/tab3_pic3.png" />
            </n-grid-item>
            <n-grid-item>
              <img style="width: 100%" src="/img/about/tab3_pic4.png" />
            </n-grid-item>
          </n-grid>
          <div class="tab3_content">
            <h3>资质图片</h3>
            <img src="/img/about/tab3_pic5.png" alt="资质图片" />
          </div>
        </n-tab-pane>
      </n-tabs>
    </div>

    <!-- <div class="center">
      <div class="center_div wow fadeInUp">
        <div class="center_div1">
          应用行业
        </div>
        <div class="center_div2">
          <div class="center_div3">
            <div class="card">
              <div class="card1">
                <img src="/img/about/zhengfu.png" class="card1_img" />
                <span class="card1_span">政府</span>
              </div>
              <div class="card2">
                <span class="card2_div1">应急指挥、跨部门会议、远程党教</span>
                <span class="card2_div2">移动安全办公云平台、私有云部署</span>
              </div>
            </div>
            <div class="card">
              <div class="card1">
                <img src="/img/about/yiliao.png" class="card1_img" />
                <span class="card1_span">医疗</span>
              </div>
              <div class="card4">
                <span class="card2_div1">远程诊疗、手术示教、远程看护</span>
                <span class="card2_div2">移动安全办公云平台、私有云部署</span>
              </div>
            </div>
            <div class="card">
              <div class="card1">
                <img src="/img/about/qiye.png" class="card1_img" />
                <span class="card1_span">企业</span>
              </div>
              <div class="card4">
                <span class="card2_div1">在线办公、远程面试、视频会商</span>
                <span class="card2_div2">移动安全办公云平台、私有云部署</span>
              </div>
            </div>
            <div class="card">
              <div class="card1">
                <img src="/img/about/jiaoyu.png" class="card1_img" />
                <span class="card1_span">教育</span>
              </div>
              <div class="card4">
                <span class="card2_div1">在线课堂、在线辅导、集体备课</span>
                <span class="card2_div2">移动安全办公云平台、私有云部署</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card_img">
        <p>产品Logo，产品名称，出品公司等可定制，支持高度被集成</p>
      </div>
    </div>

    <div>
      <div id="hezuo" />
      <div class="hezuo">
        <div class="connect" style="flex: 1">
          <div class="connect_div1">
            商务合作
          </div>
          <div class="connect_div2">
            <div class="connect_div3 wow fadeInUp">
              <img src="/img/about/erweima.png" />
              <span class="connect_div4">扫码加微信</span>
            </div>
            <div class="connect_div5 wow fadeInUp">
              <div style="margin-left: 3rem">
                <div
                  class="div_ie9_2"
                  style="
                        margin-top: 20px;
                        margin-top: 20px;
                        display: flex;
                        flex-direction: column-reverse;
                        justify-content: center;
                        align-items: center;
                        line-height: 2rem;
                      "
                >
                  <span class="connect_div6">联系邮箱</span>
                  <span class="connect_div7">zhangxuelian@oortcloudsmart.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div class="section" style="display: flex; background-color: #f7f7f7">
      <div class="contactUs">
        <div class="contactUs_body">
          <div class="contactUs_body_1"> -->
    <!--页面嵌套腾讯地图-->
    <!-- <div class="oort_map_area">
              <div id="map_container" style="width: 100%; height: 100%" />
            </div> -->
    <!--<img src="./imgs/map.png">-->
    <!-- </div> -->
    <!-- <div class="contactUs_body_2 wow fadeInUp">
            <span class="address">公司地址</span>
            <span class="span8" style="font-size: 23px; font-weight: bold; color: #666666">奥尔特云（深圳）智慧科技有限公司</span>
            <span class="span9">深圳市龙岗区南新路1983创意小镇岭南湾科创园</span>
            <span class="span12">
              <span class="span10">联系电话&nbsp;&nbsp;&nbsp;</span>
              <span class="span11">18938083835 &nbsp;/ &nbsp;0755 2849 9790</span></span>
            <span class="span131">
              <span class="span10">联系邮箱&nbsp;&nbsp;&nbsp;</span>
              <span class="span11">zhangxuelian@oortcloudsmart.com</span>
            </span>
          </div>
        </div>
      </div>
    </div> -->
    <div class="product">
      产品集群
    </div>
    <div class="website">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane name="first">
          <template v-if="activeName === 'first'" #label>
            <div class="logo">
              <img class="img1" src="/public/img/about/product_img2.png" alt="" />OortCloud
            </div>
            奥尔特云新一代生产力平台
          </template>
          <template v-else #label>
            <div class="logo">
              <img class="img1" src="/public/img/about/product_img1.png" alt="" />OortCloud
            </div>
            奥尔特云新一代生产力平台
          </template>
          <div class="box2">
            <div class="left">
              <div class="lianjie bgc1">
                <a href="https://www.oortcloudsmart.com/" target="_blank">
                  https://www.oortcloudsmart.com/
                </a>
              </div>
              <div class="fontSize1 space1">
                个人和企业面向场景智能化的<br />
                超级效率战略能力<br />
              </div>
              <div class="fontSize1 space2">
                奥尔特云新一代 <span class="blue">生产力平台</span>
              </div>
              <div class="fontSize3 space1">
                简单、高效、又<span class="blue">实惠</span>!
              </div>
              <div class="detail" @click="goToDetail1">
                了解详情
              </div>
            </div>
            <div class="right">
              <img src="/public/img/about/product_img_b1.png" alt="" />
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane name="second">
          <template v-if="activeName === 'second'" #label>
            <div class="logo">
              <img class="img2" src="/public/img/about/product_img4.png" alt="" />VLStream
            </div>
            决策式AI视频汇聚调度平台
          </template>
          <template v-else #label>
            <div class="logo">
              <img class="img2" src="/public/img/about/product_img3.png" alt="" />VLStream
            </div>
            决策式AI视频汇聚调度平台
          </template>
          <div class="box2">
            <div class="left">
              <div class="lianjie bgc2">
                <a href="https://vls.oortcloudsmart.com/" target="_blank">
                  https://vls.oortcloudsmart.com/
                </a>
              </div>
              <div class="fontSize1 space1">
                VLStream <img src="/public/img/about/kaiyuan.png" alt="" />
              </div>
              <div class="fontSize1 space2">
                决策式AI视频汇聚调度平台
              </div>
              <div class="fontSize2 space1">
                面向视觉IoT场景奥尔特云VLStream视觉赋能平台
              </div>
              <div class="detail" @click="goToDetail2">
                了解详情
              </div>
            </div>
            <div class="right">
              <img src="/public/img/about/product_img_b2.png" alt="" />
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane name="third">
          <template v-if="activeName === 'third'" #label>
            <div class="logo">
              <img class="img2" src="/public/img/about/product_img10.png" alt="" />OORT.AI
            </div>
            万物智能、自主服务 — 场景化实战智能体平台
          </template>
          <template v-else #label>
            <div class="logo">
              <img class="img2" src="/public/img/about/product_img9.png" alt="" />OORT.AI
            </div>
            万物智能、自主服务 — 场景化实战智能体平台
          </template>
          <div class="box2">
            <div class="left">
              <div class="lianjie bgc3">
                <a href="https://ai.oortcloudsmart.com/" target="_blank">
                  https://ai.oortcloudsmart.com/
                </a>
              </div>
              <div class="fontSize1 space1">
                OORT.AI 智能体平台
              </div>
              <div class="fontSize1 space2">
                <!-- 面向<span class="blue">AI时代</span>的新型数据底座 -->
                万物智能、自主服务 — <br />
                场景化实战智能体平台
              </div>
              <div class="detail" @click="goToDetail3">
                了解详情
              </div>
            </div>
            <div class="right">
              <img src="/public/img/about/product_img_b3.png" alt="" />
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane name="fourth">
          <template v-if="activeName === 'fourth'" #label>
            <div class="logo">
              <img class="img3" src="/public/img/about/product_img8.png" alt="" />OORT.SH
            </div>
            面向开发者 —"种下智慧树，结出百香果"
          </template>
          <template v-else #label>
            <div class="logo">
              <img class="img3" src="/public/img/about/product_img7.png" alt="" />OORT.SH
            </div>
            面向开发者 —"种下智慧树，结出百香果"
          </template>
          <div class="box2">
            <div class="left">
              <div class="lianjie bgc4">
                <a href="https://sh.oortcloudsmart.com/" target="_blank">
                  https://sh.oortcloudsmart.com/
                </a>
              </div>
              <div class="fontSize1 space1">
                OORT.SH 托管平台
              </div>
              <div class="fontSize1 space2">
                面向开发者 —— <br />
                “种下智慧树，结出百香果”
              </div>
              <div class="detail" @click="goToDetail4">
                了解详情
              </div>
            </div>
            <div class="right">
              <img src="/public/img/about/product_img_b4.png" alt="" />
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import { NTabs, NTabPane, NGrid, NGridItem } from 'naive-ui'
import { ref } from 'vue'

const activeTab = ref('chap1')

const onClickTab = (val) => {
  activeTab.value = val
}
const activeName = ref('first')

const goToDetail1 = () => {
  window.open('https://www.oortcloudsmart.com/')
}
const goToDetail2 = () => {
  window.open('https://vls.oortcloudsmart.com/')
}
const goToDetail3 = () => {
  window.open('https://da.oortcloudsmart.com/')
}
const goToDetail4 = () => {
  window.open('https://sh.oortcloudsmart.com/')
}

// onMounted(() => {
//   init()
// })

// const init = () => {
//   let myLatlng = new TMap.LatLng(22.602465, 114.14787) // 设置公司地点为地图中心点
//   // 定义函数
//   let myOptions = {
//     zoom: 20, // 地图的缩放级别
//     center: myLatlng, // 前面已定义好
//     viewMode: '2D',
//     // mapTypeId: TMap.MapTypeId.ROADMAP,
//     draggableCursor: 'default', // 地图的默认鼠标指针样式
//     draggingCursor: 'pointer', // 拖动地图时的鼠标指针样式
//     scaleControl: true, // 比例尺
//     draggable: true, // 禁止拖动地图
//     mapStyleId: 'style1' // 该key绑定的style1对应于经典地图样式，若未绑定将弹出无权限提示窗
//   }
//   // 获取dom元素添加地图信息
//   // eslint-disable-next-line no-new
//   new TMap.Map(
//     document.getElementById('map_container'),
//     myOptions
//   )
//   // 给中心点一个指示图标
//   // window.TMap.MultiMarker({
//   //   map,
//   //   geometries: [{ // 点标注数据数组
//   //     position: new TMap.LatLng(22.602465, 114.14787),
//   //     properties: {
//   //       title: 'marker'
//   //     }
//   //   }]
//   // })
// }
</script>

<style lang="scss" scoped>
:deep(.el-tabs__nav-scroll){
  display: flex;
  justify-content: center;
  height: 100px;
}
:deep(.el-tabs__item){
  display: flex;
  padding-right: 100px;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 400;
  color: #9DA0A6;
  .logo{
    font-size: 28px;
    font-weight: 700;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .img1{
      width: 40px;
      height: 48px;
      margin-right: 16px;
    }
    .img2{
      width: 48px;
      height: 48px;
      margin-right: 16px;
    }
    .img3{
      width: 45px;
      height: 48px;
      margin-right: 16px;
    }
  }

}
:deep(.el-tabs__item:hover){
  color: #9DA0A6;
}
:deep(.el-tabs__item.is-active){
  color: #2278FF;
}

:deep(#tab-second.is-active) {
  color: #FF5E10 !important;
}
:deep(.el-tabs__header){
  margin: 0;
}
:deep(.el-tabs__content){
  background-color: #F2F5FA;
}

.bgc1{
  background-color: #D9E7FD;
}
.bgc2{
  background-color: #FDF2D9;
}
.bgc3{
  background-color: #B5E9E3;
}
.bgc4{
  background-color: #DAB5E9;
}
.blue{
  color: #2278FF;
}
.fontSize1{
  font-size: 42px;
  font-weight: 700;
}
.fontSize2{
  font-size: 18px;
  font-weight: 500;
  color: #717781;
}
.fontSize3{
  font-size: 28px;
  font-weight: 700;
}
.space1{
  margin-top: 20px;
  position: relative;
  img{
    position: absolute;
    top: -55px;
    left: 160px;
    height: 172px;
    width: 172px;
  }
}
.space2{
  margin-top: 12px;
}
.box2{
  height: 660px;
  display: flex;
  justify-content: center;
  margin-top: 70px;
  .lianjie{
    text-align: center;
    padding: 8px 24px;
    margin-right: 150px;
    border-radius: 44px;
  }
  a{
    color: #333333;
    font-size: 20px;
    font-weight: 500;
  }
  .right{
    width: 600px;
    height: 484px;
    margin-left: 50px;
    img{
      width: 600px;
      height: 400px;
    }
  }
}
.detail{
  cursor: pointer;
  width: 72px;
  line-height: 24px;
  text-align: center;
  padding: 20px 48px;
  background-color: #2278FF;
  border-radius: 8px;
  margin-top: 60px;
  font-size:18px;
  color:#fff;
}
.tabs {
  padding: 60px 0;
  padding-bottom: 160px;
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  box-sizing: border-box;
}
.tab {
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
    width: 52px;
    height: 52px;
  }
}
.tab1_content {
  margin-top: 36px;
  display: flex;
  &_right {
    width: 51%;
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    &_1 {
      width: 100%;
      height: 100px;
      /* margin-top: 30px; */
      display: flex;
      flex-direction: column;
      /* padding-top: 5rem; */
      span {
        text-align: justify;
        font-size: 30px;
        color: #000000;
        text-align: start;
        font-weight: 600;
        z-index: 2;
      }
    }
    &_2 {
      text-align: justify;
      padding: 10px 0px;
      font-size: 20px;
      font-weight: bold;
    }
    &_3 {
      background: #ec6625;
      width: 200px;
      height: 4px;
      margin: 10px 0px;
      margin-bottom: 60px;
    }
    &_4 {
      text-align: justify;
      font-size: 14px;
      color: #000000;
      letter-spacing: 0;
      width: 100%;
      line-height: 1.5rem;
    }
    &_5 {
      margin-bottom: 20px;
      font-size: 20px;
      color: #3D3D3D;
      letter-spacing: 0;
      text-align: left;
      font-weight: 400;
    }
    &_6 {
      background: #1756a6;
      height: auto;
      display: flex;
      flex-direction: column;
      padding: 10px 30px;
      width: 90%;
      line-height: 30px;
      span {
        color: #fff;
      }
    }
    &_7 {
      width: 90%;
      margin: 8px 0px;
      height: 38px;
      background: #f4f4f4;
      text-align: justify;
      padding: 7.8px 30px;
      font-size: 16px;
      color: #333333;
      letter-spacing: 0;
      display: flex;
      align-items: center;
    }
    &_8 {
      cursor: pointer;
      width: 447px;
      padding: 0 31px;
      margin-top: 50px;
      line-height: 56px;
      border-radius: 8px;
      background: #046FFF;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        width: 32px;
        height: 32px;
      }
      a{
        margin-left: 10px;
        color: #fff;
      }
    }
  }
}
.box {
  height: 200px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 3px solid rgba(4, 111, 255, 1);
  box-sizing: border-box;
  font-size: 16px;
  color: #666666;
  letter-spacing: 0.44px;
  &_title {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
  &_content {
    line-height: 20px;
  }
  img {
    margin-right: 8px;
    width: 32px;
    height: 32px;
  }
  span {
    display: inline-block;
    font-size: 20px;
    color: #333333;
    letter-spacing: 0.56px;
    font-weight: 600;
  }
}
.tab3_content {
  margin-top: 40px;
  width: 100%;
  h3 {
    margin: 80px 0 40px;
    text-align: center;
    font-size: 30px;
    color: #161C43;
    letter-spacing: 0;
    text-align: center;
    font-weight: 700;
  }
  img {
    width: 100%;
  }
}
.center_div{
    width: 100%;
    margin-top: 21px;
}
.center_div1{
    text-align: center;
    line-height: 45px;
    font-size: 30px;
    color: #161C43;
    margin-top: 3rem;
    /*font-weight: bold*/
}
.center_div2{
    position: relative;
    margin-top: 1rem;
    width: 100%;
    height: 80px
}
.center_div3{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 95%;
    max-width: 1240px;
    margin: auto
}
.card{
    background: #f7f7f7;
    width:23%;
    height: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 1rem 0rem;
}
.card1{
    display: flex;
    flex-direction: row;
    margin-top: 3px;
    justify-content: center;
    align-items: center;
    margin-left: -0.5rem;
}
.card1_img{
    width: 50px;
    height: 50px;
    margin-top: 3px
}
.card1_span{
    margin-top: 0.4rem;
    font-size: 20px;
    color: #161C43;
    margin-left: 1.5rem;
    font-weight: 600
}
.card2{
    width: 100%;
    display: flex;
    flex-direction:column;
    padding: 0 15px
}
.card2_div1{
    width: 100%;
    font-size: 16px;
    color: #333333;
    margin-top: 5px;
    font-weight: 600;
    display: block;
}
.card2_div2{
    width: 100%;
    font-size: 14px;
    color: #999999;
    margin-top: 5px;
    line-height: 2rem;
    display: block;
}
.card4{
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    line-height: 2rem;
}
span:hover{
    cursor: pointer;
}
.card_img{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    background-image: url(/img/about/pic-bg.png);
    height: 180px;
    color: #ffffff;
    margin-top: 2rem;
}
.address{
  font-size: 30px;
  color: #333333;
  /*font-weight: bold;*/
  margin-bottom: 21px;
}
.span8{
    display: block;
}
.span9{
    display: block;
}
.span12{
    display: block;
}
.span131{
    display: block;
}
.contactUs {
  width: 100%;
  max-width: 1190px;
  display: flex;
  flex-direction: column;
  margin-left: 70px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  &_tile {
    width: 90%;
    height: 100px;
    margin-top: 100px;
    font-size: 30px;
    color: #000000;
    letter-spacing: 0;
    text-align: justify;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-weight: 600;
    img {
      width: 25%;
    }
  }
  &_body {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 50px 0rem;
    &_1 {
      width: 50%;
    }
    &_2 {
      width: 50%;
      display: flex;
      flex-direction: column;
      text-align: justify;
      justify-content: flex-start;
      line-height: 30px;
      margin-left: 30px;
      margin-top: 20px;
    }
    &_3 {
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 133px;
        height: 133px;
      }
    }
  }
}
.hezuo{
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 450px;
    margin: 0 auto;
    background: #ffffff;
}
.connect_div1{
    font-size: 30px;
    color: #333333;
    text-align: center;
    /*font-weight: bold;*/
    margin-top: 2rem
}
.connect_div2{
    display: flex;
    justify-content: center;
    flex-direction: row
}
.connect_div3{
    margin-top: 3rem;
    display: flex;
    flex-direction: column
}
.connect_div4{
    text-align: center;
    font-size: 14px;
    color: #666666
}
.connect_div5{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center
}
.connect_div6{
    color: #666666;
    font-size: 14px
}
.connect_div7{
    font-size: 20px;
    color: #333333;
    font-weight: bold;
    margin-left: 20px
}

.tab1_img1{
  width: 600px;
  height: 495px;
}
.tab1_img2{
  width: 359px;
  height: 228px;
}
.tab1_img3{
  width: 231px;
  height: 228px;
  margin-left: 10px;
}
.product{
  text-align: center;
  font-size: 58px;
  font-weight: 700;
  margin-bottom: 80px;
}

@media only screen and (max-width: 500px){

  .card_img{
      font-size: 19px!important;
  }
  .connect_div2{
      flex-direction: column!important;
  }
  .connect_div3{
      justify-content: center!important;
      align-items: center!important;
      text-align: center!important;
  }
  .connect_div3 img{
      width: 200px!important;
      height: 200px!important;
  }
.tab1_content_left{
  display: flex;
  flex-direction: column;
}
}

@media only screen and (max-width: 500px){
  .center_div3{
      flex-direction: column!important;
  }
  .card{
      width: 90%!important;
      margin: 1rem!important;
  }
  .oort_env_right{
      margin: auto!important;
  }
}

@media only screen and (min-width: 501px) and (max-width: 768px){
  .card_img{
      font-size: 27px!important;
      text-align: center!important;
      line-height: 3rem!important;
  }
  .center_div3{
      flex-direction: column!important;
  }
  .card{
      width: 90%!important;
      margin: 1rem!important;
  }
  .connect_div2{
      flex-direction: column!important;
  }
  .connect_div3{
      display: flex!important;
      flex-direction: column!important;
      justify-content: center!important;
      align-items: center!important;
  }
  .connect_div3 img{
      width: 200px!important;
      height: 200px!important;
  }
  .contactUs_body{
      flex-direction: column!important;
  }
  .contactUs_body_1{
      width: 90%!important;
      margin: auto!important;
  }
  .contactUs_body_2{
      width: 90%!important;
  }
}

@media only screen and (min-width: 769px) and (max-width: 900px){
/*.center_div3{*/
/*    flex-direction: column!important;*/
/*}*/
  .card_img{
      font-size: 29px!important;
  }
  .card{
      width: 24%!important;
  }
  .card1_span{
      font-size: 20px!important;
  }
  .card2_div1{
      font-size: 14px!important;
      line-height: 20px!important;
  }
  .card2_div2{
      line-height: 20px!important;
  }

}

:deep(.n-tabs-capsule) {
  background-color: transparent !important;
  /* 若有边框/阴影，也可一并清除（可选） */
  border: none !important;
  box-shadow: none !important;
}

:deep(.n-tabs-rail) {
  padding: 12px 8px;
  height: 92px;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgb(28 93 170 / 8%);
}
:deep(.n-tabs-tab-wrapper) {
  height: 100%;
}
:deep(.n-tabs-tab) {
  height: 68px;
  color: #666666;
}
:deep(.n-tabs-tab__label) {
  font-size: 20px;

}
:deep(.n-tabs-tab--active) {
  background-image: linear-gradient(87deg, #638AF0 0%, #046FFF 100%);
  border-radius: 4px;
  color: #FFFFFF !important;
}
</style>
