import BaseClient from '../../Core/BaseClient';
export default class RegisterClient extends BaseClient {
    /**
     * 接入申请
     * @returns
     */
    apply(): Promise<any>;
    /**
     * 获取接入状态
     * @returns
     */
    check(): Promise<any>;
    /**
     * 完成接入任务
     * @param accessInfoItem 6:完成spu接口，7:完成订单接口，8:完成物流接口，9:完成售后接口，10:测试完成，11:发版完成
     * @returns
     */
    finishAccessInfo(accessInfoItem: number): Promise<any>;
    /**
     * 场景接入申请
     * @param sceneGroupId 1:视频号、公众号场景
     * @returns
     */
    applyScene(sceneGroupId: number): Promise<any>;
}
