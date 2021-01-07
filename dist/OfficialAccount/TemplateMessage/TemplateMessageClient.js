'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class Client extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this.API_SEND = 'cgi-bin/message/template/send';
        this.message = {
            touser: '',
            template_id: '',
            url: '',
            data: {},
            miniprogram: '',
        };
        this.required = [
            'touser',
            'template_id',
        ];
    }
    /**
     * 修改账号所属行业
     * @param industry_id1 主行业id
     * @param industry_id2 副行业id
     */
    setIndustry(industry_id1, industry_id2) {
        return this.httpPostJson('cgi-bin/template/api_set_industry', {
            industry_id1,
            industry_id2,
        });
    }
    /**
     * 获取支持的行业列表
     */
    getIndustry() {
        return this.httpGet('cgi-bin/template/get_industry');
    }
    /**
     * 添加模板
     * @param template_id_short 模板库中模板的编号，有“TM**”和“OPENTMTM**”等形式
     */
    addTemplate(template_id_short) {
        return this.httpPostJson('cgi-bin/template/api_add_template', {
            template_id_short,
        });
    }
    /**
     * 获取所有模板列表
     */
    getPrivateTemplates() {
        return this.httpGet('cgi-bin/template/get_all_private_template');
    }
    /**
     * 删除模板
     * @param template_id 模版id
     */
    deletePrivateTemplate(template_id) {
        return this.httpPostJson('cgi-bin/template/del_private_template', {
            template_id,
        });
    }
    /**
     * 发送模板消息
     * @param data 模版详情
     */
    send(data) {
        let params = this.formatMessage(data);
        return this.httpPostJson(this.API_SEND, params);
    }
    /**
     * 发送一次性订阅消息
     * @param data 消息详情
     */
    sendSubscription(data) {
        let params = this.formatMessage(data);
        return this.httpPostJson('cgi-bin/message/template/subscribe', params);
    }
    formatMessage(data) {
        let params = Utils_1.merge(Utils_1.merge({}, this.message), data);
        for (let key in params) {
            if (Utils_1.inArray(key, this.required) && !params[key]) {
                throw new Error(`Attribute "${key}" can not be empty!`);
            }
        }
        params['data'] = this.formatData(params['data'] || {});
        return params;
    }
    formatData(data) {
        let formatted = {}, value;
        for (let key in data) {
            value = {};
            if (Utils_1.isArray(data[key]) && data[key].length == 2) {
                value = {
                    value: data[key][0],
                    color: data[key][1],
                };
            }
            else if (Utils_1.isObject(data[key]) && data[key]['value']) {
                value = data[key];
            }
            else {
                value = {
                    value: data[key] + ''
                };
            }
            formatted[key] = value;
        }
        return formatted;
    }
}
exports.default = Client;
