
import Core from './core';

class User {
  constructor () {
    this.id = ''
    this.nickname = ''
    this.name = ''
    this.avatar = ''
    this.original = {}
    this.token = {}
  }
};

const init = function (instance) {
};

const get = async function (openid, lang = 'zh_CN') {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl('user/info');
  url += '&openid=' + openid + '&lang=' + lang;
  let response = await instance.requestGet(url);
  let user = new User;
  user.id = response.openid;
  user.nickname = response.nickname;
  user.name = response.nickname;
  user.avatar = response.headimgurl;
  user.original = response;
  return user;
};

const batchGet = async function (user_list) {
  let instance = Core.getInstance();
  let data = {
    user_list
  };
  let url = await instance.buildApiUrl('user/info/batchget');
  return await instance.requestPost(url, data);
};

const lists = async function (next_openid = null) {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl('user/get');
  if (next_openid) {
    url += '&next_openid=' + next_openid
  }
  return await instance.requestGet(url);
};

const remark = async function (openid, remark) {
  let instance = Core.getInstance();
  let data = {
    openid, remark
  };
  let url = await instance.buildApiUrl('user/info/updateremark');
  return await instance.requestPost(url);
};

const blacklist = async function (begin_openid) {
  let instance = Core.getInstance();
  let data = {};
  if (begin_openid) {
    data.begin_openid = begin_openid;
  }
  let url = await instance.buildApiUrl('tags/members/getblacklist');
  return await instance.requestPost(url, data);
};

const batchBlock = async function (openid_list) {
  let instance = Core.getInstance();
  let data = {
    openid_list
  };
  let url = await instance.buildApiUrl('tags/members/batchblacklist');
  return await instance.requestPost(url, data);
};

const batchUnblock = async function (openid_list) {
  let instance = Core.getInstance();
  let data = {
    openid_list
  };
  let url = await instance.buildApiUrl('tags/members/batchunblacklist');
  return await instance.requestPost(url, data);
};

const block = async function (openid) {
  return await batchBlock([openid]);
};

const unblock = async function (openid) {
  return await batchUnblock([openid]);
};

export default {
  init,
  get,
  batchGet,
  lists,
  remark,
  blacklist,
  batchBlock,
  batchUnblock,
  block,
  unblock
};
