'use strict';

import BaseClient from '../../Core/BaseClient';
import { merge } from '../../Core/Utils';

export default class ContactWayClient extends BaseClient
{

  create(type: number, scene: number, config: object): Promise<any>
  {
    let params = merge({
      type,
      scene,
    }, config);
    return this.httpPostJson('cgi-bin/externalcontact/add_contact_way', params);
  }

  get(configId: string): Promise<any>
  {
    return this.httpGet('cgi-bin/externalcontact/get_contact_way', {
      config_id: configId,
    });
  }

  update(configId: string, config: object): Promise<any>
  {
    let params = merge({
      config_id: configId,
    }, config);

    return this.httpPostJson('cgi-bin/externalcontact/update_contact_way', params);
  }

  delete(configId: string): Promise<any>
  {
    return this.httpGet('cgi-bin/externalcontact/del_contact_way', {
      config_id: configId,
    });
  }

}
