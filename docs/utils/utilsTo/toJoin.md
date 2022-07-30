# `toJoin` 根据逗号联合

`支持版本：V0.0.3`


## 参数说明 {#parameter}

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| arr | -   | -   | -   | 数组  |


## 返回内容 {#return}

| 类型  | 说明     |
|-----|--------|
| -   | 返回相关数据 |


## code示例 {#code}

```javascript
import { utilsTo } from "vue-utils-plus"
const { toJoin } = utilsTo()

let arr = [1, 2, 3]

console.log(toJoin(arr)) // 1,2,3
```
