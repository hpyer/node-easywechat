'use strict';

import BaseClient from '../Core/BaseClient';
import * as Merge from 'merge';
import StreamResponse from '../../Core/Http/StreamResponse';

export default class Client extends BaseClient
{

  async get(date: string, type: string = 'ALL', options: object = {}): Promise<any>
  {
    options = options || {};
    options['encoding'] = 'binary';

    let params = {
      appid: this.app['config']['app_id'],
      bill_date: date,
      bill_type: type,
    };
    params = Merge(params, options);

    let res = await this.requestRaw(this.wrap('pay/downloadbill'), params);

    let content = res.getContent().toString();
    if (content && content.indexOf('<xml>') === 0) {
      return await this.parseXml(content);
    }

    return StreamResponse.buildFromIncomingMessage(res);
  }

}
