'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class MomentClient extends BaseClient_1.default {
    /**
     * 创建发表任务
     * @see https://work.weixin.qq.com/api/doc/90000/90135/95094#%E5%88%9B%E5%BB%BA%E5%8F%91%E8%A1%A8%E4%BB%BB%E5%8A%A1
     * @param params
     * @returns
     */
    createTask(params) {
        return this.httpPostJson('cgi-bin/externalcontact/add_moment_task', params);
    }
    /**
     * 获取任务创建结果
     * @see https://work.weixin.qq.com/api/doc/90000/90135/95094#%E8%8E%B7%E5%8F%96%E4%BB%BB%E5%8A%A1%E5%88%9B%E5%BB%BA%E7%BB%93%E6%9E%9C
     * @param jobId
     * @returns
     */
    getTask(jobId) {
        return this.httpGet('cgi-bin/externalcontact/get_moment_task_result', {
            jobid: jobId,
        });
    }
    /**
     * 获取企业全部的发表列表
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/93333#获取企业全部的发表列表
     * @param params
     * @returns
     */
    list(params) {
        return this.httpPostJson('cgi-bin/externalcontact/get_moment_list', params);
    }
    /**
     * 获取客户朋友圈企业发表的列表
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/93333#获取客户朋友圈企业发表的列表
     * @param momentId
     * @param cursor
     * @param limit
     * @returns
     */
    getTasks(momentId, cursor = '', limit = 500) {
        let params = {
            moment_id: momentId,
            cursor,
            limit,
        };
        return this.httpPostJson('cgi-bin/externalcontact/get_moment_task', params);
    }
    /**
     * 获取客户朋友圈发表时选择的可见范围
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/93333#获取客户朋友圈发表时选择的可见范围
     * @param momentId
     * @param userId
     * @param cursor
     * @param limit
     * @returns
     */
    getCustomers(momentId, userId, cursor = '', limit = 500) {
        let params = {
            moment_id: momentId,
            userid: userId,
            cursor,
            limit,
        };
        return this.httpPostJson('cgi-bin/externalcontact/get_moment_customer_list', params);
    }
    /**
     * 获取客户朋友圈发表后的可见客户列表
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/93333#获取客户朋友圈发表后的可见客户列表
     * @param momentId
     * @param userId
     * @param cursor
     * @param limit
     * @returns
     */
    getSendResult(momentId, userId, cursor = '', limit = 3000) {
        let params = {
            moment_id: momentId,
            userid: userId,
            cursor,
            limit,
        };
        return this.httpPostJson('cgi-bin/externalcontact/get_moment_send_result', params);
    }
    /**
     * 获取客户朋友圈的互动数据
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/93333#获取客户朋友圈的互动数据
     * @param momentId
     * @param userId
     * @returns
     */
    getComments(momentId, userId) {
        let params = {
            moment_id: momentId,
            userid: userId,
        };
        return this.httpPostJson('cgi-bin/externalcontact/get_moment_comments', params);
    }
}
exports.default = MomentClient;
