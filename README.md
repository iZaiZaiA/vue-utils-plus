# vue-utils-plus

简单说说，怎么用这个东西

## 第一步: 安装

在项目根目录，打开终端，复制粘贴，回车，一气呵成。

```sh
yarn add vue-utils-plus -D

# or

npm i vue-utils-plus -D save
```

## 第二步: 引用

在需要使用的地方，如 `App.vue`

```javascript
import { isType } from "vue-utils-plus"
const { isObjNull } = isType()

let obj = {}

console.log(isObjNull(obj))
```

就是这么简单。
