'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class BaseServiceProvider {
    constructor() {
        if (new.target === BaseServiceProvider) {
            throw new Error('Can not create instance via BaseServiceProvider.');
        }
    }
    register() {
    }
}
exports.default = BaseServiceProvider;
