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
const Response_1 = require("./Http/Response");
const Messages_1 = require("./Messages");
const Utils_1 = require("./Utils");
const xml2js_1 = require("xml2js");
const wechat_crypto_1 = require("wechat-crypto");
class ServerGuard {
    constructor(app) {
        this.app = null;
        this.alwaysValidate = false;
        this.handlers = {};
        this.app = app;
    }
    push(handler, condition = '*') {
        if (!this.handlers[condition]) {
            this.handlers[condition] = [];
        }
        this.handlers[condition].push(handler);
    }
    notify(event, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = null;
            for (let condition in this.handlers) {
                let handlers = this.handlers[condition];
                if (condition == '*' || (Number(condition) & event) == event) {
                    let isBreak = false;
                    for (let i = 0; i < handlers.length; i++) {
                        let handler = handlers[i];
                        let res = yield this._callHandler(handler, payload);
                        if (res === false) {
                            isBreak = true;
                            break;
                        }
                        else {
                            result = res;
                        }
                    }
                    if (isBreak) {
                        break;
                    }
                }
            }
            return result;
        });
    }
    _callHandler(handler, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (typeof handler == 'function') {
                    return yield handler.apply(this, [payload]);
                }
            }
            catch (e) {
                if (this.app) {
                    this.app['log']('Observer.notify: 函数执行错误', e);
                }
            }
            return false;
        });
    }
    serve() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app['log']('Request received:', {
                'method': this.app['request'].getMethod(),
                'uri': this.app['request'].getUri(),
                'content-type': this.app['request'].getContentType(),
                'content': this.app['request'].getContent(),
            });
            let res = yield this.validate().resolve();
            this.app['log']('Server response created:', {
                content: res.getContent()
            });
            return res;
        });
    }
    validate() {
        if (!this.alwaysValidate && !this.isSafeMode()) {
            return this;
        }
        if (this.app['request'].get('signature') !== this.signature([
            this.getToken(),
            this.app['request'].get('timestamp'),
            this.app['request'].get('nonce'),
        ])) {
            throw new Error('Invalid request signature.');
        }
        return this;
    }
    resolve() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.handleRequest();
            let res;
            if (this.shouldReturnRawResponse()) {
                res = new Response_1.default(result['response']);
            }
            else {
                res = new Response_1.default(this.buildResponse(result['to'], result['from'], result['response']), 200, { 'Content-Type': 'application/xml' });
            }
            return res;
        });
    }
    shouldReturnRawResponse() {
        return false;
    }
    buildResponse(to, from, message) {
        if (!message || ServerGuard.SUCCESS_EMPTY_RESPONSE === message) {
            return ServerGuard.SUCCESS_EMPTY_RESPONSE;
        }
        if (message instanceof Messages_1.Raw) {
            return message.get('content', ServerGuard.SUCCESS_EMPTY_RESPONSE);
        }
        if (Utils_1.isString(message) || Utils_1.isNumber(message)) {
            message = new Messages_1.Text(message + '');
        }
        if (Utils_1.isArray(message) && message[0] instanceof Messages_1.NewsItem) {
            message = new Messages_1.News(message);
        }
        if (!(message instanceof Messages_1.Message)) {
            throw new Error(`Invalid Messages type "%s".`);
        }
        return this.buildReply(to, from, message);
    }
    buildReply(to, from, message) {
        let prepends = {
            ToUserName: to,
            FromUserName: from,
            CreateTime: Utils_1.getTimestamp(),
            MsgType: message.getType(),
        };
        let res = message.transformToXml(prepends);
        if (this.isSafeMode()) {
            this.app['log'].debug('Messages safe mode is enabled.');
            res = this.app['encryptor'].encrypt(res);
        }
        return res;
    }
    getToken() {
        return this.app['config']['token'];
    }
    isSafeMode() {
        return this.app['request'].get('signature') && 'aes' === this.app['request'].get('encrypt_type');
    }
    signature(params) {
        params.sort();
        return Utils_1.createHash(params.join(''), 'sha1');
    }
    handleRequest() {
        return __awaiter(this, void 0, void 0, function* () {
            let castedMessage = yield this.getMessage();
            let response = yield this.notify(ServerGuard.MESSAGE_TYPE_MAPPING[castedMessage['MsgType'] || castedMessage['msg_type'] || 'text'], castedMessage);
            return {
                to: castedMessage['FromUserName'] || '',
                from: castedMessage['ToUserName'] || '',
                response,
            };
        });
    }
    getMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            let message = this.parseMessage(this.app['request'].getContent());
            if (!message) {
                throw new Error('No message received.');
            }
            if (this.isSafeMode() && message['Encrypt']) {
                let crypto = new wechat_crypto_1.default(this.app['config'].token, this.app['config'].aesKey, this.app['config'].appKey);
                let decrypted = crypto.decrypt(message['Encrypt']);
                message = yield this.parseMessage(decrypted.message);
            }
            return message;
        });
    }
    parseMessage(content) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (0 === content.indexOf('<')) {
                    content = yield this.parseXmlMessage(content);
                }
                else {
                    // Handle JSON format.
                    try {
                        content = JSON.parse(content);
                    }
                    catch (e) { }
                }
                return content;
            }
            catch (e) {
                throw new Error(`Invalid message content: ${content}`);
            }
        });
    }
    parseXmlMessage(xml) {
        return new Promise((resolve, reject) => {
            xml2js_1.parseString(xml, (err, result) => __awaiter(this, void 0, void 0, function* () {
                if (err) {
                    reject(err);
                }
                else {
                    let message;
                    if (result && result.xml) {
                        message = {};
                        for (let k in result.xml) {
                            message[k] = result.xml[k][0];
                        }
                    }
                    resolve(message);
                }
            }));
        })
            .catch((err) => {
            this.app['log']('server.parseMessage()', err);
        });
    }
}
exports.default = ServerGuard;
ServerGuard.SUCCESS_EMPTY_RESPONSE = 'success';
ServerGuard.MESSAGE_TYPE_MAPPING = {
    text: Messages_1.Message.TEXT,
    image: Messages_1.Message.IMAGE,
    voice: Messages_1.Message.VOICE,
    video: Messages_1.Message.VIDEO,
    shortvideo: Messages_1.Message.SHORT_VIDEO,
    location: Messages_1.Message.LOCATION,
    link: Messages_1.Message.LINK,
    device_event: Messages_1.Message.DEVICE_EVENT,
    device_text: Messages_1.Message.DEVICE_TEXT,
    event: Messages_1.Message.EVENT,
    file: Messages_1.Message.FILE,
    miniprogrampage: Messages_1.Message.MINIPROGRAM_PAGE,
};
;
