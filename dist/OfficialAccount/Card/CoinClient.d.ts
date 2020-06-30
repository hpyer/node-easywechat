import BaseClient from '../../Core/BaseClient';
export default class CoinClient extends BaseClient {
    activate(): Promise<any>;
    summary(): Promise<any>;
    getPrice(cardId: string, quantity: number): Promise<any>;
    recharge(count: number): Promise<any>;
    order(orderId: string): Promise<any>;
    orders(filters: object): Promise<any>;
    confirm(cardId: string, orderId: string, quantity: number): Promise<any>;
}
