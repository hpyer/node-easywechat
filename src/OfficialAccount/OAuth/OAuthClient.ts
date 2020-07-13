'use strict';

import BaseClient from '../../Core/BaseClient';
import { buildQueryString } from '../../Core/Utils';

/**
 * OAuth授权后的用户对象
 */
class User
{
  /**
   * openid
   * @var {string}
   */
  id: string = '';
  /**
   * unionid
   * @var {string}
   */
  unionid: string = '';
  /**
   * 昵称
   * @var {string}
   */
  nickname: string = '';
  /**
   * 昵称
   * @var {string}
   */
  name: string = '';
  /**
   * 头像
   * @var {string}
   */
  avatar: string = '';
  /**
   * 原始数据
   * @var {object}
   */
  original: object = null;
  /**
   * AccessToken
   * @var {AccessToken}
   */
  token: AccessToken = null;

  /**
   * 获取 openid
   * @return {string}
   */
  getId(): string {
    return this.id;
  }
s
  /**
   * 获取 unionid
   * @return {string}
   */
  getUnionId(): string {
    return this.unionid;
  }

  /**
   * 获取昵称
   * @return {string}
   */
  getNickname(): string {
    return this.nickname;
  }

  /**
   * 获取昵称
   * @return {string}
   */
  getName(): string {
    return this.name;
  }

  /**
   * 获取头像
   * @return {string}
   */
  getAvatar(): string {
    return this.avatar;
  }

  /**
   * 获取原始数据
   * @return {object}
   */
  getOriginal(): object {
    return this.original;
  }

  /**
   * 获取AccessToken
   * @return {AccessToken}
   */
  getToken(): AccessToken {
    return this.token;
  }
};

/**
 * OAuth授权后的AccessToken对象
 */
export class AccessToken
{
  constructor (info) {
    this.access_token = info.access_token;
    this.expires_in = info.expires_in;
    this.refresh_token = info.refresh_token;
    this.openid = info.openid;
    this.scope = info.scope;
  }

  /**
   * 网页授权接口调用凭证
   * @var {string}
   */
  access_token: string = '';
  /**
   * 调用凭证的超时时间，单位（秒）
   * @var {number}
   */
  expires_in: number = 0;
  /**
   * 刷新access_token
   * @var {string}
   */
  refresh_token: string = '';
  /**
   * 用户唯一标识，openid
   * @var {string}
   */
  openid: string = '';
  /**
   * 授权的作用域
   * @var {string}
   */
  scope: string = null;
};

/**
 * OAuth客户端
 */
export default class OAuthClient extends BaseClient
{
  protected _scope: string = 'snsapi_userinfo';
  protected _callback: string = '';
  protected _state: string = '';
  protected _code: string = '';

  /**
   * 设置scope
   * @param scope 可选值：snsapi_userinfo、snsapi_base，默认：snsapi_userinfo
   */
  scopes(scope: string): OAuthClient
  {
    this._scope = scope || 'snsapi_userinfo';
    return this;
  }

  /**
   * 设置授权后的回调地址
   * @param callback 完整的URL地址
   */
  callback(callback: string): OAuthClient
  {
    this._callback = callback || '';
    return this;
  }

  /**
   * 设置state参数
   * @param state
   */
  state(state: string): OAuthClient
  {
    this._state = state || '';
    return this;
  }

  /**
   * 获取配置中的app_id
   */
  getAppId(): string
  {
    return this.app['config']['app_id'];
  }

  /**
   * 生成授权链接
   * @param callback 授权后的回调地址
   */
  redirect(callback: string = null): string
  {
    if (!this.app['config']['oauth']) {
      throw new Error('Please config `oauth` section');
    }
    let scope = this._scope || this.app['config']['oauth']['scope'] || 'snsapi_userinfo';
    if (!callback) {
      callback = this._callback || this.app['config']['oauth']['callback'] || '';
    }
    if (callback.substr(0, 7) !== 'http://' && callback.substr(0, 8) !== 'https://') {
      throw new Error('Please set callback url start with "http://" or "https://"');
    }

    let params = {
      appid: this.getAppId(),
      redirect_uri: callback,
      response_type: 'code',
      scope: scope,
      state: '',
    }
    if (this._state) {
      params.state = this._state;
    }

    return 'https://open.weixin.qq.com/connect/oauth2/authorize?' + buildQueryString(params) + '#wechat_redirect';
  }

  /**
   * 获取授权后的token
   */
  async getToken(): Promise<AccessToken>
  {
    let res = await this.doRequest({
      url: '/sns/oauth2/access_token',
      method: 'GET',
      qs: {
        appid: this.getAppId(),
        secret: this.app['config']['secret'],
        code: this._code,
        grant_type: 'authorization_code',
      },
    });
    if (!res || res['errcode']) {
      this.app['log']('Fail to fetch access_token', res);
      throw new Error('Fail to fetch access_token');
    }
    return new AccessToken(res);
  }

  /**
   * 根据code获取用户信息
   * @param code 授权后回调地址带回的code
   */
  async user(code: string): Promise<User>
  {
    this._code = code;

    let token: AccessToken = await this.getToken();

    let user = new User;
    user.id = token['openid'];
    user.token = token;

    if (this.app['config']['scope'] != 'snsapi_base') {
      let params = {
        access_token: token.access_token,
        openid: user.id,
        lang: 'zh_CN'
      };

      let res = await this.httpGet('/sns/userinfo', params);
      if (res && !res['errcode']) {
        user.unionid = res['unionid'] || '';
        user.nickname = res['nickname'];
        user.name = res['nickname'];
        user.avatar = res['headimgurl'];
        user.original = res;
      }
    }

    return user;
  }
}
