import { AccessToken } from '../../Core/BaseAccessToken';
import Work from '../Application';
export default class AccessTokenDelegate extends AccessToken {
    app: Work;
    constructor(app: Work);
    /**
     * 获取授权后的token
     */
    getToken(): Promise<string>;
}
