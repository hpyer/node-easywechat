import BaseEncryptor from '../Core/Encryptor';
export default class Encryptor extends BaseEncryptor {
    decryptData(sessionKey: string, iv: string, encryptData: string): object;
}
