'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = __importDefault(require("./Client"));
class RelationClient extends Client_1.default {
    /**
     * 配置设备与页面的关联关系
     * @param deviceIdentifier 设备标识
     * @param pageIds 页面ID列表
     */
    bindPages(deviceIdentifier, pageIds) {
        return this.httpPostJson('shakearound/device/bindpage', {
            device_identifier: deviceIdentifier,
            page_ids: pageIds,
        });
    }
    /**
     * 查询指定设备所关联的页面
     * @param deviceIdentifier 设备标识
     */
    listByDeviceId(deviceIdentifier) {
        return this.httpPostJson('shakearound/relation/search', {
            type: 1,
            device_identifier: deviceIdentifier,
        });
    }
    /**
     * 查询指定页面所关联的设备
     * @param pageId 页面id
     * @param begin 关联关系列表的起始索引值
     * @param count 待查询的关联关系数量，不能超过50个
     */
    listByPageId(pageId, begin, count) {
        return this.httpPostJson('shakearound/relation/search', {
            type: 2,
            page_id: pageId,
            begin,
            count,
        });
    }
}
exports.default = RelationClient;
