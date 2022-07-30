# `delStoreData` 删除缓存

`支持版本：V0.0.3`


## 参数说明 {#parameter}

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| key | -   | -   | -   | 字段名 |


## code示例 {#code}

```javascript
import { utilsStore } from "vue-utils-plus"
const { delStoreData } = utilsStore('key的前缀')

delStoreData('name')
```
