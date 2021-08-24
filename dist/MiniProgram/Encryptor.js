'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Encryptor_1 = __importDefault(require("../Core/Encryptor"));
const AES_1 = require("../Core/AES");
class Encryptor extends Encryptor_1.default {
    decryptData(sessionKey, iv, encryptData) {
        let decoded = null;
        try {
            // 解密
            decoded = AES_1.AES.decrypt(Buffer.from(encryptData, 'base64'), Buffer.from(sessionKey, 'base64'), Buffer.from(iv, 'base64'), true, 'aes-128-cbc').toString('utf8');
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
