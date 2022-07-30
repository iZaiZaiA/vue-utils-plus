# `getIndex` 获取数组索引

`支持版本：V0.0.3`

## 参数说明 {#parameter}

| 参数      | 类型  | 可选值 | 默认值 | 说明   |
|---------|-----|-----|-----|------|
| arr     | -   | -   | -   | 数组数据 |
| keyName | -   | -   | -   | 字段名  |
| key     | -   | -   | -   | 字段值  |


## 返回内容 {#return}

| 参数名 | 说明              |
|-----|-----------------|
| -   | 获取到的索引，不存在则为 -1 |


## code示例 {#code}

```javascript
import { utilsArray } from "vue-utils-plus"
const { getIndex } = utilsArray()

let arr = [{id:1},{id:2}]

console.log(getIndex(arr, 'id', 2))
```
