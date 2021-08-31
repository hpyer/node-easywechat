[node-easywechat](../README.md) / [Exports](../modules.md) / [Core/Messages/Message](../modules/Core_Messages_Message.md) / Message

# Class: Message

[Core/Messages/Message](../modules/Core_Messages_Message.md).Message

## Hierarchy

- **`Message`**

  ↳ [`Article`](Core_Messages_Article.Article.md)

  ↳ [`Card`](Core_Messages_Card.Card.md)

  ↳ [`DeviceEvent`](Core_Messages_DeviceEvent.DeviceEvent.md)

  ↳ [`DeviceText`](Core_Messages_DeviceText.DeviceText.md)

  ↳ [`InteractiveTaskCard`](Core_Messages_InteractiveTaskCard.InteractiveTaskCard.md)

  ↳ [`Link`](Core_Messages_Link.Link.md)

  ↳ [`Location`](Core_Messages_Location.Location.md)

  ↳ [`Markdown`](Core_Messages_Markdown.Markdown.md)

  ↳ [`Media`](Core_Messages_Media.Media.md)

  ↳ [`MiniProgramNotice`](Core_Messages_MiniProgramNotice.MiniProgramNotice.md)

  ↳ [`MiniProgramPage`](Core_Messages_MiniProgramPage.MiniProgramPage.md)

  ↳ [`Music`](Core_Messages_Music.Music.md)

  ↳ [`News`](Core_Messages_News.News.md)

  ↳ [`NewsItem`](Core_Messages_NewsItem.NewsItem.md)

  ↳ [`Raw`](Core_Messages_Raw.Raw.md)

  ↳ [`ReplyInteractiveTaskCard`](Core_Messages_ReplyInteractiveTaskCard.ReplyInteractiveTaskCard.md)

  ↳ [`TaskCard`](Core_Messages_TaskCard.TaskCard.md)

  ↳ [`Text`](Core_Messages_Text.Text.md)

  ↳ [`TextCard`](Core_Messages_TextCard.TextCard.md)

  ↳ [`Transfer`](Core_Messages_Transfer.Transfer.md)

  ↳ [`Message`](Work_GroupRobot_Messages_Message.Message.md)

## Table of contents

### Constructors

