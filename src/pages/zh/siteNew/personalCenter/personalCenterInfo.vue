<template>
  <div class="personalPage_sub">
    <div class="menuCont_t">
      个人信息
    </div>
    <div class="detailsInfo">
      <div class="detailsAva flexRowAC">
        <img class="detailsImg" src="@/assets/personalCenter/user.png" alt="" />
        <div>
          <div class="detailsI_d">
            只支持JPG、JPEG或PNG格式的图片
          </div>
          <div class="flexRowAC">
            <el-button type="primary" class="cu_submit flexRowAC">
              更改头像
            </el-button>
            <el-button class="cu_submit flexRowAC">
              删除图像
            </el-button>
          </div>
        </div>
      </div>
      <el-form class="detailsInfoFrom flexRowAC" label-position="top" label-width="auto">
        <el-form-item label="姓名">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="form.name1" />
        </el-form-item>
        <el-form-item label="Email">
          <el-input v-model="form.name2" />
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.name3" />
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.name4">
            <el-option label="男" value="0" />
            <el-option label="女" value="1" />
          </el-select>
        </el-form-item>
        <el-form-item label="简介">
          <el-input v-model="form.name5" />
        </el-form-item>
        <el-form-item label="部门">
          <el-input v-model="form.name6" />
        </el-form-item>
        <el-form-item label="岗位">
          <el-input v-model="form.name7" />
        </el-form-item>
        <div class="detailsInfoFrom_t">
          地址
        </div>
        <el-form-item label="省/直辖市">
          <el-input v-model="form.name8" />
        </el-form-item>
        <el-form-item label="市/市区">
          <el-input v-model="form.name9" />
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input v-model="form.name10" />
        </el-form-item>
        <el-form-item label="邮政编码">
          <el-input v-model="form.name11" />
        </el-form-item>
        <div style="text-align: right;width: 100%;">
          <el-button type="primary">
            编辑个人资料
          </el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  name: '',
  name1: '',
  name2: '',
  name3: '',
  name4: '',
  name5: '',
  name6: '',
  name7: '',
  name8: '',
  name9: '',
  name10: '',
  name11: ''
})
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

.detailsInfo {
  padding-top: 32px;

  .detailsImg {
    width: 88px;
    height: 88px;
    border-radius: 50%;
    background-color: #f7f7f7;
    margin-right: 24px;
  }

  .detailsI_d {
    padding-bottom: 12px;
    font-weight: 400;
    font-size: 14px;
    color: #718096;
  }

  :deep(.detailsInfoFrom) {
    padding: 40px 0;
    flex-wrap: wrap;
    justify-content: space-between;

    .el-form-item {
      width: 48%;
    }

    .detailsInfoFrom_t {
      width: 100%;
      padding-bottom: 20px;
      height: 28px;
      font-weight: 700;
      font-size: 20px;
      color: #111827;
      line-height: 28px;
    }
  }
}
</style>
