import BaseClient from '../../Core/BaseClient';
export default class SubscribeMessageClient extends BaseClient {
    API_SEND: string;
    protected message: object;
    protected required: Array<string>;
    /**
     * 添加模板
     * @param template_id_short 模板库中模板的编号，有“TM**”和“OPENTMTM**”等形式
     */
    addTemplate(tid: string, kidList: string[], sceneDesc?: string): Promise<any>;
    /**
     * 删除模板
     * @param id 模版id
     */
    deleteTemplate(id: string): Promise<any>;
    /**
     * 获取公众号类目
     */
    getCategory(): Promise<any>;
    /**
     * 获取模板中的关键词
     */
    getTemplateKeywords(tid: string): Promise<any>;
    /**
     * 获取所属类目的公共模板
     */
    getTemplateTitles(ids: string[], start?: number, limit?: number): Promise<any>;
    /**
     * 获取私有模板列表
     */
    getTemplates(): Promise<any>;
    /**
     * 发送订阅消息
     * @param data 详情
     */
    send(data: object): Promise<any>;
    protected formatMessage(data: object): any;
    protected formatData(data: object): object;
}
