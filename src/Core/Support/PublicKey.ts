
import fs from 'fs';
import { X509Certificate } from 'crypto';

export class PublicKey
{

  protected certificate: Buffer;

  constructor(certificate: string)
  {
    if (fs.existsSync(certificate)) {
      this.certificate = fs.readFileSync(certificate) || Buffer.from('');
    }
  }

  /**
   * 获取公钥的序列号
   * @returns
   */
  getSerialNo()
  {
    try {
      return new X509Certificate(this.certificate).serialNumber;
    }
    catch (e) {
      throw new Error('Read the $certificate failed, please check it whether or nor correct');
    }
  }

  /**
   * 获取证书内容
   * @returns
   */
  getValue()
  {
    return this.certificate;
  }

  /**
   * 转为字符串
   * @returns
   */
  toString()
  {
    return this.certificate.toString();
  }
}
