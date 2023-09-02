<template>
  <div class="grid">
    <h2 class="grid_title">
      热门方案
    </h2>

    <n-grid x-gap="32" y-gap="32" :cols="2">
      <n-grid-item v-for="(item, index) in data" :key="item.title">
        <div class="grid_item" :style="[(index === 1 || index === 2) && blueBackground, (index === 3 || index === 4) && greenBackground]">
          <h3 class="grid_item_title">
            {{ item.title }}
          </h3>
          <p class="grid_item_content">
            {{ item.content }}
          </p>
          <Image v-if="item.cover" :src="item.cover" class="grid_item_cover" />
        </div>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script setup>
import { NGrid, NGridItem } from 'naive-ui'

defineProps({
  data: {
    type: Array,
    required: true
  }
})

const blueBackground = {
  backgroundImage: 'linear-gradient(135deg, #16c1e2 0%, #25b9eb 100%)'
}
const greenBackground = {
  backgroundImage: 'linear-gradient(135deg, #619ff9 0%, #016fff 100%)'
}
</script>

<style lang="scss" scoped>
.grid {
  padding: 60px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1280px;
  width: 100%;
  box-sizing: border-box;
  &_title {
    margin-bottom: 60px;
    font-size: 30px;
  }
  &_item {
    position: relative;
    padding: 0 28px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 170px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    transition: .3s;
    &:hover {
      box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.08), 0 3px 6px 0 rgba(0, 0, 0, 0.06), 0 5px 12px 4px rgba(0, 0, 0, 0.04);
    }
    &_title {
      font-size: 18px;
      margin-bottom: 12px;
    }
    &_cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }
}
</style>
