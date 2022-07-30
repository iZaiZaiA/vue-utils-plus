# `setStoreData` 保存缓存

`支持版本：V0.0.3`


## 参数说明 {#parameter}

| 参数    | 类型  | 可选值 | 默认值 | 说明  |
|-------|-----|-----|-----|-----|
| val   | -   | -   | -   | 键值  |
| value | -   | -   | -   | 内容  |


## code示例 {#code}

```javascript
import { utilsStore } from "vue-utils-plus"
const { setStoreData } = utilsStore('key的前缀')

console.log(setStoreData('vue'))
```
