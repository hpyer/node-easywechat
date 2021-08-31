[node-easywechat](../README.md) / [Exports](../modules.md) / [Core/Messages/Voice](../modules/Core_Messages_Voice.md) / Voice

# Class: Voice

[Core/Messages/Voice](../modules/Core_Messages_Voice.md).Voice

## Hierarchy

- [`Media`](Core_Messages_Media.Media.md)

  ↳ **`Voice`**

## Table of contents

### Constructors

- [constructor](Core_Messages_Voice.Voice.md#constructor)

### Properties

- [attributes](Core_Messages_Voice.Voice.md#attributes)
- [from](Core_Messages_Voice.Voice.md#from)
- [id](Core_Messages_Voice.Voice.md#id)
- [jsonAliases](Core_Messages_Voice.Voice.md#jsonaliases)
- [properties](Core_Messages_Voice.Voice.md#properties)
- [required](Core_Messages_Voice.Voice.md#required)
- [to](Core_Messages_Voice.Voice.md#to)
- [type](Core_Messages_Voice.Voice.md#type)
- [ALL](Core_Messages_Voice.Voice.md#all)
- [DEVICE\_EVENT](Core_Messages_Voice.Voice.md#device_event)
- [DEVICE\_TEXT](Core_Messages_Voice.Voice.md#device_text)
- [EVENT](Core_Messages_Voice.Voice.md#event)
- [FILE](Core_Messages_Voice.Voice.md#file)
- [IMAGE](Core_Messages_Voice.Voice.md#image)
- [LINK](Core_Messages_Voice.Voice.md#link)
- [LOCATION](Core_Messages_Voice.Voice.md#location)
- [MARKDOWN](Core_Messages_Voice.Voice.md#markdown)
- [MINIPROGRAM\_NOTICE](Core_Messages_Voice.Voice.md#miniprogram_notice)
- [MINIPROGRAM\_PAGE](Core_Messages_Voice.Voice.md#miniprogram_page)
- [SHORT\_VIDEO](Core_Messages_Voice.Voice.md#short_video)
- [TEXT](Core_Messages_Voice.Voice.md#text)
- [TEXT\_CARD](Core_Messages_Voice.Voice.md#text_card)
- [TRANSFER](Core_Messages_Voice.Voice.md#transfer)
- [VIDEO](Core_Messages_Voice.Voice.md#video)
- [VOICE](Core_Messages_Voice.Voice.md#voice)

### Methods

- [all](Core_Messages_Voice.Voice.md#all)
- [checkRequiredAttributes](Core_Messages_Voice.Voice.md#checkrequiredattributes)
- [get](Core_Messages_Voice.Voice.md#get)
- [getAttribute](Core_Messages_Voice.Voice.md#getattribute)
- [getMediaId](Core_Messages_Voice.Voice.md#getmediaid)
- [getRequired](Core_Messages_Voice.Voice.md#getrequired)
- [getType](Core_Messages_Voice.Voice.md#gettype)
- [has](Core_Messages_Voice.Voice.md#has)
- [isRequired](Core_Messages_Voice.Voice.md#isrequired)
- [merge](Core_Messages_Voice.Voice.md#merge)
- [only](Core_Messages_Voice.Voice.md#only)
- [propertiesToObject](Core_Messages_Voice.Voice.md#propertiestoobject)
- [set](Core_Messages_Voice.Voice.md#set)
- [setAttribute](Core_Messages_Voice.Voice.md#setattribute)
- [setAttributes](Core_Messages_Voice.Voice.md#setattributes)
- [setType](Core_Messages_Voice.Voice.md#settype)
- [toXmlArray](Core_Messages_Voice.Voice.md#toxmlarray)
- [transformForJsonRequest](Core_Messages_Voice.Voice.md#transformforjsonrequest)
- [transformForJsonRequestWithoutType](Core_Messages_Voice.Voice.md#transformforjsonrequestwithouttype)
- [transformToXml](Core_Messages_Voice.Voice.md#transformtoxml)

## Constructors

### constructor

• **new Voice**(`mediaId`, `type?`, `attributes?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `mediaId` | `string` | `undefined` |
| `type` | `string` | `''` |
| `attributes` | `object` | `{}` |

#### Inherited from

[Media](Core_Messages_Media.Media.md).[constructor](Core_Messages_Media.Media.md#constructor)

#### Defined in

[Core/Messages/Media.ts:17](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Media.ts#L17)

## Properties

### attributes

• `Protected` **attributes**: `object` = `{}`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[attributes](Core_Messages_Media.Media.md#attributes)

#### Defined in

[Core/Messages/Message.ts:104](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L104)

___

### from

• `Protected` **from**: `string`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[from](Core_Messages_Media.Media.md#from)

#### Defined in

[Core/Messages/Message.ts:31](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L31)

___

### id

• `Protected` **id**: `number`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[id](Core_Messages_Media.Media.md#id)

#### Defined in

[Core/Messages/Message.ts:29](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L29)

___

### jsonAliases

• `Protected` **jsonAliases**: `object` = `{}`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[jsonAliases](Core_Messages_Media.Media.md#jsonaliases)

#### Defined in

[Core/Messages/Message.ts:33](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L33)

___

### properties

• `Protected` **properties**: `string`[]

#### Overrides

[Media](Core_Messages_Media.Media.md).[properties](Core_Messages_Media.Media.md#properties)

#### Defined in

[Core/Messages/Voice.ts:9](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Voice.ts#L9)

___

### required

• `Protected` **required**: `string`[]

#### Inherited from

[Media](Core_Messages_Media.Media.md).[required](Core_Messages_Media.Media.md#required)

#### Defined in

[Core/Messages/Media.ts:13](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Media.ts#L13)

___

### to

• `Protected` **to**: `string`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[to](Core_Messages_Media.Media.md#to)

#### Defined in

[Core/Messages/Message.ts:30](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L30)

___

### type

• `Protected` **type**: `string` = `'voice'`

#### Overrides

[Media](Core_Messages_Media.Media.md).[type](Core_Messages_Media.Media.md#type)

#### Defined in

[Core/Messages/Voice.ts:8](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Voice.ts#L8)

___

### ALL

▪ `Static` **ALL**: `number`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[ALL](Core_Messages_Media.Media.md#all)

#### Defined in

[Core/Messages/Message.ts:23](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L23)

___

### DEVICE\_EVENT

▪ `Static` **DEVICE\_EVENT**: `number` = `256`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[DEVICE_EVENT](Core_Messages_Media.Media.md#device_event)

#### Defined in

[Core/Messages/Message.ts:14](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L14)

___

### DEVICE\_TEXT

▪ `Static` **DEVICE\_TEXT**: `number` = `512`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[DEVICE_TEXT](Core_Messages_Media.Media.md#device_text)

#### Defined in

[Core/Messages/Message.ts:15](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L15)

___

### EVENT

▪ `Static` **EVENT**: `number` = `1048576`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[EVENT](Core_Messages_Media.Media.md#event)

#### Defined in

[Core/Messages/Message.ts:19](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L19)

___

### FILE

▪ `Static` **FILE**: `number` = `1024`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[FILE](Core_Messages_Media.Media.md#file)

#### Defined in

[Core/Messages/Message.ts:16](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L16)

___

### IMAGE

▪ `Static` **IMAGE**: `number` = `4`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[IMAGE](Core_Messages_Media.Media.md#image)

#### Defined in

[Core/Messages/Message.ts:8](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L8)

___

### LINK

▪ `Static` **LINK**: `number` = `128`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[LINK](Core_Messages_Media.Media.md#link)

#### Defined in

[Core/Messages/Message.ts:13](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L13)

___

### LOCATION

▪ `Static` **LOCATION**: `number` = `64`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[LOCATION](Core_Messages_Media.Media.md#location)

#### Defined in

[Core/Messages/Message.ts:12](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L12)

___

### MARKDOWN

▪ `Static` **MARKDOWN**: `number` = `8388608`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[MARKDOWN](Core_Messages_Media.Media.md#markdown)

#### Defined in

[Core/Messages/Message.ts:22](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L22)

___

### MINIPROGRAM\_NOTICE

▪ `Static` **MINIPROGRAM\_NOTICE**: `number` = `4194304`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[MINIPROGRAM_NOTICE](Core_Messages_Media.Media.md#miniprogram_notice)

#### Defined in

[Core/Messages/Message.ts:21](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L21)

___

### MINIPROGRAM\_PAGE

▪ `Static` **MINIPROGRAM\_PAGE**: `number` = `2097152`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[MINIPROGRAM_PAGE](Core_Messages_Media.Media.md#miniprogram_page)

#### Defined in

[Core/Messages/Message.ts:20](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L20)

___

### SHORT\_VIDEO

▪ `Static` **SHORT\_VIDEO**: `number` = `32`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[SHORT_VIDEO](Core_Messages_Media.Media.md#short_video)

#### Defined in

[Core/Messages/Message.ts:11](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L11)

___

### TEXT

▪ `Static` **TEXT**: `number` = `2`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[TEXT](Core_Messages_Media.Media.md#text)

#### Defined in

[Core/Messages/Message.ts:7](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L7)

___

### TEXT\_CARD

▪ `Static` **TEXT\_CARD**: `number` = `2048`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[TEXT_CARD](Core_Messages_Media.Media.md#text_card)

#### Defined in

[Core/Messages/Message.ts:17](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L17)

___

### TRANSFER

▪ `Static` **TRANSFER**: `number` = `4096`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[TRANSFER](Core_Messages_Media.Media.md#transfer)

#### Defined in

[Core/Messages/Message.ts:18](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L18)

___

### VIDEO

▪ `Static` **VIDEO**: `number` = `16`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[VIDEO](Core_Messages_Media.Media.md#video)

#### Defined in

[Core/Messages/Message.ts:10](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L10)

___

### VOICE

▪ `Static` **VOICE**: `number` = `8`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[VOICE](Core_Messages_Media.Media.md#voice)

#### Defined in

[Core/Messages/Message.ts:9](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L9)

## Methods

### all

▸ **all**(): `object`

#### Returns

`object`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[all](Core_Messages_Media.Media.md#all)

#### Defined in

[Core/Messages/Message.ts:170](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L170)

___

### checkRequiredAttributes

▸ `Protected` **checkRequiredAttributes**(): `void`

#### Returns

`void`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[checkRequiredAttributes](Core_Messages_Media.Media.md#checkrequiredattributes)

#### Defined in

[Core/Messages/Message.ts:187](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L187)

___

### get

▸ **get**(`name`, `defaultValue?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `defaultValue` | `any` | `null` |

#### Returns

`any`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[get](Core_Messages_Media.Media.md#get)

#### Defined in

[Core/Messages/Message.ts:134](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L134)

___

### getAttribute

▸ **getAttribute**(`name`, `defaultValue?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `defaultValue` | `any` | `null` |

#### Returns

`any`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[getAttribute](Core_Messages_Media.Media.md#getattribute)

#### Defined in

[Core/Messages/Message.ts:129](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L129)

___

### getMediaId

▸ **getMediaId**(): `string`

#### Returns

`string`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[getMediaId](Core_Messages_Media.Media.md#getmediaid)

#### Defined in

[Core/Messages/Media.ts:24](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Media.ts#L24)

___

### getRequired

▸ **getRequired**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[Media](Core_Messages_Media.Media.md).[getRequired](Core_Messages_Media.Media.md#getrequired)

#### Defined in

[Core/Messages/Message.ts:177](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L177)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[getType](Core_Messages_Media.Media.md#gettype)

#### Defined in

[Core/Messages/Message.ts:40](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L40)

___

### has

▸ **has**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[has](Core_Messages_Media.Media.md#has)

#### Defined in

[Core/Messages/Message.ts:139](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L139)

___

### isRequired

▸ **isRequired**(`attribute`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | `any` |

#### Returns

`boolean`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[isRequired](Core_Messages_Media.Media.md#isrequired)

#### Defined in

[Core/Messages/Message.ts:182](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L182)

___

### merge

▸ **merge**(`attributes`): [`Voice`](Core_Messages_Voice.Voice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `object` |

#### Returns

[`Voice`](Core_Messages_Voice.Voice.md)

#### Inherited from

[Media](Core_Messages_Media.Media.md).[merge](Core_Messages_Media.Media.md#merge)

#### Defined in

[Core/Messages/Message.ts:149](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L149)

___

### only

▸ **only**(`keys`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string`[] |

#### Returns

`object`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[only](Core_Messages_Media.Media.md#only)

#### Defined in

[Core/Messages/Message.ts:156](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L156)

___

### propertiesToObject

▸ **propertiesToObject**(`data`, `aliases?`): `object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `object` | `undefined` |
| `aliases` | `object` | `null` |

#### Returns

`object`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[propertiesToObject](Core_Messages_Media.Media.md#propertiestoobject)

#### Defined in

[Core/Messages/Message.ts:87](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L87)

___

### set

▸ **set**(`name`, `value`): [`Voice`](Core_Messages_Voice.Voice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

[`Voice`](Core_Messages_Voice.Voice.md)

#### Inherited from

[Media](Core_Messages_Media.Media.md).[set](Core_Messages_Media.Media.md#set)

#### Defined in

[Core/Messages/Message.ts:122](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L122)

___

### setAttribute

▸ **setAttribute**(`name`, `value`): [`Voice`](Core_Messages_Voice.Voice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

[`Voice`](Core_Messages_Voice.Voice.md)

#### Inherited from

[Media](Core_Messages_Media.Media.md).[setAttribute](Core_Messages_Media.Media.md#setattribute)

#### Defined in

[Core/Messages/Message.ts:115](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L115)

___

### setAttributes

▸ **setAttributes**(`attributes`): [`Voice`](Core_Messages_Voice.Voice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `object` |

#### Returns

[`Voice`](Core_Messages_Voice.Voice.md)

#### Inherited from

[Media](Core_Messages_Media.Media.md).[setAttributes](Core_Messages_Media.Media.md#setattributes)

#### Defined in

[Core/Messages/Message.ts:108](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L108)

___

### setType

▸ **setType**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[setType](Core_Messages_Media.Media.md#settype)

#### Defined in

[Core/Messages/Message.ts:45](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L45)

___

### toXmlArray

▸ **toXmlArray**(): `object`

#### Returns

`object`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[toXmlArray](Core_Messages_Media.Media.md#toxmlarray)

#### Defined in

[Core/Messages/Media.ts:31](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Media.ts#L31)

___

### transformForJsonRequest

▸ **transformForJsonRequest**(`appends?`, `withType?`): `object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `appends` | `object` | `{}` |
| `withType` | `boolean` | `true` |

#### Returns

`object`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[transformForJsonRequest](Core_Messages_Media.Media.md#transformforjsonrequest)

#### Defined in

[Core/Messages/Message.ts:72](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L72)

___

### transformForJsonRequestWithoutType

▸ **transformForJsonRequestWithoutType**(`appends?`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `appends` | `object` |

#### Returns

`object`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[transformForJsonRequestWithoutType](Core_Messages_Media.Media.md#transformforjsonrequestwithouttype)

#### Defined in

[Core/Messages/Message.ts:67](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L67)

___

### transformToXml

▸ **transformToXml**(`appends?`, `returnAsObject?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `appends` | `object` | `{}` |
| `returnAsObject` | `boolean` | `false` |

#### Returns

`any`

#### Inherited from

[Media](Core_Messages_Media.Media.md).[transformToXml](Core_Messages_Media.Media.md#transformtoxml)

#### Defined in

[Core/Messages/Message.ts:50](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L50)
