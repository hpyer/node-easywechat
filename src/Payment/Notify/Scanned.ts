'use strict';

import Handler from './Handler';
import { isString, randomString } from '../../Core/Utils';

export default class ScannedHandler extends Handler
{
  protected check: Boolean = false;
  protected alert: string = '';

  setAlert(message: string): void
  {
    this.alert = message;
  }

  async handle(closure: Function): Promise<void>
  {
    let result = await closure(this.getMessage(), this.setFail, this.setAlert);

    let attributes = {
      result_code: !this.alert && !this.fail ? this.SUCCESS : this.FAIL,
      err_code_des: this.alert,
    }

    if (!this.alert && isString(result)) {
      attributes['appid'] = this.app['config'].app_id;
      attributes['mch_id'] = this.app['config'].mch_id;
      attributes['nonce_str'] = randomString(16);
      attributes['prepay_id'] = result;
    }

    return this.respondWith(attributes, true)['toResponse']();
  }

}
