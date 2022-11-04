# 数组操作

各种数组操作的方法

```javascript
import { utilsArray } from "vue-utils-plus"
```


## 创建数组

`arrFill()` `支持版本：V0.0.5`

创建一个数组，并且填充数据。

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明   |
|-----|-----|-----|-----|------|
| len | -   | -   | 1   | 数组长度 |
| val | -   | -   | ''  | 默认值  |

### 返回内容

| 参数名 | 说明     |
|-----|--------|
| -   | 新的数组数据 |

### code示例

```javascript
const { arrFill } = utilsArray()

arrFill(5,0)  // [0,0,0,0,0]
```


## 数组随机打乱的方法

`arrShuffle()` `支持版本：V0.0.3`

### 参数说明

| 参数   | 类型  | 可选值 | 默认值 | 说明       |
|------|-----|-----|-----|----------|
| arr  | -   | -   | -   | 数组数据     |

### 返回内容

| 参数名 | 说明     |
|-----|--------|
| -   | 新的数组数据 |

### code示例

```javascript
const { arrShuffle } = utilsArray()

arrShuffle([1,2,3,4,5])
```


## 数组转对象

`ArrToOneObj()` `支持版本：V0.0.6`

### 参数说明

| 参数       | 类型  | 可选值 | 默认值      | 说明    |
|----------|-----|-----|----------|-------|
| arr      | -   | -   | -        | 数组数据  |
| keyName  | -   | -   | -        | 对象键值名 |
| objName  | -   | -   | {}       | 对象变量  |
| arrName  | -   | -   | []       | 数组变量  |
| children | -   | -   | children | 子级字段名 |

### 返回内容

| 参数名     | 说明               |
|---------|------------------|
| objName | 转换后的对象           |
| arrName | 只有 keyName 的一维数组 |

### code示例

```javascript
const { ArrToOneObj } = utilsArray()

let testData = [
    {id: 1 , code: 'aa', children: [{id: 3, code: 'cc'}]},
    {id: 2, code: 'bb'}
]

const getTestData = async () => {
    let aaa = {}, bbb = []
    await ArrToOneObj(testData, 'code', aaa, bbb)
    console.log(aaa)  //见下文
    console.log(bbb) // ['aa','bb','cc']
}

getTestData()

// aaa 拿到的示例，意思就是不管多少个子级，都会转为一个对象集
// 但要注意，keyName 的值要是唯一的，否则就会被覆盖掉
let aaa = {
    aa: {id: 1, code: 'aa'},
    bb: {id: 2, code: 'bb'},
    cc: {id: 3, code: 'cc'},
}
```


## 移除数组中指定元素

`del()` `支持版本：V0.0.3`

### 参数说明

| 参数   | 类型  | 可选值 | 默认值 | 说明       |
|------|-----|-----|-----|----------|
| arr  | -   | -   | -   | 数组数据     |
| item | -   | -   | -   | 数组中的某个元素 |

### 返回内容

| 参数名 | 说明     |
|-----|--------|
| -   | 新的数组数据 |

### code示例

```javascript
const { del } = utilsArray()

del([1,2,3,4,5],1) // [1,3,4,5]
```


## 移除数组中指定元素

`delKey()` `支持版本：V0.0.3`

### 参数说明

| 参数      | 类型  | 可选值 | 默认值 | 说明   |
|---------|-----|-----|-----|------|
| arr     | -   | -   | -   | 数组数据 |
| keyName | -   | -   | -   | 字段名  |
| key     | -   | -   | -   | 字段值  |

### 返回内容

| 参数名 | 说明     |
|-----|--------|
| -   | 新的数组数据 |

### code示例

```javascript
const { delKey } = utilsArray()

let arr = [{id: 1}, {id: 2}]

delKey(arr, 'id', 1) // [{id:2}]
```


## 移除数组中左边的元素

`delKeyLeft()` `支持版本：V0.0.3`

移除传参数组中左边的所有元素。

### 参数说明

| 参数      | 类型  | 可选值 | 默认值 | 说明   |
|---------|-----|-----|-----|------|
| arr     | -   | -   | -   | 数组数据 |
| keyName | -   | -   | -   | 字段名  |
| key     | -   | -   | -   | 字段值  |

### 返回内容

| 参数名 | 说明     |
|-----|--------|
| -   | 新的数组数据 |

### code示例

```javascript
const { delKeyLeft } = utilsArray()

let arr = [{id:1},{id:2}]

delKeyLeft(arr, 'id', 2) // [{id:2}]
```


## 移除数组中其它元素

`delKeyOther()` `支持版本：V0.0.3`

移除数组中其它元素，只保留传参相关的元素。

### 参数说明

