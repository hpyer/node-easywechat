'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class SemanticClient extends BaseClient_1.default {
    /**
     * 语义理解
     * @param keyword 关键字
     * @param categories 需要使用的服务类型，多个用 “,” 隔开字符串，不能为空;
     * @param optional 其它参数。属性：latitude，纬度，与城市二选一；longitude，经度，与城市二选一；city，城市，与经纬度二选一；region，区域名称，在城市存在的情况下可省；uid，用户唯一id（非开发者id）；
     */
    query(keyword, categories, optional = {}) {
        let params = Utils_1.merge({
            query: keyword,
            category: categories,
            appid: this.app.config.app_id,
        }, optional);
        return this.httpPostJson('semantic/semproxy/search', params);
    }
}
exports.default = SemanticClient;
