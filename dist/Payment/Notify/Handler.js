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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../../Core/Utils");
const Response_1 = __importDefault(require("../../Core/Http/Response"));
const AES_1 = require("../../Core/AES");
class Handler {
    constructor(app) {
        this.SUCCESS = 'SUCCESS';
        this.FAIL = 'FAIL';
        this.app = null;
        this.message = null;
        this.fail = null;
        this.attributes = {};
        this.check = true;
        this.sign = false;
        this.app = app;
    }
    handle(closure) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    /**
     * 设置处理失败时的错误消息
     * @param message 错误消息
     */
    setFail(message) {
        this.fail = message;
    }
    respondWith(attributes, sign = false) {
        this.attributes = attributes;
        this.sign = sign;
        return this;
    }
    toResponse() {
        return __awaiter(this, void 0, void 0, function* () {
            let base = {
                return_code: this.fail === null ? this.SUCCESS : this.FAIL,
                return_msg: this.fail
            };
            let attributes = Utils_1.merge(base, this.attributes);
            if (this.sign) {
                attributes['sign'] = Utils_1.makeSignature(attributes, yield this.app.getKey());
            }
            return new Response_1.default(Buffer.from(Utils_1.buildXml(attributes)));
        });
    }
    getMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            let message = yield this.app.request.getAllPost();
            this.app.log('Payment.Notify.Handler.getMessage', message);
            if (!message) {
                throw new Error('Invalid request message.');
            }
            if (this.check) {
                yield this.validate(message);
            }
            return message;
        });
    }
    decryptMessage(key) {
        return __awaiter(this, void 0, void 0, function* () {
            let message = yield this.getMessage();
            if (!message[key]) {
                return null;
            }
            return AES_1.AES.decrypt(Buffer.from(message[key], 'base64'), Utils_1.createHash(this.app.config.key, 'md5'), '', true, 'aes-256-ecb').toString();
        });
    }
    validate(message) {
        return __awaiter(this, void 0, void 0, function* () {
            let sign = message['sign'];
            if (Utils_1.makeSignature(message, yield this.app.getKey()) !== sign) {
                throw new Error('Invalid Sign');
            }
        });
    }
    strict(result) {
        if (true !== result && this.fail === null) {
            this.fail = result === false ? '' : result;
        }
    }
}
exports.default = Handler;
