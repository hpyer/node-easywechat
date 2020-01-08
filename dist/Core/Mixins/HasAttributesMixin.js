'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("merge");
const Utils_1 = require("../Utils");
class HasAttributesMixin {
    constructor() {
        this.attributes = {};
        this.required = [];
    }
    setAttributes(attributes) {
        this.attributes = attributes;
        return this;
    }
    setAttribute(name, value) {
        this.attributes[name] = value;
        return this;
    }
    set(name, value) {
        this.setAttribute(name, value);
        return this;
    }
    getAttribute(name, defaultValue = null) {
        return this.attributes[name] || defaultValue;
    }
    get(name, defaultValue = null) {
        return this.getAttribute(name, defaultValue);
    }
    has(name) {
        for (let k in this.attributes) {
            if (k === name) {
                return true;
            }
        }
        return false;
    }
    merge(attributes) {
        this.attributes = merge_1.default(this.attributes, attributes);
        return this;
    }
    only(keys) {
        let attributes = {};
        for (let k in this.attributes) {
            keys.forEach(key => {
                if (k === key) {
                    attributes[k] = this.attributes[k];
                }
            });
        }
        return attributes;
    }
    all() {
        this.checkRequiredAttributes();
        return this.attributes;
    }
    getRequired() {
        return this.required && Utils_1.isArray(this.required) ? this.required : [];
    }
    isRequired(attribute) {
        return Utils_1.inArray(attribute, this.getRequired(), true);
    }
    checkRequiredAttributes() {
        this.getRequired().forEach(attribute => {
            if (attribute == null) {
                throw new Error(`"${attribute}" cannot be empty.`);
            }
        });
    }
}
exports.default = HasAttributesMixin;
;
