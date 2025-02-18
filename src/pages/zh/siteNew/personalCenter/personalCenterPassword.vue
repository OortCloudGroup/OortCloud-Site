<template>
  <div class="personalPage_sub">
    <div class="menuCont_t">
      密码安全
    </div>
    <div class="menuCont_t1">
      更改或查看密码
    </div>
    <div class="passBox">
      <div class="menuCont_t1">
        旧密码
      </div>
      <el-input v-model="value" :type="passwordType" class="themeInput">
        <template #suffix>
          <el-icon class="el-input__icon" @click="showPwd">
            <Hide v-if="passwordType" />
            <View v-else />
          </el-icon>
        </template>
      </el-input>
    </div>
    <div class="passBox">
      <div class="menuCont_t1">
        新密码
      </div>
      <el-input v-model="value1" :type="passwordType" class="themeInput">
        <template #suffix>
          <el-icon class="el-input__icon" @click="showPwd">
            <Hide v-if="passwordType" />
            <View v-else />
          </el-icon>
        </template>
      </el-input>
    </div>
    <div class="passBox">
      <div class="menuCont_t1 t1">
        最少6个字符
      </div>
    </div>
    <div class="passBox flexRowAC" style="justify-content: flex-end">
      <div class="menuCont_t1 btn">
        保存
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { View, Hide } from '@element-plus/icons-vue'

// 显示隐藏 密码
let passwordType = ref<any>('password')
let value = ref('')
let value1 = ref('')

const showPwd = () => {
  passwordType.value = passwordType.value ? '' : 'password'
}

</script>
<style lang="scss" scoped>
.el-input__icon{
  cursor: pointer;
  font-size: 16px;
}

.passBox>.menuCont_t1.t1{
  font-size: 12px;
}

.passBox>.menuCont_t1.btn{
  width: 97px;
  height: 48px;
  line-height: 48px;
  background: #2278FF;
  border-radius: 12px 12px 12px 12px;
  font-weight: 400;
  font-size: 16px;
  color: #FFFFFF;
  text-align: center;
  font-style: normal;
  text-transform: none;
}

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

  .menuCont_t1{
    font-weight: 400;
    font-size: 14px;
    color: #718096;
  }
}

.passBox{
  padding-top: 24px;
}

</style>
