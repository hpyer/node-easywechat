'use strict';

import BaseApplication from '../../../OfficialAccount/Application';
import MiniProgramClient from './MiniProgram/MiniProgramClient';

export default class OfficialAccount extends BaseApplication
{

  public mini_program: MiniProgramClient = null;

  constructor(config: Object = {}, prepends: Object = {}, id: String = null)
  {
    super(config, prepends, id);

    this.registerProviders();
  }

  registerProviders(): void
  {
    this.registerCommonProviders();

    this.offsetSet('mini_program', function (app) {
      return new MiniProgramClient(app);
    });
  }

};
