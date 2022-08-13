# 对象处理

各种对象处理操作的方法

```javascript
import { utilsObject } from "vue-utils-plus"
```


## 判断一个对象是否存在key

`hasKey()` `支持版本：V0.0.2`

### 参数说明

如果传入第二个参数key，则是判断这个obj对象是否存在key这个属性

如果没有传入key这个参数，则判断obj对象是否有键值对

| 参数  | 类型  | 可选值 | 默认值 | 说明      |
|-----|-----|-----|-----|---------|
| obj | -   | -   | -   | 欲拷贝的数据  |
| key | -   | -   | -   | 是否存在key |

### 返回内容

| 类型      | 说明                  |
|---------|---------------------|
| Boolean | 返回 `true` 或 `false` |

### code示例

```javascript
const { hasKey } = utilsObject()

let obj = {id: 11, name: 22}

hasKey(obj,'id') // true
```


## 判断两个对象是否相等

`objEqual()` `支持版本：V0.0.3`

### 参数说明

这两个对象的值只能是数字或字符串

| 参数   | 类型  | 可选值 | 默认值 | 说明   |
|------|-----|-----|-----|------|
| obj1 | -   | -   | -   | 对象数据 |
| obj2 | -   | -   | -   | 对象数据 |


### 返回内容

| 类型      | 说明                  |
|---------|---------------------|
| Boolean | 返回 `true` 或 `false` |

### code示例

```javascript
const { objEqual } = utilsObject()

let obj1 = {id: 11, name: 22}
let obj2 = {id: 11, name: 22}

objEqual(obj1,obj2) // true
```


## 对象深拷贝

`deepClone()` `支持版本：V0.0.3`

### 参数说明

| 参数   | 类型  | 可选值 | 默认值 | 说明     |
|------|-----|-----|-----|--------|
| data | -   | -   | -   | 欲拷贝的数据 |

### 返回内容

| 参数名 | 说明     |
|-----|--------|
| -   | 拷贝后的数据 |


### code示例

```javascript
const { deepClone } = utilsObject()

let obj = {id: 11, name: 22}

deepClone(obj) // {id: 11, name: 22}
```

