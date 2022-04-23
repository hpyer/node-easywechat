'use strict';

import BaseClient from '../../Core/BaseClient';
import { buildQueryString, randomString } from '../../Core/Utils';

export default class ProviderClient extends BaseClient
{

  constructor(app)
  {
    super(app, app['provider_access_token']);
  }

  /**
   * 扫码授权登录 - 获取登录的地址
   * @see https://developer.work.weixin.qq.com/document/path/91124
   * @param redirectUri
   * @param userType
   * @param state
   * @returns
   */
  getLoginUrl(redirectUri: string = '', userType: string = 'admin', state: string = ''): string
  {
    if (!redirectUri) redirectUri = this.app.config.redirect_uri_single;
    if (!state) state = randomString(32);

    let params = {
      appid: this.app.config.corp_id,
      redirect_uri: redirectUri,
      usertype: userType,
      state,
    };

    return 'https://open.work.weixin.qq.com/wwopen/sso/3rd_qrConnect?' + buildQueryString(params);
  }

  /**
   * 扫码授权登录 - 获取登录用户信息
   * @param authCode
   * @returns
   */
  getLoginInfo(authCode: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/service/get_login_info', {
      auth_code: authCode,
    });
  }

  /**
   * 获取注册定制化URL - 推广二维码
   * @see https://developer.work.weixin.qq.com/document/path/90578
   * @param registerCode
   * @returns
   */
  async getRegisterUri(registerCode: string = ''): Promise<string>
  {
    if (!registerCode) {
      let response = await this.getRegisterCode();
      if (!response || response.errcode || !response['register_code']) {
        throw new Error('Fail to get register code');
      }
    }

    let params = {
      register_code: registerCode,
    };

    return 'https://open.work.weixin.qq.com/3rdservice/wework/register?' + buildQueryString(params);
  }

  /**
   * 获取注册码 - 推广二维码
   * @see https://developer.work.weixin.qq.com/document/path/90581
   * @param corpName
   * @param adminName
   * @param adminMobile
   * @param state
   * @returns
   */
  getRegisterCode(corpName: string = '', adminName: string = '', adminMobile: string = '', state: string = ''): Promise<any>
  {
    let params = {
      template_id: this.app.config.reg_template_id,
    };
    if (corpName) params['corp_name'] = corpName;
    if (adminName) params['admin_name'] = adminName;
    if (adminMobile) params['admin_mobile'] = adminMobile;
    if (state) params['state'] = state;

    return this.httpPostJson('cgi-bin/service/get_register_code', params);
  }

  /**
   * 查询注册状态
   * @see https://developer.work.weixin.qq.com/document/path/90582
   * @param registerCode
   * @returns
   */
  getRegisterInfo(registerCode: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/service/get_register_info', {
      register_code: registerCode,
    });
  }

  /**
   * 设置授权应用可见范围
   * @see https://developer.work.weixin.qq.com/document/path/90583
   * @param accessToken
   * @param agentId
   * @param allowUser
   * @param allowParty
   * @param allowTag
   * @returns
   */
  setAgentScope(
    accessToken: string,
    agentId: string,
    allowUser: string[] = [],
    allowParty: Array<string | number> = [],
    allowTag: Array<string | number> = []
  ): Promise<any>
  {
    return this.httpGet('cgi-bin/agent/set_scope', {
      access_token: accessToken,
      agentid: agentId,
      allow_user: allowUser,
      allow_party: allowParty,
      allow_tag: allowTag,
    });
  }

  /**
   * 设置通讯录同步完成
   * @see https://developer.work.weixin.qq.com/document/path/90584
   * @param accessToken
   * @returns
   */
  contactSyncSuccess(accessToken: string): Promise<any>
  {
    return this.httpGet('cgi-bin/sync/contact_sync_success', {
      access_token: accessToken,
    });
  }

  /**
   * 通讯录单个搜索
   * @see https://developer.work.weixin.qq.com/document/path/91844
   * @param corpId
   * @param queryWord
   * @param agentId
   * @param offset
   * @param limit
   * @param queryType
   * @param fullMatchField
   * @returns
   */
  searchContact(
    corpId: string,
    queryWord: string,
    agentId: string | number,
    offset: number = 0,
    limit: number = 50,
    queryType: number = 0,
    fullMatchField: number = null
  ): Promise<any>
  {
    let params = {
      auth_corpid: corpId,
      query_word: queryWord,
      agentid: agentId,
      offset: offset,
      limit: limit,
      query_type: queryType,
    };
    if (fullMatchField != null) {
      params['full_match_field'] = fullMatchField;
    }
    return this.httpGet('cgi-bin/service/contact/search', params);
  }

  /**
   * 获取带参授权链接
   * @see https://developer.work.weixin.qq.com/document/path/95436
   * @param params
   * @returns
   */
  getCustomizedAuthUrl(params: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/service/get_customized_auth_url', params);
  }

}
