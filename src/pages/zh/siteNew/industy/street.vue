<template>
  <div class="home_page vls">
    <div class="w1380 CloudBox flexRowAC">
      <div class="CloudL">
        <div class="cl_t">
          智能手机
          <br />
          (APP/小程序)
        </div>
        <div class="cl_d">
          支持统一派发定制手机。以及网格工作人员的通用手机。
        </div>
      </div>
      <img class="approval_c1" src="@/assets/street/street_1.png" alt="" />
    </div>
    <div class="w1380 CloudBox ipcBox flexRowAC">
      <img class="approval_c1" src="@/assets/street/street_2.png" alt="" />
      <div class="CloudL R">
        <div class="cl_t">
          执法记录仪<br />便携摄像头
        </div>
        <div class="cl_d">
          持久续航3000mA大容量，满足整天录制需求，采用专业级影像传感器，记录画面更细腻，IP66防护等级，高空防摔。
        </div>
      </div>
    </div>
    <div class="w1380 ipcView CloudBox flexRowAC">
      <div class="CloudL">
        <div class="cl_t">
          无人值守设备柜
        </div>
        <div class="cl_d">
          无人值守设备充电和数据自动采集上传，自带离线数据管理系统。
        </div>
      </div>
      <img class="approval_c3" src="@/assets/street/street_3.png" alt="" />
    </div>
    <div class="w1380 ipcView CloudBox flexRowAC">
      <img class="approval_c3" src="@/assets/street/street_4.png" alt="" />
      <div class="CloudL R">
        <div class="cl_t">
          微信机器人
        </div>
        <div class="cl_d">
          通过微信机器人自动派单，处理任务闭环。
        </div>
      </div>
    </div>
    <div class="w1380 CloudBox flexRowAC">
      <div class="CloudL">
        <div class="cl_t">
          位置服务终端
        </div>
        <div class="cl_d">
          融合4G无线通信技术，高灵敏度GPS+BDS双星定位，支持渣土车、搅拌车、公务车、危化品运输车、租赁车、物流车、环卫车、按揭车、电动车、环卫工人、巡线人员等智能化管理，以及人和车的自动打卡和轨迹等功能。
        </div>
      </div>
      <img class="approval_c5" src="@/assets/street/street_5.png" alt="" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'site-new',
  mate: {
    classify: '行业',
    subC: '街道'
  }
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
  margin: 100px auto;
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.CloudBox {
  padding-bottom: 100px;
  justify-content: space-between;
  align-items: flex-start;

  .cl_t {
    letter-spacing: 0;
    padding-top: 30px;
    padding-bottom: 40px;
    color: #3D3D3D;
    font-weight: bold;
    font-size: 54px;
  }

  .cl_d {
    padding-bottom: 24px;
    color: #717781;
    font-size: 20px;
  }

  .CloudL {
    width: 500px;
  }
  .CloudL.R{
    text-align: left;
  }

  .CloudR {
    width: 700px;
    height: auto;

    .CloudRImg {
      width: 100%;
      height: 100%;
    }
  }

  .CloudR2 {
    width: 700px;
    height: 700px;
  }
}

.ipcBox.CloudBox {
  padding-bottom: 120px;
  justify-content: space-between;
  align-items: flex-start;

  .CloudL {
    width: 450px;
    padding-top: 60px;
  }
}

.approval_c1 {
  width: 734px;
  height: auto;
}

.approval_c2 {
  width: 702px;
  height: auto;
}

.approval_c3 {
  width: 587px;
  height: auto;
}

.approval_c5 {
  width: 634px;
  height: auto;
}
</style>
