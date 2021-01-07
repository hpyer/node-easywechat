'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class MaterialClient extends BaseClient_1.default {
    /**
     * 上传在摇一摇功能中需使用到的图片素材
     * @param path 文件路径或可读stream
     * @param type 素材类型，可选值：icon，license，默认：icon
     */
    uploadImage(path, type = 'icon') {
        return this.httpUpload('shakearound/material/add', {
            media: path,
        }, {}, {
            type: type.toLowerCase(),
        });
    }
}
exports.default = MaterialClient;
