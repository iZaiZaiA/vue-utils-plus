# `hasKey` 判断一个对象是否存在key

`支持版本：V0.0.2`


## 参数说明 {#parameter}

如果传入第二个参数key，则是判断这个obj对象是否存在key这个属性

如果没有传入key这个参数，则判断obj对象是否有键值对

| 参数  | 类型  | 可选值 | 默认值 | 说明      |
|-----|-----|-----|-----|---------|
| obj | -   | -   | -   | 欲拷贝的数据  |
| key | -   | -   | -   | 是否存在key |


## code示例 {#code}

```javascript
import { utilsObject } from "vue-utils-plus"
const { hasKey } = utilsObject()

let obj = {id: 11, name: 22}

console.log(hasKey(obj,'id'))
```
