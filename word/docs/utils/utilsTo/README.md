# 数据转换

各种数据转换的操作方法

```javascript
import { utilsTo } from "vue-utils-plus"
```

## 强转int型

`toInt()` `支持版本：V0.0.3`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| val | -   | -   | -   | 内容  |

### 返回内容

| 类型  | 说明     |
|-----|--------|
| -   | 返回相关数据 |

### code示例

```javascript
const { toInt } = utilsTo()

toInt('123') // 123
```


## Json强转为Form类型

`toFormData()` `支持版本：V0.0.3`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明    |
|-----|-----|-----|-----|-------|
| obj | -   | -   | -   | obj对象 |

### 返回内容

| 类型  | 说明     |
|-----|--------|
| -   | 返回相关数据 |

### code示例

```javascript
const { toFormData } = utilsTo()

let obj = {id: 1, name: 'vue'}

toFormData(obj)
```


## 根据逗号联合

`toJoin()` `支持版本：V0.0.3`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| arr | -   | -   | -   | 数组  |

### 返回内容

| 类型  | 说明     |
|-----|--------|
| -   | 返回相关数据 |

### code示例

```javascript
const { toJoin } = utilsTo()

let arr = [1, 2, 3]

toJoin(arr) // 1,2,3
```


## 根据逗号分隔

`toSplit()` `支持版本：V0.0.3`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| val | -   | -   | -   | 内容  |

### 返回内容

| 类型  | 说明     |
|-----|--------|
| -   | 返回相关数据 |

### code示例

```javascript
const { toSplit } = utilsTo()

toSplit('1,2,3,4') // [1,2,3,4]
```


## 表单转URL拼接

`toSerialize()` `支持版本：V0.0.3`

### 参数说明

| 参数   | 类型  | 可选值 | 默认值 | 说明    |
|------|-----|-----|-----|-------|
| data | -   | -   | -   | obj数据 |

### 返回内容

| 类型  | 说明     |
|-----|--------|
| -   | 返回相关数据 |

### code示例

```javascript
const { toSerialize } = utilsTo()

let obj = {id: 1, name: 'vue'}

toSerialize(obj) // id=1&name=vue
```


## 颜色混合

`toColor()` `支持版本：V0.0.3`

### 参数说明

| 参数    | 类型  | 可选值 | 默认值 | 说明            |
|-------|-----|-----|-----|---------------|
| c1    | -   | -   | -   | 底色颜色值         |
| c2    | -   | -   | -   | 主颜色值          |
| ratio | -   | -   | -   | 混合度，0.1 - 0.9 |

### 返回内容

| 类型  | 说明        |
|-----|-----------|
| -   | 返回混合后的颜色值 |

### code示例

```javascript
const { toColor } = utilsTo()

toColor('#FFFFFF', '#FE0000', 0.5)
```


## 字符串转数组或JSON

`toParse()` `支持版本：V1.0.1`

其实就是 `JSON.parse`，只是外面包了一层 `try`，防止不规范的内容转换失败报错，导致后续线程终止。

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明     |
|-----|-----|-----|-----|--------|
| val | -   | -   | -   | 待转换的内容 |

### 返回内容

| 类型  | 说明                        |
|-----|---------------------------|
| -   | 如果能转换，就返回转换后的数据，否则返回false |

### code示例

```javascript
const { toParse } = utilsTo()

const val = "[abx1-2, abcsd-35]"
const res = toParse(val) || []
```


## 处理栅栏间隔

`setRowSpace()` `支持版本：V1.0.2`

### 参数说明

| 参数      | 类型     | 可选值                | 默认值      | 说明   |
|---------|--------|--------------------|----------|------|
| spacing | Number | -                  | -        | 间隔值  |
| type    | String | `margin` `padding` | `margin` | 间距类型 |

### 返回内容

| 类型  | 说明      |
|-----|---------|
| -   | style样式 |

### code示例

```javascript
const { setRowSpace } = utilsTo()

setRowSpace(20, 'margin')   // margin: -10px
setRowSpace(20, 'padding')  // padding: 10px
```
