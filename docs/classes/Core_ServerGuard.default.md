[node-easywechat](../README.md) / [Exports](../modules.md) / [Core/ServerGuard](../modules/Core_ServerGuard.md) / default

# Class: default

[Core/ServerGuard](../modules/Core_ServerGuard.md).default

## Hierarchy

- **`default`**

  ↳ [`default`](OfficialAccount_Server_Guard.default.md)

  ↳ [`default`](OpenPlatform_Authorizer_Server_Guard.default.md)

  ↳ [`default`](OpenPlatform_Server_OpenPlatformGuard.default.md)

  ↳ [`default`](Work_Server_Guard.default.md)

## Table of contents

### Constructors

- [constructor](Core_ServerGuard.default.md#constructor)

### Properties

- [alwaysValidate](Core_ServerGuard.default.md#alwaysvalidate)
- [app](Core_ServerGuard.default.md#app)
- [handlers](Core_ServerGuard.default.md#handlers)
- [MESSAGE\_TYPE\_MAPPING](Core_ServerGuard.default.md#message_type_mapping)
- [SUCCESS\_EMPTY\_RESPONSE](Core_ServerGuard.default.md#success_empty_response)

### Methods

- [\_callHandler](Core_ServerGuard.default.md#_callhandler)
- [buildReply](Core_ServerGuard.default.md#buildreply)
- [buildResponse](Core_ServerGuard.default.md#buildresponse)
- [decryptMessage](Core_ServerGuard.default.md#decryptmessage)
- [dispatch](Core_ServerGuard.default.md#dispatch)
- [forceValidate](Core_ServerGuard.default.md#forcevalidate)
- [getMessage](Core_ServerGuard.default.md#getmessage)
- [getToken](Core_ServerGuard.default.md#gettoken)
- [handleRequest](Core_ServerGuard.default.md#handlerequest)
- [isSafeMode](Core_ServerGuard.default.md#issafemode)
- [notify](Core_ServerGuard.default.md#notify)
- [observe](Core_ServerGuard.default.md#observe)
- [on](Core_ServerGuard.default.md#on)
- [parseMessage](Core_ServerGuard.default.md#parsemessage)
- [push](Core_ServerGuard.default.md#push)
- [resolve](Core_ServerGuard.default.md#resolve)
- [serve](Core_ServerGuard.default.md#serve)
- [shouldReturnRawResponse](Core_ServerGuard.default.md#shouldreturnrawresponse)
- [signature](Core_ServerGuard.default.md#signature)
- [validate](Core_ServerGuard.default.md#validate)

## Constructors

### constructor

• **new default**(`app`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`default`](Core_BaseApplication.default.md) |

#### Defined in

[Core/ServerGuard.ts:37](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L37)

## Properties

### alwaysValidate

• `Protected` **alwaysValidate**: `boolean` = `false`

#### Defined in

[Core/ServerGuard.ts:32](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L32)

___

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Defined in

[Core/ServerGuard.ts:30](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L30)

___

### handlers

• `Protected` **handlers**: [`ServerHandlers`](../interfaces/Core_Types.ServerHandlers.md) = `{}`

#### Defined in

[Core/ServerGuard.ts:34](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L34)

___

### MESSAGE\_TYPE\_MAPPING

▪ `Static` **MESSAGE\_TYPE\_MAPPING**: `object`

#### Defined in

[Core/ServerGuard.ts:15](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L15)

___

### SUCCESS\_EMPTY\_RESPONSE

▪ `Static` **SUCCESS\_EMPTY\_RESPONSE**: `string` = `'success'`

#### Defined in

[Core/ServerGuard.ts:13](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L13)

## Methods

### \_callHandler

▸ `Protected` **_callHandler**(`handler`, `payload`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`ServerHandler`](../modules/Core_Types.md#serverhandler) |
| `payload` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Core/ServerGuard.ts:115](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L115)

___

### buildReply

▸ `Protected` **buildReply**(`to`, `from`, `message`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `from` | `string` |
| `message` | [`Message`](Core_Messages_Message.Message.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[Core/ServerGuard.ts:227](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L227)

___

### buildResponse

▸ `Protected` **buildResponse**(`to`, `from`, `message`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `from` | `string` |
| `message` | `any` |

#### Returns

`Promise`<`string`\>

#### Defined in

[Core/ServerGuard.ts:198](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L198)

___

### decryptMessage

▸ `Protected` **decryptMessage**(`message`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `object` |

#### Returns

`Promise`<`string`\>

#### Defined in

[Core/ServerGuard.ts:322](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L322)

___

### dispatch

▸ `Protected` **dispatch**(`event`, `payload`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `payload` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Core/ServerGuard.ts:74](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L74)

___

### forceValidate

▸ `Protected` **forceValidate**(): [`default`](Core_ServerGuard.default.md)

#### Returns

[`default`](Core_ServerGuard.default.md)

#### Defined in

[Core/ServerGuard.ts:169](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L169)

___

### getMessage

▸ **getMessage**(): `Promise`<`object`\>

获取消息

#### Returns

`Promise`<`object`\>

#### Defined in

[Core/ServerGuard.ts:281](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L281)

___

### getToken

▸ `Protected` **getToken**(): `string`

#### Returns

`string`

#### Defined in

[Core/ServerGuard.ts:246](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L246)

___

### handleRequest

▸ `Protected` **handleRequest**(): `Promise`<`object`\>

#### Returns

`Promise`<`object`\>

#### Defined in

[Core/ServerGuard.ts:265](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L265)

___

### isSafeMode

▸ `Protected` **isSafeMode**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[Core/ServerGuard.ts:251](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L251)

___

### notify

▸ `Protected` **notify**(`event`, `payload`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `payload` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Core/ServerGuard.ts:79](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L79)

___

### observe

▸ **observe**(`condition`, `handler`): `void`

注册消息处理器

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `condition` | `string` | EasyWechat.Messages.Message.xxx，用于处理特定消息类型，默认：* 表示全部 |
| `handler` | [`ServerHandler`](../modules/Core_Types.md#serverhandler) | 处理函数，该函数需要接收一个消息对象 |

#### Returns

`void`

#### Defined in

[Core/ServerGuard.ts:56](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L56)

___

### on

▸ **on**(`condition`, `handler`): `void`

注册消息处理器

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `condition` | `string` | EasyWechat.Messages.Message.xxx，用于处理特定消息类型，默认：* 表示全部 |
| `handler` | [`ServerHandler`](../modules/Core_Types.md#serverhandler) | 处理函数，该函数需要接收一个消息对象 |

#### Returns

`void`

#### Defined in

[Core/ServerGuard.ts:47](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L47)

___

### parseMessage

▸ `Protected` **parseMessage**(`content`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Core/ServerGuard.ts:300](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L300)

___

### push

▸ **push**(`handler`, `condition?`): `void`

注册消息处理器

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `handler` | [`ServerHandler`](../modules/Core_Types.md#serverhandler) | `undefined` | 处理函数，该函数需要接收一个消息对象 |
| `condition` | `string` | `'*'` | EasyWechat.Messages.Message.xxx，用于处理特定消息类型，默认：* 表示全部 |

#### Returns

`void`

#### Defined in

[Core/ServerGuard.ts:66](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L66)

___

### resolve

▸ `Protected` **resolve**(): `Promise`<[`default`](Core_Http_Response.default.md)\>

#### Returns

`Promise`<[`default`](Core_Http_Response.default.md)\>

#### Defined in

[Core/ServerGuard.ts:175](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L175)

___

### serve

▸ **serve**(): `Promise`<[`default`](Core_Http_Response.default.md)\>

处理消息

#### Returns

`Promise`<[`default`](Core_Http_Response.default.md)\>

#### Defined in

[Core/ServerGuard.ts:132](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L132)

___

### shouldReturnRawResponse

▸ `Protected` **shouldReturnRawResponse**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[Core/ServerGuard.ts:193](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L193)

___

### signature

▸ `Protected` **signature**(`params`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`string`

#### Defined in

[Core/ServerGuard.ts:258](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L258)

___

### validate

▸ `Protected` **validate**(): `Promise`<[`default`](Core_ServerGuard.default.md)\>

#### Returns

`Promise`<[`default`](Core_ServerGuard.default.md)\>

#### Defined in

[Core/ServerGuard.ts:152](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/ServerGuard.ts#L152)
