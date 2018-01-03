
import Core from './core';

const URL_MENU_GET_ALL = 'https://api.weixin.qq.com/cgi-bin/menu/get';
const URL_MENU_GET_CURRENT = 'https://api.weixin.qq.com/cgi-bin/get_current_selfmenu_info';
const URL_MENU_CREATE = 'https://api.weixin.qq.com/cgi-bin/menu/create';
const URL_MENU_DELETE = 'https://api.weixin.qq.com/cgi-bin/menu/delete';

const init = function (instance) {
};

const all = async function () {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl(URL_MENU_GET_ALL);
  return await instance.requestPost(url);
};

const current = async function () {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl(URL_MENU_GET_CURRENT);
  return await instance.requestPost(url);
};

const add = async function (buttons) {
  let data = {
    button: buttons
  };
    let instance = Core.getInstance();
  let url = await instance.buildApiUrl(URL_MENU_CREATE);
  return await instance.requestPost(url, data);
};

const destroy = async function () {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl(URL_MENU_DELETE);
  return await instance.requestPost(url);
};

export default {
  init,
  all,
  current,
  add,
  destroy
};
