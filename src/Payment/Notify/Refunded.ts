'use strict';

import Handler from './Handler';
import Response from '../../Core/Http/Response';
import { parseXml } from '../../Core/Utils';
import { PaymentRefundedHandler } from '../../Core/Types';

export default class RefundedHandler extends Handler
{
  async handle(closure: PaymentRefundedHandler): Promise<Response>
  {
    if (typeof closure != 'function') {
      throw new Error('Should pass an closure function');
    }
    this.strict(await closure.apply(this, [
      await this.getMessage(),
      await this.reqInfo(),
      (message: string) => {
        this.setFail.apply(this, [message]);
      },
    ]));

    return await this.toResponse();
  }

  async reqInfo(): Promise<any>
  {
    return await parseXml(await this.decryptMessage('req_info'));
  }

}
