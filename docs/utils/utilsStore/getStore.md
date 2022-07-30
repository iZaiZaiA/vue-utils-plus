# `getStore` 获取localStorage

`支持版本：V0.0.3`


## 参数说明 {#parameter}

| 参数     | 类型  | 可选值 | 默认值 | 说明  |
|--------|-----|-----|-----|-----|
| params | -   | -   | {}  | 内容  |

## params说明 {#params}

| 参数      | 类型  | 可选值 | 默认值 | 说明  |
|---------|-----|-----|-----|-----|
| name    | -   | -   | -   | 键值  |



## 返回内容 {#return}

| 类型  | 说明      |
|-----|---------|
| -   | 返回相关的数据 |


## code示例 {#code}

```javascript
import { utilsStore } from "vue-utils-plus"
const { getStore } = utilsStore('key的前缀')

console.log(getStore({name: 'vue'}))
```
