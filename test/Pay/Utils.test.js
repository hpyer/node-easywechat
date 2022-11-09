const BaseTestUnit = require('../BaseTestUnit');
const HttpClient = require('../../dist/Core/HttpClient/HttpClient')
const { Pay } = require('../../dist/');
const Utils = require('../../dist/Pay/Utils');
const Merchant = require('../../dist/Pay/Merchant');

class TestUnit extends BaseTestUnit {

  test() {

    let merchantConfig = {
      mch_id: 'mock-mch-id',
      certificate: '../temp/test_public_key.pem',
      private_key: '../temp/test_private_key.pem',
      v2_secret_key: 'mock-v2-secret-key',
      secret_key: 'mock-secret-key',
      platform_certs: [],
    };
    let merchant = new Merchant(
      merchantConfig.mch_id,
      merchantConfig.private_key,
      merchantConfig.certificate,
      merchantConfig.secret_key,
      merchantConfig.v2_secret_key,
      merchantConfig.platform_certs,
    );

    it('Should return correctly signature', async () => {

      let params = {
        appId: 'mock-appid',
        timeStamp: 1601234567,
        nonceStr: 'mock-nonce',
        package: "prepay_id=mock-prepay-id",
        signType: 'MD5',
      };

      let utils = new Utils(merchant);

      this.assert.deepStrictEqual(utils.createV2Signature(params), 'C52D6B09E8A039D6E8696A014BB37160');

      params.signType = 'HMAC-SHA256';
      this.assert.deepStrictEqual(utils.createV2Signature(params), 'BAC9240577E86EDC7753264E502196C61F78F24777E9E7CCE82A7BD97F906EED');
    });

  }
}

new TestUnit('Pay/Utils');