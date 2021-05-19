'use strict';

import BaseClient from '../../Core/BaseClient';
import { inArray, isArray, isObject, merge } from '../../Core/Utils';

export default class SubscribeMessageClient extends BaseClient
{
  API_SEND: string = 'cgi-bin/message/subscribe/bizsend';

  protected message: object = {
    touser: '',
    template_id: '',
    page: '',
    data: null,
    miniprogram: '',
  };
  protected required: Array<string> = [
    'touser',
    'template_id',
    'data',
  ];

  /**
   * 添加模板
   * @param template_id_short 模板库中模板的编号，有“TM**”和“OPENTMTM**”等形式
   */
  addTemplate(tid: string, kidList: string[], sceneDesc: string = null): Promise<any>
  {
    sceneDesc = sceneDesc || '';
    return this.httpPost('wxaapi/newtmpl/addtemplate', {
      tid,
      kidList,
      sceneDesc,
    });
  }

  /**
   * 删除模板
   * @param id 模版id
   */
  deleteTemplate(id: string): Promise<any>
  {
    return this.httpPost('wxaapi/newtmpl/deltemplate', {
      priTmplId: id,
    });
  }

  /**
   * 获取公众号类目
   */
  getCategory(): Promise<any>
  {
    return this.httpGet('wxaapi/newtmpl/getcategory');
  }

  /**
   * 获取模板中的关键词
   */
  getTemplateKeywords(tid: string): Promise<any>
  {
    return this.httpGet('wxaapi/newtmpl/getpubtemplatekeywords', {
      tid
    });
  }

  /**
   * 获取所属类目的公共模板
   */
  getTemplateTitles(ids: string[], start: number = 0, limit: number = 30): Promise<any>
  {
    return this.httpGet('wxaapi/newtmpl/getpubtemplatetitles', {
      ids: ids.join(','),
      start,
      limit,
    });
  }

  /**
   * 获取私有模板列表
   */
  getTemplates(): Promise<any>
  {
    return this.httpGet('wxaapi/newtmpl/gettemplate');
  }

  /**
   * 发送订阅消息
   * @param data 详情
   */
  send(data: object): Promise<any>
  {
    let params = this.formatMessage(data);

    return this.httpPostJson(this.API_SEND, params);
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

}
