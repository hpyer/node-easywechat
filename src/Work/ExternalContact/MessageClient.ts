'use strict';

import BaseClient from '../../Core/BaseClient';
import { inArray, merge } from '../../Core/Utils';

export default class MessageClient extends BaseClient
{

  protected required: string[] = ['content', 'title', 'url', 'pic_media_id', 'appid', 'page'];

  protected textMessage: object = {
    content: '',
  };

  protected imageMessage: object = {
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

  submit(msg: object): Promise<any>
  {
    let params = this.formatMessage(msg);
    return this.httpPostJson('cgi-bin/externalcontact/add_msg_template', params);
  }

  get(msgId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/get_group_msg_result', {
      msgid: msgId,
    });
  }

  sendWelcome(welcomeCode: string, msg: object): Promise<any>
  {
    let formattedMsg = this.formatMessage(msg);
    let params = merge(merge({}, formattedMsg), {
      welcome_code: welcomeCode,
    });

    return this.httpPostJson('cgi-bin/externalcontact/send_welcome_msg', params);
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
