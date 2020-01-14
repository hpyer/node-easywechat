'use strict';

import Handler from './Handler';

export default class PaidHandler extends Handler
{
  async handle(closure: Function): Promise<void>
  {
    this.strict(await closure(this.getMessage(), this.setFail));
  }
}
