'use strict';

import * as Merge from 'merge';
import * as Xml2js from 'xml2js';
import HasAttributesMixin from '../Mixins/HasAttributesMixin';

export class Message extends HasAttributesMixin
{
  static TEXT: number = 2;
  static IMAGE: number = 4;
  static VOICE: number = 8;
  static VIDEO: number = 16;
  static SHORT_VIDEO: number = 32;
  static LOCATION: number = 64;
  static LINK: number = 128;
  static DEVICE_EVENT: number = 256;
  static DEVICE_TEXT: number = 512;
  static FILE: number = 1024;
  static TEXT_CARD: number = 2048;
  static TRANSFER: number = 4096;
  static EVENT: number = 1048576;
  static MINIPROGRAM_PAGE: number = 2097152;
  static ALL: number = Message.TEXT | Message.IMAGE | Message.VOICE | Message.VIDEO | Message.SHORT_VIDEO | Message.LOCATION | Message.LINK
    | Message.DEVICE_EVENT | Message.DEVICE_TEXT | Message.FILE | Message.TEXT_CARD | Message.TRANSFER | Message.EVENT | Message.MINIPROGRAM_PAGE;


  protected type: string;
  protected id: number;
  protected to: string;
  protected from: string;
  protected properties: Array<string> = [];
  protected jsonAliases: object = {};

  constructor(attributes: object = {})
  {
    super();
    this.setAttributes(attributes);
  }

  getType(): string
  {
    return this.type;
  }

  setType(type: string): void
  {
    this.type = type;
  }

  transformToXml(appends: object = {}, returnAsObject: boolean = false): any
  {
    let data = {
      xml: Merge({ MsgType: this.getType() }, this.toXmlArray(), appends)
    };

    if (returnAsObject) {
      return data;
    }
    let XmlBuilder = new Xml2js.Builder({
      cdata: true,
      renderOpts: {
        pretty: false,
        indent: '',
        newline: '',
      }
    });
    return XmlBuilder.buildObject(data);
  }

  toXmlArray(): void
  {
    throw new Error(`Class "${this.constructor.name}" cannot support transform to XML message.`);
  }

  transformForJsonRequestWithoutType(appends: object = {}): object
  {
    return this.transformForJsonRequest(appends, false);
  }

  transformForJsonRequest(appends: object = {}, withType: boolean = true): object
  {
    if (!withType) {
      return this.propertiesToObject({}, this.jsonAliases);
    }
    let messageType = this.getType();
    let data = Merge({
      msgtype: messageType
    }, appends);

    data[messageType] = Merge(data[messageType] || {}, this.propertiesToObject({}, this.jsonAliases));

    return data;
  }

  propertiesToObject(data: object, aliases: object = null): object
  {
    this.checkRequiredAttributes();

    for (let property in this.attributes) {
      if (this.attributes[property] == null && !this.isRequired(property)) {
        continue;
      }
      let alias = aliases && aliases[property] ? aliases[property] : null;
      data[alias ? alias : property] = this.get(property);
    }

    return data;
  }

};
