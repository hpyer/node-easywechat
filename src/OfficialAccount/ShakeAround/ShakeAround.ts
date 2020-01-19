'use strict';

import BaseAccessToken from '../../Core/BaseAccessToken';
import BaseApplication from '../../Core/BaseApplication';
import BaseClient from "../../Core/BaseClient";
import Client from "./Client";
import DeviceClient from "./DeviceClient";
import PageClient from "./PageClient";
import MaterialClient from "./MaterialClient";
import GroupClient from "./GroupClient";
import RelationClient from "./RelationClient";
import StatsClient from "./StatsClient";

export default class ShakeAround extends Client
{
  client: BaseClient;
  device: BaseClient;
  page: BaseClient;
  material: BaseClient;
  group: BaseClient;
  relation: BaseClient;
  stats: BaseClient;

  constructor(app: BaseApplication, accessToken: BaseAccessToken = null)
  {
    super(app, accessToken);

    this.client = new Client(app, accessToken);
    this.device = new DeviceClient(app, accessToken);
    this.page = new PageClient(app, accessToken);
    this.material = new MaterialClient(app, accessToken);
    this.group = new GroupClient(app, accessToken);
    this.relation = new RelationClient(app, accessToken);
    this.stats = new StatsClient(app, accessToken);
  }

}
