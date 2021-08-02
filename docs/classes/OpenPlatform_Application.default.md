[node-easywechat](../README.md) / [Exports](../modules.md) / [OpenPlatform/Application](../modules/OpenPlatform_Application.md) / default

# Class: default

[OpenPlatform/Application](../modules/OpenPlatform_Application.md).default

## Hierarchy

- [`default`](Core_BaseApplication.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OpenPlatform_Application.default.md#constructor)

### Properties

- [access\_token](OpenPlatform_Application.default.md#access_token)
- [base](OpenPlatform_Application.default.md#base)
- [cache](OpenPlatform_Application.default.md#cache)
- [code\_template](OpenPlatform_Application.default.md#code_template)
- [component](OpenPlatform_Application.default.md#component)
- [config](OpenPlatform_Application.default.md#config)
- [defaultConfig](OpenPlatform_Application.default.md#defaultconfig)
- [encryptor](OpenPlatform_Application.default.md#encryptor)
- [id](OpenPlatform_Application.default.md#id)
- [log](OpenPlatform_Application.default.md#log)
- [request](OpenPlatform_Application.default.md#request)
- [server](OpenPlatform_Application.default.md#server)
- [userConfig](OpenPlatform_Application.default.md#userconfig)
- [verify\_ticket](OpenPlatform_Application.default.md#verify_ticket)

### Methods

- [clearQuota](OpenPlatform_Application.default.md#clearquota)
- [createDefaultCache](OpenPlatform_Application.default.md#createdefaultcache)
- [createPreAuthorizationCode](OpenPlatform_Application.default.md#createpreauthorizationcode)
- [extend](OpenPlatform_Application.default.md#extend)
- [getAuthorizer](OpenPlatform_Application.default.md#getauthorizer)
- [getAuthorizerConfig](OpenPlatform_Application.default.md#getauthorizerconfig)
- [getAuthorizerOption](OpenPlatform_Application.default.md#getauthorizeroption)
- [getAuthorizers](OpenPlatform_Application.default.md#getauthorizers)
- [getCache](OpenPlatform_Application.default.md#getcache)
- [getConfig](OpenPlatform_Application.default.md#getconfig)
- [getId](OpenPlatform_Application.default.md#getid)
- [getMobilePreAuthorizationUrl](OpenPlatform_Application.default.md#getmobilepreauthorizationurl)
- [getPreAuthorizationUrl](OpenPlatform_Application.default.md#getpreauthorizationurl)
- [getReplaceServices](OpenPlatform_Application.default.md#getreplaceservices)
- [handleAuthorize](OpenPlatform_Application.default.md#handleauthorize)
- [miniProgram](OpenPlatform_Application.default.md#miniprogram)
- [officialAccount](OpenPlatform_Application.default.md#officialaccount)
- [offsetSet](OpenPlatform_Application.default.md#offsetset)
- [offsetUnset](OpenPlatform_Application.default.md#offsetunset)
- [rebind](OpenPlatform_Application.default.md#rebind)
- [registerCommonProviders](OpenPlatform_Application.default.md#registercommonproviders)
- [registerProviders](OpenPlatform_Application.default.md#registerproviders)
- [setAuthorizerOption](OpenPlatform_Application.default.md#setauthorizeroption)

## Constructors

### constructor

• **new default**(`config?`, `prepends?`, `id?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `config` | [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) | `{}` |
| `prepends` | `Object` | `{}` |
| `id` | `String` | `null` |

#### Overrides

[default](Core_BaseApplication.default.md).[constructor](Core_BaseApplication.default.md#constructor)

#### Defined in

[OpenPlatform/Application.ts:31](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Application.ts#L31)

## Properties

### access\_token

• **access\_token**: [`default`](OpenPlatform_Auth_AccessToken.default.md) = `null`

请求token

#### Overrides

[default](Core_BaseApplication.default.md).[access_token](Core_BaseApplication.default.md#access_token)

#### Defined in

[OpenPlatform/Application.ts:24](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Application.ts#L24)

___

### base

• **base**: [`default`](OpenPlatform_Base_OpenPlatformBase.default.md) = `null`

#### Defined in

[OpenPlatform/Application.ts:25](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Application.ts#L25)

___

### cache

• **cache**: [`default`](Core_Contracts_CacheInterface.default.md) = `null`

缓存实例

#### Inherited from

[default](Core_BaseApplication.default.md).[cache](Core_BaseApplication.default.md#cache)

#### Defined in

[Core/BaseApplication.ts:20](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L20)

___

### code\_template

• **code\_template**: [`default`](OpenPlatform_CodeTemplate_CodeTemplateClient.default.md) = `null`

#### Defined in

[OpenPlatform/Application.ts:28](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Application.ts#L28)

___

### component

• **component**: [`default`](OpenPlatform_Component_ComponentClient.default.md) = `null`

#### Defined in

[OpenPlatform/Application.ts:29](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Application.ts#L29)

___

### config

• **config**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) = `{}`

配置项

#### Inherited from

[default](Core_BaseApplication.default.md).[config](Core_BaseApplication.default.md#config)

#### Defined in

[Core/BaseApplication.ts:24](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L24)

___

### defaultConfig

• `Protected` **defaultConfig**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) = `{}`

#### Inherited from

[default](Core_BaseApplication.default.md).[defaultConfig](Core_BaseApplication.default.md#defaultconfig)

#### Defined in

[Core/BaseApplication.ts:13](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L13)

___

### encryptor

• **encryptor**: [`default`](Core_Encryptor.default.md) = `null`

#### Defined in

[OpenPlatform/Application.ts:26](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Application.ts#L26)

___

### id

• `Protected` **id**: `String` = `null`

#### Inherited from

[default](Core_BaseApplication.default.md).[id](Core_BaseApplication.default.md#id)

#### Defined in

[Core/BaseApplication.ts:15](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L15)

___

### log

• **log**: `Function` = `null`

日志方法

#### Inherited from

[default](Core_BaseApplication.default.md).[log](Core_BaseApplication.default.md#log)

#### Defined in

[Core/BaseApplication.ts:28](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L28)

___

### request

• **request**: [`default`](Core_Http_Request.default.md) = `null`

请求实例

#### Inherited from

[default](Core_BaseApplication.default.md).[request](Core_BaseApplication.default.md#request)

#### Defined in

[Core/BaseApplication.ts:32](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L32)

___

### server

• **server**: [`default`](OpenPlatform_Server_OpenPlatformGuard.default.md) = `null`

#### Defined in

[OpenPlatform/Application.ts:27](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Application.ts#L27)

___

### userConfig

• `Protected` **userConfig**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) = `{}`

#### Inherited from

[default](Core_BaseApplication.default.md).[userConfig](Core_BaseApplication.default.md#userconfig)

#### Defined in

[Core/BaseApplication.ts:14](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L14)

___

### verify\_ticket

• **verify\_ticket**: [`default`](OpenPlatform_Auth_VerifyTicket.default.md) = `null`

#### Defined in

[OpenPlatform/Application.ts:23](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Application.ts#L23)

## Methods

### clearQuota

▸ **clearQuota**(): `Promise`<`any`\>

清零调用次数

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Application.ts:239](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Application.ts#L239)

___

### createDefaultCache

▸ **createDefaultCache**(): [`default`](Core_Cache_FileCache.default.md)

生成默认的缓存实例（文件缓存）

#### Returns

[`default`](Core_Cache_FileCache.default.md)

#### Inherited from

[default](Core_BaseApplication.default.md).[createDefaultCache](Core_BaseApplication.default.md#createdefaultcache)

#### Defined in

[Core/BaseApplication.ts:157](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L157)

___

### createPreAuthorizationCode

▸ **createPreAuthorizationCode**(): `Promise`<`any`\>

获取预授权码

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Application.ts:232](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Application.ts#L232)

___

### extend

▸ **extend**(`id`, `func`): `void`

扩展服务模块

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 服务模块的id，如：cache、request、access_token |
| `func` | `Function` | 传入一个闭包，闭包会接收一个指向id模块的实例参数 |

#### Returns

`void`

#### Inherited from

[default](Core_BaseApplication.default.md).[extend](Core_BaseApplication.default.md#extend)

#### Defined in

[Core/BaseApplication.ts:102](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L102)

___

### getAuthorizer

▸ **getAuthorizer**(): `Promise`<`any`\>

获取授权方的帐号基本信息

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Application.ts:197](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Application.ts#L197)

___

### getAuthorizerConfig

▸ `Protected` **getAuthorizerConfig**(`appId`, `refreshToken?`): `object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `appId` | `string` | `undefined` |
| `refreshToken` | `string` | `null` |

#### Returns

`object`

#### Defined in

[OpenPlatform/Application.ts:111](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Application.ts#L111)

___

### getAuthorizerOption

▸ **getAuthorizerOption**(): `Promise`<`any`\>

设置授权方的选项信息

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Application.ts:206](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Application.ts#L206)

___

### getAuthorizers

▸ **getAuthorizers**(): `Promise`<`any`\>

获取已授权的授权方列表

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Application.ts:225](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Application.ts#L225)

___

### getCache

▸ **getCache**(): [`default`](Core_Contracts_CacheInterface.default.md)

获取cache实例

#### Returns

[`default`](Core_Contracts_CacheInterface.default.md)

#### Inherited from

[default](Core_BaseApplication.default.md).[getCache](Core_BaseApplication.default.md#getcache)

#### Defined in

[Core/BaseApplication.ts:145](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L145)

___

### getConfig

▸ **getConfig**(): [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md)

获取合并后的配置

#### Returns

[`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md)

#### Inherited from

[default](Core_BaseApplication.default.md).[getConfig](Core_BaseApplication.default.md#getconfig)

#### Defined in

[Core/BaseApplication.ts:64](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L64)

___

### getId

▸ **getId**(): `String`

#### Returns

`String`

#### Inherited from

[default](Core_BaseApplication.default.md).[getId](Core_BaseApplication.default.md#getid)

#### Defined in

[Core/BaseApplication.ts:53](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L53)

___

### getMobilePreAuthorizationUrl

▸ **getMobilePreAuthorizationUrl**(`callbackUrl`, `optional?`): `Promise`<`string`\>

获取移动端用户授权页 URL

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackUrl` | `string` | 回调地址 |
| `optional` | `Object` | 其它参数 |

#### Returns

`Promise`<`string`\>

#### Defined in

[OpenPlatform/Application.ts:92](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Application.ts#L92)

___

### getPreAuthorizationUrl

▸ **getPreAuthorizationUrl**(`callbackUrl`, `optional?`): `Promise`<`string`\>

获取用户授权页 URL

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackUrl` | `string` | 回调地址 |
| `optional` | `Object` | 其它参数 |

#### Returns

`Promise`<`string`\>

#### Defined in

[OpenPlatform/Application.ts:70](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Application.ts#L70)

___

### getReplaceServices

▸ `Protected` **getReplaceServices**(`accessToken?`): `object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `accessToken` | `any` | `null` |

#### Returns

`object`

#### Defined in

[OpenPlatform/Application.ts:120](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Application.ts#L120)

___

### handleAuthorize

▸ **handleAuthorize**(): `Promise`<`any`\>

使用授权码换取接口调用凭据和授权信息

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Application.ts:189](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Application.ts#L189)

___

### miniProgram

▸ **miniProgram**(`appId`, `refreshToken?`, `accessToken?`): [`default`](OpenPlatform_Authorizer_MiniProgram_Application.default.md)

代理小程序实现业务，返回SDK实例

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `appId` | `string` | `undefined` | 授权方小程序 APPID，非开放平台第三方平台 APPID |
| `refreshToken` | `string` | `null` | 为授权方的 refresh_token |
| `accessToken` | [`default`](OpenPlatform_Authorizer_Auth_AccessToken.default.md) | `null` |  |

#### Returns

[`default`](OpenPlatform_Authorizer_MiniProgram_Application.default.md)

#### Defined in

[OpenPlatform/Application.ts:171](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Application.ts#L171)

___

### officialAccount

▸ **officialAccount**(`appId`, `refreshToken?`, `accessToken?`): [`default`](OpenPlatform_Authorizer_OfficialAccount_Application.default.md)

代理公众号实现业务，返回SDK实例

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `appId` | `string` | `undefined` | 授权方公众号 APPID，非开放平台第三方平台 APPID |
| `refreshToken` | `string` | `null` | 为授权方的 refresh_token |
| `accessToken` | [`default`](OpenPlatform_Authorizer_Auth_AccessToken.default.md) | `null` |  |

#### Returns

[`default`](OpenPlatform_Authorizer_OfficialAccount_Application.default.md)

#### Defined in

[OpenPlatform/Application.ts:147](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Application.ts#L147)

___

### offsetSet

▸ **offsetSet**(`id`, `value`): `void`

绑定自定义服务模块

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 服务模块的id，如：cache、request、access_token |
| `value` | `any` | 自定义服务模块的实例，可以传入一个闭包，闭包会接收一个指向Application的参数 |

#### Returns

`void`

#### Inherited from

[default](Core_BaseApplication.default.md).[offsetSet](Core_BaseApplication.default.md#offsetset)

#### Defined in

[Core/BaseApplication.ts:134](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L134)

___

### offsetUnset

▸ **offsetUnset**(`id`): `void`

解绑自定义服务模块

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 服务模块的id，如：cache、request、access_token |

#### Returns

`void`

#### Inherited from

[default](Core_BaseApplication.default.md).[offsetUnset](Core_BaseApplication.default.md#offsetunset)

#### Defined in

[Core/BaseApplication.ts:124](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L124)

___

### rebind

▸ **rebind**(`id`, `value`): `void`

自定义服务模块（重新绑定）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 服务模块的id，如：cache、request、access_token |
| `value` | `any` | 自定义服务模块的实例，可以传入一个闭包，闭包会接收一个指向Application的参数 |

#### Returns

`void`

#### Inherited from

[default](Core_BaseApplication.default.md).[rebind](Core_BaseApplication.default.md#rebind)

#### Defined in

[Core/BaseApplication.ts:113](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L113)

___

### registerCommonProviders

▸ **registerCommonProviders**(): `void`

注册通用模块

#### Returns

`void`

#### Inherited from

[default](Core_BaseApplication.default.md).[registerCommonProviders](Core_BaseApplication.default.md#registercommonproviders)

#### Defined in

[Core/BaseApplication.ts:80](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L80)

___

### registerProviders

▸ **registerProviders**(): `void`

#### Returns

`void`

#### Defined in

[OpenPlatform/Application.ts:38](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Application.ts#L38)

___

### setAuthorizerOption

▸ **setAuthorizerOption**(): `Promise`<`any`\>

设置授权方的选项信息

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Application.ts:216](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Application.ts#L216)
