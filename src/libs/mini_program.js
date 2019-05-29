
import qs from 'qs';
import Core from './core';
import {log} from '../utils';
import crypto from '.crypto';

const URL_CODE_TO_SESSION = 'https://api.weixin.qq.com/sns/jscode2session';

const init = function (instance) {
};

const sns = {
  getSessionKey: async function (code) {
    let instance = Core.getInstance();
    let params = {
      appid: instance.$config.mini_program.app_id,
      secret: instance.$config.mini_program.secret,
      js_code: code,
      grant_type: 'authorization_code'
    };
    let url = URL_CODE_TO_SESSION + '?' + qs.stringify(params);

    let response = await instance.requestGet(url);
    return response;
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
      if (decoded.watermark.appid !== instance.$config.mini_program.app_id) {
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
  redirect,
  user
};
