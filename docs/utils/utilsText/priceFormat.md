# `priceFormat` 金额处理

`支持版本：V0.0.3`

保留几位小数，不四舍五入(关于金额数值的处理用这个方法,以防金额计算出错)

## 参数说明 {#parameter}

| 参数      | 类型  | 可选值 | 默认值 | 说明     |
|---------|-----|-----|-----|--------|
| price   | -   | -   | -   | 金额     |
| decimal | -   | -   | 2   | 保留小数位数 |


## 返回内容 {#return}

| 类型  | 说明      |
|-----|---------|
| -   | 格式化后的内容 |


## code示例 {#code}

```javascript
import { utilsText } from "vue-utils-plus"
const { priceFormat } = utilsText()

console.log(priceFormat(12.3456, 2))
```
