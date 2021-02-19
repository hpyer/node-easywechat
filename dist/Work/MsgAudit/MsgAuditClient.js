'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class MsgAuditClient extends BaseClient_1.default {
    getPermitUsers(type = null) {
        return this.httpPostJson('cgi-bin/msgaudit/get_permit_user_list', type ? {
            type
        } : {});
    }
    getSingleAgreeStatus(info) {
        let params = {
            info,
        };
        return this.httpPostJson('cgi-bin/msgaudit/check_single_agree', params);
    }
    getRoomAgreeStatus(roomId) {
        let params = {
            roomid: roomId,
        };
        return this.httpPostJson('cgi-bin/msgaudit/check_room_agree', params);
    }
    getRoom(roomId) {
        let params = {
            roomid: roomId,
        };
        return this.httpPostJson('cgi-bin/msgaudit/groupchat/get', params);
    }
}
exports.default = MsgAuditClient;
