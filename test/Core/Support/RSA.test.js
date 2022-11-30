const BaseTestUnit = require('../../BaseTestUnit');
const RSA = require('../../../dist/Core/Support/RSA');
const Path = require('path');
const Fs = require('fs');

class TestUnit extends BaseTestUnit {

  test() {

    const publicKey = Fs.readFileSync(Path.resolve(__dirname, '../../temp/test_rsa_cert.pem'));
    const privateKey = Fs.readFileSync(Path.resolve(__dirname, '../../temp/test_rsa_private.key'));

    let rsa = new RSA;
    rsa.setPublicKey(publicKey);
    rsa.setPrivateKey(privateKey);

    let data = 'Hello 中文!!!';

    it('Should the same value after encrypt() and decrypt()', () => {
      let encrypt = rsa.encrypt(data);
      let decrypt = rsa.decrypt(encrypt);
      this.assert.strictEqual(decrypt, data);
    });

    it('Should verified as true after sign() and verify()', () => {
      let sign = rsa.sign(data);
      let isVerified = rsa.verify(sign, data);
      this.assert.strictEqual(isVerified, true);
    });

  }
}

new TestUnit('Core/Support/RSA');
