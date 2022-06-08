'use strict';

import merge from 'merge';
import Application from './Application';

class Utils
{
  constructor(protected app: Application) {}

  async buildJsSdkConfig(url: string, jsApiList: string[] = [], openTagList: string[] = [], debug: boolean = false): Promise<Record<string, any>>
  {
    return merge({
      jsApiList,
      openTagList,
      debug,
    }, await this.app.getTicket().configSignature(url));
  }

};

export = Utils;
