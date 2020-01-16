'use strict';

import * as Qs from 'qs';
import BaseClient from '../../Core/BaseClient';

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
  private scope: string = 'snsapi_userinfo';
  private callback: string = '';
  private state: string = '';

  setScope(scope: string): OAuth
  {
    this.scope = scope || 'snsapi_userinfo';
    return this;
  }

  setCallback(callback: string): OAuth
  {
    this.callback = callback || '';
    return this;
  }

  setState(state: string): OAuth
  {
    this.state = state || '';
    return this;
  }

  redirect(): string
  {
    if (!this.app['config']['oauth']) {
      throw new Error('未配置网页授权相关参数');
    }
    let scope = this.scope || this.app['config']['oauth']['scope'] || 'snsapi_userinfo';
    let callback = this.callback || this.app['config']['oauth']['callback'] || '';
    if (callback.substr(0, 7) != 'http://' && callback.substr(0, 8) != 'https://') {
      throw new Error('请填写完整的回调地址，以“http://”或“https://”开头');
    }

    let params = {
      appid: this.app['config']['app_id'],
      redirect_uri: callback,
      response_type: 'code',
      scope: scope,
      state: '',
    }
    if (this.state) {
      params.state = this.state;
    }

    return 'https://open.weixin.qq.com/connect/oauth2/authorize?' + Qs.stringify(params) + '#wechat_redirect';
  }

  async user(code: string): Promise<User>
  {
    let params = {
      appid: this.app['config']['app_id'],
      secret: this.app['config']['secret'],
      code: code,
      grant_type: 'authorization_code'
    };
    let url = 'https://api.weixin.qq.com/sns/oauth2/access_token?' + Qs.stringify(params);

    let res = await this.httpGet(url);
    if (res.errcode) {
      this.app['log']('获取 AccessToken 失败', res);
      throw new Error('获取 AccessToken 失败');
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
      let url = 'https://api.weixin.qq.com/sns/userinfo?' + Qs.stringify(params);

      res = await this.httpGet(url);
      if (res.errcode) {
        this.app['log']('获取用户信息失败', res);
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
