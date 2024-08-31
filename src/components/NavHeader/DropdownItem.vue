<template>
  <NuxtLink v-if="menu.link" :to="menu.link" class="dropdown_col_item">
    <Image class="dropdown_col_item_logo" :src="menu.logo" />
    <span class="dropdown_col_item_label">{{ menu.name }}</span>
  </NuxtLink>
  <div v-else :to="menu.link" class="dropdown_col_item">
    <Image class="dropdown_col_item_logo" :src="menu.logo" />
    <span class="dropdown_col_item_label">{{ menu.name }}</span>
  </div>
</template>

<script setup lang="ts">
interface MenuItem{
  name: string,
  logo: string,
  link?: any,
  desc?: string
}

interface Menu {
  title: string,
  showTitle: boolean,
  menus: MenuItem[]
}
defineProps({
  menu: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.dropdown {
  &_col {
    flex: 1;
    &_item {
      padding: 12px 16px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
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
        font-size: 14px;
        color: rgb(55 65 81)
      }
    }
  }
}
</style>