| 参数      | 类型  | 可选值 | 默认值 | 说明   |
|---------|-----|-----|-----|------|
| arr     | -   | -   | -   | 数组数据 |
| keyName | -   | -   | -   | 字段名  |
| key     | -   | -   | -   | 字段值  |

### 返回内容

| 参数名 | 说明     |
|-----|--------|
| -   | 新的数组数据 |

### code示例

```javascript
const { delKeyOther } = utilsArray()

let arr = [{id:1},{id:2}]

delKeyOther(arr, 'id', 2) // [{id:2}]
```

# 移除数组中右边的元素

`delKeyRight()` `支持版本：V0.0.3`

移除传参数组中右边的所有元素

### 参数说明

| 参数      | 类型  | 可选值 | 默认值 | 说明   |
|---------|-----|-----|-----|------|
| arr     | -   | -   | -   | 数组数据 |
| keyName | -   | -   | -   | 字段名  |
| key     | -   | -   | -   | 字段值  |

### 返回内容

| 参数名 | 说明     |
|-----|--------|
| -   | 新的数组数据 |

### code示例

```javascript
const { delKeyRight } = utilsArray()

let arr = [{id:1},{id:2}]

delKeyRight(arr, 'id', 1) // [{id:1}]
```


## 移除数组中左边的元素

`delLeft()` `支持版本：V0.0.3`

移除传参数组中左边的所有元素。

### 参数说明

| 参数   | 类型  | 可选值 | 默认值 | 说明       |
|------|-----|-----|-----|----------|
| arr  | -   | -   | -   | 数组数据     |
| item | -   | -   | -   | 数组中的某个元素 |

### 返回内容

| 参数名 | 说明     |
|-----|--------|
| -   | 新的数组数据 |

### code示例

```javascript
const { delLeft } = utilsArray()

let arr = [1,2,3,4,5]

delLeft(arr,3) // [3,4,5]
```


## 移除数组中其它元素

`delOther()` `支持版本：V0.0.3`

移除数组中其它元素，只保留传参的元素。

### 参数说明

| 参数   | 类型  | 可选值 | 默认值 | 说明       |
|------|-----|-----|-----|----------|
| arr  | -   | -   | -   | 数组数据     |
| item | -   | -   | -   | 数组中的某个元素 |

### 返回内容

| 参数名 | 说明     |
|-----|--------|
| -   | 新的数组数据 |

### code示例

```javascript
const { delOther } = utilsArray()

let arr = [1,2,3,4,5]

delOther(arr,1) //[1]
```


## 移除数组中右边的元素

`delRight()` `支持版本：V0.0.3`

移除传参数组中右边的所有元素

### 参数说明

| 参数   | 类型  | 可选值 | 默认值 | 说明       |
|------|-----|-----|-----|----------|
| arr  | -   | -   | -   | 数组数据     |
| item | -   | -   | -   | 数组中的某个元素 |

### 返回内容

| 参数名 | 说明     |
|-----|--------|
| -   | 新的数组数据 |

### code示例

```javascript
const { delRight } = utilsArray()

let arr = [1,2,3,4,5]

delRight(arr,1) //[1]
```


## 获取数组索引

`getIndex()` `支持版本：V0.0.3`

### 参数说明

| 参数      | 类型  | 可选值 | 默认值 | 说明   |
|---------|-----|-----|-----|------|
| arr     | -   | -   | -   | 数组数据 |
| keyName | -   | -   | -   | 字段名  |
| key     | -   | -   | -   | 字段值  |

### 返回内容

| 参数名 | 说明              |
|-----|-----------------|
| -   | 获取到的索引，不存在则为 -1 |

### code示例

```javascript
const { getIndex } = utilsArray()

let arr = [{id:1},{id:2}]

getIndex(arr, 'id', 2) // 1
```


## 取数组中的值

`getArrKeyValue()` `支持版本：V1.0.5`

### 参数说明

| 参数       | 类型  | 可选值 | 默认值 | 说明   |
|----------|-----|-----|-----|------|
| arr      | -   | -   | -   | 数组数据 |
| keyName  | -   | -   | -   | 字段名  |
| keyName2 | -   | -   | -   | 字段名  |
| value    | -   | -   | -   | 字段值  |

### 返回内容

| 参数名 | 说明                        |
|-----|---------------------------|
| -   | 获取到的数据，不存在则为 value 参数或 为空 |

### code示例

```javascript
const { getArrKeyValue } = utilsArray()

let arr = [{id: 1, name: '1111'},{id: 2, name: '222'}]

getArrKeyValue(arr, 'id', 'name', 2) // '222'
```



## 取转换后的对象值

`getOneObjValue()` `支持版本：V0.0.6`

### 参数说明

