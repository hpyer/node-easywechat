[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/Broadcasting/MessageBuilder](../modules/OfficialAccount_Broadcasting_MessageBuilder.md) / default

# Class: default

[OfficialAccount/Broadcasting/MessageBuilder](../modules/OfficialAccount_Broadcasting_MessageBuilder.md).default

## Table of contents

### Constructors

- [constructor](OfficialAccount_Broadcasting_MessageBuilder.default.md#constructor)

### Properties

- [\_attributes](OfficialAccount_Broadcasting_MessageBuilder.default.md#_attributes)
- [\_message](OfficialAccount_Broadcasting_MessageBuilder.default.md#_message)
- [\_to](OfficialAccount_Broadcasting_MessageBuilder.default.md#_to)

### Methods

- [build](OfficialAccount_Broadcasting_MessageBuilder.default.md#build)
- [buildForPreview](OfficialAccount_Broadcasting_MessageBuilder.default.md#buildforpreview)
- [message](OfficialAccount_Broadcasting_MessageBuilder.default.md#message)
- [to](OfficialAccount_Broadcasting_MessageBuilder.default.md#to)
- [toAll](OfficialAccount_Broadcasting_MessageBuilder.default.md#toall)
- [toTag](OfficialAccount_Broadcasting_MessageBuilder.default.md#totag)
- [toUsers](OfficialAccount_Broadcasting_MessageBuilder.default.md#tousers)
- [with](OfficialAccount_Broadcasting_MessageBuilder.default.md#with)

## Constructors

### constructor

• **new default**()

## Properties

### \_attributes

• `Protected` **\_attributes**: `object` = `{}`

#### Defined in

[OfficialAccount/Broadcasting/MessageBuilder.ts:11](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/MessageBuilder.ts#L11)

___

### \_message

• `Protected` **\_message**: [`Message`](Core_Messages_Message.Message.md) = `null`

#### Defined in

[OfficialAccount/Broadcasting/MessageBuilder.ts:10](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/MessageBuilder.ts#L10)

___

### \_to

• `Protected` **\_to**: `object` = `{}`

#### Defined in

[OfficialAccount/Broadcasting/MessageBuilder.ts:9](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/MessageBuilder.ts#L9)

## Methods

### build

▸ **build**(`prepends?`): `object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `prepends` | `object` | `null` |

#### Returns

`object`

#### Defined in

[OfficialAccount/Broadcasting/MessageBuilder.ts:60](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/MessageBuilder.ts#L60)

___

### buildForPreview

▸ **buildForPreview**(`by`, `user`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `by` | `string` |
| `user` | `string` |

#### Returns

`object`

#### Defined in

[OfficialAccount/Broadcasting/MessageBuilder.ts:77](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/MessageBuilder.ts#L77)

___

### message

▸ **message**(`message`): [`default`](OfficialAccount_Broadcasting_MessageBuilder.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](Core_Messages_Message.Message.md) |

#### Returns

[`default`](OfficialAccount_Broadcasting_MessageBuilder.default.md)

#### Defined in

[OfficialAccount/Broadcasting/MessageBuilder.ts:13](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/MessageBuilder.ts#L13)

___

### to

▸ **to**(`to`): [`default`](OfficialAccount_Broadcasting_MessageBuilder.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `object` |

#### Returns

[`default`](OfficialAccount_Broadcasting_MessageBuilder.default.md)

#### Defined in

[OfficialAccount/Broadcasting/MessageBuilder.ts:19](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/MessageBuilder.ts#L19)

___

### toAll

▸ **toAll**(): [`default`](OfficialAccount_Broadcasting_MessageBuilder.default.md)

#### Returns

[`default`](OfficialAccount_Broadcasting_MessageBuilder.default.md)

#### Defined in

[OfficialAccount/Broadcasting/MessageBuilder.ts:44](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/MessageBuilder.ts#L44)

___

### toTag

▸ **toTag**(`tagId`): [`default`](OfficialAccount_Broadcasting_MessageBuilder.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagId` | `number` |

#### Returns

[`default`](OfficialAccount_Broadcasting_MessageBuilder.default.md)

#### Defined in

[OfficialAccount/Broadcasting/MessageBuilder.ts:25](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/MessageBuilder.ts#L25)

___

### toUsers

▸ **toUsers**(`openids`): [`default`](OfficialAccount_Broadcasting_MessageBuilder.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `openids` | `string`[] |

#### Returns

[`default`](OfficialAccount_Broadcasting_MessageBuilder.default.md)

#### Defined in

[OfficialAccount/Broadcasting/MessageBuilder.ts:36](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/MessageBuilder.ts#L36)

___

### with

▸ **with**(`attributes`): [`default`](OfficialAccount_Broadcasting_MessageBuilder.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `object` |

#### Returns

[`default`](OfficialAccount_Broadcasting_MessageBuilder.default.md)

#### Defined in

[OfficialAccount/Broadcasting/MessageBuilder.ts:54](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/MessageBuilder.ts#L54)
