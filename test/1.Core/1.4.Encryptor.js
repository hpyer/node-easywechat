const assert = require('assert');

const Encryptor = require('../../dist/Core/Encryptor').default;
const { parseXml, buildXml } = require('../../dist/Core/Utils');

describe('Encryptor', function () {

  function getEncryptor() {
    return new Encryptor('wxb11529c136998cb6', 'pamtest', 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFG');
  }

  it('Should the parse encrypted message successfully', async function () {
    let encrypted = "<xml>\n    <ToUserName><![CDATA[asdasdasd]]></ToUserName>\n    <Encrypt><![CDATA[rTNFcsut4LfGuAFKEUVVpwcaCOTJzOd9twZdIW910jb3k+iicx2uvhttIZ3Qg9Qgty3BEF2xbOrz6boTfb30dMomcgrkTqdFPwnhqbk+kIQ7rZiwny9D7NUrTgA5kpX3KsZvrXzUZyP2x9YOlxbgm572lmxKvM7HAQQhIQ/p6HBmoY30bGXFK0BtIu1pW9TjhOYrLQoU18nWYjWqDA1ynkmOytpv7QRI1P1+0NoxL0q2zO1DgeSvnE8CZGo/o5Ap/WHK5W2RAsinpzN4/LjPnmB6U01I5XCoJoC0GK/yMZycd2Oh8Nq6+wBkC1U85oy0ktOY4nLvsQMLrourmMGdZHuTbqpeJ8Ao/5PRYJ+WBvRUwPfGKBL2+2IKZF49vAJqkcGWSHGE76ZN2erXeuNazf/o9o3lIE3q739o4c8t9QGPe31GT2Go/rOz1BsrASwvauNulCh+++yz+CQzBIuikA==]]></Encrypt>\n</xml>\n";
    let encrypt = await parseXml(encrypted);
    let decrypted = getEncryptor().decrypt(encrypt['Encrypt'], '4f3ad57b6989f09f4eb392acce4f9e93942ed890', '260774613', '1458300676');
    decrypted = await parseXml(decrypted);
    assert.strictEqual(decrypted['ToUserName'], 'asdasdasd');
    assert.strictEqual(decrypted['FromUserName'], 'asdasdasdsadasd');
    assert.strictEqual(decrypted['CreateTime'], '1234567898');
    assert.strictEqual(decrypted['Content'], 'hello');
  });

  it('Should the same with encrypt and decrypt', async function () {
    let raw = {
      ToUserName: '测试中文',
      FromUserName: 'gh_7f083739789a',
      CreateTime: '1407743423',
      MsgType: 'video',
      Video: {
        MediaId: 'eYJ1MbwPRJtOvIEabaxHs7TX2D-HV71s79GUxqdUkjm6Gs2Ed1KF3ulAOA9H1xG0',
        Title: 'testCallBackReplyVideo',
        Description: 'testCallBackReplyVideo',
      },
    };
    let xml = buildXml(raw).replace('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>', '');
    let encryptor = getEncryptor();
    let encrypted = encryptor.encrypt(xml, 'xxxxxx', '1407743423');
    let obj = await parseXml(encrypted);
    assert.strictEqual(obj['TimeStamp'], '1407743423');
    assert.strictEqual(obj['Nonce'], 'xxxxxx');
    assert.strictEqual(typeof obj['Encrypt'] == 'undefined', false);

    let decrypted = encryptor.decrypt(obj['Encrypt'], obj['MsgSignature'], obj['Nonce'], obj['TimeStamp']);
    let parsed = await parseXml(decrypted);
    assert.deepStrictEqual(parsed, raw);
  });

});
