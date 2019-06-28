
import Core from './core';

const init = function (instance) {
};

const lists = async function () {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl('tags/get');
  let response = await instance.requestGet(url);
  return response;
};

const create = async function (name) {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl('tags/create');
  let data = {
    tag: {
      name
    }
  };
  let response = await instance.requestPost(url, data);
  return response;
};

const update = async function (id, name) {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl('tags/update');
  let data = {
    tag: {
      id, name
    }
  };
  let response = await instance.requestPost(url, data);
  return response;
};

const del = async function (id) {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl('tags/delete');
  let data = {
    tag: {
      id
    }
  };
  let response = await instance.requestPost(url, data);
  return response;
};

const userTags = async function (openId) {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl('tags/getidlist');
  let data = {
    openid
  };
  let response = await instance.requestPost(url, data);
  return response;
};

const usersOfTag = async function (tagId, nextOpenId = '') {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl('user/tag/get');
  let data = {
    tagid: tagId,
    next_openid: nextOpenId
  };
  let response = await instance.requestPost(url, data);
  return response;
};

const batchTagUsers = async function (openIds, tagId) {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl('tags/members/batchtagging');
  let data = {
    tagid: tagId,
    openid_list: openIds
  };
  let response = await instance.requestPost(url, data);
  return response;
};

const batchUntagUsers = async function (openIds, tagId) {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl('tags/members/batchuntagging');
  let data = {
    tagid: tagId,
    openid_list: openIds
  };
  let response = await instance.requestPost(url, data);
  return response;
};

export default {
  init,
  lists,
  create,
  update,
  delete: del,
  userTags,
  userOfTags,
  batchTagUsers,
  batchUntagUsers
};
