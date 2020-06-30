import BaseAccessToken from '../../Core/BaseAccessToken';
import BaseApplication from '../../Core/BaseApplication';
import BaseClient from "../../Core/BaseClient";
import Client from "./Client";
export default class ShakeAround extends Client {
    client: BaseClient;
    device: BaseClient;
    page: BaseClient;
    material: BaseClient;
    group: BaseClient;
    relation: BaseClient;
    stats: BaseClient;
    constructor(app: BaseApplication, accessToken?: BaseAccessToken);
}
