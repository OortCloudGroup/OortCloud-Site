/**
Created by  lanjian   on 2023/8/20  18:05
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<template>
  <div class="page_container">
    <div class="download_title">
      <div @click="$router.go(-1)">
        <img src="/img/demo/download/back.png" />
        <span>返回</span>
      </div>
    </div>
    <div class="download_title2">
      <div>
        <span>下载客户端</span>
      </div>
    </div>
    <div class="download_body">
      <div class="download_body_item">
        <img src="/img/demo/download/yhql.png" />
        <span>银河麒麟</span>
      </div>
      <div class="download_body_item">
        <img src="/img/demo/download/zbql.png" />
        <span>中标麒麟</span>
      </div>
      <div class="download_body_item">
        <img src="/img/demo/download/hwqy.png" />
        <span>华为擎云</span>
      </div>
      <div class="download_body_item">
        <img src="/img/demo/download/txuos.png" />
        <span>统信UOS</span>
      </div>
      <div class="download_body_item">
        <img src="/img/demo/download/deepin.png" />
        <span>深度deepin</span>
      </div>
      <div class="download_body_item">
        <img src="/img/demo/download/zkfd.png" />
        <span>中科方德</span>
      </div>
    </div>
  </div>
</template>

<script>

definePageMeta({
  layout: 'demo'
})
export default {
  name: 'DemoDownLoad3'
}
</script>

<style lang="scss" scoped>
.page_container {
  width: 91%;
  margin: 0 auto;
  height: 1080px;
}

.download_title {
  display: flex;
  align-items: flex-end;
  height: 80px;
  div {
    cursor: pointer;
    width: 104px;
    height: 42px;
    display:flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    border-radius: 24.5px;
    img {
      width: 24px;
      height: 24px;
      margin: 0 4px;
    }
    span {
      font-size: 16px;
      color: #333333;
      letter-spacing: 0;
      text-align: center;
      font-weight: 400;
      margin: 0 4px;
    }
  }
}

.download_title2 {
  display: flex;
  align-items: center;
  height: 125px;
  justify-content: center;
  span {
    font-size: 48px;
    color: #333333;
    letter-spacing: 10px;
    font-weight: 700;
  }
}

.download_body {
  margin: 20px auto;
  display: flex;
  width: 70%;
  flex-wrap: wrap;
  gap: 20px;
  &_item:hover {
    background-color: #f9f9f9;
  }
  &_item {
    position: relative;
    width: 386px;
    height: 235px;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    img {
      width: 100px;
      height: 100px;
      margin: 10px 0px;
    }
    span {
      font-size: 24px;
      color: #333333;
      letter-spacing: 0;
      font-weight: 700;
      margin: 24px 0px;
    }
    &_qrcode {
      margin: 0px!important;
      width: 80px;
      height: 80px;
      position: absolute;
      top: 0px;
      right: 0px;
    }
    &_code {
      display: none;
      position: absolute;
      z-index: 999;
      background-color: #fff;
      top: 0px;
      right: 0px;
      width: 100%;
      height: 100%;
      box-shadow: #999999;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 140px;
        height: 140px;
      }
      span {
        margin: 20px 0px;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
        font-weight: 400;
      }
    }
  }
}

.download_body_item:hover {
  .download_body_item_code {
    display: flex;
  }
}

</style>
