'use strict';

import PaymentBaseClient from '../../Payment/Core/BaseClient';
import { merge, makeSignature, inArray, isString, buildXml, parseXml } from '../../Core/Utils';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import RSA from '../../Core/RSA';
import Fs from 'fs';
import FormData from 'form-data';

class BaseClient extends PaymentBaseClient
{

  httpUpload(url: string, files: object = {}, form: object = {}, query: object = {}, returnResponse: boolean = false): Promise<any>
  {
    let formData = new FormData;

    for (let name in files) {
      if (isString(files[name])) {
        formData.append(name, Fs.createReadStream(files[name]));
      }
      else {
        formData.append(name, files[name]);
      }
    }

    for (let name in form) {
      formData.append(name, form[name]);
    }

    return this.doRequest({
      url,
      data: formData,
      method: 'POST',
      params: query,
    });
  }

  protected async request(endpoint: string, params: object = {}, method: string = 'post', options: AxiosRequestConfig = {}, returnResponse: boolean = false): Promise<AxiosResponse<any>>
  {
    let base = {
      mch_id: this.app.config.mch_id,
    };

    let localParams: object = merge(merge(base, this.prepends()), params);

    let secretKey = await this.app.getKey();
    localParams['sign'] = makeSignature(localParams, secretKey, localParams['sign_type'] || 'MD5');

    let payload = merge(merge({}, options), {
      url: endpoint,
      method,
      responseType: 'text',
      data: buildXml(localParams)
    });

    let response = await this.doRequest(payload);
    if (returnResponse) {
      return response;
    }
    else {
      let body = response.data;
      try {
        body = await parseXml(body);
      }
      catch (e) { }
      return body;
    }
  }

  protected processParams(params: object): object
  {
    let serial_no = this.app.config.serial_no;
    if (serial_no == undefined || serial_no == null) {
      throw new Error('Config `serial_no` connot be empty.');
    }

    let certificate = this.app.config.certificate;
    if (certificate == undefined || certificate == null) {
      throw new Error('Config `certificate` connot be empty.');
    }

    let rsa = new RSA;
    rsa.setPublicKey(certificate);

    let newParams = merge({}, params);
    newParams['cert_sn'] = serial_no;
    let sensitive_fields = this.getSensitiveFieldsName();
    for (let k in newParams) {
      if (inArray(k, sensitive_fields)) {
        newParams[k] = rsa.encrypt(newParams[k]);
      }
    }
    return newParams;
  }

  protected getSensitiveFieldsName(): string[]
  {
    return [
      'id_card_name',
      'id_card_number',
      'account_name',
      'account_number',
      'contact',
      'contact_phone',
      'contact_email',
      'legal_person',
      'mobile_phone',
      'email',
    ];
  }

};

export default BaseClient;
