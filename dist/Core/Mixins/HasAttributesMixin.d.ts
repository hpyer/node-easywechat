export default class HasAttributesMixin {
    protected attributes: object;
    protected required: Array<string>;
    setAttributes(attributes: object): HasAttributesMixin;
    setAttribute(name: string, value: string): HasAttributesMixin;
    set(name: string, value: string): HasAttributesMixin;
    getAttribute(name: string, defaultValue?: any): any;
    get(name: string, defaultValue?: any): any;
    has(name: string): boolean;
    merge(attributes: object): HasAttributesMixin;
    only(keys: Array<string>): object;
    all(): object;
    getRequired(): Array<string>;
    isRequired(attribute: any): boolean;
    protected checkRequiredAttributes(): void;
}
