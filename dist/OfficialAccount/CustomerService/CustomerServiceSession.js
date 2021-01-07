'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class CustomerServiceSession extends BaseClient_1.default {
    list(account) {
        return this.httpGet('customservice/kfsession/getsessionlist', {
            kf_account: account,
        });
    }
    waiting() {
        return this.httpGet('customservice/kfsession/getwaitcase');
    }
    create(account, openid) {
        let params = {
            kf_account: account,
            openid: openid,
        };
        return this.httpPostJson('customservice/kfsession/create', params);
    }
    close(account, openid) {
        let params = {
            kf_account: account,
            openid: openid,
        };
        return this.httpPostJson('customservice/kfsession/close', params);
    }
    get(openid) {
        return this.httpGet('customservice/kfsession/getsession', {
            openid: openid,
        });
    }
}
exports.default = CustomerServiceSession;
