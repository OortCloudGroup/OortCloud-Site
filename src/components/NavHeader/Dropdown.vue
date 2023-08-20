<template>
  <div class="dropdown" :style="{'width': width}">
    <slot />
    <div v-for="(item, index) in menu" :key="index" class="dropdown_col">
      <p class="dropdown_col_title" v-if="item.showTitle">{{ item.title }}</p>
      <NavHeaderDropdownItem v-for="menu in item.menus" :key="menu.name" :menu="menu"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Menu } from '~/types'

defineProps({
  menu: {
    type: Array<Menu>,
    required: true
  },
  width: {
    type: String,
    default: '1280px'
  }
})
</script>

<style lang="scss" scoped>
.dropdown {
  padding: 16px;
  margin: 8px auto 0;
  display: flex;
  // max-width: 1280px;
  width: 100%;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  &_col {
    flex: 1;
    &_title {
      padding: 0 16px;
      font-size: 14px;
      color: #666666;
    }
    &_item {
      padding: 12px 16px;
      display: flex;
      align-items: center;
      column-gap: 12px;
      transition: 0.15s;
      &:hover {
        background-color: rgb(243 244 246);
        border-radius: 8px;
      }
      &_logo {
        width: 36px;
        height: 36px;
      }
      &_label {
        color: rgb(55 65 81)
      }
    }
  }
}
</style>
