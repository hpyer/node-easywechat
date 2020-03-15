'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class Client extends BaseClient_1.default {
    registerMiniProgram(params) {
        return this.httpPostJson('cgi-bin/component/fastregisterweapp', params, {
            action: 'create',
        });
    }
    getRegistrationStatus(companyName, legalPersonaWechat, legalPersonaName) {
        return this.httpPostJson('cgi-bin/component/fastregisterweapp', {
            name: companyName,
            legal_persona_wechat: legalPersonaWechat,
            legal_persona_name: legalPersonaName,
        }, {
            action: 'search',
        });
    }
}
exports.default = Client;
