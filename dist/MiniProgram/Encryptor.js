'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const Encryptor_1 = __importDefault(require("../Core/Encryptor"));
class Encryptor extends Encryptor_1.default {
    decryptData(sessionKey, iv, encryptData) {
        let decoded = null;
        try {
            // 解密
            let decipher = crypto_1.default.createDecipheriv('aes-128-cbc', Buffer.from(sessionKey, 'base64'), Buffer.from(iv, 'base64'));
            // 设置自动 padding 为 true，删除填充补位
            decipher.setAutoPadding(true);
            decoded = decipher.update(Buffer.from(encryptData, 'base64'), 'binary', 'utf8');
            decoded += decipher.final('utf8');
            decoded = JSON.parse(decoded);
        }
        catch (e) {
            throw new Error('Fail to decrypt data.');
        }
        return decoded;
    }
}
exports.default = Encryptor;
;
