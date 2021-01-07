'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class QrcodeClient extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this.DAY = 86400;
        this.SCENE_MAX_VALUE = 100000;
        this.SCENE_QR_CARD = 'QR_CARD';
        this.SCENE_QR_TEMPORARY = 'QR_SCENE';
        this.SCENE_QR_TEMPORARY_STR = 'QR_STR_SCENE';
        this.SCENE_QR_FOREVER = 'QR_LIMIT_SCENE';
        this.SCENE_QR_FOREVER_STR = 'QR_LIMIT_STR_SCENE';
        this.baseUrl = 'https://api.weixin.qq.com/cgi-bin/';
    }
    /**
     * 创建临时二维码
     * @param sceneValue 业务标识
     * @param expireSeconds 有效时间，单位：秒
     */
    temporary(sceneValue, expireSeconds = 0) {
        let type = '', sceneKey = '';
        if (typeof sceneValue == 'number' && sceneValue > 0) {
            type = this.SCENE_QR_TEMPORARY;
            sceneKey = 'scene_id';
        }
        else {
            type = this.SCENE_QR_TEMPORARY_STR;
            sceneKey = 'scene_str';
        }
        let scene = {};
        scene[sceneKey] = sceneValue;
        return this.create(type, scene, true, expireSeconds);
    }
    /**
     * 创建永久二维码
     * @param sceneValue 业务标识
     */
    forever(sceneValue) {
        let type = '', sceneKey = '';
        if (typeof sceneValue == 'number' && sceneValue > 0) {
            type = this.SCENE_QR_FOREVER;
            sceneKey = 'scene_id';
        }
        else {
            type = this.SCENE_QR_FOREVER_STR;
            sceneKey = 'scene_str';
        }
        let scene = {};
        scene[sceneKey] = sceneValue;
        return this.create(type, scene, false);
    }
    /**
     * 获取二维码地址
     * @param ticket 通过temporary或forever方法获得
     */
    url(ticket) {
        return `https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=${ticket}`;
    }
    create(actionName, actionInfo, temporary = true, expireSeconds = 0) {
        if (!expireSeconds || expireSeconds <= 0) {
            expireSeconds = 7 * this.DAY;
        }
        let params = {
            action_name: actionName,
            action_info: {
                scene: actionInfo,
            },
        };
        if (temporary) {
            params['expire_seconds'] = Math.min(expireSeconds, 30 * this.DAY);
        }
        return this.httpPostJson('qrcode/create', params);
    }
}
exports.default = QrcodeClient;
