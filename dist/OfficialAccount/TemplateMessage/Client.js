'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Merge = require("merge");
const BaseClient_1 = require("../../Core/BaseClient");
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
    setIndustry(industry_id1, industry_id2) {
        return this.httpPostJson('cgi-bin/template/api_set_industry', {
            industry_id1,
            industry_id2,
        });
    }
    getIndustry() {
        return this.httpGet('cgi-bin/template/get_industry');
    }
    addTemplate(template_id_short) {
        return this.httpPostJson('cgi-bin/template/api_add_template', {
            template_id_short,
        });
    }
    getPrivateTemplates() {
        return this.httpGet('cgi-bin/template/get_all_private_template');
    }
    deletePrivateTemplate(template_id) {
        return this.httpPostJson('cgi-bin/template/del_private_template', {
            template_id,
        });
    }
    send(data) {
        let params = this.formatMessage(data);
        this.restoreMessage();
        return this.httpPostJson(this.API_SEND, params);
    }
    sendSubscription(data) {
        let params = this.formatMessage(data);
        this.restoreMessage();
        return this.httpPostJson('cgi-bin/message/template/subscribe', params);
    }
    formatMessage(data) {
        let params = Merge({}, this.message, data);
        for (let key in params) {
            if (Utils_1.inArray(key, this.required) && !params[key] && !this.message[key]) {
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
    restoreMessage() {
        for (let key in this.message) {
            if (Utils_1.isObject(this.message[key])) {
                this.message[key] = {};
            }
            if (Utils_1.isArray(this.message[key])) {
                this.message[key] = [];
            }
            else {
                this.message[key] = '';
            }
        }
    }
}
exports.default = Client;
