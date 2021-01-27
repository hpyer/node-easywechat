'use strict';

import Handler from './Handler';
import Response from "../../Core/Http/Response";

export default class PaidHandler extends Handler
{
  async handle(closure: Function): Promise<Response>
  {
    if (typeof closure != 'function') {
      throw new Error('Should pass an closure function');
    }
    this.strict(await closure.apply(this, [
      await this.getMessage(),
      this.setFail,
    ]));

    return await this.toResponse();
  }
}
