'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../../../Core/BaseClient"));
class DomainClient extends BaseClient_1.default {
    /**
     * 设置服务器域名
     * @param params 参数设置
     */
    modify(params) {
        return this.httpPostJson('wxa/modify_domain', params);
    }
    /**
     * 设置业务域名
     * @param domains 域名列表
     * @param action 操作类型
     */
    setWebviewDomain(domains, action = 'add') {
        return this.httpPostJson('wxa/setwebviewdomain', {
            action: action,
            webviewdomain: domains,
        });
    }
}
exports.default = DomainClient;
