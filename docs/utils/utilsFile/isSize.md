# `isSize` 判断文件大小

`支持版本：V0.0.5`


## 参数说明 {#parameter}

| 参数       | 类型  | 可选值 | 默认值 | 说明          |
|----------|-----|-----|-----|-------------|
| fileSize | -   | -   | -   | 文件数据的字节     |
| size     | -   | -   | -   | 要判断的大小, 单位M |


## code示例 {#code}

```javascript
import { utilsFile } from "vue-utils-plus"
const { isSize } = utilsFile()

console.log(isSize(102400,10))
```
