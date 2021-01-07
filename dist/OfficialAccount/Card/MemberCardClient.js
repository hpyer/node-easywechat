'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../../Core/Utils");
const Client_1 = __importDefault(require("./Client"));
class MemberCardClient extends Client_1.default {
    /**
     * 激活会员卡
     * @param params 信息
     */
    activate(info) {
        return this.httpPostJson('card/membercard/activate', info);
    }
    /**
     * 设置开卡字段
     * @param cardId 卡id
     * @param settings 会员卡激活时的选项
     */
    setActivationForm(cardId, settings) {
        let params = Utils_1.merge({
            card_id: cardId,
        }, settings);
        return this.httpPostJson('card/membercard/activateuserform/set', params);
    }
    /**
     * 拉取会员信息
     * @param cardId 卡id
     * @param codes 卡code
     */
    getUser(cardId, codes) {
        return this.httpPostJson('card/membercard/userinfo/get', {
            card_id: cardId,
            code: codes,
        });
    }
    /**
     * 更新会员信息
     * @param params 会员信息
     */
    updateUser(params) {
        return this.httpPostJson('card/membercard/updateuser', params);
    }
    /**
     * 获取开卡表单
     * @param activateTicket
     */
    getActivationForm(activateTicket) {
        return this.httpPostJson('card/membercard/activatetempinfo/get', {
            activate_ticket: activateTicket,
        });
    }
    /**
     * 获取激活链接
     * @param params
     */
    getActivateUrl(params) {
        return this.httpPostJson('card/membercard/activate/geturl', params);
    }
}
exports.default = MemberCardClient;
