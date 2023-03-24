<template>
  <div class="panel">
    <HomePanelHeader title="专业服务" info="适用于公安、派出所、检察、司法、监狱、智慧边海防、政府等多行业解决方案"/>

    <n-tabs type="line" trigger="click" animated :bar-width="150" @before-leave="onBeforeLeave">
      <n-tab-pane v-for="(item, index) in data" :key="index" :name="item.tab" :tab="item.tab">
        <div class="pane">
          <div class="pane_left">
            <span class="pane_left_title">{{ item.title }}</span>
            <span class="pane_left_intro">{{ item.content }}</span>
            <n-button v-if="item.site" type="info">
              了解详情
            </n-button>
          </div>
          <div class="pane_right">
            <img :src="item.cover">
          </div>
        </div>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script setup>
import { NTabs, NTabPane, NButton } from 'naive-ui';

const router = useRouter()

defineProps({
  data: {
    type: Array,
    required: true
  }
})

const onBeforeLeave = (index) => {
  if (index === '更多') {
    router.push('/services')
    return false
  }
  else return true
}

</script>

<style lang="scss" scoped>
.panel {
  padding: 60px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  box-sizing: border-box;
}
.pane {
  position: relative;
  display: flex;
  &_left {
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    height: 380px;
    box-sizing: border-box;
    &_title {
      margin-bottom: 22px;
      font-size: 16px;
      color: #333333;
      font-weight: 600;
    }
    &_intro {
      margin-bottom: 38px;
      font-size: 14px;
      color: #666666;
      text-align: justify;
    }
    &_link {
      width: 80px;
      height: 36px;
      background: #2278FF;
      border-radius: 4px;
    }
  }
  &_right {
    position: absolute;
    top: 0;
    right: -44px;
    display: flex;
    justify-content: flex-end;
    width: 50%;
    height: 380px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
:deep(.n-tabs-tab-pad) {
  width: 0;
}
:deep(.n-tabs-tab) {
  width: 150px;
  display: flex;
  justify-content: center;
}
:deep(.n-tabs-tab--active) {
  color: #2290FF !important;
  background-image: url('@/assets/img/home/program_selected_2x.png');
  background-size: 100% 100%;
}
:deep(.n-tabs-bar) {
  display: none;
}
:deep(.n-tab-pane) {
  padding: 0;
  height: 380px;
  background: #F7F7F7;
  border: 1px solid rgba(216,216,216,1);
  border-radius: 0px 10px 10px 10px;
  box-sizing: border-box;
}
:deep(.n-tabs-tab:hover) {
  color: #2290ff !important;
}
</style>