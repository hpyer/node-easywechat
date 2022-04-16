'use strict';

import ServerGuard from '../../Core/ServerGuard';
import Response from '../../Core/Http/Response';
import Encryptor from '../../Core/Encryptor';

export const EVENT_AUTHORIZED = 'authorized';
export const EVENT_UNAUTHORIZED = 'unauthorized';
export const EVENT_UPDATE_AUTHORIZED = 'updateauthorized';
export const EVENT_COMPONENT_VERIFY_TICKET = 'component_verify_ticket';
export const EVENT_THIRD_FAST_REGISTERED = 'notify_third_fasteregister';

export default class OpenWorkGuard extends ServerGuard
{

  protected alwaysValidate: boolean = true;

  async validate(): Promise<this>
  {
    return this;
  }

  protected async shouldReturnRawResponse(): Promise<boolean>
  {
    return (await this.app['request'].get('echostr')) != null;
  }

  protected async isSafeMode(): Promise<boolean>
  {
    return true;
  }

  protected async decryptMessage(message: object): Promise<string>
  {
    let encryptor = new Encryptor(message['ToUserName'], this.app.config.token, this.app.config.aes_key);

    return encryptor.decrypt(
      message['Encrypt'],
      await this.app['request'].get('msg_signature'),
      await this.app['request'].get('nonce'),
      await this.app['request'].get('timestamp')
    );
  }
};
