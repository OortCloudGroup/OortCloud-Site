<template>
  <div class="industryPage">
    <div v-if="itemTemp==='社区'" class="w1380 appT ">
      <div v-for="(item,i) in idtArr2" :key="i" class="appTItem">
        <div class="flexRowAC bb idtBox">
          <img class="idtImg" :src="item.img" alt="" />{{ item.t }}
        </div>
        <div v-for="(dd,tt) in item.d" :key="tt" class="appT_t" @click="communityClick(dd.t)">
          {{ dd.t }}
        </div>
      </div>
      <div class="idtBottomOut flexRowAC" style="flex-wrap: wrap;">
        <div class="w1380 idtBottom flexRowAC gap50">
          <a v-for="(i,index) in iconList" :key="index" :href="i.path" class="idtBox">
            <img class="idtImg" :src="i.img" alt="" />
          </a>
        </div>
        <div class="w1380 itemBottom flexRowAC">
          <div class="item flexRowAC">
            <img src="@/assets/homeImg/phone.png" alt="" />(+86)189 3808 3835
          </div>
          <div class="item flexRowAC">
            <img src="@/assets/homeImg/wx.png" alt="" />WeChat 与我们联系
          </div>
          <div class="item flexRowAC">
            <img src="@/assets/homeImg/ys.png" alt="" />获取演示
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div v-if="itemTemp==='行业' || itemTemp==='街道'" class="w1380 indT">
        <div class="flexRowAC bb idtBox" @click="indClick('行业','/zh/siteNew','行业')">
          <img class="idtImg" src="@/assets/homeImg/industry_i1.png" alt="" />行业
        </div>
        <div class="flexRowAC conBox">
          <div v-for="(item,i) in idtArr1" :key="i" @click="indClick('行业', getIndustryPath(item), item)">
            {{ item }}
          </div>
        </div>
        <div class="flexRowAC bb idtBox">
          <img class="idtImg" src="@/assets/homeImg/industry_i2.png" alt="" />职能
        </div>
        <div class="flexRowAC conBox">
          <!-- 职能板块重构：使用v-for循环 + 点击事件 -->
          <div v-for="(item,i) in functionArr" :key="i" @click="indClick('职能', getFunctionPath(item), item)">
            {{ item }}
          </div>
        </div>
        <div class="flexRowAC bb idtBox">
          <img class="idtImg" src="@/assets/homeImg/industry_i3.png" alt="" />场景
        </div>
        <div class="flexRowAC conBox">
          <div v-for="(item,i) in sceneArr" :key="i" @click="indClick('场景', getScenePath(item), item)">
            {{ item }}
          </div>
        </div>
      </div>
      <div v-else class="w1380 appT flexRowAC">
        <div v-for="(item,i) in idtArr" :key="i" class="appTItem">
          <div class="flexRowAC bb idtBox">
            <img class="idtImg" :src="item.img" alt="" />{{ item.t }}
          </div>
          <div v-for="(dd,tt) in item.d" :key="tt" class="appT_t" @click="softClick(dd)">
            {{ dd.t }}
          </div>
        </div>
      </div>
      <div class="idtBottomOut flexRowAC">
        <div class="w1380 idtBottom flexRowAC">
          <a class="flexRowAC idtBox" href="https://www.oortcloudsmart.com/zh/siteNew/software/unLogin" target="_blank">
            <img class="idtImg" src="@/assets/homeImg/industry_ic1.png" alt="" />第三方应用软件
          </a>
          <a class="flexRowAC idtBox" href="https://www.oortcloudsmart.com/zh/product_customizeApp/" target="_blank">
            <img class="idtImg" src="@/assets/homeImg/industry_ic2.png" alt="" />OortCloud 定制
          </a>
          <a class="flexRowAC idtBox" href="https://sh.oortcloudsmart.com/" target="_blank">
            <img class="idtImg" src="@/assets/homeImg/industry_ic3.png" alt="" />OORT.SH
          </a>
          <a class="flexRowAC idtBox" href="https://ai.oortcloudsmart.com/" target="_blank">
            <img class="idtImg" src="@/assets/homeImg/industry_ic4.png" alt="" />OORT.AI
          </a>
          <a class="flexRowAC idtBox" href="https://da.oortcloudsmart.com/" target="_blank">
            <img class="idtImg" src="@/assets/homeImg/industry_ic5.png" alt="" />VLStream
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

