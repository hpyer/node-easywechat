import BaseClient from '../../Core/BaseClient';
export default class MenuClient extends BaseClient {
    get(): Promise<any>;
    create(data: object): Promise<any>;
    delete(): Promise<any>;
}
