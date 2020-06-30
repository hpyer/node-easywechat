import BaseClient from '../../Core/BaseClient';
export default class PluginClient extends BaseClient {
    list(): Promise<any>;
    apply(appId: string): Promise<any>;
    unbind(appId: string): Promise<any>;
}
