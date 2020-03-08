'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class Client extends BaseClient_1.default {
    submitPage(pages = {}) {
        return this.httpPostJson('wxa/search/wxaapi_submitpages', {
            pages
        });
    }
}
exports.default = Client;
