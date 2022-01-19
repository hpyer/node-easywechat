'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class RegisterClient extends BaseClient_1.default {
    /**
     * 接入申请
     * @returns
     */
    apply() {
        return this.httpPostJson('shop/register/apply');
    }
    /**
     * 获取接入状态
     * @returns
     */
    check() {
        return this.httpPostJson('shop/register/check');
    }
    /**
     * 完成接入任务
     * @param accessInfoItem 6:完成spu接口，7:完成订单接口，8:完成物流接口，9:完成售后接口，10:测试完成，11:发版完成
     * @returns
     */
    finishAccessInfo(accessInfoItem) {
        return this.httpPostJson('shop/register/finish_access_info', {
            access_info_item: accessInfoItem,
        });
    }
    /**
     * 场景接入申请
     * @param sceneGroupId 1:视频号、公众号场景
     * @returns
     */
    applyScene(sceneGroupId) {
        return this.httpPostJson('shop/register/apply_scene', {
            scene_group_id: sceneGroupId,
        });
    }
}
exports.default = RegisterClient;
