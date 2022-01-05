import BaseClient from '../../BaseService/Jssdk/JssdkClient';
import { AccessToken } from '../../Core/BaseAccessToken';
export default class JssdkClient extends BaseClient {
    /**
     * 生成支付 JS 配置（WeixinJSBridge方式）
     * @param prepayId 通过统一下单（unify）接口获取
     * @param json 是否返回json字符串，默认：true
     */
    bridgeConfig(prepayId: string, json?: Boolean): any;
    /**
     * 生成支付 JS 配置（JSSDK方式）
     * @param prepayId 通过统一下单（unify）接口获取
     */
    sdkConfig(prepayId: string): object;
    /**
     * 生成 APP 支付配置
     * @param prepayId 通过统一下单（unify）接口获取
     */
    appConfig(prepayId: string): object;
    /**
     * 生成共享收货地址 JS 配置
     * @param accessToken OAuth授权后的AccessToken
     * @param json 是否返回json字符串，默认：true
     */
    shareAddressConfig(accessToken: string | AccessToken, json?: Boolean): Promise<any>;
    /**
     * 生成联系人配置
     * @param params
     * @param json 是否返回JSON字符串，默认：false
     */
    contractConfig(params: object, json?: Boolean): Promise<any>;
    /**
     * 生成小程序红包配置
     * @param pkg
     * @param json 是否返回JSON字符串，默认：false
     */
    miniprogramRedpackConfig(pkg: string, json?: Boolean): Promise<any>;
}
