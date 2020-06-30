import BaseClient from '../Core/BaseClient';
export default class BillClient extends BaseClient {
    get(date: string, type?: string, options?: object): Promise<any>;
}
