[node-easywechat](../README.md) / [Exports](../modules.md) / [Payment/Notify/Handler](../modules/Payment_Notify_Handler.md) / default

# Class: default

[Payment/Notify/Handler](../modules/Payment_Notify_Handler.md).default

## Hierarchy

- **`default`**

  ↳ [`default`](Payment_Notify_Paid.default.md)

  ↳ [`default`](Payment_Notify_Refunded.default.md)

  ↳ [`default`](Payment_Notify_Scanned.default.md)

## Table of contents

### Constructors

- [constructor](Payment_Notify_Handler.default.md#constructor)

### Properties

- [FAIL](Payment_Notify_Handler.default.md#fail)
- [SUCCESS](Payment_Notify_Handler.default.md#success)
- [app](Payment_Notify_Handler.default.md#app)
- [attributes](Payment_Notify_Handler.default.md#attributes)
- [check](Payment_Notify_Handler.default.md#check)
- [fail](Payment_Notify_Handler.default.md#fail)
- [message](Payment_Notify_Handler.default.md#message)
- [sign](Payment_Notify_Handler.default.md#sign)

### Methods

- [decryptMessage](Payment_Notify_Handler.default.md#decryptmessage)
- [getMessage](Payment_Notify_Handler.default.md#getmessage)
- [handle](Payment_Notify_Handler.default.md#handle)
- [respondWith](Payment_Notify_Handler.default.md#respondwith)
- [setFail](Payment_Notify_Handler.default.md#setfail)
- [strict](Payment_Notify_Handler.default.md#strict)
- [toResponse](Payment_Notify_Handler.default.md#toresponse)
- [validate](Payment_Notify_Handler.default.md#validate)

## Constructors

### constructor

• **new default**(`app`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`default`](Payment_Application.default.md) |

#### Defined in

[Payment/Notify/Handler.ts:27](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L27)

## Properties

### FAIL

• **FAIL**: `string` = `'FAIL'`

#### Defined in

[Payment/Notify/Handler.ts:12](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L12)

___

### SUCCESS

• **SUCCESS**: `string` = `'SUCCESS'`

#### Defined in

[Payment/Notify/Handler.ts:11](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L11)

___

### app

• `Protected` **app**: [`default`](Payment_Application.default.md) = `null`

#### Defined in

[Payment/Notify/Handler.ts:14](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L14)

___

### attributes

• `Protected` **attributes**: `object` = `{}`

#### Defined in

[Payment/Notify/Handler.ts:20](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L20)

___

### check

• `Protected` **check**: `Boolean` = `true`

#### Defined in

[Payment/Notify/Handler.ts:22](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L22)

___

### fail

• `Protected` **fail**: `string` = `null`

#### Defined in

[Payment/Notify/Handler.ts:18](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L18)

___

### message

• `Protected` **message**: `object` = `null`

#### Defined in

[Payment/Notify/Handler.ts:16](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L16)

___

### sign

• `Protected` **sign**: `Boolean` = `false`

#### Defined in

[Payment/Notify/Handler.ts:24](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L24)

## Methods

### decryptMessage

▸ **decryptMessage**(`key`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[Payment/Notify/Handler.ts:86](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L86)

___

### getMessage

▸ **getMessage**(): `Promise`<`object`\>

#### Returns

`Promise`<`object`\>

#### Defined in

[Payment/Notify/Handler.ts:70](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L70)

___

### handle

▸ **handle**(`closure`): `Promise`<[`default`](Core_Http_Response.default.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `closure` | `Function` |

#### Returns

`Promise`<[`default`](Core_Http_Response.default.md)\>

#### Defined in

[Payment/Notify/Handler.ts:32](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L32)

___

### respondWith

▸ **respondWith**(`attributes`, `sign?`): [`default`](Payment_Notify_Handler.default.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `attributes` | `object` | `undefined` |
| `sign` | `Boolean` | `false` |

#### Returns

[`default`](Payment_Notify_Handler.default.md)

#### Defined in

[Payment/Notify/Handler.ts:46](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L46)

___

### setFail

▸ **setFail**(`message`): `void`

设置处理失败时的错误消息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | 错误消息 |

#### Returns

`void`

#### Defined in

[Payment/Notify/Handler.ts:41](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L41)

___

### strict

▸ `Protected` **strict**(`result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `any` |

#### Returns

`void`

#### Defined in

[Payment/Notify/Handler.ts:105](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L105)

___

### toResponse

▸ **toResponse**(): `Promise`<[`default`](Core_Http_Response.default.md)\>

#### Returns

`Promise`<[`default`](Core_Http_Response.default.md)\>

#### Defined in

[Payment/Notify/Handler.ts:54](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L54)

___

### validate

▸ `Protected` **validate**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[Payment/Notify/Handler.ts:96](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L96)
