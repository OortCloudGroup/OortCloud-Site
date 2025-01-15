<template>
  <div class="personalPageOut">
    <div class="personalPage flexRowAC">
      <div class="personalL menuBox">
        <div v-for="(item,i) in arr" :key="i" class="menuItem flexRowAC" :class="{act:i===iact}" @click="iact=i">
          <img class="menuImg" :src="item.img" alt="" />
          {{ item.t }}
        </div>
      </div>
      <div v-if="iact===0" class="personalrR menuCont">
        <div class="menuCont_t">
          个人信息
        </div>
        <div class="detailsInfo">
          <div class="detailsAva flexRowAC">
            <!--            <img class="detailsImg" src="@/assets/personalCenter/per_o1.png" alt="" />-->
            <div class="detailsImg" />
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
      <div v-if="iact===1" class="personalrR menuCont">
        <div class="menuCont_t">
          登陆方式
        </div>
        <div class="detailsInfo invoice safe flexRowAC">
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
      <div v-if="iact===4" class="personalrR menuCont">
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
      <div v-if="iact===6||iact===7" class="personalrR menuCont">
        <div v-if="iact===6" class="menuCont_t">
          个人地址本
        </div>
        <div v-else class="menuCont_t">
          标签
        </div>
        <div class="addressBox flexRowAC">
          <div class="addressOpe">
            <div class="flexRowAC addressOpe_c">
              <div class="addressOpe_c_t flexRowAC">
                <img class="icon" src="@/assets/personalCenter/per_o1.png" alt="" />
                编辑
              </div>
              <div class="addressOpe_c_t flexRowAC">
                <img class="icon" src="@/assets/personalCenter/per_o2.png" alt="" />
                新增
              </div>
              <div class="addressOpe_c_t flexRowAC" style="color: red">
                <img class="icon" src="@/assets/personalCenter/per_o3.png" alt="" />
                删除
              </div>
            </div>
            <div>
              <div
                v-for="(item,i) in arr1"
                :key="i"
                class="addressOpe_c_menu  flexRowAC"
                :class="{act:i===isAct}"
                @click="isAct=i"
              >
                {{ item.t }}
              </div>
            </div>
          </div>
          <div class="addressPer flexRowAC">
            <div
              v-for="(item,i) in arr2"
              :key="i"
              class="personalList flexRowAC"
              :class="{act:i===isAct1}"
              @click="isAct1=i"
            >
              <img class="del" src="@/assets/personalCenter/per_r1.png" alt="" />
              <div class="avatar" />
              <div class="d1">
                {{ item['i'] }}李辉梦 18270931339
              </div>
              <div class="d2">
                市公安局｜指挥中心｜指挥一处 二级警长
              </div>
            </div>
            <div class="personalList p1 flexRowAC" style="justify-content: center">
              <img class="personalListAdd" src="@/assets/personalCenter/per_r2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div v-if="iact===5" class="personalrR menuCont">
        <div class="menuCont_t">
          个人信息
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import per_l1 from '@/assets/personalCenter/per_l1.png'
import per_l2 from '@/assets/personalCenter/per_l2.png'
import per_l3 from '@/assets/personalCenter/per_l3.png'
import per_l4 from '@/assets/personalCenter/per_l4.png'
import per_l5 from '@/assets/personalCenter/per_l5.png'
import per_l6 from '@/assets/personalCenter/per_l6.png'
import per_l7 from '@/assets/personalCenter/per_l7.png'
import per_l8 from '@/assets/personalCenter/per_l8.png'

