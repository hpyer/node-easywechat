'use strict';

import ServerGuard from '../../../Core/ServerGuard';

export default class Guard extends ServerGuard
{

  protected getToken(): string
  {
    return this.app['encryptor'].getToken();
  }

};
