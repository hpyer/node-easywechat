'use strict';

import BaseClient from '../../Core/BaseClient';

export default class TagClient extends BaseClient
{

  list(): Promise<any>
  {
    return this.httpGet('cgi-bin/tag/list');
  }

  create(tagName: string, tagId: number = null): Promise<any>
  {
    return this.httpPostJson('cgi-bin/tag/create', {
      tagname: tagName,
      tagid: tagId,
    });
  }

  update(tagId: number, tagName: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/tag/update', {
      tagid: tagId,
      tagname: tagName,
    });
  }

  delete(tagId: number): Promise<any>
  {
    return this.httpGet('cgi-bin/tag/delete', {
      tagid: tagId,
    });
  }

  get(tagId: number): Promise<any>
  {
    return this.httpGet('cgi-bin/tag/get', {
      tagid: tagId,
    });
  }

  tagUsers(tagId: number, userList: Array<string>): Promise<any>
  {
    return this.tagOrUntagUsers('cgi-bin/tag/addtagusers', tagId, userList);
  }

  tagDepartments(tagId: number, partyList: Array<string>): Promise<any>
  {
    return this.tagOrUntagUsers('cgi-bin/tag/addtagusers', tagId, [], partyList);
  }

  untagUsers(tagId: number, userList: Array<string>): Promise<any>
  {
    return this.tagOrUntagUsers('cgi-bin/tag/deltagusers', tagId, userList);
  }

  untagDepartments(tagId: number, partyList: Array<string>): Promise<any>
  {
    return this.tagOrUntagUsers('cgi-bin/tag/deltagusers', tagId, [], partyList);
  }

  protected tagOrUntagUsers(endpoint: string, tagId: number, userList: Array<string> = [], partyList: Array<string> = []): Promise<any>
  {
    return this.httpPostJson(endpoint, {
      tagid: tagId,
      userlist: userList,
      partylist: partyList,
    });
  }

}
