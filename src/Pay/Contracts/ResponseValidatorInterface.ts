'use strict';

import ResponseInterface from "../../Core/Http/Contracts/ResponseInterface";

abstract class ResponseValidatorInterface
{
  /**
   * 验证响应对象
   * @returns
   */
  validate(response: ResponseInterface): void {}

};

export = ResponseValidatorInterface;
