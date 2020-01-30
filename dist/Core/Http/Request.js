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
const Url = require("url");
const Utils_1 = require("../Utils");
const RawBody = require("raw-body");
class Request {
    constructor(req = null) {
        this._req = null;
        this._uri = '';
        this._method = '';
        this._headers = {};
        this._get = {};
        this._post = {};
        this._content = null;
        this._contentType = '';
        this._ip = '';
        if (req) {
            this._req = req;
            this._uri = req.url;
            this._method = req.method.toUpperCase();
            this._headers = req.headers || {};
            this._contentType = this._headers['content-type'] || '';
            this._get = Url.parse(req.url, true).query;
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
                yield this.getContent();
                let contentType = (this._headers['content-type'] || '').toLowerCase();
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
    getContent() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isValid)
                throw new Error('Please set request first. app.rebind(\'request\', new EasyWechat.Request(ctx.req));');
            if (this._method !== 'POST')
                return null;
            if (!this._content) {
                this._content = yield RawBody(this._req);
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
