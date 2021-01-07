'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class CommentClient extends BaseClient_1.default {
    /**
     * 打开已群发文章评论
     * @param msg_data_id 群发返回的msg_data_id
     * @param index 多图文时，用来指定第几篇图文，从0开始，默认：0
     */
    open(msg_data_id, index = 0) {
        return this.httpPostJson('cgi-bin/comment/open', {
            msg_data_id,
            index,
        });
    }
    /**
     * 关闭已群发文章评论
     * @param msg_data_id 群发返回的msg_data_id
     * @param index 多图文时，用来指定第几篇图文，从0开始，默认：0
     */
    close(msg_data_id, index = 0) {
        return this.httpPostJson('cgi-bin/comment/close', {
            msg_data_id,
            index,
        });
    }
    /**
     * 查看指定文章的评论数据
     * @param msg_data_id 群发返回的msg_data_id
     * @param index 多图文时，用来指定第几篇图文，从0开始
     * @param begin 起始位置，从0开始
     * @param count 获取数目（>=50会被拒绝）
     * @param type 评论类型。可选值：0，普通评论&精选评论；1，普通评论；2，精选评论；默认：0
     */
    list(msg_data_id, index, begin, count, type = 0) {
        return this.httpPostJson('cgi-bin/comment/list', {
            msg_data_id,
            index,
            begin,
            count,
            type,
        });
    }
    /**
     * 将评论标记精选
     * @param msg_data_id 群发返回的msg_data_id
     * @param index 多图文时，用来指定第几篇图文，从0开始
     * @param user_comment_id 评论id
     */
    markElect(msg_data_id, index, user_comment_id) {
        return this.httpPostJson('cgi-bin/comment/markelect', {
            msg_data_id,
            index,
            user_comment_id,
        });
    }
    /**
     * 将评论取消精选
     * @param msg_data_id 群发返回的msg_data_id
     * @param index 多图文时，用来指定第几篇图文，从0开始
     * @param user_comment_id 评论id
     */
    unmarkElect(msg_data_id, index, user_comment_id) {
        return this.httpPostJson('cgi-bin/comment/unmarkelect', {
            msg_data_id,
            index,
            user_comment_id,
        });
    }
    /**
     * 删除评论
     * @param msg_data_id 群发返回的msg_data_id
     * @param index 多图文时，用来指定第几篇图文，从0开始
     * @param user_comment_id 评论id
     */
    delete(msg_data_id, index, user_comment_id) {
        return this.httpPostJson('cgi-bin/comment/delete', {
            msg_data_id,
            index,
            user_comment_id,
        });
    }
    /**
     * 回复评论
     * @param msg_data_id 群发返回的msg_data_id
     * @param index 多图文时，用来指定第几篇图文，从0开始
     * @param user_comment_id 评论id
     * @param content 回复内容
     */
    reply(msg_data_id, index, user_comment_id, content) {
        return this.httpPostJson('cgi-bin/comment/reply/add', {
            msg_data_id,
            index,
            user_comment_id,
            content,
        });
    }
    /**
     * 删除回复
     * @param msg_data_id 群发返回的msg_data_id
     * @param index 多图文时，用来指定第几篇图文，从0开始
     * @param user_comment_id 评论id
     */
    deleteReply(msg_data_id, index, user_comment_id) {
        return this.httpPostJson('cgi-bin/comment/reply/delete', {
            msg_data_id,
            index,
            user_comment_id,
        });
    }
}
exports.default = CommentClient;
