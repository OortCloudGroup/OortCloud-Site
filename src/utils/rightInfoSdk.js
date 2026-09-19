import config from '@/config/index.js'

// RightInfo 场景选择 SDK 的加载与调用封装
// 产物为单文件 IIFE（约 80 KB），场景选择属低频功能，
// 因此采用「首次调用时动态注入 <script>」的按需加载方式，避免拖慢首屏。

// SDK 产物地址：由业务总线地址 + 前端应用前缀 + lib 目录组成
// 等价于 https://workup.oortcloudsmart.com:2443/bus/apaas-web/lib/right-info-sdk.min.js
// 走 config 组装而非写死，便于测试 / 生产等多环境自动切换
const SDK_SCRIPT_URL = `${config.busURL}${config.frontURLStr}/lib/right-info-sdk.min.js`
// 加载超时时间（毫秒）
const SDK_LOAD_TIMEOUT = 10000

// 缓存加载 Promise，避免重复注入 script
let sdkLoadPromise = null

/**
 * 动态加载 SDK 脚本并等待全局对象就绪。
 *
 * @returns {Promise<object>} window.RightInfoSdk
 */
export const loadRightInfoSdk = () => {
  if (sdkLoadPromise) return sdkLoadPromise

  sdkLoadPromise = new Promise((resolve, reject) => {
    // 已加载过（例如其他入口先触发）则直接复用
    if (window.RightInfoSdk) {
      resolve(window.RightInfoSdk)
      return
    }

    const script = document.createElement('script')
    script.src = SDK_SCRIPT_URL
    script.async = true

    const timer = window.setTimeout(() => {
      cleanup()
      // 超时后置空缓存，允许下次重试
      sdkLoadPromise = null
      reject(new Error('场景选择组件加载超时，请检查网络后重试'))
    }, SDK_LOAD_TIMEOUT)

    const cleanup = () => {
      window.clearTimeout(timer)
      script.removeEventListener('load', handleLoad)
      script.removeEventListener('error', handleError)
    }

    const handleLoad = () => {
      cleanup()
      if (window.RightInfoSdk) {
        resolve(window.RightInfoSdk)
        return
      }
      sdkLoadPromise = null
      reject(new Error('场景选择组件加载失败：未获取到 RightInfoSdk'))
    }

    const handleError = () => {
      cleanup()
      script.remove()
      sdkLoadPromise = null
      reject(new Error('场景选择组件加载失败，请检查网络后重试'))
    }

    script.addEventListener('load', handleLoad)
    script.addEventListener('error', handleError)
    document.head.appendChild(script)
  })

  return sdkLoadPromise
}

/**
 * 组装 SDK 初始化配置。
 * 接口地址 = baseUrl + gateWay + apiPrefix + 接口路径，
 * 需与 src/api/modules/industryScene.js 中拼接出的地址保持一致。
 *
 * @param {object} params 登录态参数
 * @param {string} params.accessToken 用户令牌
 * @param {string} params.tenantId 租户 ID
 * @param {string} params.userId 当前用户 ID，用于查询上次选中的场景
 * @returns {object} SDK 初始化配置
 */
const buildSdkOptions = ({ accessToken = '', tenantId = '', userId = '' } = {}) => ({
  baseUrl: config.busURL,
  gateWay: 'bus/',
  apiPrefix: 'apaas-sso/',
  // 前端业务子应用路径前缀，用于拼接场景首页地址
  frontURLStr: config.frontURLStr,
  accessToken,
  tenantId,
  userId,
  // 头像接口需要 appID / secretKey 鉴权，与 SSO 配置保持一致
  appID: config.ssoAppId,
  secretKey: config.ssoSecretKey,
  requestType: 'app'
})

/**
 * 打开场景选择弹框（SDK 自带弹框外壳：遮罩 / 面板 / 标题栏 / 关闭按钮）。
 *
 * @param {object} params 登录态参数 accessToken / tenantId / userId
 * @param {object} callbacks 回调集合
 * @param {Function} callbacks.onClose 弹框关闭回调
 * @param {Function} callbacks.onSelectSuccess 设为当前生效成功回调，入参 { item, type, url }
 * @param {Function} callbacks.onError 异常回调，入参 Error
 * @returns {Promise<object>} { groups, isSelected, error }
 */
export const openRightInfoDialog = async(params = {}, callbacks = {}) => {
  const sdk = await loadRightInfoSdk()
  const { onClose, onSelectSuccess, onError } = callbacks

  return sdk.init({
    ...buildSdkOptions(params),
    onClose,
    onSelectSuccess,
    onError
  })
}

/**
 * 关闭场景选择弹框。未初始化时无副作用。
 */
export const closeRightInfoDialog = () => {
  if (!window.RightInfoSdk) return
  window.RightInfoSdk.close()
}

/**
 * 销毁 SDK 实例并移除 DOM。用于路由切换或组件卸载时释放资源。
 */
export const destroyRightInfoSdk = () => {
  if (!window.RightInfoSdk) return
  window.RightInfoSdk.destroy()
}
