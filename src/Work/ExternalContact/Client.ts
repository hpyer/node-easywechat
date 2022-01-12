'use strict';

import BaseClient from '../../Core/BaseClient';
import Stream from 'stream';

export default class ExternalContactClient extends BaseClient
{

  /**
   * 获取配置了客户联系功能的成员列表
   * @see https://work.weixin.qq.com/api/doc#90000/90135/91554
   * @returns
   */
  getFollowUsers(): Promise<any>
  {
    return this.httpGet('cgi-bin/externalcontact/get_follow_user_list');
  }

  /**
   * 获取外部联系人列表
   * @see https://work.weixin.qq.com/api/doc#90000/90135/91555
   * @param userId
   * @returns
   */
  list(userId: string): Promise<any>
  {
    return this.httpGet('cgi-bin/externalcontact/list', {
      userid: userId,
    });
  }

  /**
   * 获取外部联系人详情
   * @see https://work.weixin.qq.com/api/doc#90000/90135/91556
   * @param externalUserId
   * @returns
   */
  get(externalUserId: string): Promise<any>
  {
    return this.httpGet('cgi-bin/externalcontact/get', {
      external_userid: externalUserId,
    });
  }

  /**
   * 批量获取客户详情
   * @see https://work.weixin.qq.com/api/doc/90000/90135/92994
   * @param userIdList
   * @param cursor
   * @param limit
   * @returns
   */
  batchGet(userIdList: string[], cursor: string = '', limit: number = 1): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/batch/get_by_user', {
      userid_list: userIdList,
      cursor,
      limit,
    });
  }

  /**
   * 批量获取外部联系人详情
   * @see https://work.weixin.qq.com/api/doc/90001/90143/93010
   * @param userIdList
   * @param cursor
   * @param limit
   * @returns
   */
  batchGetByUser(userIdList: string[], cursor: string = '', limit: number = 1): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/batch/get_by_user', {
      userid_list: userIdList,
      cursor,
      limit,
    });
  }

  /**
   * 修改客户备注信息
   * @see https://work.weixin.qq.com/api/doc/90000/90135/92115
   * @param data
   * @returns
   */
  remark(data: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/remark', data);
  }

  /**
   * 获取离职成员的客户列表
   * @see https://work.weixin.qq.com/api/doc/90000/90135/92124
   * @param pageId
   * @param pageSize
   * @param cursor
   * @returns
   */
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

  /**
   * 离职成员的外部联系人再分配
   * @see https://work.weixin.qq.com/api/doc#90000/90135/91564
   * @param externalUserId
   * @param handoverUserId
   * @param takeoverUserId
   * @param transferSuccessMessage
   * @returns
   */
  transfer(externalUserId: string, handoverUserId: string, takeoverUserId: string, transferSuccessMessage: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/transfer', {
      external_userid: externalUserId,
      handover_userid: handoverUserId,
      takeover_userid: takeoverUserId,
      transfer_success_msg: transferSuccessMessage,
    });
  }

  /**
   * 分配在职成员的客户
   * @see https://work.weixin.qq.com/api/doc/90000/90135/92125
   * @param externalUserId
   * @param handoverUserId
   * @param takeoverUserId
   * @param transferSuccessMessage
   * @returns
   */
  transferCustomer(externalUserId: string, handoverUserId: string, takeoverUserId: string, transferSuccessMessage: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/transfer_customer', {
      external_userid: externalUserId,
      handover_userid: handoverUserId,
      takeover_userid: takeoverUserId,
      transfer_success_msg: transferSuccessMessage,
    });
  }

  /**
   * 分配离职成员的客户
   * @see https://work.weixin.qq.com/api/doc/90000/90135/94081
   * @param externalUserId
   * @param handoverUserId
   * @param takeoverUserId
   * @returns
   */
  resignedTransferCustomer(externalUserId: string, handoverUserId: string, takeoverUserId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/resigned/transfer_customer', {
      external_userid: externalUserId,
      handover_userid: handoverUserId,
      takeover_userid: takeoverUserId,
    });
  }

  /**
   * 离职成员的群再分配
   * @see https://work.weixin.qq.com/api/doc/90000/90135/92127
   * @param chatIds
   * @param newOwner
   * @returns
   */
  transferGroupChat(chatIds: string[], newOwner: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/groupchat/transfer', {
      chat_id_list: chatIds,
      new_owner: newOwner,
    });
  }

  /**
   * 查询客户接替状态
   * @see https://work.weixin.qq.com/api/doc/90000/90135/94082
   * @param handoverUserId
   * @param takeoverUserId
   * @param cursor
   * @returns
   */
  transferResult(handoverUserId: string, takeoverUserId: string, cursor: string = null): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/resigned/transfer_result', {
      handover_userid: handoverUserId,
      takeover_userid: takeoverUserId,
      cursor,
    });
  }

  /**
   * 查询客户接替结果
   * @see https://work.weixin.qq.com/api/doc/90001/90143/93009
   * @param externalUserId
   * @param handoverUserId
   * @param takeoverUserId
   * @returns
   */
  getTransferResult(externalUserId: string, handoverUserId: string, takeoverUserId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/get_transfer_result', {
      external_userid: externalUserId,
      handover_userid: handoverUserId,
      takeover_userid: takeoverUserId,
    });
  }

  /**
   * 获取客户群列表
   * @see https://work.weixin.qq.com/api/doc/90000/90135/92120
   * @param data
   * @returns
   */
  getGroupChats(data: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/groupchat/list', data);
  }

  /**
   * 获取客户群详情
   * @see https://work.weixin.qq.com/api/doc/90000/90135/92122
   * @param chatId
   * @param needName
   * @returns
   */
  getGroupChat(chatId: string, needName: number = 0): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/groupchat/get', {
      chat_id: chatId,
      need_name: needName,
    });
  }

  /**
   * 获取企业标签库
   * @see https://work.weixin.qq.com/api/doc/90000/90135/92117#获取企业标签库
   * @param tagIds
   * @param groupIds
   * @returns
   */
  getCorpTags(tagIds: string[], groupIds: string[]): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/get_corp_tag_list', {
      tag_id: tagIds,
      group_id: groupIds,
    });
  }

  /**
   * 添加企业客户标签
   * @see https://work.weixin.qq.com/api/doc/90000/90135/92117#添加企业客户标签
   * @param data
   * @returns
   */
  addCorpTag(data: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/add_corp_tag', data);
  }

  /**
   * 编辑企业客户标签
   * @see https://work.weixin.qq.com/api/doc/90000/90135/92117#编辑企业客户标签
   * @param id
   * @param name
   * @param order
   * @returns
   */
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

  /**
   * 删除企业客户标签
   * @see https://work.weixin.qq.com/api/doc/90000/90135/92117#删除企业客户标签
   * @param tagId
   * @param groupId
   * @returns
   */
  deleteCorpTag(tagId: string[], groupId: string[]): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/del_corp_tag', {
      tag_id: tagId,
      group_id: groupId,
    });
  }

  /**
   * 编辑客户企业标签
   * @see https://work.weixin.qq.com/api/doc/90000/90135/92118
   * @param data
   * @returns
   */
  markTags(data: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/mark_tag', data);
  }

  /**
   * 外部联系人unionid转换
   * @see https://work.weixin.qq.com/api/doc/90001/90143/93274
   * @param unionid 微信客户的unionid
   * @param openid 微信客户的openid
   * @returns
   */
  unionidToExternalUserid(unionid: string = null, openid: string = null): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/unionid_to_external_userid', {
      unionid,
      openid,
    });
  }

  /**
   * 代开发应用external_userid转换
   * @see https://work.weixin.qq.com/api/doc/90001/90143/95195
   * @param unionid 微信客户的unionid
   * @returns
   */
  toServiceExternalUserid(externalUserid: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/to_service_external_userid', {
      external_userid: externalUserid,
    });
  }

  /**
   * 转换external_userid
   * @see https://open.work.weixin.qq.com/api/doc/90001/90143/95327#%E8%BD%AC%E6%8D%A2external_userid
   * @param externalUserIds
   * @returns
   */
  getNewExternalUserid(externalUserIds: string[]): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/get_new_external_userid', {
      external_userid_list: externalUserIds,
    });
  }

  /**
   * 设置迁移完成
   * @see https://open.work.weixin.qq.com/api/doc/90001/90143/95327#%E8%AE%BE%E7%BD%AE%E8%BF%81%E7%A7%BB%E5%AE%8C%E6%88%90
   * @param corpid
   * @returns
   */
  finishExternalUseridMigration(corpid: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/finish_external_userid_migration', {
      corpid,
    });
  }

  /**
   * unionid查询external_userid
   * @see https://open.work.weixin.qq.com/api/doc/90001/90143/95327#4.2%20unionid%E6%9F%A5%E8%AF%A2external_userid
   * @param unionid
   * @param openid
   * @param corpid
   * @returns
   */
  unionidToexternalUserid3rd(unionid: string, openid: string, corpid: string = ''): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/unionid_to_external_userid_3rd', {
      unionid,
      openid,
      corpid,
    });
  }

  /**
   * 客户群opengid转换
   * @see https://work.weixin.qq.com/api/doc/90000/90135/94822
   * @param opengid
   * @returns
   */
  opengidToChatid(opengid: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/opengid_to_chatid', {
      opengid,
    });
  }

  /**
   * 上传附件资源
   * @see https://work.weixin.qq.com/api/doc/90000/90135/95098
   * @param path
   * @param mediaType
   * @param attachmentType
   * @returns
   */
  uploadAttachment(path: string | Stream.Readable, mediaType: string, attachmentType: string): Promise<any>
  {
    return this.httpUpload('cgi-bin/media/upload_attachment', {
      media: path
    }, {}, {
      media_type: mediaType,
      attachment_type: attachmentType,
    });
  }

}
