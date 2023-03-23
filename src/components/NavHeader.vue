<template>
  <div class="header">
    <div class="header_logo">
      <img src="@/assets/img/logo_white.png" />
    </div>
    <div class="header_menu">
      <ul class="header_tabs">
        <li :class="{'li_active': activeIndex === '/' }" @click="handleSelect('/')">首页</li>
        <li :class="{'li_active': activeIndex === '/product' }" @click="handleSelect('/product')">软件产品</li>
        <li :class="{'li_active': activeIndex ==='/services' }" @click="handleSelect('/services')">专业服务</li>
        <li :class="{'li_active': activeIndex ==='/news' }" @click="handleSelect('/news')">新闻动态</li>
        <li :class="{'li_active': activeIndex === '/about' }" @click="handleSelect('/about')">关于我们</li>
      </ul>
    </div>
    <div class="header_other">
      <img src="@/assets/img/dashboard.png" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const activeIndex = ref(route.path)
const router = useRouter()
function handleSelect(path: string) {
  activeIndex.value = path
  router.push(path)
}
</script>

<style scoped lang="scss">

.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 64px;
  background-color: #fff;
  box-shadow: 0 0.5rem 1rem 0 rgba(105, 123, 140, 0.1);
  &_logo {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: auto;
      height: 50px;
    }
  }
  &_menu {
    flex: 1;
  }
  &_other {
    width: 10%;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    img {
      width: auto;
      height: 40px;
    }
  }
}

.header_tabs {
    list-style:none;
    height: 98%;
    padding: 0px;
    margin: 0px;
    display: flex;
    li {
      margin: 0 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 120px;
      color: #909399;
      height: 100%;
      color: #000;
      font-size: 20px;
      text-align: center;
      background-color: #fff;
      &::after {
        content: "";
        width: 0;
        height: 2.5px;
        background-color: #1856a6;
        position: absolute;
        left: 100%;
        bottom: 0;
        transition: all .4s;
      }
      &:hover {
        color: #1856a6;
        &::after {
          width: 100%;
          left: 0;
          transition-delay: 0.1s;
        }
        & ~ li::after {
          left: 0;
        }
      }
    }
  }

.li_active {
  color: #1856a6!important;
  &::after {
    content: "";
    width: 100%!important;;
    height: 2.5px!important;;
    background-color: #1856a6!important;;
    position: absolute;
    left: 0!important;;
    bottom: 0!important;;
  }
}

</style>