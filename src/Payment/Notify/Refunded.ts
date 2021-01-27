'use strict';

import Handler from './Handler';
import Xml2js from 'xml2js';
import Response from '../../Core/Http/Response';
import { singleItem } from '../../Core/Utils';

export default class RefundedHandler extends Handler
{
  async handle(closure: Function): Promise<Response>
  {
    if (typeof closure != 'function') {
      throw new Error('Should pass an closure function');
    }
    this.strict(await closure.apply(this, [
      await this.getMessage(),
      await this.reqInfo(),
      this.setFail
    ]));

    return await this.toResponse();
  }

  async reqInfo(): Promise<any>
  {
    return await this.parseXml(await this.decryptMessage('req_info'));
  }

  async parseXml(xml: string): Promise<any>
  {
    let res = await Xml2js.parseStringPromise(xml);
    res = singleItem(res);
    if (res['xml']) res = res['xml'];
    return res;
  }

}
