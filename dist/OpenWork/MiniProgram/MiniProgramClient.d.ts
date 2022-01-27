import BaseClient from '../../Core/BaseClient';
export default class MiniProgramClient extends BaseClient {
    constructor(app: any);
    session(code: string): Promise<any>;
}
