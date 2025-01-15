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
      <div v-if="iact===6" class="personalrR menuCont">
        <div class="menuCont_t">
          个人地址本
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
let iact = ref(0)
let isAct = ref(0)
let isAct1 = ref(1)
let value = ref('')
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

  .d1 {
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

    .detailsInfoFrom_t{
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
