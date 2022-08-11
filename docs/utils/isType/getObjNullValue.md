# `getObjNullValue` 取对象数据2

`支持版本：V0.0.6`


## 参数说明 {#parameter}

| 参数  | 类型  | 可选值 | 默认值 | 说明    |
|-----|-----|-----|-----|-------|
| val | -   | -   | -   | 判断的内容 |


## code示例 {#code}

```javascript
import { isType } from "vue-utils-plus"
const { getObjNullValue } = isType()

//本质上，跟 getObjValue 一样，只是多了一个处理。
const res = {}
console.log(getObjNullValue(res.data.data)) // 如果数据存在，返回原始数据，如果不存在，或为空对象时，返回 false
```
