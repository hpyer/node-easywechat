import Client from './Client';
export default class RelationClient extends Client {
    /**
     * 配置设备与页面的关联关系
     * @param deviceIdentifier 设备标识
     * @param pageIds 页面ID列表
     */
    bindPages(deviceIdentifier: object, pageIds: Array<number>): Promise<any>;
    /**
     * 查询指定设备所关联的页面
     * @param deviceIdentifier 设备标识
     */
    listByDeviceId(deviceIdentifier: object): Promise<any>;
    /**
     * 查询指定页面所关联的设备
     * @param pageId 页面id
     * @param begin 关联关系列表的起始索引值
     * @param count 待查询的关联关系数量，不能超过50个
     */
    listByPageId(pageId: number, begin: number, count: number): Promise<any>;
}
