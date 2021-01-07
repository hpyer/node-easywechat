'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Messages_1 = require("../../Core/Messages");
const MessageBuilder_1 = __importDefault(require("./MessageBuilder"));
const Utils_1 = require("../../Core/Utils");
class BroadcastingClient extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this.PREVIEW_BY_OPENID = 'touser';
        this.PREVIEW_BY_NAME = 'towxname';
    }
    send(message = {}) {
        if (!message['filter'] && !message['touser']) {
            throw new Error('The message reception object is not specified.');
        }
        let api = message && message['touser'] ? 'cgi-bin/message/mass/send' : 'cgi-bin/message/mass/sendall';
        return this.httpPostJson(api, message);
    }
    preview(message = {}) {
        return this.httpPostJson('cgi-bin/message/mass/preview', message);
    }
    /**
     * 删除群发消息
     * @param msgId 消息id
     */
    delete(msgId) {
        return this.httpPostJson('cgi-bin/message/mass/delete', {
            msg_id: msgId,
        });
    }
    /**
     * 查询群发消息发送状态
     * @param msgId 消息id
     */
    status(msgId) {
        return this.httpPostJson('cgi-bin/message/mass/get', {
            msg_id: msgId,
        });
    }
    /**
     * 发送消息
     * @param {Message} message 消息实例
     * @param {Number|Array<string>} reception 数字表示标签id，或openid列表，或null表示全部，默认：null
     * @param {object} attributes 附加参数
     */
    sendMessage(message, reception = null, attributes = {}) {
        let msg = (new MessageBuilder_1.default).message(message).with(attributes).toAll();
        if (Utils_1.isNumber(reception) && reception > 0) {
            msg.toTag(reception);
        }
        else if (Utils_1.isArray(reception)) {
            msg.toUsers(reception);
        }
        return this.send(msg.build());
    }
    /**
     * 发送文本消息
     * @param {string} message 文本
     * @param {Number|Array<string>} reception 数字表示标签id，或openid列表，或null表示全部，默认：null
     * @param {object} attributes 附加参数
     */
    sendText(message, reception = null, attributes = {}) {
        return this.sendMessage(new Messages_1.Text(message), reception, attributes);
    }
    /**
     * 发送图文消息
     * @param {string} mediaId 素材id
     * @param {Number|Array<string>} reception 数字表示标签id，或openid列表，或null表示全部，默认：null
     * @param {object} attributes 附加参数
     */
    sendNews(mediaId, reception = null, attributes = {}) {
        return this.sendMessage(new Messages_1.Media(mediaId, 'mpnews'), reception, attributes);
    }
    /**
     * 发送语音消息
     * @param {string} mediaId 素材id
     * @param {Number|Array<string>} reception 数字表示标签id，或openid列表，或null表示全部，默认：null
     * @param {object} attributes 附加参数
     */
    sendVoice(mediaId, reception = null, attributes = {}) {
        return this.sendMessage(new Messages_1.Media(mediaId, 'voice'), reception, attributes);
    }
    /**
     * 发送视频消息
     * @param {string} mediaId 素材id
     * @param {Number|Array<string>} reception 数字表示标签id，或openid列表，或null表示全部，默认：null
     * @param {object} attributes 附加参数
     */
    sendVideo(mediaId, reception = null, attributes = {}) {
        return this.sendMessage(new Messages_1.Media(mediaId, 'mpvideo'), reception, attributes);
    }
    /**
     * 发送图片消息
     * @param {string} mediaId 素材id
     * @param {Number|Array<string>} reception 数字表示标签id，或openid列表，或null表示全部，默认：null
     * @param {object} attributes 附加参数
     */
    sendImage(mediaId, reception = null, attributes = {}) {
        return this.sendMessage(new Messages_1.Image(mediaId), reception, attributes);
    }
    /**
     * 发送卡券消息
     * @param {string} cardId 卡券id
     * @param {Number|Array<string>} reception 数字表示标签id，或openid列表，或null表示全部，默认：null
     * @param {object} attributes 附加参数
     */
    sendCard(cardId, reception = null, attributes = {}) {
        return this.sendMessage(new Messages_1.Card(cardId), reception, attributes);
    }
    /**
     * 发送卡券消息预览给指定openId
     * @param {Message} message 消息实例
     * @param {string} reception openid
     * @param {object} attributes 附加参数
     */
    previewMessage(message, reception, method = this.PREVIEW_BY_OPENID) {
        let msg = (new MessageBuilder_1.default).message(message).buildForPreview(method, reception);
        return this.preview(msg);
    }
    /**
     * 发送文本消息预览给指定openId
     * @param {string} message 文本
     * @param {string} reception openid
     * @param {object} attributes 附加参数
     */
    previewText(message, reception, method = this.PREVIEW_BY_OPENID) {
        return this.previewMessage(new Messages_1.Text(message), reception, method);
    }
    /**
     * 发送图文消息预览给指定openId
     * @param {string} mediaId 素材id
     * @param {string} reception openid
     * @param {object} attributes 附加参数
     */
    previewNews(mediaId, reception, method = this.PREVIEW_BY_OPENID) {
        return this.previewMessage(new Messages_1.Media(mediaId, 'mpnews'), reception, method);
    }
    /**
     * 发送语音消息预览给指定openId
     * @param {string} mediaId 素材id
     * @param {string} reception openid
     * @param {object} attributes 附加参数
     */
    previewVoice(mediaId, reception, method = this.PREVIEW_BY_OPENID) {
        return this.previewMessage(new Messages_1.Media(mediaId, 'voice'), reception, method);
    }
    /**
     * 发送视频消息预览给指定openId
     * @param {string} mediaId 素材id
     * @param {string} reception openid
     * @param {object} attributes 附加参数
     */
    previewVideo(mediaId, reception, method = this.PREVIEW_BY_OPENID) {
        return this.previewMessage(new Messages_1.Media(mediaId, 'mpvideo'), reception, method);
    }
    /**
     * 发送图片消息预览给指定openId
     * @param {string} mediaId 素材id
     * @param {string} reception openid
     * @param {object} attributes 附加参数
     */
    previewImage(mediaId, reception, method = this.PREVIEW_BY_OPENID) {
        return this.previewMessage(new Messages_1.Image(mediaId), reception, method);
    }
    /**
     * 发送卡券消息预览给指定openId
     * @param {string} cardId 卡券id
     * @param {string} reception openid
     * @param {object} attributes 附加参数
     */
    previewCard(cardId, reception, method = this.PREVIEW_BY_OPENID) {
        return this.previewMessage(new Messages_1.Card(cardId), reception, method);
    }
    /**
     * 发送文本消息预览给指定微信号
     * @param {string} mediaId 文本
     * @param {string} reception 微信号
     * @param {object} attributes 附加参数
     */
    previewTextByName(message, reception) {
        return this.previewMessage(new Messages_1.Text(message), reception, this.PREVIEW_BY_NAME);
    }
    /**
     * 发送图文消息预览给指定微信号
     * @param {string} mediaId 素材id
     * @param {string} reception 微信号
     * @param {object} attributes 附加参数
     */
    previewNewsByName(mediaId, reception) {
        return this.previewMessage(new Messages_1.Media(mediaId, 'mpnews'), reception, this.PREVIEW_BY_NAME);
    }
    /**
     * 发送语音消息预览给指定微信号
     * @param {string} mediaId 素材id
     * @param {string} reception 微信号
     * @param {object} attributes 附加参数
     */
    previewVoiceByName(mediaId, reception) {
        return this.previewMessage(new Messages_1.Media(mediaId, 'voice'), reception, this.PREVIEW_BY_NAME);
    }
    /**
     * 发送视频消息预览给指定微信号
     * @param {string} mediaId 素材id
     * @param {string} reception 微信号
     * @param {object} attributes 附加参数
     */
    previewVideoByName(mediaId, reception) {
        return this.previewMessage(new Messages_1.Media(mediaId, 'mpvideo'), reception, this.PREVIEW_BY_NAME);
    }
    /**
     * 发送图片消息预览给指定微信号
     * @param {string} mediaId 素材id
     * @param {string} reception 微信号
     * @param {object} attributes 附加参数
     */
    previewImageByName(mediaId, reception) {
        return this.previewMessage(new Messages_1.Image(mediaId), reception, this.PREVIEW_BY_NAME);
    }
    /**
     * 发送卡券消息预览给指定微信号
     * @param {string} cardId 卡券id
     * @param {string} reception 微信号
     * @param {object} attributes 附加参数
     */
    previewCardByName(cardId, reception) {
        return this.previewMessage(new Messages_1.Card(cardId), reception, this.PREVIEW_BY_NAME);
    }
}
exports.default = BroadcastingClient;
