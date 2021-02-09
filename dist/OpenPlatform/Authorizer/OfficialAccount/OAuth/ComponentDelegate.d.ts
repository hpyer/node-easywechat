import { OAuthComponent } from '../../../../OfficialAccount/OAuth/OAuthClient';
import OpenPlatform from '../../../Application';
export default class ComponentDelegate extends OAuthComponent {
    app: OpenPlatform;
    constructor(app: OpenPlatform);
    /**
     * 获取配置中的app_id
     */
    getAppId(): string;
    /**
     * 获取授权后的token
     */
    getToken(): Promise<string>;
}
