import BaseClient from '../Core/BaseClient';
export default class CouponClient extends BaseClient {
    send(params?: object): Promise<any>;
    stock(params?: object): Promise<any>;
    info(params?: object): Promise<any>;
}
