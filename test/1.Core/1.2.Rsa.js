const assert = require('assert');

const RSA = require('../../dist/Core/Rsa').default;
const Path = require('path');
const Fs = require('fs');

describe('Rsa', function () {

  const publicKey = Fs.readFileSync(Path.resolve(__dirname, '../temp/test_public_key.pem'));
  const privateKey = Fs.readFileSync(Path.resolve(__dirname, '../temp/test_private_key.pem'));

  let rsa = new RSA;
  rsa.setPublicKey(publicKey);
  rsa.setPrivateKey(privateKey);

  let data = 'Hello 中文!!!';

  it('Should the same value after encrypt() and decrypt()', function () {
    let encrypt = rsa.encrypt(data);
    let decrypt = rsa.decrypt(encrypt);
    assert.strictEqual(decrypt, data);
  });

  it('Should verified as true after sign() and verify()', function () {
    let sign = rsa.sign(data);
    let isVerified = rsa.verify(sign, data);
    assert.strictEqual(isVerified, true);
  });

});