import industry_ti1 from '@/assets/homeImg/industry_ti1.png'
import industry_ti2 from '@/assets/homeImg/industry_ti2.png'
import industry_ti3 from '@/assets/homeImg/industry_ti3.png'
import industry_ti4 from '@/assets/homeImg/industry_ti4.png'
import industry_ti5 from '@/assets/homeImg/industry_ti5.png'
import industry_ti6 from '@/assets/homeImg/industry_ti6.png'
import industry_ti7 from '@/assets/homeImg/industry_ti7.png'
import industry_ti8 from '@/assets/homeImg/industry_ti8.png'
import sp from '@/assets/homeImg/sp.png'
import dy from '@/assets/homeImg/dy.png'
import wb from '@/assets/homeImg/wb.png'
import wx from '@/assets/homeImg/wx.png'
import github from '@/assets/homeImg/github.png'
import ins from '@/assets/homeImg/in.png'
import tt from '@/assets/homeImg/tt.png'
import zh from '@/assets/homeImg/zh.png'
definePageMeta({
  layout: 'site-new'
})
const router = useRouter()
const props = defineProps(['item'])
const emits = defineEmits(['handle'])
let itemTemp = ref('')
let idtArr = ref([])
let idtArr1 = ref([])
let idtArr2 = ref([
  {
    t: '学习',
    img: industry_ti1,
    d: [
      { t: '教学视频' },
      { t: '文档' },
      { t: '认证' },
      { t: '培训' },
      { t: '云备忘录' },
      { t: '移动视频' }
    ]
  },
  {
    t: '获取软件',
    img: industry_ti2,
    d: [
      { t: '下载' },
      { t: '版本对比' },
      { t: '发布' }
    ]
  },
  {
    t: '合作',
    img: industry_ti3,
    d: [
      { t: 'GitHub' },
      { t: '论坛' },
      { t: '近期活动' },
      { t: '成为合作伙伴' },
      { t: '合作伙伴服务' }
    ]
  },
  {
    t: '获取服务',
    img: industry_ti4,
    d: [
      { t: '寻找合作伙伴' },
      { t: '预约顾问咨询' },
      { t: '安装及推行服务' },
      { t: '客户参考' },
      { t: '支持' },
      { t: '升级' }
    ]
  },
  {
    t: '赋能教育',
    img: industry_ti5,
    d: [
      { t: '教育计划' },
      { t: '参观OORT' }
    ]
  }
])
const iconList = ref([
  {
    img: sp,
    path: ''
  },
  {
    img: dy,
    path: ''
  },
  {
    img: wb,
    path: ''
  },
  {
    img: wx,
    path: ''
  },
  {
    img: github,
    path: ''
  },
  {
    img: ins,
    path: ''
  },
  {
    img: tt,
    path: ''
  },
  {
    img: zh,
    path: ''
  }

])
// 1. 行业数组
idtArr1.value = [
  '安保', '物业', '园区', '街道', '消防', '律所', '停车', '酒厂'
]

let sceneArr = ref([
  '项目管理', '敏捷研发', '待办工具', '数据分析', '问卷调研', '综合人事', '培训学习', '出差旅行', '综合行政'
])

let functionArr = ref([
  '销售', '客服', '产品研发', '数据分析', 'HR', '财务'
])

// 行业
const industryPathMap = {
  安保: '/zh/siteNew/industy/security',
  物业: '/zh/siteNew/industy/property',
  园区: '/zh/siteNew/industy/park',
  街道: '/zh/siteNew/industy/overview',
  消防: '/zh/siteNew/industy/fire',
  律所: '/zh/siteNew/industy/lawfirm',
  停车: '/zh/siteNew/industy/parking',
  酒厂: '/zh/siteNew/industy/winery'
}

