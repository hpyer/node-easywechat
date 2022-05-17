'use strict';

import BaseClient from '../../Core/BaseClient';
import { buildQueryString, randomString } from '../../Core/Utils';

export default class CorpClient extends BaseClient
{

  constructor(app)
  {
    super(app, app['suite_access_token']);
  }

  /**
   * 企业授权应用
   * @see https://developer.work.weixin.qq.com/document/path/90597
   * @param preAuthCode
   * @param redirectUri
   * @param state
   * @returns
   */
  async getPreAuthorizationUrl(preAuthCode: string = '', redirectUri: string = '', state: string = ''): Promise<string>
  {
    if (!redirectUri) redirectUri = this.app.config.redirect_uri_install;
    if (!preAuthCode) {
      let res = await this.getPreAuthCode();
      preAuthCode = res['pre_auth_code'];
    }
    if (!state) state = randomString(32);

    let params = {
      suite_id: this.app.config.suite_id,
      redirect_uri: redirectUri,
      pre_auth_code: preAuthCode,
      state,
    };

    return 'https://open.work.weixin.qq.com/3rdapp/install?' + buildQueryString(params);
  }

  /**
   * 获取预授权码
   * @returns
   */
  getPreAuthCode(): Promise<any>
  {
    return this.httpGet('cgi-bin/service/get_pre_auth_code');
  }

  /**
   * 设置授权配置
   * @see https://developer.work.weixin.qq.com/document/path/90602
   * @param preAuthCode
   * @param sessionInfo
   * @returns
   */
  setSession(preAuthCode: string, sessionInfo: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/service/set_session_info', {
      pre_auth_code: preAuthCode,
      session_info: sessionInfo,
    });
  }

  /**
   * 获取企业永久授权码
   * @see https://developer.work.weixin.qq.com/document/path/90603
   * @param authCode
   * @returns
   */
  getPermanentByCode(authCode: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/service/get_permanent_code', {
      auth_code: authCode,
    });
  }

  /**
   * 获取企业授权信息
   * @see https://developer.work.weixin.qq.com/document/path/90604
   * @param authCorpId
   * @param permanentCode
   * @returns
   */
  getAuthorization(authCorpId: string, permanentCode: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/service/get_auth_info', {
      auth_corpid: authCorpId,
      permanent_code: permanentCode,
    });
  }

  /**
   * 获取应用的管理员列表
   * @see https://developer.work.weixin.qq.com/document/path/90606
   * @param authCorpId
   * @param agentId
   * @returns
   */
  getManagers(authCorpId: string, agentId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/service/get_admin_list', {
      auth_corpid: authCorpId,
      agentid: agentId,
    });
  }

  /**
   * 构造第三方应用oauth2链接
   * @see https://developer.work.weixin.qq.com/document/path/91120
   * @param redirectUri
   * @param scope
   * @param state
   * @returns
   */
  getOAuthRedirectUrl(redirectUri: string = '', scope: string = 'snsapi_userinfo', state: string = ''): string
  {
    if (!redirectUri) redirectUri = this.app.config.redirect_uri_oauth;
    if (!state) state = randomString(32);

    let params = {
      appid: this.app.config.suite_id,
      redirect_uri: redirectUri,
      response_type: 'code',
      scope,
      state,
    };

    return 'https://open.weixin.qq.com/connect/oauth2/authorize?' + buildQueryString(params);
  }

  /**
   * 获取访问用户身份
   * @see https://developer.work.weixin.qq.com/document/path/91121
   * @param code
   * @returns
   */
  getUserByCode(code: string): Promise<any>
  {
    return this.httpGet('cgi-bin/service/getuserinfo3rd', {
      code,
    });
  }

  /**
   * 获取访问用户敏感信息
   * @see https://developer.work.weixin.qq.com/document/path/91122
   * @param userTicket
   * @returns
   */
  getUserByTicket(userTicket: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/service/getuserdetail3rd', {
      user_ticket: userTicket,
    });
  }

  /**
   * 第三方根据unionid查询external_userid
   * @see https://developer.work.weixin.qq.com/document/path/95327
   * @param unionid 微信用户的unionid
   * @param openid 微信用户的openid
   * @param corpid 需要换取的企业corpid，不填则拉取所有企业
   * @returns
   */
  unionidToExternalUserid(unionid: string, openid: string, corpid: string = ''): Promise<any>
  {
    return this.httpPostJson('cgi-bin/service/externalcontact/unionid_to_external_userid_3rd', {
      unionid,
      openid,
      corpid,
    });
  }

}
