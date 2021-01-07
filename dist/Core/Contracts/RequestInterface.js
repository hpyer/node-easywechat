'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class RequestInterface {
    getMethod() {
        return '';
    }
    get(key) {
        return null;
    }
    post(key) {
        return null;
    }
    getContent() {
        return null;
    }
    getUri() {
        return '';
    }
    getContentType() {
        return '';
    }
    getHeaders() {
        return null;
    }
    getClientIp() {
        return '';
    }
}
exports.default = RequestInterface;
;
