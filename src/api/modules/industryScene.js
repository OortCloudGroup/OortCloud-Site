import { ofetch } from 'ofetch'

import config from '@/config/index.js'

/**
 * 请求用户行业、场景、职能配置接口。
 *
 * @param {string} path 接口路径
 * @param {object} body 请求参数
 * @param {object} auth 登录信息
 * @returns {Promise<object>} 接口响应
 */
const requestIndustryScene = (path, body, auth) => {
  return ofetch(config.busURL + '/bus/apaas-sso/userSceneManage/v1/' + path, {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/json',
      tenantId: auth.tenantId || '',
      accesstoken: auth.accessToken || '',
      appid: config.ssoAppId,
      secretkey: config.ssoSecretKey,
      requesttype: 'app'
    }
  })
}

export const getMyIndustryList = auth => requestIndustryScene('getMyIndustryList', {
  accessToken: auth.accessToken
}, auth)

export const getLastIndustry = (auth, entityId) => requestIndustryScene('getLastIndustry', {
  accessToken: auth.accessToken,
  tenant_id: auth.tenantId,
  entity_id: entityId
}, auth)

export const saveLastIndustry = (auth, industryId, setType) => requestIndustryScene('saveLastIndustry', {
  accessToken: auth.accessToken,
  industry_id: industryId,
  set_type: setType,
  tenant_id: auth.tenantId
}, auth)
