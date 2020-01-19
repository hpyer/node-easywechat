'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./Client");
class GeneralCardClient extends Client_1.default {
    activate(info) {
        return this.httpPostJson('card/generalcard/activate', info);
    }
    deactivate(cardId, code) {
        return this.httpPostJson('card/generalcard/unactivate', {
            card_id: cardId,
            code,
        });
    }
    updateUser(params) {
        return this.httpPostJson('card/generalcard/updateuser', params);
    }
}
exports.default = GeneralCardClient;
