'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./Client");
const DeviceClient_1 = require("./DeviceClient");
const PageClient_1 = require("./PageClient");
const MaterialClient_1 = require("./MaterialClient");
const GroupClient_1 = require("./GroupClient");
const RelationClient_1 = require("./RelationClient");
const StatsClient_1 = require("./StatsClient");
class ShakeAround extends Client_1.default {
    constructor(app, accessToken = null) {
        super(app, accessToken);
        this.client = new Client_1.default(app, accessToken);
        this.device = new DeviceClient_1.default(app, accessToken);
        this.page = new PageClient_1.default(app, accessToken);
        this.material = new MaterialClient_1.default(app, accessToken);
        this.group = new GroupClient_1.default(app, accessToken);
        this.relation = new RelationClient_1.default(app, accessToken);
        this.stats = new StatsClient_1.default(app, accessToken);
    }
}
exports.default = ShakeAround;
