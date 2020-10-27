const assert = require('assert');

const EasyWechat = require('../../dist');

describe('Factory', function () {

  describe('OfficialAccount', function () {
    let config = {
      app_id: 'corpid@123',
    };
    let app = new EasyWechat.Factory.OfficialAccount(config);
    let appFromMake = EasyWechat.Factory.getInstance('OfficialAccount', config);

    it('Should instance of EasyWechat.Factory.OfficialAccount', function () {
      assert.strictEqual(app instanceof EasyWechat.Factory.OfficialAccount, true);
      assert.strictEqual(appFromMake instanceof EasyWechat.Factory.OfficialAccount, true);
    });

    it('Should app_id of instance is ' + config.app_id, function () {
      assert.strictEqual(app.getConfig().app_id, config.app_id);
      assert.strictEqual(appFromMake.getConfig().app_id, config.app_id);
    });
  });

  describe('MiniProgram', function () {
    let config = {
      app_id: 'corpid@456',
    };
    let app = new EasyWechat.Factory.MiniProgram(config);

    it('Should instance of EasyWechat.Factory.MiniProgram', function () {
      assert.strictEqual(app instanceof EasyWechat.Factory.MiniProgram, true);
    });

    it('Should app_id of instance is ' + config.app_id, function () {
      assert.strictEqual(app.getConfig().app_id, config.app_id);
    });
  });

  describe('Payment', function () {
    let config = {
      app_id: 'corpid@789',
    };
    let app = new EasyWechat.Factory.Payment(config);

    it('Should instance of EasyWechat.Factory.Payment', function () {
      assert.strictEqual(app instanceof EasyWechat.Factory.Payment, true);
    });

    it('Should app_id of instance is ' + config.app_id, function () {
      assert.strictEqual(app.getConfig().app_id, config.app_id);
    });
  });

  describe('OpenPlatform', function () {
    let config = {
      app_id: 'corpid@111',
    };
    let app = new EasyWechat.Factory.OpenPlatform(config);

    it('Should instance of EasyWechat.Factory.OpenPlatform', function () {
      assert.strictEqual(app instanceof EasyWechat.Factory.OpenPlatform, true);
    });

    it('Should app_id of instance is ' + config.app_id, function () {
      assert.strictEqual(app.getConfig().app_id, config.app_id);
    });
  });

});
