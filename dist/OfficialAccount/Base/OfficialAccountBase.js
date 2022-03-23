'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class OfficialAccountBase extends BaseClient_1.default {
    /**
     * 查询openAPI调用次数
     * @param cgiPath api的请求地址，例如"/cgi-bin/message/custom/send";不要前缀“https://api.weixin.qq.com” ，也不要漏了"/",否则都会76003的报错
     */
    getQuota(cgiPath) {
        return this.httpPostJson('cgi-bin/openapi/quota/get', {
            cgi_path: cgiPath,
        });
    }
    /**
     * 清理接口调用次数
     * 此接口官方有每月调用限制，不可随意调用
     */
    clearQuota() {
        return this.httpPostJson('cgi-bin/clear_quota', {
            appid: this.app.config.app_id,
        });
    }
    /**
     * 获取微信服务器 IP (或IP段)
     */
    getValidIps() {
        return this.httpGet('cgi-bin/getcallbackip');
    }
    checkCallbackUrl(action = 'all', operator = 'DEFAULT') {
        if (!(0, Utils_1.inArray)(action, ['dns', 'ping', 'all'], true)) {
            throw new Error('The action must be dns, ping, all.');
        }
        operator = operator.toUpperCase();
        if (!(0, Utils_1.inArray)(operator, ['CHINANET', 'UNICOM', 'CAP', 'DEFAULT'], true)) {
            throw new Error('The operator must be CHINANET, UNICOM, CAP, DEFAULT.');
        }
        return this.httpPostJson('cgi-bin/callback/check', {
            action,
            check_operator: operator,
        });
    }
}
exports.default = OfficialAccountBase;
