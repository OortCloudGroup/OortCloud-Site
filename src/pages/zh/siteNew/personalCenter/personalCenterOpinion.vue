<template>
  <div class="personalPage_sub">
    <div class="menuCont_t">
      常用意见
    </div>
    <div class="perInfoBox">
      <div class="perInfo_t">
        增加常用意见
      </div>
      <el-input v-model="value" type="textarea" :rows="5" class="themeInput" placeholder="问题描述*" />
      <div class="cu_submit flexRowAC">
        保存
      </div>
      <div class="perInfo_t">
        常用意见
      </div>
      <div>
        <div class="perInfo_d">
          同意，请尽快完成任务
        </div>
        <div class="perInfo_d">
          由于任务临时取消，该任务暂停，望周知
        </div>
        <div class="perInfo_d">
          由于任务临时取消，该任务暂停，望周知由于任务临时取消，该任务暂停，望周知由于任务临时取消，该任务暂停，望周知由于任务临时取消，该任务暂停，望周知由于任务临时取消，该任务暂停，望周知由于任务临时取消，该任务暂停，望周知由于任务临时取消，该任务暂停....
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let value = ref('')

</script>
<style lang="scss" scoped>
.personalPage_sub {
  height: 100%;
  width: 100%;
  background-color: #fff;

  .menuCont_t {
    width: 100px;
    height: 28px;
    font-weight: 700;
    font-size: 20px;
    color: #111827;
    line-height: 28px;
    text-align: left;
    font-style: normal;
  }
}

.perInfoBox {
  .perInfo_t {
    font-weight: 700;
    font-size: 16px;
    color: #333333;
    padding: 24px 0 12px;
  }

  .perInfo_d {
    background: #FAFAFA;
    border-radius: 12px 12px 12px 12px;
    padding: 18px 16px;
    margin-bottom: 20px;
  }

  .cu_submit {
    cursor: pointer;
    margin: 40px 0 0 auto;
    justify-content: center;
    width: 170px;
    height: 64px;
    border-radius: 8px;
    color: #fff;
    background: #2278FF;
    box-shadow: 0px 4px 10px 0px #2278FF33;
  }
}
</style>
