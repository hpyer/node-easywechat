'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
const Messages_1 = require("../../Core/Messages");
const MessageBuilder_1 = require("./MessageBuilder");
const Utils_1 = require("../../Core/Utils");
class Client extends BaseClient_1.default {
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
    delete(msgId) {
        return this.httpPostJson('cgi-bin/message/mass/delete', {
            msg_id: msgId,
        });
    }
    status(msgId) {
        return this.httpPostJson('cgi-bin/message/mass/get', {
            msg_id: msgId,
        });
    }
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
    sendText(message, reception = null, attributes = {}) {
        return this.sendMessage(new Messages_1.Text(message), reception, attributes);
    }
    sendNews(mediaId, reception = null, attributes = {}) {
        return this.sendMessage(new Messages_1.Media(mediaId, 'mpnews'), reception, attributes);
    }
    sendVoice(mediaId, reception = null, attributes = {}) {
        return this.sendMessage(new Messages_1.Media(mediaId, 'voice'), reception, attributes);
    }
    sendVideo(mediaId, reception = null, attributes = {}) {
        return this.sendMessage(new Messages_1.Media(mediaId, 'mpvideo'), reception, attributes);
    }
    sendImage(mediaId, reception = null, attributes = {}) {
        return this.sendMessage(new Messages_1.Image(mediaId), reception, attributes);
    }
    sendCard(cardId, reception = null, attributes = {}) {
        return this.sendMessage(new Messages_1.Card(cardId), reception, attributes);
    }
    previewMessage(message, reception, method = this.PREVIEW_BY_OPENID) {
        let msg = (new MessageBuilder_1.default).message(message).buildForPreview(method, reception);
        return this.preview(msg);
    }
    previewText(message, reception, method = this.PREVIEW_BY_OPENID) {
        return this.previewMessage(new Messages_1.Text(message), reception, method);
    }
    previewNews(mediaId, reception, method = this.PREVIEW_BY_OPENID) {
        return this.previewMessage(new Messages_1.Media(mediaId, 'mpnews'), reception, method);
    }
    previewVoice(mediaId, reception, method = this.PREVIEW_BY_OPENID) {
        return this.previewMessage(new Messages_1.Media(mediaId, 'voice'), reception, method);
    }
    previewVideo(mediaId, reception, method = this.PREVIEW_BY_OPENID) {
        return this.previewMessage(new Messages_1.Media(mediaId, 'mpvideo'), reception, method);
    }
    previewImage(mediaId, reception, method = this.PREVIEW_BY_OPENID) {
        return this.previewMessage(new Messages_1.Image(mediaId), reception, method);
    }
    previewCard(cardId, reception, method = this.PREVIEW_BY_OPENID) {
        return this.previewMessage(new Messages_1.Card(cardId), reception, method);
    }
    previewTextByName(message, reception) {
        return this.previewMessage(new Messages_1.Text(message), reception, this.PREVIEW_BY_NAME);
    }
    previewNewsByName(mediaId, reception) {
        return this.previewMessage(new Messages_1.Media(mediaId, 'mpnews'), reception, this.PREVIEW_BY_NAME);
    }
    previewVoiceByName(mediaId, reception) {
        return this.previewMessage(new Messages_1.Media(mediaId, 'voice'), reception, this.PREVIEW_BY_NAME);
    }
    previewVideoByName(mediaId, reception) {
        return this.previewMessage(new Messages_1.Media(mediaId, 'mpvideo'), reception, this.PREVIEW_BY_NAME);
    }
    previewImageByName(mediaId, reception) {
        return this.previewMessage(new Messages_1.Image(mediaId), reception, this.PREVIEW_BY_NAME);
    }
    previewCardByName(cardId, reception) {
        return this.previewMessage(new Messages_1.Card(cardId), reception, this.PREVIEW_BY_NAME);
    }
}
exports.default = Client;
