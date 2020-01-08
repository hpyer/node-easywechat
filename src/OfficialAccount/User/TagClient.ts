'use strict';

import BaseClient from '../../Core/BaseClient';

export default class TagClient extends BaseClient
{
  async create(name: string): Promise<any>
  {
    return await this.httpPost('cgi-bin/tags/create', {
      json: true,
      body: {
        tag: {
          name,
        }
      }
    });
  }

  async list(): Promise<any>
  {
    return await this.httpGet('cgi-bin/tags/get');
  }

  async update(id: string, name: string): Promise<any>
  {
    return await this.httpPost('cgi-bin/tags/update', {
      json: true,
      body: {
        tag: {
          id,
          name,
        }
      }
    });
  }

  async delete(id: string): Promise<any>
  {
    return await this.httpPost('cgi-bin/tags/delete', {
      json: true,
      body: {
        tag: {
          id,
        }
      }
    });
  }

  async userTags(openid: string): Promise<any>
  {
    return await this.httpPost('cgi-bin/tags/getidlist', {
      json: true,
      body: {
        openid,
      }
    });
  }

  async usersOfTag(tagid: number, next_openid: string): Promise<any>
  {
    return await this.httpPost('cgi-bin/user/tag/get', {
      json: true,
      body: {
        tagid,
        next_openid,
      }
    });
  }

  async tagUsers(openid_list: Array<string>, tagid: number): Promise<any>
  {
    return await this.httpPost('cgi-bin/tags/members/batchtagging', {
      json: true,
      body: {
        openid_list,
        tagid,
      }
    });
  }

  async untagUsers(openid_list: Array<string>, tagid: number): Promise<any>
  {
    return await this.httpPost('cgi-bin/tags/members/batchuntagging', {
      json: true,
      body: {
        openid_list,
        tagid,
      }
    });
  }

}
