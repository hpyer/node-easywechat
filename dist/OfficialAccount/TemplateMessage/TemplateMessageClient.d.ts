import BaseClient from '../../Core/BaseClient';
export default class Client extends BaseClient {
    API_SEND: string;
    protected message: object;
    protected required: Array<string>;
    /**
     * 修改账号所属行业
     * @param industry_id1 主行业id
     * @param industry_id2 副行业id
     */
    setIndustry(industry_id1: string, industry_id2: string): Promise<any>;
    /**
     * 获取支持的行业列表
     */
    getIndustry(): Promise<any>;
    /**
     * 添加模板
     * @param template_id_short 模板库中模板的编号，有“TM**”和“OPENTMTM**”等形式
     */
    addTemplate(template_id_short: string): Promise<any>;
    /**
     * 获取所有模板列表
     */
    getPrivateTemplates(): Promise<any>;
    /**
     * 删除模板
     * @param template_id 模版id
     */
    deletePrivateTemplate(template_id: string): Promise<any>;
    /**
     * 发送模板消息
     * @param data 模版详情
     */
    send(data: object): Promise<any>;
    /**
     * 发送一次性订阅消息
     * @param data 消息详情
     */
    sendSubscription(data: object): Promise<any>;
    protected formatMessage(data: object): any;
    protected formatData(data: object): object;
}
