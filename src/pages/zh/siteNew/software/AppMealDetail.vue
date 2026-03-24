<template>
  <el-dialog
    v-model="visible"
    title="套餐详情"
    width="50%"
    class="app-detail-dialog"
    append-to-body
    destroy-on-close
    :close-on-click-modal="true"
    :show-close="true"
  >
    <div class="dialog-content">
      <h2>功能点明细</h2>
      <el-table :data="list" style="width: 100%">
        <el-table-column prop="name" label="功能点名称" />
        <el-table-column prop="value_type" label="功能点类型">
          <template #default="scope">
            {{ scope.row.value_type === 1 ? '开关 / 是否支持' : '数量 / 额度' }}
          </template>
        </el-table-column>
        <el-table-column prop="grant_mode" label="授权类型">
          <template #default="scope">
            {{ scope.row.pricing_type === 1 ? '计数模式' : '畅享模式' }}
          </template>
        </el-table-column>
        <el-table-column prop="grant_value" label="授权值">
          <template #default="scope">
            <span v-if="scope.row.value_type === 1">
              {{ scope.row.grant_value ? '支持' : '不支持' }}
            </span>
            <span v-else>
              {{ scope.row.grant_value }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="unit" label="授权值单位" />
        <el-table-column prop="description " label="描述" />
      </el-table>
    </div>
  </el-dialog>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  list: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const visible = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
})
</script>

<style scoped lang="scss">
.dialog-content{
  min-height: 400px;
  h2{
    color: #333;
    margin-bottom: 10px;
    margin-top: 20px;
    font-size: 18px;
  }
}
</style>
