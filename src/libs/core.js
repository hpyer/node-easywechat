
import merge from 'merge';
import request from 'request';
import * as AppServers from './app_server';

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

    EasyWechatInstance = this;
    this.$plugins.forEach((name) => {
      this[name].init(this);
    });
  }

  setAppServerDefault (req, res) {
    this.$config.app = new AppServers.AppServer(req, res);
  }

  setAppServerKoa2 (ctx) {
    this.$config.app = new AppServers.AppServerKoa2(ctx);
  }

  setAppServerExpress (req, res) {
    this.$config.app = new AppServers.AppServerExpress(req, res);
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

EasyWechat.prototype.buildApiUrl = async (baseUrl) => {
  let access_token = await EasyWechatInstance.access_token.getToken();
  return baseUrl + '?access_token=' + access_token;
};

EasyWechat.prototype.$plugins = [];
EasyWechat.registPlugin = (name, plugin) => {
  EasyWechat.prototype[name] = plugin;
  EasyWechat.prototype.$plugins.push(name);
};

export default {
  EasyWechat,
  getInstance () {
    return EasyWechatInstance;
  }
};
