<template>
  <div class="info">
    <div class="info_left">
      <p class="icon_name"><img :src="logo"><span>{{ name }}</span></p>
      <p class="title">{{ title }}</p>
      
      <div class="other">
        <slot name="intro" />

        <p>{{ excerpt }}</p>

        <slot name="desc" />
      </div>

      <div class="review_button">
        <p v-for="(item, index) in buttons" :key="index">
          <a v-if="item.link" :href="item.link" target="_blank">{{ item.name  }}</a>
          <n-popover v-else-if="item.img" trigger="hover" :show-arrow="false">
            <template #trigger>
              <a>{{ item.name }}</a>
            </template>
            <img :src="item.img" style="width: 160px; height: 160px;">
          </n-popover>
          <a v-else>{{ item.name  }}<img :src="item.icon"></a>
        </p>
      </div>
    </div>
    <div v-if="isSwiper" class="info_right">
      <div  class="card-outer">
        <div class="carousel">
          <n-carousel autoplay draggable>
            <img
              v-for="(item, index) in swipes"
              :key="index"
              class="carousel-img"
              :src="item"
            >
          </n-carousel>
        </div>
      </div>
    </div>
    <div v-else class="info_right_img">
      <img :src="swipes[0]" style="width: 100%; height: 100%; object-fit: contain;">
    </div>
  </div>
</template>

<script setup>
import { NCarousel, NPopover } from 'naive-ui';

defineProps({
  logo: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: true
  },
  buttons: {
    type: Array,
    default: null,
    required: true
  },
  swipes: {
    type: Array,
    default: null,
    required: true
  },
  isSwiper: {
    type: Boolean,
    default: true
  }
})
</script>

<style lang="scss" scoped>
.info {
  padding-top: 120px;
  padding-bottom: 64px;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.6) 65%,
    rgba(218, 233, 255, 0.27) 100%
  );
  &_left {
    padding: 12px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: border-box;
    // min-height: 345px;
    .icon_name {
      margin: 20px 0;
      display: flex;
      align-items: center;
      font-size: 24px;
      color: #1f3f74;
      font-weight: 600;
      img {
        width: 24px;
        height: 24px;
      }
    }
    .title {
      margin: 10px 0;
      font-size: 42px;
      color: #1f3f74;
      letter-spacing: 4.06px;
      font-weight: 700;
    }
    .other {
      p {
        margin: 20px 0;
        width: 511px;
        font-size: 14px;
        color: #717781;
        letter-spacing: 1.35px;
        line-height: 22px;
        font-weight: 500;
      }
    }
    p {
      &:nth-of-type(6) {
        margin: 20px 0;
        width: 511px;
        font-size: 14px;
        color: #717781;
        letter-spacing: 1.35px;
        line-height: 22px;
        font-weight: 500;
      }
    }
    .review_button {
      display: flex;
      column-gap: 15px;
      p {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 163px;
        padding: 15px ;
        cursor: pointer;
        font-size: 20px;
        letter-spacing: 2.22px;
        font-weight: 700;
        border: 1px solid #ec2020;
        box-sizing: border-box;
        a {
          color: #ed2121 !important;
          text-decoration: none;
        }
        img {
          padding-top: 2px;
          width: 24px;
          height: 16px;
        }
        &:first-child {
          color: #ffffff;
          background-image: linear-gradient(90deg, #ec2020 0%, #fc4343 100%);
          a {
            color: #fff !important
          }
        }
      }
    }
  }
  &_right {
    // padding-top: 120px;
    margin-left: 200px;
    &_img {
      margin-left: 200px;
      width: 480px;
      height: 364px;
    }
    .card-outer {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 480px;
      height: 364px;
      background: #f1f3ff;
      border-radius: 10px;
    }
    .card-inner {
      width: 460px;
      height: 345px;
      background: #ffffff;
      border-radius: 6.13px;
    }
    .carousel {
      width: calc(100% - 16px);
      height: calc(100% - 16px);
      &-img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>