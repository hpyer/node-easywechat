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
        this.required = ['content', 'title', 'url', 'pic_media_id', 'appid', 'page'];
        this.textMessage = {
            content: '',
        };
        this.imageMessage = {};
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
    /**
     * 添加企业群发消息模板
     * @param msg
     * @returns
     */
    submit(msg) {
        let params = this.formatMessage(msg);
        return this.httpPostJson('cgi-bin/externalcontact/add_msg_template', params);
    }
    /**
     * 获取企业群发消息发送结果
     * @param msgId
     * @returns
     */
    get(msgId) {
        return this.httpPostJson('cgi-bin/externalcontact/get_group_msg_result', {
            msgid: msgId,
        });
    }
    /**
     * 获取群发记录列表
     * @param chatType 群发任务的类型，默认为single，表示发送给客户，group表示发送给客户群
     * @param startTime 群发任务记录开始时间
     * @param endTime 群发任务记录结束时间
     * @param creator 群发任务创建人企业账号id
     * @param filterType 创建人类型。0：企业发表 1：个人发表 2：所有，包括个人创建以及企业创建，默认情况下为所有类型
     * @param limit 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取默认值
     * @param cursor 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
     * @returns
     */
    getGroupmsgListV2(chatType, startTime, endTime, creator = null, filterType = null, limit = null, cursor = null) {
        let params = {
            chat_type: chatType,
            start_time: startTime,
            end_time: endTime,
            creator: creator,
            filter_type: filterType,
            limit: limit,
            cursor: cursor,
        };
        Object.keys(params).map(key => {
            if (params[key] === null || params[key] === undefined) {
                delete params[key];
            }
        });
        return this.httpPostJson('cgi-bin/externalcontact/get_groupmsg_list_v2', params);
    }
    /**
     * 获取群发成员发送任务列表
     * @param msgId 群发消息的id，通过获取群发记录列表接口返回
     * @param limit 返回的最大记录数，整型，最大值1000，默认值500，超过最大值时取默认值
     * @param cursor 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
     * @returns
     */
    getGroupmsgTask(msgId, limit = null, cursor = null) {
        let params = {
            msgid: msgId,
            limit: limit,
            cursor: cursor,
        };
        Object.keys(params).map(key => {
            if (params[key] === null || params[key] === undefined) {
                delete params[key];
            }
        });
        return this.httpPostJson('cgi-bin/externalcontact/get_groupmsg_task', params);
    }
    /**
     * 获取企业群发成员执行结果
     * @param msgId 群发消息的id，通过获取群发记录列表接口返回
     * @param userId 发送成员userid，通过获取群发成员发送任务列表接口返回
     * @param limit 返回的最大记录数，整型，最大值1000，默认值500，超过最大值时取默认值
     * @param cursor 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
     * @returns
     */
    getGroupmsgSendResult(msgId, userId, limit = null, cursor = null) {
        let params = {
            msgid: msgId,
            userid: userId,
            limit: limit,
            cursor: cursor,
        };
        Object.keys(params).map(key => {
            if (params[key] === null || params[key] === undefined) {
                delete params[key];
            }
        });
        return this.httpPostJson('cgi-bin/externalcontact/get_groupmsg_send_result', params);
    }
    /**
     * 发送新客户欢迎语
     * @param welcomeCode
     * @param msg
     * @returns
     */
    sendWelcome(welcomeCode, msg) {
        let formattedMsg = this.formatMessage(msg);
        let params = (0, Utils_1.merge)((0, Utils_1.merge)({}, formattedMsg), {
            welcome_code: welcomeCode,
        });
        return this.httpPostJson('cgi-bin/externalcontact/send_welcome_msg', params);
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
exports.default = MessageClient;
