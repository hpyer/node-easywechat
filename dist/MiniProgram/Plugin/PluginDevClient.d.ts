import BaseClient from '../../Core/BaseClient';
export default class PluginDevClient extends BaseClient {
    getUsers(page?: Number, size?: Number): Promise<any>;
    agree(appId: string): Promise<any>;
    refuse(reason: string): Promise<any>;
    delete(): Promise<any>;
}
