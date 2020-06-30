import BaseClient from '../../Core/BaseClient';
export default class MiniProgramBase extends BaseClient {
    getPaidUnionid(openid: string, optional?: object): Promise<any>;
}
