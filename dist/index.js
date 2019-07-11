/*!
 * EasyWechat.js v1.7.4
 * (c) 2017-2019 Hpyer
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
var WechatCrypto = _interopDefault(require('wechat-crypto'));
var xml2js = require('xml2js');

function __async(g){return new Promise(function(s,j){function c(a,x){try{var r=g[x?"throw":"next"](a);}catch(e){j(e);return}r.done?s(r.value):Promise.resolve(r.value).then(c,d);}function d(e){c(e,1);}c();})}

const log = function () {
  let args = arguments;
  args[0] = 'NodeEasywechat: ' + args[0];
  return console.log.apply(null, arguments);
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

const cloneObj = function (oldObj) {
  if (!oldObj) return oldObj;
  if (typeof(oldObj) != 'object') return oldObj;
  let newObj = new Object();
  for (let k in oldObj) {
    newObj[k] = cloneObj(oldObj[k]);
  }
  return newObj;
};

const extendObj$1 = function () {
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

const crypto = require('crypto');

const createHash = function (str, type = 'sha1') {
  return crypto.createHash(type).update(str).digest('hex');
};

const createHmac = function (str, key, type = 'sha256') {
  return crypto.createHmac(type, key).update(str).digest('hex');
};

const makeSignature = function (params, type = 'sha1', key = '') {
  let paramsString = '';
  let sparator = '';
  let keys = Object.keys(params);
  keys = keys.sort();
  for (let i=0; i<keys.length; i++) {
    if (keys[i] == 'sign' || !params[keys[i]]) continue;
    paramsString += sparator + keys[i] + '=' + params[keys[i]];
    sparator = '&';
  }
  if (key) {
    paramsString += '&key=' + key;
  }
  let sign = '';
  type = type.toLowerCase();
  switch (type) {
    case 'sha1':
    case 'md5':
      sign = createHash(paramsString, type);
      break;
    case 'hmac-sha256':
    case 'hmac_sha256':
      type = type.replace(/^hmac[\-|_]/i, '');
      sign = createHmac(paramsString, key, type);
      break;
  }
  return (sign + '').toUpperCase();
};


const isString = data => {
  return Object.prototype.toString.call(data) == '[object String]';
};

const isArray = data => {
  return Object.prototype.toString.call(data) == '[object Array]';
};

const isNumber = data => {
  return Object.prototype.toString.call(data) == '[object Number]';
};

const isObject = data => {
  return Object.prototype.toString.call(data) == '[object Object]';
};

const isFunction = data => {
  return data && toString.call(data) == '[object Function]' || toString.call(data) == '[object AsyncFunction]';
};

const inArray = (data, arr, strict = false) => {
  if (!isArray(arr)) return strict ? data === arr : data == arr;
  if (isFunction(arr.findIndex)) {
    return arr.findIndex((o) => { return strict ? o === data : o == data }) > -1;
  }
  else {
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
      if (strict ? data === arr[i] : data == arr[i]) {
        flag = true;
        break;
      }
    }
    return flag;
  }
};

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
      log('app_server._readBody()', err);
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

const BASE_API = 'https://api.weixin.qq.com/';

const defaultConfig = {
  appKey: '',
  appSecret: ''
};

var EasyWechatInstance = null;

class EasyWechat {
  constructor (config = {}) {
    this.$config = merge({}, defaultConfig, config);
    if (!this.$config.appKey && !this.$config.mini_program.appId) {
      throw new Error('未填写appKey');
      return;
    }
    if (!this.$config.appSecret && !this.$config.mini_program.appSecret) {
      throw new Error('未填写appSecret');
      return;
    }

    this.BASE_API = BASE_API;

    EasyWechatInstance = this;
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

EasyWechat.prototype.requestGet = (url) => {
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

EasyWechat.prototype.requestFile = (url) => {
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
        try {
          let buffer = Buffer.from(body, 'binary');
          body = JSON.parse(buffer.toString());
        }
        catch (e) {}
        resolve(body);
      }
    });
  });
};

EasyWechat.prototype.requestPost = (url, data = null, json = true) => {
  return new Promise((resolve, reject) => {
    request({
      method: 'POST',
      uri: url,
      json: json,
      body: data
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

EasyWechat.prototype.requestForm = (url, data = null) => {
  return new Promise((resolve, reject) => {
    request({
      method: 'POST',
      uri: url,
      formData: data
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

EasyWechat.prototype.buildApiUrl = (api) => __async(function*(){
  let access_token = yield EasyWechatInstance.access_token.getToken();
  return BASE_API + 'cgi-bin/' + api + '?access_token=' + access_token;
}());

EasyWechat.prototype.$plugins = [];
EasyWechat.registPlugin = (name, plugin) => {
  EasyWechat.prototype[name] = plugin;
  EasyWechat.prototype.$plugins.push(name);
};

var Core = {
  EasyWechat,
  getInstance () {
    return EasyWechatInstance;
  }
};

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
  };
  if (state) {
    params.state = state;
  }

  return 'https://open.weixin.qq.com/' + api + '?' + qs.stringify(params) + '#wechat_redirect';
};

const user = function (code) {return __async(function*(){
  let user = yield fetchAccessToken(code);
  let instance = Core.getInstance();
  if (instance.$config.oauth.scope != 'snsapi_base') {
    user = yield fetchUserInfo(user);
  }
  return user;
}())};

const fetchAccessToken = function (code) {return __async(function*(){
  let instance = Core.getInstance();
  let params = {
    appid: instance.$config.appKey,
    secret: instance.$config.appSecret,
    code: code,
    grant_type: 'authorization_code'
  };
  let url = instance.BASE_API + 'sns/oauth2/access_token?' + qs.stringify(params);

  let response = yield instance.requestGet(url);
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
  let instance = Core.getInstance();
  let url = instance.BASE_API + 'sns/userinfo?' + qs.stringify(params);

  let response = yield instance.requestGet(url);
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
}())};

var oauth = {
  init,
  redirect,
  user
};

class CacheInterface {
  constructor () {
    this.$options = {};
  }

  fetch (id) {return __async(function*(){
    return null;
  }())}

  contains (id) {return __async(function*(){
    return true;
  }())}

  save (id, data = null, lifeTime = 0) {return __async(function*(){
    return true;
  }())}

  delete (id) {return __async(function*(){
    return true;
  }())}
}

class MemoryCache extends CacheInterface {
  constructor () {
    super();
    this.$datas = {};
  }

  fetch (id) {return __async(function*(){
    if (!this.contains(id) || (this.$datas[id].lifeTime > 0 && this.$datas[id].lifeTime < getTimestamp())) {
      return null;
    }
    return this.$datas[id].data;
  }.call(this))}

  contains (id) {return __async(function*(){
    if (typeof this.$datas[id] != 'object') return false;
    return true;
  }.call(this))}

  save (id, data = null, lifeTime = 0) {return __async(function*(){
    let dataItem = {
      data,
      lifeTime: lifeTime > 0 ? lifeTime + getTimestamp() : 0
    };
    this.$datas[id] = dataItem;
    return true;
  }.call(this))}

  delete (id) {return __async(function*(){
    delete this.$datas[id];
    return true;
  }.call(this))}
}

class FileCache extends CacheInterface {
  constructor (options) {
    super();
    let defaultOptions = {
      path: '',
      dirMode: 0o777,
      fileMode: 0o666,
      ext: '.cache'
    };
    this.$options = extendObj$1(defaultOptions, options);
    this.$options.path = path.resolve(this.$options.path);
    try {
      fs.accessSync(this.$options.path, fs.constants.R_OK & fs.constants.W_OK);
    }
    catch (e) {
      try {
        fs.mkdirSync(this.$options.path, this.$options.dirMode);
      }
      catch (e) {
        log('无法创建缓存目录：' + this.$options.path, e);
      }
    }
  }

  getCacheFile (id) {
    return this.$options.path + '/' + id + this.$options.ext;
  }

  fetch (id) {return __async(function*(){
    let content = null;
    let file = this.getCacheFile(id);
    try {
      let dataItem = JSON.parse(fs.readFileSync(file, {
        encoding: 'utf-8',
        flag: 'r'
      }));

      if (dataItem.lifeTime > 0 && dataItem.lifeTime < getTimestamp()) {
        content = null;
      }
      else {
        content = dataItem.data;
      }
    }
    catch (e) {
      log('无法读取缓存文件：' + file, e);
      content = null;
    }
    return content;
  }.call(this))}

  contains (id) {return __async(function*(){
    let file = this.getCacheFile(id);
    try {
      fs.accessSync(file, fs.constants.R_OK & fs.constants.W_OK);
    }
    catch (e) {
      return false;
    }
    return true;
  }.call(this))}

  save (id, data = null, lifeTime = 0) {return __async(function*(){
    let file = this.getCacheFile(id);
    try {
      let dataItem = {
        data,
        lifeTime: lifeTime > 0 ? lifeTime + getTimestamp() : 0
      };
      fs.writeFileSync(file, JSON.stringify(dataItem), {
        mode: this.$options.fileMode,
        encoding: 'utf-8',
        flag: 'w'
      });
    }
    catch (e) {
      log('无法写入缓存文件：' + file, e);
      return false;
    }
    return true;
  }.call(this))}

  delete (id) {return __async(function*(){
    let file = this.getCacheFile(id);
    try {
      fs.unlinkSync(file);
    }
    catch (e) {
      log('无法删除缓存文件：' + file, e);
      return false;
    }
    return true;
  }.call(this))}
}


var caches = Object.freeze({
	CacheInterface: CacheInterface,
	MemoryCache: MemoryCache,
	FileCache: FileCache
});

const init$1 = function (instance) {
  if (!instance.$config.cache) {
    switch (instance.$config.cache_driver) {
      case 'file':
        instance.$config.cache = new FileCache(instance.$config.cache_options);
        break;
      case 'memory':
      default:
        instance.$config.cache = new MemoryCache;
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
    Core.getInstance().$config.cache = cache;
  }
};

var cache = {
  init: init$1,
  setCache
};

const init$2 = function (instance) {
  instance.$config.access_token_cache_key = instance.$config.access_token_cache_key || 'NODE_EASYWECHAT_ACCESS_TOKEN';
};

const fetchAccessToken$1 = function () {return __async(function*(){
  let instance = Core.getInstance();
  let params = {
    appid: instance.$config.appKey,
    secret: instance.$config.appSecret,
    grant_type: 'client_credential'
  };
  let url = instance.BASE_API + 'cgi-bin/token?' + qs.stringify(params);

  return yield instance.requestGet(url);
}())};

const getToken = function (force = false) {return __async(function*(){
  let instance = Core.getInstance();
  let accessToken = yield instance.$config.cache.fetch(instance.$config.access_token_cache_key);
  if (force || !accessToken) {
    let res = yield fetchAccessToken$1();
    yield setToken(res.access_token, res.expires_in);
    accessToken = res.access_token;
  }
  return accessToken;
}())};

const setToken = function (access_token, expires_in = 7200) {return __async(function*(){
  let instance = Core.getInstance();
  log('write AccessToken: ', instance.$config.access_token_cache_key, access_token, expires_in);
  yield instance.$config.cache.save(instance.$config.access_token_cache_key, access_token, expires_in);
}())};

var access_token = {
  init: init$2,
  getToken,
  setToken
};

const init$3 = function (instance) {
  instance.$config.jssdk_cache_key = instance.$config.jssdk_cache_key || 'NODE_EASYWECHAT_JSSKD_TICKET';
};

var $url = '';

const setUrl = function (url) {
  $url = url;
};

const fetchJsapiTicket = function () {return __async(function*(){
  let instance = Core.getInstance();
  let accessToken = yield instance.access_token.getToken();
  let params = {
    access_token: accessToken,
    type: 'jsapi'
  };
  let url = instance.BASE_API + 'cgi-bin/ticket/getticket?' + qs.stringify(params);

  return yield instance.requestGet(url);
}())};

const getTicket = function (force = false) {return __async(function*(){
  let instance = Core.getInstance();
  let jssdkTicket = yield instance.$config.cache.fetch(instance.$config.jssdk_cache_key);
  if (force || !jssdkTicket) {
    let res = yield fetchJsapiTicket();
    log('write JSSDK: ', instance.$config.jssdk_cache_key, res.ticket, res.expires_in);
    yield instance.$config.cache.save(instance.$config.jssdk_cache_key, res.ticket, res.expires_in);
    jssdkTicket = res.ticket;
  }

  return jssdkTicket;
}())};

const config = function (APIs, debug = false, json = true) {return __async(function*(){
  let instance = Core.getInstance();
  let jssdkTicket = yield getTicket();

  let url = $url;

  let noncestr = randomString();
  let timestamp = getTimestamp();
  let signature = makeSignature({
    jsapi_ticket: jssdkTicket,
    noncestr,
    timestamp,
    url
  });

  let config = {
    debug,
    appId: instance.$config.appKey,
    timestamp,
    nonceStr: noncestr,
    signature,
    url,
    jsApiList: APIs
  };

  /* 使用完清空设置的url */
  $url = '';

  return json ? JSON.stringify(config) : config;
}())};

