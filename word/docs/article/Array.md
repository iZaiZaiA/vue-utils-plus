# 系统内置记录

一些 js 内置的 数组操作的方法函数记录文章。


## 数组累和、累积、及异或运算

`reduce()`  方法对数组中的每个元素按序执行一个由您提供的 `reducer` 函数，每一次运行 `reducer` 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。

```javascript
//例：对数组元素进行累和运算
let arr = [1,2,3,4,5]
let res = arr.reduce((a, b) => a + b)
console.log(res);     // 15

//例：对数组元素进行累积计算
let arr = [1,2,3,4,5]
let res = arr.reduce((a, b) => a * b)
console.log(res);     // 120
```

## 数组统一操作

`map()`  方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。


```javascript
//例：对数组中所有元素进行*2操作
let arr = [1,2,3,4,5]
arr = arr.map(item => item * 2)
console.log(arr);   //[ 2, 4, 6, 8, 10 ]
```

## 数组元素过滤

`filter()` 方法创建一个新数组，其包含通过所提供函数实现的测试的所有元素。

```javascript
//例：过滤数组中所有偶数
let arr = [1,4,6,3,7,9,3,6]
arr = arr.filter(item => item % 2 == 0)
console.log(arr);    //[ 4, 6, 6 ]

//例：取两个数组的交集部分
let arr1 = [1,4,6,3,7,9,3,6]
let arr2 = [3,7,9]
let res = arr1.filter(item => arr2.includes(item))
console.log(res);   //[ 3, 7, 9, 3 ]

//例：取两个数组的差
let arr1 = [1,4,6,3,7,9,3,6]
let arr2 = [3,7,9]
let res = arr1.filter(item => !arr2.includes(item))
console.log(res);   //[ 1, 4, 6, 6 ]

//数组过滤 false 类型值
const arr = [false, null, 0, "", undefined, NaN, 1, 2, 3]
const res = arr.filter(Boolean)
console.log(res);   //[1,2,3]
```

## 类似数组转换为数组

`Array.from()`  方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例

类似数组解释：拥有长度length 和若干索引index的对象

```javascript
let str  = 'abc'
str = Array.from(str)
console.log(str);   //[ 'a', 'b', 'c' ]
```

## 数组去重

`Set` 对象允许你存储任何类型的唯一值，无论是[原始值]或者是对象引用

```javascript
let arr = [2,2,2,2,4,4,4,2,2,3]
arr = new Set(arr)
console.log(arr);   //Set(3) { 2, 4, 3 }

//利用 ES6 中 Set 数据解构不重复的特性。
const arr = [1,2,3,3,2,1]
const res = [...new Set(arr)]
console.log(res);   //[1,2,3]
```

## 对象转换为数组

`Object.entries()` 方法返回一个给定对象自身可枚举属性的键值对数组

```javascript
let obj = {a: 1, b: 2, c: 3}
obj = Object.entries(obj)
console.log(obj);  //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
```

## 对象的键值对排序

通过`Object.entries()` 将对象转换为键值对数组，对键值对数组中的值进行排序来达到目的

```javascript
let obj = {a: 6, b: 4, c: 3, d: 5, g: 8}
obj = Object.entries(obj)       //[ [ 'a', 6 ], [ 'b', 4 ], [ 'c', 3 ], [ 'd', 5 ], [ 'g', 8 ] ]
obj.sort((a, b) => b[1] - a[1]) //[ [ 'g', 8 ], [ 'a', 6 ], [ 'd', 5 ], [ 'b', 4 ], [ 'c', 3 ] ]
console.log(obj[0][1]);         //  8
```

## 二维数组是否满足条件

```javascript
let rows = [{a: 1, b: 2}, {a: 3, b: 2}, {a: 3, b: 2}]
const result = rows.every(({b})=> {
    return b === 2
})
console.log(result) // true
```


## 二维数组拼接字段

```javascript
let rows = [{id: 1, b: 2}, {id: 2, b: 2}, {id: 3, b: 2}]
const result = rows.map((obj) => {
    return obj.id;
}).join(",")
console.log(result) // 1,2,3
```
