<template>
  <div class="panel">
    <div class="panel_header" v-if="data.title">
      <img class="panel_header_logo" :src="data.logo">
      <h3 class="panel_header_title">{{ data.title }}</h3>
    </div>
    
    <n-grid x-gap="28" y-gap="12" :cols="3">
      <n-grid-item v-for="item in data.apps" :key="item.name">
        <NuxtLink :to="item.link" v-if="item.link" class="panel_item">
          <div class="panel_item_logo">
            <img :src="item.logo">
          </div>
          <div class="panel_item_info">
            <h5 class="panel_item_title">{{ item.name }}</h5>
            <n-ellipsis :line-clamp="2">
              {{ item.excerpt }}
            </n-ellipsis>
          </div>
        </NuxtLink>
        <div v-else class="panel_item">
          <div class="panel_item_logo">
            <img :src="item.logo">
          </div>
          <div class="panel_item_info">
            <h5 class="panel_item_title">{{ item.name }}</h5>
            <n-ellipsis :line-clamp="2">
              {{ item.excerpt }}
            </n-ellipsis>
          </div>
        </div>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script setup>
import { NGrid, NGridItem, NEllipsis } from 'naive-ui';

defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.panel {
  margin-bottom: 36px;
  width: 100%;
  &_header {
    padding: 0 16px;
    margin: 18px 0;
    display: flex;
    align-items: center;
    &_title {
      margin-left: 12px;
      font-size: 18px;
      color: #5378b7;
      font-weight: 400;
    }
    &_logo {
      width: 24px;
      height: 24px;
    }
  }
  &_item {
    display: flex;
    align-items: center;
    column-gap: 8px;
    height: 78px;
    padding: 0 16px;
    box-sizing: border-box;
    transition: .2s;
    cursor: pointer;
    &:hover {
      border-radius: 8px;
      background: rgba(0, 0, 0, 0.1);
    }
    &_logo {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      img {
        width: 48px;
        height: 48px;
      }
    }
    &_info {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
  }
}
:deep(.n-ellipsis) {
  font-size: 12px;
  color: #666666;
}
</style>