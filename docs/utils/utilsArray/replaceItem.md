# `replaceItem` 替换数组位置

`支持版本：V0.0.3`

替换数组中两个元素的位置

## 参数说明 {#parameter}

| 参数    | 类型  | 可选值 | 默认值 | 说明    |
|-------|-----|-----|-----|-------|
| arr1  | -   | -   | -   | 数组数据  |
| item1 | -   | -   | -   | 元素数据1 |
| item2 | -   | -   | -   | 元素数据2 |


## 返回内容 {#return}

| 参数名 | 说明     |
|-----|--------|
| -   | 新的数组数据 |


## code示例 {#code}

```javascript
import { utilsArray } from "vue-utils-plus"
const { replaceItem } = utilsArray()

let arr1 = [1,2,3]

console.log(replaceItem(arr1, 1, 3))
```