// 场景
const scenePathMap = {
  项目管理: '/zh/siteNew/industy/projectManagement',
  敏捷研发: '/zh/siteNew/industy/agileDevelopment',
  待办工具: '/zh/siteNew/industy/todoTools',
  数据分析: '/zh/siteNew/industy/dataAnalysis',
  问卷调研: '/zh/siteNew/industy/questionnaireSurvey',
  综合人事: '/zh/siteNew/industy/comprehensiveHr',
  培训学习: '/zh/siteNew/industy/trainingLearning',
  出差旅行: '/zh/siteNew/industy/businessTrip',
  综合行政: '/zh/siteNew/industy/comprehensiveAdmin'
}

const functionPathMap = {
  销售: '/zh/siteNew/industy/sales',
  客服: '/zh/siteNew/industy/customerService',
  产品研发: '/zh/siteNew/industy/product',
  数据分析: '/zh/siteNew/industy/analysis',
  HR: '/zh/siteNew/industy/hr',
  财务: '/zh/siteNew/industy/finance'
}

// 获取行业路径方法
const getIndustryPath = (item) => {
  return industryPathMap[item] || '/zh/siteNew/industy/overview'
}

// 获取场景路径方法
const getScenePath = (item) => {
  return scenePathMap[item] || '/zh/siteNew/scene/overview'
}

// 获取职能路径方法（新增）
const getFunctionPath = (item) => {
  return functionPathMap[item] || '/zh/siteNew/function/overview'
}

idtArr.value = [
  {
    t: '个人效率工具',
    img: industry_ti1,
    d: [
      { t: '云盘' },
      { t: '云相册' },
      { t: '云文档' },
      { t: '云清单' },
      { t: '云备忘录' },
      { t: '移动视频' }
    ]
  },
  {
    t: '培训学习',
    img: industry_ti2,
    d: [
      { t: '云课堂' },
      { t: '知识论坛' },
      { t: '知识库' },
      { t: '文档管理' },
      { t: '问题反馈' },
      { t: '博客' }
    ]
  },
  {
    t: '指挥调度',
    img: industry_ti3,
    d: [
      { t: '可视化对讲' },
      { t: 'WorkUP Meet' },
      { t: '智慧会议室' },
      { t: '巡查任务' },
      { t: '人力资源' },
      { t: '融合通信' }
    ]
  },
  {
    t: '行政智慧后勤',
    img: industry_ti4,
    d: [
      { t: '线上商城' },
      { t: '宿舍管理' },
      { t: '物业维修' },
      { t: '车辆管理' },
      { t: '来访预约' },
      { t: '个人中心' }
    ]
  },
  {
    t: '组织生产力工具',
    img: industry_ti5,
    d: [
      { t: '智慧协同' },
      { t: '智能客服' },
      { t: '智能审批' },
      { t: '任务管理' },
      { t: '项目管理' },
      { t: '网站设计' }
    ]
  }, {
    t: '业务管理',
    img: industry_ti6,
    d: [
      { t: '合同管理' },
      { t: 'WMS' },
      { t: 'CRM' },
      { t: '财务管理' },
      { t: '电子邮件' },
      { t: '信息发布' }
    ]
  }, {
    t: '队伍建设',
    img: industry_ti7,
    d: [
      { t: '工作圈' },
      { t: '打卡签到' },
      { t: '工作汇报' },
      { t: '问卷调查' },
      { t: '新闻推送' },
      { t: '绩效管理' }
    ]
  }, {
    t: 'IOT',
    img: industry_ti8,
    d: [
      { t: '无人值守仓库' },
      { t: '无感考勤' },
      { t: '无人值守管理柜' },
      { t: '自助机' },
      { t: 'AI宣传员' },
      { t: 'AI摄像机' }
    ]
  }
]

