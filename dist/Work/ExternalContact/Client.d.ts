import BaseClient from '../../Core/BaseClient';
export default class ExternalContactClient extends BaseClient {
    getFollowUsers(): Promise<any>;
    list(userId: string): Promise<any>;
    get(externalUserId: string): Promise<any>;
    batchGet(userId: string, cursor?: string, limit?: number): Promise<any>;
    batchGetByUser(userId: string, cursor?: string, limit?: number): Promise<any>;
    remark(data: object): Promise<any>;
    getUnassigned(pageId?: number, pageSize?: number, cursor?: string): Promise<any>;
    transfer(externalUserId: string, handoverUserId: string, takeoverUserId: string, transferSuccessMessage: string): Promise<any>;
    transferCustomer(externalUserId: string, handoverUserId: string, takeoverUserId: string, transferSuccessMessage: string): Promise<any>;
    resignedTransferCustomer(externalUserId: string, handoverUserId: string, takeoverUserId: string): Promise<any>;
    transferGroupChat(chatIds: string[], newOwner: string): Promise<any>;
    transferResult(handoverUserId: string, takeoverUserId: string, cursor?: string): Promise<any>;
    getTransferResult(externalUserId: string, handoverUserId: string, takeoverUserId: string): Promise<any>;
    getGroupChats(data: object): Promise<any>;
    getGroupChat(chatId: string): Promise<any>;
    getCorpTags(tagIds: string[], groupIds: string[]): Promise<any>;
    addCorpTag(data: object): Promise<any>;
    updateCorpTag(id: string, name?: string, order?: number): Promise<any>;
    deleteCorpTag(tagId: string[], groupId: string[]): Promise<any>;
    markTags(data: object): Promise<any>;
}
