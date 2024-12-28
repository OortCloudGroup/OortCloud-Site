<template>
  <div class="bottom_page">
    <div class="bottom_content">
      <div class="bottom_pro flexRowAC">
        <div class="bottom_pro_t">
          <img class="bottom_pro_tImg" src="@/assets/VLimg2.0/ipc.png" alt="" />
        </div>
      </div>
      <div class="b_ser flexRowAC">
        <div class="b_ser_p flexRowAC">
          <div class="b_ser_p_l">
            <div class="b_ser_title">
              社区
            </div>
            <div class="b_ser_text" @click="viewPath('/pc/product',0)">
              教学视频
            </div>
            <div class="b_ser_text" @click="viewPath('/pc/product',1)">
              文档
            </div>
            <div class="b_ser_text" @click="viewPath('/pc/product',2)">
              论坛
            </div>
          </div>
          <div class="b_ser_p_l">
            <div class="b_ser_title">
              解决方案
            </div>
            <div class="b_ser_text" @click="viewPath('/software/mobilePolice',0)">
              移动警务
            </div>
            <div class="b_ser_text" @click="viewPath('/software/privateCloud',1)">
              私有云
            </div>
            <div class="b_ser_text" @click="viewPath('/software/superAPP',1)">
              超级APP
            </div>
            <div class="b_ser_text" @click="viewPath('/pc/product',2)">
              全部解决方案
            </div>
          </div>
          <div class="b_ser_p_l">
            <div class="b_ser_title">
              开源
            </div>
            <div class="b_ser_text" @click="viewPath('/pc/product',0)">
              下载
            </div>
            <div class="b_ser_text" @click="viewPath('/pc/product',1)">
              GitHub
            </div>
          </div>
          <div class="b_ser_p_l">
            <div class="b_ser_title">
              服务
            </div>
            <div class="b_ser_text" @click="viewPath('/sh/oortSH',0)">
              OORT.SH 托管平台
            </div>
            <div class="b_ser_text" @click="viewPath('/vlsIndex',1)">
              VLSterm 视觉平台
            </div>
            <div class="b_ser_text" @click="viewPath('/software/dataEmpoPlat',1)">
              数据赋能平台
            </div>
            <div class="b_ser_text" @click="viewPath('/pc/product',2)">
              支持与升级
            </div>
            <div class="b_ser_text" @click="viewPath('/pc/product',3)">
              自定义开发服务
            </div>
          </div>
          <div class="b_ser_p_l">
            <div class="b_ser_title">
              成品软件
            </div>
            <div class="b_ser_text" @click="viewPath('/software/k8sMana',0)">
              K8S容器管理和CMDB软件
            </div>
            <div class="b_ser_text" @click="viewPath('/software/policeBus',1)">
              警务服务总线
            </div>
            <div class="b_ser_text" @click="viewPath('/software/portalApp',2)">
              门户与应用市场软件
            </div>
            <div class="b_ser_text" @click="viewPath('/software/approval',3)">
              智能审批
            </div>
            <div class="b_ser_text" @click="viewPath('/software/dispatch',3)">
              指挥调度
            </div>
            <div class="b_ser_text" @click="viewPath('/software/cloudClass',3)">
              云课堂
            </div>
            <div class="b_ser_text" @click="viewPath('/software/instantMess',3)">
              即时通讯
            </div>
            <div class="b_ser_text" @click="viewPath('/pc/product',3)">
              全部产品
            </div>
          </div>
          <div class="b_ser_p_l">
            <div class="b_ser_title">
              关于我们
            </div>
            <div class="b_ser_text" @click="viewPath('/oldSite',0)">
              我们的公司
            </div>
            <div class="b_ser_text" @click="viewPath('/pc/product',1)">
              品牌资产
            </div>
            <div class="b_ser_text" @click="viewPath('/software/contactUs',2)">
              联系我们
            </div>
            <div class="b_ser_text" @click="viewPath('/pc/product',3)">
              寻找合作伙伴
            </div>
            <div class="b_ser_text" @click="viewPath('/pc/product',3)">
              近期活动
            </div>
            <div class="b_ser_text" @click="viewPath('/pc/product',3)">
              客户
            </div>
            <div class="b_ser_text" @click="viewPath('/pc/product',3)">
              法律 · 隐私
            </div>
            <div class="b_ser_text" @click="viewPath('/pc/product',3)">
              安全
            </div>
          </div>
        </div>
        <div class="b_ser_off">
          <div class="bse_t">
            决策式AI视频赋能平台是数字政府建设的组成部分,是全域视频监控相关系统统筹建设、开放共享、运维管理、应用构建的重要抓手。视频云中台将依视频联网、云计算、大数据、人工智能等先进技术,实现全域视频资源的一体化接入、整合、管理、解析和运维等,并向各委办局提供视频资源的查询、申请、审批、编排、调度、事件推送等在线化服务。
          </div>
          <div class="bse_t bse_d">
            <!--            Oort Cloud 独特的价值在于是一款非常容易使用又完全集成的应用。-->
          </div>
          <div class="b_ser_off_imgBox flexRowAC">
            <img class="b_ser_off_img" src="@/assets/bottomImg/bo1.png" alt="" />
            <img class="b_ser_off_img" src="@/assets/bottomImg/bo2.png" alt="" />
            <img class="b_ser_off_img" src="@/assets/bottomImg/bo3.png" alt="" />
            <img class="b_ser_off_img" src="@/assets/bottomImg/bo4.png" alt="" />
            <img class="b_ser_off_img" src="@/assets/bottomImg/bo5.png" alt="" />
            <img class="b_ser_off_img" src="@/assets/bottomImg/bo6.png" alt="" />
            <img class="b_ser_off_img" src="@/assets/bottomImg/bo7.png" alt="" />
            <img class="b_ser_off_img" src="@/assets/bottomImg/bo8.png" alt="" />
          </div>
          <div class="bottom_pro_r flexRowAC">
            <el-input v-model="value" class="bottom_pro_address" placeholder="订阅邮箱，请输入您的邮箱" />
            <div class="bottom_me">
              订阅
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="icpBox flexRowAC">
      Website made with
      <img class="icpBox_img" src="@/assets/VLimg2.0/ipc.png" alt="" />
      粤ICP备19160414号
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
// const route = useRoute()
let value = ref('')

