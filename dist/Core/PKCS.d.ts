/// <reference types="node" />
export declare class PKCS7 {
    /**
     * 对需要加密的明文进行填充补位
     * @param text 需要进行填充补位操作的明文
     * @param blockSize 补位大小，默认：32
     */
    static pad(text: string | Buffer, blockSize?: number): Buffer;
    /**
     * 删除解密后明文的补位字符
     * @param text 解密后的明文
     * @param blockSize 补位大小，默认：32
     */
    static unpad(text: string | Buffer, blockSize?: number): Buffer;
}
