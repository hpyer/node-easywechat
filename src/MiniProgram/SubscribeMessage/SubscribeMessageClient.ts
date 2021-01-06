'use strict';

import BaseClient from '../../Core/BaseClient';
import { merge, inArray, isArray, isObject } from '../../Core/Utils';

export default class SubscribeMessageClient extends BaseClient
{

  protected message = {
    touser: '',
    template_id: '',
    page: '',
    data: '',
  };

  protected required = ['touser', 'template_id', 'data'];

  /**
   * 发送订阅消息
   * @param data 消息内容
   */
  send(data: object): Promise<any>
  {
    let params = this.formatMessage(data);

    return this.httpPostJson('cgi-bin/message/subscribe/send', params);
  }

  protected formatMessage (data: object)
  {
    let params = merge(merge({}, this.message), data);

    for (let key in params) {
      if (inArray(key, this.required) && !params[key]) {
        throw new Error(`Attribute "${key}" can not be empty!`);
      }
    }

    params['data'] = this.formatData(params['data'] || {});

    return params;
  }

  protected formatData (data: object)
  {
    let formatted: object = {}, value: object;

    for (let key in data) {
      value = {};
      if (isArray(data[key]) && data[key].length == 2) {
        value = {
          value: data[key][0],
          color: data[key][1],
        };
      }
      else if (isObject(data[key]) && data[key]['value']) {
        value = data[key];
      }
      else {
        value = {
          value: data[key] + ''
        };
      }

      formatted[key] = value;
    }

    return formatted;
  }

  /**
   * 添加订阅消息到个人模板库
   * @param tid 模板id
   * @param kidList 开发者自行组合好的模板关键词列表
   * @param sceneDesc 服务场景描述
   */
  addTemplate(tid: string, kidList: Array<Number>, sceneDesc: string = null): Promise<any>
  {
    sceneDesc = sceneDesc || '';
    return this.httpPost('wxaapi/newtmpl/addtemplate', {
      tid,
      kidList,
      sceneDesc,
    });
  }

  /**
   * 删除个人模板库中的模板
   * @param id 模板id
   */
  deleteTemplate(id: string): Promise<any>
  {
    return this.httpPost('wxaapi/newtmpl/deltemplate', {
      priTmplId: id,
    });
  }

  /**
   * 获取模板标题的关键词列表
   * @param tid 模板id
   */
  getTemplateKeywords(tid: string): Promise<any>
  {
    return this.httpGet('wxaapi/newtmpl/getpubtemplatekeywords', {
      tid,
    });
  }

  /**
   * 获取帐号所属类目下的公共模板标题
   * @param ids 类目 id
   * @param start 开始下标，从0开始
   * @param limit 分页记录数
   */
  getTemplateTitles(ids: Array<string>, start: Number = 0, limit: Number = 30): Promise<any>
  {
    let query = {
      ids: '',
      start,
      limit,
    };
    if (isArray(ids)) {
      query.ids = ids.join(',');
    }
    return this.httpGet('wxaapi/newtmpl/getpubtemplatetitles', query);
  }

  /**
   * 获取当前帐号下的个人模板列表
   */
  getTemplates(): Promise<any>
  {
    return this.httpGet('wxaapi/newtmpl/gettemplate');
  }

  /**
   * 获取小程序账号的类目
   */
  getCategory(): Promise<any>
  {
    return this.httpGet('wxaapi/newtmpl/getcategory');
  }

}
