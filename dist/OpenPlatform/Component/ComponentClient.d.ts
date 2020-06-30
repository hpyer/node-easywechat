import BaseClient from '../../Core/BaseClient';
export default class ComponentClient extends BaseClient {
    registerMiniProgram(params: object): Promise<any>;
    getRegistrationStatus(companyName: string, legalPersonaWechat: string, legalPersonaName: string): Promise<any>;
}
