'use strict';

import BaseClient from '../../Core/BaseClient';
import { merge } from '../../Core/Utils';

export default class MenuClient extends BaseClient
{

  get(): Promise<any>
  {
    return this.httpGet('cgi-bin/menu/get', {
      agentid: this.app.config.agent_id,
    });
  }

  create(data: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/menu/create', data, {
      agentid: this.app.config.agent_id,
    });
  }

  delete(): Promise<any>
  {
    return this.httpGet('cgi-bin/menu/delete', {
      agentid: this.app.config.agent_id,
    });
  }

}
