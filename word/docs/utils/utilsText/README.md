# 文本操作

各种文本操作的方法

```javascript
import { utilsText } from "vue-utils-plus"
```


## 拷贝文本到剪切板

`setCopyText()` `async` `支持版本：V1.0.1`

原 `execCommand` 方式的拷贝被浏览器逐步废弃，现在使用的了新的 `writeText` 方式

### 参数说明

| 参数   | 类型  | 可选值 | 默认值 | 说明     |
|------|-----|-----|-----|--------|
| text | -   | -   | -   | 要拷贝的内容 |

### code示例

```javascript
const { setCopyText } = utilsText()

setCopyText('要拷贝的内容').then(() => {
    console.log('拷贝成功')
}).catch(() => {
    console.log('拷贝失败')
});
```


## 取剪切板文本

`getCopyText()` `async` `支持版本：V1.0.1`

### 返回数据

| 参数   | 类型  | 可选值 | 默认值 | 说明       |
|------|-----|-----|-----|----------|
| text | -   | -   | -   | 当前剪切板的内容 |

### code示例

```javascript
const { getCopyText } = utilsText()

getCopyText().then((text) => {
    console.log(text)
}).catch(() => {
    console.log('取剪切板文本失败')
});
```


## 数字格式化

`numberFormat()` `支持版本：V0.0.3`

### 参数说明

大于 1千，显示 `K` 。 大于 1万，显示 `W`

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| num | -   | -   | -   | 内容  |

### 返回内容

| 类型  | 说明      |
|-----|---------|
| -   | 格式化后的内容 |

### code示例

```javascript
const { numberFormat } = utilsText()

numberFormat(1000) // 1K
```


## 金额处理

`priceFormat()` `支持版本：V0.0.3`

### 参数说明

保留几位小数，不四舍五入(关于金额数值的处理用这个方法,以防金额计算出错)

| 参数      | 类型  | 可选值 | 默认值 | 说明     |
|---------|-----|-----|-----|--------|
| price   | -   | -   | -   | 金额     |
| decimal | -   | -   | 2   | 保留小数位数 |

### 返回内容

| 类型  | 说明      |
|-----|---------|
| -   | 格式化后的内容 |

### code示例

```javascript
const { priceFormat } = utilsText()

priceFormat(12.3456, 2)
```


## 输入框插入内容

`setPosInsert()` `支持版本：V1.0.1`

在输入框的光标位置插入内容，取光标位置，参考文章 [取输入框的光标所在位置](/docs/article/text.html#%E5%8F%96%E8%BE%93%E5%85%A5%E6%A1%86%E7%9A%84%E5%85%89%E6%A0%87%E6%89%80%E5%9C%A8%E4%BD%8D%E7%BD%AE)

### 参数说明

| 参数       | 类型  | 可选值 | 默认值 | 说明     |
|----------|-----|-----|-----|--------|
| startPos | -   | -   | -   | 开始位置   |
| endPos   | -   | -   | -   | 结束位置   |
| value    | -   | -   | -   | 输入内容   |
| value2   | -   | -   | -   | 要插入的内容 |


### 返回内容

| 类型  | 说明    |
|-----|-------|
| -   | 处理后内容 |

### code示例

```javascript
const { setPosInsert } = utilsText()

setPosInsert(0, 0, '123','插入') // 插入123
```

## 设置光标位置

`setPosRange()` `支持版本：V1.0.1`

设置输入框光标位置

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明    |
|-----|-----|-----|-----|-------|
| id  | -   | -   | -   | 输入框ID |
| pos | -   | -   | -   | 光标位置  |

### code示例

```javascript
const { setPosRange } = utilsText()

setPosRange('id', 0)
```

