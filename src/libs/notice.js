
import utils from '../utils';
import merge from 'merge';
import Core from './core';

const URL_NOTICE_SEND = 'https://api.weixin.qq.com/cgi-bin/message/template/send';
const URL_NOTICE_GET_INDUSTRY = 'https://api.weixin.qq.com/cgi-bin/template/get_industry';
const URL_NOTICE_SET_INDUSTRY = 'https://api.weixin.qq.com/cgi-bin/template/api_set_industry';
const URL_NOTICE_ADD_TEMPLATE = 'https://api.weixin.qq.com/cgi-bin/template/api_add_template';
const URL_NOTICE_GET_PRIVATE_TEMPLATES = 'https://api.weixin.qq.com/cgi-bin/template/get_all_private_template';
const URL_NOTICE_DELETE_PRIVATE_TEMPLATES = 'https://api.weixin.qq.com/cgi-bin/template/del_private_template';

const init = function (instance) {
  $notice_message = new NoticeMessage;
};

class NoticeMessage {
  constructor () {
    this.reset();
  }
}

NoticeMessage.prototype.reset = function () {
  this.touser = '';
  this.template_id = '';
  this.url = '';
  this.miniprogram = {};
  this.data = [];
}

let $notice_message = null;

const to = function (touser) {
  $notice_message.touser = touser;
  return this;
};

const uses = function (template_id) {
  $notice_message.template_id = template_id;
  return this;
};

const url = function (url) {
  $notice_message.url = url;
  return this;
};

const data = function (data) {
  $notice_message.data = formatData(data);
  return this;
};

const formatData = function (data) {
  let newData = {}
  for (let k in data) {
    let v = data[k];
    if (typeof v == 'object') {
      if (typeof v.length != 'undefined') {
        newData[k] = {
          value: v[0],
          color: v[1]
        };
      }
      else {
        newData[k] = v;
      }
    }
    else {
      newData[k] = {
        value: v
      };
    }
  }
  return newData;
};

const send = async function (message = null) {
  if (message) {
    if (message.data) {
      message.data = formatData(message.data);
    }
  } else {
    message = {};
  }
  message = merge({}, $notice_message, message);
  $notice_message.reset();

  if (!message.touser) {
    throw new Error('用户openid为空');
    return;
  }
  if (!message.template_id) {
    throw new Error('模板id为空');
    return;
  }

  let instance = Core.getInstance();
  let url = await instance.buildApiUrl(URL_NOTICE_SEND);
  return await instance.requestPost(url, message);
};

const getIndustry = async function () {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl(URL_NOTICE_GET_INDUSTRY);
  return await instance.requestPost(url);
};

const setIndustry = async function (industry_id1, industry_id2) {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl(URL_NOTICE_SET_INDUSTRY);
  let data = {
    industry_id1: industry_id1,
    industry_id2: industry_id2
  }
  return await instance.requestPost(url, data);
};

const addTemplate = async function (template_id_short) {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl(URL_NOTICE_ADD_TEMPLATE);
  let data = {
    template_id_short: template_id_short
  }
  return await instance.requestPost(url, data);
};

const getPrivateTemplates = async function () {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl(URL_NOTICE_GET_PRIVATE_TEMPLATES);
  return await instance.requestPost(url);
};

const deletePrivateTemplate = async function (template_id) {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl(URL_NOTICE_DELETE_PRIVATE_TEMPLATES);
  let data = {
    template_id: template_id
  }
  return await instance.requestPost(url, data);
};

export default {
  init,
  to,
  withTo: to,
  andTo: to,
  receiver: to,
  withReceiver: to,
  andhReceiver: to,
  uses,
  withUses: uses,
  andUses: uses,
  template: uses,
  withTemplate: uses,
  andTemplate: uses,
  templateId: uses,
  withTemplateId: uses,
  andTemplateId: uses,
  url,
  withUrl: url,
  andUrl: url,
  link: url,
  withLink: url,
  andLink: url,
  linkTo: url,
  withLinkTo: url,
  andLinkTo: url,
  data,
  withData: data,
  andData: data,
  send,
  getIndustry,
  setIndustry,
  addTemplate,
  getPrivateTemplates,
  deletePrivateTemplate
};
