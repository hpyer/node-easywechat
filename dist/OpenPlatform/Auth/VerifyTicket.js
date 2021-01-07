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
class VerifyTicket {
    constructor(app) {
        this.app = null;
        this.app = app;
    }
    setTicket(ticket) {
        return __awaiter(this, void 0, void 0, function* () {
            let cacher = this.app.getCache();
            yield cacher.set(this.getCacheKey(), ticket, 3600);
            if (!(yield cacher.has(this.getCacheKey()))) {
                throw new Error('Failed to cache verify ticket.');
            }
            return this;
        });
    }
    getTicket() {
        return __awaiter(this, void 0, void 0, function* () {
            let cached = yield this.app.getCache().get(this.getCacheKey());
            if (cached) {
                return cached;
            }
            throw new Error('Credential "component_verify_ticket" does not exist in cache.');
        });
    }
    getCacheKey() {
        return 'easywechat.open_platform.verify_ticket.' + this.app.config.app_id;
    }
}
exports.default = VerifyTicket;
