# `getDateTime` 取当前时间

`支持版本：V0.0.3`

## 返回内容 {#return}

| 参数名      | 说明   |
|----------|------|
| dateTime | 日期时间 |
| date     | 日期   |
| time     | 时间   |
| obj      | 单独   |


## code示例 {#code}

```javascript
import { utilsDate } from "vue-utils-plus"
const { getDateTime } = utilsDate()

console.log(getDateTime())
```


更多 js 原生方法，查阅：[Date](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)
