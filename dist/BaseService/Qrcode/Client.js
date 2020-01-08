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
        this.endpoint = 'https://api.weixin.qq.com/cgi-bin/qrcode/create';
    }
    temporary(scene_str, expireSeconds = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            if (expireSeconds <= 0 || expireSeconds > 2592000)
                expireSeconds = 2592000;
            let action_name = '', scene = {};
            if (typeof scene_str == 'string') {
                scene = { scene_str };
                action_name = 'QR_STR_SCENE';
            }
            else {
                scene = { scene_id: scene_str };
                action_name = 'QR_SCENE';
            }
            let data = {
                expire_seconds: expireSeconds,
                action_name,
                action_info: { scene }
            };
            return yield this.requestWithAccessToken({
                url: this.endpoint,
                json: true,
                body: data
            });
        });
    }
    forever(scene) {
        return __awaiter(this, void 0, void 0, function* () {
            let action_name = '';
            if (typeof scene == 'string') {
                scene = { scene_str: scene };
                action_name = 'QR_LIMIT_STR_SCENE';
            }
            else {
                scene = { scene_id: scene };
                action_name = 'QR_LIMIT_SCENE';
            }
            let data = {
                action_name,
                action_info: { scene }
            };
            return yield this.requestWithAccessToken({
                url: this.endpoint,
                json: true,
                body: data
            });
        });
    }
    url(ticket) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=' + ticket;
            return yield this.httpFile(url);
        });
    }
}
exports.default = Client;
