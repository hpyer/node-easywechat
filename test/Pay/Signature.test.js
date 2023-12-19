const BaseTestUnit = require('../BaseTestUnit');
const Signature = require('../../dist/Pay/Signature');
const Merchant = require('../../dist/Pay/Merchant');
const Path = require('path');

class TestUnit extends BaseTestUnit {

  test() {

    let merchantConfig = {
      mch_id: 'mock-mch-id',
      certificate: Path.resolve(__dirname, '../temp/test_rsa_cert.pem'),
      private_key: Path.resolve(__dirname, '../temp/test_rsa_private.key'),
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

    const signature = new Signature(merchant);

    it('Should create V3 header correctly', async () => {
      let method = 'GET';
      let url = '/v3/certificates';
      let timestamp = 1554208460;
      let nonce = 'abcdef0123456789';
      let payload = {};
      let header = signature.createHeader(method, url, payload, nonce, timestamp);

      this.assert.strictEqual(header, `WECHATPAY2-SHA256-RSA2048 mchid="${merchantConfig.mch_id}",nonce_str="${nonce}",timestamp="${timestamp}",serial_no="${merchant.getCertificate().getSerialNo() }",signature="mluKy7aU8/6695+NHaqSau8Ny5e7EsIwro5qily4e9583XEeMvkZVMaH48JfPLaRKfetG13UT3vZCjbWblivpAYe5PuC1j8tmANyFFwMVKKmKa3IRYdLKt9TSY4JWeZ3RhnsPqGWVHdOANth7IGTAYfzFBEBi/QbdXhno0U9Ad1QENjPDuj6iIDXtaNDwx0W5cE8xwlYCvKimF3Icr5/6hkBGRoh5g3prNn5ttX9IjdbZLT5vmqeIl/jmZHOhO2CpEO55nqM/gZmb7M7DthEMqS9s6VouprOPwUs4ma/R/bZXr6Hhjzr27UPbVS/yYlAyYNHTw1xKQMLGKUVsZnzkw=="`);
    });

    it('Should create V3 header (with params and data) correctly', async () => {
      let method = 'GET';
      let url = '/v3/certificates';
      let timestamp = 1554208460;
      let nonce = 'abcdef0123456789';
      let payload = {
        params: { foo1: 'bar1' },
        data: { foo2: 'bar2' },
      };
      let header = signature.createHeader(method, url, payload, nonce, timestamp);

      this.assert.strictEqual(header, `WECHATPAY2-SHA256-RSA2048 mchid="${merchantConfig.mch_id}",nonce_str="${nonce}",timestamp="${timestamp}",serial_no="${merchant.getCertificate().getSerialNo()}",signature="KpwfPLiitG4+3M32lXfquJ2PHfnqScp2jzCPTZ/DyORNJ6AcaoVlb3Be0tXBUTU/e4Dkb71seb6hLWAr9dcOWQ+UAWYYjfHAuVzUQPpXtPZg0SIIn8/iBUKHD42vrjF5t8ksbKXBco4on5eybeU4FI0ff95ova38u18GHBThUoE5p7dLLUUOuvNqgAAdLrCigzWI/c/gpaAOuvogB7cHChbuVXEyYqhKOdKlwOSPPz0dpaS7bGx6aJTU+eLjiBZ6fWrwBignAi+yJxUe7bRAnWPICLx7VTbuhuISsFeP4qC/gXEy/wmFdMMRVMlTESu2G+eK0ObNa6h7Hfj1Zmk+rg=="`);
    });

  }
}

new TestUnit('Pay/Signature');
