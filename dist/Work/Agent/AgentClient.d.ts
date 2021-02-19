import BaseClient from '../../Core/BaseClient';
export default class AgentClient extends BaseClient {
    get(agentId: number): Promise<any>;
    set(agentId: number, attributes: object): Promise<any>;
    list(): Promise<any>;
}
