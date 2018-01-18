
import {randomString, getTimestamp, sha1} from '../utils';
import qs from 'qs';
import Core from './core';

const URL_JSAPI_TICKET = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket';

const init = function (instance) {
  instance.$config.jssdk_cache_key = instance.$config.jssdk_cache_key || 'NODE_EASYWECHAT_JSSKD_TICKET';
};

var $url = '';

const setUrl = function (url) {
  $url = url;
};

const fetchJsapiTicket = async function () {
  let instance = Core.getInstance();
  let accessToken = await instance.access_token.getToken();
  let params = {
    access_token: accessToken,
    type: 'jsapi'
  };
  let url = URL_JSAPI_TICKET + '?' + qs.stringify(params);

  return await instance.requestGet(url);
};

const config = async function (APIs, debug = false, json = true) {
  let instance = Core.getInstance();
  let jssdkTicket = instance.$config.cache.fetch(instance.$config.jssdk_cache_key);
  if (!jssdkTicket) {
    let res = await fetchJsapiTicket();
    console.log('写入JSSDK: ', instance.$config.jssdk_cache_key, res.ticket, res.expires_in)
    instance.$config.cache.save(instance.$config.jssdk_cache_key, res.ticket, res.expires_in);
    jssdkTicket = res.ticket;
  }

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
  }

  /* 使用完清空设置的url */
  $url = '';

  return json ? JSON.stringify(config) : config;
};

const makeSignature = function (params) {
  let paramsString = '';
  let sparator = '';
  for (let k in params) {
    paramsString += sparator + k + '=' + params[k];
    sparator = '&';
  }
  return sha1(paramsString);
}

export default {
  init,
  setUrl,
  config
};
