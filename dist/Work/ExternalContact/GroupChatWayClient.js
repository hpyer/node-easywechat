'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class GroupChatWayClient extends BaseClient_1.default {
    /**
     * 配置客户群进群方式
     * @see https://developer.work.weixin.qq.com/document/path/92229#%E9%85%8D%E7%BD%AE%E5%AE%A2%E6%88%B7%E7%BE%A4%E8%BF%9B%E7%BE%A4%E6%96%B9%E5%BC%8F
     * @param params
     * @returns
     */
    create(params) {
        return this.httpPostJson('cgi-bin/externalcontact/groupchat/add_join_way', params);
    }
    /**
     * 获取客户群进群方式配置
     * @see https://developer.work.weixin.qq.com/document/path/92229#%E8%8E%B7%E5%8F%96%E5%AE%A2%E6%88%B7%E7%BE%A4%E8%BF%9B%E7%BE%A4%E6%96%B9%E5%BC%8F%E9%85%8D%E7%BD%AE
     * @param configId
     * @returns
     */
    get(configId) {
        return this.httpGet('cgi-bin/externalcontact/groupchat/get_join_way', {
            config_id: configId,
        });
    }
    /**
     * 更新客户群进群方式配置
     * @see https://developer.work.weixin.qq.com/document/path/92229#%E6%9B%B4%E6%96%B0%E5%AE%A2%E6%88%B7%E7%BE%A4%E8%BF%9B%E7%BE%A4%E6%96%B9%E5%BC%8F%E9%85%8D%E7%BD%AE
     * @param configId
     * @param config
     * @returns
     */
    update(configId, config) {
        let params = (0, Utils_1.merge)({
            config_id: configId,
        }, config);
        return this.httpPostJson('cgi-bin/externalcontact/groupchat/update_join_way', params);
    }
    /**
     * 删除客户群进群方式配置
     * @see https://developer.work.weixin.qq.com/document/path/92229#%E5%88%A0%E9%99%A4%E5%AE%A2%E6%88%B7%E7%BE%A4%E8%BF%9B%E7%BE%A4%E6%96%B9%E5%BC%8F%E9%85%8D%E7%BD%AE
     * @param configId
     * @returns
     */
    delete(configId) {
        return this.httpGet('cgi-bin/externalcontact/groupchat/del_join_way', {
            config_id: configId,
        });
    }
}
exports.default = GroupChatWayClient;
