const BaseTestUnit = require('../BaseTestUnit');
const Application = require('../../dist/Pay/Application');
const Merchant = require('../../dist/Pay/Merchant');
const { PublicKey } = require('../../dist/Core/Support/PublicKey');
const { PrivateKey } = require('../../dist/Core/Support/PrivateKey');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should fetch correct merchant config from application', () => {
      let appConfig = {
        mch_id: 'mock-mch-id',
        certificate: __dirname + '/../temp/test_rsa_cert.pem',
        private_key: __dirname + '/../temp/test_rsa_private.key',
        v2_secret_key: 'mock-v2-secret-key',
        secret_key: 'mock-secret-key',
        platform_certs: [],
      };
      let app = new Application(appConfig);
      let appMerchant = app.getMerchant();
      this.assert.strictEqual(appMerchant.getMerchantId(), appConfig.mch_id);
      this.assert.strictEqual(appMerchant.getSecretKey(), appConfig.secret_key);
      this.assert.strictEqual(appMerchant.getV2SecretKey(), appConfig.v2_secret_key);
      this.assert.strictEqual(appMerchant.getCertificate() instanceof PublicKey, true);
      this.assert.strictEqual(appMerchant.getPrivateKey() instanceof PrivateKey, true);

      let merchantConfig = {
        mch_id: 'mock-mch-id-new',
        certificate: __dirname + '/../temp/test_rsa_cert.pem',
        private_key: __dirname + '/../temp/test_rsa_private.key',
        v2_secret_key: 'mock-v2-secret-key-new',
        secret_key: 'mock-secret-key-new',
        platform_certs: [],
      };
      let newMerchant = new Merchant(
        merchantConfig.mch_id,
        new PrivateKey(merchantConfig.private_key),
        new PublicKey(merchantConfig.certificate),
        merchantConfig.secret_key,
        merchantConfig.v2_secret_key,
        merchantConfig.platform_certs,
      );
      app.setMerchant(newMerchant);
      appMerchant = app.getMerchant();
      console.log('public', appMerchant.getCertificate());
      console.log('private', appMerchant.getPrivateKey());
      this.assert.strictEqual(appMerchant.getMerchantId(), merchantConfig.mch_id);
      this.assert.strictEqual(appMerchant.getSecretKey(), merchantConfig.secret_key);
      this.assert.strictEqual(appMerchant.getV2SecretKey(), merchantConfig.v2_secret_key);
      this.assert.strictEqual(appMerchant.getCertificate() instanceof PublicKey, true);
      this.assert.strictEqual(appMerchant.getPrivateKey() instanceof PrivateKey, true);
    });

  }
}

new TestUnit('Pay/Merchant');
