# `ArrToOneObj` 数组转对象

`支持版本：V0.0.6`


## 参数说明 {#parameter}

| 参数       | 类型  | 可选值 | 默认值      | 说明    |
|----------|-----|-----|----------|-------|
| arr      | -   | -   | -        | 数组数据  |
| keyName  | -   | -   | -        | 对象键值名 |
| objName  | -   | -   | {}       | 对象变量  |
| arrName  | -   | -   | []       | 数组变量  |
| children | -   | -   | children | 子级字段名 |


## 返回内容 {#return}

| 参数名     | 说明               |
|---------|------------------|
| objName | 转换后的对象           |
| arrName | 只有 keyName 的一维数组 |


## code示例 {#code}

```javascript
import { utilsArray } from "vue-utils-plus"
const { ArrToOneObj } = utilsArray()

let testData = [
    {id: 1 , code: 'aa', children: [{id: 3, code: 'cc'}]},
    {id: 2, code: 'bb'}
]

const getTestData = async () => {
    let aaa = {}, bbb = []
    await ArrToOneObj(testData, 'code', aaa, bbb)
    console.log(aaa)  //见下文
    console.log(bbb) // ['aa','bb','cc']
}

getTestData()

// aaa 拿到的示例，意思就是不管多少个子级，都会转为一个对象集，但要注意，keyName 的值要是唯一的，否则就会被覆盖掉
let aaa = {
    aa: {id: 1, code: 'aa'},
    bb: {id: 2, code: 'bb'},
    cc: {id: 3, code: 'cc'},
}

```
