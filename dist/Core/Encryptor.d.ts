/// <reference types="node" />
export default class Encryptor {
    protected appId: string;
    protected token: string;
    protected aesKey: Buffer;
    protected blockSize: number;
    constructor(appId: string, token: string, aesKey: string);
    getToken(): string;
    signature(...args: any[]): string;
    encrypt(text: string, nonce?: string, timestamp?: number): string;
    decrypt(text: string, msgSignature: string, nonce: string, timestamp: number): string;
}