const communityClick = (val) => {
  if (val === '教学视频') {
    router.push('/zh/community/educationalVideo')
    emits('handle')
  }
  if (val === '文档') {
    router.push('/zh/community/document')
    emits('handle')
  }
  if (val === '云备忘录') {
    router.push('/zh/siteNew/software/cloudMemo')
    emits('handle')
  }
  if (val === '移动视频') {
    router.push('/zh/siteNew/mobileVideo')
    emits('handle')
  }
  if (val === '下载') {
    router.push('/zh/siteNew/download')
    emits('handle')
  }
  if (val === 'GitHub') {
    window.open('https://github.com/OortCloudGroup', '_blank')
    emits('handle')
  }
  if (val === '近期活动') {
    router.push('/zh/siteNew/recentActivities')
    emits('handle')
  }
  if (val === '寻找合作伙伴') {
    router.push('/zh/siteNew/partner')
    emits('handle')
  }
  if (val === '支持') {
    router.push('/zh/siteNew/support')
    emits('handle')
  }
  if (val === '升级') {
    router.push('/zh/siteNew/support')
    emits('handle')
  }
}

// 统一的点击跳转方法
const indClick = (cla, path, val) => {
  let obj = {
    classify: cla,
    path,
    subC: val
  }
  emits('handle', obj)
}

// 应用程序点击方法
const softClick = (val) => {
  if (val.t === '问题反馈') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/software/problemFeedback'
    }
    emits('handle', obj)
  }
  if (val.t === '云备忘录') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/software/cloudMemo'
    }
    emits('handle', obj)
  }
  if (val.t === '云相册') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/software/cloudAlbum'
    }
    emits('handle', obj)
  }
  if (val.t === '云盘') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/software/cloudDisk'
    }
    emits('handle', obj)
  }
  if (val.t === '云文档') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/software/cloudDocument'
    }
    emits('handle', obj)
  }
  if (val.t === '云清单') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/software/cloudList'
    }
    emits('handle', obj)
  }
  if (val.t === 'WMS') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/software/wms'
    }
    emits('handle', obj)
  }
  if (val.t === '任务管理') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/software/taskManagement'
    }
    emits('handle', obj)
  }
  if (val.t === '合同管理') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/software/contractManagement'
    }
    emits('handle', obj)
  }
  if (val.t === '文档管理') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/software/documentManagement'
    }
    emits('handle', obj)
  }
  if (val.t === '智能客服') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/software/intelligentCustomerService'
    }
    emits('handle', obj)
  }
  if (val.t === '知识论坛') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/software/knowledgeForum'
    }
    emits('handle', obj)
  }
  if (val.t === '问卷调查') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/software/questionnaireSurvey'
    }
    emits('handle', obj)
  }
  if (val.t === '云课堂') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/cloudClass'
    }
    emits('handle', obj)
  }
  if (val.t === '智能审批') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/approval'
    }
    emits('handle', obj)
  }
  if (val.t === '移动视频') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/mobileVideo'
    }
    emits('handle', obj)
  }
  if (val.t === '知识库') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/knowledgeBase'
    }
    emits('handle', obj)
  }
  if (val.t === '博客') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/blog'
    }
    emits('handle', obj)
  }
  if (val.t === '可视化对讲') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/visualTalk'
    }
    emits('handle', obj)
  }
  if (val.t === 'WorkUP Meet') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/workUPMeet'
    }
    emits('handle', obj)
  }
  if (val.t === '智慧会议室') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/smartMeeting'
    }
    emits('handle', obj)
  }
  if (val.t === '巡查任务') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/inspectTask'
    }
    emits('handle', obj)
  }
  if (val.t === '人力资源') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/humanResource'
    }
    emits('handle', obj)
  }
  if (val.t === '融合通信') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/fusionCommunication'
    }
    emits('handle', obj)
  }
  if (val.t === '线上商城') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/onlineShoppingMall'
    }
    emits('handle', obj)
  }
  if (val.t === '宿舍管理') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/dormitoryManagement'
    }
    emits('handle', obj)
  }
  if (val.t === '物业维修') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/propertyRepair'
    }
    emits('handle', obj)
  }
  if (val.t === '车辆管理') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/vehicleManagement'
    }
    emits('handle', obj)
  }
  if (val.t === '来访预约') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/visitAppointment'
    }
    emits('handle', obj)
  }
  if (val.t === '个人中心') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/personalCenters'
    }
    emits('handle', obj)
  }
  if (val.t === '智慧协同') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/smartCollaboration'
    }
    emits('handle', obj)
  }
  if (val.t === '项目管理') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/projectManagement'
    }
    emits('handle', obj)
  }
  if (val.t === '网站设计') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/websiteDesign'
    }
    emits('handle', obj)
  }
  if (val.t === 'CRM') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/crm'
    }
    emits('handle', obj)
  }
  if (val.t === '财务管理') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/financialManagement'
    }
    emits('handle', obj)
  }
  if (val.t === '电子邮件') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/email'
    }
    emits('handle', obj)
  }
  if (val.t === '信息发布') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/informationRelease'
    }
    emits('handle', obj)
  }
  if (val.t === '工作圈') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/workCircle'
    }
    emits('handle', obj)
  }
  if (val.t === '打卡签到') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/clockInSignIn'
    }
    emits('handle', obj)
  }
  if (val.t === '工作汇报') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/workReport'
    }
    emits('handle', obj)
  }
  if (val.t === '新闻推送') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/newsPush'
    }
    emits('handle', obj)
  }
  if (val.t === '绩效管理') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/performanceManagement'
    }
    emits('handle', obj)
  }
  if (val.t === '无人值守仓库') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/warehouseManagement'
    }
    emits('handle', obj)
  }
  if (val.t === '无感考勤') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/noContactAttendance'
    }
    emits('handle', obj)
  }
  if (val.t === '无人值守管理柜') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/noContactManagementCabinet'
    }
    emits('handle', obj)
  }
  if (val.t === '自助机') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/selfServiceMachine'
    }
    emits('handle', obj)
  }
  if (val.t === 'AI宣传员') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/aiAdvertising'
    }
    emits('handle', obj)
  }
  if (val.t === 'AI摄像机') {
    let obj = {
      classify: '应用程序',
      path: '/zh/siteNew/aiCamera'
    }
    emits('handle', obj)
  }
}

