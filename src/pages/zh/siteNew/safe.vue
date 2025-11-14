<template>
  <div class="home_page vls">
    <div class="box1">
      <div class="title">
        OortCloud 安全性政策
      </div>
      <div class="title2">
        您的数据安全对我们非常重要！以下是我们为确保您的数据在 OortCloud 被安全保管的日常工作摘要，<br />
        以及在我们的托管版本 OortCloud 云端版应用了的最佳安全实践。
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
          <div class="title_item">
            <div class="title3">
              备份/恢复
            </div>
            <div class="content">
              <div class="sentence">
                为每个 Odoo 数据库保存 14 套完整备份记录，最少 3 个月：每天 1 次的备份为期 7 天; 每周 1 次的备份为期 4 周; 每月 1 次的备份为期3 个月。
              </div>
              <div class="sentence">
                三重备份机制：至少跨2大洲3大数据中心。
              </div>
              <div class="sentence">
                有关数据中心的实际位置，请参阅我们的 隐私政策.
              </div>
              <div class="sentence">
                你还可以在任何时候使用控制面板下载实时数据的手动备份。
              </div>
              <div class="sentence">
                您可以联系我们的服务台以在您的实时数据库来恢复这些备份（或在侧面）。
              </div>
              <div class="sentence">
                你还可以在任何时候使用控制面板下载实时数据的手动备份。
              </div>
              <div class="sentence">
                你还可以在任何时候使用控制面板下载实时数据的手动备份。
              </div>
            </div>
          </div>
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

  { text: '备份/恢复', targetId: 'section1' },
  { text: '数据库安全', targetId: 'section2' },
  { text: '密码安全', targetId: 'section3' },
  { text: '访问安全', targetId: 'section4' },
  { text: '系统安全', targetId: 'section5' },
  { text: '网络防御', targetId: 'section6' }
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
  const navHeight = 82
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
  background-color: #714b67;
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
  font-size: 24px;
  font-weight: 700;
}
.content{
  font-size: 16px;
  font-weight: 400;
  margin-left: 20px;
  margin-top: 20px;
  .sentence{
    position: relative;
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
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
.box2{
  display: flex;
  height: 1000px;
  margin-left: 20px;
  margin-top: 60px;
}
/* 点击激活状态样式（与hover样式一致） */
.left .nav_item.active .nav_item_text {
  color: #714b67;
}
.nav_item.active::before {
  content: "";
  position: absolute;
  width: 3px;
  height: 20px;
  background-color: #714b67;
}
.aside_nav{
  width: 250px;
  position: sticky;
  top: 110px;
  .nav_item{
    cursor: pointer;
    width: 248px;
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
