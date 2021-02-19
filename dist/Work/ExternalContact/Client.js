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
    batchGetUsers(data) {
        return this.httpPostJson('cgi-bin/externalcontact/batch/get_by_user', data);
    }
    remark(data) {
        return this.httpPostJson('cgi-bin/externalcontact/remark', data);
    }
    getUnassigned(pageId = 0, pageSize = 1000) {
        return this.httpPostJson('cgi-bin/externalcontact/get_unassigned_list', {
            page_id: pageId,
            page_size: pageSize,
        });
    }
    transfer(externalUserId, handoverUserId, takeoverUserId) {
        return this.httpPostJson('cgi-bin/externalcontact/get_unassigned_list', {
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
    getCorpTags(tagIds) {
        return this.httpPostJson('cgi-bin/externalcontact/get_corp_tag_list', {
            tag_id: tagIds,
        });
    }
    addCorpTag(data) {
        return this.httpPostJson('cgi-bin/externalcontact/add_corp_tag', data);
    }
    updateCorpTag(id, name, order = 1) {
        return this.httpPostJson('cgi-bin/externalcontact/edit_corp_tag', {
            id,
            name,
            order,
        });
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
