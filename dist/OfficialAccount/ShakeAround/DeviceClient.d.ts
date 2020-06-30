import BaseClient from '../../Core/BaseClient';
export default class DeviceClient extends BaseClient {
    /**
     * 申请设备 ID
     * @param data 子参数： quantity，申请数量；apply_reason，申请理由；comment，备注，可选；poi_id，门店ID，可选；
     */
    apply(data: object): Promise<any>;
    /**
     * 查询申请的审核状态
     * @param applyId 申请id
     */
    status(applyId: string): Promise<any>;
    /**
     * 编辑设备信息
     * @param deviceIdentifier 设备标识
     * @param comment 设备备注
     */
    update(deviceIdentifier: object, comment: string): Promise<any>;
    /**
     * 设备与门店关联
     * @param deviceIdentifier 设备标识
     * @param poiId 门店id
     */
    bindPoi(deviceIdentifier: object, poiId: number): Promise<any>;
    /**
     * 设备与第三方门店关联
     * @param deviceIdentifier 设备标识
     * @param poiId 门店id
     * @param appId 关联门店所归属的公众账号的 app_id
     */
    bindThirdPoi(deviceIdentifier: object, poiId: number, appId: string): Promise<any>;
    protected search(params: object): Promise<any>;
    /**
     * 根据设备id批量取回设备数据
     * @param deviceIdentifiers 设备ID列表
     */
    listByIds(deviceIdentifiers: Array<object>): Promise<any>;
    /**
     * 分页批量取回设备数据
     * @param lastId 前一次查询列表末尾的设备编号 device_id
     * @param count 设备数量，不能超过50个
     */
    list(lastId: number, count: number): Promise<any>;
    /**
     * 根据申请时的批次 ID 分页批量取回设备数据
     * @param applyId 批次ID
     * @param lastId 前一次查询列表末尾的设备编号 device_id
     * @param count 设备数量，不能超过50个
     */
    listByApplyId(applyId: number, lastId: number, count: number): Promise<any>;
}
