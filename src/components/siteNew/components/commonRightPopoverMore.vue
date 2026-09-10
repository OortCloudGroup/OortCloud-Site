<template>
  <div class="pover_right_more">
    <div v-if="hasIndustryConfig" class="pover_more_item" @click="changeIndustry">
      <div class="pover_more_item_title">
        <div>
          <img src="@/assets/navheader/popover_hy.png" />
          <span>
            <template v-if="selectedIndustryName">
              <span v-if="selectedIndustry?.set_type === 1">行业</span>
              <span v-if="selectedIndustry?.set_type === 2">场景</span>
              <span v-if="selectedIndustry?.set_type === 3">职能</span>
              <span>（{{ selectedIndustryName }}）</span>
            </template>
            <template v-else>场景选择</template>
          </span>
        </div>
        <el-icon><ArrowRightBold /></el-icon>
      </div>
    </div>
    <div class="pover_more_item" @click="emits('moreOpr', 'privacy')">
      <div class="pover_more_item_title">
        <div>
          <img src="@/assets/navheader/popover_yinsi.png" />
          <span>隐私政策</span>
        </div>
        <el-icon><ArrowRightBold /></el-icon>
      </div>
    </div>
    <div class="pover_more_item" @click="emits('moreOpr', 'switchAccount')">
      <div class="pover_more_item_title">
        <div>
          <img src="@/assets/navheader/prpover_switch.png" />
          <span>切换账号</span>
        </div>
        <el-icon><ArrowRightBold /></el-icon>
      </div>
    </div>
    <div class="pover_more_item" @click="emits('moreOpr', 'logout')">
      <div class="pover_more_item_title">
        <div>
          <img src="@/assets/navheader/popover_logout.png" />
          <span style="color: #FF3C3C;">退出登录</span>
        </div>
        <el-icon><ArrowRightBold /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { ArrowRightBold } from '@element-plus/icons-vue'

import { getLastIndustry, getMyIndustryList } from '@/api/modules/industryScene'

const emits = defineEmits(['moreOpr'])
const props = defineProps({
  accessToken: {
    type: String,
    default: ''
  },
  tenantId: {
    type: String,
    default: ''
  },
  userInfo: {
    type: Object,
    default: () => ({})
  }
})
const selectedIndustry = ref(null)
const hasIndustryConfig = ref(false)
const selectedIndustryName = computed(() => {
  return selectedIndustry.value?.industryName || selectedIndustry.value?.name || ''
})
const auth = computed(() => ({
  accessToken: props.accessToken,
  tenantId: props.tenantId
}))

const changeIndustry = () => {
  emits('moreOpr', 'changeHY')
}

/** 获取用户可选配置及当前生效场景。 */
const loadIndustryInfo = async() => {
  if (!props.accessToken) return
  try {
    const listRes = await getMyIndustryList(auth.value)
    if (listRes.code === 200) {
      const list = listRes.data?.list || {}
      hasIndustryConfig.value = [list.hyConfig, list.cjConfig, list.znConfig]
        .some(configList => Array.isArray(configList) && configList.length > 0)
    }
    const entityId = props.userInfo?.user_id || props.userInfo?.userId || ''
    const selectedRes = await getLastIndustry(auth.value, entityId)
    if (selectedRes.code === 200) {
      selectedIndustry.value = selectedRes.data
    }
  } catch {
    selectedIndustry.value = null
  }
}

onMounted(loadIndustryInfo)
</script>

<style lang="scss" scoped>
/* 说明：本项目 postcss-px-to-viewport 会将小写 px 转为 vw（1920 基准），
   弹层为固定尺寸浮层，使用大写 PX 保持像素不随视口缩放 */
.pover_right_more {
  border-radius: 4PX;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.pover_more_item:hover {
  background-color: #dde3ea;
}

.pover_more_item + .pover_more_item {
  border-top: 1PX solid #e3e9f0;
}

.pover_more_item {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 48PX;
  background-color: #EDF3F9;
  padding: 8PX 12PX;

  &:first-child {
    border-radius: 4PX 4PX 0 0;
  }

  &:last-child {
    border-radius: 0 0 4PX 4PX;
  }
}

.pover_more_item_title {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32PX;

  div {
    display: flex;
    align-items: center;

    img {
      width: 24PX;
      height: 24PX;
      margin-right: 8PX;
    }

    span {
      font-size: 16PX;
      color: #575656;
    }
  }
}

.el-icon {
  transition: transform 0.3s ease;
  cursor: pointer;
}
</style>
