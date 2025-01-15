<template>
  <div class="personalPageOut">
    <div class="personalPage flexRowAC">
      <div class="personalL menuBox">
        <div v-for="(item,i) in arr" :key="i" class="menuItem flexRowAC">
          <div class="menuImg" />
          {{ item.t }}
        </div>
      </div>
      <div class="personalrR menuCont">
        <div class="menuCont_t">
          个人地址本
        </div>
        <div class="addressBox flexRowAC">
          <div class="addressOpe">
            <div class="flexRowAC addressOpe_c">
              <div class="addressOpe_c_t flexRowAC">
                <div class="icon" />
                编辑
              </div>
              <div class="addressOpe_c_t flexRowAC">
                <div class="icon" />
                新增
              </div>
              <div class="addressOpe_c_t flexRowAC" style="color: red">
                <div class="icon" />
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
              <div class="del" />
              <div class="avatar" />
              <div class="d1">
                {{ item['i'] }}李辉梦 18270931339
              </div>
              <div class="d2">
                市公安局｜指挥中心｜指挥一处 二级警长
              </div>
            </div>
            <div class="personalList p1 flexRowAC" style="justify-content: center">
              <div class="personalListAdd" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let arr = ref([])
let arr1 = ref([])
let arr2 = ref([])
let isAct = ref(0)
let isAct1 = ref(1)
arr.value = [
  { t: '个人信息', img: '' },
  { t: '安全性', img: '' },
  { t: '密码安全', img: '' },
  { t: '我的订单', img: '' },
  { t: '发票', img: '' },
  { t: '常用意见', img: '' },
  { t: '个人地址本', img: '' },
  { t: '标签', img: '' }
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
    background-color: #fff;
  }

  .personalrR {
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
  }

  .menuImg {
    width: 48px;
    height: 48px;
    background-color: #f7f7f7;
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
        background-color: #F7F7F7;
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
    background-color: #ccc;
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
    background-color: #fff;
  }
}
</style>
