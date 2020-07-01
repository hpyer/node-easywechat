import BaseClient from '../../Core/BaseClient';
export default class SoterClient extends BaseClient {
    /**
     * 生物认证秘钥签名验证
     * @param openid 用户 openid
     * @param json 通过 wx.startSoterAuthentication 成功回调获得的 resultJSON 字段
     * @param signature 通过 wx.startSoterAuthentication 成功回调获得的 resultJSONSignature 字段
     */
    verifySignature(openid: string, json: string, signature: string): Promise<any>;
}