watch(() => props.item, (newVal: any) => {
  itemTemp.value = newVal
}, { immediate: true })
</script>

<style lang="scss" scoped>
.industryPage {
  height: fit-content;
  max-height: 82vh;
  overflow: auto;
  background-color: #fff;
}

.w1380 {
  width: 1380px;
  margin: 0 auto;
}

.idtBox:hover {
  cursor: pointer;
  color: #2656a5;
  // text-decoration: underline;
}

.conBox>div:hover {
  cursor: pointer;
  color: #2656a5;
  // text-decoration: underline;
}

.conBox {
  padding-top: 16px;
  gap: 40px;
  >div{
    color: rgba(61, 61, 61, 1);
    font-weight: normal;
    font-size: 16px;
    text-align: left;
  }
}

.idtBox {
  gap: 12px;
  color: rgba(61, 61, 61, 1);
  font-weight: bold;
  font-size: 18px;

  .idtImg {
    width: 24px;
    height: 24px;
  }
}

.bb {
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e8e8e8;
}

.indT {
  padding-bottom: 80px;
}

.idtBottom {
  height: 80px;
  gap: 100px;
  justify-content: center;

  &Out {
    margin-top: 40px;
    border-top: 1px solid #e8e8e8;
  }

  > .idtBox {
    justify-content: center;
    font-weight: normal;
  }
}

.gap50{
  gap: 50px;
}
.appT {
  gap: 20px;
  display: flex;
  flex-wrap: wrap;

  .appTItem {
    width: calc(25% - 16px);

    .idtBox {
      margin-bottom: 20px;
    }

    .appT_t:hover {
      cursor: pointer;
      color: #2656a5;
      // text-decoration: underline;
    }

    .appT_t {
      padding-bottom: 12px;
      color: rgba(61, 61, 61, 1);
      font-weight: normal;
      font-size: 16px;
      text-align: left;
    }
  }
}
.itemBottom{
  gap: 100px;
  justify-content: center;
  margin-bottom: 30px;
  font-size: 16px;
  color: #3D3D3D;
}
.item{
  img{
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
}
</style>
