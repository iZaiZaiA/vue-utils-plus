# 随机字符

各种随机字符操作的方法

```javascript
import { utilsRandom } from "vue-utils-plus"
```


## 生成UUID

`UUID()` `支持版本：V0.0.3`

创建一个数组，并且填充数据。

### 返回内容

返回类似这种：`79b084e1-8e33-49f2-a888-28a32f0860db` 的字符串

### code示例

```javascript
const { UUID } = utilsRandom()

UUID() //79b084e1-8e33-49f2-a888-28a32f0860db
```


## UniqueID

`UniqueID()` `支持版本：V0.0.3`

### 原理

`Math.random().toString(36).slice(8)`

### 返回内容

| 类型  | 说明       |
|-----|----------|
| -   | 返回生成后的数据 |

### code示例

```javascript
const { UniqueID } = utilsRandom()

UniqueID()
```


## 生成随机字符串

`getRandom()` `支持版本：V0.0.3`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| num | -   | -   | 8   | 长度  |

### 返回内容

| 类型  | 说明       |
|-----|----------|
| -   | 返回生成后的数据 |

### code示例

```javascript
const { getRandom } = utilsRandom()

getRandom() //"8fq8q8q8"
```


## 生成随机数字

`getNumber()` `支持版本：V0.0.3`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| num | -   | -   | 8   | 长度  |

### 返回内容

| 类型  | 说明       |
|-----|----------|
| -   | 返回生成后的数据 |

### code示例

```javascript
const { getNumber } = utilsRandom()

getNumber()
```


## 生成随机 小写字母 + 大写字母

`getAlphabets()` `支持版本：V0.0.3`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| num | -   | -   | 8   | 长度  |

### 返回内容

| 类型  | 说明       |
|-----|----------|
| -   | 返回生成后的数据 |

### code示例

```javascript
const { getAlphabets } = utilsRandom()

getAlphabets()
```


## 生成随机 小写字母

`getLowerCase()` `支持版本：V0.0.3`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| num | -   | -   | 8   | 长度  |

### 返回内容

| 类型  | 说明       |
|-----|----------|
| -   | 返回生成后的数据 |

### code示例

```javascript
const { getLowerCase } = utilsRandom()

getLowerCase()
```


## 生成随机 数字+ 小写字母

`getNumberLower()` `支持版本：V0.0.3`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| num | -   | -   | 8   | 长度  |

### 返回内容

| 类型  | 说明       |
|-----|----------|
| -   | 返回生成后的数据 |

### code示例

```javascript
const { getNumberLower } = utilsRandom()

getNumberLower()
```

# 生成随机 数字 + 大写字母

`getNumberUpper()` `支持版本：V0.0.3`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| num | -   | -   | 8   | 长度  |

### 返回内容

| 类型  | 说明       |
|-----|----------|
| -   | 返回生成后的数据 |

### code示例

```javascript
const { getNumberUpper } = utilsRandom()

getNumberUpper()
```


## 生成随机 范围随机数

`getRandomFrom()` `支持版本：V0.0.3`

### 参数说明

生成起始数字和结束数字之间的一个随机数

| 参数    | 类型  | 可选值 | 默认值 | 说明   |
|-------|-----|-----|-----|------|
| upper | -   | -   | -   | 起始数字 |
| lower | -   | -   | -   | 结束数字 |

### 返回内容

| 类型  | 说明       |
|-----|----------|
| -   | 返回生成后的数据 |

### code示例

```javascript
const { getRandomFrom } = utilsRandom()

getRandomFrom(1,50) // 12
```
