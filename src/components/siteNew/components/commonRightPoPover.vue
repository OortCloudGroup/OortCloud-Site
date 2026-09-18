<template>
  <div class="pover_right">
    <div class="pover_apps">
      <div v-for="(item,index) in appList" :key="index" class="pover_apps_item" @click="gotoApp(item)">
        <img v-if="item.icon_url" :src="item.icon_url" alt="" />
        <img v-else src="@/assets/navheader/person.png" alt="" />
        <div class="pover_apps_item_name">
          {{ item.applabel }}
        </div>
      </div>
      <div v-if="appList.length === 0" class="no_data">
        <span>{{ loading ? '加载中...' : '暂无应用' }}</span>
      </div>
    </div>
    <!-- 更多应用跳转到PC应用市场 -->
    <div class="more_apps">
      <div class="more_apps_tips" @click="moreApps">
        <span>更多应用</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ofetch } from 'ofetch'
import { useSessionStorage, StorageSerializers } from '@vueuse/core'
import { ElMessage } from 'element-plus'
import config from '@/config/index.js'

const accessTokenStorage = useSessionStorage('accessToken', '')
// 显式 object 序列化，与 NavHeader 写入端保持一致（null 初始值会被 vueuse 推断为 any，读回对象会异常）
const userInfoStorage = useSessionStorage('userInfo', null, { serializer: StorageSerializers.object })
const appList = ref([])
const loading = ref(false)

const getAuthHeaders = () => {
  return {
    'Content-Type': 'application/json',
    tenantId: useSessionStorage('tenantId', '').value || '',
    accesstoken: accessTokenStorage.value || '',
    appid: config.ssoAppId,
    secretkey: config.ssoSecretKey,
    requesttype: 'app'
  }
}

// 获取我的pc应用列表（对齐 console_manage 的 myPcList）
const getMyPCAppList = async() => {
  loading.value = true
  try {
    const res = await ofetch(config.busURL + '/bus/apaas-admin-platform/client/module/mypclist', {
      method: 'POST',
      body: {
        accessToken: accessTokenStorage.value,
        uuid: userInfoStorage.value?.user_id || userInfoStorage.value?.userId || '',
        pageNum: 1,
        pageSize: 999
      },
      headers: getAuthHeaders()
    })
    if (res.code === 200) {
      const tempArr = res.data.list || []
      tempArr.forEach((group) => {
        group.app_list && group.app_list.forEach((itd) => {
          appList.value.push(itd)
        })
      })
    }
  } catch (error) {
    console.error('获取应用列表失败:', error)
  } finally {
    loading.value = false
  }
}

const verifyLogin = async() => {
  try {
    const res = await ofetch(config.busURL + '/bus/apaas-sso/sso/v1/verifyToken', {
      method: 'POST',
      body: {
        accessToken: accessTokenStorage.value
      },
      headers: getAuthHeaders()
    })
    return res.code === 200
  } catch (error) {
    console.error('token验证失败:', error)
    return false
  }
}

// 打开应用前校验token，携带accessToken与fromWhere跳转（对齐 console_manage）
const gotoApp = async(item) => {
  const isValid = await verifyLogin()
  if (!isValid) {
    ElMessage.warning('用户信息失效， 请重新登录')
    return
  }
  const token = accessTokenStorage.value
  const tempObj = {
    accessToken: token,
    fromWhere: 'console_manage'
  }
  window.sessionStorage.setItem('tempObj', JSON.stringify(tempObj))
  let appendStr = '?accessToken=' + token + '&fromWhere=console_manage'
  if (item.apk_url && item.apk_url.includes('?')) {
    appendStr = '&accessToken=' + token + '&fromWhere=console_manage'
  }

  let target = '_blank'
  let windowFeatures = 'popup,location=no'
  if (item.open_mod === 1) {
    target = '_blank'
    windowFeatures = ''
  }
  if (item.open_mod === 2) {
    target = '_self'
  }
  if (item.open_mod === 3) {
    target = item.applabel
  }
  if (item.apk_url && (item.apk_url.includes('http') || item.apk_url.includes('//'))) {
    window.open(item.apk_url + appendStr, target, windowFeatures)
  } else {
    window.open(config.busURL + config.frontURLStr + item.apk_url + appendStr, target, windowFeatures)
  }
}

const moreApps = async() => {
  const isValid = await verifyLogin()
  if (!isValid) {
    ElMessage.warning('用户信息失效， 请重新登录')
    return
  }
  const token = accessTokenStorage.value
  window.sessionStorage.setItem('tempObj', JSON.stringify({
    accessToken: token,
    fromWhere: 'console_manage'
  }))
  window.open(config.busURL + config.frontURLStr + '/app_market/index.html#/moreApp?accessToken=' + token + '&fromWhere=console_manage', '_blank')
}

onMounted(() => {
  getMyPCAppList()
})

</script>

<style lang="scss">
.pover_right {
  border-radius: 4px;
  background-color: #EDF3F9;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.pover_apps {
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 98%;
  background-color: transparent;
  border-radius: 4px;
  max-height: 50vh;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #dde3ea transparent;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #dde3ea;
    border-radius: 3px;
  }
}

.pover_apps_item:hover {
  background-color: #dde3ea;
  border-radius: 4px;
}

.pover_apps_item {
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px 6px;
  justify-content: flex-start;
  padding-top: 8px;
  cursor: pointer;
  img {
    height: 48px;
    width: auto;
    flex-shrink: 0;
  }
  .pover_apps_item_name {
    margin-top: 8px;
    /* 大写 PX 不参与 postcss-px-to-viewport 转换，浮层文字恒定像素不随视口放大 */
    font-size: 14PX;
    color: #3D3D3D;
    text-align: center;
    line-height: 18PX;
    height: 36PX; /* 固定两行高度，同行图标基线一致 */
    overflow: hidden;
    word-break: break-all;
  }
}

.no_data {
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 16px;
    color: #999;
  }
}

.more_apps {
  height: 48px;
  margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.more_apps_tips {
  border-radius: 136px 136px 136px 136px;
  border: 1px solid #2278FF;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 12px;
  cursor: pointer;
  span {
    color: #2278FF;
    font-size: 14PX;
  }
}
</style>
