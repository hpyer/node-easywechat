[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/Auth/AccessToken](../modules/OfficialAccount_Auth_AccessToken.md) / default

# Class: default

[OfficialAccount/Auth/AccessToken](../modules/OfficialAccount_Auth_AccessToken.md).default

## Hierarchy

- [`default`](Core_BaseAccessToken.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OfficialAccount_Auth_AccessToken.default.md#constructor)

### Properties

- [app](OfficialAccount_Auth_AccessToken.default.md#app)
- [endpointToGetToken](OfficialAccount_Auth_AccessToken.default.md#endpointtogettoken)
- [queryName](OfficialAccount_Auth_AccessToken.default.md#queryname)
- [requestMethod](OfficialAccount_Auth_AccessToken.default.md#requestmethod)
- [token](OfficialAccount_Auth_AccessToken.default.md#token)
- [tokenKey](OfficialAccount_Auth_AccessToken.default.md#tokenkey)

### Methods

- [applyToRequest](OfficialAccount_Auth_AccessToken.default.md#applytorequest)
- [doRequest](OfficialAccount_Auth_AccessToken.default.md#dorequest)
- [getCacheKey](OfficialAccount_Auth_AccessToken.default.md#getcachekey)
- [getCredentials](OfficialAccount_Auth_AccessToken.default.md#getcredentials)
- [getEndpoint](OfficialAccount_Auth_AccessToken.default.md#getendpoint)
- [getRefreshedToken](OfficialAccount_Auth_AccessToken.default.md#getrefreshedtoken)
- [getToken](OfficialAccount_Auth_AccessToken.default.md#gettoken)
- [getTokenKey](OfficialAccount_Auth_AccessToken.default.md#gettokenkey)
- [refresh](OfficialAccount_Auth_AccessToken.default.md#refresh)
- [requestToken](OfficialAccount_Auth_AccessToken.default.md#requesttoken)
- [setToken](OfficialAccount_Auth_AccessToken.default.md#settoken)

## Constructors

### constructor

• **new default**(`app`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`default`](Core_BaseApplication.default.md) |

#### Inherited from

[default](Core_BaseAccessToken.default.md).[constructor](Core_BaseAccessToken.default.md#constructor)

#### Defined in

[Core/BaseAccessToken.ts:90](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseAccessToken.ts#L90)

## Properties

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Inherited from

[default](Core_BaseAccessToken.default.md).[app](Core_BaseAccessToken.default.md#app)

#### Defined in

[Core/BaseAccessToken.ts:88](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseAccessToken.ts#L88)

___

### endpointToGetToken

• `Protected` **endpointToGetToken**: `string` = `'cgi-bin/token'`

#### Overrides

[default](Core_BaseAccessToken.default.md).[endpointToGetToken](Core_BaseAccessToken.default.md#endpointtogettoken)

#### Defined in

[OfficialAccount/Auth/AccessToken.ts:7](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/Auth/AccessToken.ts#L7)

___

### queryName

• `Protected` **queryName**: `string` = `''`

#### Inherited from

[default](Core_BaseAccessToken.default.md).[queryName](Core_BaseAccessToken.default.md#queryname)

#### Defined in

[Core/BaseAccessToken.ts:85](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseAccessToken.ts#L85)

___

### requestMethod

• `Protected` **requestMethod**: `string` = `'GET'`

#### Inherited from

[default](Core_BaseAccessToken.default.md).[requestMethod](Core_BaseAccessToken.default.md#requestmethod)

#### Defined in

[Core/BaseAccessToken.ts:83](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseAccessToken.ts#L83)

___

### token

• `Protected` **token**: `string` = `''`

#### Inherited from

[default](Core_BaseAccessToken.default.md).[token](Core_BaseAccessToken.default.md#token)

#### Defined in

[Core/BaseAccessToken.ts:84](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseAccessToken.ts#L84)

___

### tokenKey

• `Protected` **tokenKey**: `string` = `'access_token'`

#### Inherited from

[default](Core_BaseAccessToken.default.md).[tokenKey](Core_BaseAccessToken.default.md#tokenkey)

#### Defined in

[Core/BaseAccessToken.ts:86](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseAccessToken.ts#L86)

## Methods

### applyToRequest

▸ **applyToRequest**(`payload`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `AxiosRequestConfig` |

#### Returns

`Promise`<`object`\>

#### Inherited from

[default](Core_BaseAccessToken.default.md).[applyToRequest](Core_BaseAccessToken.default.md#applytorequest)

#### Defined in

[Core/BaseAccessToken.ts:190](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseAccessToken.ts#L190)

___

### doRequest

▸ **doRequest**(`payload`): `Promise`<`AxiosResponse`<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Inherited from

[default](Core_BaseAccessToken.default.md).[doRequest](Core_BaseAccessToken.default.md#dorequest)

#### Defined in

[Core/BaseAccessToken.ts:201](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseAccessToken.ts#L201)

___

### getCacheKey

▸ **getCacheKey**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

[default](Core_BaseAccessToken.default.md).[getCacheKey](Core_BaseAccessToken.default.md#getcachekey)

#### Defined in

[Core/BaseAccessToken.ts:108](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseAccessToken.ts#L108)

___

### getCredentials

▸ `Protected` **getCredentials**(): `Promise`<`object`\>

#### Returns

`Promise`<`object`\>

#### Overrides

[default](Core_BaseAccessToken.default.md).[getCredentials](Core_BaseAccessToken.default.md#getcredentials)

#### Defined in

[OfficialAccount/Auth/AccessToken.ts:9](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/Auth/AccessToken.ts#L9)

___

### getEndpoint

▸ **getEndpoint**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

[default](Core_BaseAccessToken.default.md).[getEndpoint](Core_BaseAccessToken.default.md#getendpoint)

#### Defined in

[Core/BaseAccessToken.ts:100](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseAccessToken.ts#L100)

___

### getRefreshedToken

▸ **getRefreshedToken**(): `Promise`<[`AccessToken`](Core_BaseAccessToken.AccessToken.md)\>

获取刷新后的Token

#### Returns

`Promise`<[`AccessToken`](Core_BaseAccessToken.AccessToken.md)\>

#### Inherited from

[default](Core_BaseAccessToken.default.md).[getRefreshedToken](Core_BaseAccessToken.default.md#getrefreshedtoken)

#### Defined in

[Core/BaseAccessToken.ts:180](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseAccessToken.ts#L180)

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

#### Inherited from

[default](Core_BaseAccessToken.default.md).[getToken](Core_BaseAccessToken.default.md#gettoken)

#### Defined in

[Core/BaseAccessToken.ts:133](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseAccessToken.ts#L133)

___

### getTokenKey

▸ **getTokenKey**(): `string`

#### Returns

`string`

#### Inherited from

[default](Core_BaseAccessToken.default.md).[getTokenKey](Core_BaseAccessToken.default.md#gettokenkey)

#### Defined in

[Core/BaseAccessToken.ts:185](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseAccessToken.ts#L185)

___

### refresh

▸ **refresh**(): `Promise`<[`default`](OfficialAccount_Auth_AccessToken.default.md)\>

刷新Token

#### Returns

`Promise`<[`default`](OfficialAccount_Auth_AccessToken.default.md)\>

#### Inherited from

[default](Core_BaseAccessToken.default.md).[refresh](Core_BaseAccessToken.default.md#refresh)

#### Defined in

[Core/BaseAccessToken.ts:171](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseAccessToken.ts#L171)

___

### requestToken

▸ **requestToken**(`credentials`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentials` | `object` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](Core_BaseAccessToken.default.md).[requestToken](Core_BaseAccessToken.default.md#requesttoken)

#### Defined in

[Core/BaseAccessToken.ts:113](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseAccessToken.ts#L113)

___

### setToken

▸ **setToken**(`access_token`, `expires_in?`): `Promise`<[`default`](OfficialAccount_Auth_AccessToken.default.md)\>

设置Token

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `access_token` | `string` | `undefined` | AccessToken |
| `expires_in` | `number` | `7200` | 有效时间，单位：秒 |

#### Returns

`Promise`<[`default`](OfficialAccount_Auth_AccessToken.default.md)\>

#### Inherited from

[default](Core_BaseAccessToken.default.md).[setToken](Core_BaseAccessToken.default.md#settoken)

#### Defined in

[Core/BaseAccessToken.ts:154](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseAccessToken.ts#L154)
