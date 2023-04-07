<template>
  <div class="panel" >
    <div class="panel_tabs">
      <div
        class="panel_tabs_item"
        v-for="tab in tabs"
        :key="tab.name"
        @click="handleClickTab(tab)"
        :style="[tab.name === activeTab.name ? activeTabStyle : '']"
      >
        <Image :src="tab.logo" />
        <p>{{ tab.name }}</p>
        <div v-show="tab.name === activeTab.name" class="triangle" />
      </div>
    </div>
    <div class="panel_content">
      <ServicesPanelItem :name="activeTab.name" :content="activeTab.content"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tab } from '~/types'

const props = defineProps({
  tabs: {
    type: Array<Tab>,
    required: true
  }
})

const { tabs } = toRefs(props)

const activeTab = ref(tabs.value[0])
const activeTabStyle = {
  borderRadius: '8px 0 0 8px',
  boxShadow: 'unset',
  background: '#E1EAFF'
}

const handleClickTab = (tab: Tab) => {
  activeTab.value = tab
}
</script>

<style lang="scss" scoped>
.panel {
  margin-bottom: 120px;
  display: flex;
  width: 100%;
  height: 388px;
  background: #FFFFFF;
  box-shadow: 0px 0px 32px 0px rgba(32,56,236,0.06);
  border-radius: 8px;
  &_tabs {
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    width: 300px;
    background: #EEF4FE;
    border-radius: 8px 0px 0px 8px;
    // box-sizing: border-box;
    &_item {
      position: relative;
      padding: 16px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 60px;
      width: 100%;
      background: #ffffff;
      box-shadow: 4px 4px 12px 0px rgba(33,57,236,0.08);
      border-radius: 8px;
      // border-radius: 8px 0 0 8px;
      box-sizing: border-box;
      cursor: pointer;
      img {
        margin-right: 8px;
        width: 24px;
        height: 24px;
      }
      p {
        font-size: 14px;
        color: #051261;
      }
      .triangle {
        position: absolute;
        right: -50px;
        top: 0;
        width: 0;
        height: 0;
        border: 30px solid transparent;
        border-left: 20px solid #E1EAFF;
      }
    }
  }
  &_content {
    padding: 20px 20px 20px 40px;
    display: flex;
    align-items: center;
    width: 100%;
    background-image: linear-gradient(to bottom left, #F6FDFC, #ffffff);
    box-sizing: border-box;
  }
}
</style>