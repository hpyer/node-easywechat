'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = __importDefault(require("./Client"));
class GeneralCardClient extends Client_1.default {
    /**
     * 激活通用卡券
     * @param info 卡券信息
     */
    activate(info) {
        return this.httpPostJson('card/generalcard/activate', info);
    }
    /**
     * 禁用通用卡券
     * @param cardId 卡券id
     * @param code 卡券code
     */
    deactivate(cardId, code) {
        return this.httpPostJson('card/generalcard/unactivate', {
            card_id: cardId,
            code,
        });
    }
    /**
     * 更新用户信息
     * @param params 信息
     */
    updateUser(params) {
        return this.httpPostJson('card/generalcard/updateuser', params);
    }
}
exports.default = GeneralCardClient;
