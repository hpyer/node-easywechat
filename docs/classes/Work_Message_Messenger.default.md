[node-easywechat](../README.md) / [Exports](../modules.md) / [Work/Message/Messenger](../modules/Work_Message_Messenger.md) / default

# Class: default

[Work/Message/Messenger](../modules/Work_Message_Messenger.md).default

## Table of contents

### Constructors

- [constructor](Work_Message_Messenger.default.md#constructor)

### Properties

- [agentId](Work_Message_Messenger.default.md#agentid)
- [client](Work_Message_Messenger.default.md#client)
- [message](Work_Message_Messenger.default.md#message)
- [secretive](Work_Message_Messenger.default.md#secretive)
- [to](Work_Message_Messenger.default.md#to)

### Methods

- [ofAgent](Work_Message_Messenger.default.md#ofagent)
- [send](Work_Message_Messenger.default.md#send)
- [setMessage](Work_Message_Messenger.default.md#setmessage)
- [setRecipients](Work_Message_Messenger.default.md#setrecipients)
- [setSecretive](Work_Message_Messenger.default.md#setsecretive)
- [toParty](Work_Message_Messenger.default.md#toparty)
- [toTag](Work_Message_Messenger.default.md#totag)
- [toUser](Work_Message_Messenger.default.md#touser)

## Constructors

### constructor

• **new default**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`default`](Work_Message_MessageClient.default.md) |

#### Defined in

[Work/Message/Messenger.ts:21](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/Message/Messenger.ts#L21)

## Properties

### agentId

• **agentId**: `number` = `null`

#### Defined in

[Work/Message/Messenger.ts:17](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/Message/Messenger.ts#L17)

___

### client

• `Protected` **client**: [`default`](Work_Message_MessageClient.default.md) = `null`

#### Defined in

[Work/Message/Messenger.ts:11](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/Message/Messenger.ts#L11)

___

### message

• `Protected` **message**: [`Message`](Core_Messages_Message.Message.md) = `null`

#### Defined in

[Work/Message/Messenger.ts:9](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/Message/Messenger.ts#L9)

___

### secretive

• **secretive**: `boolean` = `false`

#### Defined in

[Work/Message/Messenger.ts:19](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/Message/Messenger.ts#L19)

___

### to

• **to**: `object`

#### Defined in

[Work/Message/Messenger.ts:13](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/Message/Messenger.ts#L13)

## Methods

### ofAgent

▸ **ofAgent**(`agentId`): [`default`](Work_Message_Messenger.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agentId` | `number` |

#### Returns

[`default`](Work_Message_Messenger.default.md)

#### Defined in

[Work/Message/Messenger.ts:41](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/Message/Messenger.ts#L41)

___

### send

▸ **send**(`message?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | [`Message`](Core_Messages_Message.Message.md) | `null` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/Message/Messenger.ts:82](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/Message/Messenger.ts#L82)

___

### setMessage

▸ **setMessage**(`message`): [`default`](Work_Message_Messenger.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](Core_Messages_Message.Message.md) |

#### Returns

[`default`](Work_Message_Messenger.default.md)

#### Defined in

[Work/Message/Messenger.ts:26](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/Message/Messenger.ts#L26)

___

### setRecipients

▸ `Protected` **setRecipients**(`ids`, `key`): [`default`](Work_Message_Messenger.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string` \| `string`[] |
| `key` | `string` |

#### Returns

[`default`](Work_Message_Messenger.default.md)

#### Defined in

[Work/Message/Messenger.ts:55](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/Message/Messenger.ts#L55)

___

### setSecretive

▸ **setSecretive**(): [`default`](Work_Message_Messenger.default.md)

#### Returns

[`default`](Work_Message_Messenger.default.md)

#### Defined in

[Work/Message/Messenger.ts:48](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/Message/Messenger.ts#L48)

___

### toParty

▸ **toParty**(`partyIds`): [`default`](Work_Message_Messenger.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `partyIds` | `string` \| `string`[] |

#### Returns

[`default`](Work_Message_Messenger.default.md)

#### Defined in

[Work/Message/Messenger.ts:72](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/Message/Messenger.ts#L72)

___

### toTag

▸ **toTag**(`tagIds`): [`default`](Work_Message_Messenger.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagIds` | `string` \| `string`[] |

#### Returns

[`default`](Work_Message_Messenger.default.md)

#### Defined in

[Work/Message/Messenger.ts:77](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/Message/Messenger.ts#L77)

___

### toUser

▸ **toUser**(`userIds`): [`default`](Work_Message_Messenger.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `userIds` | `string` \| `string`[] |

#### Returns

[`default`](Work_Message_Messenger.default.md)

#### Defined in

[Work/Message/Messenger.ts:67](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/Message/Messenger.ts#L67)
