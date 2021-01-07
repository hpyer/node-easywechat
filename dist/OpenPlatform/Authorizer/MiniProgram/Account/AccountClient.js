'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = __importDefault(require("../../Aggregate/Account/Client"));
class AccountClient extends Client_1.default {
    /**
     * 获取基本信息
     */
    getBasicInfo() {
        return this.httpPostJson('cgi-bin/account/getaccountbasicinfo');
    }
    /**
     * 修改头像
     * @param mediaId 头像素材 media_id
     * @param left 裁剪框左上角 x 坐标（取值范围：[0, 1]）
     * @param top 裁剪框左上角 y 坐标（取值范围：[0, 1]）
     * @param right 裁剪框右下角 x 坐标（取值范围：[0, 1]）
     * @param bottom 裁剪框右下角 y 坐标（取值范围：[0, 1]）
     */
    updateAvatar(mediaId, left = 0, top = 0, right = 0, bottom = 0) {
        let params = {
            head_img_media_id: mediaId,
            x1: left,
            y1: top,
            x2: right,
            y2: bottom,
        };
        return this.httpPostJson('cgi-bin/account/modifyheadimage', params);
    }
    /**
     * 修改功能介绍
     * @param signature 功能介绍（简介）
     */
    updateSignature(signature) {
        return this.httpPostJson('cgi-bin/account/modifysignature', {
            signature: signature
        });
    }
}
exports.default = AccountClient;
