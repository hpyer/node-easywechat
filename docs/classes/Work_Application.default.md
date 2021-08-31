[node-easywechat](../README.md) / [Exports](../modules.md) / [Work/Application](../modules/Work_Application.md) / default

# Class: default

[Work/Application](../modules/Work_Application.md).default

## Hierarchy

- [`default`](Core_BaseApplication.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](Work_Application.default.md#constructor)

### Properties

- [access\_token](Work_Application.default.md#access_token)
- [agent](Work_Application.default.md#agent)
- [base](Work_Application.default.md#base)
- [cache](Work_Application.default.md#cache)
- [calendar](Work_Application.default.md#calendar)
- [chat](Work_Application.default.md#chat)
- [config](Work_Application.default.md#config)
- [contact\_way](Work_Application.default.md#contact_way)
- [corp\_group](Work_Application.default.md#corp_group)
- [defaultConfig](Work_Application.default.md#defaultconfig)
- [department](Work_Application.default.md#department)
- [encryptor](Work_Application.default.md#encryptor)
- [external\_contact](Work_Application.default.md#external_contact)
- [external\_contact\_message](Work_Application.default.md#external_contact_message)
- [external\_contact\_message\_template](Work_Application.default.md#external_contact_message_template)
- [external\_contact\_moment](Work_Application.default.md#external_contact_moment)
- [external\_contact\_statistics](Work_Application.default.md#external_contact_statistics)
- [group\_robot](Work_Application.default.md#group_robot)
- [group\_robot\_messenger](Work_Application.default.md#group_robot_messenger)
- [id](Work_Application.default.md#id)
- [invoice](Work_Application.default.md#invoice)
- [jssdk](Work_Application.default.md#jssdk)
- [live](Work_Application.default.md#live)
- [log](Work_Application.default.md#log)
- [media](Work_Application.default.md#media)
- [menu](Work_Application.default.md#menu)
- [message](Work_Application.default.md#message)
- [messenger](Work_Application.default.md#messenger)
- [msg\_audit](Work_Application.default.md#msg_audit)
- [oa](Work_Application.default.md#oa)
- [oauth](Work_Application.default.md#oauth)
- [request](Work_Application.default.md#request)
- [school](Work_Application.default.md#school)
- [server](Work_Application.default.md#server)
- [tag](Work_Application.default.md#tag)
- [user](Work_Application.default.md#user)
- [userConfig](Work_Application.default.md#userconfig)

### Methods

- [createDefaultCache](Work_Application.default.md#createdefaultcache)
- [extend](Work_Application.default.md#extend)
- [getCache](Work_Application.default.md#getcache)
- [getCallbackIp](Work_Application.default.md#getcallbackip)
- [getConfig](Work_Application.default.md#getconfig)
- [getId](Work_Application.default.md#getid)
- [miniProgram](Work_Application.default.md#miniprogram)
- [offsetSet](Work_Application.default.md#offsetset)
- [offsetUnset](Work_Application.default.md#offsetunset)
- [rebind](Work_Application.default.md#rebind)
- [registerCommonProviders](Work_Application.default.md#registercommonproviders)
- [registerProviders](Work_Application.default.md#registerproviders)

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

[Work/Application.ts:78](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L78)

## Properties

### access\_token

• **access\_token**: [`default`](Work_Auth_AccessToken.default.md) = `null`

请求token

#### Overrides

[default](Core_BaseApplication.default.md).[access_token](Core_BaseApplication.default.md#access_token)

#### Defined in

[Work/Application.ts:48](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L48)

___

### agent

• **agent**: [`default`](Work_Agent_AgentClient.default.md) = `null`

#### Defined in

[Work/Application.ts:49](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L49)

___

### base

• **base**: [`default`](Work_Base_WorkBase.default.md) = `null`

#### Defined in

[Work/Application.ts:50](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L50)

___

### cache

• **cache**: [`default`](Core_Contracts_CacheInterface.default.md) = `null`

缓存实例

#### Inherited from

[default](Core_BaseApplication.default.md).[cache](Core_BaseApplication.default.md#cache)

#### Defined in

[Core/BaseApplication.ts:20](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L20)

___

### calendar

• **calendar**: [`default`](Work_Calendar_CalendarClient.default.md) = `null`

#### Defined in

[Work/Application.ts:51](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L51)

___

### chat

• **chat**: [`default`](Work_Chat_ChatClient.default.md) = `null`

#### Defined in

[Work/Application.ts:52](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L52)

___

### config

• **config**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) = `{}`

配置项

#### Inherited from

[default](Core_BaseApplication.default.md).[config](Core_BaseApplication.default.md#config)

#### Defined in

[Core/BaseApplication.ts:24](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L24)

___

### contact\_way

• **contact\_way**: [`default`](Work_ExternalContact_ContactWayClient.default.md) = `null`

#### Defined in

[Work/Application.ts:56](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L56)

___

### corp\_group

• **corp\_group**: [`default`](Work_CorpGroup_CorpGroupClient.default.md) = `null`

#### Defined in

[Work/Application.ts:53](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L53)

___

### defaultConfig

• `Protected` **defaultConfig**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md)

#### Overrides

[default](Core_BaseApplication.default.md).[defaultConfig](Core_BaseApplication.default.md#defaultconfig)

#### Defined in

[Work/Application.ts:41](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L41)

___

### department

• **department**: [`default`](Work_Department_DepartmentClient.default.md) = `null`

#### Defined in

[Work/Application.ts:54](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L54)

___

### encryptor

• **encryptor**: [`default`](Core_Encryptor.default.md) = `null`

#### Defined in

[Work/Application.ts:72](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L72)

___

### external\_contact

• **external\_contact**: [`default`](Work_ExternalContact_Client.default.md) = `null`

#### Defined in

[Work/Application.ts:55](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L55)

___

### external\_contact\_message

• **external\_contact\_message**: [`default`](Work_ExternalContact_MessageClient.default.md) = `null`

#### Defined in

[Work/Application.ts:58](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L58)

___

### external\_contact\_message\_template

• **external\_contact\_message\_template**: [`default`](Work_ExternalContact_MessageTemplateClient.default.md) = `null`

#### Defined in

[Work/Application.ts:59](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L59)

___

### external\_contact\_moment

• **external\_contact\_moment**: [`default`](Work_ExternalContact_MomentClient.default.md) = `null`

#### Defined in

[Work/Application.ts:61](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L61)

___

### external\_contact\_statistics

• **external\_contact\_statistics**: [`default`](Work_ExternalContact_StatisticsClient.default.md) = `null`

#### Defined in

[Work/Application.ts:57](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L57)

___

### group\_robot

• **group\_robot**: [`default`](Work_GroupRobot_GroupRobotClient.default.md) = `null`

#### Defined in

[Work/Application.ts:62](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L62)

___

### group\_robot\_messenger

• **group\_robot\_messenger**: [`default`](Work_GroupRobot_Messenger.default.md) = `null`

#### Defined in

[Work/Application.ts:63](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L63)

___

### id

• `Protected` **id**: `String` = `null`

#### Inherited from

[default](Core_BaseApplication.default.md).[id](Core_BaseApplication.default.md#id)

#### Defined in

[Core/BaseApplication.ts:15](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L15)

___

### invoice

• **invoice**: [`default`](Work_Invoice_InvoiceClient.default.md) = `null`

#### Defined in

[Work/Application.ts:64](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L64)

___

### jssdk

• **jssdk**: [`default`](Work_Jssdk_JssdkClient.default.md) = `null`

#### Defined in

[Work/Application.ts:65](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L65)

___

### live

• **live**: [`default`](Work_Live_LiveClient.default.md) = `null`

#### Defined in

[Work/Application.ts:66](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L66)

___

### log

• **log**: `Function` = `null`

日志方法

#### Inherited from

[default](Core_BaseApplication.default.md).[log](Core_BaseApplication.default.md#log)

#### Defined in

[Core/BaseApplication.ts:28](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L28)

___

### media

• **media**: [`default`](Work_Media_MediaClient.default.md) = `null`

#### Defined in

[Work/Application.ts:67](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L67)

___

### menu

• **menu**: [`default`](Work_Menu_MenuClient.default.md) = `null`

#### Defined in

[Work/Application.ts:68](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L68)

___

### message

• **message**: [`default`](Work_Message_MessageClient.default.md) = `null`

#### Defined in

[Work/Application.ts:69](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L69)

___

### messenger

• **messenger**: [`default`](Work_Message_Messenger.default.md) = `null`

#### Defined in

[Work/Application.ts:70](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L70)

___

### msg\_audit

• **msg\_audit**: [`default`](Work_MsgAudit_MsgAuditClient.default.md) = `null`

#### Defined in

[Work/Application.ts:71](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L71)

___

### oa

• **oa**: [`default`](Work_OA_OAClient.default.md) = `null`

#### Defined in

[Work/Application.ts:47](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L47)

___

### oauth

• **oauth**: `default` = `null`

#### Defined in

[Work/Application.ts:76](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L76)

___

### request

• **request**: [`default`](Core_Http_Request.default.md) = `null`

请求实例

#### Inherited from

[default](Core_BaseApplication.default.md).[request](Core_BaseApplication.default.md#request)

#### Defined in

[Core/BaseApplication.ts:32](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L32)

___

### school

• **school**: [`default`](Work_ExternalContact_SchoolClient.default.md) = `null`

#### Defined in

[Work/Application.ts:60](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L60)

___

### server

• **server**: [`default`](Work_Server_Guard.default.md) = `null`

#### Defined in

[Work/Application.ts:73](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L73)

___

### tag

• **tag**: [`default`](Work_User_TagClient.default.md) = `null`

#### Defined in

[Work/Application.ts:75](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L75)

___

### user

• **user**: [`default`](Work_User_UserClient.default.md) = `null`

#### Defined in

[Work/Application.ts:74](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L74)

___

### userConfig

• `Protected` **userConfig**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) = `{}`

#### Inherited from

[default](Core_BaseApplication.default.md).[userConfig](Core_BaseApplication.default.md#userconfig)

#### Defined in

[Core/BaseApplication.ts:14](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L14)

## Methods

### createDefaultCache

▸ **createDefaultCache**(): [`default`](Core_Cache_FileCache.default.md)

生成默认的缓存实例（文件缓存）

#### Returns

[`default`](Core_Cache_FileCache.default.md)

#### Inherited from

[default](Core_BaseApplication.default.md).[createDefaultCache](Core_BaseApplication.default.md#createdefaultcache)

#### Defined in

[Core/BaseApplication.ts:161](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L161)

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

[Core/BaseApplication.ts:106](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L106)

___

### getCache

▸ **getCache**(): [`default`](Core_Contracts_CacheInterface.default.md)

获取cache实例

#### Returns

[`default`](Core_Contracts_CacheInterface.default.md)

#### Inherited from

[default](Core_BaseApplication.default.md).[getCache](Core_BaseApplication.default.md#getcache)

#### Defined in

[Core/BaseApplication.ts:149](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L149)

___

### getCallbackIp

▸ **getCallbackIp**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/Application.ts:239](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L239)

___

### getConfig

▸ **getConfig**(): [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md)

获取合并后的配置

#### Returns

[`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md)

#### Inherited from

[default](Core_BaseApplication.default.md).[getConfig](Core_BaseApplication.default.md#getconfig)

#### Defined in

[Core/BaseApplication.ts:64](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L64)

___

### getId

▸ **getId**(): `String`

#### Returns

`String`

#### Inherited from

[default](Core_BaseApplication.default.md).[getId](Core_BaseApplication.default.md#getid)

#### Defined in

[Core/BaseApplication.ts:53](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L53)

___

### miniProgram

▸ **miniProgram**(): [`default`](Work_MiniProgram_Application.default.md)

#### Returns

[`default`](Work_MiniProgram_Application.default.md)

#### Defined in

[Work/Application.ts:233](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L233)

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

[Core/BaseApplication.ts:138](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L138)

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

[Core/BaseApplication.ts:128](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L128)

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

[Core/BaseApplication.ts:117](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L117)

___

### registerCommonProviders

▸ **registerCommonProviders**(): `void`

注册通用模块

#### Returns

`void`

#### Inherited from

[default](Core_BaseApplication.default.md).[registerCommonProviders](Core_BaseApplication.default.md#registercommonproviders)

#### Defined in

[Core/BaseApplication.ts:80](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L80)

___

### registerProviders

▸ **registerProviders**(): `void`

#### Returns

`void`

#### Defined in

[Work/Application.ts:85](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/Application.ts#L85)
