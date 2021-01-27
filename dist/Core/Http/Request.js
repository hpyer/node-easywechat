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
const url_1 = __importDefault(require("url"));
const Utils_1 = require("../Utils");
const raw_body_1 = __importDefault(require("raw-body"));
const xml2js_1 = __importDefault(require("xml2js"));
class Request {
    constructor(req = null, content = null) {
        this._req = null;
        this._uri = '';
        this._method = '';
        this._headers = null;
        this._get = null;
        this._post = null;
        this._content = null;
        this._contentType = '';
        this._ip = '';
        if (req) {
            this._req = req;
            this._uri = req.url;
            this._method = req.method.toUpperCase();
            this._headers = req.headers || {};
            this._contentType = this._headers['content-type'] || '';
            if (content) {
                if (Buffer.isBuffer(content)) {
                    this._content = content;
                }
                else if (Utils_1.isObject(content)) {
                    this._post = content;
                    this._content = Buffer.from(JSON.stringify(content));
                    this._contentType = 'application/json';
                }
                else if (Utils_1.isString(content)) {
                    try {
                        this._post = JSON.parse(content);
                        this._contentType = 'application/json';
                    }
                    catch (e) {
                        if (content.substr(0, 1) === '<') {
                            xml2js_1.default.parseString(content, (err, res) => {
                                res = Utils_1.singleItem(res);
                                if (res['xml'])
                                    res = res['xml'];
                                this._post = res;
                                this._contentType = 'text/xml';
                            });
                        }
                        else {
                            this._post = Utils_1.parseQueryString(content);
                            this._contentType = 'application/x-www-form-urlencoded';
                        }
                    }
                    this._content = Buffer.from(content);
                }
            }
            this._get = url_1.default.parse(req.url, true).query || {};
            // 提取请求ip
            if (Utils_1.isIp(this._headers['x-client-ip'])) {
                this._ip = this._headers['x-client-ip'];
            }
            else if (this._headers['x-forwarded-for']) {
                let ip = '';
                let items = this._headers['x-forwarded-for'].split(',');
                for (let i = 0; i < items.length; i++) {
                    if (!items[i])
                        continue;
                    ip = items[i].trim();
                    if (items[i].indexOf(':') > -1) {
                        let tmp = items[i].split(':');
                        if (tmp.length == 2) {
                            ip = tmp[0];
                        }
                    }
                    if (Utils_1.isIp(ip)) {
                        break;
                    }
                }
                this._ip = ip;
            }
            else if (Utils_1.isIp(this._headers['x-real-ip'])) {
                this._ip = this._headers['x-real-ip'];
            }
            else if (Utils_1.isIp(this._headers['x-forwarded'])) {
                this._ip = this._headers['x-forwarded'];
            }
            else if (Utils_1.isIp(this._headers['forwarded-for'])) {
                this._ip = this._headers['forwarded-for'];
            }
            else if (Utils_1.isIp(this._headers['client-ip'])) {
                this._ip = this._headers['client-ip'];
            }
        }
    }
    isValid() {
        return !!this._req;
    }
    getMethod() {
        if (!this.isValid)
            throw new Error('Please set request first. app.rebind(\'request\', new EasyWechat.Request(ctx.req));');
        return this._method;
    }
    get(key) {
        if (!this.isValid)
            throw new Error('Please set request first. app.rebind(\'request\', new EasyWechat.Request(ctx.req));');
        if (this._get[key])
            return this._get[key];
        return this.post(key);
    }
    post(key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isValid)
                throw new Error('Please set request first. app.rebind(\'request\', new EasyWechat.Request(ctx.req));');
            if (this._method !== 'POST')
                return null;
            if (!this._content) {
                this._content = yield this.getContent();
            }
            if (!this._post && this._content) {
                let contentType = this._contentType.toLowerCase();
                if (contentType.indexOf('application/json') > -1) {
                    try {
                        this._post = JSON.parse(this._content.toString());
                    }
                    catch (e) { }
                }
                else if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
                    this._post = Utils_1.parseQueryString(this._content.toString());
                }
            }
            return this._post && this._post[key] ? this._post[key] : null;
        });
    }
    getAllGet() {
        if (!this.isValid)
            throw new Error('Please set request first. app.rebind(\'request\', new EasyWechat.Request(ctx.req));');
        return this._get;
    }
    getAllPost() {
        if (!this.isValid)
            throw new Error('Please set request first. app.rebind(\'request\', new EasyWechat.Request(ctx.req));');
        return this._post;
    }
    getContent() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isValid)
                throw new Error('Please set request first. app.rebind(\'request\', new EasyWechat.Request(ctx.req));');
            if (this._method !== 'POST')
                return null;
            if (!this._content) {
                this._content = yield raw_body_1.default(this._req);
            }
            return this._content;
        });
    }
    getUri() {
        if (!this.isValid)
            throw new Error('Please set request first. app.rebind(\'request\', new EasyWechat.Request(ctx.req));');
        return this._uri || '';
    }
    getContentType() {
        if (!this.isValid)
            throw new Error('Please set request first. app.rebind(\'request\', new EasyWechat.Request(ctx.req));');
        return this._contentType || '';
    }
    getHeaders() {
        if (!this.isValid)
            throw new Error('Please set request first. app.rebind(\'request\', new EasyWechat.Request(ctx.req));');
        return this._headers || {};
    }
    getClientIp() {
        if (!this.isValid)
            throw new Error('Please set request first. app.rebind(\'request\', new EasyWechat.Request(ctx.req));');
        return this._ip;
    }
}
exports.default = Request;
;
