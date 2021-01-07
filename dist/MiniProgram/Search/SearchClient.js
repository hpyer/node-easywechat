'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class SearchClient extends BaseClient_1.default {
    submitPage(pages = {}) {
        return this.httpPostJson('wxa/search/wxaapi_submitpages', {
            pages
        });
    }
}
exports.default = SearchClient;
