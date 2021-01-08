'use strict';

import Xml2js from 'xml2js';
import { merge, isArray, inArray } from "../Utils";

export class Message
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
      xml: merge(merge({ MsgType: this.getType() }, this.toXmlArray()), appends)
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
    let data = merge({
      msgtype: messageType
    }, appends);

    data[messageType] = merge(data[messageType] || {}, this.propertiesToObject({}, this.jsonAliases));

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



  protected attributes: object = {};

  protected required: Array<string> = [];

  setAttributes(attributes: object): this
  {
    this.attributes = attributes;

    return this;
  }

  setAttribute(name: string, value: string): this
  {
    this.attributes[name] = value;

    return this;
  }

  set(name: string, value: string): this
  {
    this.setAttribute(name, value);

    return this;
  }

  getAttribute(name: string, defaultValue: any = null): any
  {
    return this.attributes[name] || defaultValue;
  }

  get(name: string, defaultValue: any = null): any
  {
    return this.getAttribute(name, defaultValue);
  }

  has(name: string): boolean
  {
    for (let k in this.attributes) {
      if (k === name) {
        return true;
      }
    }
    return false;
  }

  merge(attributes: object): this
  {
    this.attributes = merge(merge({}, this.attributes), attributes);

    return this;
  }

  only(keys: Array<string>): object
  {
    let attributes: object = {};
    for (let k in this.attributes) {
      keys.forEach(key => {
        if (k === key) {
          attributes[k] = this.attributes[k];
        }
      });
    }

    return attributes;
  }

  all(): object
  {
    this.checkRequiredAttributes();

    return this.attributes;
  }

  getRequired(): Array<string>
  {
    return this.required && isArray(this.required) ? this.required : [];
  }

  isRequired(attribute): boolean
  {
    return inArray(attribute, this.getRequired(), true);
  }

  protected checkRequiredAttributes (): void
  {
    this.getRequired().forEach(attribute => {
      if (attribute == null) {
        throw new Error(`"${attribute}" cannot be empty.`);
      }
    });
  }

};
