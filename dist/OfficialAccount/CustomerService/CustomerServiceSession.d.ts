import BaseClient from '../../Core/BaseClient';
export default class CustomerServiceSession extends BaseClient {
    list(account: string): Promise<any>;
    waiting(): Promise<any>;
    create(account: string, openid: string): Promise<any>;
    close(account: string, openid: string): Promise<any>;
    get(openid: string): Promise<any>;
}
