
const BaseClientTest = require('../BaseClientTest');

let client = new BaseClientTest('BaseService', {
  app_id: 'abc@123',
});

client.run('content_security', function () {

  it('checkText()', async () => {
    this.mockResponse('mock-result');

    let resp = await this.mockRequest('checkText', 'foo');

    this.assert.strictEqual(resp, 'mock-result');
  });

  it('checkImage()', async () => {
    this.mockResponse('mock-result');

    let resp = await this.mockRequest('checkImage', 'file_path');

    this.assert.strictEqual(resp, 'mock-result');
  });

});
