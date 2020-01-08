'use strict';

import BaseClient from '../../Core/BaseClient';

export default class Client extends BaseClient
{
  private endpoint: string = 'https://api.weixin.qq.com/cgi-bin/qrcode/create';

  async temporary(scene_str: string, expireSeconds: number = 0): Promise<any>
  {
    if (expireSeconds <= 0 || expireSeconds > 2592000) expireSeconds = 2592000;
    let action_name = '', scene = {};
    if (typeof scene_str == 'string') {
      scene = { scene_str };
      action_name = 'QR_STR_SCENE';
    }
    else {
      scene = { scene_id: scene_str };
      action_name = 'QR_SCENE';
    }
    let data = {
      expire_seconds: expireSeconds,
      action_name,
      action_info: { scene }
    };
    return await this.requestWithAccessToken({
      url: this.endpoint,
      json: true,
      body: data
    });
  }

  async forever(scene: any): Promise<any>
  {
    let action_name = '';
    if (typeof scene == 'string') {
      scene = { scene_str: scene };
      action_name = 'QR_LIMIT_STR_SCENE';
    }
    else {
      scene = { scene_id: scene };
      action_name = 'QR_LIMIT_SCENE';
    }
    let data = {
      action_name,
      action_info: { scene }
    };
    return await this.requestWithAccessToken({
      url: this.endpoint,
      json: true,
      body: data
    });
  }

  async url (ticket: string): Promise<any>
  {
    let url = 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=' + ticket;
    return await this.httpFile(url);
  }

}
