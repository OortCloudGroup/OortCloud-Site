<template>
  <div class="panel">
    <div class="panel_header">
      <span class="panel_header_title">
        <span style="color: #000; cursor: pointer;">软件产品</span>
        <span class="panel_header_dot"></span>
      </span>
      <span class="panel_header_info">高效、稳定的核心业务支撑</span>
    </div>
    <div class="panel_main">
      <div v-for="(item, index) in data" :key="index" class="panel_col">
        <div class="panel_col_title">
          <img class="panel_col_title_logo" :src="item.logo">
          <p class="panel_col_title_label">{{ item.title }}</p>
        </div>
        <div class="panel_wrapper">
          <div v-for="(mItem, mIndex) in item.content" :key="index" class="panel_item">
            <div class="panel_item_title">
              <span class="panel_item_title_img"></span>
              <span class="panel_item_title_label">{{ mItem.title }}</span>
            </div>
            <div class="panel_item_content">
              <div v-for="link in mItem.list" :key="link.name" class="panel_item_content_wrap ">
                <a>{{ link.name }}<img src="/img/index/software/icon_more.png"></a>
              </div>
            </div>
          </div>
        </div>
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
  margin: 0 auto 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1280px;
  box-sizing: border-box;
  &_header {
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &_title {
      position: relative;
      margin-bottom: 12px;
      font-size: 30px;
      line-height: 36px;
      font-weight: 600;
      text-decoration: underline;
      text-decoration-color: #2278ff;
    }
    &_dot {
      position: absolute;
      right: -4px;
      top: -4px;
      display: block;
      width: 6px;
      height: 6px;
      background-color: rgb(248 113 113);
      border-radius: 9999px;
    }
  }
  &_main {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 715px;
  }
  &_col {
    display: flex;
    flex-direction: column;
    width: 288px;
    height: 470px;
    box-shadow: 0px 2px 8px 0px rgba(49,116,224,0.08);
    overflow: hidden;
    &:hover {
      height: 715px;
      width: 340px;
      border-radius: 8px;
      transition: .3s;
    }
    &_title {
      display: flex;
      align-items: center;
      padding: 8px 16px;
      height: 88px;
      width: 100%;
      background-image: linear-gradient(to right, #d6e4f9, #e5f0fe);
      transition: .3s;
      box-sizing: border-box;
      &_logo {
        margin-right: 20px;
        width: 72px;
        height: 72px;
      }
      &_label {
        font-size: 20px;
        color: #051261;
        font-weight: 600;
        transition: .3s;
      }
    }
    &:hover &_title {
      background-image: linear-gradient(to right, #3174E0, #76B0FF);
    }
    &:hover &_title_label {
      color: #fff;
    }
    &:hover .panel_wrapper {
      padding-left: 20px;
      padding-top: 20px;
    }
    &:hover .panel_item_title {
      margin-bottom: 12px;
    }
    &:hover .panel_item_title_img {
      width: 10px;
      background-image: linear-gradient(to right, #3174e0, #76b0ff)
    }
    &:hover .panel_item_title_label {
      font-size: 18px;
      color: #051261;
      font-weight: 600;
    }
    &:hover .panel_item_content {
      padding-left: 20px;
      margin-right: 8px;
      display: flex;
      flex-wrap: wrap;
      column-gap: 36px;
      row-gap: 12px;
    }
  }
  &_wrapper {
    padding-left: 40px;
    padding-top: 56px;
    display: flex;
    flex-direction: column;
    flex: 1;
    row-gap: 24px;
    background-color: #fff;
    transition: .3s;
    box-sizing: border-box;
  }
  &_item {
    display: flex;
    flex-direction: column;
    &_title {
      display: flex;
      align-items: center;
      column-gap: 8px;
      &_img {
        width: 4px;
        height: 4px;
        border-radius: 9999px;
        background: #3174e0;
      }
      &_label {
        color: #051261;
      }
    }
    &_content {
      display: none;
      box-sizing: border-box;
      &_wrap {
        display: flex;
        a {
          color: #2278ff;
          cursor: pointer;
          text-decoration: none;
          line-height: 1.4;
          img {
            margin-left: 2px;
            width: 12px;
            height: 12px;
          }
        }
      }
    }
  }
}
</style>