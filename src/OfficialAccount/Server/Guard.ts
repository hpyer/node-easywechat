'use strict';

import ServerGuard from '../../Core/ServerGuard';

export default class Guard extends ServerGuard
{
  async shouldReturnRawResponse(): Promise<boolean>
  {
    return !!(await this.app['request'].get('echostr'));
  }
};
