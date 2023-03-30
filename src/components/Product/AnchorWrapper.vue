<template>
  <div class="container">
    <n-anchor :trigger-top="64" :top="64" ignore-gap :show-rail="false" :show-background="false" style="position: sticky; top: 64px; background-color: #fff; z-index: 100;">
      <n-anchor-link title="商品详情" href="#商品详情" />
      <n-anchor-link title="用户案例" href="#用户案例" />
      <n-anchor-link title="服务支持" href="#服务支持" />
    </n-anchor>

    <slot />
  </div>
</template>

<script setup>
import { NAnchor, NAnchorLink } from 'naive-ui';
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}
.header {
  position: relative;
}
:deep(.n-anchor) {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 200px;
  height: 68px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
:deep(.n-anchor-rail) {
  top: unset;
  width: 100%;
  height: 2px;
}
:deep(.n-anchor-rail__bar) {
  height: 2px !important;
}
:deep(.n-anchor-link) {
  margin: 0 !important;
  height: 100%;
  line-height: 68px;
}
:deep(.n-anchor-link .n-anchor-link__title) {
  padding: 0;
  font-size: 24px;
  color: #666666 !important;
  font-weight: 600;
}
:deep(.n-anchor-link--active .n-anchor-link__title) {
  color: #333333 !important;
}
:deep(.n-anchor-link--active::after) {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 4px;
  background-color: #2038EC;
}
</style>