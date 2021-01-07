'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = __importDefault(require("./Client"));
class GroupClient extends Client_1.default {
    /**
     * 新增分组
     * @param name 分组名称
     */
    create(name) {
        return this.httpPostJson('shakearound/device/group/add', {
            group_name: name,
        });
    }
    /**
     * 编辑分组信息
     * @param groupId 分组id
     * @param name 分组 名称
     */
    update(groupId, name) {
        return this.httpPostJson('shakearound/device/group/update', {
            group_id: groupId,
            group_name: name,
        });
    }
    /**
     * 删除分组
     * @param groupId 分组id
     */
    delete(groupId) {
        return this.httpPostJson('shakearound/device/group/delete', {
            group_id: groupId,
        });
    }
    /**
     * 查询分组列表
     * @param begin 起始索引值，默认：0
     * @param count 待查询的分组数量，不能超过1000个，默认：20
     */
    list(begin = 0, count = 20) {
        return this.httpPostJson('shakearound/device/group/getlist', {
            begin,
            count,
        });
    }
    /**
     * 查询分组详情
     * @param groupId 分组id
     * @param begin 起始索引值，默认：0
     * @param count 待查询的分组数量，不能超过1000个，默认：20
     */
    get(groupId, begin = 0, count = 20) {
        return this.httpPostJson('shakearound/device/group/getdetail', {
            group_id: groupId,
            begin,
            count,
        });
    }
    /**
     * 添加设备到分组
     * @param groupId 分组id
     * @param deviceIdentifiers 设备标识
     */
    addDevices(groupId, deviceIdentifiers) {
        return this.httpPostJson('shakearound/device/group/adddevice', {
            group_id: groupId,
            device_identifiers: deviceIdentifiers,
        });
    }
    /**
     * 从分组中移除设备
     * @param groupId 分组id
     * @param deviceIdentifiers 设备标识
     */
    removeDevices(groupId, deviceIdentifiers) {
        return this.httpPostJson('shakearound/device/group/deletedevice', {
            group_id: groupId,
            device_identifiers: deviceIdentifiers,
        });
    }
}
exports.default = GroupClient;
