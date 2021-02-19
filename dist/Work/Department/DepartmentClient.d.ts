import BaseClient from '../../Core/BaseClient';
export default class DepartmentClient extends BaseClient {
    create(data: object): Promise<any>;
    update(id: string, data: object): Promise<any>;
    delete(id: string): Promise<any>;
    list(id: string): Promise<any>;
}
