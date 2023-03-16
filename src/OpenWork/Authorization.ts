
import * as merge from "merge";
import HasAttributesMixin from "../Core/Mixins/HasAttributesMixin";
import { applyMixins } from "../Core/Support/Utils";

class Authorization
{

  constructor(attributes: Record<string, any> = null) {
    if (attributes) {
      this.attributes = merge.recursive({}, attributes);
    }
  }

  /**
   * 获取corpid
   * @returns
   */
  getCorpId(): string {
    if (!this.attributes['auth_corp_info']) return '';
    return this.attributes['auth_corp_info']['corpid'] || '';
  }

}

interface Authorization extends HasAttributesMixin {
};

applyMixins(Authorization, [HasAttributesMixin]);

export = Authorization;
