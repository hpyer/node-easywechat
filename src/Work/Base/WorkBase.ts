'use strict';

import BaseClient from '../../Core/BaseClient';

export default class WorkBase extends BaseClient
{

  getCallbackIp(): Promise<any>
  {
    return this.httpGet('cgi-bin/getcallbackip');
  }

}
