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
    clearQuota() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/clear_quota', {
                json: true,
                body: {
                    appid: this.app['config']['app_id'],
                }
            });
        });
    }
    getValidIps() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpGet('cgi-bin/getcallbackip');
        });
    }
    checkCallbackUrl(action = 'all', operator = 'DEFAULT') {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Utils_1.inArray(action, ['dns', 'ping', 'all'], true)) {
                throw new Error('The action must be dns, ping, all.');
            }
            operator = operator.toUpperCase();
            if (!Utils_1.inArray(operator, ['CHINANET', 'UNICOM', 'CAP', 'DEFAULT'], true)) {
                throw new Error('The operator must be CHINANET, UNICOM, CAP, DEFAULT.');
            }
            return yield this.httpPost('cgi-bin/callback/check', {
                json: true,
                body: {
                    action,
                    check_operator: operator,
                }
            });
        });
    }
}
exports.default = Client;
