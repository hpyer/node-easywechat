'use strict';

import { applyMixins } from "../Support/Utils";
import RequestInterface from "./Contracts/RequestInterface";
import MessageMixin from "./Minxins/MessageMixin";
import RequestMixin from "./Minxins/RequestMixin";

class Request implements RequestInterface
{
  constructor(method: string, uri: string, headers: Record<string, any> = {}, content: any = null, version: string = '1.1')
  {
    this.withMethod(method)
      .withUri(uri)
      .setHeaders(headers)
      .withBody(content)
      .withProtocolVersion(version);
  }

};

interface Request extends MessageMixin, RequestMixin { };

applyMixins(Request, [MessageMixin, RequestMixin]);

export = Request;
