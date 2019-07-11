
import qs from 'qs';
import Core from './core';
import {log} from '../utils';
const crypto = require('crypto');

const init = function (instance) {
};

const auth = {
  getSessionKey: async function (code) {
    let instance = Core.getInstance();
    let params = {
      appid: instance.$config.mini_program.appId,
      secret: instance.$config.mini_program.appSecret,
      js_code: code,
      grant_type: 'authorization_code'
    };
    let url = instance.BASE_API + 'sns/jscode2session?' + qs.stringify(params);

    let response = await instance.requestGet(url);
    return response;
  },
  getAccessToken: async function (force = false) {
    let instance = Core.getInstance();
    let accessToken = await instance.$config.cache.fetch(instance.$config.mini_program.access_token_cache_key);
    if (force || !accessToken) {
      let params = {
        appid: instance.$config.mini_program.appId,
        secret: instance.$config.mini_program.appSecret,
        grant_type: 'client_credential'
      };
      let url = instance.BASE_API + 'cgi-bin/token?' + qs.stringify(params);

      let res = await instance.requestGet(url);
      log('write AccessToken: ', instance.$config.mini_program.access_token_cache_key, res.access_token, res.expires_in)
      await instance.$config.cache.save(instance.$config.mini_program.access_token_cache_key, res.access_token, res.expires_in);
      accessToken = res.access_token;
    }
    return accessToken;
  }
};

const encryptor = {
  decryptData: async function (sessionKey, iv, encryptData) {
    // base64 decode
    let _sessionKey = Buffer.from(sessionKey, 'base64');
    let _encryptData = Buffer.from(encryptData, 'base64');
    let _iv = Buffer.from(iv, 'base64');

    let decoded = null;
    try {
       // 解密
      let decipher = crypto.createDecipheriv('aes-128-cbc', _sessionKey, _iv);
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
  }
};

export default {
  init,
  auth,
  encryptor
};
