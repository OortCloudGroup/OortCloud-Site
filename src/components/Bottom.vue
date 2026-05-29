<template>
  <div class="bottom_page">
    <div class="bottom_content">
      <div class="bottom_pro flexRowAC">
        <div class="bottom_tips">
          <div class="bottom_tips_item_first">
            <img src="/img/home/oort_logo.png" />
            <span>300多种企业级产品累计服务1.5亿用户</span>
          </div>
          <div class="bottom_tips_item">
            <img src="@/assets/bottomImg/footer_icon1.png" />
            <span>国家AAA信用企业</span>
          </div>
          <div class="bottom_tips_item">
            <img src="@/assets/bottomImg/footer_icon2.png" />
            <span>180+软件著作权和专利</span>
          </div>
          <div class="bottom_tips_item">
            <img src="@/assets/bottomImg/footer_icon3.png" />
            <span>通过ISO三大国际体系认证</span>
          </div>
        </div>
      </div>
      <div class="b_ser flexRowAC">
        <div class="b_ser_p flexRowAC">
          <div class="b_ser_p_l">
            <div class="b_ser_title">
              社区
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/community/educationalVideo',0)">
                教学视频
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover " @click="viewPath('/zh/community/document',0)">
                文档
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text">
                论坛
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/community/productLog',0)">
                更新日志
              </div>
            </div>
          </div>
          <div class="b_ser_p_l">
            <div class="b_ser_title">
              解决方案
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/siteNew/mobilePolice',0)">
                移动警务
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/siteNew/privateCloud',1)">
                私有云
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/siteNew/superAPP',1)">
                超级APP
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/siteNew/allSolution',1)">
                全部解决方案
              </div>
            </div>
          </div>
          <div class="b_ser_p_l">
            <div class="b_ser_title">
              开源
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/siteNew/download',1)">
                下载
              </div>
            </div>
            <div class="flexRowAC">
              <a class="b_ser_text hover" href="https://github.com/OortCloudGroup" target="_blank">
                GitHub
              </a>
            </div>
          </div>
          <div class="b_ser_p_l">
            <div class="b_ser_title">
              服务
            </div>
            <div class="flexRowAC">
              <a class="b_ser_text hover" href="https://oortcloudsmart.com/zh/siteNew/" target="_blank">
                OortCloud Agent
              </a>
            </div>
            <div class="flexRowAC">
              <a class="b_ser_text hover" href=" https://ai.oortcloudsmart.com/zh/" target="_blank">
                OORT.AI 智能体平台
              </a>
            </div>
            <div class="flexRowAC">
              <a class="b_ser_text hover" href="https://vls.oortcloudsmart.com/zh/" target="_blank">
                VLStream 视觉平台
              </a>
            </div>
            <div class="flexRowAC">
              <a class="b_ser_text hover" href="https://sh.oortcloudsmart.com/zh/" target="_blank">
                OORT.SH 托管平台
              </a>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/siteNew/support',2)">
                支持与升级
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/siteNew/customDevelopment',0)">
                自定义开发服务
              </div>
            </div>
          </div>
          <div class="b_ser_p_l">
            <div class="b_ser_title">
              成品软件
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/siteNew/k8sMana',0)">
                K8S容器管理和CMDB软件
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/siteNew/policeBus',1)">
                警务服务总线
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/siteNew/portalApp',2)">
                门户与应用市场软件
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/siteNew/approval',3)">
                智能审批
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/siteNew/dispatch',3)">
                指挥调度
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/siteNew/cloudClass',3)">
                云课堂
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/siteNew/instantMess',3)">
                即时通讯
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/siteNew/allProducts',3)">
                全部产品
              </div>
            </div>
          </div>
          <div class="b_ser_p_l">
            <div class="b_ser_title">
              关于我们
            </div>
            <div class="flexRowAC">
              <a class="b_ser_text hover" href="https://www.oortcloudsmart.com/zh/" target="_blank">
                我们的公司
              </a>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/siteNew/brandEquity',2)">
                品牌资产
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/siteNew/contactUs',2)">
                联系我们
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/siteNew/partner',2)">
                寻找合作伙伴
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/siteNew/recentActivities',2)">
                近期活动
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/siteNew/customer',2)">
                客户
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/siteNew/privacy',2)">
                法律 · 隐私
              </div>
            </div>
            <div class="flexRowAC">
              <div class="b_ser_text hover" @click="viewPath('/zh/siteNew/safe',2)">
                安全
              </div>
            </div>
          </div>
        </div>
        <div class="b_ser_off">
          <div class="bse_t bse_language">
            <div class="bse_language_select">
              <img src="@/assets/bottomImg/chinese.png" alt="" />
              <n-dropdown trigger="hover" :options="languageOptions" @select="handleLanguageSwitch">
                <div class="bse_language_select_box">
                  <span>{{ currentLanguageLabel }}</span>
                  <span class="bse_language_icon" />
                </div>
              </n-dropdown>
            </div>
            <div class="line" />
          </div>
          <div class="bse_t">
            奥尔特云(深圳)智慧科技有限公司创立于2019年，专注于移动警务服务总线、Workup超级APP、视频融合赋能平台VLStream，以及应用支撑平台产品研发，公司主要通过移动警务、指挥调度、私有云、大数据、AI场景应用、行业数字化转型，以及非标硬件整机定制等私有部署应用解决方案支撑落地行业场景应用。公司具有成熟的成品平台产品软件和硬件整机定制开发能力，产品在数字政府(一网统管、一网协同、一网通办、一网通享)、智慧城市(智慧园区、智慧场馆、智慧楼宇)以及数字化运营领域得到广泛应用。
          </div>
          <div class="flexRowAC contact_app">
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
            <div class="wx_gzh">
              <span>关注奥尔特云</span>
              <img src="@/assets/bottomImg/logo_googn.jpg" />
              <span>官方微信公众号</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="icpBox flexRowAC">
      Website made with
      <img class="icpBox_img" src="@/assets/VLimg2.0/ipc.png" alt="" />
      <a
        href="https://beian.miit.gov.cn/"
        target="_blank"
        style="opacity: 1; font-size: 14px;color:#fff;"
      >粤ICP备19160414号</a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NDropdown } from 'naive-ui'

