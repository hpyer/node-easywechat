'use strict';

import BaseClient from '../../Core/BaseClient';

export default class TagClient extends BaseClient
{
  async create(name: string): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/tags/create', {
      tag: {
        name,
      }
    });
  }

  async list(): Promise<any>
  {
    return await this.httpGet('cgi-bin/tags/get');
  }

  async update(id: string, name: string): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/tags/update', {
      tag: {
        id,
        name,
      }
    });
  }

  async delete(id: string): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/tags/delete', {
      tag: {
        id,
      }
    });
  }

  async userTags(openid: string): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/tags/getidlist', {
      openid,
    });
  }

  async usersOfTag(tagid: number, next_openid: string): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/user/tag/get', {
      tagid,
      next_openid,
    });
  }

  async tagUsers(openid_list: Array<string>, tagid: number): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/tags/members/batchtagging', {
      openid_list,
      tagid,
    });
  }

  async untagUsers(openid_list: Array<string>, tagid: number): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/tags/members/batchuntagging', {
      openid_list,
      tagid,
    });
  }

}
