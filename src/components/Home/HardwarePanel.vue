<template>
  <div class="panel">
    <HomePanelHeader title="硬件产品" info="红环main_loop消费类电子产品"/>

    <div class="panel_main">
      <div v-for="(item, index) in data" :key="index" :class="`panel_wrapper hardware_pane hardware_${item.bg}`" >
        <div class="panel_item">
          <p class="panel_item_title">{{ item.title }}</p>
          <div class="panel_item_info">
            <span v-for="btn in item.buttons" :key="btn.name" class="panel_item_info_btn">{{ btn.name }}</span>
          </div>
        </div>
        <div class="panel_wrapper_right"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    required: true
  }
})
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
  &_header {
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &_title {
      margin-bottom: 12px;
      font-size: 30px;
      line-height: 36px;
      font-weight: 600;
    }
  }
  &_main {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  &_wrapper {
    padding: 24px;
    display: flex;
    width: 590px;
    height: 240px;
    background-color: #fff;
    transition: .3s;
    cursor: default;
    border-radius: 8px;
    box-shadow: 8px 8px 16px 0px rgba(14,62,139,0.16);
    box-sizing: border-box;
    &:hover {
      background-color: #DAE6FA;
      box-shadow: none;
    }
    &:hover .panel_item_title {
      color: #2278FF;
    }
    &_right {
      flex: 1;
    }
  }
  &_item {
    flex: 2;
    &_title {
      margin-bottom: 20px;
      font-size: 24px;
      line-height: 32px;
      font-weight: 600;
      transition: .3s;
    }
    &_info {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      &_btn {
        padding: 6px 16px;
        background-color: #eff5ff;
        border-radius: 4px;
        cursor: pointer;
        transition: .3s;
        box-sizing: border-box;
        &:hover {
          background-color: #fff;
          color: #2278ff;
        }
      }
    }
  }
}

/* 硬件产品 */
.hardware_pane {
  background-size: 124px 134px;
  background-repeat: no-repeat;
  background-position: bottom 20px right 40px;
}
.hardware_pane_1 {
  background-image: url('/img/index/hardware/mobile.png');
}
.hardware_pane_1:hover {
  background-image: url('/img/index/hardware/mobile_active.png');
}
.hardware_pane_2 {
  background-image: url('/img/index/hardware/network.png');
}
.hardware_pane_2:hover {
  background-image: url('/img/index/hardware/network_active.png');
}
.hardware_pane_3 {
  background-image: url('/img/index/hardware/terminal.png');
}
.hardware_pane_3:hover {
  background-image: url('/img/index/hardware/terminal_active.png');
}
</style>