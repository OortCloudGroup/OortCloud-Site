<template>
  <div class="personalPageOut">
    <div class="personalPage flexRowAC">
      <div class="personalL menuBox">
        <div v-for="(item,i) in arr" :key="i" class="menuItem flexRowAC" :class="{act:i===iact}" @click="menuClick(i)">
          <img class="menuImg" :src="item.img" alt="" />
          {{ item.t }}
        </div>
      </div>
      <div v-if="iact===0" class="personalrR menuCont">
        <personal-center-info />
      </div>
      <div v-if="iact===1" class="personalrR menuCont">
        <personal-center-login />
      </div>
      <div v-if="iact===2" class="personalrR menuCont">
        <personal-center-password />
      </div>
      <div v-if="iact===4" class="personalrR menuCont">
        <personal-center-invoice />
      </div>
      <div v-if="iact===6||iact===7" class="personalrR menuCont">
        <personal-center-address :title="iact===6?'个人地址本':'标签'" />
      </div>
      <div v-if="iact===5" class="personalrR menuCont">
        <personal-center-opinion />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import per_l1 from '@/assets/personalCenter/per_l1.png'
import per_l2 from '@/assets/personalCenter/per_l2.png'
import per_l3 from '@/assets/personalCenter/per_l3.png'
import per_l4 from '@/assets/personalCenter/per_l4.png'
import per_l5 from '@/assets/personalCenter/per_l5.png'
import per_l6 from '@/assets/personalCenter/per_l6.png'
import per_l7 from '@/assets/personalCenter/per_l7.png'
import per_l8 from '@/assets/personalCenter/per_l8.png'
import PersonalCenterPassword from '@/pages/zh/siteNew/personalCenter/personalCenterPassword.vue'
import PersonalCenterAddress from '@/pages/zh/siteNew/personalCenter/personalCenterAddress.vue'
import PersonalCenterInfo from '@/pages/zh/siteNew/personalCenter/personalCenterInfo.vue'
import PersonalCenterOpinion from '@/pages/zh/siteNew/personalCenter/personalCenterOpinion.vue'
import PersonalCenterInvoice from '@/pages/zh/siteNew/personalCenter/personalCenterInvoice.vue'
import PersonalCenterLogin from '@/pages/zh/siteNew/personalCenter/personalCenterLogin.vue'

definePageMeta({
  layout: 'site-new'
})
let iact = ref(0)
let arr = ref([])
arr.value = [
  { t: '个人信息', img: per_l1 },
  { t: '安全性', img: per_l2 },
  { t: '密码安全', img: per_l3 },
  { t: '我的订单', img: per_l4 },
  { t: '发票', img: per_l5 },
  { t: '常用意见', img: per_l6 },
  { t: '个人地址本', img: per_l7 },
  { t: '标签', img: per_l8 }
]

const menuClick = (index) => {
  if (index === 3) {
    navigateTo('/zh/siteNew/personalCenterOrder')
  } else {
    iact.value = index
  }
}
</script>
<style lang="scss" scoped>
.personalPageOut {
  background-color: #F7F7F7;
  padding: 40px 0;
}

.personalPage {
  width: 1320px;
  margin: 0 auto;
  gap: 20px;
  align-items: flex-start;

  .personalL {
    width: 320px;
    flex-shrink: 0;
    border-radius: 20px;
    background-color: #fff;
  }

  .personalrR {
    border-radius: 20px;
    background-color: #fff;
    flex: 1;
  }
}

.menuBox {
  padding: 40px 16px;

  .menuItem {
    cursor: pointer;
    padding: 16px;
    gap: 16px;

    &.act {
      border-radius: 12px;
      background-color: #f7f7f7;
    }
  }

  .menuImg {
    width: 48px;
    height: 48px;
  }
}

.menuCont {
  padding: 32px;
}

:deep(.tenanat-tabs) {
  padding: 0 20px;

  .el-tabs__item {
    color: #999999;
  }

  .el-tabs__item.is-active {
    color: var(--el-color-primary);
  }
}

// tabs
:deep(.el-tabs__header) {
  padding-top: 10px;

  .el-tabs__nav-wrap::after {
    display: none;
  }

  .el-tabs__item.is-top {
    font-size: 16px;
    font-weight: 700;
  }
}

</style>
