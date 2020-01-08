'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("merge");
const xml2js_1 = require("xml2js");
const HasAttributesMixin_1 = require("../Mixins/HasAttributesMixin");
class Message extends HasAttributesMixin_1.default {
    constructor(attributes = {}) {
        super();
        this.properties = [];
        this.jsonAliases = {};
        this.setAttributes(attributes);
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    transformToXml(appends = {}, returnAsObject = false) {
        let data = {
            xml: merge_1.default({ MsgType: this.getType() }, this.toXmlArray(), appends)
        };
        if (returnAsObject) {
            return data;
        }
        return (new xml2js_1.XmlBuilder).buildObject(data);
    }
    toXmlArray() {
        throw new Error(`Class "${this.constructor.name}" cannot support transform to XML message.`);
    }
    transformForJsonRequestWithoutType(appends = {}) {
        return this.transformForJsonRequest(appends, false);
    }
    transformForJsonRequest(appends = {}, withType = true) {
        if (!withType) {
            return this.propertiesToObject({}, this.jsonAliases);
        }
        let messageType = this.getType();
        let data = merge_1.default({
            msgtype: messageType
        }, appends);
        data[messageType] = merge_1.default(data[messageType] || {}, this.propertiesToObject({}, this.jsonAliases));
        return data;
    }
    propertiesToObject(data, aliases = null) {
        this.checkRequiredAttributes();
        for (let property in this.attributes) {
            if (this.attributes[property] == null && !this.isRequired(property)) {
                continue;
            }
            let alias = aliases && aliases[property] ? aliases[property] : null;
            data[alias ? alias : property] = this.get(property);
        }
        return data;
    }
}
exports.Message = Message;
Message.TEXT = 2;
Message.IMAGE = 4;
Message.VOICE = 8;
Message.VIDEO = 16;
Message.SHORT_VIDEO = 32;
Message.LOCATION = 64;
Message.LINK = 128;
Message.DEVICE_EVENT = 256;
Message.DEVICE_TEXT = 512;
Message.FILE = 1024;
Message.TEXT_CARD = 2048;
Message.TRANSFER = 4096;
Message.EVENT = 1048576;
Message.MINIPROGRAM_PAGE = 2097152;
Message.ALL = Message.TEXT | Message.IMAGE | Message.VOICE | Message.VIDEO | Message.SHORT_VIDEO | Message.LOCATION | Message.LINK
    | Message.DEVICE_EVENT | Message.DEVICE_TEXT | Message.FILE | Message.TEXT_CARD | Message.TRANSFER | Message.EVENT | Message.MINIPROGRAM_PAGE;
;
