[node-easywechat](../README.md) / [Exports](../modules.md) / [OpenPlatform/Authorizer/Auth/AccessToken](../modules/OpenPlatform_Authorizer_Auth_AccessToken.md) / default

# Class: default

[OpenPlatform/Authorizer/Auth/AccessToken](../modules/OpenPlatform_Authorizer_Auth_AccessToken.md).default

## Hierarchy

- [`default`](Core_BaseAccessToken.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OpenPlatform_Authorizer_Auth_AccessToken.default.md#constructor)

### Properties

- [app](OpenPlatform_Authorizer_Auth_AccessToken.default.md#app)
- [component](OpenPlatform_Authorizer_Auth_AccessToken.default.md#component)
- [endpointToGetToken](OpenPlatform_Authorizer_Auth_AccessToken.default.md#endpointtogettoken)
- [queryName](OpenPlatform_Authorizer_Auth_AccessToken.default.md#queryname)
- [requestMethod](OpenPlatform_Authorizer_Auth_AccessToken.default.md#requestmethod)
- [token](OpenPlatform_Authorizer_Auth_AccessToken.default.md#token)
- [tokenKey](OpenPlatform_Authorizer_Auth_AccessToken.default.md#tokenkey)

### Methods

- [applyToRequest](OpenPlatform_Authorizer_Auth_AccessToken.default.md#applytorequest)
- [doRequest](OpenPlatform_Authorizer_Auth_AccessToken.default.md#dorequest)
- [getCacheKey](OpenPlatform_Authorizer_Auth_AccessToken.default.md#getcachekey)
- [getCredentials](OpenPlatform_Authorizer_Auth_AccessToken.default.md#getcredentials)
- [getEndpoint](OpenPlatform_Authorizer_Auth_AccessToken.default.md#getendpoint)
- [getRefreshedToken](OpenPlatform_Authorizer_Auth_AccessToken.default.md#getrefreshedtoken)
- [getToken](OpenPlatform_Authorizer_Auth_AccessToken.default.md#gettoken)
- [getTokenKey](OpenPlatform_Authorizer_Auth_AccessToken.default.md#gettokenkey)
- [refresh](OpenPlatform_Authorizer_Auth_AccessToken.default.md#refresh)
- [requestToken](OpenPlatform_Authorizer_Auth_AccessToken.default.md#requesttoken)
- [setToken](OpenPlatform_Authorizer_Auth_AccessToken.default.md#settoken)

## Constructors

### constructor

• **new default**(`app`, `component`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`default`](Core_BaseApplication.default.md) |
| `component` | [`default`](OpenPlatform_Application.default.md) |

#### Overrides

[default](Core_BaseAccessToken.default.md).[constructor](Core_BaseAccessToken.default.md#constructor)

#### Defined in

[OpenPlatform/Authorizer/Auth/AccessToken.ts:15](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OpenPlatform/Authorizer/Auth/AccessToken.ts#L15)

## Properties

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Inherited from

[default](Core_BaseAccessToken.default.md).[app](Core_BaseAccessToken.default.md#app)

#### Defined in

[Core/BaseAccessToken.ts:88](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L88)

___

### component

• `Protected` **component**: [`default`](OpenPlatform_Application.default.md) = `null`

#### Defined in

[OpenPlatform/Authorizer/Auth/AccessToken.ts:13](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OpenPlatform/Authorizer/Auth/AccessToken.ts#L13)

___

### endpointToGetToken

• `Protected` **endpointToGetToken**: `string` = `''`

#### Inherited from

[default](Core_BaseAccessToken.default.md).[endpointToGetToken](Core_BaseAccessToken.default.md#endpointtogettoken)

#### Defined in

[Core/BaseAccessToken.ts:87](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L87)

___

### queryName

• `Protected` **queryName**: `string` = `'access_token'`

#### Overrides

[default](Core_BaseAccessToken.default.md).[queryName](Core_BaseAccessToken.default.md#queryname)

#### Defined in

[OpenPlatform/Authorizer/Auth/AccessToken.ts:11](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OpenPlatform/Authorizer/Auth/AccessToken.ts#L11)

___

### requestMethod

• `Protected` **requestMethod**: `string` = `'POST'`

#### Overrides

[default](Core_BaseAccessToken.default.md).[requestMethod](Core_BaseAccessToken.default.md#requestmethod)

#### Defined in

[OpenPlatform/Authorizer/Auth/AccessToken.ts:10](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OpenPlatform/Authorizer/Auth/AccessToken.ts#L10)

___

### token

• `Protected` **token**: `string` = `''`

#### Inherited from

[default](Core_BaseAccessToken.default.md).[token](Core_BaseAccessToken.default.md#token)

#### Defined in

[Core/BaseAccessToken.ts:84](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L84)

___

### tokenKey

• `Protected` **tokenKey**: `string` = `'authorizer_access_token'`

#### Overrides

[default](Core_BaseAccessToken.default.md).[tokenKey](Core_BaseAccessToken.default.md#tokenkey)

#### Defined in

[OpenPlatform/Authorizer/Auth/AccessToken.ts:12](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OpenPlatform/Authorizer/Auth/AccessToken.ts#L12)

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

#### Inherited from

[default](Core_BaseAccessToken.default.md).[doRequest](Core_BaseAccessToken.default.md#dorequest)

#### Defined in

[Core/BaseAccessToken.ts:201](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L201)

___

### getCacheKey

▸ **getCacheKey**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

[default](Core_BaseAccessToken.default.md).[getCacheKey](Core_BaseAccessToken.default.md#getcachekey)

#### Defined in

[Core/BaseAccessToken.ts:108](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L108)

___

### getCredentials

▸ `Protected` **getCredentials**(): `Promise`<`object`\>

#### Returns

`Promise`<`object`\>

#### Overrides

[default](Core_BaseAccessToken.default.md).[getCredentials](Core_BaseAccessToken.default.md#getcredentials)

#### Defined in

[OpenPlatform/Authorizer/Auth/AccessToken.ts:22](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OpenPlatform/Authorizer/Auth/AccessToken.ts#L22)

___

### getEndpoint

▸ **getEndpoint**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Overrides

[default](Core_BaseAccessToken.default.md).[getEndpoint](Core_BaseAccessToken.default.md#getendpoint)

#### Defined in

[OpenPlatform/Authorizer/Auth/AccessToken.ts:31](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OpenPlatform/Authorizer/Auth/AccessToken.ts#L31)

___

### getRefreshedToken

▸ **getRefreshedToken**(): `Promise`<[`AccessToken`](Core_BaseAccessToken.AccessToken.md)\>

获取刷新后的Token

#### Returns

`Promise`<[`AccessToken`](Core_BaseAccessToken.AccessToken.md)\>

#### Inherited from

[default](Core_BaseAccessToken.default.md).[getRefreshedToken](Core_BaseAccessToken.default.md#getrefreshedtoken)

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

#### Inherited from

[default](Core_BaseAccessToken.default.md).[getToken](Core_BaseAccessToken.default.md#gettoken)

#### Defined in

[Core/BaseAccessToken.ts:133](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L133)

___

### getTokenKey

▸ **getTokenKey**(): `string`

#### Returns

`string`

#### Inherited from

[default](Core_BaseAccessToken.default.md).[getTokenKey](Core_BaseAccessToken.default.md#gettokenkey)

#### Defined in

[Core/BaseAccessToken.ts:185](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L185)

___

### refresh

▸ **refresh**(): `Promise`<[`default`](OpenPlatform_Authorizer_Auth_AccessToken.default.md)\>

刷新Token

#### Returns

`Promise`<[`default`](OpenPlatform_Authorizer_Auth_AccessToken.default.md)\>

#### Inherited from

[default](Core_BaseAccessToken.default.md).[refresh](Core_BaseAccessToken.default.md#refresh)

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

#### Inherited from

[default](Core_BaseAccessToken.default.md).[requestToken](Core_BaseAccessToken.default.md#requesttoken)

#### Defined in

[Core/BaseAccessToken.ts:113](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L113)

___

### setToken

▸ **setToken**(`access_token`, `expires_in?`): `Promise`<[`default`](OpenPlatform_Authorizer_Auth_AccessToken.default.md)\>

设置Token

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `access_token` | `string` | `undefined` | AccessToken |
| `expires_in` | `number` | `7200` | 有效时间，单位：秒 |

#### Returns

`Promise`<[`default`](OpenPlatform_Authorizer_Auth_AccessToken.default.md)\>

#### Inherited from

[default](Core_BaseAccessToken.default.md).[setToken](Core_BaseAccessToken.default.md#settoken)

#### Defined in

[Core/BaseAccessToken.ts:154](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseAccessToken.ts#L154)
