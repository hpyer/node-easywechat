'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const xml2js_1 = __importDefault(require("xml2js"));
const Utils_1 = require("../Utils");
class Message {
    constructor(attributes = {}) {
        this.properties = [];
        this.jsonAliases = {};
        this.attributes = {};
        this.required = [];
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
            xml: Utils_1.merge(Utils_1.merge({ MsgType: this.getType() }, this.toXmlArray()), appends)
        };
        if (returnAsObject) {
            return data;
        }
        let XmlBuilder = new xml2js_1.default.Builder({
            cdata: true,
            renderOpts: {
                pretty: false,
                indent: '',
                newline: '',
            }
        });
        return XmlBuilder.buildObject(data);
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
        let data = Utils_1.merge({
            msgtype: messageType
        }, appends);
        data[messageType] = Utils_1.merge(data[messageType] || {}, this.propertiesToObject({}, this.jsonAliases));
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
    setAttributes(attributes) {
        this.attributes = attributes;
        return this;
    }
    setAttribute(name, value) {
        this.attributes[name] = value;
        return this;
    }
    set(name, value) {
        this.setAttribute(name, value);
        return this;
    }
    getAttribute(name, defaultValue = null) {
        return this.attributes[name] || defaultValue;
    }
    get(name, defaultValue = null) {
        return this.getAttribute(name, defaultValue);
    }
    has(name) {
        for (let k in this.attributes) {
            if (k === name) {
                return true;
            }
        }
        return false;
    }
    merge(attributes) {
        this.attributes = Utils_1.merge(Utils_1.merge({}, this.attributes), attributes);
        return this;
    }
    only(keys) {
        let attributes = {};
        for (let k in this.attributes) {
            keys.forEach(key => {
                if (k === key) {
                    attributes[k] = this.attributes[k];
                }
            });
        }
        return attributes;
    }
    all() {
        this.checkRequiredAttributes();
        return this.attributes;
    }
    getRequired() {
        return this.required && Utils_1.isArray(this.required) ? this.required : [];
    }
    isRequired(attribute) {
        return Utils_1.inArray(attribute, this.getRequired(), true);
    }
    checkRequiredAttributes() {
        this.getRequired().forEach(attribute => {
            if (attribute == null) {
                throw new Error(`"${attribute}" cannot be empty.`);
            }
        });
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
