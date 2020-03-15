'use strict';

import OfficialAccount from '../../../OfficialAccount/Application';

export default class Application extends OfficialAccount
{
  constructor(config: Object = {}, prepends: Object = {}, id: String = null)
  {
    super(config, prepends, id);

    let providers = [
      'OpenPlatform/Authorizer/Aggregate',
      'OpenPlatform/Authorizer/OfficialAccount/MiniProgram',
    ];
    super.registerProviders(providers);
  }

};
