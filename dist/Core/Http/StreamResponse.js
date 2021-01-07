'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Response_1 = __importDefault(require("./Response"));
const fs_1 = __importDefault(require("fs"));
const Utils_1 = require("../Utils");
class StreamResponse extends Response_1.default {
    save(directory, filename = '') {
        let dirStatus = fs_1.default.statSync(directory);
        if (!dirStatus.isDirectory()) {
            fs_1.default.mkdirSync(directory);
        }
        try {
            fs_1.default.accessSync(directory, fs_1.default.constants.W_OK);
        }
        catch (e) {
            throw new Error(`'${directory}' is not writable.`);
        }
        let buffer = this.getContent();
        let content = buffer.toString();
        if (!content || '{' === content[0]) {
            throw new Error('Invalid media response content.');
        }
        if (!filename) {
            filename = Utils_1.createHash(content, 'md5');
        }
        fs_1.default.writeFileSync(`${directory}/${filename}`, buffer);
        return filename;
    }
    saveAs(directory, filename = '') {
        return this.save(directory, filename);
    }
    static buildFromResponse(res) {
        return new StreamResponse(res.getContent(), res.getStatusCode(), res.getHeaders());
    }
}
exports.default = StreamResponse;
;
