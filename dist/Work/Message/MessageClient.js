'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Messenger_1 = __importDefault(require("./Messenger"));
class MessageClient extends BaseClient_1.default {
    message(message) {
        return (new Messenger_1.default(this)).setMessage(message);
    }
    send(data) {
        return this.httpPostJson('cgi-bin/message/send', data);
    }
}
exports.default = MessageClient;
