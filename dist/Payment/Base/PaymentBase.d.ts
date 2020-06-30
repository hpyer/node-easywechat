import BaseClient from '../Core/BaseClient';
export default class PaymentBase extends BaseClient {
    pay(params: object): Promise<any>;
    authCodeToOpenid(auth_code: string): Promise<any>;
}
