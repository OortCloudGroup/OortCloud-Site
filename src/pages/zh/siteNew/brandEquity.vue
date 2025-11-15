<template>
  <div class="home_page vls">
    <div class="box1">
      <div class="title">
        OortCloud 品牌资产
      </div>
    </div>
    <div class="box2">
      <div class="left">
        <div class="aside_nav">
          <div
            v-for="(value,i) in navArr"
            :key="i"
            class="nav_item"
            :class="{ active: activeIndex === i }"
            @click="handleScroll(i, value.targetId)"
          >
            <span class="nav_item_text">{{ value.text }}</span>
          </div>
        </div>
      </div>
      <div class="right">
        <div id="section1">
          1
        </div>
        <div id="section2">
          1
        </div>
        <div id="section3">
          1
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const activeIndex = ref(-1)
const navArr = ref([])
navArr.value = [

  { text: '标志', targetId: 'section1' },
  { text: '颜色', targetId: 'section2' },
  { text: '清单', targetId: 'section3' }
]

// 监听滚动事件，更新激活状态
const handleScrollActive = () => {
  // 获取当前滚动位置（考虑导航栏高度偏移）
  const scrollTop = window.scrollY + 110 // 与sticky的top值保持一致
  const navHeight = 82 // 导航栏高度，与滚动计算保持一致

  // 遍历导航项，找到当前可见区域
  navArr.value.forEach((item, index) => {
    const targetEl = document.getElementById(item.targetId)
    if (!targetEl) return

    // 获取目标元素的位置信息
    const { offsetTop, offsetHeight } = targetEl
    const elementTop = offsetTop - navHeight
    const elementBottom = elementTop + offsetHeight

    // 判断当前滚动位置是否在目标元素范围内
    if (scrollTop >= elementTop && scrollTop < elementBottom) {
      activeIndex.value = index
    }
  })
}

onMounted(() => {
  // 初始加载时触发一次，设置初始状态
  // handleScrollActive()
  // 监听滚动事件
  window.addEventListener('scroll', handleScrollActive)
})

onUnmounted(() => {
  // 组件卸载时移除事件监听
  window.removeEventListener('scroll', handleScrollActive)
})

const handleScroll = (index, targetId) => {
  // 更新激活状态
  activeIndex.value = index

  // 获取目标元素
  const targetEl = document.getElementById(targetId)
  if (!targetEl) return

  // 计算偏移量
  const navHeight = 150
  const offsetTop = targetEl.offsetTop - navHeight

  window.scrollTo({
    top: offsetTop,
    behavior: 'auto'
  })
}

definePageMeta({
  layout: 'site-new'
})

</script>

<style scoped lang="scss">
.home_page {
  position: relative;
}

.home_page.vls {
  background-color: #fff;
}

.w1380 {
  width: 1380px;
  margin: 0 auto;
}
.box1{
  background-color: #2278ff;
  padding: 48px 0 48px 262px;
}

.title{
  font-size: 48px;
  font-weight: 700;
  color: #fff;
}
.title2{
  font-size: 20px;
  font-weight: 400;
  color: #fff;
}
.title3{
  font-size: 30px;
  font-weight: 700;
}
.m20{
  margin-top: 20px;
}
.content{
  font-size: 16px;
  font-weight: 400;
  margin-left: 20px;
  margin-top: 20px;
  .sentence{
    position: relative;
    font-size: 20px;
    padding-left: 15px;
    margin-bottom: 5px;
    &::before{
      content: "";
      position: absolute;
      width: 5px;
      height: 5px;
      background-color: #3c3c3c;
      border-radius: 50%;
      left: 0;
      right: auto;
      margin-right: 5px;
      top: 13px;
      transform: translateY(-50%);
    }
  }
}
.box2{
  display: flex;
  // height: 1000px;
  width: 1380px;
  margin: 60px auto;
}
/* 点击激活状态样式（与hover样式一致） */
.left .nav_item.active .nav_item_text {
  color: #2278ff;
}
.left{
  margin-top: 80px;
}
.nav_item.active::before {
  content: "";
  position: absolute;
  width: 3px;
  height: 20px;
  background-color: #2278ff;
}
.aside_nav{
  width: 230px;
  position: sticky;
  top: 200px;
  .nav_item{
    cursor: pointer;
    width: 230px;
    height: 30px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    .nav_item_img{
      margin-left: 13px;
      width: 32px;
      height: 32px;
    }
    .nav_item_text{
      margin-left: 10px;
      font-size: 16px;
      font-weight: normal;
      color: rgba(55, 65, 81, 0.7);
    }
    &:hover{
      background-color: rgba(55, 65, 81, 0.1);
    }
  }
}
.right{
  padding-left: 60px;
}
</style>
