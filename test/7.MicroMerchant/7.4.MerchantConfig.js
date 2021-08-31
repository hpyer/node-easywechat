
const Path = require('path');
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    it('setFollowConfig()', async () => {
      this.mockResponse('mock-result');

      let sub_appid = '121n3kjn2j3nnjknj';
      let subscribe_appid = '1222323dssfsd';
      let resp = await this.mockRequest('setFollowConfig', sub_appid, subscribe_appid);

      this.assert.strictEqual(resp, 'mock-result');
    });

    it('bindAppId()', async () => {
      this.mockResponse('mock-result');

      let sub_appid = 'fasdfa343443r43';
      let appid = 'sdasdfasdf23232';
      let sub_mch_id = '232423423';
      let resp = await this.mockRequest('bindAppId', sub_appid, appid, sub_mch_id);

      this.assert.strictEqual(resp, 'mock-result');
    });

    it('getConfig()', async () => {
      this.mockResponse('mock-result');

      let sub_mch_id = '232423423';
      let appid = '232423423';
      let resp = await this.mockRequest('getConfig', sub_mch_id, appid);

      this.assert.strictEqual(resp, 'mock-result');
    });

  }
}

new TestUnit('MicroMerchant', 'merchantConfig', {
  mch_id: 'mock-mch_id',
  key: 'mock-key123456789101234567891011',
  apiv3_key: 'mock-apiv3_key123456789101234567891011',
  cert_path: Path.resolve(__dirname, '../temp/test.pfx'),
});
