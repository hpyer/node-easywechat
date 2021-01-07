'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class ComponentClient extends BaseClient_1.default {
    /**
     * 创建小程序
     * @param params 小程序信息
     */
    registerMiniProgram(params) {
        return this.httpPostJson('cgi-bin/component/fastregisterweapp', params, {
            action: 'create',
        });
    }
    /**
     * 查询创建任务状态
     * @param companyName 企业名
     * @param legalPersonaWechat 法人微信
     * @param legalPersonaName 法人姓名
     */
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
exports.default = ComponentClient;
