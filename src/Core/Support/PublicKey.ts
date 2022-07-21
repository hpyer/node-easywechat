
import fs from 'fs';
import { X509Certificate } from 'crypto';

export class PublicKey
{

  constructor(public certificate: string)
  {
    if (fs.existsSync(certificate)) {
      this.certificate = fs.readFileSync(certificate, 'utf8') || '';
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
   * 转为字符串
   * @returns
   */
  toString()
  {
    return this.certificate;
  }
}
