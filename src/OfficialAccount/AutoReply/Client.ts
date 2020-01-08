'use strict';

import BaseClient from '../../Core/BaseClient';

export default class Client extends BaseClient
{
  async current(): Promise<any>
  {
    return await this.httpGet('cgi-bin/get_current_autoreply_info');
  }

}
