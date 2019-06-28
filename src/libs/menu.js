
import Core from './core';

const init = function (instance) {
};

const all = async function () {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl('menu/get');
  return await instance.requestPost(url);
};

const current = async function () {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl('get_current_selfmenu_info');
  return await instance.requestPost(url);
};

const add = async function (buttons) {
  let data = {
    button: buttons
  };
    let instance = Core.getInstance();
  let url = await instance.buildApiUrl('menu/create');
  return await instance.requestPost(url, data);
};

const destroy = async function () {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl('menu/delete');
  return await instance.requestPost(url);
};

export default {
  init,
  all,
  current,
  add,
  destroy
};
