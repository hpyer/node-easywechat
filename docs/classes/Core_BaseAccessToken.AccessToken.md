[node-easywechat](../README.md) / [Exports](../modules.md) / [Core/BaseAccessToken](../modules/Core_BaseAccessToken.md) / AccessToken

# Class: AccessToken

[Core/BaseAccessToken](../modules/Core_BaseAccessToken.md).AccessToken

授权后的AccessToken对象

## Table of contents

### Constructors

- [constructor](Core_BaseAccessToken.AccessToken.md#constructor)

### Properties

- [access\_token](Core_BaseAccessToken.AccessToken.md#access_token)
- [expires\_in](Core_BaseAccessToken.AccessToken.md#expires_in)
- [openid](Core_BaseAccessToken.AccessToken.md#openid)
- [refresh\_token](Core_BaseAccessToken.AccessToken.md#refresh_token)
- [scope](Core_BaseAccessToken.AccessToken.md#scope)

### Methods

- [getAccessToken](Core_BaseAccessToken.AccessToken.md#getaccesstoken)
- [getExpires](Core_BaseAccessToken.AccessToken.md#getexpires)
- [getOpenid](Core_BaseAccessToken.AccessToken.md#getopenid)
- [getRefreshToken](Core_BaseAccessToken.AccessToken.md#getrefreshtoken)
- [getScope](Core_BaseAccessToken.AccessToken.md#getscope)
- [getToken](Core_BaseAccessToken.AccessToken.md#gettoken)

## Constructors

### constructor

• **new AccessToken**(`info?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `info` | `object` | `null` |

#### Defined in

[Core/BaseAccessToken.ts:33](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseAccessToken.ts#L33)

## Properties

### access\_token

• **access\_token**: `string` = `''`

网页授权接口调用凭证

#### Defined in

[Core/BaseAccessToken.ts:15](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseAccessToken.ts#L15)

___

### expires\_in

• **expires\_in**: `number` = `0`

调用凭证的超时时间，单位（秒）

#### Defined in

[Core/BaseAccessToken.ts:19](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseAccessToken.ts#L19)

___

### openid

• **openid**: `string` = `''`

用户唯一标识，openid

#### Defined in

[Core/BaseAccessToken.ts:27](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseAccessToken.ts#L27)

___

### refresh\_token

• **refresh\_token**: `string` = `''`

刷新access_token

#### Defined in

[Core/BaseAccessToken.ts:23](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseAccessToken.ts#L23)

___

### scope

• **scope**: `string` = `null`

授权的作用域

#### Defined in

[Core/BaseAccessToken.ts:31](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseAccessToken.ts#L31)

## Methods

### getAccessToken

▸ **getAccessToken**(): `string`

获取access_token

#### Returns

`string`

#### Defined in

[Core/BaseAccessToken.ts:52](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseAccessToken.ts#L52)

___

### getExpires

▸ **getExpires**(): `number`

获取过期时间

#### Returns

`number`

#### Defined in

[Core/BaseAccessToken.ts:58](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseAccessToken.ts#L58)

___

### getOpenid

▸ **getOpenid**(): `string`

获取openid

#### Returns

`string`

#### Defined in

[Core/BaseAccessToken.ts:70](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseAccessToken.ts#L70)

___

### getRefreshToken

▸ **getRefreshToken**(): `string`

获取refresh_token

#### Returns

`string`

#### Defined in

[Core/BaseAccessToken.ts:64](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseAccessToken.ts#L64)

___

### getScope

▸ **getScope**(): `string`

获取scope

#### Returns

`string`

#### Defined in

[Core/BaseAccessToken.ts:76](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseAccessToken.ts#L76)

___

### getToken

▸ **getToken**(): `string` \| `Promise`<`string`\>

获取access_token

#### Returns

`string` \| `Promise`<`string`\>

#### Defined in

[Core/BaseAccessToken.ts:46](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseAccessToken.ts#L46)
