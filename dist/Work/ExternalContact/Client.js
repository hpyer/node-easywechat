'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class ExternalContactClient extends BaseClient_1.default {
    getFollowUsers() {
        return this.httpGet('cgi-bin/externalcontact/get_follow_user_list');
    }
    list(userId) {
        return this.httpGet('cgi-bin/externalcontact/list', {
            userid: userId,
        });
    }
    get(externalUserId) {
        return this.httpGet('cgi-bin/externalcontact/get', {
            external_userid: externalUserId,
        });
    }
    batchGet(userId, cursor = '', limit = 1) {
        return this.httpPostJson('cgi-bin/externalcontact/batch/get_by_user', {
            userid: userId,
            cursor,
            limit,
        });
    }
    batchGetByUser(userId, cursor = '', limit = 1) {
        return this.httpPostJson('cgi-bin/externalcontact/batch/get_by_user', {
            userid: userId,
            cursor,
            limit,
        });
    }
    remark(data) {
        return this.httpPostJson('cgi-bin/externalcontact/remark', data);
    }
    getUnassigned(pageId = 0, pageSize = 1000, cursor = null) {
        return this.httpPostJson('cgi-bin/externalcontact/get_unassigned_list', {
            page_id: pageId,
            page_size: pageSize,
            cursor,
        });
    }
    transfer(externalUserId, handoverUserId, takeoverUserId, transferSuccessMessage) {
        return this.httpPostJson('cgi-bin/externalcontact/transfer', {
            external_userid: externalUserId,
            handover_userid: handoverUserId,
            takeover_userid: takeoverUserId,
            transfer_success_msg: transferSuccessMessage,
        });
    }
    transferCustomer(externalUserId, handoverUserId, takeoverUserId, transferSuccessMessage) {
        return this.httpPostJson('cgi-bin/externalcontact/transfer_customer', {
            external_userid: externalUserId,
            handover_userid: handoverUserId,
            takeover_userid: takeoverUserId,
            transfer_success_msg: transferSuccessMessage,
        });
    }
    resignedTransferCustomer(externalUserId, handoverUserId, takeoverUserId) {
        return this.httpPostJson('cgi-bin/externalcontact/resigned/transfer_customer', {
            external_userid: externalUserId,
            handover_userid: handoverUserId,
            takeover_userid: takeoverUserId,
        });
    }
    transferGroupChat(chatIds, newOwner) {
        return this.httpPostJson('cgi-bin/externalcontact/groupchat/transfer', {
            chat_id_list: chatIds,
            new_owner: newOwner,
        });
    }
    transferResult(handoverUserId, takeoverUserId, cursor = null) {
        return this.httpPostJson('cgi-bin/externalcontact/resigned/transfer_result', {
            handover_userid: handoverUserId,
            takeover_userid: takeoverUserId,
            cursor,
        });
    }
    getTransferResult(externalUserId, handoverUserId, takeoverUserId) {
        return this.httpPostJson('cgi-bin/externalcontact/get_transfer_result', {
            external_userid: externalUserId,
            handover_userid: handoverUserId,
            takeover_userid: takeoverUserId,
        });
    }
    getGroupChats(data) {
        return this.httpPostJson('cgi-bin/externalcontact/groupchat/list', data);
    }
    getGroupChat(chatId) {
        return this.httpPostJson('cgi-bin/externalcontact/groupchat/get', {
            chat_id: chatId,
        });
    }
    getCorpTags(tagIds, groupIds) {
        return this.httpPostJson('cgi-bin/externalcontact/get_corp_tag_list', {
            tag_id: tagIds,
            group_id: groupIds,
        });
    }
    addCorpTag(data) {
        return this.httpPostJson('cgi-bin/externalcontact/add_corp_tag', data);
    }
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
    deleteCorpTag(tagId, groupId) {
        return this.httpPostJson('cgi-bin/externalcontact/del_corp_tag', {
            tag_id: tagId,
            group_id: groupId,
        });
    }
    markTags(data) {
        return this.httpPostJson('cgi-bin/externalcontact/mark_tag', data);
    }
}
exports.default = ExternalContactClient;
