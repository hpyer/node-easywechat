'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
const Merge = require("merge");
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
    send(data) {
        let params = this.formatMessage(data);
        return this.httpPostJson('cgi-bin/message/subscribe/send', params);
    }
    formatMessage(data) {
        let params = Merge({}, this.message, data);
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
    addTemplate(tid, kidList, sceneDesc = null) {
        sceneDesc = sceneDesc || '';
        return this.httpPost('wxaapi/newtmpl/addtemplate', {
            tid,
            kidList,
            sceneDesc,
        });
    }
    deleteTemplate(id) {
        return this.httpPost('wxaapi/newtmpl/deltemplate', {
            priTmplId: id,
        });
    }
    getTemplateKeywords(tid) {
        return this.httpGet('wxaapi/newtmpl/getpubtemplatekeywords', {
            tid,
        });
    }
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
    getTemplates() {
        return this.httpGet('wxaapi/newtmpl/gettemplate');
    }
    getCategory() {
        return this.httpGet('wxaapi/newtmpl/getcategory');
    }
}
exports.default = SubscribeMessageClient;
