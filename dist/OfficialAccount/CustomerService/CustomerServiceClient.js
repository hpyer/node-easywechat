'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
const Messenger_1 = __importDefault(require("./Messenger"));
class CustomerServiceClient extends BaseClient_1.default {
    list() {
        return this.httpGet('cgi-bin/customservice/getkflist');
    }
    online() {
        return this.httpGet('cgi-bin/customservice/getonlinekflist');
    }
    create(account, nickname) {
        let params = {
            kf_account: account,
            nickname: nickname,
        };
        return this.httpPostJson('customservice/kfaccount/add', params);
    }
    update(account, nickname) {
        let params = {
            kf_account: account,
            nickname: nickname,
        };
        return this.httpPostJson('customservice/kfaccount/update', params);
    }
    delete(account) {
        let params = {
            kf_account: account,
        };
        return this.httpPostJson('customservice/kfaccount/del', {}, params);
    }
    invite(account, wechatId) {
        let params = {
            kf_account: account,
            invite_wx: wechatId,
        };
        return this.httpPostJson('customservice/kfaccount/inviteworker', params);
    }
    setAvatar(account, path) {
        return this.httpUpload('customservice/kfaccount/uploadheadimg', {
            media: path,
        }, {}, {
            kf_account: account,
        });
    }
    message(message) {
        let messager = new Messenger_1.default(this);
        return messager.message(message);
    }
    send(message) {
        return this.httpPostJson('cgi-bin/message/custom/send', message);
    }
    showTypingStatusToUser(openid) {
        return this.httpPostJson('cgi-bin/message/custom/typing', {
            touser: openid,
            command: 'Typing',
        });
    }
    hideTypingStatusToUser(openid) {
        return this.httpPostJson('cgi-bin/message/custom/typing', {
            touser: openid,
            command: 'CancelTyping',
        });
    }
    messages(startTime, endTime, msgId = 1, number = 10000) {
        return this.httpPostJson('customservice/msgrecord/getmsglist', {
            starttime: Utils_1.getTimestamp(startTime),
            endtime: Utils_1.getTimestamp(endTime),
            msgid: msgId,
            number: number,
        });
    }
}
exports.default = CustomerServiceClient;
