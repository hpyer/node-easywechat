'use strict';

import { AccessToken } from '../../Core/BaseAccessToken';
import { buildQueryString } from '../../Core/Utils';
import BaseClient, { User as BaseUser } from '../../OfficialAccount/OAuth/OAuthClient';

export class User extends BaseUser {
  userId: string = '';
  deviceId: string = '';

  /**
   * 获取 userId
   * @return {string}
   */
  getUserId(): string {
    return this.userId;
  }

  /**
   * 获取 deviceId
   * @return {string}
   */
  getDeviceId(): string {
    return this.deviceId;
  }

};

export default class OAuthClient extends BaseClient
{
  protected _agentId: string = '';
  protected _detailed: boolean = false;

  /**
   * 设置agentId参数
   * @param code
   */
  agent(agentId: string): this
  {
    this._agentId = agentId || '';
    return this;
  }
  /**
   * 设置agentId参数
   * @param code
   */
  setAgentId(agentId: string): this
  {
    this._agentId = agentId || '';
    return this;
  }

  /**
   * 设置返回用户详情
   */
  detailed(): this
  {
    this._detailed = true;
    return this;
  }

  /**
   * 获取配置中的corp_id
   */
  getAppId(): string
  {
    return this.app.config.corp_id;
  }

  protected getAuthUrl(state: string): string
  {
    if (this._scope) {
      return this.getOAuthUrl(state);
    }
    return this.getQrConnectUrl(state);
  }

  protected getOAuthUrl(state: string): string
  {
    let scope = this._scope || this.app.config.oauth.scope || 'snsapi_userinfo';
    let callback = this._callback || this.app.config.oauth.callback || '';
    if (callback.substr(0, 7) !== 'http://' && callback.substr(0, 8) !== 'https://') {
      throw new Error('Please set callback url start with "http://" or "https://"');
    }

    let params = {
      appid: this.getAppId(),
      redirect_uri: callback,
      response_type: 'code',
      scope: this.formatScope(scope, this._scopeSeparator),
      agentid: this._agentId,
      state: state || '',
    };
    return `https://open.weixin.qq.com/connect/oauth2/authorize?${buildQueryString(params)}#wechat_redirect`;
  }

  protected getQrConnectUrl(state: string): string
  {
    let scope = this._scope || this.app.config.oauth.scope || 'snsapi_userinfo';
    let callback = this._callback || this.app.config.oauth.callback || '';
    if (callback.substr(0, 7) !== 'http://' && callback.substr(0, 8) !== 'https://') {
      throw new Error('Please set callback url start with "http://" or "https://"');
    }

    let params = {
      appid: this.getAppId(),
      agentid: this._agentId,
      redirect_uri: callback,
      state: state || '',
    };
    return `https://open.work.weixin.qq.com/wwopen/sso/qrConnect?${buildQueryString(params)}`;
  }

  protected getTokenUrl(): string
  {
    return null;
  }

  protected async getUserByToken(token: AccessToken): Promise<object>
  {
    let userInfo = await this.getUserInfo(token);
    if (this._detailed && userInfo['user_ticket']) {
      return this.getUserDetail(token, userInfo['user_ticket']);
    }
    this._detailed = false;
    return userInfo;
  }

  protected getUserInfo(token: AccessToken): Promise<any>
  {
    return this.httpGet('https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo', {
      access_token: token.access_token,
      code: this._code,
    });
  }

  protected getUserDetail(token: AccessToken, ticket: string): Promise<any>
  {
    return this.httpPostJson('https://qyapi.weixin.qq.com/cgi-bin/user/getuserdetail', {
      user_ticket: ticket,
    }, {
      access_token: token.access_token,
    });
  }

  protected mapUserToObject(userData: object): User
  {
    let user = new User;
    if (this._detailed) {
      user.id = this.arrayItem(userData, 'userid');
      user.name = this.arrayItem(userData, 'name');
      user.avatar = this.arrayItem(userData, 'avatar');
      user.email = this.arrayItem(userData, 'email');
    }
    else {
      user.id = this.arrayItem(userData, 'UserId') || this.arrayItem(userData, 'OpenId');
      user.userId = this.arrayItem(userData, 'UserId');
      user.openid = this.arrayItem(userData, 'OpenId');
      user.deviceId = this.arrayItem(userData, 'DeviceId');
    }
    return user;
  }

}
