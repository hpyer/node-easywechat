'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class ContactWayClient extends BaseClient_1.default {
    /**
     * 配置客户联系「联系我」方式
     * @see https://developer.work.weixin.qq.com/document/path/92572#%E9%85%8D%E7%BD%AE%E5%AE%A2%E6%88%B7%E8%81%94%E7%B3%BB%E3%80%8C%E8%81%94%E7%B3%BB%E6%88%91%E3%80%8D%E6%96%B9%E5%BC%8F
     * @param type
     * @param scene
     * @param config
     * @returns
     */
    create(type, scene, config) {
        let params = (0, Utils_1.merge)({
            type,
            scene,
        }, config);
        return this.httpPostJson('cgi-bin/externalcontact/add_contact_way', params);
    }
    /**
     * 获取企业已配置的「联系我」方式
     * @see https://developer.work.weixin.qq.com/document/path/92572#%E8%8E%B7%E5%8F%96%E4%BC%81%E4%B8%9A%E5%B7%B2%E9%85%8D%E7%BD%AE%E7%9A%84%E3%80%8C%E8%81%94%E7%B3%BB%E6%88%91%E3%80%8D%E6%96%B9%E5%BC%8F
     * @param configId
     * @returns
     */
    get(configId) {
        return this.httpGet('cgi-bin/externalcontact/get_contact_way', {
            config_id: configId,
        });
    }
    /**
     * 更新企业已配置的「联系我」方式
     * @see https://developer.work.weixin.qq.com/document/path/92572#%E6%9B%B4%E6%96%B0%E4%BC%81%E4%B8%9A%E5%B7%B2%E9%85%8D%E7%BD%AE%E7%9A%84%E3%80%8C%E8%81%94%E7%B3%BB%E6%88%91%E3%80%8D%E6%96%B9%E5%BC%8F
     * @param configId
     * @param config
     * @returns
     */
    update(configId, config) {
        let params = (0, Utils_1.merge)({
            config_id: configId,
        }, config);
        return this.httpPostJson('cgi-bin/externalcontact/update_contact_way', params);
    }
    /**
     * 删除企业已配置的「联系我」方式
     * @see https://developer.work.weixin.qq.com/document/path/92572#%E5%88%A0%E9%99%A4%E4%BC%81%E4%B8%9A%E5%B7%B2%E9%85%8D%E7%BD%AE%E7%9A%84%E3%80%8C%E8%81%94%E7%B3%BB%E6%88%91%E3%80%8D%E6%96%B9%E5%BC%8F
     * @param configId
     * @returns
     */
    delete(configId) {
        return this.httpGet('cgi-bin/externalcontact/del_contact_way', {
            config_id: configId,
        });
    }
    /**
     * 获取企业已配置的「联系我」列表
     * @see https://developer.work.weixin.qq.com/document/path/92572#%E8%8E%B7%E5%8F%96%E4%BC%81%E4%B8%9A%E5%B7%B2%E9%85%8D%E7%BD%AE%E7%9A%84%E3%80%8C%E8%81%94%E7%B3%BB%E6%88%91%E3%80%8D%E5%88%97%E8%A1%A8
     * @param cursor
     * @param limit
     * @param startTime
     * @param endTime
     * @returns
     */
    list(cursor = '', limit = 100, startTime = null, endTime = null) {
        let params = {
            cursor,
            limit,
        };
        if (startTime) {
            params['start_time'] = startTime;
        }
        if (endTime) {
            params['end_time'] = endTime;
        }
        return this.httpPostJson('cgi-bin/externalcontact/list_contact_way', params);
    }
}
exports.default = ContactWayClient;
