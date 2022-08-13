# 文本操作

各种文本操作的方法

```javascript
import { utilsText } from "vue-utils-plus"
```


## 拷贝复制文本

`copyText()` `支持版本：V0.0.2`

### 参数说明

将内容拷贝到剪切板

| 参数   | 类型  | 可选值 | 默认值 | 说明  |
|------|-----|-----|-----|-----|
| text | -   | -   | -   | 内容  |

### code示例

```javascript
const { copyText } = utilsText()

copyText('内容')
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
