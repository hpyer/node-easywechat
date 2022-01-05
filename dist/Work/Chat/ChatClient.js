'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class ChatClient extends BaseClient_1.default {
    get(chatId) {
        return this.httpGet('cgi-bin/appchat/get', {
            calendar: chatId,
        });
    }
    create(data) {
        return this.httpPostJson('cgi-bin/appchat/create', data);
    }
    update(chatId, data) {
        let params = (0, Utils_1.merge)({
            chatid: chatId,
        }, data);
        return this.httpPostJson('cgi-bin/appchat/update', params);
    }
    send(message) {
        return this.httpPostJson('cgi-bin/appchat/send', message);
    }
}
exports.default = ChatClient;
