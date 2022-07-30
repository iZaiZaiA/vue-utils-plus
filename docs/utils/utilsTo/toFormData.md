# `toFormData` Json强转为Form类型

`支持版本：V0.0.3`


## 参数说明 {#parameter}

| 参数  | 类型  | 可选值 | 默认值 | 说明    |
|-----|-----|-----|-----|-------|
| obj | -   | -   | -   | obj对象 |


## 返回内容 {#return}

| 类型  | 说明     |
|-----|--------|
| -   | 返回相关数据 |


## code示例 {#code}

```javascript
import { utilsTo } from "vue-utils-plus"
const { toFormData } = utilsTo()

let obj = {id: 1, name: 'vue'}

console.log(toFormData(obj))
```
