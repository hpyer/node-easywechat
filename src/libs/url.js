
const URL_SHORTURL = 'https://api.weixin.qq.com/cgi-bin/shorturl';

var $instance;

const init = function (instance) {
  $instance = instance;
};

const shorten = async function (long_url) {
  let data = {
    action: 'long2short',
    long_url
  };
  let accessToken = await $instance.access_token.getToken();
  let url = URL_SHORTURL + '?access_token=' + accessToken;
  return await $instance.requestPost(url, data);
};

export default {
  init,
  shorten
};
