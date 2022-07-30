# `intersection` 两个数组的交集

`支持版本：V0.0.3`

得到两个数组的交集, 两个数组的元素为数值或字符串

## 参数说明 {#parameter}

| 参数   | 类型  | 可选值 | 默认值 | 说明   |
|------|-----|-----|-----|------|
| arr1 | -   | -   | -   | 数组数据 |
| arr2 | -   | -   | -   | 数组数据 |


## 返回内容 {#return}

| 参数名 | 说明     |
|-----|--------|
| -   | 新的数组数据 |


## code示例 {#code}

```javascript
import { utilsArray } from "vue-utils-plus"
const { intersection } = utilsArray()

let arr1 = [1,2,3]
let arr2 = [3,4,5]

console.log(intersection(arr1,arr2))
```
