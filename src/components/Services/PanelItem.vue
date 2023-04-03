<template>
  <div class="item">
    <div class="item_content">
      <h3 class="item_content_title">{{ name }}</h3>
      <p class="item_content_desc">{{ content.desc }}</p>
      <n-button ghost color="rgba(5,18,97,1)" size="large">了解更多</n-button>
    </div>
    <div class="item_cover">
      <img :src="content.cover">
    </div>
  </div>
</template>

<script setup>
import { NButton } from 'naive-ui';

defineProps({
  name: {
    type: String,
    required: true
  },
  content: {
    type: Object,
    requried: true
  }
})
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  width: 100%;
  &_content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 24px;
    &_title {
      padding: 8px 0;
      font-size: 24px;
      color: #051261;
      font-weight: 600;
      background-image: linear-gradient(#2038EC, #2038EC);
      background-repeat: no-repeat;
      background-size: 44px 4px;
      background-position: bottom left;
      box-sizing: border-box;
    }
    &_desc {
      font-size: 14px;
      color: #051261;
    }
  }
  &_cover {
    flex: 1;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>