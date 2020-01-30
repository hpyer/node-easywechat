'use strict';

import BaseClient from '../../Core/BaseClient';
import { buildQueryString } from '../../Core/Utils';

class User
{
  id: string = '';
  nickname: string = '';
  name: string = '';
  avatar: string = '';
  original: string = '';
  token: object = {};
};

export default class OAuth extends BaseClient
{
  protected _scope: string = 'snsapi_userinfo';
  protected _callback: string = '';
  protected _state: string = '';

  scopes(scope: string): OAuth
  {
    this._scope = scope || 'snsapi_userinfo';
    return this;
  }

  callback(callback: string): OAuth
  {
    this._callback = callback || '';
    return this;
  }

  state(state: string): OAuth
  {
    this._state = state || '';
    return this;
  }

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
      appid: this.app['config']['app_id'],
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

  async user(code: string): Promise<User>
  {
    let params = {
      appid: this.app['config']['app_id'],
      secret: this.app['config']['secret'],
      code: code,
      grant_type: 'authorization_code'
    };

    let res = await this.httpGet('/sns/oauth2/access_token', params);
    if (res.errcode) {
      this.app['log']('Fail to fetch access_token', res);
      throw new Error('Fail to fetch access_token');
    }

    let user = new User;
    user.id = res.openid;
    user.token = res;

    if (this.app['config']['scope'] != 'snsapi_base') {
      let params = {
        access_token: user.token['access_token'],
        openid: user.id,
        lang: 'zh_CN'
      };

      res = await this.httpGet('/sns/userinfo', params);
      if (res.errcode) {
        this.app['log']('Fail to fetch userinfo', res);
        return user;
      }
      user.id = res.openid;
      user.nickname = res.nickname;
      user.name = res.nickname;
      user.avatar = res.headimgurl;
      user.original = res;
    }

    return user;
  }
}
