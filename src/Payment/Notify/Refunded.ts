'use strict';

import Handler from './Handler';
import * as Xml2js from 'xml2js';
import Response from '../../Core/Http/Response';

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

    return this.toResponse();
  }

  async reqInfo(): Promise<any>
  {
    return await Xml2js.parseStringPromise(this.decryptMessage('req_info'));
  }
}
