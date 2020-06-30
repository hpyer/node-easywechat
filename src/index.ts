'use strict';

import { strStudly } from './Core/Utils';
import OfficialAccount from './OfficialAccount/Application';
import BaseService from './BaseService/Application';
import MiniProgram from './MiniProgram/Application';
import OpenPlatform from './OpenPlatform/Application';
import Payment from './Payment/Application';
import CacheInterface from './Core/Contracts/CacheInterface';
import FinallResult from './Core/Decorators/FinallResult';
import TerminateResult from './Core/Decorators/TerminateResult';
import Request from './Core/Http/Request';
import Response from './Core/Http/Response';
import StreamResponse from './Core/Http/StreamResponse';
import * as Messages from './Core/Messages';

const EasyWechat = {
  Factory: {
    OfficialAccount,
    BaseService,
    MiniProgram,
    OpenPlatform,
    Payment,

    getInstance: function (service: string, config: object = {}): any {
      try {
        service = strStudly(service);
        let applicationClass = this[service];
        return new applicationClass(config);
      }
      catch (e) {
        console.log(e)
      }
    },
  },

  CacheInterface,
  Decorator: {
    FinallResult,
    TerminateResult,
  },
  Http: {
    Request,
    Response,
    StreamResponse,
  },
  Messages,
};

export = EasyWechat;
