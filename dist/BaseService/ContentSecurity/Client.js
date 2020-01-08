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
const Fs = require("fs");
const BaseClient_1 = require("../../Core/BaseClient");
const Utils_1 = require("../../Core/Utils");
class Client extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this.baseUrl = 'https://api.weixin.qq.com/wxa/';
    }
    checkText(text) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('msg_sec_check', {
                json: true,
                body: {
                    content: text,
                }
            });
        });
    }
    checkImage(file) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!file) {
                throw new Error(`File does not exist, or the file is unreadable: '${file}'`);
            }
            if (Utils_1.isString(file)) {
                file = Fs.createReadStream(file);
            }
            return yield this.httpPost('img_sec_check', {
                formData: {
                    media: file,
                }
            });
        });
    }
}
exports.default = Client;
