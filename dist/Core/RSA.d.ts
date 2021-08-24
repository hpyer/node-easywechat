/// <reference types="node" />
import crypto from 'crypto';
export default class RSA {
    protected publicKey: crypto.KeyObject;
    /**
     * 设置公钥
     * @param key 公钥内容
     */
    setPublicKey(key: string | crypto.KeyObject | Buffer | crypto.PublicKeyInput): void;
    protected privateKey: crypto.KeyObject;
    /**
     * 设置私钥
     * @param key 私钥内容
     */
    setPrivateKey(key: string | Buffer | crypto.PrivateKeyInput): void;
    /**
     * 生成密钥对
     * @param options 密钥选项
     * @returns
     */
    static keyPair(options: crypto.RSAKeyPairKeyObjectOptions): crypto.KeyPairKeyObjectResult;
    /**
     * 加密
     * @param plaintext 待加密文本
     * @param encoding 编码，默认：'base64'
     * @param hashType 哈希方式，默认：'sha1'
     * @param padding 补位方式，默认：crypto.constants.RSA_PKCS1_OAEP_PADDING
     * @returns
     */
    encrypt(plaintext: string, encoding?: BufferEncoding, hashType?: string, padding?: number): string;
    /**
     * 解密
     * @param ciphertext 待解密文本
     * @param encoding 编码，默认：'base64'
     * @param hashType 哈希方式，默认：'sha1'
     * @param padding 补位方式，默认：crypto.constants.RSA_PKCS1_OAEP_PADDING
     * @returns
     */
    decrypt(ciphertext: string, encoding?: BufferEncoding, hashType?: string, padding?: number): string;
    /**
     * 计算签名
     * @param data 待解密文本
     * @param hashType 哈希方式，默认：'sha256'
     * @param encoding 编码，默认：'base64'
     * @param padding 补位方式，默认：crypto.constants.RSA_PKCS1_PSS_PADDING
     * @returns
     */
    sign(data: string, hashType?: string, encoding?: BufferEncoding, padding?: number): string;
    /**
     * 验证签名
     * @param signature 待验证签名字符串
     * @param data 待解密文本
     * @param hashType 哈希方式，默认：'sha256'
     * @param encoding 编码，默认：'base64'
     * @param padding 补位方式，默认：crypto.constants.RSA_PKCS1_PSS_PADDING
     * @returns
     */
    verify(signature: string, data: string, hashType: string, encoding?: BufferEncoding, padding?: number): boolean;
}
