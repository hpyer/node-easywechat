'use strict';

import Handler from './Handler';
import * as Xml2js from 'xml2js';

export default class RefundedHandler extends Handler
{
  async handle(closure: Function): Promise<void>
  {
    if (typeof closure != 'function') {
      throw new Error('Should pass an closure function');
    }
    this.strict(await closure.apply(this, [
      this.getMessage(),
      await this.reqInfo(),
      this.setFail
    ]));
  }

  async reqInfo(): Promise<any>
  {
    return await Xml2js.parseStringPromise(this.decryptMessage('req_info'));
  }
}
