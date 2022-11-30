
import fs from 'fs';
import { X509Certificate } from 'crypto';

export class PrivateKey
{
  protected key: Buffer;

  constructor(key: string, protected passphrase?: string)
  {
    if (fs.existsSync(key)) {
      this.key = fs.readFileSync(key) || Buffer.from('');
    }
  }

  /**
   * 获取私钥内容
   * @returns
   */
  getKey()
  {
    return this.key;
  }

  /**
   * 获取密码
   * @returns
   */
  getPassphrase()
  {
    return this.passphrase;
  }

  /**
   * 转为字符串
   * @returns
   */
  toString()
  {
    return this.getKey();
  }
}
