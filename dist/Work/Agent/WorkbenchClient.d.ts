import BaseClient from '../../Core/BaseClient';
export default class WorkbenchClient extends BaseClient {
    /**
     * 设置应用在工作台展示的模版
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/92535#设置应用在工作台展示的模版
     * @param params
     * @returns
     */
    setWorkbenchTemplate(params: object): Promise<any>;
    /**
     * 获取应用在工作台展示的模版
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/92535#获取应用在工作台展示的模版
     * @param agentId
     * @returns
     */
    getWorkbenchTemplate(agentId: number): Promise<any>;
    /**
     * 设置应用在用户工作台展示的数据
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/92535#设置应用在用户工作台展示的数据
     * @param params
     * @returns
     */
    setWorkbenchData(params: object): Promise<any>;
}
