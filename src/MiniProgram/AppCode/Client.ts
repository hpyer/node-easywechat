'use strict';

import BaseClient from '../../Core/BaseClient';
import StreamResponse from '../../Core/Http/StreamResponse';
import * as Merge from 'merge';

export default class Client extends BaseClient
{

  async get(path: string, optional: object = {}): Promise<any>
  {
    let params = Merge({
      path,
    }, optional);
    return await this.getStream('wxa/getwxacode', params);
  }

  async getUnlimit(scene: string, optional: object = {}): Promise<any>
  {
    let params = Merge({
      scene,
    }, optional);
    return await this.getStream('wxa/getwxacodeunlimit', params);
  }

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
