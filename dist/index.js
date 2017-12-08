/*!
 * EasyWechat.js v1.3.2
 * (c) 2017-2017 Hpyer
 * Released under the MIT License.
 */

'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var merge = _interopDefault(require('merge'));
var request = _interopDefault(require('request'));
var Body = _interopDefault(require('body'));
var Url = _interopDefault(require('url'));
var qs = _interopDefault(require('qs'));
var fs = _interopDefault(require('fs'));
var path = _interopDefault(require('path'));
var sha1 = _interopDefault(require('sha1'));
var xml2js = require('xml2js');

function __async(g){return new Promise(function(s,j){function c(a,x){try{var r=g[x?"throw":"next"](a);}catch(e){j(e);return}r.done?s(r.value):Promise.resolve(r.value).then(c,d);}function d(e){c(e,1);}c();})}

class AppServer {
  constructor (req, res) {
    this.$req = req;
    this.$res = res;
  }

  getMethod () {
    if (!this.$req) return {};
    return this.$req.method;
  }

  getQuery () {
    if (!this.$req) return {};
    let url = Url.parse(this.$req.url, true);
    return url.query;
  }

  _readBody () {
    return new Promise((resolve, reject) => {
      Body(this.$req, (err, body) => {
        if (err) {
          reject(err);
        } else {
          resolve(body);
        }
      });
    })
    .catch((err) => {
      console.log('app_server._readBody()', err);
    });
  }

  getBody () {return __async(function*(){
    if (!this.$req) return '';
    let body = yield this._readBody();
    return body;
  }.call(this))}

  _initResponseOptions (options = {}) {
    options.status = options.status || 200;
    options.contentType = options.contentType || 'text/html';
    options.headers = options.headers || {};
    options.headers['Content-Type'] = options.contentType;
    return options
  }

  sendResponse (content, options = {}) {
    if (!this.$res) return false;
    options = this._initResponseOptions(options);
    this.$res.writeHead(options.status, options.headers);
    this.$res.end(content);
  }
}

class AppServerKoa2 extends AppServer {
  constructor (ctx) {
    super(ctx.req, ctx.res);
    this.$ctx = ctx;
  }

  sendResponse (content, options = {}) {
    if (!this.$ctx) return false;
    options = this._initResponseOptions(options);
    this.$ctx.status = options.status;
    for (let k in options.headers) {
      this.$ctx.set(k, options.headers[k]);
    }
    this.$ctx.body = content;
  }
}

class AppServerExpress extends AppServer {
  constructor (req, res) {
    super(req, res);
  }

  sendResponse (content, options = {}) {
    if (!this.$res) return false;
    options = this._initResponseOptions(options);
    this.$res.status(options.status).set(options.headers).send(content);
  }
}

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

  setAppServerDefault (req, res) {
    this.$config.app = new AppServer(req, res);
  }

  setAppServerKoa2 (ctx) {
    this.$config.app = new AppServerKoa2(ctx);
  }

  setAppServerExpress (req, res) {
    this.$config.app = new AppServerExpress(req, res);
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
        }
        catch (e) {}
        resolve(body);
      }
    });
  });
};

EasyWechat$1.prototype.requestFile = (url) => {
  return new Promise((resolve, reject) => {
    request({
      method: 'GET',
      uri: url,
      encoding: 'binary'
    }, function (error, response, body) {
      if (error) {
        reject(error);
      }
      else {
        resolve(body);
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
        resolve(body);
      }
    });
  });
};

EasyWechat$1.prototype.$plugins = [];
EasyWechat$1.registPlugin = (name, plugin) => {
  EasyWechat$1.prototype[name] = plugin;
  EasyWechat$1.prototype.$plugins.push(name);
};

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

const user = function (code) {return __async(function*(){
  let user = yield fetchAccessToken(code);
  if ($instance.$config.oauth.scope != 'snsapi_base') {
    user = yield fetchUserInfo(user);
  }
  return user;
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
  let user = new User;
  user.id = response.openid;
  user.token = response;
  return user;
}())};

