'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Merge = require("merge");
const Xml2js = require("xml2js");
const Utils_1 = require("../../Core/Utils");
const Response_1 = require("../../Core/Http/Response");
class Handler {
    constructor(app) {
        this.SUCCESS = 'SUCCESS';
        this.FAIL = 'FAIL';
        this.app = null;
        this.message = null;
        this.fail = '';
        this.attributes = {};
        this.check = true;
        this.sign = false;
        this.app = app;
    }
    handle(closure) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    setFail(message) {
        this.fail = message;
    }
    respondWith(attributes, sign = false) {
        this.attributes = attributes;
        this.sign = sign;
        return this;
    }
    toResponse() {
        let base = {
            return_code: this.fail ? this.FAIL : this.SUCCESS,
            return_msg: this.fail
        };
        let attributes = Merge(base, this.attributes);
        if (this.sign) {
            attributes['sign'] = Utils_1.makeSignature(attributes, this.app['getKey']());
        }
        let XmlBuilder = new Xml2js.Builder({
            cdata: true,
            renderOpts: {
                pretty: false,
                indent: '',
                newline: '',
            }
        });
        return new Response_1.default(XmlBuilder.buildObject(attributes));
    }
    getMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.message)
                return this.message;
            let message = null;
            try {
                let content = yield this.app['request'].getContent();
                message = yield Xml2js.parseStringPromise(content.toString());
            }
            catch (e) {
                throw new Error('Invalid request XML: ' + e.message);
            }
            if (!message) {
                throw new Error('Invalid request XML.');
            }
            if (this.check) {
                this.validate(message);
            }
            this.message = message;
            return message;
        });
    }
    decryptMessage(key) {
        return __awaiter(this, void 0, void 0, function* () {
            let message = yield this.getMessage();
            if (!message[key]) {
                return null;
            }
            let buffer = Buffer.from(message[key], 'base64');
            return Utils_1.AesDecrypt(buffer.toString(), Utils_1.createHash(this.app['config'].key, 'md5'), '', 'AES-256-ECB');
        });
    }
    validate(message) {
        let sign = message['sign'];
        if (Utils_1.makeSignature(message, this.app['getKey']()) !== sign) {
            throw new Error('Invalid Sign');
        }
    }
    strict(result) {
        if (true !== result && this.fail === '') {
            this.fail = result;
        }
    }
}
exports.default = Handler;
