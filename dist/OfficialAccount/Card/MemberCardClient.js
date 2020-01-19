'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./Client");
const Merge = require("merge");
class MemberCardClient extends Client_1.default {
    activate(info) {
        return this.httpPostJson('card/membercard/activate', info);
    }
    setActivationForm(cardId, settings) {
        let params = Merge({
            card_id: cardId,
        }, settings);
        return this.httpPostJson('card/membercard/activateuserform/set', params);
    }
    getUser(cardId, codes) {
        return this.httpPostJson('card/membercard/userinfo/get', {
            card_id: cardId,
            code: codes,
        });
    }
    updateUser(params) {
        return this.httpPostJson('card/membercard/updateuser', params);
    }
    getActivationForm(activateTicket) {
        return this.httpPostJson('card/membercard/activatetempinfo/get', {
            activate_ticket: activateTicket,
        });
    }
    getActivateUrl(params) {
        return this.httpPostJson('card/membercard/activate/geturl', params);
    }
}
exports.default = MemberCardClient;
