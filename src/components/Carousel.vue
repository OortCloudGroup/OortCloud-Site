<template>
  <n-carousel
    show-arrow
    autoplay
    centered-slides
    dot-type="line"
    dot-placement="bottom"
    draggable
  >
    <div
      v-for="(item, index) in carouseList"
      :key="index"
      class="carousel-img container"
      :class="{'first_carouse': index ===0}"
      :style="'background-image:url('+ item.url+')'"
    >
      <div class="content">
        <div class="title">
          {{ item.title }}
        </div>
        <div class="desc">
          {{ item.desc }}
        </div>
        <div v-if="item.buttons && item.buttons.length > 0" class="button">
          <div v-for="(it, ind) in item.buttons" :key="ind" class="button_item">
            <a v-if="it.link && it.link.includes('http') && it.text !== '观看视频'" :href="it.link" target="_blank">{{ it.text }}</a>
            <router-link v-else-if="it.link && !it.link.includes('http')" :to="it.link">
              {{ it.text }}
            </router-link>
            <span v-else @click.stop="openModal(it)">{{ it.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </n-carousel>
  <teleport to="body">
    <n-modal v-model:show="showModal" title="观看视频" preset="dialog" :show-icon="false" style="width: 924px">
      <iframe height="486" width="864" allowfullscreen :src="videoUrl" frameborder="0" />
    </n-modal>
  </teleport>
</template>

<script setup lang="ts">
import { NCarousel, NModal } from 'naive-ui'
import { ref } from 'vue'

interface Carousel {
  url: any,
  title: string,
  desc: string,
  buttons: any[]
}

defineProps({
  carouseList: {
    type: Array<Carousel>,
    required: true
  }
})
const showModal = ref(false)
const videoUrl = ref('')

const openModal = (data: object) => {
  if (data.link) {
    if (data.text === '观看视频') {
      videoUrl.value = data.link
      showModal.value = true
    }
  }
}
</script>
<style scoped lang="scss">
.carousel-img {
  width: 100%;
  height: 100%;
  min-height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 100% 0;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 60%;
  color: #000;
  justify-content: center;
}
:deep(.n-dialog__icon) {
  display: none !important;
}
.title {
  margin: 8px;
  font-size: 28px;
}
.desc {
  margin: 8px;
  font-size: 18px;
  width: 50%;
}

.button {
  margin: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  &_item:nth-of-type(1) {
    border: 1px solid #fff;
    background: #ec2020;
    a {
      color: #fff !important;
    }
  }
  &_item:nth-of-type(1):hover {
    background: #ce1a1a;
  }
  &_item:hover {
    background: #f7f7f7;
  }
  &_item {
    cursor: pointer;
    margin: 0 10px;
    height: 46px;
    width: 122px;
    border: 1px solid #ec2020;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      color: #ed2121;
      font-weight: 600;
      font-size: 18px;
    }
    a {
      color: #ed2121;
      font-weight: 600;
      font-size: 18px;
      text-decoration: none;
    }
  }
}

.first_carouse {
  .content {
    color: #fff;
  }
}

</style>

<style>
  .n-carousel .n-carousel__arrow {
    background-color: rgba(0, 0, 0, 0.207)!important;
    font-size: 16px!important;
    width: 28px!important;
    height: 28px!important;

  }

  .n-carousel .n-carousel__dots.n-carousel__dots--line .n-carousel__dot {
    background-color: #33333300;
    width: 40px!important;
    height: 4px;
    border: 2px solid #d0d0d0;
    border-radius: 0px;
    margin: 0 5px;
  }

  .n-carousel.n-carousel--bottom .n-carousel__dots {
    bottom: 32px!important;
    left: 42%!important;
  }

  .n-carousel .n-carousel__dots.n-carousel__dots--line .n-carousel__dot.n-carousel__dot--active {
    border: 2px solid #f1f1f1;
  }

  .n-carousel .n-carousel__arrow svg {
    width: 16px!important;
    height: 16px!important;
  }

</style>
