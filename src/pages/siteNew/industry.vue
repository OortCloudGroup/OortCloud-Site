<template>
  <div class="industryPage">
    <div v-if="itemTemp==='行业'" class="w1380 indT">
      <div class="flexRowAC bb idtBox">
        <img class="idtImg" src="@/assets/homeImg/industry_i1.png" alt="" />行业
      </div>
      <div class="flexRowAC conBox">
        <div>安保</div>
        <div>物业</div>
        <div>园区</div>
        <div>街道</div>
        <div>消防</div>
        <div>律所</div>
        <div>停车</div>
      </div>
      <div class="flexRowAC bb idtBox">
        <img class="idtImg" src="@/assets/homeImg/industry_i2.png" alt="" />职能
      </div>
      <div class="flexRowAC conBox">
        <div>销售</div>
        <div>客服</div>
        <div>产品研发</div>
        <div>数据分析</div>
        <div>HR</div>
        <div>财务</div>
      </div>
      <div class="flexRowAC bb idtBox">
        <img class="idtImg" src="@/assets/homeImg/industry_i3.png" alt="" />场景
      </div>
      <div class="flexRowAC conBox">
        <div>项目管理</div>
        <div>敏捷研发</div>
        <div>待办工具</div>
        <div>数据分析</div>
        <div>问卷调研</div>
        <div>综合人事</div>
        <div>培训学习</div>
        <div>出差旅行</div>
        <div>综合行政</div>
      </div>
    </div>
    <div v-else class="w1380 appT flexRowAC">
      <div v-for="(item,i) in idtArr" :key="i" class="appTItem">
        <div class="flexRowAC bb idtBox">
          <img class="idtImg" :src="item.img" alt="" />{{ item.t }}
        </div>
        <div v-for="(dd,tt) in item.d" :key="tt" class="appT_t">
          {{ dd.t }}
        </div>
      </div>
    </div>
    <div class="idtBottomOut flexRowAC">
      <div class="w1380 idtBottom flexRowAC">
        <div class="flexRowAC idtBox">
          <img class="idtImg" src="@/assets/homeImg/industry_ic1.png" alt="" />第三方应用软件
        </div>
        <div class="flexRowAC idtBox">
          <img class="idtImg" src="@/assets/homeImg/industry_ic2.png" alt="" />OortCloud 定制
        </div>
        <a class="flexRowAC idtBox" href="https://sh.oortcloudsmart.com/" target="_blank">
          <img class="idtImg" src="@/assets/homeImg/industry_ic3.png" alt="" />OORT.SH 平台
        </a>
        <a class="flexRowAC idtBox" href="https://da.oortcloudsmart.com/" target="_blank">
          <img class="idtImg" src="@/assets/homeImg/industry_ic4.png" alt="" />OORT.DA 数据平台
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import industry_ti1 from '@/assets/homeImg/industry_ti1.png'
import industry_ti2 from '@/assets/homeImg/industry_ti2.png'
import industry_ti3 from '@/assets/homeImg/industry_ti3.png'
import industry_ti4 from '@/assets/homeImg/industry_ti4.png'
import industry_ti5 from '@/assets/homeImg/industry_ti5.png'
import industry_ti6 from '@/assets/homeImg/industry_ti6.png'
import industry_ti7 from '@/assets/homeImg/industry_ti7.png'
import industry_ti8 from '@/assets/homeImg/industry_ti8.png'
const props = defineProps(['item'])
let itemTemp = ref('')
let idtArr = ref([])

idtArr.value = [
  {
    t: '个人效率工具',
    img: industry_ti1,
    d: [
      { t: '微商城' },
      { t: '信息发布' },
      { t: '问题反馈' },
      { t: '智能客服' }
    ]
  },
  {
    t: '培训学习',
    img: industry_ti2,
    d: [
      { t: '云课堂' },
      { t: '知识论坛' },
      { t: '云盘' },
      { t: '文档管理' }
    ]
  },
  {
    t: '指挥调度',
    img: industry_ti3,
    d: [
      { t: 'GB28181国际推流一体机' },
      { t: '风险防范' },
      { t: '问题反馈' },
      { t: '智能客服' }
    ]
  },
  {
    t: '行政智慧后勤',
    img: industry_ti4,
    d: [
      { t: '考勤管理' },
      { t: '宿舍管理' },
      { t: '智能审批' },
      { t: '智能客服' }
    ]
  },
  {
    t: '组织生产力工具',
    img: industry_ti5,
    d: [
      { t: '微商城' },
      { t: '信息发布' },
      { t: '问题反馈' },
      { t: '智能客服' }
    ]
  }, {
    t: '业务管理',
    img: industry_ti6,
    d: [
      { t: '云课堂' },
      { t: '知识论坛' },
      { t: '云盘' },
      { t: '文档管理' }
    ]
  }, {
    t: '队伍建设',
    img: industry_ti7,
    d: [
      { t: 'GB28181国际推流一体机' },
      { t: '风险防范' },
      { t: '问题反馈' },
      { t: '智能客服' }
    ]
  }, {
    t: 'IOT',
    img: industry_ti8,
    d: [
      { t: '云课堂' },
      { t: '知识论坛' },
      { t: '云盘' },
      { t: '文档管理' }
    ]
  }
]

watch(() => props.item, (newVal: any) => {
  console.log(newVal)
  itemTemp.value = newVal
}, { immediate: true })
</script>

<style lang="scss" scoped>
.industryPage {
  background-color: #fff;
}

.w1380 {
  width: 1380px;
  margin: 0 auto;
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
  padding-top: 40px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e8e8e8;
}

.indT {
  padding-bottom: 80px;
}

.idtBottom {
  height: 88px;
  gap: 100px;
  justify-content: center;

  &Out {
    margin-top: 100px;
    border-top: 1px solid #e8e8e8;
  }

  > .idtBox {
    justify-content: center;
    font-weight: normal;
  }
}

.appT {
  gap: 20px;
  flex-wrap: wrap;

  .appTItem {
    width: calc(25% - 16px);

    .idtBox {
      margin-bottom: 20px;
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
</style>
