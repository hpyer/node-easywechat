/// <reference types="node" />
import { CipherGCMTypes, BinaryLike, CipherKey } from 'crypto';
export declare class AES {
    /**
     * 加密
     * @param plaintext 待加密文本
     * @param key 密钥
     * @param iv 向量
     * @param autoPadding 自动补位，默认：null，表示不设置
     * @param method 加密方式，默认：'aes-256-cbc'
     * @returns Base64 编码字符串
     */
    static encrypt(plaintext: BinaryLike, key: CipherKey, iv?: BinaryLike, autoPadding?: boolean, method?: string): Buffer;
    /**
     * 解密
     * @param ciphertext 待解密文本，Base64 编码字符串
     * @param key 密钥
     * @param iv 向量
     * @param autoPadding 自动补位，默认：null，表示不设置
     * @param method 加密方式，默认：aes-256-cbc
     * @returns 解密后的明文
     */
    static decrypt(ciphertext: NodeJS.ArrayBufferView, key: BinaryLike, iv?: BinaryLike, autoPadding?: boolean, method?: string): Buffer;
}
export declare class AES_GCM {
    /**
     * GCM模式加密
     * @param plaintext 待加密文本
     * @param key 密钥
     * @param iv 向量
     * @param aad aad
     * @param method 加密方式，默认：aes-256-gcm
     * @returns Base64 编码字符串
     */
    static encrypt(plaintext: BinaryLike, key: CipherKey, iv?: BinaryLike, aad?: string, method?: CipherGCMTypes): Buffer;
    /**
     * GCM模式解密
     * @param ciphertext 待解密文本，Base64 编码字符串
     * @param key 密钥
     * @param iv 向量
     * @param aad aad
     * @param method 加密方式，默认：aes-256-gcm
     * @returns 解密后的明文
     */
    static decrypt(ciphertext: NodeJS.ArrayBufferView, key: BinaryLike, iv?: BinaryLike, aad?: string, method?: CipherGCMTypes): Buffer;
}
