'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class MessageClient extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this.required = ['content', 'media_id', 'title', 'url', 'pic_media_id', 'appid', 'page'];
        this.textMessage = {
            content: '',
        };
        this.imageMessage = {
            media_id: '',
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
    submit(msg) {
        let params = this.formatMessage(msg);
        return this.httpPostJson('cgi-bin/externalcontact/add_msg_template', params);
    }
    get(msgId) {
        return this.httpPostJson('cgi-bin/externalcontact/get_group_msg_result', {
            msgid: msgId,
        });
    }
    sendWelcome(welcomeCode, msg) {
        let formattedMsg = this.formatMessage(msg);
        let params = Utils_1.merge(Utils_1.merge({}, formattedMsg), {
            welcome_code: welcomeCode,
        });
        return this.httpPostJson('cgi-bin/externalcontact/send_welcome_msg', params);
    }
    formatMessage(data) {
        let params = Utils_1.merge({}, data);
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
        let params = Utils_1.merge(Utils_1.merge({}, defaults), data);
        for (let key in params) {
            if (Utils_1.inArray(key, this.required) && typeof params[key] == undefined && typeof defaults[key] == undefined) {
                throw new Error(`Attribute "${key}" can not be empty!`);
            }
            params[key] = params[key] || defaults[key];
        }
        return params;
    }
}
exports.default = MessageClient;
