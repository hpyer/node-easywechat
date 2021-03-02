'use strict';

import Handler from './Handler';
import { isString, randomString } from '../../Core/Utils';
import Response from '../../Core/Http/Response';
import { PaymentScannedHandler } from '../../Core/Types';

export default class ScannedHandler extends Handler
{
  protected check: Boolean = false;
  protected alert: string = null;

  setAlert(message: string): void
  {
    this.alert = message;
  }

  async handle(closure: PaymentScannedHandler): Promise<Response>
  {
    if (typeof closure != 'function') {
      throw new Error('Should pass an closure function');
    }
    let result = await closure.apply(this, [
      await this.getMessage(),
      (message: string) => {
        this.setFail.apply(this, [message]);
      },
      (message: string) => {
        this.setAlert.apply(this, [message]);
      },
    ]);

    let attributes = {
      result_code: (this.alert === null && this.fail === null) ? this.SUCCESS : this.FAIL,
      err_code_des: this.alert,
    }

    if (this.alert === null && isString(result)) {
      attributes['appid'] = this.app.config.app_id;
      attributes['mch_id'] = this.app.config.mch_id;
      attributes['nonce_str'] = randomString(16);
      attributes['prepay_id'] = result;
    }

    return await this.respondWith(attributes, true).toResponse();
  }

}
