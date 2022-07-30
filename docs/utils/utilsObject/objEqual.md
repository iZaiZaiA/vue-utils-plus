# `objEqual` 判断两个对象是否相等

`支持版本：V0.0.3`


## 参数说明 {#parameter}

这两个对象的值只能是数字或字符串

| 参数   | 类型  | 可选值 | 默认值 | 说明   |
|------|-----|-----|-----|------|
| obj1 | -   | -   | -   | 对象数据 |
| obj2 | -   | -   | -   | 对象数据 |


## 返回内容 {#return}

| 参数名 | 说明               |
|-----|------------------|
| -   | `true` 或 `false` |


## code示例 {#code}

```javascript
import { utilsObject } from "vue-utils-plus"
const { objEqual } = utilsObject()

let obj1 = {id: 11, name: 22}
let obj2 = {id: 11, name: 22}

console.log(objEqual(obj1,obj2))
```
