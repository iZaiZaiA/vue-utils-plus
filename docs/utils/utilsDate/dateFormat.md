# `dateFormat` 计算时间

`支持版本：V0.0.2`


## 参数说明 {#parameter}

| 参数     | 类型  | 可选值 | 默认值                 | 说明   |
|--------|-----|-----|---------------------|------|
| date   | -   | -   | -                   | 日期对象 |
| format | -   | -   | yyyy-MM-dd hh:mm:ss | 格式   |


## 返回内容 {#return}

| 参数字段 | 说明      |
|------|---------|
| -    | 格式化后的内容 |


## code示例 {#code}

```javascript
import { utilsDate } from "vue-utils-plus"
const { dateFormat } = utilsDate()

console.log(dateFormat(new Date(), 'yyyy-MM-dd'))
```
