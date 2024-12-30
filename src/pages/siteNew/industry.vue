<template>
  <div class="industryPage">
    <div class="w1380 indT">
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
    <div class="idtBottomOut flexRowAC">
      <div class="w1380 idtBottom flexRowAC">
        <div class="flexRowAC idtBox">
          <img class="idtImg" src="@/assets/homeImg/industry_ic2.png" alt="" />第三方应用软件
        </div>
        <div class="flexRowAC idtBox">
          <img class="idtImg" src="@/assets/homeImg/industry_ic2.png" alt="" />OortCloud 定制
        </div>
        <div class="flexRowAC idtBox">
          <img class="idtImg" src="@/assets/homeImg/industry_ic3.png" alt="" />OORT.SH 平台
        </div>
        <div class="flexRowAC idtBox">
          <img class="idtImg" src="@/assets/homeImg/industry_ic4.png" alt="" />OORT.DA 数据平台
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

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
}

.idtBox {
  gap: 12px;
  color: rgba(61,61,61,1);
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
</style>
