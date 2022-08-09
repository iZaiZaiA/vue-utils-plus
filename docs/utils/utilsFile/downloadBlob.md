# `downloadBlob` 下载文件

`支持版本：V0.0.2`


## 参数说明 {#parameter}

| 参数          | 类型  | 可选值 | 默认值                      | 说明                                                                                                      |
|-------------|-----|-----|--------------------------|---------------------------------------------------------------------------------------------------------|
| data        | -   | -   | -                        | 文件数据，通常为接口返回的 data                                                                                      |
| disposition | -   | -   | -                        | headers['content-disposition']                                                                          |
| type        | -   | -   | application/vnd.ms-excel | type是文件类，详情可以参阅 [blob文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) |


## code示例 {#code}

```javascript
import { utilsFile } from "vue-utils-plus"
const { downloadBlob } = utilsFile()

console.log(downloadBlob('接口相关数据'))
```
