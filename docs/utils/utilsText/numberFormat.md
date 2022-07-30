# `numberFormat` 数字格式化

`支持版本：V0.0.3`

大于 1千，显示 `K` 。 大于 1万，显示 `W`


## 参数说明 {#parameter}

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| num | -   | -   | -   | 内容  |


## 返回内容 {#return}

| 类型  | 说明      |
|-----|---------|
| -   | 格式化后的内容 |


## code示例 {#code}

```javascript
import { utilsText } from "vue-utils-plus"
const { numberFormat } = utilsText()

console.log(numberFormat(1000))
```
