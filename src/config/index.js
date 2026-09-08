
const config = {}
config.URL = 'http://192.168.0.8'
config.jdssoLogin = 'http://192.168.0.17:9428'
config.jdAppid = '448128301143396352'
// 配置文件
config.configJSONData = {}

config.ZXBURL = 'http://192.168.0.25:32343'
// config.ZXBURL = ''

// 控制台入口
config.kztURL = 'https://workup.oortcloudsmart.com:2443/bus/apaas-web/console_manage/index.html'
// 业务总线与统一登录配置
config.busURL = 'https://workup.oortcloudsmart.com:2443'
// 控制台前端路由前缀（对齐 pc_ui 的 frontURLStr，用于拼接应用跳转地址）
config.frontURLStr = '/bus/apaas-web'
config.ssoAppName = 'OORT.site'
config.ssoAppId = 'e1a36857e77c4e238703a06e0e57e7a0'
config.ssoSecretKey = '557d8735b655426cb21a4771b901de61'

export default config
