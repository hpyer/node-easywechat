[node-easywechat](../README.md) / [Exports](../modules.md) / [Work/GroupRobot/Messenger](../modules/Work_GroupRobot_Messenger.md) / default

# Class: default

[Work/GroupRobot/Messenger](../modules/Work_GroupRobot_Messenger.md).default

## Table of contents

### Constructors

- [constructor](Work_GroupRobot_Messenger.default.md#constructor)

### Properties

- [client](Work_GroupRobot_Messenger.default.md#client)
- [groupKey](Work_GroupRobot_Messenger.default.md#groupkey)
- [message](Work_GroupRobot_Messenger.default.md#message)

### Methods

- [send](Work_GroupRobot_Messenger.default.md#send)
- [setMessage](Work_GroupRobot_Messenger.default.md#setmessage)
- [toGroup](Work_GroupRobot_Messenger.default.md#togroup)

## Constructors

### constructor

• **new default**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`default`](Work_GroupRobot_GroupRobotClient.default.md) |

#### Defined in

[Work/GroupRobot/Messenger.ts:14](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Work/GroupRobot/Messenger.ts#L14)

## Properties

### client

• `Protected` **client**: [`default`](Work_GroupRobot_GroupRobotClient.default.md) = `null`

#### Defined in

[Work/GroupRobot/Messenger.ts:10](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Work/GroupRobot/Messenger.ts#L10)

___

### groupKey

• **groupKey**: `string` = `null`

#### Defined in

[Work/GroupRobot/Messenger.ts:12](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Work/GroupRobot/Messenger.ts#L12)

___

### message

• `Protected` **message**: [`Message`](Work_GroupRobot_Messages_Message.Message.md) = `null`

#### Defined in

[Work/GroupRobot/Messenger.ts:8](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Work/GroupRobot/Messenger.ts#L8)

## Methods

### send

▸ **send**(`message?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | [`Message`](Work_GroupRobot_Messages_Message.Message.md) | `null` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/GroupRobot/Messenger.ts:41](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Work/GroupRobot/Messenger.ts#L41)

___

### setMessage

▸ **setMessage**(`message`): [`default`](Work_GroupRobot_Messenger.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](Work_GroupRobot_Messages_Message.Message.md) |

#### Returns

[`default`](Work_GroupRobot_Messenger.default.md)

#### Defined in

[Work/GroupRobot/Messenger.ts:19](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Work/GroupRobot/Messenger.ts#L19)

___

### toGroup

▸ **toGroup**(`groupKey`): [`default`](Work_GroupRobot_Messenger.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupKey` | `string` |

#### Returns

[`default`](Work_GroupRobot_Messenger.default.md)

#### Defined in

[Work/GroupRobot/Messenger.ts:34](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Work/GroupRobot/Messenger.ts#L34)
