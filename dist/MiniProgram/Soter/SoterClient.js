'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class SoterClient extends BaseClient_1.default {
    /**
     * 生物认证秘钥签名验证
     * @param openid 用户 openid
     * @param json 通过 wx.startSoterAuthentication 成功回调获得的 resultJSON 字段
     * @param signature 通过 wx.startSoterAuthentication 成功回调获得的 resultJSONSignature 字段
     */
    verifySignature(openid, json, signature) {
        return this.httpPostJson('cgi-bin/soter/verify_signature', {
            openid: openid,
            json_string: json,
            json_signature: signature,
        });
    }
}
exports.default = SoterClient;
