# 指南

## 这是什么？

基于vue3的 非常简单的常用方法函数库，我自用的，如果你是大佬，可以关闭了。

### 不是 TypeScript

因为我不会 TypeScript，也不想学 TS，所以，它不是用 TS 开发的。JavaScript 万岁！！

### 不支持 Vue2

我也不知道支不支持Vue2，但有些方法函数，肯定不支持，比如，跟渲染相关的，因为采用的是Vue3的写法

### 没有 CDN

没有CDN，免费的，懒得弄，收费的，没钱弄，将就玩一下就行了，咱又不是知名大库

### 没有 性能

性能？什么性能？按需加载？什么按需加载？内存溢出？什么内存溢出？我不懂~~

### 别讲什么什么现成库

那些现成的库，非常好，但并不影响，我要自己做一个，我自己的常用方法函数库。


## 立即开始

简单说说，怎么用这个东西

### 第一步: 安装

在项目根目录，打开终端，复制粘贴，回车，一气呵成。

```sh
yarn add vue-utils-plus -D

# or

npm i vue-utils-plus -D save
```

### 第二步: 引用

在需要使用的地方，如 `App.vue`

```javascript
import { isType } from "vue-utils-plus"
const { isObjNull } = isType()

let obj = {}

console.log(isObjNull(obj))
```

如果你觉得这种方式，比较麻烦，你也可以直接用函数，不过，这种方式，在使用 `本地缓存` 模块时，暂时无法设置 `key前缀`。

`此模式，只支持 >= V1.0.0 的版本`

```javascript
import { isObjNull } from "vue-utils-plus"

let obj = {}

console.log(isObjNull(obj))
```

就是这么简单。
