'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const body_1 = require("body");
const any_1 = require("body/any");
const Url = require("url");
class Request {
    constructor(req) {
        this._uri = '';
        this._method = '';
        this._get = {};
        this._post = {};
        this._content = '';
        this._contentType = '';
        this._uri = req.url;
        this._method = req.method;
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
}
exports.default = Request;
;
