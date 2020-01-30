'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class CacheInterface {
    get(id) {
        return null;
    }
    has(id) {
        return false;
    }
    set(id, data = null, lifeTime = 0) {
        return false;
    }
    delete(id) {
        return false;
    }
}
exports.default = CacheInterface;
;
