<template>
  <div class="panel">
    <n-tabs
      v-if="showTabs"
      class="card-tabs"
      :default-value="activeTab"
      size="large"
      animated
      style="margin: 0 -0.25rem; height: 5rem;"
      pane-style="padding-left: 0.25rem; padding-right: 0.25rem; box-sizing: border-box;"
    >
      <n-tab-pane v-for="tab in tabs" :key="tab.name" :name="tab.name">
        <template #tab>
          <div class="custom_tab">
            <Image :src="tab.logo" :alt="tab.name" />
          </div>
        </template>
        <ServicesPanelItem :name="tab.name" :content="tab.content" />
      </n-tab-pane>
    </n-tabs>
    <div v-else>
      <ServicesPanelItem v-for="tab in tabs" :key="tab.name" :name="tab.name" :content="tab.content" :logo="tab.logo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NTabs, NTabPane } from 'naive-ui'

interface Tab {
  name: string,
  logo: string,
  content: Object
}

const props = defineProps({
  tabs: {
    type: Array<Tab>,
    required: true
  },
  showTabs: {
    type: Boolean,
    default: false
  }
})

const { tabs } = toRefs(props)

const activeTab = ref(tabs.value[0].name)
</script>

<style lang="scss" scoped>
.panel {
  margin-bottom: 24px;
  width: 100%;
  height: 436px;
}
.custom_tab {
  width: 40px;
  height: 40px;
  img {
    width: 100%;
    height: 100%;
    transition: .3s;
  }
}
:deep(.n-tabs-tab) {
  width: 60px;
  height: 80px;
  justify-content: center;
}
:deep(.n-tabs-wrapper) {
  height: 80px;
}
:deep(.n-tabs-tab-pad) {
  width: 12px;
}
:deep(.n-tabs-tab--active) {
  img {
    transform: scale(1.5);
    transform-origin: bottom center;
  }
}
:deep(.n-tabs-bar) {
  width: 8px !important;
  height: 8px;
  border-radius: 9999px;
  background-color: #2038EC;
  transform: translateX(25px);
}
:deep(.n-tabs .n-tabs-pane-wrapper) {
  overflow: visible;
}
</style>
