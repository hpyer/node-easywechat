'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const Utils_1 = require("./Utils");
const AES_1 = require("./AES");
const PKCS_1 = require("./PKCS");
class Encryptor {
    constructor(appId, token, aesKey) {
        this.appId = null;
        this.token = null;
        this.aesKey = null;
        this.blockSize = 32;
        this.appId = appId;
        this.token = token;
        this.aesKey = Buffer.from(aesKey + '=', 'base64');
    }
    getToken() {
        return this.token;
    }
    signature(...args) {
        args.sort();
        return Utils_1.createHash(args.join(''), 'sha1');
    }
    encrypt(text, nonce = null, timestamp = null) {
        let encrypted = '';
        try {
            // 算法：AES_Encrypt(随机16B + msg_len(4) + msg + appID)
            let randomString = crypto_1.default.pseudoRandomBytes(16);
            let msg = Buffer.from(text);
            let msgLength = Buffer.alloc(4);
            msgLength.writeUInt32BE(msg.length, 0);
            let encoded = PKCS_1.PKCS7.pad(Buffer.concat([randomString, msgLength, msg, Buffer.from(this.appId)]), this.blockSize);
            encrypted = AES_1.AES.encrypt(encoded, this.aesKey, this.aesKey.slice(0, 16), false, 'aes-256-cbc').toString('base64');
        }
        catch (e) {
            throw new Error('Fail to encrypt data');
        }
        if (!nonce)
            nonce = this.appId.slice(0, 10);
        if (!timestamp)
            timestamp = Utils_1.getTimestamp();
        let response = {
            Encrypt: encrypted,
            MsgSignature: this.signature(this.token, timestamp, nonce, encrypted),
            TimeStamp: timestamp,
            Nonce: nonce,
        };
        return Utils_1.buildXml(response);
    }
    decrypt(text, msgSignature, nonce, timestamp) {
        let signature = this.signature(this.token, nonce, timestamp, text);
        if (signature !== msgSignature) {
            throw new Error('Invalid Signature.');
        }
        let deciphered = AES_1.AES.decrypt(Buffer.from(text, 'base64'), this.aesKey, this.aesKey.slice(0, 16), false, 'aes-256-cbc');
        deciphered = PKCS_1.PKCS7.unpad(deciphered, this.blockSize);
        let content = deciphered.slice(16);
        let length = content.slice(0, 4).readUInt32BE(0);
        if (content.slice(length + 4).toString() !== this.appId) {
            throw new Error('Invalid appId.');
        }
        return content.slice(4, length + 4).toString();
    }
}
exports.default = Encryptor;
;
