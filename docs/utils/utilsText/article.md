# 系统内置记录

一些 js 内置的 数组操作的方法函数记录文章。


## 是否包含 {#includes}

`includes() ` 返回布尔值，表示是否找到了参数字符串。

```javascript
let str = 'Hello world!';
str.includes('o')  // true
```

## 是否在头部 {#startsWith}

`startsWith()` 返回布尔值，表示参数字符串是否在原字符串的头部。

```javascript
let str = 'Hello world!';
str.startsWith('Hello') // true
```

## 是否在尾部 {#endsWith}

`endsWith()` 返回布尔值，表示参数字符串是否在原字符串的尾部。

```javascript
let str = 'Hello world!';
str.endsWith('!') // true
```

## 字符串重复 {#repeat}

`repeat()`  返回一个新字符串，表示将原字符串重复 `n` 次。

```javascript
let str  = 'hello'
str.repeat(2) // "hellohello"
```


## 头部补全 {#padStart}

`padStart() ` 字符串不够指定长度，将头部补全

```javascript
let str  = 'hello'
str.padStart(9, 'vue-') // 'vue-hello'

//处理日期时间格式时，比较好用
let str  = '2'
str.padStart(2, '0') // '02'
```

## 尾部补全 {#padEnd}

`padEnd()` 字符串不够指定长度，将尾部补全。

```javascript
let str  = '2'
str.padEnd(2, '0') // '20'
```

## 消除头部空格 {#trimStart}

`trimStart()` 消除字符串头部的空格(返回的都是新字符串，不会修改原始字符串)

```javascript
const str = '  hello';
str.trimStart() // "hello"
```

## 消除尾部空格 {#trimEnd}

`trimEnd()` 消除尾部的空格 (返回的都是新字符串，不会修改原始字符串)

```javascript
const str = 'hello  ';
str.trimEnd() // "hello"
```

## 替换所有匹配 {#replaceAll}

`matchAll()` 返回一个正则表达式在当前字符串的所有匹配
`replaceAll()` 可以一次性替换所有匹配。

```javascript
const str = 'aabbcc';
str.replaceAll('b', '_') // 'aa__cc'
```

## 索引 {#at}

`at()` 接受一个整数作为参数，返回参数指定位置的字符，支持负索引

```javascript
const str = 'hello';
str.at(1) // "e"
```
