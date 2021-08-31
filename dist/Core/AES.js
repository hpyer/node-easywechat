'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AES_GCM = exports.AES = void 0;
const crypto_1 = require("crypto");
class AES {
    /**
     * 加密
     * @static
     * @param plaintext 待加密文本
     * @param key 密钥
     * @param iv 向量
     * @param autoPadding 自动补位，默认：null，表示不设置
     * @param method 加密方式，默认：'aes-256-cbc'
     */
    static encrypt(plaintext, key, iv = '', autoPadding = null, method = 'aes-256-cbc') {
        let cipher = crypto_1.createCipheriv(method, key, iv);
        if (typeof autoPadding === 'boolean') {
            cipher.setAutoPadding(autoPadding);
        }
        return Buffer.concat([
            cipher.update(plaintext),
            cipher.final(),
        ]);
    }
    /**
     * 解密
     * @static
     * @param ciphertext 待解密文本，Base64 编码字符串
     * @param key 密钥
     * @param iv 向量
     * @param autoPadding 自动补位，默认：null，表示不设置
     * @param method 加密方式，默认：aes-256-cbc
     */
    static decrypt(ciphertext, key, iv = '', autoPadding = null, method = 'aes-256-cbc') {
        let decipher = crypto_1.createDecipheriv(method, key, iv);
        if (typeof autoPadding === 'boolean') {
            decipher.setAutoPadding(autoPadding);
        }
        if (typeof ciphertext === 'string') {
            ciphertext = Buffer.from(ciphertext, 'base64');
        }
        let deciphered = Buffer.concat([
            decipher.update(ciphertext),
            decipher.final(),
        ]);
        return deciphered;
    }
}
exports.AES = AES;
class AES_GCM {
    /**
     * GCM模式加密
     * @static
     * @param plaintext 待加密文本
     * @param key 密钥
     * @param iv 向量
     * @param aad aad
     * @param method 加密方式，默认：aes-256-gcm
     */
    static encrypt(plaintext, key, iv = '', aad = '', method = 'aes-256-gcm') {
        let cipher = crypto_1.createCipheriv(method, key, iv).setAAD(Buffer.from(aad));
        return Buffer.concat([
            cipher.update(plaintext),
            cipher.final(),
            cipher.getAuthTag(),
        ]);
    }
    /**
     * GCM模式解密
     * @static
     * @param ciphertext 待解密文本，Base64 编码字符串
     * @param key 密钥
     * @param iv 向量
     * @param aad aad
     * @param method 加密方式，默认：aes-256-gcm
     */
    static decrypt(ciphertext, key, iv = '', aad = '', method = 'aes-256-gcm') {
        let buf = null;
        if (typeof ciphertext === 'string') {
            buf = Buffer.from(ciphertext, 'base64');
        }
        else {
            buf = Buffer.from(ciphertext);
        }
        let tag = buf.slice(-16);
        let payload = buf.slice(0, -16);
        let decipher = crypto_1.createDecipheriv(method, key, iv).setAuthTag(tag).setAAD(Buffer.from(aad));
        return Buffer.concat([
            decipher.update(payload),
            decipher.final(),
        ]);
    }
}
exports.AES_GCM = AES_GCM;
;
