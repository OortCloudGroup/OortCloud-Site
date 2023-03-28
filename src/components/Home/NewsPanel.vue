<template>
  <div class="panel">
    <HomePanelHeader title="新闻中心" info="官方发布的最新动态或消息，为您提供第一手资讯"/>
    <div class="more">
      <n-button type="info" @click="toMoreNews">更多新闻</n-button>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui';

defineProps({
  data: {
    type: Array,
    required: true
  }
})

const router = useRouter()

const toMoreNews = () => {
  router.push('/news')
}
</script>

<style lang="scss" scoped>
.panel {
  padding: 60px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  box-sizing: border-box;
}
.more {
  margin-top: 24px;
}
</style>