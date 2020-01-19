'use strict';

import BaseClient from '../../Core/BaseClient';

export default class Client extends BaseClient
{
  current(): Promise<any>
  {
    return this.httpGet('cgi-bin/get_current_autoreply_info');
  }

}
