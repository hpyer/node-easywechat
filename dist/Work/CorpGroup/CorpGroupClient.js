'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class CorpGroupClient extends BaseClient_1.default {
    getAppShareInfo(agentId) {
        return this.httpPostJson('cgi-bin/corpgroup/corp/list_app_share_info', {
            agentid: agentId,
        });
    }
    getToken(corpId, agentId) {
        return this.httpPostJson('cgi-bin/corpgroup/corp/gettoken', {
            corpid: corpId,
            agentid: agentId,
        });
    }
    getMiniProgramTransferSession(userId, sessionKey) {
        return this.httpPostJson('cgi-bin/miniprogram/transfer_session', {
            userid: userId,
            session_key: sessionKey,
        });
    }
}
exports.default = CorpGroupClient;
