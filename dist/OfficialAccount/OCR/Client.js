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
const Utils_1 = require("../../Core/Utils");
class Client extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this.allowTypes = [
            'photo',
            'scan',
        ];
    }
    idCard(img_url, type = 'photo') {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Utils_1.inArray(type, this.allowTypes, true)) {
                throw new Error(`Unsupported type: '${type}'`);
            }
            return yield this.httpGet('cv/ocr/idcard', {
                qs: {
                    type,
                    img_url,
                }
            });
        });
    }
    bankCard(img_url) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpGet('cv/ocr/bankcard', {
                qs: {
                    img_url,
                }
            });
        });
    }
    vehicleLicense(img_url) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpGet('cv/ocr/driving', {
                qs: {
                    img_url,
                }
            });
        });
    }
}
exports.default = Client;
