'use strict';

import ServerGuard from '../../Core/ServerGuard';
import Response from '../../Core/Http/Response';

export const EVENT_AUTHORIZED = 'authorized';
export const EVENT_UNAUTHORIZED = 'unauthorized';
export const EVENT_UPDATE_AUTHORIZED = 'updateauthorized';
export const EVENT_COMPONENT_VERIFY_TICKET = 'component_verify_ticket';
export const EVENT_THIRD_FAST_REGISTERED = 'notify_third_fasteregister';

export default class OpenPlatformGuard extends ServerGuard
{

  protected async resolve(): Promise<Response>
  {
    this.registerHandlers();

    let message = await this.getMessage();

    if (message['InfoType']) {
      await this.dispatch(message['InfoType'], message);
    }

    return new Response(Buffer.from(ServerGuard.SUCCESS_EMPTY_RESPONSE));
  }

  protected registerHandlers(): void
  {
    this.on(EVENT_AUTHORIZED, async function () {});
    this.on(EVENT_UNAUTHORIZED, async function () {});
    this.on(EVENT_UPDATE_AUTHORIZED, async function () {});
    this.on(EVENT_COMPONENT_VERIFY_TICKET, async function (payload) {
      if (payload['ComponentVerifyTicket']) {
        this.app['verify_ticket'].setTicket(payload['ComponentVerifyTicket']);
      }
    });
  }
};
