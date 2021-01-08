'use strict';

import BaseClient from '../Core/BaseClient';
import StreamResponse from '../../Core/Http/StreamResponse';
import { merge } from '../../Core/Utils';

export default class BillClient extends BaseClient
{

  /**
   * 下载对账单
   * @param date 对账单的日期，格式：20140603
   * @param type 账单类型，默认：ALL
   * @param options 其它参数
   */
  async get(date: string, type: string = 'ALL', options: object = {}): Promise<any>
  {
    options = options || {};
    options['encoding'] = 'binary';

    let params = merge({
      appid: this.app.config.app_id,
      bill_date: date,
      bill_type: type,
    }, options);

    let res = await this.requestRaw(this.wrap('pay/downloadbill'), params);

    let content = res.getContent().toString();
    if (content && content.indexOf('<xml>') === 0) {
      return await this.parseXml(content);
    }

    return StreamResponse.buildFromResponse(res);
  }

}
