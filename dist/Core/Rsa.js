'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
class RSA {
    constructor() {
        this.publicKey = null;
        this.privateKey = null;
    }
    /**
     * 设置公钥
     * @param key 公钥内容
     */
    setPublicKey(key) {
        this.publicKey = crypto_1.default.createPublicKey(key);
    }
    /**
     * 设置私钥
     * @param key 私钥内容
     */
    setPrivateKey(key) {
        this.privateKey = crypto_1.default.createPrivateKey(key);
    }
    /**
     * 生成密钥对
     * @param options 密钥选项
     * @returns
     */
    static keyPair(options) {
        return crypto_1.default.generateKeyPairSync('rsa', options);
    }
    /**
     * 加密
     * @param plaintext 待加密文本
     * @param encoding 编码，默认：'base64'
     * @param hashType 哈希方式，默认：'sha1'
     * @param padding 补位方式，默认：crypto.constants.RSA_PKCS1_OAEP_PADDING
     * @returns
     */
    encrypt(plaintext, encoding = 'base64', hashType = 'sha1', padding = crypto_1.default.constants.RSA_PKCS1_OAEP_PADDING) {
        let encryptedData = crypto_1.default.publicEncrypt({
            key: this.publicKey,
            padding,
            oaepHash: hashType,
        }, Buffer.from(plaintext));
        return encryptedData.toString(encoding);
    }
    /**
     * 解密
     * @param ciphertext 待解密文本
     * @param encoding 编码，默认：'base64'
     * @param hashType 哈希方式，默认：'sha1'
     * @param padding 补位方式，默认：crypto.constants.RSA_PKCS1_OAEP_PADDING
     * @returns
     */
    decrypt(ciphertext, encoding = 'base64', hashType = 'sha1', padding = crypto_1.default.constants.RSA_PKCS1_OAEP_PADDING) {
        let decryptedData = crypto_1.default.privateDecrypt({
            key: this.privateKey,
            padding,
            oaepHash: hashType,
        }, Buffer.from(ciphertext, encoding));
        return decryptedData.toString();
    }
    /**
     * 计算签名
     * @param data 待解密文本
     * @param hashType 哈希方式，默认：'sha256'
     * @param encoding 编码，默认：'base64'
     * @param padding 补位方式，默认：crypto.constants.RSA_PKCS1_PSS_PADDING
     * @returns
     */
    sign(data, hashType = 'sha256', encoding = 'base64', padding = crypto_1.default.constants.RSA_PKCS1_PSS_PADDING) {
        let signature = crypto_1.default.sign(hashType, Buffer.from(data), {
            key: this.privateKey,
            padding,
        });
        return signature.toString(encoding);
    }
    /**
     * 验证签名
     * @param signature 待验证签名字符串
     * @param data 待解密文本
     * @param hashType 哈希方式，默认：'sha256'
     * @param encoding 编码，默认：'base64'
     * @param padding 补位方式，默认：crypto.constants.RSA_PKCS1_PSS_PADDING
     * @returns
     */
    verify(signature, data, hashType, encoding = 'base64', padding = crypto_1.default.constants.RSA_PKCS1_PSS_PADDING) {
        let isVerified = crypto_1.default.verify(hashType, Buffer.from(data), {
            key: this.publicKey,
            padding,
        }, Buffer.from(signature, encoding));
        return !!isVerified;
    }
}
exports.default = RSA;
;
