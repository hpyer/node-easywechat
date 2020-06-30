import BaseClient from '../../Core/BaseClient';
export default class CustomerServiceClient extends BaseClient {
    list(): Promise<any>;
    online(): Promise<any>;
    create(account: string, nickname: string): Promise<any>;
    update(account: string, nickname: string): Promise<any>;
    delete(account: string): Promise<any>;
    invite(account: string, wechatId: string): Promise<any>;
    setAvatar(account: string, path: string): Promise<any>;
    message(message: object): object;
    send(message: object): Promise<any>;
    showTypingStatusToUser(openid: string): Promise<any>;
    hideTypingStatusToUser(openid: string): Promise<any>;
    messages(startTime: string, endTime: string, msgId?: Number, number?: Number): Promise<any>;
}
