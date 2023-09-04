<template>
  <div class="sidebar">
    <n-anchor :bound="160">
      <n-anchor-link
        v-for="(item, index) in anchors"
        :key="index"
        :title="item.title"
        :href="item.href"
      />
    </n-anchor>
  </div>
</template>

<script setup lang="ts">

import { NAnchor, NAnchorLink } from 'naive-ui'
import { Anchor } from '~/types'

defineProps({
  anchors: {
    type: Array<Anchor>,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.sidebar {
  position: sticky;
  top: 90px;
  padding: 24px 0;
  min-width: 220px;
  width: 220px;
  flex-shrink: 0;
  box-sizing: border-box;
}
.n-anchor {
  padding: 12px 0;
}
.n-anchor-link {
  padding: 12px 0 12px 24px;
  box-sizing: border-box;

}
:deep(.n-anchor-rail) {
  width: 2px;
  border-left: 2px dashed #E5E5E5;
  background-color: transparent;
}
:deep(.n-anchor-link__title) {
  font-size: 14px;
  color: #051261 !important;
}
:deep(.n-anchor-link-background) {
  background-color: transparent;
}
:deep(.n-anchor .n-anchor-rail .n-anchor-rail__bar.n-anchor-rail__bar--active) {
  width: 6px;
  background-color: #2038EC;
}
</style>