const router = useRouter()
const route = useRoute()

const languageOptions = [
  { label: '简体中文', key: 'zh' },
  { label: 'English', key: 'en' }
]

const currentLanguageLabel = computed(() => {
  return route.path.startsWith('/zh') ? '简体中文' : 'English'
})

const viewPath = (path) => {
  if (router.currentRoute.value.path === path) {
    window?.scrollTo(0, 0)
  }
  router.push({ path })
}

const handleLanguageSwitch = (languageKey) => {
  if (languageKey === 'zh') {
    router.push('/zh/siteNew/')
    return
  }
  window.location.href = '/en/'
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
  width: 1380px;
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
    display: block;
    color: rgba(255, 255, 255, .5);
    font-size: 18px;
    line-height: 36px;
    font-weight: 400;

    &.hover {
      cursor: pointer;

      &:hover {
        color: #2278FF;
      }
    }
  }

  .b_ser_off {
    width: 520px;
    min-width: 520px;
    text-align: center;
    font-size: 14px;
    color: #999999;
    font-weight: 400;

    .bse_language {
      display: flex;
      flex-direction: column;
    }

    .bse_language_select {
      display: flex;
      flex-direction: row;
      img {
        margin-right:12px;
        width: 16px;
        height: 16px;
      }
    }

    .bse_language_select_box {
      display: flex;
      flex-direction: row;
      align-items: center;
      span {
        cursor: pointer;
        font-weight: 400;
        font-size: 14px;
        color: #ADB5BD;
        line-height: 18px;
        margin-right: 12px;
      }
    }

    .bse_language_icon {
      border-radius: 0px 0px 0px 0px;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid rgb(255, 255, 255);
    }

    .line {
      background-color: #6C757E;
      width: 100%;
      height: 1px;
      margin: 25px 0;
      margin-bottom: 40px;
    }

    .bse_t {
      color: #ADB5BD;
      font-size: 18px;
      line-height: 28px;
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
    //padding-bottom: 40px;
    cursor: pointer;
  }

  .b_ser_off_code {
    width: 140px;
    height: 140px;
    background-color: #fff;
    margin: 0 auto;
    margin-bottom: 12px;
  }

  .b_ser_off_img {
    width: 24px;
    height: 24px;
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

  .icpBox_img {
    width: auto;
    height: 30px;
  }
}

.contact_app {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.wx_gzh {
  display: flex;
  flex-direction: column;
  span {
    margin: 12px 0;
    font-size: 14px;
  }
  img {
    width: 109px;
    height: 109px;
  }
}

.bottom_tips {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.bottom_tips_item_first {
  flex: 1;
  display: flex;
  flex-direction: column;
  img {
    width: 120px;
  }
  span {
    margin-top: 22px;
    font-weight: 400;
    font-size: 12px;
    color: #FFFFFF;
    line-height: 18px;
  }
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
</style>
