'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class SubscribeMessageClient extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this.message = {
            touser: '',
            template_id: '',
            page: '',
            data: '',
        };
        this.required = ['touser', 'template_id', 'data'];
    }
    /**
     * 发送订阅消息
     * @param data 消息内容
     */
    send(data) {
        let params = this.formatMessage(data);
        return this.httpPostJson('cgi-bin/message/subscribe/send', params);
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
    /**
     * 添加订阅消息到个人模板库
     * @param tid 模板id
     * @param kidList 开发者自行组合好的模板关键词列表
     * @param sceneDesc 服务场景描述
     */
    addTemplate(tid, kidList, sceneDesc = null) {
        sceneDesc = sceneDesc || '';
        return this.httpPost('wxaapi/newtmpl/addtemplate', {
            tid,
            kidList,
            sceneDesc,
        });
    }
    /**
     * 删除个人模板库中的模板
     * @param id 模板id
     */
    deleteTemplate(id) {
        return this.httpPost('wxaapi/newtmpl/deltemplate', {
            priTmplId: id,
        });
    }
    /**
     * 获取模板标题的关键词列表
     * @param tid 模板id
     */
    getTemplateKeywords(tid) {
        return this.httpGet('wxaapi/newtmpl/getpubtemplatekeywords', {
            tid,
        });
    }
    /**
     * 获取帐号所属类目下的公共模板标题
     * @param ids 类目 id
     * @param start 开始下标，从0开始
     * @param limit 分页记录数
     */
    getTemplateTitles(ids, start = 0, limit = 30) {
        let query = {
            ids: '',
            start,
            limit,
        };
        if (Utils_1.isArray(ids)) {
            query.ids = ids.join(',');
        }
        return this.httpGet('wxaapi/newtmpl/getpubtemplatetitles', query);
    }
    /**
     * 获取当前帐号下的个人模板列表
     */
    getTemplates() {
        return this.httpGet('wxaapi/newtmpl/gettemplate');
    }
    /**
     * 获取小程序账号的类目
     */
    getCategory() {
        return this.httpGet('wxaapi/newtmpl/getcategory');
    }
}
exports.default = SubscribeMessageClient;
