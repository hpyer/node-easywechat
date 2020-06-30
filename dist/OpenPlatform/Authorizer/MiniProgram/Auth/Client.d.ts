import BaseClient from '../../../../Core/BaseClient';
export default class Client extends BaseClient {
    protected component: any;
    constructor(app: any, component: any);
    session(code: string): Promise<any>;
}
