'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class BaseRequest {
    getMethod() {
        return '';
    }
    get(key) {
        return null;
    }
    getContent() {
        return '';
    }
    getUri() {
        return '';
    }
    getContentType() {
        return '';
    }
}
exports.default = BaseRequest;
;
