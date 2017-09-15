
import merge from 'merge';
import request from 'request';

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
          resolve(body);
        }
        catch (e) {
          reject(e)
        }
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
        try {
          resolve(body);
        }
        catch (e) {
          reject(e)
        }
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
