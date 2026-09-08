<template>
  <div class="pover_right_more">
    <div class="pover_more_item" @click="emits('moreOpr', 'privacy')">
      <div class="pover_more_item_title">
        <div>
          <img src="@/assets/navheader/popover_yinsi.png" />
          <span>隐私政策</span>
        </div>
        <el-icon><ArrowRightBold /></el-icon>
      </div>
    </div>
    <div class="pover_more_item" @click="emits('moreOpr', 'switchAccount')">
      <div class="pover_more_item_title">
        <div>
          <img src="@/assets/navheader/prpover_switch.png" />
          <span>切换账号</span>
        </div>
        <el-icon><ArrowRightBold /></el-icon>
      </div>
    </div>
    <div class="pover_more_item" @click="emits('moreOpr', 'logout')">
      <div class="pover_more_item_title">
        <div>
          <img src="@/assets/navheader/popover_logout.png" />
          <span style="color: #FF3C3C;">退出登录</span>
        </div>
        <el-icon><ArrowRightBold /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowRightBold } from '@element-plus/icons-vue'

const emits = defineEmits(['moreOpr'])
</script>

<style lang="scss" scoped>
/* 说明：本项目 postcss-px-to-viewport 会将小写 px 转为 vw（1920 基准），
   弹层为固定尺寸浮层，使用大写 PX 保持像素不随视口缩放 */
.pover_right_more {
  border-radius: 4PX;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.pover_more_item:hover {
  background-color: #dde3ea;
}

.pover_more_item + .pover_more_item {
  border-top: 1PX solid #e3e9f0;
}

.pover_more_item {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 48PX;
  background-color: #EDF3F9;
  padding: 8PX 12PX;

  &:first-child {
    border-radius: 4PX 4PX 0 0;
  }

  &:last-child {
    border-radius: 0 0 4PX 4PX;
  }
}

.pover_more_item_title {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32PX;

  div {
    display: flex;
    align-items: center;

    img {
      width: 24PX;
      height: 24PX;
      margin-right: 8PX;
    }

    span {
      font-size: 16PX;
      color: #575656;
    }
  }
}

.el-icon {
  transition: transform 0.3s ease;
  cursor: pointer;
}
</style>
