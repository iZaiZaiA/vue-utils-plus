# `getRandomFrom` 生成随机 范围随机数

`支持版本：V0.0.3`


## 参数说明 {#parameter}

生成起始数字和结束数字之间的一个随机数

| 参数    | 类型  | 可选值 | 默认值 | 说明   |
|-------|-----|-----|-----|------|
| upper | -   | -   | -   | 起始数字 |
| lower | -   | -   | -   | 结束数字 |


## 返回内容 {#return}

| 类型  | 说明       |
|-----|----------|
| -   | 返回生成后的数据 |


## code示例 {#code}

```javascript
import { utilsRandom } from "vue-utils-plus"
const { getRandomFrom } = utilsRandom()

console.log(getRandomFrom(1,50))
```
