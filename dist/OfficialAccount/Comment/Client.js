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
    open(msg_data_id, index) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/comment/open', {
                json: true,
                body: {
                    msg_data_id,
                    index,
                }
            });
        });
    }
    close(msg_data_id, index) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/comment/close', {
                json: true,
                body: {
                    msg_data_id,
                    index,
                }
            });
        });
    }
    list(msg_data_id, index, begin, count, type = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/comment/list', {
                json: true,
                body: {
                    msg_data_id,
                    index,
                    begin,
                    count,
                    type,
                }
            });
        });
    }
    markElect(msg_data_id, index, user_comment_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/comment/markelect', {
                json: true,
                body: {
                    msg_data_id,
                    index,
                    user_comment_id,
                }
            });
        });
    }
    unmarkElect(msg_data_id, index, user_comment_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/comment/unmarkelect', {
                json: true,
                body: {
                    msg_data_id,
                    index,
                    user_comment_id,
                }
            });
        });
    }
    delete(msg_data_id, index, user_comment_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/comment/delete', {
                json: true,
                body: {
                    msg_data_id,
                    index,
                    user_comment_id,
                }
            });
        });
    }
    reply(msg_data_id, index, user_comment_id, content) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/comment/reply/add', {
                json: true,
                body: {
                    msg_data_id,
                    index,
                    user_comment_id,
                    content,
                }
            });
        });
    }
    deleteReply(msg_data_id, index, user_comment_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/comment/reply/delete', {
                json: true,
                body: {
                    msg_data_id,
                    index,
                    user_comment_id,
                }
            });
        });
    }
}
exports.default = Client;
