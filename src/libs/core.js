
import merge from 'merge';
import request from 'request';
import Url from 'url';
import * as AppServers from './app_server'

const defaultConfig = {
  appKey: '',
  appSecret: ''
};

class EasyWechat {
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
        reject(error)
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
        reject(error)
      }
      else {
        resolve(body);
      }
    });
  });
};

EasyWechat.prototype.requestPost = (url, data = null) => {
  return new Promise((resolve, reject) => {
    request({
      method: 'POST',
      uri: url,
      json: data
    }, function (error, response, body) {
      if (error) {
        reject(error)
      }
      else {
        resolve(body);
      }
    });
  });
};

EasyWechat.prototype.$plugins = [];
EasyWechat.registPlugin = (name, plugin) => {
  EasyWechat.prototype[name] = plugin;
  EasyWechat.prototype.$plugins.push(name);
};

export default EasyWechat;
