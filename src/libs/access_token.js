
import qs from 'qs';

const URL_ACCESS_TOKEN = 'https://api.weixin.qq.com/cgi-bin/token';

var $instance;

const init = function (instance) {
  $instance = instance;

  $instance.$config.access_token = $instance.$config.access_token || {};
  $instance.$config.access_token.cache_id = $instance.$config.access_token.cache_id || 'NODE_EASYWECHAT_ACCESS_TOKEN';
  $instance.$config.access_token.buffer_time = $instance.$config.access_token.buffer_time || 60;
};

const fetchAccessToken = async function () {
  let params = {
    appid: $instance.$config.appKey,
    secret: $instance.$config.appSecret,
    grant_type: 'client_credential'
  };
  let url = URL_ACCESS_TOKEN + '?' + qs.stringify(params);

  return await $instance.requestGet(url);
};

const getToken = async function (force = false) {
  let accessToken = $instance.$config.cache.fetch($instance.$config.access_token.cache_id);
  if (force || !$instance.$config.cache.contains($instance.$config.access_token.cache_id, $instance.$config.access_token.buffer_time)) {
    let res = await fetchAccessToken();
    setToken(res.access_token, res.expires_in);
    accessToken = res.access_token;
  }
  return accessToken;
};

const setToken = function (access_token, expires_in = 7200) {
  $instance.$config.cache.save($instance.$config.access_token.cache_id, access_token, expires_in);
};

export default {
  init,
  getToken,
  setToken
};
