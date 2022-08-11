# `getArrValue` 取数组数据

`支持版本：V0.0.6`


## 参数说明 {#parameter}

| 参数  | 类型  | 可选值 | 默认值 | 说明    |
|-----|-----|-----|-----|-------|
| val | -   | -   | -   | 判断的内容 |


## code示例 {#code}

```javascript
import { isType } from "vue-utils-plus"
const { getArrValue } = isType()

//比如，后端接口返回的一个数据。但我们无法预知，我们要取的data是否为数组，有可能在某些情况下，不是数组。
const res = {}

console.log(getArrValue(res.data.data)) // 如果数据存在，就返回原始数据 res.data.data，如果不存在，就返回 空数组 []
```
