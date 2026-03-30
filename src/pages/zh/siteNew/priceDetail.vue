<template>
  <div class="meal_detail">
    <div class="detail_title">
      套餐详情
    </div>
    <div class="meal">
      <img src="@/assets/software/gjbtc.png" alt="" />{{ detail.name }}
    </div>
    <div class="treeTitle">
      基本信息
    </div>
    <table class="package-table">
      <tbody>
        <tr>
          <td>付费价格</td>
          <td>{{ detail.annual_price_desc }}</td>
        </tr>
        <tr v-for="(item, index) in highlightList" :key="index">
          <td>{{ item.title }}</td>
          <td>{{ item.desc }}</td>
        </tr>
      </tbody>
    </table>
    <div class="treeTitle">
      授权应用
    </div>
    <el-table :data="detail.items" style="width: 100%" show-overflow-tooltip>
      <el-table-column type="expand">
        <template #default="scope">
          <div class="funtionTable">
            <el-table :data="scope.row.feature_config_views" :border="childBorder" show-overflow-tooltip>
              <el-table-column label="功能点名称" prop="display_name" />
              <el-table-column label="使用额度" prop="grant_desc" />
              <!-- <el-table-column label="功能点类型" prop="type">
                <template #default="cope">
                  {{ cope.row.value_type === 1 ? '开关 / 是否支持' : '数量 / 额度' }}
                </template>
              </el-table-column>
              <el-table-column label="值" prop="display_value">
                <template #default="cope">
                  <span v-if="cope.row.type === 1">
                    {{ cope.row.display_value ? '支持' : '不支持' }}
                  </span>
                  <span v-else>
                    {{ cope.row.display_value }}
                  </span>
                </template>
              </el-table-column>
              <el-table-column label="单位" prop="unit" /> -->
              <el-table-column label="说明" prop="description" min-width="200px" />
            </el-table>
          </div>
        </template>
      </el-table-column>
      <el-table-column type="index" label="序号" width="70" />
      <el-table-column prop="icon_url" label="logo" width="100">
        <template #default="scope">
          <div class="box">
            <oort-img :src="scope.row.icon_url" />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="display_name" label="应用名称" />
      <el-table-column prop="app_version" label="版本号" />
      <el-table-column prop="intro" label="简介" />
    </el-table>
    <!-- <div class="treeTitle">
      授权服务
    </div>
    <table class="package-table2">
      <tbody>
        <tr>
          <td style=" font-weight: 500;">
            序号
          </td>
          <td style=" font-weight: 500;">
            服务名称
          </td>
          <td style=" font-weight: 500;">
            服务描述
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>
            <div class="table_box">
              <img class="table_img" src="@/assets/site/homeApp_a5.png" alt="" />OCR服务
            </div>
          </td>
          <td>本 OCR 服务基于深度学习视觉识别技术，支持对图片、证件、票据、文档、车牌、小票等场景进行高精度文字提取，返回结构化文本与位置信息。提供稳定易用的 API 接口，毫秒级响应，支持批量处理与高并发调用，可快速集成至各类应用与系统，满足自动化录入、信息核验、内容数字化等场景需求。</td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <div class="table_box">
              <img class="table_img" src="@/assets/site/homeApp_d5.png" alt="" />云相册服务
            </div>
          </td>
          <td>用户注册 / 登录、消息中心、意见反馈、创建课程、编辑课程、删除课程、课程发布、课程下架、课程观看、视频评论、直播录制、连麦互动、举手提问、直播禁言、全员静音</td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { mealDetail } from '@/api'
onMounted(() => {
  getMealDetail()
})

const detail = ref({})

const props = defineProps({
  id: {
    type: [String, Number],
    required: true
  }
})

const highlightList = computed(() => {
  if (!detail.value.highlights) return []
  return detail.value.highlights.map((item) => {
    const [title, ...descParts] = item.split('：')
    return {
      title: title.trim(),
      desc: descParts.join('：').trim()
    }
  })
})

const getMealDetail = async() => {
  const res = await mealDetail({ id: props.id })
  detail.value = res.data
}
</script>

<style scoped lang="scss">
.package-table {
  width: 100%;
  box-sizing: border-box;
  border-collapse: collapse;
  border: 1px solid #E6EEF9;
  overflow: hidden;
  color: #333;
  margin-bottom: 40px;
}

/* 行样式 */
.package-table tr {
  border-bottom: 1px solid #E6EEF9;
}

.package-table tr:last-child {
  border-bottom: none;
}

/* 单元格样式 */
.package-table td {
  padding: 20px 24px !important;
  text-align: left;
  font-size: 16px;
  color: #333333;
  background-color: #fff;
}

/* 左侧标签列 */
.package-table td:first-child{
  width: 20%;
  font-weight: 500;
  background-color: #E6EEF9;
}

/* 右侧内容列 */
.package-table td:last-child{
  width: 80%;
}

.meal_detail{
  padding: 60px;
  .detail_title{
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 40px;
    color: #333;
  }
}

.meal{
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
  color: #333;
  img{
    width: 58px;
    height: 58px;
    margin-right: 10px;
  }
}

.treeTitle {
  color: #333;
  padding-bottom: 20px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 4px;
  font-size: 16px;

  &::before {
    content: '';
    width: 3px;
    height: 18px;
    background-color: var(--el-color-primary);
  }
}

.package-table2 {
  width: 100%;
  box-sizing: border-box;
  border-collapse: collapse;
  border: 1px solid #E6EEF9;
  overflow: hidden;
  color: #333;
  margin-bottom: 40px;
}

.package-table2 tr {
  border-bottom: 1px solid #E6EEF9;
}

.package-table2 tr:first-child {
  background-color: #E6EEF9;
}

.package-table2 td {
  padding: 20px 24px !important;
  border: 1px solid #E6EEF9;
  text-align: left;
  font-size: 16px;
  color: #333333;
}

.package-table2 td:first-child{
  width: 20%;
}

.package-table2 td:last-child{
  width: 50%;
}

.package-table2 td:nth-child(2) {
  width: 30%;
}
.table_img{
  width: 36px;
  height: 36px;
  margin-right: 10px;
}
.table_box{
  display: flex;
  align-items: center;
}
.box{
  display: flex;
  align-items: center;
  img{
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 16px;
  }
}
.funtionTable{
  width: 80%;
  margin-left: auto;

}

:deep(.el-popper.is-dark) {
  max-width: 400px !important;
  padding: 6px 10px !important;
}

:deep(.el-table .el-table__row){
  height: 70px;
}
</style>
