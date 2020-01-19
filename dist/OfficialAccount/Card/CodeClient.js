'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class CodeClient extends BaseClient_1.default {
    deposit(cardId, codes) {
        return this.httpPostJson('card/code/deposit', {
            card_id: cardId,
            code: codes,
        });
    }
    getDepositedCount(cardId) {
        return this.httpPostJson('card/code/getdepositcount', {
            card_id: cardId,
        });
    }
    check(cardId, codes) {
        return this.httpPostJson('card/code/checkcode', {
            card_id: cardId,
            code: codes,
        });
    }
    get(code, cardId, checkConsume = true) {
        return this.httpPostJson('card/code/get', {
            code: code,
            check_consume: checkConsume,
            card_id: cardId,
        });
    }
    update(code, newCode, cardId) {
        return this.httpPostJson('card/code/update', {
            code: code,
            new_code: newCode,
            card_id: cardId,
        });
    }
    disable(code, cardId) {
        return this.httpPostJson('card/code/unavailable', {
            code: code,
            card_id: cardId,
        });
    }
    consume(code, cardId = null) {
        let params = {
            code: code,
        };
        if (cardId) {
            params['card_id'] = cardId;
        }
        return this.httpPostJson('card/code/consume', params);
    }
    decrypt(encryptedCode) {
        return this.httpPostJson('card/code/decrypt', {
            encrypt_code: encryptedCode,
        });
    }
}
exports.default = CodeClient;
