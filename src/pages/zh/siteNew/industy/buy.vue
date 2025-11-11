<template>
  <div class="home_page buyPage">
    <div class="platTop w1380">
      <div class="VLStream">
        选择应用
      </div>
      <el-input
        v-model="value"
        :prefix-icon="Search"
        class="bottom_pro_address"
        placeholder="输入关键字搜索应用"
      />
    </div>
    <div class="flexRowAC buyAppsOut">
      <div style="flex: 1;">
        <!-- 循环渲染所有应用组 -->
        <div v-for="(group, groupIndex) in appGroups" :key="groupIndex" class="buyAppsList">
          <el-checkbox
            v-model="group.checkAll"
            class="elCheckbox_all"
            :indeterminate="group.isIndeterminate"
            @change="handleGroupCheckAllChange(group, $event)"
          >
            <div class="buyAppsOut_t flexRowAC">
              <img class="buyAppsOut_t_img" :src="group.img" alt="" />
              {{ group.t }}
            </div>
          </el-checkbox>
          <el-checkbox-group
            v-model="group.checkedItems"
            class="priceIconBox"
            @change="handleGroupItemChange(group)"
          >
            <el-checkbox
              v-for="(item, itemIndex) in group.child"
              :key="itemIndex"
              :label="item.t"
              :value="item"
            >
              <div class="flexRowAC priceIconIt">
                <img class="priceImg" :src="item.img" alt="" />
                <div class="priceTi">
                  {{ item.t }}
                </div>
              </div>
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="buyApps">
        <!-- 计算所有选中项总数 -->
        <div class="buyApps_t">
          已选择 {{ getAllCheckedItems().length }} Apps
        </div>

        <!-- 显示所有选中项 -->
        <div
          v-for="(item, i) in getAllCheckedItems()"
          :key="i"
        >
          <div class="buyAppsOut_t flexRowAC t">
            <img class="buyAppsOut_t_img" :src="item.img" alt="" />
            {{ item.t }}
          </div>
        </div>

        <div
          :class="{opa: !getAllCheckedItems().length}"
          class="buyBtn flexRowAC"
          @click="buyClick()"
        >
          立即购买
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import price_c1 from '@/assets/software/price_c1.png'
import price_c2 from '@/assets/software/price_c2.png'
import price_c3 from '@/assets/software/price_c3.png'
import price_c4 from '@/assets/software/price_c4.png'
import price_c1_1 from '@/assets/software/price_c1_1.png'
import price_c1_2 from '@/assets/software/price_c1_2.png'
import price_c1_3 from '@/assets/software/price_c1_3.png'
import price_c1_4 from '@/assets/software/price_c1_4.png'
import price_c1_5 from '@/assets/software/price_c1_5.png'
import price_c1_6 from '@/assets/software/price_c1_6.png'
import price_c2_1 from '@/assets/software/price_c2_1.png'
definePageMeta({
  layout: 'site-new'
})

const appGroups = ref([
  {
    t: '个人效率工具',
    img: price_c1,
    child: [
      { t: '云盘', img: price_c1_1 },
      { t: '云相册', img: price_c1_2 },
      { t: '云文档', img: price_c1_3 },
      { t: '云清单', img: price_c1_4 },
      { t: '云备忘录', img: price_c1_5 },
      { t: '电子邮件', img: price_c1_6 },
      { t: '移动视频', img: price_c1_6 }
    ],
    checkAll: false,
    isIndeterminate: true,
    checkedItems: []
  },
  {
    t: '培训学习',
    img: price_c2,
    child: [
      { t: '云课堂', img: price_c2_1 },
      { t: '知识论坛', img: price_c1_2 },
      { t: '知识库', img: price_c1_3 },
      { t: '文档管理', img: price_c1_4 },
      { t: '问题反馈', img: price_c1_5 },
      { t: '博客', img: price_c1_6 }
    ],
    checkAll: false,
    isIndeterminate: true,
    checkedItems: []
  },
  {
    t: '指挥调度',
    img: price_c3,
    child: [
      { t: '可视化对讲', img: price_c2_1 },
      { t: 'WorkUP Meet', img: price_c1_2 },
      { t: '智慧会议室', img: price_c1_3 },
      { t: '巡查任务', img: price_c1_4 },
      { t: '人力资源', img: price_c1_5 },
      { t: '联合通信', img: price_c1_6 }
    ],
    checkAll: false,
    isIndeterminate: true,
    checkedItems: []
  },
  {
    t: '行政智慧后勤',
    img: price_c4,
    child: [
      { t: '线上商城', img: price_c2_1 },
      { t: '宿舍管理', img: price_c1_2 },
      { t: '物业维修', img: price_c1_3 },
      { t: '车辆管理', img: price_c1_4 },
      { t: '来访预约', img: price_c1_5 },
      { t: '个人中心', img: price_c1_6 }
    ],
    checkAll: false,
    isIndeterminate: true,
    checkedItems: []
  }
])

