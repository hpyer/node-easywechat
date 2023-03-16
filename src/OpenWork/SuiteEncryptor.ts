'use strict';

import BaseEncryptor from '../Core/Encryptor';

class SuiteEncryptor extends BaseEncryptor {

  constructor(
    protected suiteId: string = null,
    protected token: string = null,
    protected aesKey: string | Buffer = null
  ) {
    super(suiteId, token, aesKey, null);

    if (typeof this.aesKey === 'string') {
      this.aesKey = Buffer.from(this.aesKey + '=', 'base64');
    }
  }

}

export = SuiteEncryptor;