const fetchUserInfo = function (user) {return __async(function*(){
  let params = {
    access_token: user.token.access_token,
    openid: user.id,
    lang: 'zh_CN'
  };
  let url = URL_USER_INFO + '?' + qs.stringify(params);

  let response = yield $instance.requestGet(url);
  if (response.errcode) {
    console.log('oauth.fetchUserInfo()', response);
    return false;
  }
  user.id = response.openid;
  user.nickname = response.nickname;
  user.name = response.nickname;
  user.avatar = response.headimgurl;
  user.original = response;
  return user;
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

// 复制对象方法
const cloneObj = function (oldObj) {
  if (!oldObj) return oldObj;
  if (typeof(oldObj) != 'object') return oldObj;
  let newObj = new Object();
  for (let k in oldObj) {
    newObj[k] = cloneObj(oldObj[k]);
  }
  return newObj;
};

// 扩展对象
const extendObj = function () {
  let args = arguments;
  if (args.length == 0) return null;
  let temp = cloneObj(args[0]);
  if (args.length == 1) return temp;
  for (let i=1; i<args.length; i++) {
    if (!args[i] || typeof(args[i]) != 'object') continue;
    for (let k in args[i]) {
      temp[k] = args[i][k];
    }
  }
  return temp;
};

var utils = {
  getTimestamp,
  randomString,
  buildApiUrl,
  cloneObj,
  extendObj
};

class CacheInterface {
  fetch (id) {
    return null;
  }

  contains (id, buffer_time = 0) {
    return true;
  }

  save (id, data = null, lifeTime = 0) {
    return true;
  }

  delete (id) {
    return true;
  }
}

class MemoryCache extends CacheInterface {
  constructor () {
    this.$datas = {};
  }

  fetch (id) {
    return this.contains(id) ? this.$datas[id].data : null;
  }

  contains (id) {
    if (typeof this.$datas[id] != 'object') return false;
    return true;
  }

  save (id, data = null, lifeTime = 0) {
    let dataItem = {
      data,
      lifeTime: lifeTime > 0 ? lifeTime + utils.getTimestamp() : 0
    };
    this.$datas[id] = dataItem;
    return true;
  }

  delete (id) {
    delete this.$datas[id];
    return true;
  }
}

class FileCache extends CacheInterface {
  constructor (options) {
    let defaultOptions = {
      path: '',
      dirMode: 0o777,
      fileMode: 0o666,
      ext: '.cache'
    };
    this.$options = utils.extendObj(defaultOptions, options);
    this.$options.path = path.resolve(this.$options.path);
    try {
      fs.mkdirSync(this.$options.path, this.$options.dirMode);
    }
    catch (e) {
      console.log('无法创建缓存目录：' + this.$options.path, e);
    }
  }

  getCacheFile (id) {
    return this.$options.dir + id + this.$options.ext;
  }

  fetch (id) {
    let content = null;
    let file = this.getCacheFile(id);
    try {
      let fd = fs.openSync(file);
      let dataItem = JSON.parse(fs.readFileSync(fd, {
        encoding: 'utf-8',
        flag: 'r'
      }));
      fs.closeSync(fd);

      if (dataItem.lifeTime > 0 && dataItem.lifeTime < utils.getTimestamp()) {
        content = null;
      }
      else {
        content = dataItem.data;
      }
    }
    catch (e) {
      console.log('无法读取缓存文件：' + file, e);
      content = null;
    }
    return content;
  }

  contains (id, buffer_time = 0) {
    let file = this.getCacheFile(id);
    try {
      fs.accessSync(file, fs.constants.R_OK & fs.constants.W_OK);
    }
    catch (e) {
      return false;
    }
    return true;
  }

  save (id, data = null, lifeTime = 0) {
    let file = this.getCacheFile(id);
    try {
      let dataItem = {
        data,
        lifeTime: lifeTime > 0 ? lifeTime + utils.getTimestamp() : 0
      };
      fs.writeFileSync(file, JSON.stringify(dataTime), {
        mode: this.$options.fileMode,
        encoding: 'utf-8',
        flag: 'w'
      });
    }
    catch (e) {
      console.log('无法写入缓存文件：' + file, e);
      return false;
    }
    return true;
  }

  delete (id) {
    let file = this.getCacheFile(id);
    try {
      fs.unlinkSync(file);
    }
    catch (e) {
      console.log('无法删除缓存文件：' + file, e);
      return false;
    }
    return true;
  }
}


var caches = Object.freeze({
	CacheInterface: CacheInterface,
	MemoryCache: MemoryCache,
	FileCache: FileCache
});

var $instance$1;

const init$1 = function (instance) {
  $instance$1 = instance;

  if (!$instance$1.$config.cache) {
    switch ($instance$1.$config.cache_driver) {
      case 'file':
        $instance$1.$config.cache = new FileCache($instance$1.$config.cache_options);
        break;
      case 'memory':
      default:
        $instance$1.$config.cache = new MemoryCache;
    }
  }
};

const setCache = function (cache) {
  if (
    cache
    && typeof cache.fetch == 'function'
    && typeof cache.contains == 'function'
    && typeof cache.save == 'function'
    && typeof cache.delete == 'function'
  ) {
    $instance$1.$config.cache = cache;
  }
};

var cache = {
  init: init$1,
  setCache
};

const URL_ACCESS_TOKEN$1 = 'https://api.weixin.qq.com/cgi-bin/token';

var $instance$2;

const init$2 = function (instance) {
  $instance$2 = instance;

  $instance$2.$config.access_token_cache_key = $instance$2.$config.access_token_cache_key || 'NODE_EASYWECHAT_ACCESS_TOKEN';
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
  let accessToken = null;
  if (force || !$instance$2.$config.cache.contains($instance$2.$config.access_token_cache_key)) {
    let res = yield fetchAccessToken$1();
    setToken(res.access_token, res.expires_in);
    accessToken = res.access_token;
  }
  else {
    accessToken = $instance$2.$config.cache.fetch($instance$2.$config.access_token_cache_key);
  }
  return accessToken;
}())};

const setToken = function (access_token, expires_in = 7200) {
  $instance$2.$config.cache.save($instance$2.$config.access_token_cache_key, access_token, expires_in);
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

  $instance$3.$config.jssdk_cache_key = $instance$3.$config.jssdk_cache_key || 'NODE_EASYWECHAT_JSSKD_TICKET';
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
  let jssdkTicket = null;
  if (!$instance$3.$config.cache.contains($instance$3.$config.jssdk_cache_key)) {
    let res = yield fetchJsapiTicket();
    $instance$3.$config.cache.save($instance$3.$config.jssdk_cache_key, res.ticket, res.expires_in);
    jssdkTicket = res.ticket;
  }
  else {
    jssdkTicket = $instance$3.$config.cache.fetch($instance$3.$config.jssdk_cache_key);
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

class Raw {
  constructor (data) {
    this.dataParams = {
      ToUserName: '',
      FromUserName: '',
      CreateTime: utils.getTimestamp(),
      MsgType: ''
    };
    this.json = null;
    this.data = '';
    if (typeof data == 'object') {
      this.json = data;
    }
    else {
      this.data = data;
    }
  }

  setAttribute (name, value) {
    this.dataParams[name] = value;
  }

  formatData () {
    let data = '<xml>' + this._formatData(this.dataParams) + '</xml>';
    return data;
  }

  _formatData (v) {
    if (typeof v == 'object') {
      let data = '';
      for (let k in v) {
        data += `<${k}>${this._formatData(v[k])}</${k}>`;
      }
      return data;
    }
    if (typeof v == 'string') {
      return '<![CDATA[' + v + ']]>';
    }
    else {
      return v;
    }
  }

  getData () {
    if (this.json) return JSON.stringify(this.json);
    if (!this.data) this.data = this.formatData();
    return this.data;
  }
}

class Text extends Raw {
  constructor (options) {
    super('');
    this.dataParams.MsgType = 'text';
    this.dataParams.Content = options.content || '';
  }

  content (v) {
    this.dataParams.Content = v;
  }
}

class Image extends Raw {
  constructor (options) {
    super('');
    this.dataParams.MsgType = 'image';
    this.dataParams.Image = {
      MediaId: options.media_id || ''
    };
  }

  mediaId (v) {
    this.dataParams.Image.MediaId = v;
  }
}

class Voice extends Raw {
  constructor (options) {
    super('');
    this.dataParams.MsgType = 'voice';
    this.dataParams.Voice = {
      MediaId: options.media_id || ''
    };
  }

  mediaId (v) {
    this.dataParams.Voice.MediaId = v;
  }
}

class Video extends Raw {
  constructor (options) {
    super('');
    this.dataParams.MsgType = 'video';
    this.dataParams.Video = {
      MediaId: options.media_id || '',
      Title: options.title || '',
      Description: options.description || ''
    };
  }

  mediaId (v) {
    this.dataParams.Video.MediaId = v;
  }

  title (v) {
    this.dataParams.Video.Title = v;
  }

  description (v) {
    this.dataParams.Video.Description = v;
  }
}

class Music extends Raw {
  constructor (options) {
    super('');
    this.dataParams.MsgType = 'music';
    this.dataParams.Music = {
      MediaId: options.media_id || '',
      Title: options.title || '',
      Description: options.description || '',
      MusicUrl: options.music_url || '',
      HQMusicUrl: options.hq_music_url || '',
      ThumbMediaId: options.thumb_media_id || ''
    };
  }

  mediaId (v) {
    this.dataParams.Music.MediaId = v;
  }

  title (v) {
    this.dataParams.Music.Title = v;
  }

  description (v) {
    this.dataParams.Music.Description = v;
  }

  musicUrl (v) {
    this.dataParams.Music.MusicUrl = v;
  }

  hqMusicurl (v) {
    this.dataParams.Music.HQMusicUrl = v;
  }

  thumbMediaId (v) {
    this.dataParams.Music.ThumbMediaId = v;
  }
}

class News extends Raw {
  constructor (options) {
    super('');
    this.dataParams.MsgType = 'news';
    this.dataParams.ArticleCount = 1;
    this.dataParams.Articles = {
      item: {
        Title: options.title || '',
        Description: options.description || '',
        Url: options.url || '',
        PicUrl: options.image || ''
      }
    };
  }

  title (v) {
    this.dataParams.Articles.item.Title = v;
  }

  description (v) {
    this.dataParams.Articles.item.Description = v;
  }

  url (v) {
    this.dataParams.Articles.item.Url = v;
  }

  picUrl (v) {
    this.dataParams.Articles.item.PicUrl = v;
  }
}


var messages = Object.freeze({
	Raw: Raw,
	Text: Text,
	Image: Image,
	Voice: Voice,
	Video: Video,
	Music: Music,
	News: News
});

var $instance$4;

const init$4 = function (instance) {
  $instance$4 = instance;

  $server_handler = function () {};
};

let $server_handler;
let $server_message;

const setMessageHandler = function (handler) {
  if (typeof handler != 'function') handler = function () {};
  $server_handler = handler;
};

const serve = function () {return __async(function*(){
  let app = $instance$4.$config.app;
  if (!app) {
    throw new Error('未在配置文件中设置应用服务器');
    return;
  }
  if (app.getMethod() == 'GET') {
    let query = app.getQuery();
    if (!query.signature || !query.echostr || !query.timestamp || !query.nonce) {
      app.sendResponse('Hello node-easywechat');
      return;
    }
    let hash_data = [query.nonce, query.timestamp, $instance$4.$config.token].sort();
    let hash = sha1(hash_data.join(''));
    if (hash === query.signature) {
      app.sendResponse(query.echostr);
    }
    else {
      app.sendResponse('fail');
    }
  }
  else {
    let xml = yield app.getBody();
    $server_message = yield parseMessage(xml);
    if ($server_handler && typeof $server_handler == 'function') {
      let result = yield $server_handler($server_message);

      if (!result || (typeof result == 'string' && result.toUpperCase() == 'SUCCESS')) {
        app.sendResponse('SUCCESS');
        return
      }
      let response = null;
      if (typeof result == 'string') {
        response = new Text({content: result});
      }
      else {
        response = result;
      }

      if (response && typeof response == 'object') {
        response.setAttribute('ToUserName', $server_message.FromUserName);
        response.setAttribute('FromUserName', $server_message.ToUserName);
        let data = response.getData();
        console.log('server.send()', data);
        app.sendResponse(data);
      }
    }
  }
}())};

const parseMessage = function (xml) {return __async(function*(){
  return new Promise((resolve, reject) => {
    xml2js.parseString(xml, (err, result) => {
      if (err) {
        reject(err);
      } else {
        let message;
        if (result && result.xml) {
          message = {};
          for (let k in result.xml) {
            message[k] = result.xml[k][0];
          }
        }
        resolve(message);
      }
    });
  })
  .catch((err) => {
    console.log('server.parseMessage()', err);
  });
}())};

const getMessage = function () {
  return $server_message;
};

var server = {
  init: init$4,
  setMessageHandler,
  serve,
  getMessage
};

const URL_NOTICE_SEND = 'https://api.weixin.qq.com/cgi-bin/message/template/send';
const URL_NOTICE_GET_INDUSTRY = 'https://api.weixin.qq.com/cgi-bin/template/get_industry';
const URL_NOTICE_SET_INDUSTRY = 'https://api.weixin.qq.com/cgi-bin/template/api_set_industry';
const URL_NOTICE_ADD_TEMPLATE = 'https://api.weixin.qq.com/cgi-bin/template/api_add_template';
const URL_NOTICE_GET_PRIVATE_TEMPLATES = 'https://api.weixin.qq.com/cgi-bin/template/get_all_private_template';
const URL_NOTICE_DELETE_PRIVATE_TEMPLATES = 'https://api.weixin.qq.com/cgi-bin/template/del_private_template';

var $instance$5;

const init$5 = function (instance) {
  $instance$5 = instance;

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

  if (!message.touser) {
    throw new Error('用户openid为空');
    return;
  }
  if (!message.template_id) {
    throw new Error('模板id为空');
    return;
  }

  let url = yield utils.buildApiUrl($instance$5, URL_NOTICE_SEND);

  return yield $instance$5.requestPost(url, message);
}())};

const getIndustry = function () {return __async(function*(){
  let url = yield utils.buildApiUrl($instance$5, URL_NOTICE_GET_INDUSTRY);

  return yield $instance$5.requestPost(url);
}())};

const setIndustry = function (industry_id1, industry_id2) {return __async(function*(){
  let url = yield utils.buildApiUrl($instance$5, URL_NOTICE_SET_INDUSTRY);
  let data = {
    industry_id1: industry_id1,
    industry_id2: industry_id2
  };
  return yield $instance$5.requestPost(url, data);
}())};

const addTemplate = function (template_id_short) {return __async(function*(){
  let url = yield utils.buildApiUrl($instance$5, URL_NOTICE_ADD_TEMPLATE);
  let data = {
    template_id_short: template_id_short
  };
  return yield $instance$5.requestPost(url, data);
}())};

const getPrivateTemplates = function () {return __async(function*(){
  let url = yield utils.buildApiUrl($instance$5, URL_NOTICE_GET_PRIVATE_TEMPLATES);

  return yield $instance$5.requestPost(url);
}())};

const deletePrivateTemplate = function (template_id) {return __async(function*(){
  let url = yield utils.buildApiUrl($instance$5, URL_NOTICE_DELETE_PRIVATE_TEMPLATES);
  let data = {
    template_id: template_id
  };
  return yield $instance$5.requestPost(url, data);
}())};

var notice = {
  init: init$5,
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

const URL_QRCODE_CREATE = 'https://api.weixin.qq.com/cgi-bin/qrcode/create';
const URL_QRCODE_FETCH = 'https://mp.weixin.qq.com/cgi-bin/showqrcode';

var $instance$6;

const init$6 = function (instance) {
  $instance$6 = instance;
};

const temporary = function (scene, expireSeconds = null) {return __async(function*(){
  expireSeconds = parseInt(expireSeconds);
  if (expireSeconds <= 0 || expireSeconds > 604800) expireSeconds = 604800;
  let action_name = '';
  if (typeof scene == 'string') {
    scene = {scene_str: scene};
    action_name = 'QR_STR_SCENE';
  }
  else {
    scene = {scene_id: scene};
    action_name = 'QR_SCENE';
  }
  let data = {
    expire_seconds: expireSeconds,
    action_name,
    action_info: {scene}
  };
  let accessToken = yield $instance$6.access_token.getToken();
  let url = URL_QRCODE_CREATE + '?access_token=' + accessToken;
  return yield $instance$6.requestPost(url, data);
}())};

const forever = function (scene) {return __async(function*(){
  let action_name = '';
  if (typeof scene == 'string') {
    scene = {scene_str: scene};
    action_name = 'QR_LIMIT_STR_SCENE';
  }
  else {
    scene = {scene_id: scene};
    action_name = 'QR_LIMIT_SCENE';
  }
  let data = {
    action_name,
    action_info: {scene}
  };
  let accessToken = yield $instance$6.access_token.getToken();
  let url = URL_QRCODE_CREATE + '?access_token=' + accessToken;
  return yield $instance$6.requestPost(url, data);
}())};

const url$1 = function (ticket) {return __async(function*(){
  let url = URL_QRCODE_FETCH + '?ticket=' + ticket;
  return yield $instance$6.requestFile(url);
}())};

var qrcode = {
  init: init$6,
  temporary,
  forever,
  url: url$1
};

const URL_USER_GET = 'https://api.weixin.qq.com/cgi-bin/user/info';
const URL_USER_BATCHGET = 'https://api.weixin.qq.com/cgi-bin/user/info/batchget';
const URL_USER_LISTS = 'https://api.weixin.qq.com/cgi-bin/user/get';
const URL_USER_REMARK = 'https://api.weixin.qq.com/cgi-bin/user/info/updateremark';
const URL_USER_BLACKLIST = 'https://api.weixin.qq.com/cgi-bin/tags/members/getblacklist';
const URL_USER_BLACKLIST_BLOCK = 'https://api.weixin.qq.com/cgi-bin/tags/members/batchblacklist';
const URL_USER_BLACKLIST_UNBLOCK = 'https://api.weixin.qq.com/cgi-bin/tags/members/batchunblacklist';

class User$1 {
  constructor () {
    this.id = '';
    this.nickname = '';
    this.name = '';
    this.avatar = '';
    this.original = {};
    this.token = {};
  }
}

var $instance$7;

const init$7 = function (instance) {
  $instance$7 = instance;
};

const get = function (openid, lang = 'zh_CN') {return __async(function*(){
  let accessToken = yield $instance$7.access_token.getToken();
  let url = URL_USER_GET + '?access_token=' + accessToken + '&openid=' + openid + '&lang=' + lang;
  let response = yield $instance$7.requestGet(url);
  let user = new User$1;
  user.id = response.openid;
  user.nickname = response.nickname;
  user.name = response.nickname;
  user.avatar = response.headimgurl;
  user.original = response;
  return user;
}())};

const batchGet = function (user_list) {return __async(function*(){
  let data = {
    user_list
  };
  let accessToken = yield $instance$7.access_token.getToken();
  let url = URL_USER_BATCHGET + '?access_token=' + accessToken;
  return yield $instance$7.requestPost(url, data);
}())};

const lists = function (next_openid = null) {return __async(function*(){
  let accessToken = yield $instance$7.access_token.getToken();
  let url = URL_USER_LISTS + '?access_token=' + accessToken;
  if (next_openid) {
    url += '&next_openid=' + next_openid;
  }
  return yield $instance$7.requestGet(url);
}())};

const remark = function (openid, remark) {return __async(function*(){
  let accessToken = yield $instance$7.access_token.getToken();
  let url = URL_USER_REMARK + '?access_token=' + accessToken;
  return yield $instance$7.requestPost(url);
}())};

const blacklist = function (begin_openid) {return __async(function*(){
  let data = {};
  if (begin_openid) {
    data.begin_openid = begin_openid;
  }
  let accessToken = yield $instance$7.access_token.getToken();
  let url = URL_USER_BLACKLIST + '?access_token=' + accessToken;
  return yield $instance$7.requestPost(url, data);
}())};

const batchBlock = function (openid_list) {return __async(function*(){
  let data = {
    openid_list
  };
  let accessToken = yield $instance$7.access_token.getToken();
  let url = URL_USER_BLACKLIST_BLOCK + '?access_token=' + accessToken;
  return yield $instance$7.requestPost(url, data);
}())};

const batchUnblock = function (openid_list) {return __async(function*(){
  let data = {
    openid_list
  };
  let accessToken = yield $instance$7.access_token.getToken();
  let url = URL_USER_BLACKLIST_UNBLOCK + '?access_token=' + accessToken;
  return yield $instance$7.requestPost(url, data);
}())};

const block = function (openid) {return __async(function*(){
  return yield batchBlock([openid]);
}())};

const unblock = function (openid) {return __async(function*(){
  return yield batchUnblock([openid]);
}())};

var user$1 = {
  init: init$7,
  get,
  batchGet,
  lists,
  remark,
  blacklist,
  batchBlock,
  batchUnblock,
  block,
  unblock
};

const URL_MENU_GET_ALL = 'https://api.weixin.qq.com/cgi-bin/menu/get';
const URL_MENU_GET_CURRENT = 'https://api.weixin.qq.com/cgi-bin/get_current_selfmenu_info';
const URL_MENU_CREATE = 'https://api.weixin.qq.com/cgi-bin/menu/create';
const URL_MENU_DELETE = 'https://api.weixin.qq.com/cgi-bin/menu/delete';

var $instance$8;

const init$8 = function (instance) {
  $instance$8 = instance;
};

const all = function () {return __async(function*(){
  let accessToken = yield $instance$8.access_token.getToken();
  let url = URL_MENU_GET_ALL + '?access_token=' + accessToken;
  return yield $instance$8.requestPost(url);
}())};

const current = function () {return __async(function*(){
  let accessToken = yield $instance$8.access_token.getToken();
  let url = URL_MENU_GET_CURRENT + '?access_token=' + accessToken;
  return yield $instance$8.requestPost(url);
}())};

const add = function (buttons) {return __async(function*(){
  let data = {
    button: buttons
  };
  let accessToken = yield $instance$8.access_token.getToken();
  let url = URL_MENU_CREATE + '?access_token=' + accessToken;
  return yield $instance$8.requestPost(url, data);
}())};

const destroy = function () {return __async(function*(){
  let url = URL_MENU_DELETE + '?access_token=' + accessToken;
  return yield $instance$8.requestPost(url);
}())};

var menu = {
  init: init$8,
  all,
  current,
  add,
  destroy
};

const URL_SHORTURL = 'https://api.weixin.qq.com/cgi-bin/shorturl';

var $instance$9;

const init$9 = function (instance) {
  $instance$9 = instance;
};

const shorten = function (long_url) {return __async(function*(){
  let data = {
    action: 'long2short',
    long_url
  };
  let accessToken = yield $instance$9.access_token.getToken();
  let url = URL_SHORTURL + '?access_token=' + accessToken;
  return yield $instance$9.requestPost(url, data);
}())};

var url$2 = {
  init: init$9,
  shorten
};

EasyWechat$1.registPlugin('oauth', oauth);
EasyWechat$1.registPlugin('cache', cache);
EasyWechat$1.registPlugin('access_token', access_token);
EasyWechat$1.registPlugin('jssdk', jssdk);
EasyWechat$1.registPlugin('server', server);
EasyWechat$1.registPlugin('notice', notice);
EasyWechat$1.registPlugin('qrcode', qrcode);
EasyWechat$1.registPlugin('user', user$1);
EasyWechat$1.registPlugin('menu', menu);
EasyWechat$1.registPlugin('url', url$2);

EasyWechat$1.Cache = {};
for (let k in caches) {
  EasyWechat$1.Cache[k] = caches[k];
}

EasyWechat$1.Message = {};
for (let k in messages) {
  EasyWechat$1.Message[k] = messages[k];
}

module.exports = EasyWechat$1;
