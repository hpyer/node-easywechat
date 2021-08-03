[node-easywechat](../README.md) / [Exports](../modules.md) / [Work/Server/Guard](../modules/Work_Server_Guard.md) / default

# Class: default

[Work/Server/Guard](../modules/Work_Server_Guard.md).default

## Hierarchy

- [`default`](Core_ServerGuard.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](Work_Server_Guard.default.md#constructor)

### Properties

- [alwaysValidate](Work_Server_Guard.default.md#alwaysvalidate)
- [app](Work_Server_Guard.default.md#app)
- [handlers](Work_Server_Guard.default.md#handlers)
- [MESSAGE\_TYPE\_MAPPING](Work_Server_Guard.default.md#message_type_mapping)
- [SUCCESS\_EMPTY\_RESPONSE](Work_Server_Guard.default.md#success_empty_response)

### Methods

- [\_callHandler](Work_Server_Guard.default.md#_callhandler)
- [buildReply](Work_Server_Guard.default.md#buildreply)
- [buildResponse](Work_Server_Guard.default.md#buildresponse)
- [decryptMessage](Work_Server_Guard.default.md#decryptmessage)
- [dispatch](Work_Server_Guard.default.md#dispatch)
- [forceValidate](Work_Server_Guard.default.md#forcevalidate)
- [getMessage](Work_Server_Guard.default.md#getmessage)
- [getToken](Work_Server_Guard.default.md#gettoken)
- [handleRequest](Work_Server_Guard.default.md#handlerequest)
- [isSafeMode](Work_Server_Guard.default.md#issafemode)
- [notify](Work_Server_Guard.default.md#notify)
- [observe](Work_Server_Guard.default.md#observe)
- [on](Work_Server_Guard.default.md#on)
- [parseMessage](Work_Server_Guard.default.md#parsemessage)
- [parseXmlMessage](Work_Server_Guard.default.md#parsexmlmessage)
- [push](Work_Server_Guard.default.md#push)
- [resolve](Work_Server_Guard.default.md#resolve)
- [serve](Work_Server_Guard.default.md#serve)
- [shouldReturnRawResponse](Work_Server_Guard.default.md#shouldreturnrawresponse)
- [signature](Work_Server_Guard.default.md#signature)
- [validate](Work_Server_Guard.default.md#validate)

## Constructors

### constructor

• **new default**(`app`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`default`](Core_BaseApplication.default.md) |

#### Inherited from

[default](Core_ServerGuard.default.md).[constructor](Core_ServerGuard.default.md#constructor)

#### Defined in

[Core/ServerGuard.ts:38](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/ServerGuard.ts#L38)

## Properties

### alwaysValidate

• `Protected` **alwaysValidate**: `boolean` = `false`

#### Inherited from

[default](Core_ServerGuard.default.md).[alwaysValidate](Core_ServerGuard.default.md#alwaysvalidate)

#### Defined in

[Core/ServerGuard.ts:33](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/ServerGuard.ts#L33)

___

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Inherited from

[default](Core_ServerGuard.default.md).[app](Core_ServerGuard.default.md#app)

#### Defined in

[Core/ServerGuard.ts:31](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/ServerGuard.ts#L31)

___

### handlers

• `Protected` **handlers**: [`ServerHandlers`](../interfaces/Core_Types.ServerHandlers.md) = `{}`

#### Inherited from

[default](Core_ServerGuard.default.md).[handlers](Core_ServerGuard.default.md#handlers)

#### Defined in

[Core/ServerGuard.ts:35](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/ServerGuard.ts#L35)

___

### MESSAGE\_TYPE\_MAPPING

▪ `Static` **MESSAGE\_TYPE\_MAPPING**: `object`

#### Inherited from

[default](Core_ServerGuard.default.md).[MESSAGE_TYPE_MAPPING](Core_ServerGuard.default.md#message_type_mapping)

#### Defined in

[Core/ServerGuard.ts:16](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/ServerGuard.ts#L16)

___

### SUCCESS\_EMPTY\_RESPONSE

▪ `Static` **SUCCESS\_EMPTY\_RESPONSE**: `string` = `'success'`

#### Inherited from

[default](Core_ServerGuard.default.md).[SUCCESS_EMPTY_RESPONSE](Core_ServerGuard.default.md#success_empty_response)

#### Defined in

[Core/ServerGuard.ts:14](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/ServerGuard.ts#L14)

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

#### Inherited from

[default](Core_ServerGuard.default.md).[_callHandler](Core_ServerGuard.default.md#_callhandler)

#### Defined in

[Core/ServerGuard.ts:116](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/ServerGuard.ts#L116)

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

#### Inherited from

[default](Core_ServerGuard.default.md).[buildReply](Core_ServerGuard.default.md#buildreply)

#### Defined in

[Core/ServerGuard.ts:228](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/ServerGuard.ts#L228)

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

#### Inherited from

[default](Core_ServerGuard.default.md).[buildResponse](Core_ServerGuard.default.md#buildresponse)

#### Defined in

[Core/ServerGuard.ts:199](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/ServerGuard.ts#L199)

___

### decryptMessage

▸ `Protected` **decryptMessage**(`message`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `object` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[default](Core_ServerGuard.default.md).[decryptMessage](Core_ServerGuard.default.md#decryptmessage)

#### Defined in

[Core/ServerGuard.ts:355](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/ServerGuard.ts#L355)

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

#### Inherited from

[default](Core_ServerGuard.default.md).[dispatch](Core_ServerGuard.default.md#dispatch)

#### Defined in

[Core/ServerGuard.ts:75](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/ServerGuard.ts#L75)

___

### forceValidate

▸ `Protected` **forceValidate**(): [`default`](Work_Server_Guard.default.md)

#### Returns

[`default`](Work_Server_Guard.default.md)

#### Inherited from

[default](Core_ServerGuard.default.md).[forceValidate](Core_ServerGuard.default.md#forcevalidate)

#### Defined in

[Core/ServerGuard.ts:170](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/ServerGuard.ts#L170)

___

### getMessage

▸ **getMessage**(): `Promise`<`object`\>

获取消息

#### Returns

`Promise`<`object`\>

#### Inherited from

[default](Core_ServerGuard.default.md).[getMessage](Core_ServerGuard.default.md#getmessage)

#### Defined in

[Core/ServerGuard.ts:290](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/ServerGuard.ts#L290)

___

### getToken

▸ `Protected` **getToken**(): `string`

#### Returns

`string`

#### Inherited from

[default](Core_ServerGuard.default.md).[getToken](Core_ServerGuard.default.md#gettoken)

#### Defined in

[Core/ServerGuard.ts:255](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/ServerGuard.ts#L255)

___

### handleRequest

▸ `Protected` **handleRequest**(): `Promise`<`object`\>

#### Returns

`Promise`<`object`\>

#### Inherited from

[default](Core_ServerGuard.default.md).[handleRequest](Core_ServerGuard.default.md#handlerequest)

#### Defined in

[Core/ServerGuard.ts:274](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/ServerGuard.ts#L274)

___

### isSafeMode

▸ `Protected` **isSafeMode**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Overrides

[default](Core_ServerGuard.default.md).[isSafeMode](Core_ServerGuard.default.md#issafemode)

#### Defined in

[Work/Server/Guard.ts:12](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Work/Server/Guard.ts#L12)

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

#### Inherited from

[default](Core_ServerGuard.default.md).[notify](Core_ServerGuard.default.md#notify)

#### Defined in

[Core/ServerGuard.ts:80](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/ServerGuard.ts#L80)

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

#### Inherited from

[default](Core_ServerGuard.default.md).[observe](Core_ServerGuard.default.md#observe)

#### Defined in

[Core/ServerGuard.ts:57](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/ServerGuard.ts#L57)

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

#### Inherited from

[default](Core_ServerGuard.default.md).[on](Core_ServerGuard.default.md#on)

#### Defined in

[Core/ServerGuard.ts:48](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/ServerGuard.ts#L48)

___

### parseMessage

▸ `Protected` **parseMessage**(`content`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](Core_ServerGuard.default.md).[parseMessage](Core_ServerGuard.default.md#parsemessage)

#### Defined in

[Core/ServerGuard.ts:309](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/ServerGuard.ts#L309)

___

### parseXmlMessage

▸ `Protected` **parseXmlMessage**(`xml`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `xml` | `any` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](Core_ServerGuard.default.md).[parseXmlMessage](Core_ServerGuard.default.md#parsexmlmessage)

#### Defined in

[Core/ServerGuard.ts:331](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/ServerGuard.ts#L331)

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

#### Inherited from

[default](Core_ServerGuard.default.md).[push](Core_ServerGuard.default.md#push)

#### Defined in

[Core/ServerGuard.ts:67](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/ServerGuard.ts#L67)

___

### resolve

▸ `Protected` **resolve**(): `Promise`<[`default`](Core_Http_Response.default.md)\>

#### Returns

`Promise`<[`default`](Core_Http_Response.default.md)\>

#### Inherited from

[default](Core_ServerGuard.default.md).[resolve](Core_ServerGuard.default.md#resolve)

#### Defined in

[Core/ServerGuard.ts:176](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/ServerGuard.ts#L176)

___

### serve

▸ **serve**(): `Promise`<[`default`](Core_Http_Response.default.md)\>

处理消息

#### Returns

`Promise`<[`default`](Core_Http_Response.default.md)\>

#### Inherited from

[default](Core_ServerGuard.default.md).[serve](Core_ServerGuard.default.md#serve)

#### Defined in

[Core/ServerGuard.ts:133](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/ServerGuard.ts#L133)

___

### shouldReturnRawResponse

▸ `Protected` **shouldReturnRawResponse**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Overrides

[default](Core_ServerGuard.default.md).[shouldReturnRawResponse](Core_ServerGuard.default.md#shouldreturnrawresponse)

#### Defined in

[Work/Server/Guard.ts:17](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Work/Server/Guard.ts#L17)

___

### signature

▸ `Protected` **signature**(`params`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`string`

#### Inherited from

[default](Core_ServerGuard.default.md).[signature](Core_ServerGuard.default.md#signature)

#### Defined in

[Core/ServerGuard.ts:267](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/ServerGuard.ts#L267)

___

### validate

▸ `Protected` **validate**(): `Promise`<[`default`](Work_Server_Guard.default.md)\>

#### Returns

`Promise`<[`default`](Work_Server_Guard.default.md)\>

#### Overrides

[default](Core_ServerGuard.default.md).[validate](Core_ServerGuard.default.md#validate)

#### Defined in

[Work/Server/Guard.ts:7](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Work/Server/Guard.ts#L7)
