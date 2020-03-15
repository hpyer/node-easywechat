'use strict';

import MiniProgram from '../../../MiniProgram/Application';

export default class Application extends MiniProgram
{
  constructor(config: Object = {}, prepends: Object = {}, id: String = null)
  {
    super(config, prepends, id);

    let providers = [
      'OpenPlatform/Authorizer/Aggregate',
      'OpenPlatform/Authorizer/MiniProgram/Code',
      'OpenPlatform/Authorizer/MiniProgram/Domain',
      'OpenPlatform/Authorizer/MiniProgram/Account',
      'OpenPlatform/Authorizer/MiniProgram/Setting',
      'OpenPlatform/Authorizer/MiniProgram/Tester',
    ];
    super.registerProviders(providers);
  }

};
