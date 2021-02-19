import BaseClient from '../../Core/BaseClient';
export default class ContactWayClient extends BaseClient {
    create(type: number, scene: number, config: object): Promise<any>;
    get(configId: string): Promise<any>;
    update(configId: string, config: object): Promise<any>;
    delete(configId: string): Promise<any>;
}
