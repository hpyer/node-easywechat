'use strict';

import BaseClient from '../../Core/BaseClient';
import * as Merge from 'merge';
import { inArray, isArray, isObject } from '../../Core/Utils';

export default class SubscribeMessageClient extends BaseClient
{

  protected message = {
    touser: '',
    template_id: '',
    page: '',
    data: '',
  };

  protected required = ['touser', 'template_id', 'data'];

  send(data: object): Promise<any>
  {
    let params = this.formatMessage(data);

    return this.httpPostJson('cgi-bin/message/subscribe/send', params);
  }

  protected formatMessage (data: object)
  {
    let params = Merge({}, this.message, data);

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

  addTemplate(tid: string, kidList: Array<Number>, sceneDesc: string = null): Promise<any>
  {
    sceneDesc = sceneDesc || '';
    return this.httpPost('wxaapi/newtmpl/addtemplate', {
      tid,
      kidList,
      sceneDesc,
    });
  }

  deleteTemplate(id: string): Promise<any>
  {
    return this.httpPost('wxaapi/newtmpl/deltemplate', {
      priTmplId: id,
    });
  }

  getTemplateKeywords(tid: string): Promise<any>
  {
    return this.httpGet('wxaapi/newtmpl/getpubtemplatekeywords', {
      tid,
    });
  }

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

  getTemplates(): Promise<any>
  {
    return this.httpGet('wxaapi/newtmpl/gettemplate');
  }

  getCategory(): Promise<any>
  {
    return this.httpGet('wxaapi/newtmpl/getcategory');
  }

}
