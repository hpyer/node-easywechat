/// <reference types="node" />
export default class Encryptor {
    protected appId: string;
    protected token: string;
    protected aesKey: Buffer;
    protected blockSize: number;
    constructor(appId: string, token: string, aesKey: string);
    getToken(): string;
    signature(...args: any[]): string;
    encrypt(text: any, nonce?: any, timestamp?: any): object;
    decrypt(text: any, msgSignature: any, nonce: any, timestamp: any): string;
    /**
     * 删除解密后明文的补位字符
     * @param {Buffer} text 解密后的明文
     * @return {Buffer}
     */
    pkcs7Unpad(text: Buffer): Buffer;
    /**
     * 对需要加密的明文进行填充补位
     * @param {Buffer} text 需要进行填充补位操作的明文
     * @return {Buffer}
     */
    pkcs7Pad(text: Buffer, blockSize: number): Buffer;
}
