import BaseClient from '../../Core/BaseClient';
export default class CorpGroupClient extends BaseClient {
    getAppShareInfo(agentId: number): Promise<any>;
    getToken(corpId: string, agentId: number): Promise<any>;
    getMiniProgramTransferSession(userId: string, sessionKey: number): Promise<any>;
}
