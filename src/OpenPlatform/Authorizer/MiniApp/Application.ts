
import ConfigInterface from '../../../Core/Contracts/ConfigInterface';
import BaseApplication from '../../../MiniApp/Application';
import ComponentApplication from '../../Application';
import { MiniAppConfig } from '../../../Types/global';
import Utils from './Utils';

class Application extends BaseApplication {
  protected componentApp: ComponentApplication = null;
  protected utils: Utils = null;
  constructor(config: ConfigInterface | MiniAppConfig, componentApp: ComponentApplication) {
    super(config);
    this.componentApp = componentApp;
  }

  getComponentApp() {
    return this.componentApp;
  }

  setUtils(utils: Utils): void {
    this.utils = utils;
  }
  getUtils(): Utils {
    if (!this.utils) {
      this.utils = new Utils(this);
    }
    return this.utils;
  }

};

export = Application;
