'use strict';

import BaseClient from '../../Core/BaseClient';

export default class Client extends BaseClient
{
  categories(): Promise<any>
  {
    return this.httpGet('cgi-bin/poi/getwxcategory');
  }

  get(poi_id: number): Promise<any>
  {
    return this.httpPostJson('cgi-bin/poi/getpoi', {
      poi_id,
    });
  }

  list(begin: number = 0, limit: number = 10): Promise<any>
  {
    return this.httpPostJson('cgi-bin/poi/getpoilist', {
      begin,
      limit,
    });
  }

  create(base_info: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/poi/addpoi', {
      business: {
        base_info
      },
    });
  }

  async createAndGetId(base_info: object): Promise<any>
  {
    let res = await this.create(base_info);
    return res && res['poi_id'] ? res['poi_id'] : '';
  }

  update(poi_id: number, base_info: object): Promise<any>
  {
    base_info['poi_id'] = poi_id;
    return this.httpPostJson('cgi-bin/poi/updatepoi', {
      business: {
        base_info
      },
    });
  }

  delete(poi_id: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/poi/delpoi', {
      poi_id,
    });
  }

}
