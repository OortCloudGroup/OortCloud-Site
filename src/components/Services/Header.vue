<template>
  <div class="header">
    <div class="header_primary">
      <img class="header_primary_logo" :src="logo">
      <h1 class="header_primary_title">{{ name }}</h1>
    </div>
    <div class="header_info">
      <h6 class="header_info_text">{{ desc }}</h6>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  logo: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.header {
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  &_primary {
    display: flex;
    align-items: center;
    column-gap: 22px;
    &_logo {
      width: 54px;
      object-fit: contain;
    }
    &_title {
      font-size: 46px;
      color: #051261;
      letter-spacing: 4.5px;
    }
  }
  &_info {
    margin-top: 18px;
    &_text {
      font-size: 16px;
      color: #999999;
      letter-spacing: 1.5px;
    }
  }
}
</style>