'use strict';

import Request from "../../Core/Http/Request";
import Message from "../Message";

abstract class ValidatorInterface {
  /**
   * 验证请求是否正确
   */
  validate(request: Request): Promise<boolean> { return Promise.resolve(true); }
  /**
   * 验证请求是否正确（v2）
   */
  validateV2(message: Message): boolean { return true; }
};

export = ValidatorInterface;
