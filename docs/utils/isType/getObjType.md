# `getObjType` 取数据类型

`支持版本：V0.0.2`


## 参数说明 {#parameter}

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| val | -   | -   | -   | 内容  |


## 返回内容 {#return}

| 类型     | 说明        |
|--------|-----------|
| String | 返回所属的类型名称 |


## code示例 {#code}

```javascript
import { isType } from "vue-utils-plus"
const { getObjType } = isType()

let obj = {}

console.log(getObjType(obj))
```
