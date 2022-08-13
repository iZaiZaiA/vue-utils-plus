# 文件处理

各种文件处理操作的方法

```javascript
import { utilsFile } from "vue-utils-plus"
```


## 判断文件大小

`isSize()` `支持版本：V0.0.5`

### 参数说明

| 参数       | 类型  | 可选值 | 默认值 | 说明          |
|----------|-----|-----|-----|-------------|
| fileSize | -   | -   | -   | 文件数据的字节     |
| size     | -   | -   | -   | 要判断的大小, 单位M |

### 返回内容

| 类型      | 说明                  |
|---------|---------------------|
| Boolean | 返回 `true` 或 `false` |

### code示例

```javascript
const { isSize } = utilsFile()

isSize(102400,10) // true
```


## base64转成文件

`base64ToFile()` `支持版本：V0.0.6`

### 参数说明

| 参数       | 类型  | 可选值 | 默认值        | 说明                                                                                                  |
|----------|-----|-----|------------|-----------------------------------------------------------------------------------------------------|
| base64   | -   | -   | -          | 文件base64数据                                                                                          |
| type     | -   | -   | image/jpeg | 文件类型，详情可以参阅 [blob文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) |
| fileName | -   | -   | 当前时间戳      | 文件名称，默认为当前时间戳                                                                                       |
| suffix   | -   | -   | "jpg"      | 文件后缀                                                                                                |

### 返回内容

| 参数名  | 说明     |
|------|--------|
| blob | 新的文件对象 |

### code示例

```javascript
const { base64ToFile } = utilsFile()

const fileBase64 = '文件base64数据'

const blob = base64ToFile(fileBase64)

//封装为formData进行请求
let formData = new FormData();
formData.append("file", blob);

console.log(formData)
```


## 下载文件

`downloadBlob()` `支持版本：V0.0.2`

### 参数说明

| 参数          | 类型  | 可选值 | 默认值                      | 说明                                                                                                      |
|-------------|-----|-----|--------------------------|---------------------------------------------------------------------------------------------------------|
| data        | -   | -   | -                        | 文件数据，通常为接口返回的 data                                                                                      |
| disposition | -   | -   | -                        | headers['content-disposition']                                                                          |
| type        | -   | -   | application/vnd.ms-excel | type是文件类，详情可以参阅 [blob文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) |

### code示例

```javascript
const { downloadBlob } = utilsFile()

downloadBlob('接口相关数据')
```

