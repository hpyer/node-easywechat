import BaseClient from '../../Core/BaseClient';
export default class MomentClient extends BaseClient {
    list(params: object): Promise<any>;
    getTasks(momentId: string, cursor: string, limit: number): Promise<any>;
    getCustomers(momentId: string, userId: string, cursor: string, limit: number): Promise<any>;
    getSendResult(momentId: string, userId: string, cursor: string, limit: number): Promise<any>;
    getComments(momentId: string, userId: string): Promise<any>;
}
