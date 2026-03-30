<template>
  <el-dialog
    v-model="visible"
    title=""
    width="80%"
    class="app-detail-dialog"
    append-to-body
    destroy-on-close
    :close-on-click-modal="true"
    :show-close="true"
  >
    <div class="dialog-content">
      <!-- 应用头部信息 -->
      <div class="app-header">
        <oort-img :src="detail.icon_url" class="app-icon" />
        <div class="app-info">
          <h2>{{ detail.app_name }}</h2>
          <p class="app-tagline">
            {{ detail.applabel }}
          </p>
          <div class="app-actions">
            <el-button type="primary" size="default">
              获取
            </el-button>
            <el-button type="default" size="default">
              免费咨询
            </el-button>
          </div>
        </div>
      </div>

      <div class="main-content">
        <!-- 标签页切换 -->
        <el-tabs v-model="activeTab" class="app-tabs">
          <el-tab-pane label="介绍" name="intro">
            <div class="intro-content">
              <p class="app-desc">
                &emsp;&emsp;{{ detail.intro }}
              </p>
              <div v-for="(value,index) in appImg" :key="index">
                <img :src="value" alt="" />
              </div>
              <p class="app-desc">
                &emsp;&emsp;{{ detail.description }}
              </p>
            </div>
          </el-tab-pane>
          <el-tab-pane label="付费方案" name="pricing">
            <div class="pricing-content">
              <el-table :data="appMeal" style="width: 100%" show-overflow-tooltip>
                <el-table-column prop="name" label="套餐名称" />
                <el-table-column prop="app_version" label="应用版本" />
                <el-table-column prop="pricing_type" label="定价类型">
                  <template #default="scope">
                    {{ scope.row.pricing_type === 1 ? '免费' : '收费' }}
                  </template>
                </el-table-column>
                <el-table-column prop="price_desc" label="套餐价格" />
                <el-table-column prop="remark" label="套餐说明" />
                <el-table-column fixed="right" label="操作">
                  <template #default="scope">
                    <el-button
                      link
                      type="primary"
                      size="small"
                      @click.prevent="mealDetail(scope.row)"
                    >
                      详情
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
        </el-tabs>

        <!-- 侧边栏信息 -->
        <div class="sidebar">
          <div class="sidebar-section">
            <h4>开发者</h4>
            <p>开发单位：{{ detail.develop_unit || '' }}</p>
            <p>电话：{{ detail.phone || '' }}</p>
            <p v-if="detail.address">
              企业地址：{{ detail.address || '' }}
            </p>
            <p v-if="detail.region">
              应用归属地：{{ detail.region }}
            </p>
            <a v-if="detail.helptext" :href="detail.helptext" target="_blank">说明文档</a>
          </div>
          <div class="sidebar-section">
            <h4>标签</h4>
            <div class="tags">
              <el-tag
                v-for="tag in detail.market_category_name"
                :key="tag"
                size="large"
                type="info"
              >
                {{ tag }}
              </el-tag>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppMealDetail v-model="showModal" :detail="appMealDetails" />
  </el-dialog>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { ElMessage } from 'element-plus'
import AppMealDetail from './AppMealDetail.vue'
import { appDetail, appMealList, appMealDetail } from '@/api'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  appId: {
    type: [String, Number],
    required: true
  }
})

const showModal = ref(false) // 控制弹窗显示/隐藏
const appImg = ref([])

const emit = defineEmits(['update:modelValue'])
const appMeal = ref([])
const appMealDetails = ref({})

const visible = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
})

const activeTab = ref('intro')
const detail = ref({})

watch(() => props.appId, (newId) => {
  if (newId && visible.value) {
    fetchAppDetail()
    getAppMealList()
  }
}, { immediate: true })

// 获取应用详情数据
const fetchAppDetail = async() => {
  try {
    const res = await appDetail({ app_id: props.appId })
    detail.value = res.data || {}
    appImg.value = JSON.parse(detail.value.screenshot_url)
  } catch (err) {
    ElMessage.error('获取应用详情失败，请稍后重试')
  }
}

const getAppMealList = async() => {
  try {
    const res = await appMealList({ app_id: props.appId })
    appMeal.value = res.data.list
  } catch (err) {
    console.error('获取应用套餐列表失败:', err)
  }
}

