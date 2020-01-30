'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class Response {
    constructor(content, statusCode = 200, headers = {}) {
        this.content = null;
        this.statusCode = 200;
        this.headers = {};
        this.content = content;
        this.statusCode = statusCode;
        this.headers = headers;
    }
    setContent(content) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
    setStatusCode(statusCode) {
        this.statusCode = statusCode;
    }
    getStatusCode() {
        return this.statusCode;
    }
    addHeader(key, val) {
        this.headers[key] = val;
    }
    setHeaders(headers) {
        this.headers = headers;
    }
    getHeaders() {
        return this.headers;
    }
    getHeader(key) {
        return this.headers[key] || '';
    }
}
exports.default = Response;
;
