import BaseClient from '../../Core/BaseClient';
export default class AuthClient extends BaseClient {
    /**
     * 根据 jsCode 获取用户 session 信息
     * @param code 小程序端通过 wx.login 获取
     */
    session(code: string): Promise<any>;
}
