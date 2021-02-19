import BaseClient from '../../Core/BaseClient';
export default class UserClient extends BaseClient {
    create(data: object): Promise<any>;
    update(id: string, data: object): Promise<any>;
    delete(userId: Array<string> | string): Promise<any>;
    batchDelete(userIds: Array<string>): Promise<any>;
    get(userId: string): Promise<any>;
    getDepartmentUsers(departmentId: number, fetchChild: boolean): Promise<any>;
    getDetailedDepartmentUsers(departmentId: number, fetchChild: boolean): Promise<any>;
    userIdToOpenid(userId: string, agentId: string): Promise<any>;
    openidToUserId(openid: string): Promise<any>;
    mobileToUserId(mobile: string): Promise<any>;
    accept(userId: string): Promise<any>;
    invite(params: object): Promise<any>;
    getInvitationQrCode(sizeType?: number): Promise<any>;
}
