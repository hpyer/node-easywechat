import BaseClient from '../../Core/BaseClient';
export default class InvoiceClient extends BaseClient {
    get(cardId: string, encryptCode: string): Promise<any>;
    select(invoices: Array<string>): Promise<any>;
    update(cardId: string, encryptCode: string, status: string): Promise<any>;
    batchUpdate(invoices: Array<string>, openid: string, status: string): Promise<any>;
}
