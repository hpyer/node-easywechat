
import Core from './core';

const URL_USER_GET = 'https://api.weixin.qq.com/cgi-bin/user/info';
const URL_USER_BATCHGET = 'https://api.weixin.qq.com/cgi-bin/user/info/batchget';
const URL_USER_LISTS = 'https://api.weixin.qq.com/cgi-bin/user/get';
const URL_USER_REMARK = 'https://api.weixin.qq.com/cgi-bin/user/info/updateremark';
const URL_USER_BLACKLIST = 'https://api.weixin.qq.com/cgi-bin/tags/members/getblacklist';
const URL_USER_BLACKLIST_BLOCK = 'https://api.weixin.qq.com/cgi-bin/tags/members/batchblacklist';
const URL_USER_BLACKLIST_UNBLOCK = 'https://api.weixin.qq.com/cgi-bin/tags/members/batchunblacklist';

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
  let url = await instance.buildApiUrl(URL_USER_GET);
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
  let url = await instance.buildApiUrl(URL_USER_BATCHGET);
  return await instance.requestPost(url, data);
};

const lists = async function (next_openid = null) {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl(URL_USER_LISTS);
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
  let url = await instance.buildApiUrl(URL_USER_REMARK);
  return await instance.requestPost(url);
};

const blacklist = async function (begin_openid) {
  let instance = Core.getInstance();
  let data = {};
  if (begin_openid) {
    data.begin_openid = begin_openid;
  }
  let url = await instance.buildApiUrl(URL_USER_BLACKLIST);
  return await instance.requestPost(url, data);
};

const batchBlock = async function (openid_list) {
  let instance = Core.getInstance();
  let data = {
    openid_list
  };
  let url = await instance.buildApiUrl(URL_USER_BLACKLIST_BLOCK);
  return await instance.requestPost(url, data);
};

const batchUnblock = async function (openid_list) {
  let instance = Core.getInstance();
  let data = {
    openid_list
  };
  let url = await instance.buildApiUrl(URL_USER_BLACKLIST_UNBLOCK);
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
