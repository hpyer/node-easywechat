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
class UserClient extends BaseClient_1.default {
    get(openid, lang = 'zh_CN') {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpGet('cgi-bin/user/info', {
                qs: {
                    openid,
                    lang,
                }
            });
        });
    }
    select(openids, lang = 'zh_CN') {
        return __awaiter(this, void 0, void 0, function* () {
            let user_list = [];
            openids.forEach((openid) => {
                user_list.push({
                    openid,
                    lang,
                });
            });
            return yield this.httpPost('cgi-bin/user/info/batchget', {
                json: true,
                body: {
                    user_list
                }
            });
        });
    }
    list(next_openid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpGet('cgi-bin/user/get', {
                qs: {
                    next_openid,
                }
            });
        });
    }
    remark(openid, remark) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/user/info/updateremark', {
                json: true,
                body: {
                    openid,
                    remark,
                }
            });
        });
    }
    blacklist(begin_openid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/tags/members/getblacklist', {
                json: true,
                body: {
                    begin_openid,
                }
            });
        });
    }
    block(openid_list) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/tags/members/batchblacklist', {
                json: true,
                body: {
                    openid_list,
                }
            });
        });
    }
    unblock(openid_list) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/tags/members/batchunblacklist', {
                json: true,
                body: {
                    openid_list,
                }
            });
        });
    }
    changeOpenid(from_appid, openid_list) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/changeopenid', {
                json: true,
                body: {
                    from_appid,
                    openid_list,
                }
            });
        });
    }
}
exports.default = UserClient;
