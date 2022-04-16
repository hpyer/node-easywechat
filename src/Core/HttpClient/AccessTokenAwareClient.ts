'use strict';

import merge from 'merge';
import { Method, AxiosRequestConfig, AxiosInstance } from "axios";
import AccessTokenAwareHttpClientInterface from "./Contracts/AccessTokenAwareHttpClientInterface";
import AccessTokenInterface from "../Contracts/AccessTokenInterface";
import HttpClientInterface from "./Contracts/HttpClientInterface";
import { applyMixins, ltrim } from '../Support/Utils';
import HttpClient from './HttpClient';
import HttpClientMethodsMixin from './Mixins/HttpClientMethodsMixin';
import { HttpClientFailureJudgeClosure } from '../../Types/global';
import HttpClientResponse from './HttpClientResponse';

class AccessTokenAwareClient implements AccessTokenAwareHttpClientInterface, HttpClientInterface
{
  protected client: HttpClientInterface = null;
  protected accessToken: AccessTokenInterface = null;

  constructor(client: HttpClientInterface, accessToken: AccessTokenInterface, failureJudge: HttpClientFailureJudgeClosure = null, throwError: boolean = true) {
    this.client = client || HttpClient.create(null, failureJudge, throwError);
    this.accessToken = accessToken;
  }

  withAccessToken(accessToken: AccessTokenInterface): this {
    this.accessToken = accessToken;
    return this;
  }

  getInstance(): AxiosInstance {
    return this.client.getInstance();
  }

  setInstance(instance: AxiosInstance): this {
    this.client.setInstance(instance);
    return this;
  }

  async request(method: Method, url: string, payload: AxiosRequestConfig<any> = {}): Promise<HttpClientResponse> {
    if (this.accessToken) {
      payload.params = merge(true, payload.params || {}, await this.accessToken.toQuery());
    }

    return this.client.request(method, ltrim(url, '\\/+'), payload);
  }

}

interface AccessTokenAwareClient extends HttpClientMethodsMixin { };

applyMixins(AccessTokenAwareClient, [HttpClientMethodsMixin]);

export = AccessTokenAwareClient;
