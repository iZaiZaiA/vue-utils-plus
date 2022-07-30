# `arrShuffle` 数组随机打乱的方法

`支持版本：V0.0.3`


## 参数说明 {#parameter}

| 参数   | 类型  | 可选值 | 默认值 | 说明       |
|------|-----|-----|-----|----------|
| arr  | -   | -   | -   | 数组数据     |


## 返回内容 {#return}

| 参数名 | 说明     |
|-----|--------|
| -   | 新的数组数据 |


## code示例 {#code}

```javascript
import { utilsArray } from "vue-utils-plus"
const { arrShuffle } = utilsArray()

let arr = [1,2,3,4,5]

console.log(arrShuffle(arr))
```
