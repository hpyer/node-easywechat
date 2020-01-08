'use strict';

import ServerGuard from '../../Core/ServerGuard';

export default class Guard extends ServerGuard
{
  shouldReturnRawResponse(): boolean
  {
    return !!this.app['request'].get('echostr');
  }
};
