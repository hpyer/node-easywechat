[node-easywechat](../README.md) / [Exports](../modules.md) / Core/Types

# Module: Core/Types

## Table of contents

### Interfaces

- [EasyWechatConfig](../interfaces/Core_Types.EasyWechatConfig.md)
- [EasyWechatConfigCacheFile](../interfaces/Core_Types.EasyWechatConfigCacheFile.md)
- [EasyWechatConfigOauth](../interfaces/Core_Types.EasyWechatConfigOauth.md)
- [ServerHandlers](../interfaces/Core_Types.ServerHandlers.md)

### Type aliases

- [PaymentAlertHandler](Core_Types.md#paymentalerthandler)
- [PaymentFailHandler](Core_Types.md#paymentfailhandler)
- [PaymentPaidHandler](Core_Types.md#paymentpaidhandler)
- [PaymentRefundedHandler](Core_Types.md#paymentrefundedhandler)
- [PaymentScannedHandler](Core_Types.md#paymentscannedhandler)
- [ServerHandler](Core_Types.md#serverhandler)

## Type aliases

### PaymentAlertHandler

Ƭ **PaymentAlertHandler**: (`message`: `string`) => `void`

#### Type declaration

▸ (`message`): `void`

Payment业务错误处理

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | 错误信息 |

##### Returns

`void`

#### Defined in

[Core/Types.ts:192](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Types.ts#L192)

___

### PaymentFailHandler

Ƭ **PaymentFailHandler**: (`message`: `string`) => `void`

#### Type declaration

▸ (`message`): `void`

Payment通知错误处理

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | 错误信息 |

##### Returns

`void`

#### Defined in

[Core/Types.ts:186](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Types.ts#L186)

___

### PaymentPaidHandler

Ƭ **PaymentPaidHandler**: (`message`: `object`, `fail`: [`PaymentFailHandler`](Core_Types.md#paymentfailhandler)) => `void`

#### Type declaration

▸ (`message`, `fail`): `void`

Payment支付结果处理回调函数

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `object` | 微信通知信息 |
| `fail` | [`PaymentFailHandler`](Core_Types.md#paymentfailhandler) | 通知错误处理函数 |

##### Returns

`void`

#### Defined in

[Core/Types.ts:199](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Types.ts#L199)

___

### PaymentRefundedHandler

Ƭ **PaymentRefundedHandler**: (`message`: `object`, `reqInfo`: `object`, `fail`: [`PaymentFailHandler`](Core_Types.md#paymentfailhandler)) => `void`

#### Type declaration

▸ (`message`, `reqInfo`, `fail`): `void`

Payment退款结果处理回调函数

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `object` | 微信通知信息 |
| `reqInfo` | `object` | 微信通知信息中 req_info 解密后的信息 |
| `fail` | [`PaymentFailHandler`](Core_Types.md#paymentfailhandler) | 通知错误处理函数 |

##### Returns

`void`

#### Defined in

[Core/Types.ts:207](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Types.ts#L207)

___

### PaymentScannedHandler

Ƭ **PaymentScannedHandler**: (`message`: `object`, `fail`: [`PaymentFailHandler`](Core_Types.md#paymentfailhandler), `alert`: [`PaymentAlertHandler`](Core_Types.md#paymentalerthandler)) => `void`

#### Type declaration

▸ (`message`, `fail`, `alert`): `void`

Payment扫码支付结果处理回调函数

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `object` | 微信通知信息 |
| `fail` | [`PaymentFailHandler`](Core_Types.md#paymentfailhandler) | 通知错误处理函数 |
| `alert` | [`PaymentAlertHandler`](Core_Types.md#paymentalerthandler) | 业务错误处理函数 |

##### Returns

`void`

#### Defined in

[Core/Types.ts:215](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Types.ts#L215)

___

### ServerHandler

Ƭ **ServerHandler**: (`message`: `object`) => `void`

#### Type declaration

▸ (`message`): `void`

服务端通知处理回调函数

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `object` | 微信通知信息 |

##### Returns

`void`

#### Defined in

[Core/Types.ts:180](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Types.ts#L180)
