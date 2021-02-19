'use strict';

import BaseClient from '../../Core/BaseClient';
import { merge } from '../../Core/Utils';

export default class ExternalContactClient extends BaseClient
{

  getFollowUsers(): Promise<any>
  {
    return this.httpGet('cgi-bin/externalcontact/get_follow_user_list');
  }

  list(userId: string): Promise<any>
  {
    return this.httpGet('cgi-bin/externalcontact/list', {
      userid: userId,
    });
  }

  get(externalUserId: string): Promise<any>
  {
    return this.httpGet('cgi-bin/externalcontact/get', {
      external_userid: externalUserId,
    });
  }

  batchGetUsers(data: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/batch/get_by_user', data);
  }

  remark(data: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/remark', data);
  }

  getUnassigned(pageId: number = 0, pageSize: number = 1000): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/get_unassigned_list', {
      page_id: pageId,
      page_size: pageSize,
    });
  }

  transfer(externalUserId: string, handoverUserId: string, takeoverUserId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/get_unassigned_list', {
      external_userid: externalUserId,
      handover_userid: handoverUserId,
      takeover_userid: takeoverUserId,
    });
  }

  getGroupChats(data: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/groupchat/list', data);
  }

  getGroupChat(chatId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/groupchat/get', {
      chat_id: chatId,
    });
  }

  getCorpTags(tagIds: string[]): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/get_corp_tag_list', {
      tag_id: tagIds,
    });
  }

  addCorpTag(data: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/add_corp_tag', data);
  }

  updateCorpTag(id: string, name: string, order: number = 1): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/edit_corp_tag', {
      id,
      name,
      order,
    });
  }

  deleteCorpTag(tagId: string[], groupId: string[]): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/del_corp_tag', {
      tag_id: tagId,
      group_id: groupId,
    });
  }

  markTags(data: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/mark_tag', data);
  }

}
