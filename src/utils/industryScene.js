import config from '@/config/index.js'

/** 获取场景配置中的首页地址，兼容历史字段命名。 */
export const getIndustryHomepageUrl = (industry = {}) => {
  const homepageUrl = industry.homepageUrl || industry.homepage_url ||
    industry.homePageUrl || industry.home_page_url || ''
  return typeof homepageUrl === 'string' ? homepageUrl.trim() : ''
}

/** 将相对首页地址转换为控制台完整地址。 */
export const buildIndustryHomepageUrl = (homepageUrl) => {
  if (!homepageUrl || /^https?:\/\//i.test(homepageUrl)) return homepageUrl || ''
  const normalizedPath = homepageUrl.startsWith('/') ? homepageUrl : `/${homepageUrl}`
  return config.busURL + config.frontURLStr + normalizedPath
}
