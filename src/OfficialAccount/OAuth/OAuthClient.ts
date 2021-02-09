'use strict';

import { AccessToken } from '../../Core/BaseAccessToken';
import BaseClient from '../../Core/BaseClient';
import { buildQueryString, inArray, merge } from '../../Core/Utils';

/**
 * OAuth授权后的用户对象
 */
export class User
{
  /**
   * openid
   * @var {string}
   */
  id: string = '';
  /**
   * openid
   * @var {string}
   */
  openid: string = '';
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
   * E-mail
   * @var {string}
   */
  email: string = '';
  /**
   * 原始数据
   * @var {object}
   */
  original: object = null;
  /**
   * AccessToken对象
   */
  token: AccessToken = null;

  /**
   * 获取 openid
   * @return {string}
   */
  getId(): string {
    return this.id;
  }

  /**
   * 获取 openid
   * @return {string}
   */
  getOpenId(): string {
    return this.openid;
  }

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
   * 获取E-mail
   * @return {string}
   */
  getEmail(): string {
    return this.email;
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

  /**
   * 设置AccessToken
   * @param token
   */
  setToken(token: AccessToken): this {
    this.token = token;
    return this;
  }

  merge(attrs: object): this {
    for (let k in attrs) {
      this[k] = attrs[k];
    }
    return this;
  }

};

/**
 * OAuth组件
 */
export class OAuthComponent
{
  /**
   * 获取应用id
   */
  getAppId(): string
  {
    return null;
  }

  /**
   * 获取access_token
   */
  getToken(): Promise<string>
  {
    return null;
  }
};

/**
 * OAuth客户端
 */
export default class OAuthClient extends BaseClient
{
  protected _baseUrl: string = 'https://api.weixin.qq.com/sns';
  protected _scope: string | Array<string> = 'snsapi_userinfo';
  protected _callback: string = '';
  protected _state: string = '';
  protected _code: string = '';
  protected _scopeSeparator: string = '';
  protected _withCountryCode: boolean = false;
  protected _parameters: object = {};
  protected _component: OAuthComponent = null;
  protected _token: AccessToken = null;

  /**
   * 设置scope
   * @param scope 可选值：snsapi_userinfo、snsapi_base，默认：snsapi_userinfo
   */
  scopes(scope: string | Array<string>): this
  {
    this._scope = scope || 'snsapi_userinfo';
    return this;
  }

  /**
   * 设置授权后的回调地址
   * @param callback 完整的URL地址
   */
  callback(callback: string): this
  {
    this._callback = callback || '';
    return this;
  }

  /**
   * 设置state参数
   * @param state
   */
  state(state: string): this
  {
    this._state = state || '';
    return this;
  }

  /**
   * 设置code参数
   * @param code
   */
  code(code: string): this
  {
    this._code = code || '';
    return this;
  }

  /**
   * 设置scope的分隔符
   * @param separator
   */
  scopeSeparator(separator: string): this
  {
    this._scopeSeparator = separator || '';
    return this;
  }

  /**
   * 设置返回国家地区语言版本
   */
  withCountryCode(): this
  {
    this._withCountryCode = true;
    return this;
  }

  component(component: OAuthComponent): this
  {
    this._scope = 'snsapi_base';
    this._component = component;
    return this;
  }

  with(parameters: object): this
  {
    this._parameters = parameters;
    return this;
  }

  protected formatScope(scopes: string | Array<string>, separator: string): string
  {
    if (typeof scopes == 'string') {
      return scopes;
    }
    return scopes.join(separator);
  }

  protected getAuthUrl(state: string): string
  {
    let path = 'oauth2/authorize';
    let scopes = [];
    if (typeof this._scope == 'string' && this) {
      scopes = this._scope.split(',');
    }
    if (inArray('snsapi_login', scopes)) {
      path = 'qrconnect';
    }
    return this.buildAuthUrlFromBase(`https://open.weixin.qq.com/connect/${path}`, state);
  }

  protected buildAuthUrlFromBase(url: string, state: string): string
  {
    let query = buildQueryString(this.getCodeFields(state));
    return url + '?' + query + '#wechat_redirect';
  }

