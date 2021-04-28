'use strict';

import BaseClient from '../../Core/BaseClient';
import { inArray, merge } from '../../Core/Utils';

export default class MessageTemplateClient extends BaseClient
{

  protected required: string[] = ['title', 'url', 'pic_media_id', 'appid', 'page'];

  protected textMessage: object = {
    content: '',
  };

  protected imageMessage: object = {
    media_id: '',
    pic_url: '',
  };

  protected linkMessage: object = {
    title: '',
    picurl: '',
    desc: '',
    url: '',
  };

  protected miniprogramMessage: object = {
    title: '',
    pic_media_id: '',
    appid: '',
    page: '',
  };

  create(msgTemplate: object): Promise<any>
  {
    let params = this.formatMessage(msgTemplate);
    return this.httpPostJson('cgi-bin/externalcontact/group_welcome_template/add', params);
  }

  update(templateId: string, msgTemplate: object): Promise<any>
  {
    let params = this.formatMessage(msgTemplate);
    params['template_id'] = templateId;
    return this.httpPostJson('cgi-bin/externalcontact/group_welcome_template/edit', params);
  }

  get(templateId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/group_welcome_template/get', {
      template_id: templateId,
    });
  }

  delete(templateId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/group_welcome_template/del', {
      template_id: templateId,
    });
  }

  protected formatMessage(data: object): object
  {
    let params = merge({}, data);
    if (params['text']) {
      params['text'] = this.formatFields(params['text'], this.textMessage);
    }
    if (params['image']) {
      params['image'] = this.formatFields(params['image'], this.imageMessage);
    }
    if (params['link']) {
      params['link'] = this.formatFields(params['link'], this.linkMessage);
    }
    if (params['miniprogram']) {
      params['miniprogram'] = this.formatFields(params['miniprogram'], this.miniprogramMessage);
    }
    return params;
  }

  protected formatFields(data: object, defaults: object): object
  {
    let params = merge(merge({}, defaults), data);
    for (let key in params) {
      if (inArray(key, this.required) && typeof params[key] == undefined && typeof defaults[key] == undefined) {
        throw new Error(`Attribute "${key}" can not be empty!`);
      }

      params[key] = params[key] || defaults[key];
    }
    return params;
  }

}