| 参数       | 类型  | 可选值 | 默认值 | 说明    |
|----------|-----|-----|-----|-------|
| obj      | -   | -   | -   | 对象数据  |
| keyName  | -   | -   | -   | 对象键值名 |
| keyName2 | -   | -   | -   | 字段名   |

### 返回内容

| 参数名 | 说明    |
|-----|-------|
| -   | 取到的数据 |

### code示例

```javascript
const { getOneObjValue } = utilsArray()

let aaa = {
    aa: {id: 1, code: 'aa'},
    bb: {id: 2, code: 'bb'},
    cc: {id: 3, code: 'cc'},
}

getOneObjValue(aaa, 'bb')  // {id: 2, code: 'bb'} or false
getOneObjValue(aaa, 'bb', 'id')  // 2 or ''
```


## 两个数组的并集

`getUnion()` `支持版本：V0.0.3`

得到两个数组的并集, 两个数组的元素为数值或字符串

### 参数说明

| 参数   | 类型  | 可选值 | 默认值 | 说明   |
|------|-----|-----|-----|------|
| arr1 | -   | -   | -   | 数组数据 |
| arr2 | -   | -   | -   | 数组数据 |

### 返回内容

| 参数名 | 说明     |
|-----|--------|
| -   | 新的数组数据 |

### code示例

```javascript
const { getUnion } = utilsArray()

let arr1 = [1,2,3]
let arr2 = [3,4,5]

getUnion(arr1,arr2)
```


## 数组中是否包含某个元素

`hasOneOf()` `支持版本：V0.0.3`

判断要查询的数组是否至少有一个元素包含在目标数组中

### 参数说明

| 参数   | 类型  | 可选值 | 默认值 | 说明   |
|------|-----|-----|-----|------|
| arr1 | -   | -   | -   | 数组数据 |
| arr2 | -   | -   | -   | 数组数据 |

### 返回内容

| 类型      | 说明                  |
|---------|---------------------|
| Boolean | 返回 `true` 或 `false` |

### code示例

```javascript
const { hasOneOf } = utilsArray()

let arr1 = [1,2,3]
let arr2 = [3,4,5]

hasOneOf(arr1,arr2) // true
```

## 两个数组的交集

`intersection()` `支持版本：V0.0.3`

得到两个数组的交集, 两个数组的元素为数值或字符串

### 参数说明

| 参数   | 类型  | 可选值 | 默认值 | 说明   |
|------|-----|-----|-----|------|
| arr1 | -   | -   | -   | 数组数据 |
| arr2 | -   | -   | -   | 数组数据 |

### 返回内容

| 参数名 | 说明     |
|-----|--------|
| -   | 新的数组数据 |

### code示例

```javascript
const { intersection } = utilsArray()

let arr1 = [1,2,3]
let arr2 = [3,4,5]

intersection(arr1,arr2)
```

## 二维数组中是否存在

`isIndex()` `支持版本：V0.0.6`

### 参数说明

| 参数      | 类型  | 可选值 | 默认值 | 说明   |
|---------|-----|-----|-----|------|
| arr     | -   | -   | -   | 数组数据 |
| keyName | -   | -   | -   | 字段名  |
| key     | -   | -   | -   | 字段值  |

### 返回内容

| 参数名 | 说明               |
|-----|------------------|
| -   | `true` 或 `false` |

### code示例

```javascript
const { isIndex } = utilsArray()

let arr = [{id:1},{id:2}]

isIndex(arr, 'id', 2) // true
```

## 数组中是否存在

`isItem()` `支持版本：V0.0.3`

### 参数说明

| 参数   | 类型  | 可选值 | 默认值 | 说明       |
|------|-----|-----|-----|----------|
| arr  | -   | -   | -   | 数组数据     |
| item | -   | -   | -   | 数组中的某个元素 |

### 返回内容

| 参数名 | 说明               |
|-----|------------------|
| -   | `true` 或 `false` |

### code示例

```javascript
const { isItem } = utilsArray()

let arr = [1,2,3,4,5]

isItem(arr,1) // true
```

## 替换数组位置

`replaceItem()` `支持版本：V0.0.3`

替换数组中两个元素的位置

### 参数说明

| 参数    | 类型  | 可选值 | 默认值 | 说明    |
|-------|-----|-----|-----|-------|
| arr1  | -   | -   | -   | 数组数据  |
| item1 | -   | -   | -   | 元素数据1 |
| item2 | -   | -   | -   | 元素数据2 |

### 返回内容

| 参数名 | 说明     |
|-----|--------|
| -   | 新的数组数据 |

### code示例

```javascript
const { replaceItem } = utilsArray()

let arr1 = [1,2,3]

replaceItem(arr1, 1, 3)
```