- [constructor](Core_Messages_Message.Message.md#constructor)

### Properties

- [attributes](Core_Messages_Message.Message.md#attributes)
- [from](Core_Messages_Message.Message.md#from)
- [id](Core_Messages_Message.Message.md#id)
- [jsonAliases](Core_Messages_Message.Message.md#jsonaliases)
- [properties](Core_Messages_Message.Message.md#properties)
- [required](Core_Messages_Message.Message.md#required)
- [to](Core_Messages_Message.Message.md#to)
- [type](Core_Messages_Message.Message.md#type)
- [ALL](Core_Messages_Message.Message.md#all)
- [DEVICE\_EVENT](Core_Messages_Message.Message.md#device_event)
- [DEVICE\_TEXT](Core_Messages_Message.Message.md#device_text)
- [EVENT](Core_Messages_Message.Message.md#event)
- [FILE](Core_Messages_Message.Message.md#file)
- [IMAGE](Core_Messages_Message.Message.md#image)
- [LINK](Core_Messages_Message.Message.md#link)
- [LOCATION](Core_Messages_Message.Message.md#location)
- [MARKDOWN](Core_Messages_Message.Message.md#markdown)
- [MINIPROGRAM\_NOTICE](Core_Messages_Message.Message.md#miniprogram_notice)
- [MINIPROGRAM\_PAGE](Core_Messages_Message.Message.md#miniprogram_page)
- [SHORT\_VIDEO](Core_Messages_Message.Message.md#short_video)
- [TEXT](Core_Messages_Message.Message.md#text)
- [TEXT\_CARD](Core_Messages_Message.Message.md#text_card)
- [TRANSFER](Core_Messages_Message.Message.md#transfer)
- [VIDEO](Core_Messages_Message.Message.md#video)
- [VOICE](Core_Messages_Message.Message.md#voice)

### Methods

- [all](Core_Messages_Message.Message.md#all)
- [checkRequiredAttributes](Core_Messages_Message.Message.md#checkrequiredattributes)
- [get](Core_Messages_Message.Message.md#get)
- [getAttribute](Core_Messages_Message.Message.md#getattribute)
- [getRequired](Core_Messages_Message.Message.md#getrequired)
- [getType](Core_Messages_Message.Message.md#gettype)
- [has](Core_Messages_Message.Message.md#has)
- [isRequired](Core_Messages_Message.Message.md#isrequired)
- [merge](Core_Messages_Message.Message.md#merge)
- [only](Core_Messages_Message.Message.md#only)
- [propertiesToObject](Core_Messages_Message.Message.md#propertiestoobject)
- [set](Core_Messages_Message.Message.md#set)
- [setAttribute](Core_Messages_Message.Message.md#setattribute)
- [setAttributes](Core_Messages_Message.Message.md#setattributes)
- [setType](Core_Messages_Message.Message.md#settype)
- [toXmlArray](Core_Messages_Message.Message.md#toxmlarray)
- [transformForJsonRequest](Core_Messages_Message.Message.md#transformforjsonrequest)
- [transformForJsonRequestWithoutType](Core_Messages_Message.Message.md#transformforjsonrequestwithouttype)
- [transformToXml](Core_Messages_Message.Message.md#transformtoxml)

## Constructors

### constructor

• **new Message**(`attributes?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `object` |

#### Defined in

[Core/Messages/Message.ts:35](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L35)

## Properties

### attributes

• `Protected` **attributes**: `object` = `{}`

#### Defined in

[Core/Messages/Message.ts:104](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L104)

___

### from

• `Protected` **from**: `string`

#### Defined in

[Core/Messages/Message.ts:31](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L31)

___

### id

• `Protected` **id**: `number`

#### Defined in

[Core/Messages/Message.ts:29](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L29)

___

### jsonAliases

• `Protected` **jsonAliases**: `object` = `{}`

#### Defined in

[Core/Messages/Message.ts:33](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L33)

___

### properties

• `Protected` **properties**: `string`[] = `[]`

#### Defined in

[Core/Messages/Message.ts:32](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L32)

___

### required

• `Protected` **required**: `string`[] = `[]`

#### Defined in

[Core/Messages/Message.ts:106](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L106)

___

### to

• `Protected` **to**: `string`

#### Defined in

[Core/Messages/Message.ts:30](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L30)

___

### type

• `Protected` **type**: `string`

#### Defined in

[Core/Messages/Message.ts:28](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L28)

___

### ALL

▪ `Static` **ALL**: `number`

#### Defined in

[Core/Messages/Message.ts:23](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L23)

___

### DEVICE\_EVENT

▪ `Static` **DEVICE\_EVENT**: `number` = `256`

#### Defined in

[Core/Messages/Message.ts:14](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L14)

___

### DEVICE\_TEXT

▪ `Static` **DEVICE\_TEXT**: `number` = `512`

#### Defined in

[Core/Messages/Message.ts:15](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L15)

___

### EVENT

▪ `Static` **EVENT**: `number` = `1048576`

#### Defined in

[Core/Messages/Message.ts:19](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L19)

___

### FILE

▪ `Static` **FILE**: `number` = `1024`

#### Defined in

[Core/Messages/Message.ts:16](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L16)

___

### IMAGE

▪ `Static` **IMAGE**: `number` = `4`

#### Defined in

[Core/Messages/Message.ts:8](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L8)

___

### LINK

▪ `Static` **LINK**: `number` = `128`

#### Defined in

[Core/Messages/Message.ts:13](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L13)

___

### LOCATION

▪ `Static` **LOCATION**: `number` = `64`

#### Defined in

[Core/Messages/Message.ts:12](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L12)

___

### MARKDOWN

▪ `Static` **MARKDOWN**: `number` = `8388608`

#### Defined in

[Core/Messages/Message.ts:22](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L22)

___

### MINIPROGRAM\_NOTICE

▪ `Static` **MINIPROGRAM\_NOTICE**: `number` = `4194304`

#### Defined in

[Core/Messages/Message.ts:21](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L21)

___

### MINIPROGRAM\_PAGE

▪ `Static` **MINIPROGRAM\_PAGE**: `number` = `2097152`

#### Defined in

[Core/Messages/Message.ts:20](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L20)

___

### SHORT\_VIDEO

▪ `Static` **SHORT\_VIDEO**: `number` = `32`

#### Defined in

[Core/Messages/Message.ts:11](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L11)

___

### TEXT

▪ `Static` **TEXT**: `number` = `2`

#### Defined in

[Core/Messages/Message.ts:7](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L7)

___

### TEXT\_CARD

▪ `Static` **TEXT\_CARD**: `number` = `2048`

#### Defined in

[Core/Messages/Message.ts:17](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L17)

___

### TRANSFER

▪ `Static` **TRANSFER**: `number` = `4096`

#### Defined in

[Core/Messages/Message.ts:18](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L18)

___

### VIDEO

▪ `Static` **VIDEO**: `number` = `16`

#### Defined in

[Core/Messages/Message.ts:10](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L10)

___

### VOICE

▪ `Static` **VOICE**: `number` = `8`

#### Defined in

[Core/Messages/Message.ts:9](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L9)

## Methods

### all

▸ **all**(): `object`

#### Returns

`object`

#### Defined in

[Core/Messages/Message.ts:170](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L170)

___

### checkRequiredAttributes

▸ `Protected` **checkRequiredAttributes**(): `void`

#### Returns

`void`

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

#### Defined in

[Core/Messages/Message.ts:129](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L129)

___

### getRequired

▸ **getRequired**(): `string`[]

#### Returns

`string`[]

#### Defined in

[Core/Messages/Message.ts:177](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L177)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

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

#### Defined in

[Core/Messages/Message.ts:182](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L182)

___

### merge

▸ **merge**(`attributes`): [`Message`](Core_Messages_Message.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `object` |

#### Returns

[`Message`](Core_Messages_Message.Message.md)

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

#### Defined in

[Core/Messages/Message.ts:87](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L87)

___

### set

▸ **set**(`name`, `value`): [`Message`](Core_Messages_Message.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

[`Message`](Core_Messages_Message.Message.md)

#### Defined in

[Core/Messages/Message.ts:122](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L122)

___

### setAttribute

▸ **setAttribute**(`name`, `value`): [`Message`](Core_Messages_Message.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

[`Message`](Core_Messages_Message.Message.md)

#### Defined in

[Core/Messages/Message.ts:115](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L115)

___

### setAttributes

▸ **setAttributes**(`attributes`): [`Message`](Core_Messages_Message.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `object` |

#### Returns

[`Message`](Core_Messages_Message.Message.md)

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

#### Defined in

[Core/Messages/Message.ts:45](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L45)

___

### toXmlArray

▸ **toXmlArray**(): `void`

#### Returns

`void`

#### Defined in

[Core/Messages/Message.ts:62](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L62)

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

#### Defined in

[Core/Messages/Message.ts:50](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Messages/Message.ts#L50)
