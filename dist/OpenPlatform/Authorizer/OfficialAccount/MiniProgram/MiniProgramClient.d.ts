import BaseClient from '../../../../Core/BaseClient';
export default class MiniProgramClient extends BaseClient {
    /**
     * 获取公众号关联的小程序
     */
    list(): Promise<any>;
    /**
     * 关联小程序
     * @param appId 小程序 appid
     * @param notifyUsers 是否发送模板消息通知公众号粉丝
     * @param showProfile 是否展示公众号主页中
     */
    link(appId: string, notifyUsers?: Boolean, showProfile?: Boolean): Promise<any>;
    /**
     * 解除已关联的小程序
     * @param appId 小程序 appid
     */
    uplink(appId: string): Promise<any>;
}
