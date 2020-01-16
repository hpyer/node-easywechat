'use strict';

import Handler from './Handler';

export default class PaidHandler extends Handler
{
  async handle(closure: Function): Promise<void>
  {
    if (typeof closure != 'function') {
      throw new Error('Should pass an closure function');
    }
    this.strict(await closure.apply(this, [
      this.getMessage(),
      this.setFail,
    ]));
  }
}
