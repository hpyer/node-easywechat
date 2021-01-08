'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TemplateMessageClient_1 = __importDefault(require("../../OfficialAccount/TemplateMessage/TemplateMessageClient"));
const Utils_1 = require("../../Core/Utils");
class UniformMessageClient extends TemplateMessageClient_1.default {
    constructor() {
        super(...arguments);
        this.API_SEND = 'cgi-bin/message/wxopen/template/uniform_send';
        this.message = {
            touser: '',
        };
        this.weappMessage = {
            template_id: '',
            page: '',
            form_id: '',
            data: '',
            emphasis_keyword: '',
        };
        this.mpMessage = {
            appid: '',
            template_id: '',
            url: '',
            miniprogram: '',
            data: '',
        };
        this.required = ['touser', 'template_id', 'form_id', 'miniprogram', 'appid'];
    }
    formatMessage(data) {
        let params = Utils_1.merge(Utils_1.merge({}, this.message), data);
        if (!params['touser']) {
            throw new Error('Attribute "touser" can not be empty!');
        }
        if (params['weapp_template_msg']) {
            params['weapp_template_msg'] = this.formatWeappMessage(params['weapp_template_msg']);
        }
        if (params['mp_template_msg']) {
            params['mp_template_msg'] = this.formatMpMessage(params['mp_template_msg']);
        }
        return params;
    }
    formatWeappMessage(data) {
        let params = this.baseFormat(data, this.weappMessage);
        params['data'] = this.formatData(params['data'] || {});
        return params;
    }
    formatMpMessage(data) {
        let params = this.baseFormat(data, this.weappMessage);
        if (!params['miniprogram']['appid']) {
            params['miniprogram']['appid'] = this.app.config.app_id;
        }
        params['data'] = this.formatData(params['data'] || {});
        return params;
    }
    baseFormat(data = {}, defaultData = {}) {
        let params = Utils_1.merge(Utils_1.merge({}, defaultData), data);
        for (let key in params) {
            if (Utils_1.inArray(key, this.required) && !params[key] && !defaultData[key]) {
                throw new Error(`Attribute "${key}" can not be empty!`);
            }
            params[key] = params[key] || defaultData[key];
        }
        return params;
    }
}
exports.default = UniformMessageClient;
