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
const BaseClient_1 = require("../../Core/BaseClient");
const StreamResponse_1 = require("../../Core/Http/StreamResponse");
const Merge = require("merge");
class Client extends BaseClient_1.default {
    get(path, optional = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = Merge({
                path,
            }, optional);
            return yield this.getStream('wxa/getwxacode', params);
        });
    }
    getUnlimit(scene, optional = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = Merge({
                scene,
            }, optional);
            return yield this.getStream('wxa/getwxacodeunlimit', params);
        });
    }
    getQrCode(path, width = null) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getStream('cgi-bin/wxaapp/createwxaqrcode', {
                path,
                width,
            });
        });
    }
    getStream(api, params) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.requestRaw({
                url: api,
                method: 'POST',
                json: true,
                body: params
            });
            if (res.getHeader('content-disposition').indexOf('attachment') > -1) {
                return StreamResponse_1.default.buildFromResponse(res);
            }
            return res.getContent();
        });
    }
}
exports.default = Client;
