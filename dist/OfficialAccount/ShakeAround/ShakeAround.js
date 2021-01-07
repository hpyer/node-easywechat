'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = __importDefault(require("./Client"));
const DeviceClient_1 = __importDefault(require("./DeviceClient"));
const PageClient_1 = __importDefault(require("./PageClient"));
const MaterialClient_1 = __importDefault(require("./MaterialClient"));
const GroupClient_1 = __importDefault(require("./GroupClient"));
const RelationClient_1 = __importDefault(require("./RelationClient"));
const StatsClient_1 = __importDefault(require("./StatsClient"));
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
