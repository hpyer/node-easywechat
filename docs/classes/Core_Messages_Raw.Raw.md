[node-easywechat](../README.md) / [Exports](../modules.md) / [Core/Messages/Raw](../modules/Core_Messages_Raw.md) / Raw

# Class: Raw

[Core/Messages/Raw](../modules/Core_Messages_Raw.md).Raw

## Hierarchy

- [`Message`](Core_Messages_Message.Message.md)

  ↳ **`Raw`**

## Table of contents

### Constructors

- [constructor](Core_Messages_Raw.Raw.md#constructor)

### Properties

- [attributes](Core_Messages_Raw.Raw.md#attributes)
- [from](Core_Messages_Raw.Raw.md#from)
- [id](Core_Messages_Raw.Raw.md#id)
- [jsonAliases](Core_Messages_Raw.Raw.md#jsonaliases)
- [properties](Core_Messages_Raw.Raw.md#properties)
- [required](Core_Messages_Raw.Raw.md#required)
- [to](Core_Messages_Raw.Raw.md#to)
- [type](Core_Messages_Raw.Raw.md#type)
- [ALL](Core_Messages_Raw.Raw.md#all)
- [DEVICE\_EVENT](Core_Messages_Raw.Raw.md#device_event)
- [DEVICE\_TEXT](Core_Messages_Raw.Raw.md#device_text)
- [EVENT](Core_Messages_Raw.Raw.md#event)
- [FILE](Core_Messages_Raw.Raw.md#file)
- [IMAGE](Core_Messages_Raw.Raw.md#image)
- [LINK](Core_Messages_Raw.Raw.md#link)
- [LOCATION](Core_Messages_Raw.Raw.md#location)
- [MARKDOWN](Core_Messages_Raw.Raw.md#markdown)
- [MINIPROGRAM\_NOTICE](Core_Messages_Raw.Raw.md#miniprogram_notice)
- [MINIPROGRAM\_PAGE](Core_Messages_Raw.Raw.md#miniprogram_page)
- [SHORT\_VIDEO](Core_Messages_Raw.Raw.md#short_video)
- [TEXT](Core_Messages_Raw.Raw.md#text)
- [TEXT\_CARD](Core_Messages_Raw.Raw.md#text_card)
- [TRANSFER](Core_Messages_Raw.Raw.md#transfer)
- [VIDEO](Core_Messages_Raw.Raw.md#video)
- [VOICE](Core_Messages_Raw.Raw.md#voice)

### Methods

- [all](Core_Messages_Raw.Raw.md#all)
- [checkRequiredAttributes](Core_Messages_Raw.Raw.md#checkrequiredattributes)
- [get](Core_Messages_Raw.Raw.md#get)
- [getAttribute](Core_Messages_Raw.Raw.md#getattribute)
- [getRequired](Core_Messages_Raw.Raw.md#getrequired)
- [getType](Core_Messages_Raw.Raw.md#gettype)
- [has](Core_Messages_Raw.Raw.md#has)
- [isRequired](Core_Messages_Raw.Raw.md#isrequired)
- [merge](Core_Messages_Raw.Raw.md#merge)
- [only](Core_Messages_Raw.Raw.md#only)
- [propertiesToObject](Core_Messages_Raw.Raw.md#propertiestoobject)
- [set](Core_Messages_Raw.Raw.md#set)
- [setAttribute](Core_Messages_Raw.Raw.md#setattribute)
- [setAttributes](Core_Messages_Raw.Raw.md#setattributes)
- [setType](Core_Messages_Raw.Raw.md#settype)
- [toString](Core_Messages_Raw.Raw.md#tostring)
- [toXmlArray](Core_Messages_Raw.Raw.md#toxmlarray)
- [transformForJsonRequest](Core_Messages_Raw.Raw.md#transformforjsonrequest)
- [transformForJsonRequestWithoutType](Core_Messages_Raw.Raw.md#transformforjsonrequestwithouttype)
- [transformToXml](Core_Messages_Raw.Raw.md#transformtoxml)

## Constructors

### constructor

• **new Raw**(`content`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

#### Overrides

[Message](Core_Messages_Message.Message.md).[constructor](Core_Messages_Message.Message.md#constructor)

#### Defined in

[Core/Messages/Raw.ts:13](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Raw.ts#L13)

## Properties

### attributes

• `Protected` **attributes**: `object` = `{}`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[attributes](Core_Messages_Message.Message.md#attributes)

#### Defined in

[Core/Messages/Message.ts:104](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L104)

___

### from

• `Protected` **from**: `string`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[from](Core_Messages_Message.Message.md#from)

#### Defined in

[Core/Messages/Message.ts:31](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L31)

___

### id

• `Protected` **id**: `number`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[id](Core_Messages_Message.Message.md#id)

#### Defined in

[Core/Messages/Message.ts:29](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L29)

___

### jsonAliases

• `Protected` **jsonAliases**: `object` = `{}`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[jsonAliases](Core_Messages_Message.Message.md#jsonaliases)

#### Defined in

[Core/Messages/Message.ts:33](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L33)

___

### properties

• `Protected` **properties**: `string`[]

#### Overrides

[Message](Core_Messages_Message.Message.md).[properties](Core_Messages_Message.Message.md#properties)

#### Defined in

[Core/Messages/Raw.ts:9](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Raw.ts#L9)

___

### required

• `Protected` **required**: `string`[] = `[]`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[required](Core_Messages_Message.Message.md#required)

#### Defined in

[Core/Messages/Message.ts:106](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L106)

___

### to

• `Protected` **to**: `string`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[to](Core_Messages_Message.Message.md#to)

#### Defined in

[Core/Messages/Message.ts:30](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L30)

___

### type

• `Protected` **type**: `string` = `'raw'`

#### Overrides

[Message](Core_Messages_Message.Message.md).[type](Core_Messages_Message.Message.md#type)

#### Defined in

[Core/Messages/Raw.ts:8](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Raw.ts#L8)

___

### ALL

▪ `Static` **ALL**: `number`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[ALL](Core_Messages_Message.Message.md#all)

#### Defined in

[Core/Messages/Message.ts:23](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L23)

___

### DEVICE\_EVENT

▪ `Static` **DEVICE\_EVENT**: `number` = `256`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[DEVICE_EVENT](Core_Messages_Message.Message.md#device_event)

#### Defined in

[Core/Messages/Message.ts:14](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L14)

___

### DEVICE\_TEXT

▪ `Static` **DEVICE\_TEXT**: `number` = `512`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[DEVICE_TEXT](Core_Messages_Message.Message.md#device_text)

#### Defined in

[Core/Messages/Message.ts:15](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L15)

___

### EVENT

▪ `Static` **EVENT**: `number` = `1048576`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[EVENT](Core_Messages_Message.Message.md#event)

#### Defined in

[Core/Messages/Message.ts:19](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L19)

___

### FILE

▪ `Static` **FILE**: `number` = `1024`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[FILE](Core_Messages_Message.Message.md#file)

#### Defined in

[Core/Messages/Message.ts:16](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L16)

___

### IMAGE

▪ `Static` **IMAGE**: `number` = `4`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[IMAGE](Core_Messages_Message.Message.md#image)

#### Defined in

[Core/Messages/Message.ts:8](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L8)

___

### LINK

▪ `Static` **LINK**: `number` = `128`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[LINK](Core_Messages_Message.Message.md#link)

#### Defined in

[Core/Messages/Message.ts:13](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L13)

___

### LOCATION

▪ `Static` **LOCATION**: `number` = `64`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[LOCATION](Core_Messages_Message.Message.md#location)

#### Defined in

[Core/Messages/Message.ts:12](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L12)

___

### MARKDOWN

▪ `Static` **MARKDOWN**: `number` = `8388608`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[MARKDOWN](Core_Messages_Message.Message.md#markdown)

#### Defined in

[Core/Messages/Message.ts:22](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L22)

___

### MINIPROGRAM\_NOTICE

▪ `Static` **MINIPROGRAM\_NOTICE**: `number` = `4194304`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[MINIPROGRAM_NOTICE](Core_Messages_Message.Message.md#miniprogram_notice)

#### Defined in

[Core/Messages/Message.ts:21](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L21)

___

### MINIPROGRAM\_PAGE

▪ `Static` **MINIPROGRAM\_PAGE**: `number` = `2097152`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[MINIPROGRAM_PAGE](Core_Messages_Message.Message.md#miniprogram_page)

#### Defined in

[Core/Messages/Message.ts:20](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L20)

___

### SHORT\_VIDEO

▪ `Static` **SHORT\_VIDEO**: `number` = `32`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[SHORT_VIDEO](Core_Messages_Message.Message.md#short_video)

#### Defined in

[Core/Messages/Message.ts:11](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L11)

___

### TEXT

▪ `Static` **TEXT**: `number` = `2`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[TEXT](Core_Messages_Message.Message.md#text)

#### Defined in

[Core/Messages/Message.ts:7](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L7)

___

### TEXT\_CARD

▪ `Static` **TEXT\_CARD**: `number` = `2048`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[TEXT_CARD](Core_Messages_Message.Message.md#text_card)

#### Defined in

[Core/Messages/Message.ts:17](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L17)

___

### TRANSFER

▪ `Static` **TRANSFER**: `number` = `4096`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[TRANSFER](Core_Messages_Message.Message.md#transfer)

#### Defined in

[Core/Messages/Message.ts:18](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L18)

___

### VIDEO

▪ `Static` **VIDEO**: `number` = `16`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[VIDEO](Core_Messages_Message.Message.md#video)

#### Defined in

[Core/Messages/Message.ts:10](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L10)

___

### VOICE

▪ `Static` **VOICE**: `number` = `8`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[VOICE](Core_Messages_Message.Message.md#voice)

#### Defined in

[Core/Messages/Message.ts:9](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L9)

## Methods

### all

▸ **all**(): `object`

#### Returns

`object`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[all](Core_Messages_Message.Message.md#all)

#### Defined in

[Core/Messages/Message.ts:170](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L170)

___

### checkRequiredAttributes

▸ `Protected` **checkRequiredAttributes**(): `void`

#### Returns

`void`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[checkRequiredAttributes](Core_Messages_Message.Message.md#checkrequiredattributes)

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

[Message](Core_Messages_Message.Message.md).[get](Core_Messages_Message.Message.md#get)

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

[Message](Core_Messages_Message.Message.md).[getAttribute](Core_Messages_Message.Message.md#getattribute)

#### Defined in

[Core/Messages/Message.ts:129](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L129)

___

### getRequired

▸ **getRequired**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[Message](Core_Messages_Message.Message.md).[getRequired](Core_Messages_Message.Message.md#getrequired)

#### Defined in

[Core/Messages/Message.ts:177](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L177)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[getType](Core_Messages_Message.Message.md#gettype)

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

[Message](Core_Messages_Message.Message.md).[has](Core_Messages_Message.Message.md#has)

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

[Message](Core_Messages_Message.Message.md).[isRequired](Core_Messages_Message.Message.md#isrequired)

#### Defined in

[Core/Messages/Message.ts:182](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L182)

___

### merge

▸ **merge**(`attributes`): [`Raw`](Core_Messages_Raw.Raw.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `object` |

#### Returns

[`Raw`](Core_Messages_Raw.Raw.md)

#### Inherited from

[Message](Core_Messages_Message.Message.md).[merge](Core_Messages_Message.Message.md#merge)

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

[Message](Core_Messages_Message.Message.md).[only](Core_Messages_Message.Message.md#only)

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

[Message](Core_Messages_Message.Message.md).[propertiesToObject](Core_Messages_Message.Message.md#propertiestoobject)

#### Defined in

[Core/Messages/Message.ts:87](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L87)

___

### set

▸ **set**(`name`, `value`): [`Raw`](Core_Messages_Raw.Raw.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

[`Raw`](Core_Messages_Raw.Raw.md)

#### Inherited from

[Message](Core_Messages_Message.Message.md).[set](Core_Messages_Message.Message.md#set)

#### Defined in

[Core/Messages/Message.ts:122](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L122)

___

### setAttribute

▸ **setAttribute**(`name`, `value`): [`Raw`](Core_Messages_Raw.Raw.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

[`Raw`](Core_Messages_Raw.Raw.md)

#### Inherited from

[Message](Core_Messages_Message.Message.md).[setAttribute](Core_Messages_Message.Message.md#setattribute)

#### Defined in

[Core/Messages/Message.ts:115](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L115)

___

### setAttributes

▸ **setAttributes**(`attributes`): [`Raw`](Core_Messages_Raw.Raw.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `object` |

#### Returns

[`Raw`](Core_Messages_Raw.Raw.md)

#### Inherited from

[Message](Core_Messages_Message.Message.md).[setAttributes](Core_Messages_Message.Message.md#setattributes)

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

[Message](Core_Messages_Message.Message.md).[setType](Core_Messages_Message.Message.md#settype)

#### Defined in

[Core/Messages/Message.ts:45](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L45)

___

### toString

▸ **toString**(): `any`

#### Returns

`any`

#### Defined in

[Core/Messages/Raw.ts:30](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Raw.ts#L30)

___

### toXmlArray

▸ **toXmlArray**(): `object`

#### Returns

`object`

#### Overrides

[Message](Core_Messages_Message.Message.md).[toXmlArray](Core_Messages_Message.Message.md#toxmlarray)

#### Defined in

[Core/Messages/Raw.ts:18](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Raw.ts#L18)

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

#### Overrides

[Message](Core_Messages_Message.Message.md).[transformForJsonRequest](Core_Messages_Message.Message.md#transformforjsonrequest)

#### Defined in

[Core/Messages/Raw.ts:25](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Raw.ts#L25)

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

[Message](Core_Messages_Message.Message.md).[transformForJsonRequestWithoutType](Core_Messages_Message.Message.md#transformforjsonrequestwithouttype)

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

[Message](Core_Messages_Message.Message.md).[transformToXml](Core_Messages_Message.Message.md#transformtoxml)

#### Defined in

[Core/Messages/Message.ts:50](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L50)
