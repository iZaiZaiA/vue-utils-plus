# `is` 值是否为某个类型

`支持版本：V0.0.2`


## 参数说明 {#parameter}

| 参数   | 类型     | 可选值 | 默认值 | 说明                |
|------|--------|-----|-----|-------------------|
| val  | -      | -   | -   | 判断的内容，如 `{}`      |
| type | string | -   | -   | 类型名称，如 `'Object'` |


## 返回内容 {#return}

| 类型      | 说明                               |
|---------|----------------------------------|
| Boolean | 和传递的类型一致，就返回 `true`，否则返回 `false` |


## code示例 {#code}

```javascript
import { isType } from "vue-utils-plus"
const { is } = isType()

let obj = {}

console.log(is(obj, 'Object'))
```
