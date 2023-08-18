
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  imports: {
    autoImport: true  // 默认自动引入
  },
  css:[
    'element-plus/dist/index.css',
  ],
  devServer: {
    port: 8080
  },
  // ssr: false,
  app: {
    // buildAssetsDir: './',
    // baseURL: "/oort/oort-site/",
    // cdnURL: '/oort/oort-site/',
    head: {
      title: '奥尔特云(深圳)智慧科技_公共安全“私有云智能化应用建设解决方案”提供商',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=4' }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: '奥尔特云(深圳)智慧科技_公共安全“私有云智能化应用建设解决方案”提供商' },
        { property: 'og:description', content: '奥尔特云(深圳)智慧科技有限公司是领先的行业数字化转型、公共安全“私有云智能化应用建设解决方案”提供商，为各行业智能化应用建设提供产品研发、生产、安装和技术服务，引领信息化智能化应用建设模式革新。核心团队由公安行业智能化应用建设资深人士组成，拥有丰富的公安行业研发、咨询、产品、交付、渠道、市场运营经验' },
        { name: 'description', content: '奥尔特云(深圳)智慧科技有限公司是领先的行业数字化转型、公共安全“私有云智能化应用建设解决方案”提供商，为各行业智能化应用建设提供产品研发、生产、安装和技术服务，引领信息化智能化应用建设模式革新。核心团队由公安行业智能化应用建设资深人士组成，拥有丰富的公安行业研发、咨询、产品、交付、渠道、市场运营经验' },
        { name: 'keywords', content: '奥陌陌，警务宝，一体化智慧基层平台，治安宝，奥尔特云，公共安全，移动办公，私有化部署，天琴智慧，午托管理，人脸识别考勤，托管人脸识别考勤，移动警务，智慧警务，即时通讯服务，安全加密通讯，实时音视频服务，私有化部署的移动安全办公云平台，微服务架构，分层解耦，共享服务，去烟囱，去竖井' }
      ],
      script: [
        { src: 'http://map.qq.com/api/gljs?v=2.exp&key=QJ2BZ-UC26D-DR64X-HDFRX-L6KRE-VABBM', type: 'text/javascript' }
        // { src: 'http://map.qq.com/api/js?v=2.exp&callback=init&key=QJ2BZ-UC26D-DR64X-HDFRX-L6KRE-VABBM', type: 'text/javascript' }
      ]
    }
  },
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
            'naive-ui',
            'vueuc',
            '@css-render/vue3-ssr',
            '@juggle/resize-observer'
          ]
        : ['@juggle/resize-observer']
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
          : []
    }
  }
})
