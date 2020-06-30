import Client from './Client';
export default class GroupClient extends Client {
    /**
     * 新增分组
     * @param name 分组名称
     */
    create(name: string): Promise<any>;
    /**
     * 编辑分组信息
     * @param groupId 分组id
     * @param name 分组 名称
     */
    update(groupId: number, name: string): Promise<any>;
    /**
     * 删除分组
     * @param groupId 分组id
     */
    delete(groupId: number): Promise<any>;
    /**
     * 查询分组列表
     * @param begin 起始索引值，默认：0
     * @param count 待查询的分组数量，不能超过1000个，默认：20
     */
    list(begin?: number, count?: number): Promise<any>;
    /**
     * 查询分组详情
     * @param groupId 分组id
     * @param begin 起始索引值，默认：0
     * @param count 待查询的分组数量，不能超过1000个，默认：20
     */
    get(groupId: number, begin?: number, count?: number): Promise<any>;
    /**
     * 添加设备到分组
     * @param groupId 分组id
     * @param deviceIdentifiers 设备标识
     */
    addDevices(groupId: number, deviceIdentifiers: Array<object>): Promise<any>;
    /**
     * 从分组中移除设备
     * @param groupId 分组id
     * @param deviceIdentifiers 设备标识
     */
    removeDevices(groupId: number, deviceIdentifiers: Array<object>): Promise<any>;
}
