
import qs from 'qs';
import Core from './core';

const URL_ACCESS_TOKEN = 'https://api.weixin.qq.com/cgi-bin/token';

const init = function (instance) {
  instance.$config.access_token_cache_key = instance.$config.access_token_cache_key || 'NODE_EASYWECHAT_ACCESS_TOKEN';
};

const fetchAccessToken = async function () {
  let instance = Core.getInstance();
  let params = {
    appid: instance.$config.appKey,
    secret: instance.$config.appSecret,
    grant_type: 'client_credential'
  };
  let url = URL_ACCESS_TOKEN + '?' + qs.stringify(params);

  return await instance.requestGet(url);
};

const getToken = async function (force = false) {
  let instance = Core.getInstance();
  let accessToken = instance.$config.cache.fetch(instance.$config.access_token_cache_key);
  if (force || !accessToken) {
    let res = await fetchAccessToken();
    setToken(res.access_token, res.expires_in);
    accessToken = res.access_token;
  }
  return accessToken;
};

const setToken = function (access_token, expires_in = 7200) {
  let instance = Core.getInstance();
  console.log('写入AccessToken: ', instance.$config.access_token_cache_key, access_token, expires_in)
  instance.$config.cache.save(instance.$config.access_token_cache_key, access_token, expires_in);
};

export default {
  init,
  getToken,
  setToken
};