const value = ref('')

// 处理组全选事件
const handleGroupCheckAllChange = (group, val) => {
  group.checkedItems = val ? [...group.child] : []
  group.isIndeterminate = false
}

// 处理组内项选择变化
const handleGroupItemChange = (group) => {
  const checkedCount = group.checkedItems.length
  group.checkAll = checkedCount === group.child.length
  group.isIndeterminate = checkedCount > 0 && checkedCount < group.child.length
}

// 获取所有选中项
const getAllCheckedItems = () => {
  return appGroups.value.flatMap(group => group.checkedItems)
}

// 立即购买
const buyClick = () => {
  if (!getAllCheckedItems().length) return false
  window.open('http://oort.oortcloudsmart.com:23410/bus/apaas-web/console_manage/index.html', '_blank')
}
</script>

<style scoped lang="scss">
.buyPage {
  position: relative;
  background-color: #f7f7f7;
}

.w1380 {
  width: 1380px;
  margin: 0 auto;
}

.buyAppsOut {
  padding: 0 160px 100px;
  align-items: flex-start;

  .buyAppsList {
    flex: 1;
    margin-bottom: 100px;
  }

  .elCheckbox_all{
    padding-bottom: 20px;
  }
}

.buyAppsOut_t {
  font-weight: 700;
  font-size: 20px;
  color: #3D3D3D;
  line-height: 24px;
  gap: 8px;

  .buyAppsOut_t_img{
    width: 32px;
    height: 32px;
  }

  &.t {
    padding-bottom: 20px;
  }
}

.buyApps {
  margin-top: 44px;
  background-color: #fff;
  width: 420px;
  padding: 28px;
  flex-shrink: 0;
  min-height: 200px;

  .buyApps_t {
    padding-bottom: 20px;
    font-weight: 700;
    font-size: 28px;
    color: #3D3D3D;
    line-height: 42px;
  }
}

.platTop {
  text-align: center;
  padding: 110px 0;

  .VLStream {
    color: #333333;
    font-weight: bold;
    font-size: 78px;
    padding: 8px 0;
    position: relative;
  }

  :deep(.el-input) {
    height: 78px;
    box-shadow: 0px 8px 30px 0px rgba(34, 120, 255, 0.06);
    border-radius: 24px 24px 24px 24px;
    font-size: 28px;

    .el-input__wrapper {
      padding-left: 26px;
    }
  }
}

// 立即购买
.buyBtn{
  cursor: pointer;
  margin-top: 20px;
  justify-content: center;
  color: #FFFFFF;
  background: #2278FF;
  height: 72px;
  border-radius: 8px 8px 8px 8px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  &.opa {
    opacity: .5;
    cursor: not-allowed;
  }
}

// 个人效率工具
:deep(.priceIconBox ) {
  .el-checkbox{
    width: calc(25% - 60px);
    background-color: #fff;
    padding: 10px ;
    margin-bottom: 20px;
    height: 56px;
  }
  .priceIconIt {
    .priceImg {
      width: 56px;
      height: 56px;
      margin-right: 10px;
    }
  }

  .el-checkbox__input{
    position: absolute;
    right: 20px;
  }
}
</style>
