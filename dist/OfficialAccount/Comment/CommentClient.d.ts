import BaseClient from '../../Core/BaseClient';
export default class CommentClient extends BaseClient {
    /**
     * 打开已群发文章评论
     * @param msg_data_id 群发返回的msg_data_id
     * @param index 多图文时，用来指定第几篇图文，从0开始，默认：0
     */
    open(msg_data_id: string, index?: number): Promise<any>;
    /**
     * 关闭已群发文章评论
     * @param msg_data_id 群发返回的msg_data_id
     * @param index 多图文时，用来指定第几篇图文，从0开始，默认：0
     */
    close(msg_data_id: string, index?: number): Promise<any>;
    /**
     * 查看指定文章的评论数据
     * @param msg_data_id 群发返回的msg_data_id
     * @param index 多图文时，用来指定第几篇图文，从0开始
     * @param begin 起始位置，从0开始
     * @param count 获取数目（>=50会被拒绝）
     * @param type 评论类型。可选值：0，普通评论&精选评论；1，普通评论；2，精选评论；默认：0
     */
    list(msg_data_id: string, index: number, begin: number, count: number, type?: number): Promise<any>;
    /**
     * 将评论标记精选
     * @param msg_data_id 群发返回的msg_data_id
     * @param index 多图文时，用来指定第几篇图文，从0开始
     * @param user_comment_id 评论id
     */
    markElect(msg_data_id: string, index: number, user_comment_id: number): Promise<any>;
    /**
     * 将评论取消精选
     * @param msg_data_id 群发返回的msg_data_id
     * @param index 多图文时，用来指定第几篇图文，从0开始
     * @param user_comment_id 评论id
     */
    unmarkElect(msg_data_id: string, index: number, user_comment_id: number): Promise<any>;
    /**
     * 删除评论
     * @param msg_data_id 群发返回的msg_data_id
     * @param index 多图文时，用来指定第几篇图文，从0开始
     * @param user_comment_id 评论id
     */
    delete(msg_data_id: string, index: number, user_comment_id: number): Promise<any>;
    /**
     * 回复评论
     * @param msg_data_id 群发返回的msg_data_id
     * @param index 多图文时，用来指定第几篇图文，从0开始
     * @param user_comment_id 评论id
     * @param content 回复内容
     */
    reply(msg_data_id: string, index: number, user_comment_id: number, content: string): Promise<any>;
    /**
     * 删除回复
     * @param msg_data_id 群发返回的msg_data_id
     * @param index 多图文时，用来指定第几篇图文，从0开始
     * @param user_comment_id 评论id
     */
    deleteReply(msg_data_id: string, index: number, user_comment_id: number): Promise<any>;
}
