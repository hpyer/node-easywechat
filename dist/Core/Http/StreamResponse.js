'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Response_1 = require("./Response");
const Fs = require("fs");
const Utils_1 = require("../Utils");
class StreamResponse extends Response_1.default {
    save(directory, filename = '') {
        let dirStatus = Fs.statSync(directory);
        if (!dirStatus.isDirectory()) {
            Fs.mkdirSync(directory);
        }
        try {
            Fs.accessSync(directory, Fs.constants.W_OK);
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
        Fs.writeFileSync(`${directory}/${filename}`, buffer);
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
