# `UUID` 生成UUID

`支持版本：V0.0.3`


## 返回内容 {#return}

| 类型  | 说明       |
|-----|----------|
| -   | 返回生成后的数据 |

返回类似这种：`79b084e1-8e33-49f2-a888-28a32f0860db` 的字符串

## code示例 {#code}

```javascript
import { utilsRandom } from "vue-utils-plus"
const { UUID } = utilsRandom()

console.log(UUID())
```
