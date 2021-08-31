[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/CustomerService/Messenger](../modules/OfficialAccount_CustomerService_Messenger.md) / default

# Class: default

[OfficialAccount/CustomerService/Messenger](../modules/OfficialAccount_CustomerService_Messenger.md).default

## Table of contents

### Constructors

- [constructor](OfficialAccount_CustomerService_Messenger.default.md#constructor)

### Properties

- [\_message](OfficialAccount_CustomerService_Messenger.default.md#_message)
- [\_to](OfficialAccount_CustomerService_Messenger.default.md#_to)
- [account](OfficialAccount_CustomerService_Messenger.default.md#account)
- [client](OfficialAccount_CustomerService_Messenger.default.md#client)

### Methods

- [by](OfficialAccount_CustomerService_Messenger.default.md#by)
- [from](OfficialAccount_CustomerService_Messenger.default.md#from)
- [getAccount](OfficialAccount_CustomerService_Messenger.default.md#getaccount)
- [getClient](OfficialAccount_CustomerService_Messenger.default.md#getclient)
- [getMessage](OfficialAccount_CustomerService_Messenger.default.md#getmessage)
- [getTo](OfficialAccount_CustomerService_Messenger.default.md#getto)
- [message](OfficialAccount_CustomerService_Messenger.default.md#message)
- [send](OfficialAccount_CustomerService_Messenger.default.md#send)
- [to](OfficialAccount_CustomerService_Messenger.default.md#to)

## Constructors

### constructor

• **new default**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`default`](OfficialAccount_CustomerService_CustomerServiceClient.default.md) |

#### Defined in

[OfficialAccount/CustomerService/Messenger.ts:17](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/Messenger.ts#L17)

## Properties

### \_message

• `Protected` **\_message**: [`Message`](Core_Messages_Message.Message.md) = `null`

#### Defined in

[OfficialAccount/CustomerService/Messenger.ts:9](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/Messenger.ts#L9)

___

### \_to

• `Protected` **\_to**: `string`

#### Defined in

[OfficialAccount/CustomerService/Messenger.ts:11](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/Messenger.ts#L11)

___

### account

• `Protected` **account**: `string`

#### Defined in

[OfficialAccount/CustomerService/Messenger.ts:13](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/Messenger.ts#L13)

___

### client

• `Protected` **client**: [`default`](OfficialAccount_CustomerService_CustomerServiceClient.default.md)

#### Defined in

[OfficialAccount/CustomerService/Messenger.ts:15](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/Messenger.ts#L15)

## Methods

### by

▸ **by**(`account`): [`default`](OfficialAccount_CustomerService_Messenger.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |

#### Returns

[`default`](OfficialAccount_CustomerService_Messenger.default.md)

#### Defined in

[OfficialAccount/CustomerService/Messenger.ts:31](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/Messenger.ts#L31)

___

### from

▸ **from**(`account`): [`default`](OfficialAccount_CustomerService_Messenger.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |

#### Returns

[`default`](OfficialAccount_CustomerService_Messenger.default.md)

#### Defined in

[OfficialAccount/CustomerService/Messenger.ts:37](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/Messenger.ts#L37)

___

### getAccount

▸ **getAccount**(): `string`

#### Returns

`string`

#### Defined in

[OfficialAccount/CustomerService/Messenger.ts:73](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/Messenger.ts#L73)

___

### getClient

▸ **getClient**(): [`default`](OfficialAccount_CustomerService_CustomerServiceClient.default.md)

#### Returns

[`default`](OfficialAccount_CustomerService_CustomerServiceClient.default.md)

#### Defined in

[OfficialAccount/CustomerService/Messenger.ts:88](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/Messenger.ts#L88)

___

### getMessage

▸ **getMessage**(): [`Message`](Core_Messages_Message.Message.md)

#### Returns

[`Message`](Core_Messages_Message.Message.md)

#### Defined in

[OfficialAccount/CustomerService/Messenger.ts:83](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/Messenger.ts#L83)

___

### getTo

▸ **getTo**(): `string`

#### Returns

`string`

#### Defined in

[OfficialAccount/CustomerService/Messenger.ts:78](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/Messenger.ts#L78)

___

### message

▸ **message**(`message`): [`default`](OfficialAccount_CustomerService_Messenger.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |

#### Returns

[`default`](OfficialAccount_CustomerService_Messenger.default.md)

#### Defined in

[OfficialAccount/CustomerService/Messenger.ts:22](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/Messenger.ts#L22)

___

### send

▸ **send**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/CustomerService/Messenger.ts:48](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/Messenger.ts#L48)

___

### to

▸ **to**(`openid`): [`default`](OfficialAccount_CustomerService_Messenger.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `openid` | `string` |

#### Returns

[`default`](OfficialAccount_CustomerService_Messenger.default.md)

#### Defined in

[OfficialAccount/CustomerService/Messenger.ts:42](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/Messenger.ts#L42)
