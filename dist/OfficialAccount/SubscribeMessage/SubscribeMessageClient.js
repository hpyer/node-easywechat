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
        this.API_SEND = 'cgi-bin/message/subscribe/bizsend';
        this.message = {
            touser: '',
            template_id: '',
            page: '',
            data: null,
            miniprogram: '',
        };
        this.required = [
            'touser',
            'template_id',
            'data',
        ];
    }
    /**
     * 添加模板
     * @param template_id_short 模板库中模板的编号，有“TM**”和“OPENTMTM**”等形式
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
     * 删除模板
     * @param id 模版id
     */
    deleteTemplate(id) {
        return this.httpPost('wxaapi/newtmpl/deltemplate', {
            priTmplId: id,
        });
    }
    /**
     * 获取公众号类目
     */
    getCategory() {
        return this.httpGet('wxaapi/newtmpl/getcategory');
    }
    /**
     * 获取模板中的关键词
     */
    getTemplateKeywords(tid) {
        return this.httpGet('wxaapi/newtmpl/getpubtemplatekeywords', {
            tid
        });
    }
    /**
     * 获取所属类目的公共模板
     */
    getTemplateTitles(ids, start = 0, limit = 30) {
        return this.httpGet('wxaapi/newtmpl/getpubtemplatetitles', {
            ids: ids.join(','),
            start,
            limit,
        });
    }
    /**
     * 获取私有模板列表
     */
    getTemplates() {
        return this.httpGet('wxaapi/newtmpl/gettemplate');
    }
    /**
     * 发送订阅消息
     * @param data 详情
     */
    send(data) {
        let params = this.formatMessage(data);
        return this.httpPostJson(this.API_SEND, params);
    }
    formatMessage(data) {
        let params = (0, Utils_1.merge)((0, Utils_1.merge)({}, this.message), data);
        for (let key in params) {
            if ((0, Utils_1.inArray)(key, this.required) && !params[key]) {
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
            if ((0, Utils_1.isArray)(data[key]) && data[key].length == 2) {
                value = {
                    value: data[key][0],
                };
            }
            else if ((0, Utils_1.isObject)(data[key]) && data[key]['value']) {
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
exports.default = SubscribeMessageClient;
