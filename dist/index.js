/*!
 * EasyWechat.js v1.0.0
 * (c) 2017-2017 Hpyer
 * Released under the MIT License.
 */

'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var merge = _interopDefault(require('merge'));
var request = _interopDefault(require('request'));
var qs = _interopDefault(require('qs'));
var sha1 = _interopDefault(require('sha1'));

const defaultConfig = {
  appKey: '',
  appSecret: ''
};

class EasyWechat$1 {
  constructor (config = {}) {
    this.$config = merge({}, defaultConfig, config);
    if (!this.$config.appKey) {
      throw new Error('未填写appKey');
      return;
    }
    if (!this.$config.appSecret) {
      throw new Error('未填写appSecret');
      return;
    }

    this.$plugins.forEach((name) => {
      this[name].init(this);
    });
  }
}

EasyWechat$1.prototype.requestGet = (url) => {
  return new Promise((resolve, reject) => {
    request({
      method: 'GET',
      uri: url
    }, function (error, response, body) {
      if (error) {
        reject(error);
      }
      else {
        try {
          body = JSON.parse(body);
          resolve(body);
        }
        catch (e) {
          reject(e);
        }
      }
    });
  });
};

EasyWechat$1.prototype.requestPost = (url, data = null) => {
  return new Promise((resolve, reject) => {
    request({
      method: 'POST',
      uri: url,
      json: data
    }, function (error, response, body) {
      if (error) {
        reject(error);
      }
      else {
        try {
          resolve(body);
        }
        catch (e) {
          reject(e);
        }
      }
    });
  });
};

EasyWechat$1.prototype.$plugins = [];
EasyWechat$1.registPlugin = (name, plugin) => {
  EasyWechat$1.prototype[name] = plugin;
  EasyWechat$1.prototype.$plugins.push(name);
};

function __async(g){return new Promise(function(s,j){function c(a,x){try{var r=g[x?"throw":"next"](a);}catch(e){j(e);return}r.done?s(r.value):Promise.resolve(r.value).then(c,d);}function d(e){c(e,1);}c();})}

const URL_MP = 'https://open.weixin.qq.com/connect/oauth2/authorize';
const URL_OP = 'https://open.weixin.qq.com/connect/qrconnect';
const URL_ACCESS_TOKEN = 'https://api.weixin.qq.com/sns/oauth2/access_token';
const URL_USER_INFO = 'https://api.weixin.qq.com/sns/userinfo';

class User {
  constructor () {
    this.id = '';
    this.nickname = '';
    this.name = '';
    this.avatar = '';
    this.original = {};
    this.token = {};
  }
}

var $instance;

const init = function (instance) {
  $instance = instance;
};

const redirect = function (state = '') {
  if (!$instance.$config.oauth) return '';
  if (!$instance.$config.oauth.scope) {
    throw new Error('未填写授权scope');
    return '';
  }
  if (!$instance.$config.oauth.redirect) {
    throw new Error('未填写授权回调地址');
    return '';
  }
  let redirect_uri = $instance.$config.oauth.redirect;
  if (redirect_uri.substr(0, 7) != 'http://' && redirect_uri.substr(0, 8) != 'https://') {
    throw new Error('请填写完整的回调地址，以“http://”或“https://”开头');
    return '';
  }

  let url = URL_MP;
  if ($instance.$config.oauth.scope == 'snsapi_login') {
    url = URL_OP;
  }

  let params = {
    appid: $instance.$config.appKey,
    redirect_uri: redirect_uri,
    response_type: 'code',
    scope: $instance.$config.oauth.scope
  };
  if (state) {
    params.state = state;
  }

  return url + '?' + qs.stringify(params) + '#wechat_redirect';
};

var $user = null;

const user = function (code) {return __async(function*(){
  yield fetchAccessToken(code);
  yield fetchUserInfo();
  return $user;
}())};

const fetchAccessToken = function (code) {return __async(function*(){
  let params = {
    appid: $instance.$config.appKey,
    secret: $instance.$config.appSecret,
    code: code,
    grant_type: 'authorization_code'
  };
  let url = URL_ACCESS_TOKEN + '?' + qs.stringify(params);

  let response = yield $instance.requestGet(url);
  if (!$user) $user = new User;
  $user.id = response.openid;
  $user.token = response;
}())};

const fetchUserInfo = function () {return __async(function*(){
  let params = {
    access_token: $user.token.access_token,
    openid: $user.id,
    lang: 'zh_CN'
  };
  let url = URL_USER_INFO + '?' + qs.stringify(params);

  let response = yield $instance.requestGet(url);
  $user.id = response.openid;
  $user.nickname = response.nickname;
  $user.name = response.nickname;
  $user.avatar = response.headimgurl;
  $user.original = response;
}())};

var oauth = {
  init,
  redirect,
  user
};

const getTimestamp = function () {
  return parseInt((new Date()).getTime() / 1000);
};

