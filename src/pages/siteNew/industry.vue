<template>
  <div class="industryPage">
    <div class="w1380">
      <div class="flexRowAC idtBox">
        <img class="idtImg" src="@/assets/VLimg2.0/CloudR0.png" alt="" />行业
      </div>
    </div>
    <div class=" idtBottomOut flexRowAC">
      <div class="w1380 idtBottom flexRowAC">
        <div class="flexRowAC idtBox">
          <img class="idtImg" src="@/assets/VLimg2.0/CloudR0.png" alt="" />第三方应用软件
        </div>
        <div class="flexRowAC idtBox">
          <img class="idtImg" src="@/assets/VLimg2.0/CloudR0.png" alt="" />OortCloud 定制
        </div>
        <div class="flexRowAC idtBox">
          <img class="idtImg" src="@/assets/VLimg2.0/CloudR0.png" alt="" />OORT.SH 平台
        </div>
        <div class="flexRowAC idtBox">
          <img class="idtImg" src="@/assets/VLimg2.0/CloudR0.png" alt="" />OORT.DA 数据平台
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

.idtBox {
  gap: 12px;

  .idtImg {
    width: 24px;
    height: 24px;
  }
}

.idtBottom {
  height: 88px;
  gap: 100px;
  justify-content: center;

  &Out {
    border-top: 1px solid #e8e8e8;
  }

  > .idtBox {
    justify-content: center;
  }
}
</style>
