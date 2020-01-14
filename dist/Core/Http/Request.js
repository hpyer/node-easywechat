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
const body_1 = require("body");
const any_1 = require("body/any");
const Url = require("url");
const Utils_1 = require("../Utils");
class Request {
    constructor(req) {
        this._uri = '';
        this._method = '';
        this._headers = {};
        this._get = {};
        this._post = {};
        this._content = '';
        this._contentType = '';
        this._ip = '';
        this._uri = req.url;
        this._method = req.method;
        this._headers = req.headers || {};
        this._contentType = req.headers['content-type'] || '';
        this._get = Url.parse(req.url, true).query;
        body_1.default(req, (err, body) => {
            if (err) {
                throw new Error(err);
            }
            this._content = body;
        });
        any_1.default(req, (err, body) => {
            if (err) {
                throw new Error(err);
            }
            this._post = body;
        });
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
    getMethod() {
        return this._method;
    }
    get(key) {
        return this._get[key] || this._post[key] || null;
    }
    getContent() {
        return this._content || '';
    }
    getUri() {
        return this._uri || '';
    }
    getContentType() {
        return this._contentType || '';
    }
    getHeaders() {
        return this._headers || {};
    }
    getClientIp() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._ip;
        });
    }
}
exports.default = Request;
;
