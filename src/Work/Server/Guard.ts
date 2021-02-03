'use strict';

import ServerGuard from '../../Core/ServerGuard';

export default class Guard extends ServerGuard
{
  protected async validate(): Promise<this>
  {
    return this;
  }

  protected async isSafeMode(): Promise<boolean>
  {
    return true;
  }

  protected async shouldReturnRawResponse(): Promise<boolean>
  {
    return !((await this.app.request.get('echostr')) == null);
  }
};
