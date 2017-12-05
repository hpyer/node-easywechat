
const URL_USER_GET = 'https://api.weixin.qq.com/cgi-bin/user/info';
const URL_USER_BATCHGET = 'https://api.weixin.qq.com/cgi-bin/user/info/batchget';
const URL_USER_LISTS = 'https://api.weixin.qq.com/cgi-bin/user/get';
const URL_USER_REMARK = 'https://api.weixin.qq.com/cgi-bin/user/info/updateremark';
const URL_USER_BLACKLIST = 'https://api.weixin.qq.com/cgi-bin/tags/members/getblacklist';
const URL_USER_BLACKLIST_BLOCK = 'https://api.weixin.qq.com/cgi-bin/tags/members/batchblacklist';
const URL_USER_BLACKLIST_UNBLOCK = 'https://api.weixin.qq.com/cgi-bin/tags/members/batchunblacklist';

var $instance;

const init = function (instance) {
  $instance = instance;
};

const get = async function (openid, lang = 'zh_CN') {
  let accessToken = await $instance.access_token.getToken();
  let url = URL_USER_GET + '?access_token=' + accessToken + '&openid=' + openid + '&lang=' + lang;
  return await $instance.requestGet(url);
};

const batchGet = async function (user_list) {
  let data = {
    user_list
  };
  let accessToken = await $instance.access_token.getToken();
  let url = URL_USER_BATCHGET + '?access_token=' + accessToken;
  return await $instance.requestPost(url, data);
};

const lists = async function (next_openid = null) {
  let accessToken = await $instance.access_token.getToken();
  let url = URL_USER_LISTS + '?access_token=' + accessToken;
  if (next_openid) {
    url += '&next_openid=' + next_openid
  }
  return await $instance.requestGet(url);
};

const remark = async function (openid, remark) {
  let data = {
    openid, remark
  };
  let accessToken = await $instance.access_token.getToken();
  let url = URL_USER_REMARK + '?access_token=' + accessToken;
  return await $instance.requestPost(url);
};

const blacklist = async function (begin_openid) {
  let data = {};
  if (begin_openid) {
    data.begin_openid = begin_openid;
  }
  let accessToken = await $instance.access_token.getToken();
  let url = URL_USER_BLACKLIST + '?access_token=' + accessToken;
  return await $instance.requestPost(url, data);
};

const batchBlock = async function (openid_list) {
  let data = {
    openid_list
  };
  let accessToken = await $instance.access_token.getToken();
  let url = URL_USER_BLACKLIST_BLOCK + '?access_token=' + accessToken;
  return await $instance.requestPost(url, data);
};

const batchUnblock = async function (openid_list) {
  let data = {
    openid_list
  };
  let accessToken = await $instance.access_token.getToken();
  let url = URL_USER_BLACKLIST_UNBLOCK + '?access_token=' + accessToken;
  return await $instance.requestPost(url, data);
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
