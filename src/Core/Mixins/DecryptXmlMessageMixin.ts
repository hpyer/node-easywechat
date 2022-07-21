'use strict';

import Encryptor from "../Encryptor";
import Message from "../Message";
import { createHash, parseXml } from "../Support/Utils";

class DecryptXmlMessageMixin
{
  /**
   * 解密消息
   * @returns
   */
  async decryptMessage(message: Message, encryptor: Encryptor, signature: string, timestamp: number, nonce: string): Promise<Message>
  {
    let ciphertext = message['Encrypt'];

    this.validateSignature(encryptor.getToken(), ciphertext, signature, timestamp, nonce);

    let attributes: Record<string, any> = await parseXml(encryptor.decrypt(ciphertext, signature, nonce, timestamp));

    message.merge(attributes);

    return message;
  }

  protected validateSignature(token: string, ciphertext: string, signature: string, timestamp: number, nonce: string): void
  {
    if (!signature) {
      throw new Error('Request signature must not be empty.');
    }

    let params = [token, timestamp, nonce, ciphertext];
    params.sort();

    if (signature !== createHash(params.join(''), 'sha1')) {
      throw new Error('Invalid request signature.');
    }
  }

};

export = DecryptXmlMessageMixin;
