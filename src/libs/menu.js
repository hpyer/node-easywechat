
const URL_MENU_GET_ALL = 'https://api.weixin.qq.com/cgi-bin/menu/get';
const URL_MENU_GET_CURRENT = 'https://api.weixin.qq.com/cgi-bin/get_current_selfmenu_info';
const URL_MENU_CREATE = 'https://api.weixin.qq.com/cgi-bin/menu/create';
const URL_MENU_DELETE = 'https://api.weixin.qq.com/cgi-bin/menu/delete';

var $instance;

const init = function (instance) {
  $instance = instance;
};

const all = async function () {
  let accessToken = await $instance.access_token.getToken();
  let url = URL_MENU_GET_ALL + '?access_token=' + accessToken;
  return await $instance.requestPost(url);
};

const current = async function () {
  let accessToken = await $instance.access_token.getToken();
  let url = URL_MENU_GET_CURRENT + '?access_token=' + accessToken;
  return await $instance.requestPost(url);
};

const add = async function (buttons) {
  let data = {
    button: buttons
  };
  let accessToken = await $instance.access_token.getToken();
  let url = URL_MENU_CREATE + '?access_token=' + accessToken;
  return await $instance.requestPost(url, data);
};

const destroy = async function () {
  let url = URL_MENU_DELETE + '?access_token=' + accessToken;
  return await $instance.requestPost(url);
};

export default {
  init,
  all,
  current,
  add,
  destroy
};
