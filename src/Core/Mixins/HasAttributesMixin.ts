'use strict';

import merge from 'merge';
import ObjectAccessInterface from '../Contracts/ObjectAccessInterface';

class HasAttributesMixin implements ObjectAccessInterface
{
  /**
   * 属性对象
   */
  protected attributes: Record<string, any> = {};

  /**
   * 返回对象格式
   * @returns
   */
  toObject(): Record<string, any> {
    return this.attributes;
  }

  /**
   * 返回json字符串
   * @returns
   */
  toJson(): string {
    return JSON.stringify(this.attributes);
  }

  /**
   * 判断键是否存在
   * @param key
   * @returns
   */
  has(key: string): boolean {
    return this.attributes[key] !== undefined;
  }

  /**
   * 合并属性对象
   * @param attributes 新属性对象
   * @returns
   */
  merge(attributes: Record<string, any>): this {
    this.attributes = merge.recursive(true, this.attributes, attributes);
    return this;
  }

  /**
   * 设置单个属性值
   * @param key
   * @param value
   */
  set(key: string, value: any): void {
    this.attributes[key] = value;
  }

  /**
   * 获取单个属性值
   * @param key
   * @returns
   */
  get(key: string): any {
    return this.attributes[key] || null;
  }

  offsetExists(key: any): boolean {
    return this.attributes[key] !== undefined;
  }
  offsetGet(key: any) {
    return this.attributes[key];
  }
  offsetSet(key: any, value: any): void {
    this.attributes[key] = value;
  }
  offsetUnset(key: any): void {
    this.attributes[key] = undefined;
    delete this.attributes[key];
  }
};

export = HasAttributesMixin;
