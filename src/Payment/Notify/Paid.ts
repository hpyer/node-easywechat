'use strict';

import Handler from './Handler';
import Response from "../../Core/Http/Response";
import { PaymentPaidHandler } from '../../Core/Types';

export default class PaidHandler extends Handler
{
  async handle(closure: PaymentPaidHandler): Promise<Response>
  {
    if (typeof closure != 'function') {
      throw new Error('Should pass an closure function');
    }
    this.strict(await closure.apply(this, [
      await this.getMessage(),
      (message: string) => {
        this.setFail.apply(this, [message]);
      },
    ]));

    return await this.toResponse();
  }
}
