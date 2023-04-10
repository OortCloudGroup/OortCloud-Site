<template>
  <n-carousel 
    show-arrow
    autoplay
    centered-slides
    dot-type="line"
    dot-placement="bottom"
    draggable>
    <div  class="carousel-img container" :class="{'first_carouse': index ===0}" v-for="(item, index) in carouseList"
     :key="index"
     :style="'background-image:url(/oort/oort-site/'+ item.url+')'">
     <div class="content">
      <div class="title">{{ item.title }}</div>
      <div class="desc">{{ item.desc }}</div>
      <div class="button" v-if="item.buttons && item.buttons.length > 0">
        <div class="button_item" v-for="(it, ind) in item.buttons" :key="ind"><span>{{ it.text }}</span></div>
      </div>
     </div>
    </div>
  </n-carousel>
</template>

<script setup lang="ts">
import { NCarousel } from 'naive-ui'
import { Carousel } from '~/types'
defineProps({
  carouseList: {
    type: Array<Carousel>,
    required: true,
  },
})
</script>
<style scoped lang="scss">
.carousel-img {
  width: 100%;
  height: 100%;
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
    span {
      color: #fff;
    }
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
}
.n-carousel .n-carousel__dots.n-carousel__dots--line .n-carousel__dot {
  background-color:#00000050;
}

.n-carousel .n-carousel__dots.n-carousel__dots--line .n-carousel__dot.n-carousel__dot--active {
  background-color:#000000;
}
</style>