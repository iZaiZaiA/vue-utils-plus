# 日期时间

各种日期时间操作的方法，更多 js 原生方法，查阅：[Date](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)

```javascript
import { utilsDate } from "vue-utils-plus"
```

## 取当前时间

`getDateTime()` `支持版本：V0.0.3`

### 返回内容

| 参数名      | 说明   |
|----------|------|
| dateTime | 日期时间 |
| date     | 日期   |
| time     | 时间   |
| obj      | 单独   |

### code示例

```javascript
const { getDateTime } = utilsDate()

getDateTime()
```


## 当前时间戳

`dateNow()` `支持版本：V0.0.3`

### 返回内容

| 参数字段 | 说明    |
|------|-------|
| -    | 当前时间戳 |

### code示例

```javascript
const { dateNow } = utilsDate()

dateNow()
```


## 日期时间格式化

`dateFormat()` `支持版本：V0.0.2`

### 参数说明

| 参数     | 类型  | 可选值 | 默认值                 | 说明   |
|--------|-----|-----|---------------------|------|
| date   | -   | -   | -                   | 日期对象 |
| format | -   | -   | yyyy-MM-dd hh:mm:ss | 格式   |

### 返回内容

| 参数字段 | 说明      |
|------|---------|
| -    | 格式化后的内容 |

### code示例

```javascript
const { dateFormat } = utilsDate()

dateFormat(new Date(), 'yyyy-MM-dd') // 2020-01-01
```


## 计算时间

`calcDate()` `支持版本：V0.0.2`

### 参数说明

| 参数    | 类型  | 可选值 | 默认值 | 说明    |
|-------|-----|-----|-----|-------|
| date1 | -   | -   | -   | 日期时间1 |
| date2 | -   | -   | -   | 日期时间2 |

### 返回内容

| 参数名     | 说明           |
|---------|--------------|
| leave1  | 计算天数后剩余的毫秒数  |
| leave2  | 计算小时数后剩余的毫秒数 |
| leave3  | 计算分钟数后剩余的毫秒数 |
| days    | 剩余天数         |
| hours   | 剩余小时         |
| minutes | 剩余分钟         |
| seconds | 剩余秒          |

### code示例

```javascript
const { calcDate } = utilsDate()

calcDate('2022-07-29 10:22:14', '2022-08-14 23:59:59')
```

