'use strict';

import BaseClient from '../../Core/BaseClient';
import StreamResponse from '../../Core/Http/StreamResponse';
import { merge } from '../../Core/Utils';

export default class AppCodeClient extends BaseClient
{

  /**
   * 获取小程序码（临时）
   * @param path 页面路径
   * @param optional 参数。width：小程序码的宽度，默认430；auto_color：自动配置线条颜色，默认false；line_color：rgb颜色值，auto_color为false有效，示例{r:0,g:0,b:0}
   */
  async get(path: string, optional: object = {}): Promise<any>
  {
    let params = merge({
      path,
    }, optional);
    return await this.getStream('wxa/getwxacode', params);
  }

  /**
   * 获取小程序码（永久）
   * @param scene 标识
   * @param optional 参数。path：页面路径，不能带参数；width：小程序码的宽度，默认430；auto_color：自动配置线条颜色，默认false；line_color：rgb颜色值，auto_color为false有效，示例{r:0,g:0,b:0}
   */
  async getUnlimit(scene: string, optional: object = {}): Promise<any>
  {
    let params = merge({
      scene,
    }, optional);
    return await this.getStream('wxa/getwxacodeunlimit', params);
  }

  /**
   * 获取小程序二维码（永久）
   * @param path 页面路径
   * @param width 二维码的宽度，默认430
   */
  async getQrCode(path: string, width: Number = null): Promise<any>
  {
    return await this.getStream('cgi-bin/wxaapp/createwxaqrcode', {
      path,
      width,
    });
  }

  protected async getStream(api: string, params: object): Promise<any>
  {
    let res = await this.requestRaw({
      url: api,
      method: 'POST',
      json: true,
      body: params
    });

    if (res.getHeader('content-disposition').indexOf('attachment') > -1) {
      return StreamResponse.buildFromResponse(res);
    }

    return res.getContent();
  }

}