const randomString = function (len = 16) {
  let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  let str = '';
  for (let i = 0; i < len; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
};

const buildApiUrl = function (instance, baseUrl) {return __async(function*(){
  let access_token = yield instance.access_token.getToken();
  return baseUrl + '?access_token=' + access_token;
}())};

var utils = {
  getTimestamp,
  randomString,
  buildApiUrl
};

class CacheDriver {
  constructor () {
    this.$datas = {};
  }

  fetch (id) {
    return this.contains(id) ? this.$datas[id].data : null;
  }

  contains (id, buffer_time = 0) {
    let dataItem = this.$datas[id];
    if (typeof dataItem != 'object') return false;
    if (dataItem.lifeTime > 0 && dataItem.lifeTime - buffer_time < utils.getTimestamp()) return false;
    return true;
  }

  save (id, data = null, lifeTime = 0) {
    let dataItem = {
      data,
      lifeTime: lifeTime > 0 ? lifeTime + utils.getTimestamp() : 0
    };
    this.$datas[id] = dataItem;
  }

  delete (id) {
    this.$datas[id] = null;
  }
}

var $instance$1;

const init$1 = function (instance) {
  $instance$1 = instance;

  $instance$1.$config.cache = $instance$1.$config.cache || new CacheDriver;
};

const setCache = function (cache) {
  if (
    cache
    && typeof cache.fetch == 'function'
    && typeof cache.contains == 'function'
    && typeof cache.save == 'function'
    && typeof cache.delete == 'function'
  ) {
    $cache = cache;
  }
};

var cache = {
  init: init$1,
  CacheDriver,
  setCache
};

const URL_ACCESS_TOKEN$1 = 'https://api.weixin.qq.com/cgi-bin/token';

var $instance$2;

const init$2 = function (instance) {
  $instance$2 = instance;

  $instance$2.$config.access_token = $instance$2.$config.access_token || {};
  $instance$2.$config.access_token.cache_id = $instance$2.$config.access_token.cache_id || 'NODE_EASYWECHAT_ACCESS_TOKEN';
  $instance$2.$config.access_token.buffer_time = $instance$2.$config.access_token.buffer_time || 60;
};

const fetchAccessToken$1 = function () {return __async(function*(){
  let params = {
    appid: $instance$2.$config.appKey,
    secret: $instance$2.$config.appSecret,
    grant_type: 'client_credential'
  };
  let url = URL_ACCESS_TOKEN$1 + '?' + qs.stringify(params);

  return yield $instance$2.requestGet(url);
}())};

const getToken = function (force = false) {return __async(function*(){
  let accessToken = $instance$2.$config.cache.fetch($instance$2.$config.access_token.cache_id);
  if (force || !$instance$2.$config.cache.contains($instance$2.$config.access_token.cache_id, $instance$2.$config.access_token.buffer_time)) {
    let res = yield fetchAccessToken$1();
    setToken(res.access_token, res.expires_in);
    accessToken = res.access_token;
  }
  return accessToken;
}())};

const setToken = function (access_token, expires_in = 7200) {
  $instance$2.$config.cache.save($instance$2.$config.access_token.cache_id, access_token, expires_in);
};

var access_token = {
  init: init$2,
  getToken,
  setToken
};

const URL_JSAPI_TICKET = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket';

var $instance$3;

const init$3 = function (instance) {
  $instance$3 = instance;

  $instance$3.$config.jssdk = $instance$3.$config.jssdk || {};
  $instance$3.$config.jssdk.cache_id = $instance$3.$config.jssdk.cache_id || 'NODE_EASYWECHAT_JSSKD_TICKET';
  $instance$3.$config.jssdk.buffer_time = $instance$3.$config.jssdk.buffer_time || 60;
};

var $url = '';

const setUrl = function (url) {
  $url = url;
};

const fetchJsapiTicket = function () {return __async(function*(){
  let accessToken = yield $instance$3.access_token.getToken();
  let params = {
    access_token: accessToken,
    type: 'jsapi'
  };
  let url = URL_JSAPI_TICKET + '?' + qs.stringify(params);

  return yield $instance$3.requestGet(url);
}())};

const config = function (APIs, debug = false, json = true) {return __async(function*(){
  let jssdkTicket = $instance$3.$config.cache.fetch($instance$3.$config.jssdk.cache_id);
  if (!$instance$3.$config.cache.contains($instance$3.$config.jssdk.cache_id, $instance$3.$config.jssdk.buffer_time)) {
    let res = yield fetchJsapiTicket();
    $instance$3.$config.cache.save($instance$3.$config.jssdk.cache_id, res.ticket, res.expires_in);
    jssdkTicket = res.ticket;
  }

  let url = $url;

  let noncestr = utils.randomString();
  let timestamp = utils.getTimestamp();
  let signature = makeSignature({
    jsapi_ticket: jssdkTicket,
    noncestr,
    timestamp,
    url
  });

  let config = {
    debug,
    appId: $instance$3.$config.appKey,
    timestamp,
    nonceStr: noncestr,
    signature,
    url,
    jsApiList: APIs
  };

  // 使用完清空设置的url
  $url = '';

  return json ? JSON.stringify(config) : config;
}())};

const makeSignature = function (params) {
  let paramsString = '';
  let sparator = '';
  for (let k in params) {
    paramsString += sparator + k + '=' + params[k];
    sparator = '&';
  }
  return sha1(paramsString);
};

var jssdk = {
  init: init$3,
  setUrl,
  config
};

const URL_NOTICE_SEND = 'https://api.weixin.qq.com/cgi-bin/message/template/send';
const URL_NOTICE_GET_INDUSTRY = 'https://api.weixin.qq.com/cgi-bin/template/get_industry';
const URL_NOTICE_SET_INDUSTRY = 'https://api.weixin.qq.com/cgi-bin/template/api_set_industry';
const URL_NOTICE_ADD_TEMPLATE = 'https://api.weixin.qq.com/cgi-bin/template/api_add_template';
const URL_NOTICE_GET_PRIVATE_TEMPLATES = 'https://api.weixin.qq.com/cgi-bin/template/get_all_private_template';
const URL_NOTICE_DELETE_PRIVATE_TEMPLATES = 'https://api.weixin.qq.com/cgi-bin/template/del_private_template';

var $instance$4;

const init$4 = function (instance) {
  $instance$4 = instance;

  $notice_message = new NoticeMessage;
};

class NoticeMessage {
  constructor () {
    this.reset();
  }
}

NoticeMessage.prototype.reset = function () {
  this.touser = '';
  this.template_id = '';
  this.url = '';
  this.miniprogram = {};
  this.data = [];
};

let $notice_message = null;

const to = function (touser) {
  $notice_message.touser = touser;
  return this;
};

const uses = function (template_id) {
  $notice_message.template_id = template_id;
  return this;
};

const url = function (url) {
  $notice_message.url = url;
  return this;
};

const data = function (data) {
  $notice_message.data = formatData(data);
  return this;
};

const formatData = function (data) {
  let newData = {};
  for (let k in data) {
    let v = data[k];
    if (typeof v == 'object') {
      if (typeof v.length != 'undefined') {
        newData[k] = {
          value: v[0],
          color: v[1]
        };
      }
      else {
        newData[k] = v;
      }
    }
    else {
      newData[k] = {
        value: v
      };
    }
  }
  return newData;
};

const send = function (message = null) {return __async(function*(){
  if (message) {
    if (message.data) {
      message.data = formatData(message.data);
    }
  } else {
    message = {};
  }
  message = merge({}, $notice_message, message);
  $notice_message.reset();

  let url = yield utils.buildApiUrl($instance$4, URL_NOTICE_SEND);

  return yield $instance$4.requestPost(url, message);
}())};

const getIndustry = function () {return __async(function*(){
  let url = yield utils.buildApiUrl($instance$4, URL_NOTICE_GET_INDUSTRY);

  return yield $instance$4.requestPost(url);
}())};

const setIndustry = function (industry_id1, industry_id2) {return __async(function*(){
  let url = yield utils.buildApiUrl($instance$4, URL_NOTICE_SET_INDUSTRY);
  let data = {
    industry_id1: industry_id1,
    industry_id2: industry_id2
  };
  return yield $instance$4.requestPost(url, data);
}())};

const addTemplate = function (template_id_short) {return __async(function*(){
  let url = yield utils.buildApiUrl($instance$4, URL_NOTICE_ADD_TEMPLATE);
  let data = {
    template_id_short: template_id_short
  };
  return yield $instance$4.requestPost(url, data);
}())};

const getPrivateTemplates = function () {return __async(function*(){
  let url = yield utils.buildApiUrl($instance$4, URL_NOTICE_GET_PRIVATE_TEMPLATES);

  return yield $instance$4.requestPost(url);
}())};

const deletePrivateTemplate = function (template_id) {return __async(function*(){
  let url = yield utils.buildApiUrl($instance$4, URL_NOTICE_DELETE_PRIVATE_TEMPLATES);
  let data = {
    template_id: template_id
  };
  return yield $instance$4.requestPost(url, data);
}())};

var notice = {
  init: init$4,
  to,
  withTo: to,
  andTo: to,
  receiver: to,
  withReceiver: to,
  andhReceiver: to,
  uses,
  withUses: uses,
  andUses: uses,
  template: uses,
  withTemplate: uses,
  andTemplate: uses,
  templateId: uses,
  withTemplateId: uses,
  andTemplateId: uses,
  url,
  withUrl: url,
  andUrl: url,
  link: url,
  withLink: url,
  andLink: url,
  linkTo: url,
  withLinkTo: url,
  andLinkTo: url,
  data,
  withData: data,
  andData: data,
  send,
  getIndustry,
  setIndustry,
  addTemplate,
  getPrivateTemplates,
  deletePrivateTemplate
};

EasyWechat$1.registPlugin('oauth', oauth);
EasyWechat$1.registPlugin('cache', cache);
EasyWechat$1.registPlugin('access_token', access_token);
EasyWechat$1.registPlugin('jssdk', jssdk);
EasyWechat$1.registPlugin('notice', notice);

module.exports = EasyWechat$1;
