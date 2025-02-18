<template>
  <div class="personalPage_Out">
    <div class="personalPage_sub">
      <div class="nav_status flexRowAC">
        <nuxt-link to="/zh/siteNew/personalCenter" class="nav_title">
          个人中心
        </nuxt-link>
        <div class="nav_title lth">
          /&nbsp;&nbsp;
          <span>我的订单</span>
        </div>
      </div>
      <div class="menuCont_t">
        我的订单
      </div>
      <div class="detailsInfo invoice">
        <div class="invoiceCBox">
          <el-tabs v-model="activeName" class="tenanat-tabs">
            <el-tab-pane label="全部订单" name="ac1" />
            <el-tab-pane label="待确认" name="ac2" />
            <el-tab-pane label="待付款" name="ac3" />
            <el-tab-pane label="待评价" name="ac4" />
            <el-tab-pane label="已完成" name="ac5" />
          </el-tabs>
          <div class="invoiceCont">
            <div v-for="(item,i) in isActInv" :key="i" class="invAL">
              <div class="flexRowAC invA b1">
                <div class="inv1 th1">
                  应用服务名{{ item['n'] }}
                </div>
                <div class="inv1 th2">
                  下单时间：2024-02-28 12:27:18
                </div>
                <div class="inv1">
                  订单号：135461349843168
                </div>
                <div class="inv1 th3">
                  待确认
                </div>
              </div>
              <div class="flexRowAC invA" style="height: 180px;">
                <div class="inv1 td2">
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
                <div class="inv1 td2 d2">
                  <div class="det flexRowAC">
                    ¥ 2911.19
                  </div>
                  <div class="det flexRowAC">
                    ¥ 2911.19
                  </div>
                  <div class="det flexRowAC">
                    ¥ 2911.19
                  </div>
                </div>
                <div class="inv1 td3 d1">
                  <div class="btn">
                    合同已生成
                  </div>
                  <div class="btn">
                    订单详情
                  </div>
                </div>
                <div class="inv1 d1 td4">
                  <div class="btn btn1">
                    确认合同
                  </div>
                  <div class="btn btn1">
                    取消订单
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'site-new'
})

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
.personalPage_Out {
  padding: 40px 0;
  width: 100%;
  background-color: #F7F7F7;
}

.personalPage_sub {
  border-radius: 12px;
  width: 1320px;
  margin: 0 auto;
  background-color: #fff;

  .menuCont_t {
    padding: 40px 20px 0;
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
  padding: 20px;

  :deep(.detailsInfoFrom) {
    padding: 40px 0;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}

.invoiceCont {
  .invA {
    text-align: center;
    justify-content: space-between;
    border-radius: 0px 0px 0px 0px;
    min-height: 180px;

    &.b1 {
      height: 46px;
      min-height: 46px;
      background: #F3F5FC;
    }
  }

  .invAL {
    margin-top: 24px;
    border: 1px solid #D8D8D8;
  }

  .inv1 {
    width: 25%;
    text-align: left;
    padding-left: 20px;

    > span {
      padding-left: 50px;
    }

    &.th1 {
      width: 20%;
    }

    &.th2, &.td2 {
      width: 30%;
    }

    &.td3 {
      width: 15%;
    }

    &.td4 {
      width: 25%;
    }

    &.th3 {
      text-align: center;
    }
  }

  .inv1 > .det {
    width: calc(100% - 40px);
    justify-content: space-between;
    text-align: left;
    height: 60px;
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

  // ¥ 2911.19
  .d2 {
    height: 100%;
    text-align: right;
    border-left: 1px solid #D8D8D8;

    > .det {
      font-weight: 700;
      font-size: 24px;
      color: #333333;
      justify-content: flex-end;
    }
  }

  .invA > .d1 {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-left: 1px solid #D8D8D8;

    .btn {
      cursor: pointer;
      padding: 4px 10px;
      font-weight: 400;
      font-size: 14px;
      color: #1DCE5C;
      background: rgba(29, 206, 92, 0.12);
      border-radius: 4px 4px 4px 4px;
    }

    .btn1 {
      cursor: pointer;
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

// nav
.nav_status {
  height: 60px;
  padding: 10px 0 0 20px;
  border-bottom: 1px solid hsla(0, 0%, 20%, 0.06);
  position: relative;

  &:before {
    content: '';
    width: 3px;
    height: 18px;
    background-color: #1A1A1A;
  }

  .nav_title {
    height: 40px;
    line-height: 40px;
    color: #333;
    margin-left: 12px;

    &.lth {
      color: #999;
    }
  }
}

// tabs
:deep(.tenanat-tabs) {
  padding: 0;

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
