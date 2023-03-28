<template>
  <div class="panel_header">
    <span class="panel_header_title">{{ title }}</span>
    <span>{{ info }}</span>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  info: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.panel {
  &_header {
    display: flex;
    flex-direction: column;
    align-items: center;
    &_title {
      margin-bottom: 12px;
      font-size: 30px;
      line-height: 36px;
      font-weight: 600;
    }
  }
}
</style>