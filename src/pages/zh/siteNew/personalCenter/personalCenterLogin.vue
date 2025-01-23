<template>
  <div class="personalPage_sub">
    <div class="menuCont_t">
      登陆方式
    </div>
    <div class="safe flexRowAC">
      <div v-for="(item,i) in arr" :key="i" class="detailsAva flexRowAC">
        <div class="detailsImg1" />
        <div class="safeI">
          <div>抬头管理{{ item['n'] }}</div>
          <div class="detailsI_d">
            集中管理发票抬头，确保信息准确
          </div>
        </div>
        <el-switch v-model="value" />
      </div>
    </div>
    <div class="menuCont_t">
      登录设备
    </div>
    <el-table header-cell-class-name="header_cell" :data="tableData">
      <el-table-column prop="label" label="设备名称" />
      <el-table-column prop="value" label="系统" />
      <el-table-column prop="value" label="验证通过时间" />
    </el-table>
    <div class="paginationBox flexRowAC">
      <el-pagination
        background
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pagesize"
        layout="total, prev, pager, next, sizes"
        :total="count"
        class="justifyAlign"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <div class="menuCont_t">
      登录记录
    </div>
    <el-table header-cell-class-name="header_cell" :data="tableData">
      <el-table-column prop="label" label="设备名称" />
      <el-table-column prop="value" label="系统" />
      <el-table-column prop="value" label="验证通过时间" />
    </el-table>
    <div class="paginationBox flexRowAC">
      <el-pagination
        background
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pagesize"
        layout="total, prev, pager, next, sizes"
        :total="count"
        class="justifyAlign"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let count = ref<number>(0)
let value = ref<any>('')
let page = ref<Number>(1)
let pagesize = ref<Number>(10)
const tableData = ref<any>([])
let arr = ref([])
arr.value = [
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { }
]

let handleSizeChange = (val: number) => {
  pagesize.value = val
}
let handleCurrentChange = (val: number) => {
  page.value = val
}
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

.safe {
  padding: 32px 0;
  gap: 20px;
  flex-wrap: wrap;
  .detailsAva {
    width: 380px;
  }

  .safeI {
    margin-right: 70px;
  }

  .detailsAva {
    width: 290px;
    background: #F9FAFB;
    border-radius: 16px 16px 16px 16px;
    padding: 20px 22px;
  }

  .detailsImg1 {
    width: 34px;
    height: 39px;
    background: #84A9FF;
    margin-right: 24px;
  }

  .detailsI_d {
    padding-bottom: 12px;
    font-weight: 400;
    font-size: 14px;
    color: #718096;
  }
}

.paginationBox {
  justify-content: center;
  height: 100px;
}
</style>
