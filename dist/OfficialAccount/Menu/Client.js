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
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpGet('cgi-bin/menu/get');
        });
    }
    current() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpGet('cgi-bin/get_current_selfmenu_info');
        });
    }
    create(button, matchrule = null) {
        return __awaiter(this, void 0, void 0, function* () {
            if (matchrule) {
                return yield this.httpPost('cgi-bin/menu/addconditional', {
                    json: true,
                    body: {
                        button,
                        matchrule,
                    }
                });
            }
            return yield this.httpPost('cgi-bin/menu/create', {
                json: true,
                body: {
                    button,
                }
            });
        });
    }
    delete(menuid) {
        return __awaiter(this, void 0, void 0, function* () {
            if (menuid) {
                return yield this.httpPost('cgi-bin/menu/delconditional', {
                    json: true,
                    body: {
                        menuid,
                    }
                });
            }
            return yield this.httpGet('cgi-bin/menu/delete');
        });
    }
    match(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/menu/trymatch', {
                json: true,
                body: {
                    user_id,
                }
            });
        });
    }
}
exports.default = Client;
