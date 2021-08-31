import BaseClient from '../Core/BaseClient';
export default class MeterialClient extends BaseClient {
    setSettlementCard(params: object): Promise<any>;
    updateContact(params: object): Promise<any>;
}
