'use strict';

import BaseApplication from '../../../OfficialAccount/Application';
import MiniProgramClient from './MiniProgram/MiniProgramClient';

export default class OfficialAccount extends BaseApplication
{

  public mini_program: MiniProgramClient;

  constructor(config: Object = {}, prepends: Object = {}, id: String = null)
  {
    super(config, prepends, id);

    this.registerExtraProviders();
  }

  registerExtraProviders(): void
  {
    this.offsetSet('mini_program', function (app) {
      return new MiniProgramClient(app);
    });
  }

};
