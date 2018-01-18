
import {Text, Encrypt} from './messages';
import WechatCrypto from 'wechat-crypto';
import {parseString} from 'xml2js';
import {sha1, getTimestamp, randomString} from '../utils';
import Core from './core';

const init = function (instance) {
  $server_handler = function () {};
};

let $server_handler;
let $server_message;

const setMessageHandler = function (handler) {
  if (typeof handler != 'function') handler = function () {};
  $server_handler = handler;
};

const serve = async function () {
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
      sign = sha1(sign_data.join(''));
    }
    if (sign === query.signature) {
      app.sendResponse(query.echostr);
    }
    else {
      app.sendResponse('fail');
    }
  }
  else {
    let xml = await app.getBody();
    $server_message = await parseMessage(xml, crypto);
    if ($server_handler && typeof $server_handler == 'function') {
      let result = await $server_handler($server_message);

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
        console.log('server.send().original', data);
        if (crypto) {
          data = crypto.encrypt(data);
          let timestamp = getTimestamp();
          let nonce = randomString();
          sign = crypto.getSignature(timestamp, nonce, data);
          response = new Encrypt({
            encrypt: data,
            sign,
            timestamp,
            nonce
          });
          data = response.getData();
          console.log('server.send().encrypt', data);
        }
        app.sendResponse(data);
      }
    }
  }
};

const parseMessage = async function (xml, crypto = null) {
  return new Promise((resolve, reject) => {
    parseString(xml, async (err, result) => {
      if (err) {
        reject(err);
      } else {
        let message
        if (result && result.xml) {
          message = {}
          for (let k in result.xml) {
            message[k] = result.xml[k][0];
          }
          if (message.Encrypt && crypto) {
            let decrypted = crypto.decrypt(message.Encrypt);
            console.log('decrypted', decrypted);
            message = await parseMessage(decrypted.message);
          }
        }
        resolve(message);
      }
    })
  })
  .catch((err) => {
    console.log('server.parseMessage()', err)
  });
};

const getMessage = function () {
  return $server_message;
};

export default {
  init,
  setMessageHandler,
  serve,
  getMessage
};
