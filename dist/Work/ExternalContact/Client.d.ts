import BaseClient from '../../Core/BaseClient';
export default class ExternalContactClient extends BaseClient {
    getFollowUsers(): Promise<any>;
    list(userId: string): Promise<any>;
    get(externalUserId: string): Promise<any>;
    batchGetUsers(data: object): Promise<any>;
    remark(data: object): Promise<any>;
    getUnassigned(pageId?: number, pageSize?: number): Promise<any>;
    transfer(externalUserId: string, handoverUserId: string, takeoverUserId: string): Promise<any>;
    getGroupChats(data: object): Promise<any>;
    getGroupChat(chatId: string): Promise<any>;
    getCorpTags(tagIds: string[]): Promise<any>;
    addCorpTag(data: object): Promise<any>;
    updateCorpTag(id: string, name: string, order?: number): Promise<any>;
    deleteCorpTag(tagId: string[], groupId: string[]): Promise<any>;
    markTags(data: object): Promise<any>;
}
