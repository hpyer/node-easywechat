const BaseTestUnit = require('../BaseTestUnit');
const Authorization = require('../../dist/OpenWork/Authorization');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should get correct corpid', () => {
      let authorization = new Authorization({
        auth_corp_info: {
          corpid: 'fake-corpid',
        },
      });
      this.assert.strictEqual(authorization.getCorpId(), 'fake-corpid');
    });

    it('Should get correct access_token', () => {
      let authorization = new Authorization({
        access_token: 'fake-access_token',
        auth_corp_info: {
          corpid: 'fake-corpid',
        },
      });
      this.assert.strictEqual(authorization.get('access_token'), 'fake-access_token');
    });

  }
}

new TestUnit('OpenWork/Authorization');
