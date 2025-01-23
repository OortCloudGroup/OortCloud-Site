<template>
  <div class="personalPage_sub">
    <div class="menuCont_t">
      {{ props.title }}
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
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(['title'])
let isAct = ref(0)
let arr1 = ref([])
let arr2 = ref([])
let isAct1 = ref(1)
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

.addressPer {
  flex-wrap: wrap;
  padding-top: 30px;
  gap: 12px;

  .personalListAdd {
    width: 88px;
    height: 88px;
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
</style>
