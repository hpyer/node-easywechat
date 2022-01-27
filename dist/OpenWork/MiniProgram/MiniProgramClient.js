'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class MiniProgramClient extends BaseClient_1.default {
    constructor(app) {
        super(app, app['suite_access_token']);
    }
    session(code) {
        return this.httpGet('cgi-bin/service/miniprogram/jscode2session', {
            js_code: code,
            grant_type: 'authorization_code',
        });
    }
}
exports.default = MiniProgramClient;
