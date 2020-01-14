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
const BaseClient_1 = require("../Core/BaseClient");
const Merge = require("merge");
const StreamResponse_1 = require("../../Core/Http/StreamResponse");
class Client extends BaseClient_1.default {
    get(date, type = 'ALL', options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            options = options || {};
            options['encoding'] = 'binary';
            let params = {
                appid: this.app['config']['app_id'],
                bill_date: date,
                bill_type: type,
            };
            params = Merge(params, options);
            let res = yield this.requestApiRaw(this.wrap('pay/downloadbill'), params);
            if (res.indexOf('<xml>') === 0) {
                return yield this.parseXml(res);
            }
            return new StreamResponse_1.default(res);
        });
    }
}
exports.default = Client;