const mealDetail = async(value) => {
  const res = await appMealDetail({ app_id: props.appId, id: value.id })
  appMealDetails.value = res.data
  showModal.value = true
}

</script>

<style scoped lang="scss">
.app-detail-dialog {
  :deep(.el-dialog) {
    max-height: 90vh;
    overflow-y: auto;
    padding: 0;
  }

  :deep(.el-dialog__header) {
    padding: 16px 20px;
    border-bottom: 1px solid #eee;
  }

  :deep(.el-dialog__body) {
    padding: 0;
    margin: 0;
  }

  :deep(.el-dialog__close) {
    font-size: 20px;
  }
}

// 弹窗内容容器
.dialog-content {
  padding: 20px;
  height: 100%;
  min-height: 600px;
  width: 85%;
  margin: 0 auto;
}

.main-content{
  display: flex;
  justify-content: flex-start;
  gap: 70px;
}

// 应用头部
.app-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;

  .app-icon {
    height: 80px;
    width: 80px;
    border-radius: 8px;
  }

  .app-info {
    flex: 1;

    h2 {
      margin: 0;
      font-size: 24px;
      font-weight: 600;
    }

    .app-tagline {
      color: #666;
      margin: 0 0 8px;
      font-size: 14px;
    }

    .app-actions {
      display: flex;
      gap: 10px;
    }
  }
}

// 标签页样式
.app-tabs {
  grid-column: 1;

  :deep(.el-tabs__header) {
    margin: 0 0 16px 0;
    border-bottom: 1px solid #eee;
  }

  :deep(.el-tabs__nav-wrap) {
    padding-left: 4px;
  }

  :deep(.el-tabs__item) {
    padding: 0 16px;
    height: 40px;
    line-height: 40px;
  }

  :deep(.el-tabs__item.is-active) {
    color: #2278FF;
  }

  :deep(.el-tabs__active-bar) {
    background-color: #2278FF;
  }
}

// 介绍页内容
.intro-content {
  img{
    width: 800px;
    height: auto;
    margin-bottom: 20px;
  }
  .app-desc {
    width: 800px;
    font-size: 18px;
    color: #333;
    line-height: 1.6;
    margin: 0 0 20px;
  }

  .app-features {
    margin: 0 0 20px;
    padding-left: 20px;
    color: #555;
    font-size: 14px;

    li {
      margin: 4px 0;
    }
  }

  .video-section {
    margin: 20px 0;

    .app-video {
      width: 100%;
      border-radius: 8px;
      max-height: 400px;
    }
  }

  .feature-modules {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 20px;

    .module {
      h3 {
        margin: 0 0 8px;
        font-size: 16px;
        font-weight: 600;
      }

      .module-img {
        width: 100%;
        border-radius: 4px;
        margin-bottom: 8px;
      }

      p {
        color: #666;
        font-size: 14px;
        line-height: 1.5;
      }
    }
  }
}

// 付费方案页样式
.pricing-content {
  width: 800px;
  .pricing-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    margin-top: 16px;

    .pricing-item {
      padding: 16px;
      border: 1px solid #eee;
      border-radius: 8px;
      text-align: center;

      h4 {
        margin: 0 0 8px;
        font-size: 16px;
      }

      .price {
        color: #2278FF;
        font-size: 18px;
        font-weight: 600;
        margin: 8px 0;
      }

      .plan-features {
        text-align: left;
        padding-left: 16px;
        margin: 12px 0;
        font-size: 14px;
        color: #666;

        li {
          margin: 4px 0;
        }
      }
    }
  }
}

// 侧边栏样式
.sidebar {
  grid-column: 2;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .sidebar-section {
    h4 {
      margin: 0 0 12px;
      font-size: 16px;
      font-weight: 600;
    }

    p {
      margin-bottom: 5px;
      color: #333;
      font-size: 14px;
    }

    a {
      color: #2278FF;
      text-decoration: none;
      font-size: 14px;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
  }
}

// 响应式适配
@media (max-width: 992px) {
  .dialog-content {
    grid-template-columns: 1fr;
  }

  .sidebar {
    grid-column: 1;
    grid-row: 3;
    margin-top: 20px;
  }

  .feature-modules {
    grid-template-columns: 1fr !important;
  }
}

:deep(.el-popper.is-dark) {
  max-width: 400px !important;
  padding: 6px 10px !important;
}

:deep(.el-table .el-table__row){
  height: 50px;
}

</style>
