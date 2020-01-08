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
class TagClient extends BaseClient_1.default {
    create(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/tags/create', {
                json: true,
                body: {
                    tag: {
                        name,
                    }
                }
            });
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpGet('cgi-bin/tags/get');
        });
    }
    update(id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/tags/update', {
                json: true,
                body: {
                    tag: {
                        id,
                        name,
                    }
                }
            });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/tags/delete', {
                json: true,
                body: {
                    tag: {
                        id,
                    }
                }
            });
        });
    }
    userTags(openid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/tags/getidlist', {
                json: true,
                body: {
                    openid,
                }
            });
        });
    }
    usersOfTag(tagid, next_openid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/user/tag/get', {
                json: true,
                body: {
                    tagid,
                    next_openid,
                }
            });
        });
    }
    tagUsers(openid_list, tagid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/tags/members/batchtagging', {
                json: true,
                body: {
                    openid_list,
                    tagid,
                }
            });
        });
    }
    untagUsers(openid_list, tagid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/tags/members/batchuntagging', {
                json: true,
                body: {
                    openid_list,
                    tagid,
                }
            });
        });
    }
}
exports.default = TagClient;
