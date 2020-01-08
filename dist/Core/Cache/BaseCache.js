'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class BaseCache {
    fetch(id) {
        return null;
    }
    contains(id) {
        return true;
    }
    save(id, data = null, lifeTime = 0) {
        return true;
    }
    delete(id) {
        return true;
    }
}
exports.default = BaseCache;
;
