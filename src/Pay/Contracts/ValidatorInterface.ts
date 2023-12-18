'use strict';

import Request from "../../Core/Http/Request";

abstract class ValidatorInterface {
  /**
   * 验证请求是否正确
   */
  validate(request: Request): boolean { return true; }
};

export = ValidatorInterface;
