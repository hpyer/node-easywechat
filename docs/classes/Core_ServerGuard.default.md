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
- [parseXmlMessage](Core_ServerGuard.default.md#parsexmlmessage)
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

[Core/ServerGuard.ts:38](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L38)

## Properties

### alwaysValidate

• `Protected` **alwaysValidate**: `boolean` = `false`

#### Defined in

[Core/ServerGuard.ts:33](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L33)

___

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Defined in

[Core/ServerGuard.ts:31](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L31)

___

### handlers

• `Protected` **handlers**: [`ServerHandlers`](../interfaces/Core_Types.ServerHandlers.md) = `{}`

#### Defined in

[Core/ServerGuard.ts:35](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L35)

___

### MESSAGE\_TYPE\_MAPPING

▪ `Static` **MESSAGE\_TYPE\_MAPPING**: `object`

#### Defined in

[Core/ServerGuard.ts:16](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L16)

___

### SUCCESS\_EMPTY\_RESPONSE

▪ `Static` **SUCCESS\_EMPTY\_RESPONSE**: `string` = `'success'`

#### Defined in

[Core/ServerGuard.ts:14](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L14)

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

[Core/ServerGuard.ts:116](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L116)

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

[Core/ServerGuard.ts:228](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L228)

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

[Core/ServerGuard.ts:199](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L199)

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

[Core/ServerGuard.ts:355](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L355)

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

[Core/ServerGuard.ts:75](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L75)

___

### forceValidate

▸ `Protected` **forceValidate**(): [`default`](Core_ServerGuard.default.md)

#### Returns

[`default`](Core_ServerGuard.default.md)

#### Defined in

[Core/ServerGuard.ts:170](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L170)

___

### getMessage

▸ **getMessage**(): `Promise`<`object`\>

获取消息

#### Returns

`Promise`<`object`\>

#### Defined in

[Core/ServerGuard.ts:290](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L290)

___

### getToken

▸ `Protected` **getToken**(): `string`

#### Returns

`string`

#### Defined in

[Core/ServerGuard.ts:255](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L255)

___

### handleRequest

▸ `Protected` **handleRequest**(): `Promise`<`object`\>

#### Returns

`Promise`<`object`\>

#### Defined in

[Core/ServerGuard.ts:274](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L274)

___

### isSafeMode

▸ `Protected` **isSafeMode**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[Core/ServerGuard.ts:260](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L260)

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

[Core/ServerGuard.ts:80](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L80)

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

[Core/ServerGuard.ts:57](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L57)

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

[Core/ServerGuard.ts:48](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L48)

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

[Core/ServerGuard.ts:309](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L309)

___

### parseXmlMessage

▸ `Protected` **parseXmlMessage**(`xml`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `xml` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Core/ServerGuard.ts:331](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L331)

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

[Core/ServerGuard.ts:67](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L67)

___

### resolve

▸ `Protected` **resolve**(): `Promise`<[`default`](Core_Http_Response.default.md)\>

#### Returns

`Promise`<[`default`](Core_Http_Response.default.md)\>

#### Defined in

[Core/ServerGuard.ts:176](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L176)

___

### serve

▸ **serve**(): `Promise`<[`default`](Core_Http_Response.default.md)\>

处理消息

#### Returns

`Promise`<[`default`](Core_Http_Response.default.md)\>

#### Defined in

[Core/ServerGuard.ts:133](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L133)

___

### shouldReturnRawResponse

▸ `Protected` **shouldReturnRawResponse**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[Core/ServerGuard.ts:194](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L194)

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

[Core/ServerGuard.ts:267](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L267)

___

### validate

▸ `Protected` **validate**(): `Promise`<[`default`](Core_ServerGuard.default.md)\>

#### Returns

`Promise`<[`default`](Core_ServerGuard.default.md)\>

#### Defined in

[Core/ServerGuard.ts:153](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/ServerGuard.ts#L153)
