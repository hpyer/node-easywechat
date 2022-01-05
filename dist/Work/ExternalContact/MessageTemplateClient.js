'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class MessageTemplateClient extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this.required = ['title', 'url', 'pic_media_id', 'appid', 'page'];
        this.textMessage = {
            content: '',
        };
        this.imageMessage = {
            media_id: '',
            pic_url: '',
        };
        this.linkMessage = {
            title: '',
            picurl: '',
            desc: '',
            url: '',
        };
        this.miniprogramMessage = {
            title: '',
            pic_media_id: '',
            appid: '',
            page: '',
        };
    }
    create(msgTemplate) {
        let params = this.formatMessage(msgTemplate);
        return this.httpPostJson('cgi-bin/externalcontact/group_welcome_template/add', params);
    }
    update(templateId, msgTemplate) {
        let params = this.formatMessage(msgTemplate);
        params['template_id'] = templateId;
        return this.httpPostJson('cgi-bin/externalcontact/group_welcome_template/edit', params);
    }
    get(templateId) {
        return this.httpPostJson('cgi-bin/externalcontact/group_welcome_template/get', {
            template_id: templateId,
        });
    }
    delete(templateId) {
        return this.httpPostJson('cgi-bin/externalcontact/group_welcome_template/del', {
            template_id: templateId,
        });
    }
    formatMessage(data) {
        let params = (0, Utils_1.merge)({}, data);
        if (params['text']) {
            params['text'] = this.formatFields(params['text'], this.textMessage);
        }
        if (params['image']) {
            params['image'] = this.formatFields(params['image'], this.imageMessage);
        }
        if (params['link']) {
            params['link'] = this.formatFields(params['link'], this.linkMessage);
        }
        if (params['miniprogram']) {
            params['miniprogram'] = this.formatFields(params['miniprogram'], this.miniprogramMessage);
        }
        return params;
    }
    formatFields(data, defaults) {
        let params = (0, Utils_1.merge)((0, Utils_1.merge)({}, defaults), data);
        for (let key in params) {
            if ((0, Utils_1.inArray)(key, this.required) && typeof params[key] == undefined && typeof defaults[key] == undefined) {
                throw new Error(`Attribute "${key}" can not be empty!`);
            }
            params[key] = params[key] || defaults[key];
        }
        return params;
    }
}
exports.default = MessageTemplateClient;
