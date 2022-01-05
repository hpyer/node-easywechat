import BaseClient from '../../Core/BaseClient';
export default class ExternalContactClient extends BaseClient {
    /**
     * 获取配置了客户联系功能的成员列表
     * @see https://work.weixin.qq.com/api/doc#90000/90135/91554
     * @returns
     */
    getFollowUsers(): Promise<any>;
    /**
     * 获取外部联系人列表
     * @see https://work.weixin.qq.com/api/doc#90000/90135/91555
     * @param userId
     * @returns
     */
    list(userId: string): Promise<any>;
    /**
     * 获取外部联系人详情
     * @see https://work.weixin.qq.com/api/doc#90000/90135/91556
     * @param externalUserId
     * @returns
     */
    get(externalUserId: string): Promise<any>;
    /**
     * 批量获取客户详情
     * @see https://work.weixin.qq.com/api/doc/90000/90135/92994
     * @param userIdList
     * @param cursor
     * @param limit
     * @returns
     */
    batchGet(userIdList: string[], cursor?: string, limit?: number): Promise<any>;
    /**
     * 批量获取外部联系人详情
     * @see https://work.weixin.qq.com/api/doc/90001/90143/93010
     * @param userIdList
     * @param cursor
     * @param limit
     * @returns
     */
    batchGetByUser(userIdList: string[], cursor?: string, limit?: number): Promise<any>;
    /**
     * 修改客户备注信息
     * @see https://work.weixin.qq.com/api/doc/90000/90135/92115
     * @param data
     * @returns
     */
    remark(data: object): Promise<any>;
    /**
     * 获取离职成员的客户列表
     * @see https://work.weixin.qq.com/api/doc/90000/90135/92124
     * @param pageId
     * @param pageSize
     * @param cursor
     * @returns
     */
    getUnassigned(pageId?: number, pageSize?: number, cursor?: string): Promise<any>;
    /**
     * 离职成员的外部联系人再分配
     * @see https://work.weixin.qq.com/api/doc#90000/90135/91564
     * @param externalUserId
     * @param handoverUserId
     * @param takeoverUserId
     * @param transferSuccessMessage
     * @returns
     */
    transfer(externalUserId: string, handoverUserId: string, takeoverUserId: string, transferSuccessMessage: string): Promise<any>;
    /**
     * 分配在职成员的客户
     * @see https://work.weixin.qq.com/api/doc/90000/90135/92125
     * @param externalUserId
     * @param handoverUserId
     * @param takeoverUserId
     * @param transferSuccessMessage
     * @returns
     */
    transferCustomer(externalUserId: string, handoverUserId: string, takeoverUserId: string, transferSuccessMessage: string): Promise<any>;
    /**
     * 分配离职成员的客户
     * @see https://work.weixin.qq.com/api/doc/90000/90135/94081
     * @param externalUserId
     * @param handoverUserId
     * @param takeoverUserId
     * @returns
     */
    resignedTransferCustomer(externalUserId: string, handoverUserId: string, takeoverUserId: string): Promise<any>;
    /**
     * 离职成员的群再分配
     * @see https://work.weixin.qq.com/api/doc/90000/90135/92127
     * @param chatIds
     * @param newOwner
     * @returns
     */
    transferGroupChat(chatIds: string[], newOwner: string): Promise<any>;
    /**
     * 查询客户接替状态
     * @see https://work.weixin.qq.com/api/doc/90000/90135/94082
     * @param handoverUserId
     * @param takeoverUserId
     * @param cursor
     * @returns
     */
    transferResult(handoverUserId: string, takeoverUserId: string, cursor?: string): Promise<any>;
    /**
     * 查询客户接替结果
     * @see https://work.weixin.qq.com/api/doc/90001/90143/93009
     * @param externalUserId
     * @param handoverUserId
     * @param takeoverUserId
     * @returns
     */
    getTransferResult(externalUserId: string, handoverUserId: string, takeoverUserId: string): Promise<any>;
    /**
     * 获取客户群列表
     * @see https://work.weixin.qq.com/api/doc/90000/90135/92120
     * @param data
     * @returns
     */
    getGroupChats(data: object): Promise<any>;
    /**
     * 获取客户群详情
     * @see https://work.weixin.qq.com/api/doc/90000/90135/92122
     * @param chatId
     * @param needName
     * @returns
     */
    getGroupChat(chatId: string, needName?: number): Promise<any>;
    /**
     * 获取企业标签库
     * @see https://work.weixin.qq.com/api/doc/90000/90135/92117#获取企业标签库
     * @param tagIds
     * @param groupIds
     * @returns
     */
    getCorpTags(tagIds: string[], groupIds: string[]): Promise<any>;
    /**
     * 添加企业客户标签
     * @see https://work.weixin.qq.com/api/doc/90000/90135/92117#添加企业客户标签
     * @param data
     * @returns
     */
    addCorpTag(data: object): Promise<any>;
    /**
     * 编辑企业客户标签
     * @see https://work.weixin.qq.com/api/doc/90000/90135/92117#编辑企业客户标签
     * @param id
     * @param name
     * @param order
     * @returns
     */
    updateCorpTag(id: string, name?: string, order?: number): Promise<any>;
    /**
     * 删除企业客户标签
     * @see https://work.weixin.qq.com/api/doc/90000/90135/92117#删除企业客户标签
     * @param tagId
     * @param groupId
     * @returns
     */
    deleteCorpTag(tagId: string[], groupId: string[]): Promise<any>;
    /**
     * 编辑客户企业标签
     * @see https://work.weixin.qq.com/api/doc/90000/90135/92118
     * @param data
     * @returns
     */
    markTags(data: object): Promise<any>;
}