var jssdk = {
  init: init$3,
  setUrl,
  getTicket,
  config
};

class Raw {
  constructor (data) {
    this.dataParams = {
      ToUserName: '',
      FromUserName: '',
      CreateTime: getTimestamp(),
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
        if (isArray(v[k])) {
          for (let i=0; i<v[k].length; i++) {
            data += `<${k}>${this._formatData(v[k][i])}</${k}>`;
          }
        }
        else {
          data += `<${k}>${this._formatData(v[k])}</${k}>`;
        }
      }
      return data;
    }
    if (isString(v)) {
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

class Encrypt extends Raw {
  constructor (options) {
    super('');
    this.dataParams = {};
    this.dataParams.Encrypt = options.encrypt || '';
    this.dataParams.MsgSignature = options.sign || '';
    this.dataParams.TimeStamp = options.timestamp || getTimestamp();
    this.dataParams.Nonce = options.nonce || '';
  }

  content (v) {
    this.dataParams.Content = v;
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

class Article {
  constructor (attrs = {}) {
    this.title = attrs.title || '';
    this.author = attrs.author || '';
    this.content = attrs.content || '';
    this.thumb_media_id = attrs.thumb_media_id || '';
    this.digest = attrs.digest || '';
    this.source_url = attrs.source_url || '';
    this.show_cover = attrs.digest || 0;
  }
}


var messages = Object.freeze({
	Raw: Raw,
	Encrypt: Encrypt,
	Text: Text,
	Image: Image,
	Voice: Voice,
	Video: Video,
	Music: Music,
	News: News,
	Article: Article
});

const init$4 = function (instance) {
  $server_handler = function () {};
};

let $server_handler;
let $server_message;

const setMessageHandler = function (handler) {
  if (typeof handler != 'function') handler = function () {};
  $server_handler = handler;
};

const getAvailableNews = function (arr) {
  let list = [];
  let response = null;
  for (let i in arr) {
    if (arr[i].dataParams.MsgType == 'news') {
      response = arr[i];
      list.push(arr[i].dataParams.Articles.item);
    }
  }
  if (list.length > 0 && response) {
    response.dataParams.ArticleCount = list.length;
    response.dataParams.Articles.item = list;
  }
  return response;
};

const serve = function () {return __async(function*(){
  let instance = Core.getInstance();
  let app = instance.$config.app;
  if (!app) {
    throw new Error('未在配置文件中设置应用服务器');
    return;
  }
  let crypto = null;
  if (instance.$config.aesKey) {
    crypto = new WechatCrypto(instance.$config.token, instance.$config.aesKey, instance.$config.appKey);
  }
  if (app.getMethod() == 'GET') {
    let query = app.getQuery();
    if (!query.signature || !query.echostr || !query.timestamp || !query.nonce) {
      app.sendResponse('Hello node-easywechat');
      return;
    }
    let sign;
    if (crypto) {
      sign = crypto.getSignature(query.timestamp || '', query.nonce || '', query.encrypt || '');
    }
    else {
      var sign_data = [instance.$config.token, query.timestamp || '', query.nonce || '', query.encrypt || ''].sort();
      sign = createHash(sign_data.join(''), 'sha1');
    }
    if (sign === query.signature) {
      app.sendResponse(query.echostr);
    }
    else {
      app.sendResponse('fail');
    }
  }
  else {
    let xml = yield app.getBody();
    $server_message = yield parseMessage(xml, crypto);
    if ($server_handler && typeof $server_handler == 'function') {
      let result = yield $server_handler($server_message);

      if (!result || (isString(result) && result.toUpperCase() == 'SUCCESS')) {
        app.sendResponse('SUCCESS');
        return;
      }
      let response = null;
      if (isString(result)) {
        response = new Text({content: result});
      }
      else if (isArray(result)) {
        response = getAvailableNews(result);
      }
      else {
        response = result;
      }

      if (response && typeof response == 'object') {
        response.setAttribute('ToUserName', $server_message.FromUserName);
        response.setAttribute('FromUserName', $server_message.ToUserName);
        let data = response.getData();
        log('server.send().original', data);
        if (crypto && $server_message._isEncrypt) {
          data = crypto.encrypt(data);
          let timestamp = getTimestamp();
          let nonce = randomString();
          let sign = crypto.getSignature(timestamp, nonce, data);
          response = new Encrypt({
            encrypt: data,
            sign,
            timestamp,
            nonce
          });
          data = response.getData();
          log('server.send().encrypt', data);
        }
        app.sendResponse(data);
      }
    }
  }
}())};

const parseMessage = function (xml, crypto = null) {return __async(function*(){
  return new Promise((resolve, reject) => {
    xml2js.parseString(xml, (err, result) => __async(function*(){
      if (err) {
        reject(err);
      }
      else {
        let message;
        if (result && result.xml) {
          message = {};
          for (let k in result.xml) {
            message[k] = result.xml[k][0];
          }
          message._isEncrypt = false;
          if (message.Encrypt && crypto) {
            let decrypted = crypto.decrypt(message.Encrypt);
            log('parseMessage.decrypted', decrypted);
            message = yield parseMessage(decrypted.message);
            if (!message) {
              throw new Error('无法解密消息，请确认 AppId、Token、AESKey 等是否正确');
            }
            else {
              message._isEncrypt = true;
            }
          }
        }
        resolve(message);
      }
    }()));
  })
  .catch((err) => {
    log('server.parseMessage()', err);
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

const init$5 = function (instance) {
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

  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('message/template/send');
  return yield instance.requestPost(url, message);
}())};

const getIndustry = function () {return __async(function*(){
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('template/get_industry');
  return yield instance.requestPost(url);
}())};

const setIndustry = function (industry_id1, industry_id2) {return __async(function*(){
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('template/api_set_industry');
  let data = {
    industry_id1: industry_id1,
    industry_id2: industry_id2
  };
  return yield instance.requestPost(url, data);
}())};

const addTemplate = function (template_id_short) {return __async(function*(){
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('template/api_add_template');
  let data = {
    template_id_short: template_id_short
  };
  return yield instance.requestPost(url, data);
}())};

const getPrivateTemplates = function () {return __async(function*(){
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('template/get_all_private_template');
  return yield instance.requestPost(url);
}())};

const deletePrivateTemplate = function (template_id) {return __async(function*(){
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('template/del_private_template');
  let data = {
    template_id: template_id
  };
  return yield instance.requestPost(url, data);
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

const init$6 = function (instance) {
};

const temporary = function (scene, expireSeconds = null) {return __async(function*(){
  expireSeconds = parseInt(expireSeconds);
  if (expireSeconds <= 0 || expireSeconds > 2592000) expireSeconds = 2592000;
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
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('qrcode/create');
  return yield instance.requestPost(url, data);
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
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('qrcode/create');
  return yield instance.requestPost(url, data);
}())};

const url$1 = function (ticket) {return __async(function*(){
  let url = 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=' + ticket;
  let instance = Core.getInstance();
  return yield instance.requestFile(url);
}())};

var qrcode = {
  init: init$6,
  temporary,
  forever,
  url: url$1
};

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

const init$7 = function (instance) {
};

const get$1 = function (openid, lang = 'zh_CN') {return __async(function*(){
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('user/info');
  url += '&openid=' + openid + '&lang=' + lang;
  let response = yield instance.requestGet(url);
  let user = new User$1;
  user.id = response.openid;
  user.nickname = response.nickname;
  user.name = response.nickname;
  user.avatar = response.headimgurl;
  user.original = response;
  return user;
}())};

const batchGet = function (user_list) {return __async(function*(){
  let instance = Core.getInstance();
  let data = {
    user_list
  };
  let url = yield instance.buildApiUrl('user/info/batchget');
  return yield instance.requestPost(url, data);
}())};

const lists = function (next_openid = null) {return __async(function*(){
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('user/get');
  if (next_openid) {
    url += '&next_openid=' + next_openid;
  }
  return yield instance.requestGet(url);
}())};

const remark = function (openid, remark) {return __async(function*(){
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('user/info/updateremark');
  return yield instance.requestPost(url);
}())};

const blacklist = function (begin_openid) {return __async(function*(){
  let instance = Core.getInstance();
  let data = {};
  if (begin_openid) {
    data.begin_openid = begin_openid;
  }
  let url = yield instance.buildApiUrl('tags/members/getblacklist');
  return yield instance.requestPost(url, data);
}())};

const batchBlock = function (openid_list) {return __async(function*(){
  let instance = Core.getInstance();
  let data = {
    openid_list
  };
  let url = yield instance.buildApiUrl('tags/members/batchblacklist');
  return yield instance.requestPost(url, data);
}())};

const batchUnblock = function (openid_list) {return __async(function*(){
  let instance = Core.getInstance();
  let data = {
    openid_list
  };
  let url = yield instance.buildApiUrl('tags/members/batchunblacklist');
  return yield instance.requestPost(url, data);
}())};

const block = function (openid) {return __async(function*(){
  return yield batchBlock([openid]);
}())};

const unblock = function (openid) {return __async(function*(){
  return yield batchUnblock([openid]);
}())};

var user$1 = {
  init: init$7,
  get: get$1,
  batchGet,
  lists,
  remark,
  blacklist,
  batchBlock,
  batchUnblock,
  block,
  unblock
};

const init$8 = function (instance) {
};

const all = function () {return __async(function*(){
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('menu/get');
  return yield instance.requestPost(url);
}())};

const current = function () {return __async(function*(){
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('get_current_selfmenu_info');
  return yield instance.requestPost(url);
}())};

const add = function (buttons) {return __async(function*(){
  let data = {
    button: buttons
  };
    let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('menu/create');
  return yield instance.requestPost(url, data);
}())};

const destroy = function () {return __async(function*(){
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('menu/delete');
  return yield instance.requestPost(url);
}())};

var menu = {
  init: init$8,
  all,
  current,
  add,
  destroy
};

const init$9 = function (instance) {
};

const shorten = function (long_url) {return __async(function*(){
  let data = {
    action: 'long2short',
    long_url
  };
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('shorturl');
  return yield instance.requestPost(url, data);
}())};

var url$2 = {
  init: init$9,
  shorten
};

const init$10 = function (instance) {
};

const toXml = function (data) {
  let xml = '<xml>';
  for (let k in data) {
    if (!data[k]) continue;
    if (isNumber(data[k])) {
      xml += `<${k}>${data[k]}</${k}>`;
    }
    else if (isObject(data[k])) {
      xml += `<${k}>${JSON.stringify(data[k])}</${k}>`;
    }
    else {
      xml += `<${k}><![CDATA[${data[k]}]]></${k}>`;
    }
  }
  xml += '</xml>';
  return xml;
};

const prepare = function (order) {return __async(function*(){
  let instance = Core.getInstance();
  let paymentConfig = instance.$config.payment;
  let data = {
    appid: instance.$config.appKey,
    mch_id: paymentConfig.merchantId,
    device_info: order.device_info || 'WEB',
    nonce_str: randomString(16),
    body: order.body,
    detail: order.detail || '',
    attach: order.attach || '',
    out_trade_no: order.out_trade_no,
    fee_type: order.fee_type || 'CNY',
    total_fee: order.total_fee,
    spbill_create_ip: order.spbill_create_ip,
    time_start: order.time_start || '',
    time_expire: order.time_expire || '',
    goods_tag: order.goods_tag || '',
    notify_url: order.notify_url || paymentConfig.notifyUrl,
    trade_type: order.trade_type || 'JSAPI',
    product_id: order.product_id || '',
    limit_pay: order.limit_pay || '',
    openid: order.openid || '',
    scene_info: order.scene_info || '',
    sign_type: order.sign_type || 'MD5'
  };
  data.sign = makeSignature(data, data.sign_type, paymentConfig.key);

  let xml = toXml(data);
  let result = yield instance.requestPost('https://api.mch.weixin.qq.com/pay/unifiedorder', xml);
  result = yield parseMessage$1(result);
  log('payment.prepare(): ', data, xml, result);
  return result;
}())};

const handleNotify = function (handler) {return __async(function*(){
  let instance = Core.getInstance();
  let app = instance.$config.app;
  if (!app) {
    throw new Error('未在配置文件中设置应用服务器');
    return;
  }
  let paymentConfig = instance.$config.payment;
  let xml = yield app.getBody();
  let notice = yield parseMessage$1(xml);
  let response = {
    return_code: '',
    return_msg: ''
  };
  log('payment.handleNotify():', notice);

  if (notice.return_code !== 'SUCCESS') {
    response.return_code = 'SUCCESS';
    response.return_msg = 'return_code异常';
    return app.sendResponse(toXml(response));
  }

  // 验证签名
  let check_sign = makeSignature(notice, 'MD5', paymentConfig.key);
  if (check_sign !== notice.sign) {
    log('payment.handleNotify(): invalid_sign', check_sign, notice.sign);
    response.return_code = 'FAIL';
    response.return_msg = '签名错误';
    return app.sendResponse(toXml(response));
  }

  // 业务处理
  let result = false;
  try {
    result = yield handler(notice, notice.result_code === 'SUCCESS');
  }
  catch (e) {
    result = false;
  }
  if (result === true) {
    response.return_code = 'SUCCESS';
    response.return_msg = '';
  }
  else {
    response.return_code = 'FAIL';
    response.return_msg = result;
  }

  app.sendResponse(toXml(response));
}())};

const parseMessage$1 = function (xml) {
  return new Promise((resolve, reject) => {
    xml2js.parseString(xml, (err, result) => {
      if (err) {
        reject(err);
      }
      else {
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
    log('payment.parseMessage()', err);
  });
};

const configForPayment = function (prepare_id, to_json = false) {
  let instance = Core.getInstance();
  let signType = 'MD5';
  let config = {
    appId: instance.$config.appKey,
    timeStamp: getTimestamp() + '',
    nonceStr: randomString(16),
    package: 'prepay_id=' + prepare_id,
    signType: signType
  };
  config.paySign = makeSignature(config, signType, instance.$config.payment.key);
  log('payment.configForPayment()', config);
  if (to_json) {
    config = JSON.stringify(config);
  }
  return config;
};

const configForJSSDKPayment = function (prepare_id, to_json = false) {
  let instance = Core.getInstance();
  let signType = 'MD5';
  let timestamp = getTimestamp();
  let config = {
    appId: instance.$config.appKey,
    timeStamp: timestamp,
    nonceStr: randomString(16),
    package: 'prepay_id=' + prepare_id,
    signType: signType
  };
  config.paySign = makeSignature(config, signType, instance.$config.payment.key);
  delete config.appId;
  delete config.timeStamp;
  config.timestamp = timestamp;
  log('payment.configForJSSDKPayment()', config);
  if (to_json) {
    config = JSON.stringify(config);
  }
  return config;
};

var payment = {
  init: init$10,
  prepare,
  handleNotify,
  configForPayment,
  configForJSSDKPayment
};

const init$11 = function (instance) {
};

const getStream = function (mediaId) {return __async(function*(){
  let instance = Core.getInstance();
  let url = (yield instance.buildApiUrl('media/get')) + '&media_id=' + mediaId;
  let res;
  try {
    res = yield instance.requestFile(url);
  }
  catch (e) {
    log('material_temporary.getStream()', mediaId, e);
    return false;
  }
  if (isObject(res)) {
    if (res.video_url) {
      return yield instance.requestFile(res.video_url);
    }
    else {
      log('material_temporary.getStream()', res);
      return false;
    }
  }
  return res;
}())};

const download = function (mediaId, path$$1, fileName = '') {return __async(function*(){
  let stream = yield getStream(mediaId);
  if (!stream) return false;
  try {
    fileName = fileName || mediaId + '.jpg';
    fs.writeFileSync(path$$1 + fileName, stream, 'binary');
  }
  catch (e) {
    log('material_temporary.download()', e);
    return false;
  }
  return true;
}())};

const upload = function (file, type = 'image', extra = null) {return __async(function*(){
  let instance = Core.getInstance();
  let url = (yield instance.buildApiUrl('media/upload')) + '&type=' + type;
  let res;
  try {
    let formData = {media: fs.createReadStream(file)};
    if (extra) {
      formData = extendObj(formData, extra);
    }
    res = yield instance.requestForm(url, formData);
  }
  catch (e) {
    log('material_temporary.upload()', file, type, e);
    return false;
  }
  if (res.errcode) {
    log('material_temporary.upload()', file, type, res);
    return false;
  }
  return res;
}())};

const uploadImage = function (file) {return __async(function*(){
  return yield upload(file, 'image');
}())};

const uploadVoice = function (file) {return __async(function*(){
  return yield upload(file, 'voice');
}())};

const uploadVideo = function (file, title, desc) {return __async(function*(){
  let extra = {
    description: JSON.stringify({
      title: title || '',
      introduction: desc || ''
    })
  };
  return yield upload(file, 'video', extra);
}())};

const uploadThumb = function (file) {return __async(function*(){
  return yield upload(file, 'thumb');
}())};

var material_temporary = {
  init: init$11,
  getStream,
  download,
  upload,
  uploadImage,
  uploadVoice,
  uploadVideo,
  uploadThumb
};

const init$12 = function (instance) {
};

const getMaterial = function (mediaId) {return __async(function*(){
  let instance = Core.getInstance();
  let url = (yield instance.buildApiUrl('material/get_material')) + '&media_id=' + mediaId;
  let res;
  try {
    res = yield instance.requestFile(url);
  }
  catch (e) {
    log('material.getMaterial()', mediaId, e);
    return false;
  }
  if (isObject(res) && res.errcode) {
    log('material.getMaterial()', mediaId, res);
    return false;
  }
  return res;
}())};

const download$1 = function (mediaId, path$$1, fileName = '') {return __async(function*(){
  let stream = yield get(mediaId);
  if (!stream) return false;
  try {
    fileName = fileName || mediaId + '.jpg';
    fs.writeFileSync(path$$1 + fileName, stream, 'binary');
  }
  catch (e) {
    log('material.download()', e);
    return false;
  }
  return true;
}())};

const upload$1 = function (file, type = 'image', extra = null) {return __async(function*(){
  let instance = Core.getInstance();
  let url = (yield instance.buildApiUrl('material/add_material')) + '&type=' + type;
  let res;
  try {
    let formData = {media: fs.createReadStream(file)};
    if (extra) {
      formData = extendObj$1(formData, extra);
    }
    res = yield instance.requestForm(url, formData);
  }
  catch (e) {
    log('material.upload()', file, type, e);
    return false;
  }
  if (res.errcode) {
    log('material.upload()', file, type, res);
    return false;
  }
  return res;
}())};

const uploadImage$1 = function (file) {return __async(function*(){
  return yield upload$1(file, 'image');
}())};

const uploadVoice$1 = function (file) {return __async(function*(){
  return yield upload$1(file, 'voice');
}())};

const uploadVideo$1 = function (file, title, desc) {return __async(function*(){
  let extra = {
    description: JSON.stringify({title: title || '', introduction: desc || ''})
  };
  return yield upload$1(file, 'video', extra);
}())};

const uploadThumb$1 = function (file) {return __async(function*(){
  return yield upload$1(file, 'thumb');
}())};

const deleteMaterial = function (mediaId) {return __async(function*(){
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('material/del_material');
  let res;
  try {
    res = yield instance.requestPost(url, {mediaId: mediaId});
  }
  catch (e) {
    log('material.deleteMaterial()', mediaId, e);
    return false;
  }
  if (res.errcode) {
    log('material.deleteMaterial()', mediaId, res);
    return false;
  }
  return res;
}())};

const lists$1 = function (type, offset = 0, count = 20) {return __async(function*(){
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('material/batchget_material');
  let res;
  try {
    res = yield instance.requestPost(url, {
      type: type,
      offset: offset,
      count: count
    });
  }
  catch (e) {
    log('material.lists()', type, offset, count, e);
    return false;
  }
  if (res.errcode) {
    log('material.lists()', type, offset, count, res);
    return false;
  }
  return res;
}())};

const stats = function () {return __async(function*(){
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('material/get_materialcount');
  let res;
  try {
    res = yield instance.requestGet(url);
  }
  catch (e) {
    log('material.stats()', e);
    return false;
  }
  if (res.errcode) {
    log('material.stats()', res);
    return false;
  }
  return res;
}())};

const uploadArticle = function (article) {return __async(function*(){
  if (isObject(article)) article = [article];

  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('material/add_news');
  let res;
  try {
    res = yield instance.requestPost(url, {
      articles: article
    });
  }
  catch (e) {
    log('material.uploadArticle()', article, e);
    return false;
  }
  if (res.errcode) {
    log('material.uploadArticle()', article, res);
    return false;
  }
  return res;
}())};

const uploadArticleImage = function (file) {return __async(function*(){
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('media/uploadimg');
  let res;
  try {
    let formData = {media: fs.createReadStream(file)};
    res = yield instance.requestForm(url, formData);
  }
  catch (e) {
    log('material.uploadArticleImage()', file, type, e);
    return false;
  }
  if (res.errcode) {
    log('material.uploadArticleImage()', file, type, res);
    return false;
  }
  return res;
}())};

const updateArticle = function (mediaId, article, index = 0) {return __async(function*(){
  if (isObject(article)) article = [article];

  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('material/update_news');
  let res;
  try {
    res = yield instance.requestPost(url, {
      media_id: mediaId,
      index: index,
      articles: article
    });
  }
  catch (e) {
    log('material.updateArticle()', mediaId, article, index, e);
    return false;
  }
  if (res.errcode) {
    log('material.updateArticle()', mediaId, article, index, res);
    return false;
  }
  return res;
}())};

var material = {
  init: init$12,
  get: getMaterial,
  download: download$1,
  upload: upload$1,
  uploadImage: uploadImage$1,
  uploadVoice: uploadVoice$1,
  uploadVideo: uploadVideo$1,
  uploadThumb: uploadThumb$1,
  delete: deleteMaterial,
  lists: lists$1,
  stats,
  uploadArticle,
  uploadArticleImage,
  updateArticle
};

const crypto$1 = require('crypto');

const init$13 = function (instance) {
};

const auth = {
  getSessionKey: function (code) {return __async(function*(){
    let instance = Core.getInstance();
    let params = {
      appid: instance.$config.mini_program.appId,
      secret: instance.$config.mini_program.appSecret,
      js_code: code,
      grant_type: 'authorization_code'
    };
    let url = instance.BASE_API + 'sns/jscode2session?' + qs.stringify(params);

    let response = yield instance.requestGet(url);
    return response;
  }())},
  getAccessToken: function (force = false) {return __async(function*(){
    let instance = Core.getInstance();
    let accessToken = yield instance.$config.cache.fetch(instance.$config.mini_program.access_token_cache_key);
    if (force || !accessToken) {
      let params = {
        appid: instance.$config.mini_program.appId,
        secret: instance.$config.mini_program.appSecret,
        grant_type: 'client_credential'
      };
      let url = instance.BASE_API + 'cgi-bin/token?' + qs.stringify(params);

      let res = yield instance.requestGet(url);
      log('write AccessToken: ', instance.$config.mini_program.access_token_cache_key, res.access_token, res.expires_in);
      yield instance.$config.cache.save(instance.$config.mini_program.access_token_cache_key, res.access_token, res.expires_in);
      accessToken = res.access_token;
    }
    return accessToken;
  }())}
};

const encryptor = {
  decryptData: function (sessionKey, iv, encryptData) {return __async(function*(){
    // base64 decode
    let _sessionKey = Buffer.from(sessionKey, 'base64');
    let _encryptData = Buffer.from(encryptData, 'base64');
    let _iv = Buffer.from(iv, 'base64');

    let decoded = null;
    try {
       // 解密
      let decipher = crypto$1.createDecipheriv('aes-128-cbc', _sessionKey, _iv);
      // 设置自动 padding 为 true，删除填充补位
      decipher.setAutoPadding(true);

      decoded = decipher.update(_encryptData, 'binary', 'utf8');
      decoded += decipher.final('utf8');

      decoded = JSON.parse(decoded);

      let instance = Core.getInstance();
      if (decoded.watermark.appid !== instance.$config.mini_program.appId) {
        throw new Error('Invaild AppId');
      }
    }
    catch (e) {
      log('mini_program.encryptor.decryptData()', e);
      return null;
    }

    return decoded;
  }())}
};

var mini_program = {
  init: init$13,
  auth,
  encryptor
};

const init$14 = function (instance) {
};

const lists$2 = function () {return __async(function*(){
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('tags/get');
  let response = yield instance.requestGet(url);
  return response;
}())};

const create = function (name) {return __async(function*(){
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('tags/create');
  let data = {
    tag: {
      name
    }
  };
  let response = yield instance.requestPost(url, data);
  return response;
}())};

const update = function (id, name) {return __async(function*(){
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('tags/update');
  let data = {
    tag: {
      id, name
    }
  };
  let response = yield instance.requestPost(url, data);
  return response;
}())};

const del = function (id) {return __async(function*(){
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('tags/delete');
  let data = {
    tag: {
      id
    }
  };
  let response = yield instance.requestPost(url, data);
  return response;
}())};

const userTags = function (openId) {return __async(function*(){
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('tags/getidlist');
  let data = {
    openid
  };
  let response = yield instance.requestPost(url, data);
  return response;
}())};

const usersOfTag = function (tagId, nextOpenId = '') {return __async(function*(){
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('user/tag/get');
  let data = {
    tagid: tagId,
    next_openid: nextOpenId
  };
  let response = yield instance.requestPost(url, data);
  return response;
}())};

const batchTagUsers = function (openIds, tagId) {return __async(function*(){
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('tags/members/batchtagging');
  let data = {
    tagid: tagId,
    openid_list: openIds
  };
  let response = yield instance.requestPost(url, data);
  return response;
}())};

const batchUntagUsers = function (openIds, tagId) {return __async(function*(){
  let instance = Core.getInstance();
  let url = yield instance.buildApiUrl('tags/members/batchuntagging');
  let data = {
    tagid: tagId,
    openid_list: openIds
  };
  let response = yield instance.requestPost(url, data);
  return response;
}())};

var user_tag = {
  init: init$14,
  lists: lists$2,
  create,
  update,
  delete: del,
  userTags,
  usersOfTag,
  batchTagUsers,
  batchUntagUsers
};

const BROADCAST_TYPE_NEWS = 'mpnews';
const BROADCAST_TYPE_TEXT = 'text';
const BROADCAST_TYPE_VOICE = 'voice';
const BROADCAST_TYPE_IMAGE = 'image';
const BROADCAST_TYPE_CARD = 'wxcard';
const BROADCAST_TYPE_VIDEO = 'mpvideo';
const BROADCAST_TYPES = [BROADCAST_TYPE_NEWS, BROADCAST_TYPE_TEXT, BROADCAST_TYPE_VOICE, BROADCAST_TYPE_IMAGE, BROADCAST_TYPE_CARD, BROADCAST_TYPE_VIDEO];

const init$15 = function (instance) {
};

const send$1 = function (type, message, target = null) {return __async(function*(){
  if (!inArray(type, BROADCAST_TYPES)) return false;
  let api = '', data = {
    msgtype: type,
  };
  if (isArray(target) && target.length > 0) {
    data.touser = target;
    api = 'message/mass/send';
  }
  else {
    data.filter = {
      is_to_all: true,
    };
    if (target) {
      data.filter.is_to_all = false;
      data.filter.tag_id = target;
    }
    api = 'message/mass/sendall';
  }

  let instance = Core.getInstance();

  data[type] = {};
  switch (type) {
    case BROADCAST_TYPE_NEWS:
      data[type] = {
        media_id: message
      };
      break;
    case BROADCAST_TYPE_TEXT:
      data[type] = {
        content: message
      };
      break;
    case BROADCAST_TYPE_VOICE:
      data[type] = {
        media_id: message
      };
      break;
    case BROADCAST_TYPE_IMAGE:
      data[type] = {
        media_id: message
      };
      break;
    case BROADCAST_TYPE_CARD:
      data[type] = {
        card_id: message
      };
      break;
    case BROADCAST_TYPE_VIDEO:
      let res1;
      try {
        let url1 = yield instance.buildApiUrl('media/uploadvideo');
        res1 = yield instance.requestPost(url1, message);
        data[type] = {
          media_id: res1.media_id
        };
        break;
      }
      catch (e) {
        log('broadcast.exchange_video_id', message, e);
        return false;
      }
  }

  let url = yield instance.buildApiUrl(api);
  let res = yield instance.requestPost(url, data);
  if (!res || res.errcode) {
    log('broadcast.send()', data, res);
    return false;
  }

  return res;
}())};

const sendText = function (text, target) {return __async(function*(){
  return yield send$1(BROADCAST_TYPE_TEXT, text, target);
}())};
const sendNews = function (media_id, target) {return __async(function*(){
  return yield send$1(BROADCAST_TYPE_NEWS, media_id, target);
}())};
const sendVoice = function (media_id, target) {return __async(function*(){
  return yield send$1(BROADCAST_TYPE_VOICE, media_id, target);
}())};
const sendImage = function (media_id, target) {return __async(function*(){
  return yield send$1(BROADCAST_TYPE_IMAGE, media_id, target);
}())};
const sendVideo = function (message, target) {return __async(function*(){
  return yield send$1(BROADCAST_TYPE_VIDEO, message, target);
}())};
const sendCard = function (card_id, target) {return __async(function*(){
  return yield send$1(BROADCAST_TYPE_CARD, card_id, target);
}())};

const preview = function (type, message, target, isName = false) {return __async(function*(){
  if (!inArray(type, BROADCAST_TYPES)) return false;
  let api = 'message/mass/preview', data = {
    msgtype: type,
  };
  if (isName) {
    data.towxname = target;
  }
  else {
    data.touser = target;
  }

  let instance = Core.getInstance();

  data[type] = {};
  switch (type) {
    case BROADCAST_TYPE_NEWS:
      data[type] = {
        media_id: message
      };
      break;
    case BROADCAST_TYPE_TEXT:
      data[type] = {
        content: message
      };
      break;
    case BROADCAST_TYPE_VOICE:
      data[type] = {
        media_id: message
      };
      break;
    case BROADCAST_TYPE_IMAGE:
      data[type] = {
        media_id: message
      };
      break;
    case BROADCAST_TYPE_CARD:
      data[type] = message;
      break;
    case BROADCAST_TYPE_VIDEO:
      let res1;
      try {
        let url1 = yield instance.buildApiUrl('media/uploadvideo');
        res1 = yield instance.requestPost(url1, message);
        data[type] = {
          media_id: res1.media_id
        };
        break;
      }
      catch (e) {
        log('broadcast.exchange_video_id', message, e);
        return false;
      }
  }

  let url = yield instance.buildApiUrl(api);
  let res = yield instance.requestPost(url, data);
  if (!res || res.errcode) {
    log('broadcast.preview', data, res);
    return false;
  }

  return res;
}())};

const previewText = function (text, target) {return __async(function*(){
  return yield preview(BROADCAST_TYPE_TEXT, text, target);
}())};
const previewNews = function (media_id, target) {return __async(function*(){
  return yield preview(BROADCAST_TYPE_NEWS, media_id, target);
}())};
const previewVoice = function (media_id, target) {return __async(function*(){
  return yield preview(BROADCAST_TYPE_VOICE, media_id, target);
}())};
const previewImage = function (media_id, target) {return __async(function*(){
  return yield preview(BROADCAST_TYPE_IMAGE, media_id, target);
}())};
const previewVideo = function (message, target) {return __async(function*(){
  return yield preview(BROADCAST_TYPE_VIDEO, message, target);
}())};
const previewCard = function (card, target) {return __async(function*(){
  return yield preview(BROADCAST_TYPE_CARD, card, target);
}())};

const previewByName = function (type, message, wxname) {return __async(function*(){
  return yield preview(type, message, wxname, true);
}())};
const previewTextByName = function (text, target) {return __async(function*(){
  return yield preview(BROADCAST_TYPE_TEXT, text, target, true);
}())};
const previewNewsByName = function (media_id, target) {return __async(function*(){
  return yield preview(BROADCAST_TYPE_NEWS, media_id, target, true);
}())};
const previewVoiceByName = function (media_id, target) {return __async(function*(){
  return yield preview(BROADCAST_TYPE_VOICE, media_id, target, true);
}())};
const previewImageByName = function (media_id, target) {return __async(function*(){
  return yield preview(BROADCAST_TYPE_IMAGE, media_id, target, true);
}())};
const previewVideoByName = function (message, target) {return __async(function*(){
  return yield preview(BROADCAST_TYPE_VIDEO, message, target, true);
}())};
const previewCardByName = function (card, target) {return __async(function*(){
  return yield preview(BROADCAST_TYPE_CARD, card, target, true);
}())};

const deleteBrodcast = function (msg_id, article_idx = 0) {return __async(function*(){
  article_idx = parseInt(article_idx || 0);
  if (article_idx < 0) article_idx = 0;
  let data = {
    msg_id,
    article_idx
  };

  let instance = Core.getInstance();

  let url = yield instance.buildApiUrl('message/mass/delete');
  let res = yield instance.requestPost(url, data);
  if (!res || res.errcode) {
    log('broadcast.delete', data, res);
    return false;
  }

  return res;
}())};

const get$2 = function (msg_id) {return __async(function*(){
  let data = {
    msg_id,
  };

  let instance = Core.getInstance();

  let url = yield instance.buildApiUrl('message/mass/get');
  let res = yield instance.requestPost(url, data);
  if (!res || res.errcode) {
    log('broadcast.get', data, res);
    return false;
  }

  return res;
}())};

var broadcast = {
  MSG_TYPE_NEWS: BROADCAST_TYPE_NEWS,
  MSG_TYPE_TEXT: BROADCAST_TYPE_TEXT,
  MSG_TYPE_VOICE: BROADCAST_TYPE_VOICE,
  MSG_TYPE_IMAGE: BROADCAST_TYPE_IMAGE,
  MSG_TYPE_CARD: BROADCAST_TYPE_CARD,
  MSG_TYPE_VIDEO: BROADCAST_TYPE_VIDEO,
  init: init$15,
  send: send$1,
  sendText,
  sendNews,
  sendVoice,
  sendImage,
  sendVideo,
  sendCard,
  preview,
  previewText,
  previewNews,
  previewVoice,
  previewImage,
  previewVideo,
  previewCard,
  previewByName,
  previewTextByName,
  previewNewsByName,
  previewVoiceByName,
  previewImageByName,
  previewVideoByName,
  previewCardByName,
  delete: deleteBrodcast,
  get: get$2,
};

Core.EasyWechat.registPlugin('oauth', oauth);
Core.EasyWechat.registPlugin('cache', cache);
Core.EasyWechat.registPlugin('access_token', access_token);
Core.EasyWechat.registPlugin('jssdk', jssdk);
Core.EasyWechat.registPlugin('server', server);
Core.EasyWechat.registPlugin('notice', notice);
Core.EasyWechat.registPlugin('qrcode', qrcode);
Core.EasyWechat.registPlugin('user', user$1);
Core.EasyWechat.registPlugin('menu', menu);
Core.EasyWechat.registPlugin('url', url$2);
Core.EasyWechat.registPlugin('payment', payment);
Core.EasyWechat.registPlugin('material_temporary', material_temporary);
Core.EasyWechat.registPlugin('material', material);
Core.EasyWechat.registPlugin('mini_program', mini_program);
Core.EasyWechat.registPlugin('user_tag', user_tag);
Core.EasyWechat.registPlugin('broadcast', broadcast);

Core.EasyWechat.Cache = {};
for (let k in caches) {
  Core.EasyWechat.Cache[k] = caches[k];
}

Core.EasyWechat.Message = {};
for (let k in messages) {
  Core.EasyWechat.Message[k] = messages[k];
}

var index = Core.EasyWechat;

module.exports = index;
