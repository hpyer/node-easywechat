'use strict';

import BaseEncryptor from '../Core/Encryptor';

class Encryptor extends BaseEncryptor {

  constructor(
    protected corpId: string = null,
    protected token: string = null,
    protected aesKey: string | Buffer = null
  ) {
    super(corpId, token, aesKey, null);

    if (typeof this.aesKey === 'string') {
      this.aesKey = Buffer.from(this.aesKey + '=', 'base64');
    }
  }

}

export = Encryptor;
