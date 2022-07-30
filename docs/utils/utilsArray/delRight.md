# `delRight` 移除数组中右边的元素

`支持版本：V0.0.3`

移除传参数组中右边的所有元素。

## 参数说明 {#parameter}

| 参数   | 类型  | 可选值 | 默认值 | 说明       |
|------|-----|-----|-----|----------|
| arr  | -   | -   | -   | 数组数据     |
| item | -   | -   | -   | 数组中的某个元素 |


## 返回内容 {#return}

| 参数名 | 说明     |
|-----|--------|
| -   | 新的数组数据 |


## code示例 {#code}

```javascript
import { utilsArray } from "vue-utils-plus"
const { delRight } = utilsArray()

let arr = [1,2,3,4,5]

console.log(delRight(arr,1))
```
