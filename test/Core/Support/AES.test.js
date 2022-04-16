const BaseTestUnit = require('../../BaseTestUnit');
const { AES, AES_GCM } = require('../../../dist/Core/Support/AES');

class TestUnit extends BaseTestUnit {

  test() {

    let key = '12345678901234567890123456789012';
    let iv = '1234567890123456';
    let data = 'Hello 中文!!!';

    it('Should the same value with `aes-256-cbc`', () => {
      let encrypt = AES.encrypt(data, key, iv, true, 'aes-256-cbc').toString('base64');
      let decrypt = AES.decrypt(encrypt, key, iv, true, 'aes-256-cbc').toString();
      this.assert.strictEqual(decrypt, data);
    });

    it('Should the same value with `aes-128-cbc`', () => {
      key = '1234567890123456';
      let encrypt = AES.encrypt(data, key, iv, true, 'aes-128-cbc').toString('base64');
      let decrypt = AES.decrypt(encrypt, key, iv, true, 'aes-128-cbc').toString();
      this.assert.strictEqual(decrypt, data);
    });

    it('Should the same value with `aes-256-ecb`', () => {
      key = '12345678901234567890123456789012';
      iv = '';
      let encrypt = AES.encrypt(data, key, iv, true, 'aes-256-ecb').toString('base64');
      let decrypt = AES.decrypt(encrypt, key, iv, true, 'aes-256-ecb').toString();
      this.assert.strictEqual(decrypt, data);
    });

    it('Should the same value with `aes-256-gcm`', () => {
      iv = '1234567890123456';
      let aad = '';
      let encrypt = AES_GCM.encrypt(data, key, iv, aad, 'aes-256-gcm').toString('base64');
      let decrypt = AES_GCM.decrypt(encrypt, key, iv, aad, 'aes-256-gcm').toString();
      this.assert.strictEqual(decrypt, data);
    });

    it('Should encrypt empty data and equeal to `GvpmmdtYwexXIPhySs9Tlg==`', () => {
      data = '';
      key = '0123456789abcdef0123456789abcdef';
      iv = '0123456789abcdef';
      let aad = '';
      let encrypt = AES_GCM.encrypt(data, key, iv, aad, 'aes-256-gcm').toString('base64');
      this.assert.strictEqual(encrypt, 'GvpmmdtYwexXIPhySs9Tlg==');
    });

    it('Should encrypt data=`hello`, aad=`world` and equeal to `APoZlYpivU3HjbAiB4CvW1rAFr8J`', () => {
      data = 'hello';
      key = '0123456789abcdef0123456789abcdef';
      iv = '0123456789abcdef';
      let aad = 'world';
      let encrypt = AES_GCM.encrypt(data, key, iv, aad, 'aes-256-gcm').toString('base64');
      this.assert.strictEqual(encrypt, 'APoZlYpivU3HjbAiB4CvW1rAFr8J');
    });

  }
}

new TestUnit('Core/Support/AES');
