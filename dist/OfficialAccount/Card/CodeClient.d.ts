import BaseClient from '../../Core/BaseClient';
export default class CodeClient extends BaseClient {
    /**
     * 导入卡券code
     * @param cardId 卡券id
     * @param codes 卡券code列表，最多100个
     */
    deposit(cardId: string, codes: Array<string>): Promise<any>;
    /**
     * 查询导入的卡券code
     * @param cardId 卡券id
     */
    getDepositedCount(cardId: string): Promise<any>;
    /**
     * 核查卡券code
     * @param cardId 卡券id
     * @param codes 卡券code列表
     */
    check(cardId: string, codes: Array<string>): Promise<any>;
    /**
     * 查询卡券Code
     * @param code 卡券code
     * @param cardId 卡券id
     * @param checkConsume 是否校验code核销状态，true和false
     */
    get(code: string, cardId: string, checkConsume?: Boolean): Promise<any>;
    /**
     * 更改卡券Code
     * @param code 旧code
     * @param newCode 新code
     * @param cardId 卡券id
     */
    update(code: string, newCode: string, cardId: string): Promise<any>;
    /**
     * 设置卡券失效
     * @param code 卡券code
     * @param cardId 卡券id
     */
    disable(code: string, cardId: string): Promise<any>;
    /**
     * 核销卡券Code
     * @param code 卡券code
     * @param cardId 卡券id，默认：null
     */
    consume(code: string, cardId?: string): Promise<any>;
    /**
     * 解码卡券code
     * @param encryptedCode 密文
     */
    decrypt(encryptedCode: string): Promise<any>;
}
