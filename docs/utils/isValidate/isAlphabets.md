# `isAlphabets` 是否存在大小写字母

`支持版本：V0.0.2`


## 参数说明 {#parameter}

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| val | -   | -   | -   | 内容  |


## 返回内容 {#return}

| 类型      | 说明                        |
|---------|---------------------------|
| Boolean | 存在就返回 `true`，否则返回 `false` |


## code示例 {#code}

```javascript
import { isValidate } from "vue-utils-plus"
const { isAlphabets } = isValidate()

console.log(isAlphabets('aBc1'))
```
