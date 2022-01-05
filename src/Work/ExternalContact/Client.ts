'use strict';

import BaseClient from '../../Core/BaseClient';

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

  batchGet(userId: string, cursor: string = '', limit: number = 1): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/batch/get_by_user', {
      userid: userId,
      cursor,
      limit,
    });
  }

  batchGetByUser(userId: string, cursor: string = '', limit: number = 1): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/batch/get_by_user', {
      userid: userId,
      cursor,
      limit,
    });
  }

  remark(data: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/remark', data);
  }

  getUnassigned(pageId: number = 0, pageSize: number = 1000, cursor: string = null): Promise<any>
  {
    let params = {
      page_id: pageId,
      page_size: pageSize,
      cursor,
    };
    Object.keys(params).map(key => {
      if (params[key] === null || params[key] === undefined) {
        delete params[key];
      }
    });
    return this.httpPostJson('cgi-bin/externalcontact/get_unassigned_list', params);
  }

  transfer(externalUserId: string, handoverUserId: string, takeoverUserId: string, transferSuccessMessage: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/transfer', {
      external_userid: externalUserId,
      handover_userid: handoverUserId,
      takeover_userid: takeoverUserId,
      transfer_success_msg: transferSuccessMessage,
    });
  }

  transferCustomer(externalUserId: string, handoverUserId: string, takeoverUserId: string, transferSuccessMessage: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/transfer_customer', {
      external_userid: externalUserId,
      handover_userid: handoverUserId,
      takeover_userid: takeoverUserId,
      transfer_success_msg: transferSuccessMessage,
    });
  }

  resignedTransferCustomer(externalUserId: string, handoverUserId: string, takeoverUserId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/resigned/transfer_customer', {
      external_userid: externalUserId,
      handover_userid: handoverUserId,
      takeover_userid: takeoverUserId,
    });
  }

  transferGroupChat(chatIds: string[], newOwner: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/groupchat/transfer', {
      chat_id_list: chatIds,
      new_owner: newOwner,
    });
  }

  transferResult(handoverUserId: string, takeoverUserId: string, cursor: string = null): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/resigned/transfer_result', {
      handover_userid: handoverUserId,
      takeover_userid: takeoverUserId,
      cursor,
    });
  }

  getTransferResult(externalUserId: string, handoverUserId: string, takeoverUserId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/get_transfer_result', {
      external_userid: externalUserId,
      handover_userid: handoverUserId,
      takeover_userid: takeoverUserId,
    });
  }

  getGroupChats(data: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/groupchat/list', data);
  }

  getGroupChat(chatId: string, needName: number = 0): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/groupchat/get', {
      chat_id: chatId,
      need_name: needName,
    });
  }

  getCorpTags(tagIds: string[], groupIds: string[]): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/get_corp_tag_list', {
      tag_id: tagIds,
      group_id: groupIds,
    });
  }

  addCorpTag(data: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/add_corp_tag', data);
  }

  updateCorpTag(id: string, name: string = null, order: number = null): Promise<any>
  {
    let params = {
      id,
    };
    if (name !== null) {
      params['name'] = name;
    }
    if (order !== null) {
      params['order'] = order;
    }
    return this.httpPostJson('cgi-bin/externalcontact/edit_corp_tag', params);
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
