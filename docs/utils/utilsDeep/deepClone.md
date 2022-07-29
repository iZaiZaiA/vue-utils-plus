# `deepClone` 对象深拷贝

`支持版本：V0.0.2`


## 参数说明 {#parameter}

| 参数   | 类型  | 可选值 | 默认值 | 说明     |
|------|-----|-----|-----|--------|
| data | -   | -   | -   | 欲拷贝的数据 |


## 返回内容 {#return}

| 参数名 | 说明     |
|-----|--------|
| -   | 拷贝后的数据 |


## code示例 {#code}

```javascript
import { utilsDeep } from "vue-utils-plus"
const { deepClone } = utilsDeep()

let obj = {id: 11, name: 22}

console.log(deepClone(obj))
```
