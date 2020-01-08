'use strict';

import Merge from 'merge';
import { isArray, inArray } from "../Utils";

export default class HasAttributesMixin
{
  protected attributes: object = {};

  protected required: Array<string> = [];

  setAttributes(attributes: object): HasAttributesMixin
  {
    this.attributes = attributes;

    return this;
  }

  setAttribute(name: string, value: string): HasAttributesMixin
  {
    this.attributes[name] = value;

    return this;
  }

  set(name: string, value: string): HasAttributesMixin
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

  merge(attributes: object): HasAttributesMixin
  {
    this.attributes = Merge(this.attributes, attributes);

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
