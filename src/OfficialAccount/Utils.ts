'use strict';

import merge from 'merge';
import Application from './Application';

class Utils
{
  protected app: Application = null;

  constructor(app: Application)
  {
    this.app = app;
  }

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
