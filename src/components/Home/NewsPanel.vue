<template>
  <div class="panel">
    <HomePanelHeader title="新闻中心" info="官方发布的最新动态或消息，为您提供第一手资讯"/>
    <div class="more">
      <n-button type="info" @click="toMoreNews">更多新闻</n-button>
    </div>
    <n-grid x-gap="24" y-gap="24" :cols="2" style="margin-top: 36px; padding: 0 48px; box-sizing: border-box;">
      <n-grid-item v-for="(item, index) in data" :key="index">
        <div class="item">
          <div>
            <img :src="'https://www.oortcloudsmart.com' + item.CoverImg.split('32610')[1]">
          </div>
          <div>
            <h3>{{ item.Title }}</h3>
            <p>{{ item.Time }}</p>
          </div>
        </div>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script setup>
import { NButton, NGrid, NGridItem } from 'naive-ui';

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
.item {
  display: flex;
  align-items: center;
  column-gap: 24px;
  img {
    width: 200px;
    height: 128px;
  }
}
</style>