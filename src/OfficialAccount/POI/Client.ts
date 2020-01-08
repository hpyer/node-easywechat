'use strict';

import BaseClient from '../../Core/BaseClient';

export default class Client extends BaseClient
{
  async categories(): Promise<any>
  {
    return await this.httpGet('cgi-bin/poi/getwxcategory');
  }

  async get(poi_id: number): Promise<any>
  {
    return await this.httpPost('cgi-bin/poi/getpoi', {
      json: true,
      body: {
        poi_id,
      }
    });
  }

  async list(begin: number = 0, limit: number = 10): Promise<any>
  {
    return await this.httpPost('cgi-bin/poi/getpoilist', {
      json: true,
      body: {
        begin,
        limit,
      }
    });
  }

  async create(base_info: object): Promise<any>
  {
    return await this.httpPost('cgi-bin/poi/addpoi', {
      json: true,
      body: {
        business: {
          base_info
        },
      }
    });
  }

  async createAndGetId(base_info: object): Promise<any>
  {
    let response = await this.create(base_info);
    return response && response['poi_id'] ? response['poi_id'] : '';
  }

  async update(poi_id: number, base_info: object): Promise<any>
  {
    base_info['poi_id'] = poi_id;
    return await this.httpPost('cgi-bin/poi/updatepoi', {
      json: true,
      body: {
        business: {
          base_info
        },
      }
    });
  }

  async delete(poi_id: string): Promise<any>
  {
    return await this.httpPost('cgi-bin/poi/delpoi', {
      json: true,
      body: {
        poi_id,
      }
    });
  }

}
