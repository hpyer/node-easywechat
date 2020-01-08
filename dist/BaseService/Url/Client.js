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
class Client extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this.endpoint = 'https://api.weixin.qq.com/cgi-bin/shorturl';
    }
    shorten(long_url) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = {
                action: 'long2short',
                long_url
            };
            return yield this.requestWithAccessToken({
                url: this.endpoint,
                json: true,
                body: data
            });
        });
    }
}
exports.default = Client;
