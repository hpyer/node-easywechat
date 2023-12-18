
import fs from 'fs';
import { X509Certificate } from 'crypto';

export class PublicKey
{

  protected certificate: Buffer;
  protected serialNo: string;

  constructor(certificate: string, serialNo: string = '')
  {
    if (serialNo) {
      if (!certificate) {
        throw new Error('Invalid PublicKey content');
      }
      this.certificate = Buffer.from(certificate);
      this.serialNo = serialNo;
    }
    else if (fs.existsSync(certificate)) {
      this.certificate = fs.readFileSync(certificate) || Buffer.from('');
    }
    else {
      throw new Error('Fail to read PublicKey file');
    }
  }

  /**
   * 获取公钥的序列号
   * @returns
   */
  getSerialNo()
  {
    if (!this.serialNo) {
      try {
        this.serialNo = new X509Certificate(this.certificate).serialNumber;
      }
      catch (e) {
        throw new Error('Read the $certificate failed, please check it whether or nor correct');
      }
    }
    return this.serialNo;
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

  /**
   * 通过内容创建实例
   * @param content 证书内容
   * @param serialNo 证书序列号
   */
  static createByCertificateContent(content: string, serialNo: string) {
    return new PublicKey(content, serialNo);
  }
}
