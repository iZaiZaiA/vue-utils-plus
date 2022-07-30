# `delKey` 移除数组中指定元素

`支持版本：V0.0.3`


## 参数说明 {#parameter}

| 参数      | 类型  | 可选值 | 默认值 | 说明   |
|---------|-----|-----|-----|------|
| arr     | -   | -   | -   | 数组数据 |
| keyName | -   | -   | -   | 字段名  |
| key     | -   | -   | -   | 字段值  |


## 返回内容 {#return}

| 参数名 | 说明     |
|-----|--------|
| -   | 新的数组数据 |


## code示例 {#code}

```javascript
import { utilsArray } from "vue-utils-plus"
const { delKey } = utilsArray()

let arr = [{id:1},{id:2}]

console.log(delKey(arr, 'id', 1))
```
