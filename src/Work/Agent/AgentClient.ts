'use strict';

import BaseClient from '../../Core/BaseClient';
import { merge } from '../../Core/Utils';

export default class AgentClient extends BaseClient
{

  get(agentId: number): Promise<any>
  {
    let params = {
      agentid: agentId,
    };

    return this.httpGet('cgi-bin/agent/get', params);
  }

  set(agentId: number, attributes: object): Promise<any>
  {
    let params = merge({
      agentid: agentId,
    }, attributes);

    return this.httpPostJson('cgi-bin/agent/set', params);
  }

  list(): Promise<any>
  {

    return this.httpGet('cgi-bin/agent/list');
  }

}
