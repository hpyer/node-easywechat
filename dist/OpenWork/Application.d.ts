import BaseApplication from '../Core/BaseApplication';
import MiniProgram from '../Work/MiniProgram/Application';
import Work from './Work/Application';
import ProviderAccessToken from './Auth/ProviderAccessToken';
import SuiteAccessToken from './Auth/SuiteAccessToken';
import SuiteTicket from './Auth/SuiteTicket';
import CorpClient from './Corp/CorpClient';
import MiniProgramClient from './MiniProgram/MiniProgramClient';
import ProviderClient from './Provider/ProviderClient';
import Encryptor from '../Core/Encryptor';
import OpenWorkGuard from './Server/OpenWorkGuard';
import { EasyWechatConfig } from '../Core/Types';
export default class OpenWork extends BaseApplication {
    protected defaultConfig: EasyWechatConfig;
    provider_access_token: ProviderAccessToken;
    suite_access_token: SuiteAccessToken;
    suite_ticket: SuiteTicket;
    corp: CorpClient;
    mini_program: MiniProgramClient;
    provider: ProviderClient;
    encryptor_corp: Encryptor;
    encryptor: Encryptor;
    server: OpenWorkGuard;
    constructor(config?: EasyWechatConfig, prepends?: Object, id?: String);
    registerProviders(): void;
    /**
     * 代理小程序实现业务，返回SDK实例
     */
    miniProgram(): MiniProgram;
    /**
     * 代理企业微信实现业务，返回SDK实例
     * @param authCorpId 企业 corp_id
     * @param permanentCode 企业永久授权码
     * @returns
     */
    work(authCorpId: string, permanentCode: string): Work;
}
