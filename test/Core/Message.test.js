const BaseTestUnit = require('../BaseTestUnit');
const Message = require('../../dist/Core/Message');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should get attribute from the instance of `Message` without error.', async () => {
      let message = new Message({
        test: 1,
      });

      this.assert.strictEqual(message.test, 1);
      this.assert.strictEqual(message['test'], 1);
    });

    it('Should return corrected string via the method `toJson()`.', async () => {
      let message = new Message({
        mock: 1,
      });

      this.assert.strictEqual(message.toJson(), '{"mock":1}');
    });

  }
}

new TestUnit('Core/Message');
