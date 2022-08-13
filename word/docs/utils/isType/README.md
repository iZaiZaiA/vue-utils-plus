# 类型判断

各种类型的判断和处理方法

```javascript
import { isType } from "vue-utils-plus"
```


## 是否为某个类型

`is()` `支持版本：V0.0.2`

### 参数说明

| 参数   | 类型     | 可选值 | 默认值 | 说明                |
|------|--------|-----|-----|-------------------|
| val  | -      | -   | -   | 判断的内容，如 `{}`      |
| type | string | -   | -   | 类型名称，如 `'Object'` |

### 返回内容

| 类型      | 说明                               |
|---------|----------------------------------|
| Boolean | 和传递的类型一致，就返回 `true`，否则返回 `false` |

### code示例

```javascript
const { is } = isType()

is({}, 'Object')
```


## 取数据类型

`getObjType()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| val | -   | -   | -   | 内容  |

### 返回内容

| 类型     | 说明        |
|--------|-----------|
| String | 返回所属的类型名称 |

### code示例

```javascript
const { getObjType } = isType()

getObjType({})
```


## 是否为Null

`isNull()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| val | -   | -   | -   | 内容  |

### 返回内容

| 类型      | 说明                       |
|---------|--------------------------|
| Boolean | 是就返回 `true`，否则返回 `false` |

### code示例

```javascript
const { isNull } = isType()

isNull(null)
```


## 是否为未定义和Null

`isNullAndUnDef()` `支持版本：V0.0.2`

`isNullOrUnDef()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| val | -   | -   | -   | 内容  |

### 返回内容

| 类型      | 说明                       |
|---------|--------------------------|
| Boolean | 是就返回 `true`，否则返回 `false` |

### code示例

```javascript
const { isNullAndUnDef, isNullOrUnDef } = isType()

let obj = {key: null}

isNullAndUnDef(obj.key)
isNullOrUnDef(obj.key)
```


## 是否为空

`isNullAll()` `支持版本：V0.0.2`

`isValueNull()` `支持版本：V0.0.2`

是否为 `undefined`  `null`  `''`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| val | -   | -   | -   | 内容  |

### 返回内容

| 类型      | 说明                       |
|---------|--------------------------|
| Boolean | 是就返回 `true`，否则返回 `false` |

### code示例

```javascript
const { isNullAll, isValueNull } = isType()

let obj = {}

isNullAll(obj.key)

//是否为空，采用ES6，最终效果和 isNullAll 一致
isValueNull(obj.key)
```


## 是否为函数

`isFunction()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明    |
|-----|-----|-----|-----|-------|
| val | -   | -   | -   | 判断的内容 |

### 返回内容

| 类型      | 说明                       |
|---------|--------------------------|
| Boolean | 是就返回 `true`，否则返回 `false` |

### code示例

```javascript
const { isFunction } = isType()

function objFun() {}

isFunction(objFun)
```


## 是否为空对象

`isObjNull()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明    |
|-----|-----|-----|-----|-------|
| val | -   | -   | -   | 判断的内容 |

### 返回内容

| 类型      | 说明                       |
|---------|--------------------------|
| Boolean | 是就返回 `true`，否则返回 `false` |

### code示例

```javascript
const { isObjNull } = isType()

isObjNull({})
```

# 是否已定义

`isDef()` `支持版本：V0.0.2`

`isUnDef()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明    |
|-----|-----|-----|-----|-------|
| val | -   | -   | -   | 判断的内容 |

### 返回内容

| 类型      | 说明                       |
|---------|--------------------------|
| Boolean | 是就返回 `true`，否则返回 `false` |

### code示例

```javascript
const { isDef, isUnDef } = isType()

let obj = {}

isDef(obj.key)
isUnDef(obj.key)
```


## 是否为时间

`isDate()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明    |
|-----|-----|-----|-----|-------|
| val | -   | -   | -   | 判断的内容 |

### 返回内容

| 类型      | 说明                       |
|---------|--------------------------|
| Boolean | 是就返回 `true`，否则返回 `false` |

### code示例

```javascript
const { isDate } = isType()

isDate('2022-07-29')
```


## 是否为数值

`isNumber()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明    |
|-----|-----|-----|-----|-------|
| val | -   | -   | -   | 判断的内容 |

### 返回内容

| 类型      | 说明                       |
|---------|--------------------------|
| Boolean | 是就返回 `true`，否则返回 `false` |

### code示例

```javascript
const { isNumber } = isType()

isNumber(2022)
```


## 是否为异步函数

`isAsyncFunction()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明    |
|-----|-----|-----|-----|-------|
| val | -   | -   | -   | 判断的内容 |

### 返回内容

| 类型      | 说明                       |
|---------|--------------------------|
| Boolean | 是就返回 `true`，否则返回 `false` |

### code示例

```javascript
const { isAsyncFunction } = isType()

async function AsyncFunction() {
    return true
}

isAsyncFunction(AsyncFunction)
```


## 是否为Promise

`isPromise()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明    |
|-----|-----|-----|-----|-------|
| val | -   | -   | -   | 判断的内容 |

### 返回内容

