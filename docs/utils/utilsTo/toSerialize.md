# `toSerialize` 根据逗号分隔

`支持版本：V0.0.3`


## 参数说明 {#parameter}

| 参数   | 类型  | 可选值 | 默认值 | 说明    |
|------|-----|-----|-----|-------|
| data | -   | -   | -   | obj数据 |


## 返回内容 {#return}

| 类型  | 说明     |
|-----|--------|
| -   | 返回相关数据 |


## code示例 {#code}

```javascript
import { utilsTo } from "vue-utils-plus"
const { toSerialize } = utilsTo()

let obj = {id: 1, name: 'vue'}

console.log(toSerialize(obj)) // id=1&name=vue
```
