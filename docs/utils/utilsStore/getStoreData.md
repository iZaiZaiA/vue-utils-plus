# `getStoreData` 获取缓存

`支持版本：V0.0.3`


## 参数说明 {#parameter}

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| key | -   | -   | -   | 字段名 |


## 返回内容 {#return}

| 类型  | 说明      |
|-----|---------|
| -   | 返回相关的数据 |


## code示例 {#code}

```javascript
import { utilsStore } from "vue-utils-plus"
const { getStoreData } = utilsStore('key的前缀')

console.log(getStoreData('vue'))
```