  protected getCodeFields(state: string = null): object
  {
    if (this._component) {
      this.with(merge(this._parameters, {
        component_appid: this._component.getAppId(),
      }));
    }

    let scope = this._scope || this.app.config.oauth.scope || 'snsapi_userinfo';
    let callback = this._callback || this.app.config.oauth.callback || '';
    if (callback.substr(0, 7) !== 'http://' && callback.substr(0, 8) !== 'https://') {
      throw new Error('Please set callback url start with "http://" or "https://"');
    }
    return merge({
      appid: this.getAppId(),
      redirect_uri: callback,
      response_type: 'code',
      scope: this.formatScope(scope, this._scopeSeparator),
      state: state || '',
      connect_redirect: 1,
    }, this._parameters);
  }

  /**
   * 获取配置中的app_id
   */
  getAppId(): string
  {
    return this.app.config.app_id;
  }

  /**
   * 生成授权链接
   * @param callback 授权后的回调地址
   */
  redirect(callback: string = null): string
  {
    if (!this.app.config.oauth) {
      this.app.config.oauth = {
        scope: 'snsapi_userinfo',
        callback: '',
      };
    }
    if (callback) {
      this._callback = callback;
    }

    return this.getAuthUrl(this._state);
  }

  protected getTokenFields(code: string): object
  {
    return {
      appid: this.getAppId(),
      secret: this.app.config.secret,
      component_appid: this._component ? this._component.getAppId() : null,
      component_access_token: this._component ? this._component.getToken() : null,
      code: code,
      grant_type: 'authorization_code',
    };
  }

  protected getTokenUrl(): string
  {
    if (this._component) {
      return this._baseUrl + '/oauth2/component/access_token';
    }
    return this._baseUrl + '/oauth2/access_token';
  }

  /**
   * 获取授权后的token
   */
  async getToken(code: string): Promise<AccessToken>
  {
    if (this._token) {
      return this._token;
    }

    let res = await this.doRequest({
      url: this.getTokenUrl(),
      method: 'GET',
      qs: this.getTokenFields(code),
    });
    if (!res || res['errcode']) {
      this.app['log']('Fail to fetch access_token', res);
      throw new Error('Fail to fetch access_token');
    }
    return this.parseAccessToken(res);
  }

  protected parseAccessToken(res: object): AccessToken
  {
    if (!res['access_token']) {
      this.app['log']('Authorize Failed', res);
      throw new Error('Authorize Failed');
    }
    return new AccessToken(res);
  }

  /**
   * 设置token
   */
  setToken(token: AccessToken): this
  {
    this._token = token;
    return this;
  }

  /**
   * 根据token获取用户信息
   * @param token 授权后的token
   */
  protected async getUserByToken(token: AccessToken): Promise<object>
  {
    let scopes = token.getScope().split(',');
    if (inArray('snsapi_base', scopes)) {
      return token;
    }
    if (!token.openid) {
      throw new Error('openid of AccessToken is required.');
    }

    let language = this._withCountryCode ? null : (this._parameters && this._parameters['lang'] ? this._parameters['lang'] : 'zh_CN');

    let res = await this.httpGet('/sns/userinfo', {
      access_token: token.access_token,
      openid: token.openid,
      lang: language,
    });
    return res;
  }

  protected arrayItem(data: any, key: string = null, defaultValue: any = null): any
  {
    if (!data) {
      return defaultValue;
    }
    if (key === null) {
      return data;
    }
    if (typeof data[key] !== 'undefined') {
      return data[key];
    }

    let keys = key.split('.');
    for (let k in keys) {
      let segment = keys[k];
      if (!data || typeof data != 'object' || typeof data[segment] !== 'undefined') {
        return defaultValue;
      }

      data = data[segment];
    }

    return data;
  }

  protected mapUserToObject(userData: object): User
  {
    let user = new User;
    user.id = this.arrayItem(userData, 'openid');
    user.name = this.arrayItem(userData, 'nickname');
    user.nickname = this.arrayItem(userData, 'nickname');
    user.avatar = this.arrayItem(userData, 'headimgurl');
    user.email = null;
    return user;
  }

  /**
   * 根据code获取用户信息
   * @param code 授权后回调地址带回的code
   * @param token 授权后的token
   */
  async user(code: string = '', token: AccessToken = null): Promise<User>
  {
    if (code) {
      this._code = code;
    }
    if (!token) {
      token = await this.getToken(this._code);
    }

    let userData = await this.getUserByToken(token);

    let user = this.mapUserToObject(userData).merge({
      original: userData,
    });

    return user.setToken(token);
  }
}
