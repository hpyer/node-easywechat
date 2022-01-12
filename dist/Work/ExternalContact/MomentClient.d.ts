import BaseClient from '../../Core/BaseClient';
export default class MomentClient extends BaseClient {
    /**
     * 创建发表任务
     * @see https://work.weixin.qq.com/api/doc/90000/90135/95094#%E5%88%9B%E5%BB%BA%E5%8F%91%E8%A1%A8%E4%BB%BB%E5%8A%A1
     * @param params
     * @returns
     */
    createTask(params: object): Promise<any>;
    /**
     * 获取任务创建结果
     * @see https://work.weixin.qq.com/api/doc/90000/90135/95094#%E8%8E%B7%E5%8F%96%E4%BB%BB%E5%8A%A1%E5%88%9B%E5%BB%BA%E7%BB%93%E6%9E%9C
     * @param jobId
     * @returns
     */
    getTask(jobId: string): Promise<any>;
    /**
     * 获取企业全部的发表列表
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/93333#获取企业全部的发表列表
     * @param params
     * @returns
     */
    list(params: object): Promise<any>;
    /**
     * 获取客户朋友圈企业发表的列表
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/93333#获取客户朋友圈企业发表的列表
     * @param momentId
     * @param cursor
     * @param limit
     * @returns
     */
    getTasks(momentId: string, cursor?: string, limit?: number): Promise<any>;
    /**
     * 获取客户朋友圈发表时选择的可见范围
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/93333#获取客户朋友圈发表时选择的可见范围
     * @param momentId
     * @param userId
     * @param cursor
     * @param limit
     * @returns
     */
    getCustomers(momentId: string, userId: string, cursor?: string, limit?: number): Promise<any>;
    /**
     * 获取客户朋友圈发表后的可见客户列表
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/93333#获取客户朋友圈发表后的可见客户列表
     * @param momentId
     * @param userId
     * @param cursor
     * @param limit
     * @returns
     */
    getSendResult(momentId: string, userId: string, cursor?: string, limit?: number): Promise<any>;
    /**
     * 获取客户朋友圈的互动数据
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/93333#获取客户朋友圈的互动数据
     * @param momentId
     * @param userId
     * @returns
     */
    getComments(momentId: string, userId: string): Promise<any>;
}