let arr = ref([])
let arr1 = ref([])
let arr2 = ref([])
let count = ref<number>(0)
let page = ref<Number>(1)
let pagesize = ref<Number>(10)
let isActInv = ref([])
let iact = ref(0)
let isAct = ref(0)
let isAct1 = ref(1)
let value = ref('')
const tableData = ref<any>([])
const activeName = ref('ac1')
arr.value = [
  { t: '个人信息', img: per_l1 },
  { t: '安全性', img: per_l2 },
  { t: '密码安全', img: per_l3 },
  { t: '我的订单', img: per_l4 },
  { t: '发票', img: per_l5 },
  { t: '常用意见', img: per_l6 },
  { t: '个人地址本', img: per_l7 },
  { t: '标签', img: per_l8 }
]
arr1.value = [
  { t: '警务部门', img: '' },
  { t: '警务部门', img: '' },
  { t: '警务部门', img: '' },
  { t: '警务部门', img: '' }
]
arr2.value = [
  { t: '警务部门', img: '' },
  { t: '警务部门', img: '' },
  { t: '警务部门', img: '' },
  { t: '警务部门', img: '' },
  { t: '警务部门', img: '' },
  { t: '警务部门', img: '' },
  { t: '警务部门', img: '' },
  { t: '警务部门', img: '' },
  { t: '警务部门', img: '' }
]
isActInv.value = [
  { t: '警务部门', img: '' },
  { t: '警务部门', img: '' },
  { t: '警务部门', img: '' }
]

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
let handleSizeChange = (val: number) => {
  pagesize.value = val
}
let handleCurrentChange = (val: number) => {
  page.value = val
}

</script>
<style lang="scss" scoped>
.personalPageOut {
  background-color: #F7F7F7;
  padding: 40px 0;
}

.personalPage {
  width: 1320px;
  margin: 0 auto;
  gap: 20px;
  align-items: flex-start;

  .personalL {
    width: 320px;
    flex-shrink: 0;
    border-radius: 20px;
    background-color: #fff;
  }

  .personalrR {
    border-radius: 20px;
    background-color: #fff;
    flex: 1;
  }
}

.menuBox {
  padding: 40px 16px;

  .menuItem {
    cursor: pointer;
    padding: 16px;
    gap: 16px;

    &.act {
      border-radius: 12px;
      background-color: #f7f7f7;
    }
  }

  .menuImg {
    width: 48px;
    height: 48px;
  }
}

.menuCont {
  padding: 32px;

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

.addressBox {
  align-items: flex-start;
  gap: 14px;

  .addressOpe {
    padding-top: 30px;
    width: 200px;
    flex-shrink: 0;
  }

  .addressOpe_c {
    padding-bottom: 20px;
    color: #2278FF;
    gap: 14px;

    .addressOpe_c_t {
      cursor: pointer;
      gap: 4px;

      .icon {
        width: 20px;
        height: 20px;
      }

    }
  }

  .addressOpe_c_menu {
    cursor: pointer;
    height: 48px;
    padding: 0 16px;
    border-radius: 8px 8px 8px 8px;

    &.act {
      color: #2278FF;
      background: rgba(34, 120, 255, 0.12);

    }
  }
}

.personalList {
  cursor: pointer;
  width: 190px;
  padding: 12px;
  height: 139px;
  background: #f7f7f7;
  border-radius: 12px 12px 12px 12px;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  position: relative;

  .avatar {
    border-radius: 50%;
    width: 48px;
    height: 48px;
    background-color: #ccc;
  }

  > .d1 {
    font-weight: 400;
    font-size: 14px;
    color: #333333;
  }

  .d2 {
    font-weight: 400;
    font-size: 12px;
    color: #999999;
  }

  &.act {
    color: #2278FF;
    background: rgba(34, 120, 255, 0.12);

    .del {
      display: block;
    }
  }

  .del {
    display: none;
    width: 24px;
    height: 24px;
    position: absolute;
    right: 10px;
    top: 10px;
  }
}

.addressPer {
  flex-wrap: wrap;
  padding-top: 30px;
  gap: 12px;

  .personalListAdd {
    width: 88px;
    height: 88px;
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

.invoice.detailsInfo.safe {
  gap: 20px;
  flex-wrap: wrap;

  .detailsAva {
    width: 380px;
  }

  .safeI {
    margin-right: 70px;
  }
}

.invoice.detailsInfo {
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
    >span{
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

:deep(.tenanat-tabs) {
  padding: 0 20px;

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

.paginationBox {
  justify-content: center;
  height: 100px;
}
</style>
