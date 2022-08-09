# `base64ToFile` base64转成文件

`支持版本：V0.0.6`


## 参数说明 {#parameter}

| 参数       | 类型  | 可选值 | 默认值        | 说明                                                                                                  |
|----------|-----|-----|------------|-----------------------------------------------------------------------------------------------------|
| base64   | -   | -   | -          | 文件base64数据                                                                                          |
| type     | -   | -   | image/jpeg | 文件类型，详情可以参阅 [blob文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) |
| fileName | -   | -   | 当前时间戳      | 文件名称，默认为当前时间戳                                                                                       |
| suffix   | -   | -   | "jpg"      | 文件后缀                                                                                                |


## code示例 {#code}

```javascript
import { utilsFile } from "vue-utils-plus"
const { base64ToFile } = utilsFile()

const fileBase64 = '文件base64数据'

const blob = base64ToFile(fileBase64)

//封装为formData进行请求
let formData = new FormData();
formData.append("file", blob);

console.log(formData)
```
