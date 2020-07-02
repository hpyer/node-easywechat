import BaseClient from '../../Core/BaseClient';
export default class ComponentClient extends BaseClient {
    /**
     * 创建小程序
     * @param params 小程序信息
     */
    registerMiniProgram(params: object): Promise<any>;
    /**
     * 查询创建任务状态
     * @param companyName 企业名
     * @param legalPersonaWechat 法人微信
     * @param legalPersonaName 法人姓名
     */
    getRegistrationStatus(companyName: string, legalPersonaWechat: string, legalPersonaName: string): Promise<any>;
}
