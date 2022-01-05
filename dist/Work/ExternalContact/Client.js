'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class ExternalContactClient extends BaseClient_1.default {
    /**
     * 获取配置了客户联系功能的成员列表
     * @see https://work.weixin.qq.com/api/doc#90000/90135/91554
     * @returns
     */
    getFollowUsers() {
        return this.httpGet('cgi-bin/externalcontact/get_follow_user_list');
    }
    /**
     * 获取外部联系人列表
     * @see https://work.weixin.qq.com/api/doc#90000/90135/91555
     * @param userId
     * @returns
     */
    list(userId) {
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
    get(externalUserId) {
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
    batchGet(userIdList, cursor = '', limit = 1) {
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
    batchGetByUser(userIdList, cursor = '', limit = 1) {
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
    remark(data) {
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
    getUnassigned(pageId = 0, pageSize = 1000, cursor = null) {
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
    transfer(externalUserId, handoverUserId, takeoverUserId, transferSuccessMessage) {
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
    transferCustomer(externalUserId, handoverUserId, takeoverUserId, transferSuccessMessage) {
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
    resignedTransferCustomer(externalUserId, handoverUserId, takeoverUserId) {
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
    transferGroupChat(chatIds, newOwner) {
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
    transferResult(handoverUserId, takeoverUserId, cursor = null) {
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
    getTransferResult(externalUserId, handoverUserId, takeoverUserId) {
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
    getGroupChats(data) {
        return this.httpPostJson('cgi-bin/externalcontact/groupchat/list', data);
    }
    /**
     * 获取客户群详情
     * @see https://work.weixin.qq.com/api/doc/90000/90135/92122
     * @param chatId
     * @param needName
     * @returns
     */
    getGroupChat(chatId, needName = 0) {
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
    getCorpTags(tagIds, groupIds) {
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
    addCorpTag(data) {
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
    updateCorpTag(id, name = null, order = null) {
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
    deleteCorpTag(tagId, groupId) {
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
    markTags(data) {
        return this.httpPostJson('cgi-bin/externalcontact/mark_tag', data);
    }
}
exports.default = ExternalContactClient;
