import BaseClient from '../../../../Core/BaseClient';
export default class Client extends BaseClient {
    /**
     * 绑定公众号或小程序
     */
    create(): Promise<any>;
    /**
     * 将公众号或小程序绑定到指定开放平台帐号下
     * @param openAppId 开放平台app_id
     */
    bindTo(openAppId: string): Promise<any>;
    /**
     * 将公众号/小程序从开放平台帐号下解绑
     * @param openAppId 开放平台app_id
     */
    unbindFrom(openAppId: string): Promise<any>;
    /**
     * 获取公众号/小程序所绑定的开放平台帐号
     */
    getBinding(): Promise<any>;
}
