
import qs from 'qs';
import Core from './core';
import {log} from '../utils';

class User {
  constructor () {
    this.id = ''
    this.nickname = ''
    this.name = ''
    this.avatar = ''
    this.original = {}
    this.token = {}
  }
};

const init = function (instance) {
};

const redirect = function (state = '') {
  let instance = Core.getInstance();
  if (!instance.$config.oauth) return '';
  if (!instance.$config.oauth.scope) {
    throw new Error('未填写授权scope');
    return '';
  }
  if (!instance.$config.oauth.redirect) {
    throw new Error('未填写授权回调地址');
    return '';
  }
  let redirect_uri = instance.$config.oauth.redirect;
  if (redirect_uri.substr(0, 7) != 'http://' && redirect_uri.substr(0, 8) != 'https://') {
    throw new Error('请填写完整的回调地址，以“http://”或“https://”开头');
    return '';
  }

  let api = 'connect/oauth2/authorize';
  if (instance.$config.oauth.scope == 'snsapi_login') {
    api = 'connect/qrconnect';
  }

  let params = {
    appid: instance.$config.appKey,
    redirect_uri: redirect_uri,
    response_type: 'code',
    scope: instance.$config.oauth.scope
  }
  if (state) {
    params.state = state;
  }

  return 'https://open.weixin.qq.com/' + api + '?' + qs.stringify(params) + '#wechat_redirect';
};

const user = async function (code) {
  let user = await fetchAccessToken(code);
  let instance = Core.getInstance();
  if (instance.$config.oauth.scope != 'snsapi_base') {
    user = await fetchUserInfo(user);
  }
  return user;
};

const fetchAccessToken = async function (code) {
  let instance = Core.getInstance();
  let params = {
    appid: instance.$config.appKey,
    secret: instance.$config.appSecret,
    code: code,
    grant_type: 'authorization_code'
  };
  let url = instance.BASE_API + 'sns/oauth2/access_token?' + qs.stringify(params);

  let response = await instance.requestGet(url);
  let user = new User;
  user.id = response.openid;
  user.token = response;
  return user;
};

const fetchUserInfo = async function (user) {
  let params = {
    access_token: user.token.access_token,
    openid: user.id,
    lang: 'zh_CN'
  };
  let instance = Core.getInstance();
  let url = instance.BASE_API + 'sns/userinfo?' + qs.stringify(params);

  let response = await instance.requestGet(url);
  if (response.errcode) {
    log('oauth.fetchUserInfo()', response);
    return user;
  }
  user.id = response.openid;
  user.nickname = response.nickname;
  user.name = response.nickname;
  user.avatar = response.headimgurl;
  user.original = response;
  return user;
};

export default {
  init,
  redirect,
  user
};
