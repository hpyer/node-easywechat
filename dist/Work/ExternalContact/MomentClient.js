'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class MomentClient extends BaseClient_1.default {
    list(params) {
        return this.httpPostJson('cgi-bin/externalcontact/get_moment_list', params);
    }
    getTasks(momentId, cursor, limit) {
        let params = {
            moment_id: momentId,
            cursor,
            limit,
        };
        return this.httpPostJson('cgi-bin/externalcontact/get_moment_task', params);
    }
    getCustomers(momentId, userId, cursor, limit) {
        let params = {
            moment_id: momentId,
            userid: userId,
            cursor,
            limit,
        };
        return this.httpPostJson('cgi-bin/externalcontact/get_moment_customer_list', params);
    }
    getSendResult(momentId, userId, cursor, limit) {
        let params = {
            moment_id: momentId,
            userid: userId,
            cursor,
            limit,
        };
        return this.httpPostJson('cgi-bin/externalcontact/get_moment_send_result', params);
    }
    getComments(momentId, userId) {
        let params = {
            moment_id: momentId,
            userid: userId,
        };
        return this.httpPostJson('cgi-bin/externalcontact/get_moment_comments', params);
    }
}
exports.default = MomentClient;
