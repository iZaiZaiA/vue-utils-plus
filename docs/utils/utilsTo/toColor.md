# `toColor` 颜色混合

`支持版本：V0.0.3`


## 参数说明 {#parameter}

| 参数    | 类型  | 可选值 | 默认值 | 说明            |
|-------|-----|-----|-----|---------------|
| c1    | -   | -   | -   | 底色颜色值         |
| c2    | -   | -   | -   | 主颜色值          |
| ratio | -   | -   | -   | 混合度，0.1 - 0.9 |


## 返回内容 {#return}

| 类型  | 说明        |
|-----|-----------|
| -   | 返回混合后的颜色值 |


## code示例 {#code}

```javascript
import { utilsTo } from "vue-utils-plus"
const { toColor } = utilsTo()

console.log(toColor('#FFFFFF', '#FE0000', 0.5))
```
