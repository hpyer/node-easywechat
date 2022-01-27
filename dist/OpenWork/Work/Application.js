'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = __importDefault(require("../../Work/Application"));
const AccessToken_1 = __importDefault(require("./Auth/AccessToken"));
const Utils_1 = require("../../Core/Utils");
class Work extends Application_1.default {
    constructor(authCorpId, permanentCode, component, prepends = {}) {
        let config = (0, Utils_1.merge)((0, Utils_1.merge)({}, component.getConfig()), {
            corp_id: authCorpId,
        });
        super(config, (0, Utils_1.merge)((0, Utils_1.merge)({}, prepends), {
            access_token: function (app) {
                return new AccessToken_1.default(app, authCorpId, permanentCode, component);
            }
        }));
    }
}
exports.default = Work;
;
