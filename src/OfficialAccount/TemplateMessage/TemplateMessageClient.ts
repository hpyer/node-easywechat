'use strict';

import BaseClient from '../../Core/BaseClient';
import { inArray, isArray, isObject, merge } from '../../Core/Utils';

export default class Client extends BaseClient
{
  API_SEND: string = 'cgi-bin/message/template/send';

  protected message: object = {
    touser: '',
    template_id: '',
    url: '',
    data: {},
    miniprogram: '',
  };
  protected required: Array<string> = [
    'touser',
    'template_id',
  ];

  /**
   * 修改账号所属行业
   * @param industry_id1 主行业id
   * @param industry_id2 副行业id
   */
  setIndustry(industry_id1: string, industry_id2: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/template/api_set_industry', {
      industry_id1,
      industry_id2,
    });
  }

  /**
   * 获取支持的行业列表
   */
  getIndustry(): Promise<any>
  {
    return this.httpGet('cgi-bin/template/get_industry');
  }

  /**
   * 添加模板
   * @param template_id_short 模板库中模板的编号，有“TM**”和“OPENTMTM**”等形式
   */
  addTemplate(template_id_short: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/template/api_add_template', {
      template_id_short,
    });
  }

  /**
   * 获取所有模板列表
   */
  getPrivateTemplates(): Promise<any>
  {
    return this.httpGet('cgi-bin/template/get_all_private_template');
  }

  /**
   * 删除模板
   * @param template_id 模版id
   */
  deletePrivateTemplate(template_id: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/template/del_private_template', {
      template_id,
    });
  }

  /**
   * 发送模板消息
   * @param data 模版详情
   */
  send(data: object): Promise<any>
  {
    let params = this.formatMessage(data);

    return this.httpPostJson(this.API_SEND, params);
  }

  /**
   * 发送一次性订阅消息
   * @param data 消息详情
   */
  sendSubscription(data: object): Promise<any>
  {
    let params = this.formatMessage(data);

    return this.httpPostJson('cgi-bin/message/template/subscribe', params);
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

}
