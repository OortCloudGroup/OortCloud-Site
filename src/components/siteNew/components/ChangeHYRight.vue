<template>
  <div v-loading="loading" class="change-hy-right">
    <template v-for="group in groups" :key="group.key">
      <section v-if="group.list.length" class="industry-group">
        <div class="answer_group_title">
          <span />
          <span>{{ group.title }}</span>
        </div>
        <div class="industry-grid">
          <article
            v-for="item in group.list"
            :key="item.industry_id"
            class="industry-card"
            :class="{ selected: item.industry_id === selectedId }"
          >
            <div class="card-header">
              <div class="card-icon">
                <img v-if="item.logo" :src="item.logo" alt="" />
                <el-icon v-else>
                  <Grid />
                </el-icon>
              </div>
              <div class="card-title" :title="item.name">
                {{ item.name }}
              </div>
            </div>
            <div class="card-row card-homepage" :title="item.homepageUrl">
              {{ item.homepageUrl }}
            </div>
            <div class="card-row">
              <span>说明：</span>{{ item.remarks || '--' }}
            </div>
            <div class="card-meta">
              <div v-if="item.createdByName">
                <el-icon><User /></el-icon>
                <span>创建人：{{ item.createdByName }}</span>
              </div>
              <div v-if="item.createdAt">
                <el-icon><Clock /></el-icon>
                <span>创建时间：{{ item.createdAt }}</span>
              </div>
            </div>
            <div class="card-action">
              <el-button
                :type="item.industry_id === selectedId ? 'primary' : 'default'"
                :disabled="item.industry_id === selectedId || saving"
                @click="selectIndustry(item, group.type)"
              >
                <el-icon><Check /></el-icon>
                {{ item.industry_id === selectedId ? '当前生效' : '设为当前生效' }}
              </el-button>
            </div>
          </article>
        </div>
      </section>
    </template>
    <el-empty v-if="!loading && !hasConfig" description="当前租户未配置相关配置" />
    <div class="dialog-footer">
      <el-button @click="emits('closeDialog')">
        关闭
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { Check, Clock, Grid, User } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

import { getLastIndustry, getMyIndustryList, saveLastIndustry } from '@/api/modules/industryScene'
import { buildIndustryHomepageUrl, getIndustryHomepageUrl } from '@/utils/industryScene'

const props = defineProps({
  accessToken: { type: String, default: '' },
  tenantId: { type: String, default: '' },
  userInfo: { type: Object, default: () => ({}) }
})
const emits = defineEmits(['closeDialog'])
const industryConfig = ref([])
const sceneConfig = ref([])
const functionConfig = ref([])
const selectedId = ref('')
const loading = ref(false)
const saving = ref(false)
const auth = computed(() => ({ accessToken: props.accessToken, tenantId: props.tenantId }))
const groups = computed(() => [
  { key: 'industry', title: '行业', list: industryConfig.value, type: 1 },
  { key: 'scene', title: '场景', list: sceneConfig.value, type: 2 },
  { key: 'function', title: '职能', list: functionConfig.value, type: 3 }
])
const hasConfig = computed(() => groups.value.some(group => group.list.length > 0))

/** 统一接口中的历史字段命名。 */
const normalizeItem = item => ({
  id: item?.id,
  industry_id: item?.industry_id,
  name: item?.name || item?.industry_name || '',
  homepageUrl: getIndustryHomepageUrl(item),
  remarks: item?.remarks || '',
  logo: item?.logo || '',
  createdByName: item?.created_by_name || item?.createdByName || '',
  createdAt: item?.created_at || item?.createdAt || ''
})

/** 保存当前场景并跳转到对应首页。 */
const selectIndustry = async(item, type) => {
  saving.value = true
  try {
    const res = await saveLastIndustry(auth.value, item.industry_id, type)
    if (res.code !== 200) {
      ElMessage.error(res.msg || '切换场景失败')
      return
    }
    selectedId.value = item.industry_id
    const homepageUrl = buildIndustryHomepageUrl(item.homepageUrl)
    if (homepageUrl) {
      window.location.href = homepageUrl
      return
    }
    ElMessage.success('场景切换成功')
    emits('closeDialog')
  } catch (error) {
    ElMessage.error('切换场景失败，请稍后重试')
  } finally {
    saving.value = false
  }
}

/** 加载可选配置与当前生效场景。 */
const loadIndustryConfig = async() => {
  loading.value = true
  try {
    const listRes = await getMyIndustryList(auth.value)
    if (listRes.code !== 200) throw new Error(listRes.msg || '获取场景列表失败')
    const list = listRes.data?.list || {}
    industryConfig.value = (list.hyConfig || []).map(normalizeItem)
    sceneConfig.value = (list.cjConfig || []).map(normalizeItem)
    functionConfig.value = (list.znConfig || []).map(normalizeItem)
    const entityId = props.userInfo?.user_id || props.userInfo?.userId || ''
    const selectedRes = await getLastIndustry(auth.value, entityId)
    if (selectedRes.code === 200) selectedId.value = selectedRes.data?.industry_id || ''
  } catch (error) {
    ElMessage.error(error.message || '获取场景配置失败')
  } finally {
    loading.value = false
  }
}

onMounted(loadIndustryConfig)
</script>

<style lang="scss" scoped>
.change-hy-right {
  min-height: 220PX;
}

.answer_group_title {
  display: flex;
  align-items: center;
  margin: 0 0 12PX;

  span:first-child {
    width: 4PX;
    height: 20PX;
    margin-right: 6PX;
    background-color: var(--el-color-primary);
  }

  span:last-child {
    color: #333;
    font-size: 20PX;
    font-weight: 600;
  }
}

.industry-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10PX;
  padding-bottom: 20PX;
}

.industry-card {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  min-width: 0;
  padding: 20PX 24PX 24PX;
  overflow: hidden;
  background: #fff;
  border: 1PX solid #f0f0f0;
  border-radius: 8PX;
  box-shadow: 0 2PX 2PX rgba(0, 0, 0, 0.05);
  transition: border-color 0.3s ease;

  &:hover,
  &.selected {
    border-color: var(--el-color-primary);
  }
}

.card-header,
.card-meta > div {
  display: flex;
  align-items: center;
  gap: 8PX;
}

.card-header {
  margin-bottom: 12PX;
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40PX;
  height: 40PX;
  flex-shrink: 0;
  color: var(--el-color-primary);
  font-size: 32PX;

  img {
    width: 40PX;
    height: 40PX;
    object-fit: contain;
  }
}

.card-title,
.card-row {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-title {
  color: #333;
  font-size: 16PX;
  font-weight: 600;
}

.card-row,
.card-meta {
  color: #999;
  font-size: 13PX;
  line-height: 22PX;
}

.card-homepage {
  margin-bottom: 8PX;
}

.card-meta {
  display: flex;
  flex-direction: column;
  gap: 6PX;
  min-height: 50PX;
  margin: 8PX 0 20PX;
}

.card-action {
  display: flex;
  justify-content: center;
  margin-top: auto;

  .el-button {
    width: calc(100% - 48PX);
    height: 36PX;
    border-radius: 18PX;
  }
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  padding-top: 12PX;
}

@media (max-width: 1200px) {
  .industry-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
