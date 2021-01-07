'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class CodeClient extends BaseClient_1.default {
    /**
     * 导入卡券code
     * @param cardId 卡券id
     * @param codes 卡券code列表，最多100个
     */
    deposit(cardId, codes) {
        return this.httpPostJson('card/code/deposit', {
            card_id: cardId,
            code: codes,
        });
    }
    /**
     * 查询导入的卡券code
     * @param cardId 卡券id
     */
    getDepositedCount(cardId) {
        return this.httpPostJson('card/code/getdepositcount', {
            card_id: cardId,
        });
    }
    /**
     * 核查卡券code
     * @param cardId 卡券id
     * @param codes 卡券code列表
     */
    check(cardId, codes) {
        return this.httpPostJson('card/code/checkcode', {
            card_id: cardId,
            code: codes,
        });
    }
    /**
     * 查询卡券Code
     * @param code 卡券code
     * @param cardId 卡券id
     * @param checkConsume 是否校验code核销状态，true和false
     */
    get(code, cardId, checkConsume = true) {
        return this.httpPostJson('card/code/get', {
            code: code,
            check_consume: checkConsume,
            card_id: cardId,
        });
    }
    /**
     * 更改卡券Code
     * @param code 旧code
     * @param newCode 新code
     * @param cardId 卡券id
     */
    update(code, newCode, cardId) {
        return this.httpPostJson('card/code/update', {
            code: code,
            new_code: newCode,
            card_id: cardId,
        });
    }
    /**
     * 设置卡券失效
     * @param code 卡券code
     * @param cardId 卡券id
     */
    disable(code, cardId) {
        return this.httpPostJson('card/code/unavailable', {
            code: code,
            card_id: cardId,
        });
    }
    /**
     * 核销卡券Code
     * @param code 卡券code
     * @param cardId 卡券id，默认：null
     */
    consume(code, cardId = null) {
        let params = {
            code: code,
        };
        if (cardId) {
            params['card_id'] = cardId;
        }
        return this.httpPostJson('card/code/consume', params);
    }
    /**
     * 解码卡券code
     * @param encryptedCode 密文
     */
    decrypt(encryptedCode) {
        return this.httpPostJson('card/code/decrypt', {
            encrypt_code: encryptedCode,
        });
    }
}
exports.default = CodeClient;
