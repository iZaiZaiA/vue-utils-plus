# `calcDate` 计算时间

`支持版本：V0.0.2`


## 参数说明 {#parameter}

| 参数    | 类型  | 可选值 | 默认值 | 说明    |
|-------|-----|-----|-----|-------|
| date1 | -   | -   | -   | 日期时间1 |
| date2 | -   | -   | -   | 日期时间2 |


## 返回内容 {#return}

| 参数名     | 说明           |
|---------|--------------|
| leave1  | 计算天数后剩余的毫秒数  |
| leave2  | 计算小时数后剩余的毫秒数 |
| leave3  | 计算分钟数后剩余的毫秒数 |
| days    | 剩余天数         |
| hours   | 剩余小时         |
| minutes | 剩余分钟         |
| seconds | 剩余秒          |


## code示例 {#code}

```javascript
import { utilsDate } from "vue-utils-plus"
const { calcDate } = utilsDate()

console.log(calcDate('2022-07-29 10:22:14', '2022-08-14 23:59:59'))
```
