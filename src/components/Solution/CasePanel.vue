<template>
  <div class="panel">
    <h2 class="panel_title">客户案例</h2>

    <div class="panel_content">
      <Image v-for="(item, index) in data" :key="index" :src="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  data: {
    type: Array<string>,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.panel {
  padding: 60px 0px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1280px;
  box-sizing: border-box;
  &_title {
    margin-top: 60px;
    font-size: 30px;
    text-align: center;
  }
  &_content {
    padding: 30px;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 60px;
    max-width: 1280px;
    box-sizing: border-box;
    img {
      width: 140px;
      height: 40px;
      transition: .5s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}
</style>