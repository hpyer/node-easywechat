'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class Client extends BaseClient_1.default {
    open(msg_data_id, index) {
        return this.httpPostJson('cgi-bin/comment/open', {
            msg_data_id,
            index,
        });
    }
    close(msg_data_id, index) {
        return this.httpPostJson('cgi-bin/comment/close', {
            msg_data_id,
            index,
        });
    }
    list(msg_data_id, index, begin, count, type = 0) {
        return this.httpPostJson('cgi-bin/comment/list', {
            msg_data_id,
            index,
            begin,
            count,
            type,
        });
    }
    markElect(msg_data_id, index, user_comment_id) {
        return this.httpPostJson('cgi-bin/comment/markelect', {
            msg_data_id,
            index,
            user_comment_id,
        });
    }
    unmarkElect(msg_data_id, index, user_comment_id) {
        return this.httpPostJson('cgi-bin/comment/unmarkelect', {
            msg_data_id,
            index,
            user_comment_id,
        });
    }
    delete(msg_data_id, index, user_comment_id) {
        return this.httpPostJson('cgi-bin/comment/delete', {
            msg_data_id,
            index,
            user_comment_id,
        });
    }
    reply(msg_data_id, index, user_comment_id, content) {
        return this.httpPostJson('cgi-bin/comment/reply/add', {
            msg_data_id,
            index,
            user_comment_id,
            content,
        });
    }
    deleteReply(msg_data_id, index, user_comment_id) {
        return this.httpPostJson('cgi-bin/comment/reply/delete', {
            msg_data_id,
            index,
            user_comment_id,
        });
    }
}
exports.default = Client;
