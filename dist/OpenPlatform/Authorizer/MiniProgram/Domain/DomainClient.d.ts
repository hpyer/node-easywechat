import BaseClient from '../../../../Core/BaseClient';
export default class DomainClient extends BaseClient {
    modify(params: object): Promise<any>;
    setWebviewDomain(domains: Array<string>, action?: string): Promise<any>;
}
