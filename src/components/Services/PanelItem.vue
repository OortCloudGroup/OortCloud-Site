<template>
  <div class="item">
    <div class="item_content">
      <div v-if="logo" class="item_content_header">
        <Image :src="logo" />
        <h3>{{ name }}</h3>
      </div>
      <h3 v-else class="item_content_title">{{ name }}</h3>
      <p class="item_content_desc">{{ content.desc }}</p>
      <div class="item_content_btn">
        <n-button
          v-for="button in content.buttons"
          :key="button.name"
          :ghost="button.name !== '立即购买'"
          :color="button.name === '了解更多' ? 'rgba(5,18,97,1)' : '#F93E3E'"
          size="large"
          @click="goto(button)"
        >
          {{ button.name }}
        </n-button>
      </div>
    </div>
    <div class="item_cover">
      <Image :src="content.cover" />
    </div>
  </div>
</template>

<script setup>
import { NButton } from 'naive-ui';

const router = useRouter()

defineProps({
  name: {
    type: String,
    required: true
  },
  content: {
    type: Object,
    requried: true
  },
  logo: {
    type: String,
    default: ''
  }
})

const goto = (data) => {
  if (data.link) {
    if (data.link.includes('http')) {
      window.open(data.link, '_blank')
    } else {
      router.push(data.link)
    }
  }
}
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
    &_header {
      display: flex;
      align-items: center;
      column-gap: 16px;
      font-size: 24px;
      color: #051261;
      font-weight: 600;
      img {
        width: 32px;
        height: 32px;
      }
    }
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
    &_btn {
      display: flex;
      column-gap: 16px;
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