| 类型      | 说明                       |
|---------|--------------------------|
| Boolean | 是就返回 `true`，否则返回 `false` |

### code示例

```javascript
const { isPromise } = isType()

let promiseDate = new Promise( (resolve, reject) => {
    resolve(true);
});

isPromise(promiseDate)
```


## 是否为字符串

`isString()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明    |
|-----|-----|-----|-----|-------|
| val | -   | -   | -   | 判断的内容 |

### 返回内容

| 类型      | 说明                       |
|---------|--------------------------|
| Boolean | 是就返回 `true`，否则返回 `false` |

### code示例

```javascript
const { isString } = isType()

isString('vue-utils-plus')
```


## 是否为Boolean

`isBoolean()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明    |
|-----|-----|-----|-----|-------|
| val | -   | -   | -   | 判断的内容 |

### 返回内容

| 类型      | 说明                       |
|---------|--------------------------|
| Boolean | 是就返回 `true`，否则返回 `false` |

### code示例

```javascript
const { isBoolean } = isType()

isBoolean(true)
```


## 是否为数组

`isArray()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明    |
|-----|-----|-----|-----|-------|
| val | -   | -   | -   | 判断的内容 |

### 返回内容

| 类型      | 说明                       |
|---------|--------------------------|
| Boolean | 是就返回 `true`，否则返回 `false` |

### code示例

```javascript
const { isArray } = isType()

isArray([])
```


## 是否为对象

`isObject()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明    |
|-----|-----|-----|-----|-------|
| val | -   | -   | -   | 判断的内容 |

### 返回内容

| 类型      | 说明                       |
|---------|--------------------------|
| Boolean | 是就返回 `true`，否则返回 `false` |

### code示例

```javascript
const { isObject } = isType()

isObject({})
```


## 是否客户端

`isClient()` `支持版本：V0.0.2`

### 返回内容

| 类型      | 说明                       |
|---------|--------------------------|
| Boolean | 是就返回 `true`，否则返回 `false` |

### code示例

```javascript
const { isClient } = isType()

isClient()
```


## 是否为浏览器

`isWindow()` `支持版本：V0.0.2`

### 返回内容

| 类型      | 说明                       |
|---------|--------------------------|
| Boolean | 是就返回 `true`，否则返回 `false` |

### code示例

```javascript
const { isWindow } = isType()

isWindow()
```


## 是否为元素

`isElement()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明    |
|-----|-----|-----|-----|-------|
| val | -   | -   | -   | 判断的内容 |

### 返回内容

| 类型      | 说明                       |
|---------|--------------------------|
| Boolean | 是就返回 `true`，否则返回 `false` |

### code示例

```html
<template>
    <div ref="idRef">元素</div>
</template>

<script setup>
import {ref, onMounted} from 'vue'

import { isType } from "vue-utils-plus"
const { isElement } = isType()

const idRef = ref(null)

onMounted(() => {
    isElement(idRef.value)
})
</script>
```


## 是否为图片节点

`isImageDom()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明    |
|-----|-----|-----|-----|-------|
| val | -   | -   | -   | 判断的内容 |

### 返回内容

| 类型      | 说明                       |
|---------|--------------------------|
| Boolean | 是就返回 `true`，否则返回 `false` |

### code示例

```html
<template>
    <img src="xxxxx.png" ref="idRef" alt="">元素</img>
</template>

<script setup>
import {ref, onMounted} from 'vue'

import { isType } from "vue-utils-plus"
const { isImageDom } = isType()

const idRef = ref(null)

onMounted(() => {
    isImageDom(idRef.value)
})
</script>
```


## 取数组数据

`getArrValue()` `支持版本：V0.0.6`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明    |
|-----|-----|-----|-----|-------|
| val | -   | -   | -   | 判断的内容 |

### code示例

```javascript
const { getArrValue } = isType()
// 比如，后端接口返回的一个数据。
// 但我们无法预知，我们要取的data是否为数组
// 有可能在某些情况下，不是数组。
const res = {}
// 如果数据存在，就返回原始数据 res.data.data
// 如果不存在，就返回 空数组 []
getArrValue(res.data.data)
```


## 取对象数据

`getObjValue()` `支持版本：V0.0.6`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明    |
|-----|-----|-----|-----|-------|
| val | -   | -   | -   | 判断的内容 |

### code示例

```javascript
const { getObjValue } = isType()
// 比如，后端接口返回的一个数据。
// 但我们无法预知，我们要取的data是否为对象
// 有可能在某些情况下，不是对象。
const res = {}
// 如果数据存在，就返回原始数据 res.data.data
// 如果不存在，就返回 空对象 {}
getObjValue(res.data.data)
```


## 取对象数据2

`getObjNullValue()` `支持版本：V0.0.6`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明    |
|-----|-----|-----|-----|-------|
| val | -   | -   | -   | 判断的内容 |

### code示例

```javascript
const { getObjNullValue } = isType()
// 本质上，跟 getObjValue 一样，只是多了一个处理。
const res = {}
// 如果数据存在，返回原始数据
// 如果不存在，或为空对象时，返回 false
getObjNullValue(res.data.data)
```

