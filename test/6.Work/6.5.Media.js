
const EasyWechat = require('../../dist/');
const BaseClientTest = require('../BaseClientTest');
const Path = require('path');

class TestUnit extends BaseClientTest {

  test() {

    it('media.get()', async () => {
      // 错误时
      let media_id = 'invalid-media-id';
      this.mockResponse({
        "errcode": 40007,
        "errmsg": "invalid media_id"
      });
      let res = await this.mockRequest('get', media_id);
      this.assert.strictEqual(res.errcode, 40007);
      this.assert.strictEqual(res.errmsg, 'invalid media_id');

      // 正确时
      media_id = 'valid-media-id';
      this.mockResponse('media_data', {
        'content-disposition': 'attachment; filename="MEDIA_ID.jpg"'
      });
      res = await this.mockRequest('get', media_id);

      this.assert.strictEqual(res instanceof EasyWechat.Http.StreamResponse, true);
    });

    it('media.uploadImage()', async () => {
      this.mockResponse({
        "errcode": 0,
        "errmsg": "",
        "type": "image",
        "media_id": "fake-media-id",
        "created_at": "1380000000"
      });

      let res = await this.mockRequest('uploadImage', Path.resolve(__dirname, '../temp/blank.png'));

      this.assert.strictEqual(res.errcode, 0);
      this.assert.strictEqual(res.errmsg, '');
      this.assert.strictEqual(res.media_id, 'fake-media-id');
    });

  }
}

new TestUnit('Work', 'media', {
  corp_id: 'abc@123',
  secret: '123456',
  file_cache: {
    path: './test/temp/',
  },
});
