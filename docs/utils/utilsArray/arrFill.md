# `arrFill` 创建数组

`支持版本：V0.0.5`

创建一个数组，并且填充数据。


## 参数说明 {#parameter}

| 参数  | 类型  | 可选值 | 默认值 | 说明   |
|-----|-----|-----|-----|------|
| len | -   | -   | 1   | 数组长度 |
| val | -   | -   | ''  | 默认值  |


## 返回内容 {#return}

| 参数名 | 说明     |
|-----|--------|
| -   | 新的数组数据 |


## code示例 {#code}

```javascript
import { utilsArray } from "vue-utils-plus"
const { arrFill } = utilsArray()

console.log(arrFill(5,0))  // [0,0,0,0,0]
```
