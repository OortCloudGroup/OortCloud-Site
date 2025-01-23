<template>
  <div class="personalPage_sub">
    <div class="menuCont_t">
      我的发票
    </div>
    <div class="detailsInfo invoice">
      <div class="detailsAva flexRowAC">
        <div class="detailsImg1" />
        <div>
          <div>抬头管理</div>
          <div class="detailsI_d">
            集中管理发票抬头，确保信息准确
          </div>
        </div>
      </div>
      <div class="invoiceCBox">
        <el-tabs v-model="activeName" class="tenanat-tabs">
          <el-tab-pane label="全部" name="ac1" />
          <el-tab-pane label="已开具发票" name="ac2" />
          <el-tab-pane label="申请中发票" name="ac3" />
        </el-tabs>
        <div class="invoiceCont">
          <div class="flexRowAC invA b1">
            <div class="inv1">
              订单详情
            </div>
            <div class="inv2">
              发票类型
            </div>
            <div class="inv3">
              状态
            </div>
            <div class="inv4">
              操作
            </div>
          </div>
          <div v-for="(item,i) in isActInv" :key="i" class="invAL">
            <div class="flexRowAC invA b1">
              <div class="inv1">
                2025-01-06 10:08:22{{ item['n'] }}
                <span>订单号：168491616813</span>
              </div>
            </div>
            <div class="flexRowAC invA" style="height: 180px;">
              <div class="inv1">
                <div class="det flexRowAC">
                  <div class="flexRowAC">
                    <img class="inv1Img" src="@/assets/software/contactUs_i1.png" alt="" />云文档
                  </div>
                  <div>12人·1年</div>
                </div>
                <div class="det flexRowAC">
                  <div class="flexRowAC">
                    <img class="inv1Img" src="@/assets/software/contactUs_i1.png" alt="" />云盘
                  </div>
                  <div>1人·1月</div>
                </div>
                <div class="det flexRowAC">
                  <div class="flexRowAC">
                    <img class="inv1Img" src="@/assets/software/contactUs_i1.png" alt="" />云相册
                  </div>
                  <div>1人·1月</div>
                </div>
              </div>
              <div class="inv2 d1">
                普票
              </div>
              <div class="inv3 d1">
                <div class="btn">
                  已开票
                </div>
              </div>
              <div class="inv4 d1">
                <div class="btn btn1">
                  发票详情
                </div>
              </div>
            </div>
          </div>
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeName = ref('ac1')
let count = ref<number>(0)
let page = ref<Number>(1)
let pagesize = ref<Number>(10)
let isActInv = ref([])
isActInv.value = [
  { t: '警务部门', img: '' },
  { t: '警务部门', img: '' },
  { t: '警务部门', img: '' }
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

.detailsInfo {
  padding-top: 32px;

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

.invoiceCont {
  .invA {
    text-align: center;
    border-radius: 0px 0px 0px 0px;

    &.b1 {
      height: 46px;
      background: #F3F5FC;
    }
  }

  .invAL {
    margin-top: 24px;
    border: 1px solid #D8D8D8;
  }

  .inv1 {
    width: 50%;
    text-align: left;
    padding-left: 20px;

    > span {
      padding-left: 50px;
    }
  }

  .inv2 {
    width: 15%;

  }

  .inv3 {
    width: 15%;
  }

  .inv4 {
    width: 20%;
  }

  .inv1 > .det {
    width: calc(100% - 40px);
    justify-content: space-between;
    text-align: left;
    padding: 10px 20px 10px 0;
    border-bottom: 1px solid #D8D8D8;

    .inv1Img {
      width: 38px;
      height: 38px;
      margin-right: 12px;
    }

    &:last-child {
      border-bottom: none;
    }
  }

  .invA > .d1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 180px;
    border-left: 1px solid #D8D8D8;

    .btn {
      padding: 4px 10px;
      font-weight: 400;
      font-size: 14px;
      color: #1DCE5C;
      background: rgba(29, 206, 92, 0.12);
      border-radius: 4px 4px 4px 4px;
    }

    //.b1{
    //  color: #FD6A6A ;
    //  background: rgba(253,106,106,0.12);
    //}

    .btn1 {
      background: #fff;
      border-radius: 8px 8px 8px 8px;
      border: 1px solid #2278FF;
      color: #2278FF;
    }
  }
}

.paginationBox {
  justify-content: center;
  height: 100px;
}
</style>
