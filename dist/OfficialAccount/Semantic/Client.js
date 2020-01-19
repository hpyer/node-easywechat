'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
const Merge = require("merge");
class Client extends BaseClient_1.default {
    query(keyword, categories, optional = {}) {
        let params = Merge({
            query: keyword,
            category: categories,
            appid: this.app['config'].app_id,
        }, optional);
        return this.httpPostJson('semantic/semproxy/search', params);
    }
}
exports.default = Client;
