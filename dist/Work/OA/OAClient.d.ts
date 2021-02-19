import BaseClient from '../../Core/BaseClient';
export default class OAClient extends BaseClient {
    checkinRecords(startTime: number, endTime: number, userList: Array<string>, type?: number): Promise<any>;
    checkinRules(datetime: number, userList: Array<string>): Promise<any>;
    approvalTemplate(templateId: string): Promise<any>;
    createApproval(data: object): Promise<any>;
    approvalNumbers(startTime: number, endTime: number, nextCursor?: number, size?: number, filters?: Array<string>): Promise<any>;
    approvalDetail(number: number): Promise<any>;
    approvalRecords(startTime: number, endTime: number, nextNumber?: any): Promise<any>;
    dialRecords(startTime: number, endTime: number, offset?: number, limit?: number): Promise<any>;
}
