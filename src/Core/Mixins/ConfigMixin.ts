'use strict';

import ConfigInterface from "../Contracts/ConfigInterface";

class ConfigMixin
{
  protected config: ConfigInterface;

  /**
   * 获取配置实例
   * @returns
   */
  getConfig(): ConfigInterface
  {
    return this.config;
  }

  /**
   * 设置配置实例
   * @param config
   * @returns
   */
  setConfig(config: ConfigInterface): this
  {
    this.config = config;

    return this;
  }

};

export = ConfigMixin;
