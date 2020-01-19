'use strict';

import BaseClient from '../../Core/BaseClient';

export default class TagClient extends BaseClient
{
  create(name: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/tags/create', {
      tag: {
        name,
      }
    });
  }

  list(): Promise<any>
  {
    return this.httpGet('cgi-bin/tags/get');
  }

  update(id: string, name: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/tags/update', {
      tag: {
        id,
        name,
      }
    });
  }

  delete(id: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/tags/delete', {
      tag: {
        id,
      }
    });
  }

  userTags(openid: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/tags/getidlist', {
      openid,
    });
  }

  usersOfTag(tagid: number, next_openid: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/user/tag/get', {
      tagid,
      next_openid,
    });
  }

  tagUsers(openid_list: Array<string>, tagid: number): Promise<any>
  {
    return this.httpPostJson('cgi-bin/tags/members/batchtagging', {
      openid_list,
      tagid,
    });
  }

  untagUsers(openid_list: Array<string>, tagid: number): Promise<any>
  {
    return this.httpPostJson('cgi-bin/tags/members/batchuntagging', {
      openid_list,
      tagid,
    });
  }

}
