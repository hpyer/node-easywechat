import BaseClient from '../../Core/BaseClient';
export default class MsgAuditClient extends BaseClient {
    getPermitUsers(type?: string): Promise<any>;
    getSingleAgreeStatus(info: Array<Array<string>>): Promise<any>;
    getRoomAgreeStatus(roomId: string): Promise<any>;
    getRoom(roomId: string): Promise<any>;
}
