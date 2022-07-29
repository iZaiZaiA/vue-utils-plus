# `isNullAndUnDef` 是否为未定义和Null

`支持版本：V0.0.2`


## 参数说明 {#parameter}

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| val | -   | -   | -   | 内容  |


## 返回内容 {#return}

| 类型      | 说明                       |
|---------|--------------------------|
| Boolean | 是就返回 `true`，否则返回 `false` |


## code示例 {#code}

```javascript
import { isType } from "vue-utils-plus"
const { isNullAndUnDef,isNullOrUnDef } = isType()

let obj = {key: null}

console.log(isNullAndUnDef(obj.key))
console.log(isNullOrUnDef(obj.key))
```
