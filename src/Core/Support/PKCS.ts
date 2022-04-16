'use strict';

class PKCS7
{
  /**
   * 对需要加密的明文进行填充补位
   * @param text 需要进行填充补位操作的明文
   * @param blockSize 补位大小，默认：32
   */
  static pad(text: string | Buffer, blockSize: number = 32): Buffer {
    let buf: Buffer = null;
    if (Buffer.isBuffer(text)) {
      buf = text;
    }
    else {
      buf = Buffer.from(text);
    }
    //计算需要填充的位数
    let amountToPad = blockSize - (buf.length % blockSize);

    let result = Buffer.alloc(amountToPad);
    result.fill(amountToPad);

    return Buffer.concat([buf, result]);
  }

  /**
   * 删除解密后明文的补位字符
   * @param text 解密后的明文
   * @param blockSize 补位大小，默认：32
   */
  static unpad(text: string | Buffer, blockSize: number = 32): Buffer {
    let buf: Buffer = null;
    if (Buffer.isBuffer(text)) {
      buf = text;
    }
    else {
      buf = Buffer.from(text);
    }
    var pad = buf[buf.length - 1];

    if (pad < 1 || pad > blockSize) {
      pad = 0;
    }

    return buf.slice(0, buf.length - pad);
  }
}

export = PKCS7;
