[node-easywechat](../README.md) / [Exports](../modules.md) / [Payment/Notify/Paid](../modules/Payment_Notify_Paid.md) / default

# Class: default

[Payment/Notify/Paid](../modules/Payment_Notify_Paid.md).default

## Hierarchy

- [`default`](Payment_Notify_Handler.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](Payment_Notify_Paid.default.md#constructor)

### Properties

- [FAIL](Payment_Notify_Paid.default.md#fail)
- [SUCCESS](Payment_Notify_Paid.default.md#success)
- [app](Payment_Notify_Paid.default.md#app)
- [attributes](Payment_Notify_Paid.default.md#attributes)
- [check](Payment_Notify_Paid.default.md#check)
- [fail](Payment_Notify_Paid.default.md#fail)
- [message](Payment_Notify_Paid.default.md#message)
- [sign](Payment_Notify_Paid.default.md#sign)

### Methods

- [decryptMessage](Payment_Notify_Paid.default.md#decryptmessage)
- [getMessage](Payment_Notify_Paid.default.md#getmessage)
- [handle](Payment_Notify_Paid.default.md#handle)
- [respondWith](Payment_Notify_Paid.default.md#respondwith)
- [setFail](Payment_Notify_Paid.default.md#setfail)
- [strict](Payment_Notify_Paid.default.md#strict)
- [toResponse](Payment_Notify_Paid.default.md#toresponse)
- [validate](Payment_Notify_Paid.default.md#validate)

## Constructors

### constructor

• **new default**(`app`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`default`](Payment_Application.default.md) |

#### Inherited from

[default](Payment_Notify_Handler.default.md).[constructor](Payment_Notify_Handler.default.md#constructor)

#### Defined in

[Payment/Notify/Handler.ts:27](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L27)

## Properties

### FAIL

• **FAIL**: `string` = `'FAIL'`

#### Inherited from

[default](Payment_Notify_Handler.default.md).[FAIL](Payment_Notify_Handler.default.md#fail)

#### Defined in

[Payment/Notify/Handler.ts:12](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L12)

___

### SUCCESS

• **SUCCESS**: `string` = `'SUCCESS'`

#### Inherited from

[default](Payment_Notify_Handler.default.md).[SUCCESS](Payment_Notify_Handler.default.md#success)

#### Defined in

[Payment/Notify/Handler.ts:11](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L11)

___

### app

• `Protected` **app**: [`default`](Payment_Application.default.md) = `null`

#### Inherited from

[default](Payment_Notify_Handler.default.md).[app](Payment_Notify_Handler.default.md#app)

#### Defined in

[Payment/Notify/Handler.ts:14](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L14)

___

### attributes

• `Protected` **attributes**: `object` = `{}`

#### Inherited from

[default](Payment_Notify_Handler.default.md).[attributes](Payment_Notify_Handler.default.md#attributes)

#### Defined in

[Payment/Notify/Handler.ts:20](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L20)

___

### check

• `Protected` **check**: `Boolean` = `true`

#### Inherited from

[default](Payment_Notify_Handler.default.md).[check](Payment_Notify_Handler.default.md#check)

#### Defined in

[Payment/Notify/Handler.ts:22](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L22)

___

### fail

• `Protected` **fail**: `string` = `null`

#### Inherited from

[default](Payment_Notify_Handler.default.md).[fail](Payment_Notify_Handler.default.md#fail)

#### Defined in

[Payment/Notify/Handler.ts:18](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L18)

___

### message

• `Protected` **message**: `object` = `null`

#### Inherited from

[default](Payment_Notify_Handler.default.md).[message](Payment_Notify_Handler.default.md#message)

#### Defined in

[Payment/Notify/Handler.ts:16](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L16)

___

### sign

• `Protected` **sign**: `Boolean` = `false`

#### Inherited from

[default](Payment_Notify_Handler.default.md).[sign](Payment_Notify_Handler.default.md#sign)

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

#### Inherited from

[default](Payment_Notify_Handler.default.md).[decryptMessage](Payment_Notify_Handler.default.md#decryptmessage)

#### Defined in

[Payment/Notify/Handler.ts:86](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L86)

___

### getMessage

▸ **getMessage**(): `Promise`<`object`\>

#### Returns

`Promise`<`object`\>

#### Inherited from

[default](Payment_Notify_Handler.default.md).[getMessage](Payment_Notify_Handler.default.md#getmessage)

#### Defined in

[Payment/Notify/Handler.ts:70](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L70)

___

### handle

▸ **handle**(`closure`): `Promise`<[`default`](Core_Http_Response.default.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `closure` | [`PaymentPaidHandler`](../modules/Core_Types.md#paymentpaidhandler) |

#### Returns

`Promise`<[`default`](Core_Http_Response.default.md)\>

#### Overrides

[default](Payment_Notify_Handler.default.md).[handle](Payment_Notify_Handler.default.md#handle)

#### Defined in

[Payment/Notify/Paid.ts:9](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Paid.ts#L9)

___

### respondWith

▸ **respondWith**(`attributes`, `sign?`): [`default`](Payment_Notify_Paid.default.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `attributes` | `object` | `undefined` |
| `sign` | `Boolean` | `false` |

#### Returns

[`default`](Payment_Notify_Paid.default.md)

#### Inherited from

[default](Payment_Notify_Handler.default.md).[respondWith](Payment_Notify_Handler.default.md#respondwith)

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

#### Inherited from

[default](Payment_Notify_Handler.default.md).[setFail](Payment_Notify_Handler.default.md#setfail)

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

#### Inherited from

[default](Payment_Notify_Handler.default.md).[strict](Payment_Notify_Handler.default.md#strict)

#### Defined in

[Payment/Notify/Handler.ts:105](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L105)

___

### toResponse

▸ **toResponse**(): `Promise`<[`default`](Core_Http_Response.default.md)\>

#### Returns

`Promise`<[`default`](Core_Http_Response.default.md)\>

#### Inherited from

[default](Payment_Notify_Handler.default.md).[toResponse](Payment_Notify_Handler.default.md#toresponse)

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

#### Inherited from

[default](Payment_Notify_Handler.default.md).[validate](Payment_Notify_Handler.default.md#validate)

#### Defined in

[Payment/Notify/Handler.ts:96](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Notify/Handler.ts#L96)
