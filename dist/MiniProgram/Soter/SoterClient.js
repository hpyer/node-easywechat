'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class SoterClient extends BaseClient_1.default {
    verifySignature(openid, json, signature) {
        return this.httpPostJson('cgi-bin/soter/verify_signature', {
            openid: openid,
            json_string: json,
            json_signature: signature,
        });
    }
}
exports.default = SoterClient;
