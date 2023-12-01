'use strict';

import ResponseInterface from "../Http/Contracts/ResponseInterface";
import DecryptXmlMessageMixin from "../Mixins/DecryptXmlMessageMixin";
import HandlersMixin from "../Mixins/HandlersMixin";
import ResponseXmlMessageMixin from "../Mixins/ResponseXmlMessageMixin";
import ServerRequestMixin from "../Mixins/ServerRequestMixin";
import { applyMixins } from "../Support/Utils";

abstract class ServerInterface
{
  constructor () {
    this.handlers = [];
  }

  /**
   * 处理消息
   */
  async serve(): Promise<ResponseInterface> { return null; }
};

interface ServerInterface extends HandlersMixin, DecryptXmlMessageMixin, ResponseXmlMessageMixin, ServerRequestMixin { };

applyMixins(ServerInterface, [HandlersMixin, DecryptXmlMessageMixin, ResponseXmlMessageMixin, ServerRequestMixin]);

export = ServerInterface;