const viewPath = (path, tab) => {
  if (router.currentRoute.value.path === path) {
    // 当前页置顶
    window?.scrollTo(0, 0)
  }
  router.push({
    path,
    query: {
      tab
    }
  })
}
</script>

<style lang="scss" scoped>

:deep .el-input__wrapper {
  border: 0px;
  box-shadow: 0 0 0 0px;
  padding-left: 30px;
  font-size: 18px;
}

.bottom_page {
  min-height: 640px;
  background: #252734;
}

.bottom_content {
  width: 1500px;
  margin: 0 auto;
  padding: 50px 0;

  .bottom_pro {
    justify-content: center;
    padding-bottom: 68px;
  }

  .bottom_pro_t {
    color: #fff;

    .bottom_pro_tImg {
      height: 48px;
      margin-bottom: 18px;
    }
  }

  .bottom_pro_r {
    gap: 30px;

    .bottom_pro_address {
      color: white;
      width: 450px;
      height: 60px;
      border-radius: 3px;
      color: #fff;
      border-radius: 8px;
      border: 1px solid #646C76;
      background-color: transparent;

      :deep(.el-input__wrapper) {
        background-color: transparent;

        .el-input__inner {
          color: #fff;
        }
      }
    }

    .bottom_me {
      width: 210px;
      text-align: center;
      height: 60px;
      line-height: 60px;
      background: #2278FF;
      font-size: 18px;
      color: #FFFFFF;
      font-weight: 400;
      border-radius: 8px;
    }
  }
}

.b_ser {
  align-items: flex-start;
  justify-content: space-between;
  color: #fff;

  .b_ser_p {
    gap: 60px;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .b_ser_p_l {
    width: 210px;
    white-space: nowrap;
  }

  .b_ser_title {
    font-size: 18px;
    color: #FFFFFF;
    font-weight: 400;
    padding-bottom: 10px;
  }

  .b_ser_text {
    cursor: pointer;
    opacity: 0.5;
    font-size: 18px;
    color: #FFFFFF;
    line-height: 36px;
    font-weight: 400;
  }

  .b_ser_off {
    width: 520px;
    text-align: center;
    font-size: 14px;
    color: #999999;
    font-weight: 400;

    .bse_t {
      color: #ADB5BD;
      font-size: 14px;
      line-height: 22px;
      text-align: left;

    }

    .bse_d {
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }

  .b_ser_off_imgBox {
    align-items: flex-start;
    gap: 16px;
    padding-bottom: 40px;
  }

  .b_ser_off_code {
    width: 140px;
    height: 140px;
    background-color: #fff;
    margin: 0 auto;
    margin-bottom: 12px;
  }

  .b_ser_off_img {
    width: 42px;
    height: 42px;
    background-size: cover;

    &.h50 {
      height: 50px;
    }
  }
}

.icpBox {
  color: #ADB5BD;
  font-size: 14px;
  width: 100%;
  justify-content: center;
  height: 60px;
  background: #1A1C24;
  gap: 16px;

  .icpBox_img{
    width: auto;
    height: 30px;
  }
}
</style>
