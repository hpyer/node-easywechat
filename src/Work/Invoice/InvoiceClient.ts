'use strict';

import BaseClient from '../../Core/BaseClient';

export default class InvoiceClient extends BaseClient
{

  get(cardId: string, encryptCode: string): Promise<any>
  {
    let params = {
      card_id: cardId,
      encrypt_code: encryptCode,
    };

    return this.httpPostJson('cgi-bin/card/invoice/reimburse/getinvoiceinfo', params);
  }

  select(invoices: Array<string>): Promise<any>
  {
    let params = {
      item_list: invoices,
    };

    return this.httpPostJson('cgi-bin/card/invoice/reimburse/getinvoiceinfobatch', params);
  }

  update(cardId: string, encryptCode: string, status: string): Promise<any>
  {
    let params = {
      card_id: cardId,
      encrypt_code: encryptCode,
      reimburse_status: status,
    };

    return this.httpPostJson('cgi-bin/card/invoice/reimburse/updateinvoicestatus', params);
  }

  batchUpdate(invoices: Array<string>, openid: string, status: string): Promise<any>
  {
    let params = {
      invoice_list: invoices,
      openid: openid,
      reimburse_status: status,
    };

    return this.httpPostJson('cgi-bin/card/invoice/reimburse/updatestatusbatch', params);
  }

}
