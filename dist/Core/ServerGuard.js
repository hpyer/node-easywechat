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
const Xml2js = require("xml2js");
const wechat_crypto_1 = require("wechat-crypto");
const FinallResult_1 = require("./Decorators/FinallResult");
const TerminateResult_1 = require("./Decorators/TerminateResult");
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
                        if (res instanceof TerminateResult_1.default) {
                            return res.content;
                        }
                        else if (res === true) {
                            break;
                        }
                        else if (res === false) {
                            isBreak = true;
                            break;
                        }
                        else if (res && !(result instanceof FinallResult_1.default)) {
                            result = res;
                        }
                    }
                    if (isBreak) {
                        break;
                    }
                }
            }
            return result instanceof FinallResult_1.default ? result.content : result;
        });
    }
    _callHandler(handler, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (typeof handler == 'function') {
                    return yield handler(payload);
                }
            }
            catch (e) {
                this.app['log']('ServerGuard.notify: ', e);
            }
            return false;
        });
    }
    serve() {
        return __awaiter(this, void 0, void 0, function* () {
            let content = yield this.app['request'].getContent();
            this.app['log']('Request received:', {
                'method': this.app['request'].getMethod(),
                'uri': this.app['request'].getUri(),
                'content-type': this.app['request'].getContentType(),
                'content': content ? content.toString() : '',
            });
            yield this.validate();
            let res = yield this.resolve();
            this.app['log']('Server response created:', {
                content: res.getContent().toString()
            });
            return res;
        });
    }
    validate() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.alwaysValidate && !(yield this.isSafeMode())) {
                return this;
            }
            let signature = yield this.app['request'].get('signature');
            let timestamp = yield this.app['request'].get('timestamp');
            let nonce = yield this.app['request'].get('nonce');
            if (signature !== this.signature([this.getToken(), timestamp, nonce])) {
                throw new Error('Invalid request signature.');
            }
            return this;
        });
    }
    forceValidate() {
        this.alwaysValidate = true;
        return this;
    }
    resolve() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.handleRequest();
            let res;
            if (yield this.shouldReturnRawResponse()) {
                res = new Response_1.default(Buffer.from(result['response']));
            }
            else {
                res = new Response_1.default(Buffer.from(yield this.buildResponse(result['to'], result['from'], result['response'])), 200, { 'Content-Type': 'application/xml' });
            }
            return res;
        });
    }
    shouldReturnRawResponse() {
        return __awaiter(this, void 0, void 0, function* () {
            return false;
        });
    }
    buildResponse(to, from, message) {
        return __awaiter(this, void 0, void 0, function* () {
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
            if (message instanceof Messages_1.NewsItem) {
                message = new Messages_1.News([message]);
            }
            if (!(message instanceof Messages_1.Message)) {
                throw new Error(`Invalid Messages type "%s".`);
            }
            return yield this.buildReply(to, from, message);
        });
    }
    buildReply(to, from, message) {
        return __awaiter(this, void 0, void 0, function* () {
            let prepends = {
                ToUserName: to,
                FromUserName: from,
                CreateTime: Utils_1.getTimestamp(),
                MsgType: message.getType(),
            };
            let res = message.transformToXml(prepends);
            if (yield this.isSafeMode()) {
                this.app['log']('Messages safe mode is enabled.');
                let crypto = new wechat_crypto_1.default(this.app['config'].token, this.app['config'].aesKey, this.app['config'].appKey);
                res = crypto.encrypt(res);
                let timestamp = Utils_1.getTimestamp();
                let nonce = Utils_1.randomString();
                let sign = crypto.getSignature(timestamp, nonce, res);
                let XmlBuilder = new Xml2js.Builder({
                    cdata: true,
                    renderOpts: {
                        pretty: false,
                        indent: '',
                        newline: '',
                    }
                });
                return XmlBuilder.buildObject({
                    encrypt: res,
                    sign,
                    timestamp,
                    nonce
                });
            }
            return res;
        });
    }
    getToken() {
        return this.app['config']['token'];
    }
    isSafeMode() {
        return __awaiter(this, void 0, void 0, function* () {
            let signature = yield this.app['request'].get('signature');
            let encrypt_type = yield this.app['request'].get('encrypt_type');
            return signature && 'aes' === encrypt_type;
        });
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
            let content = yield this.app['request'].getContent();
            let message = yield this.parseMessage(content ? content.toString() : '');
            // console.log('message', message, typeof message);
            // if (!message) {
            //   throw new Error('No message received.');
            // }
            if ((yield this.isSafeMode()) && message['Encrypt']) {
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
                if (!content) {
                    return {};
                }
                else if (0 === content.indexOf('<')) {
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
            Xml2js.parseString(xml, (err, result) => {
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
            });
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
