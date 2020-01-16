'use strict';

import * as Merge from 'merge';
import BaseClient from '../../Core/BaseClient';
import { inArray, isArray, isObject } from '../../Core/Utils';

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

  async setIndustry(industry_id1: string, industry_id2: string): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/template/api_set_industry', {
      industry_id1,
      industry_id2,
    });
  }

  async getIndustry(): Promise<any>
  {
    return await this.httpGet('cgi-bin/template/get_industry');
  }

  async addTemplate(template_id_short: string): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/template/api_add_template', {
      template_id_short,
    });
  }

  async getPrivateTemplates(): Promise<any>
  {
    return await this.httpGet('cgi-bin/template/get_all_private_template');
  }

  async deletePrivateTemplate(template_id: string): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/template/del_private_template', {
      template_id,
    });
  }

  async send(data: object): Promise<any>
  {
    let params = this.formatMessage(data);

    this.restoreMessage();

    return await this.httpPostJson(this.API_SEND, params);
  }

  async sendSubscription(data: object): Promise<any>
  {
    let params = this.formatMessage(data);

    this.restoreMessage();

    return await this.httpPostJson('cgi-bin/message/template/subscribe', params);
  }

  protected formatMessage (data: object)
  {
    let params = Merge({}, this.message, data);

    for (let key in params) {
      if (inArray(key, this.required) && !params[key] && !this.message[key]) {
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

  protected restoreMessage()
  {
    for (let key in this.message) {
      if (isObject(this.message[key])) {
        this.message[key] = {};
      }
      if (isArray(this.message[key])) {
        this.message[key] = [];
      }
      else {
        this.message[key] = '';
      }
    }
  }

}
