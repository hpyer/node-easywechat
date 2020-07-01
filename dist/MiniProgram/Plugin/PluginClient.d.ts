import BaseClient from '../../Core/BaseClient';
export default class PluginClient extends BaseClient {
    /**
     * 获取已添加的插件列表
     */
    list(): Promise<any>;
    /**
     * 发起使用插件申请
     * @param appId 插件appid
     */
    apply(appId: string): Promise<any>;
    /**
     * 删除已添加的插件
     * @param appId 插件appid
     */
    unbind(appId: string): Promise<any>;
}
