[node-easywechat](../README.md) / [Exports](../modules.md) / [Core/BaseAccessToken](../modules/Core_BaseAccessToken.md) / default

# Class: default

[Core/BaseAccessToken](../modules/Core_BaseAccessToken.md).default

## Hierarchy

- **`default`**

  ↳ [`default`](MiniProgram_Auth_AccessToken.default.md)

  ↳ [`default`](OfficialAccount_Auth_AccessToken.default.md)

  ↳ [`default`](OpenPlatform_Auth_AccessToken.default.md)

  ↳ [`default`](OpenPlatform_Authorizer_Auth_AccessToken.default.md)

  ↳ [`default`](Work_Auth_AccessToken.default.md)

## Implements

- [`default`](Core_Mixins_HttpMixin.default.md)

## Table of contents

### Constructors

- [constructor](Core_BaseAccessToken.default.md#constructor)

### Properties

- [app](Core_BaseAccessToken.default.md#app)
- [endpointToGetToken](Core_BaseAccessToken.default.md#endpointtogettoken)
- [queryName](Core_BaseAccessToken.default.md#queryname)
- [requestMethod](Core_BaseAccessToken.default.md#requestmethod)
- [token](Core_BaseAccessToken.default.md#token)
- [tokenKey](Core_BaseAccessToken.default.md#tokenkey)

### Methods

- [applyToRequest](Core_BaseAccessToken.default.md#applytorequest)
- [doRequest](Core_BaseAccessToken.default.md#dorequest)
- [getCacheKey](Core_BaseAccessToken.default.md#getcachekey)
- [getCredentials](Core_BaseAccessToken.default.md#getcredentials)
- [getEndpoint](Core_BaseAccessToken.default.md#getendpoint)
- [getRefreshedToken](Core_BaseAccessToken.default.md#getrefreshedtoken)
- [getToken](Core_BaseAccessToken.default.md#gettoken)
- [getTokenKey](Core_BaseAccessToken.default.md#gettokenkey)
- [refresh](Core_BaseAccessToken.default.md#refresh)
- [requestToken](Core_BaseAccessToken.default.md#requesttoken)
- [setToken](Core_BaseAccessToken.default.md#settoken)

## Constructors

### constructor

• **new default**(`app`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`default`](Core_BaseApplication.default.md) |

#### Defined in

[Core/BaseAccessToken.ts:90](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L90)

## Properties

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Defined in

[Core/BaseAccessToken.ts:88](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L88)

___

### endpointToGetToken

• `Protected` **endpointToGetToken**: `string` = `''`

#### Defined in

[Core/BaseAccessToken.ts:87](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L87)

___

### queryName

• `Protected` **queryName**: `string` = `''`

#### Defined in

[Core/BaseAccessToken.ts:85](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L85)

___

### requestMethod

• `Protected` **requestMethod**: `string` = `'GET'`

#### Defined in

[Core/BaseAccessToken.ts:83](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L83)

___

### token

• `Protected` **token**: `string` = `''`

#### Defined in

[Core/BaseAccessToken.ts:84](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L84)

___

### tokenKey

• `Protected` **tokenKey**: `string` = `'access_token'`

#### Defined in

[Core/BaseAccessToken.ts:86](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L86)

## Methods

### applyToRequest

▸ **applyToRequest**(`payload`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `AxiosRequestConfig` |

#### Returns

`Promise`<`object`\>

#### Defined in

[Core/BaseAccessToken.ts:190](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L190)

___

### doRequest

▸ **doRequest**(`payload`): `Promise`<`AxiosResponse`<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Implementation of

HttpMixin.doRequest

#### Defined in

[Core/BaseAccessToken.ts:201](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L201)

___

### getCacheKey

▸ **getCacheKey**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[Core/BaseAccessToken.ts:108](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L108)

___

### getCredentials

▸ `Protected` **getCredentials**(): `Promise`<`object`\>

#### Returns

`Promise`<`object`\>

#### Defined in

[Core/BaseAccessToken.ts:95](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L95)

___

### getEndpoint

▸ **getEndpoint**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[Core/BaseAccessToken.ts:100](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L100)

___

### getRefreshedToken

▸ **getRefreshedToken**(): `Promise`<[`AccessToken`](Core_BaseAccessToken.AccessToken.md)\>

获取刷新后的Token

#### Returns

`Promise`<[`AccessToken`](Core_BaseAccessToken.AccessToken.md)\>

#### Defined in

[Core/BaseAccessToken.ts:180](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L180)

___

### getToken

▸ **getToken**(`refresh?`): `Promise`<[`AccessToken`](Core_BaseAccessToken.AccessToken.md)\>

获取Token

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `refresh` | `boolean` | `false` | 为true时表示强制刷新 |

#### Returns

`Promise`<[`AccessToken`](Core_BaseAccessToken.AccessToken.md)\>

#### Defined in

[Core/BaseAccessToken.ts:133](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L133)

___

### getTokenKey

▸ **getTokenKey**(): `string`

#### Returns

`string`

#### Defined in

[Core/BaseAccessToken.ts:185](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L185)

___

### refresh

▸ **refresh**(): `Promise`<[`default`](Core_BaseAccessToken.default.md)\>

刷新Token

#### Returns

`Promise`<[`default`](Core_BaseAccessToken.default.md)\>

#### Defined in

[Core/BaseAccessToken.ts:171](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L171)

___

### requestToken

▸ **requestToken**(`credentials`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentials` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Core/BaseAccessToken.ts:113](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L113)

___

### setToken

▸ **setToken**(`access_token`, `expires_in?`): `Promise`<[`default`](Core_BaseAccessToken.default.md)\>

设置Token

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `access_token` | `string` | `undefined` | AccessToken |
| `expires_in` | `number` | `7200` | 有效时间，单位：秒 |

#### Returns

`Promise`<[`default`](Core_BaseAccessToken.default.md)\>

#### Defined in

[Core/BaseAccessToken.ts:154](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L154)
