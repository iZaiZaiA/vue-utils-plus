# `getOneObjValue` 取转换后的对象值

`支持版本：V0.0.6`


## 参数说明 {#parameter}

| 参数       | 类型  | 可选值 | 默认值 | 说明    |
|----------|-----|-----|-----|-------|
| obj      | -   | -   | -   | 对象数据  |
| keyName  | -   | -   | -   | 对象键值名 |
| keyName2 | -   | -   | -   | 字段名   |


## 返回内容 {#return}

| 参数名 | 说明    |
|-----|-------|
| -   | 取到的数据 |


## code示例 {#code}

```javascript
import { utilsArray } from "vue-utils-plus"
const { getOneObjValue } = utilsArray()

let aaa = {
    aa: {id: 1, code: 'aa'},
    bb: {id: 2, code: 'bb'},
    cc: {id: 3, code: 'cc'},
}

console.log(getOneObjValue(aaa, 'bb'))  // {id: 2, code: 'bb'} or false
console.log(getOneObjValue(aaa, 'bb', 'id'))  // 2 or ''
```
