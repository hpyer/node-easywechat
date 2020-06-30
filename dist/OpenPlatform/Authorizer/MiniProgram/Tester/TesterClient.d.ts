import BaseClient from '../../../../Core/BaseClient';
export default class TesterClient extends BaseClient {
    bind(wechatId: string): Promise<any>;
    unbind(wechatId: string): Promise<any>;
    list(): Promise<any>;
}
