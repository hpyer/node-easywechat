'use strict';

import merge from "merge";
import Encryptor from "../Encryptor";
import ResponseInterface from "../Http/Contracts/ResponseInterface";
import Response from "../Http/Response";
import Message from "../Message";
import { buildXml, getTimestamp } from "../Support/Utils";

class ResponseXmlMessageMixin
{
  /**
   * 转化为回复消息
   * @returns
   */
  async transformToReply(response: any, message: Message, encryptor: Encryptor = null): Promise<ResponseInterface>
  {
    if (!response || response === true) {
      return new Response(200, {}, 'success');
    }

    let attributes = merge.recursive({
      ToUserName: message.FromUserName,
      FromUserName: message.ToUserName,
      CreateTime: getTimestamp(),
    }, await this.normalizeResponse(response));

    return this.createXmlResponse(attributes, encryptor);
  }

  protected async normalizeResponse(response: any): Promise<Record<string, any>> {
    if (typeof response === 'function') {
      response = await response();
    }

    if (typeof response === 'object') {
      if (!response['MsgType']) {
        throw new Error('`MsgType` cannot be empty.');
      }

      return response;
    }

    if (typeof response === 'string' || typeof response === 'number') {
      return {
        MsgType: 'text',
        Content: response,
      }
    }

    throw new Error(`Invalid Response "${response.toString()}".`);
  }

  protected createXmlResponse(attributes: Record<string, any>, encryptor: Encryptor = null): ResponseInterface
  {
    let xml = buildXml(attributes);

    return new Response(
      200,
      {
        'Content-Type': 'application/xml'
      },
      encryptor ? encryptor.encrypt(xml) : xml
    );
  }

};

export = ResponseXmlMessageMixin;
