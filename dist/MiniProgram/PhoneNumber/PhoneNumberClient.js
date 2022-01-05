'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class PhoneNumber extends BaseClient_1.default {
    /**
     * 获取用户手机号
     * @see https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/phonenumber/phonenumber.getPhoneNumber.html
     * @param code [前端获取code方法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html)
     * @returns
     */
    getUserPhoneNumber(code) {
        return this.httpPostJson('wxa/business/getuserphonenumber', {
            code
        });
    }
}
exports.default = PhoneNumber;
