# 本地缓存

各种本地缓存操作的方法

```javascript
import { utilsStore } from "vue-utils-plus"
```

## 保存缓存

`setStoreData()` `支持版本：V0.0.3`

### 参数说明

| 参数      | 类型  | 可选值 | 默认值   | 说明        | 支持版本  |
|---------|-----|-----|-------|-----------|-------|
| key     | -   | -   | -     | 键值        | -     |
| value   | -   | -   | -     | 内容        | -     |
| session | -   | -   | false | session存储 | 1.0.3 |

`session` 为 `true` 时，将使用 `sessionStorage`， 否则使用 `localStorage`

### code示例

```javascript
const { setStoreData } = utilsStore('key的前缀')

setStoreData('key','value')
```


## 获取缓存

`getStoreData()` `支持版本：V0.0.3`

### 参数说明

| 参数      | 类型  | 可选值 | 默认值   | 说明        | 支持版本  |
|---------|-----|-----|-------|-----------|-------|
| key     | -   | -   | -     | 键值        | -     |
| debug   | -   | -   | false | 详情模式      | 1.0.3 |
| session | -   | -   | false | session存储 | 1.0.3 |

`session` 为 `true` 时，将使用 `sessionStorage`， 否则使用 `localStorage`

`debug` 为 `true` 时，将返回一个对像，里面有 `dataType`、 `content` 、`session`、 `datetime`

### 返回内容

| 类型  | 说明      |
|-----|---------|
| -   | 返回相关的数据 |

### code示例

```javascript
const { getStoreData } = utilsStore('key的前缀')

getStoreData('key')
```


## 删除缓存

`delStoreData()` `支持版本：V0.0.3`

### 参数说明

| 参数      | 类型  | 可选值 | 默认值   | 说明        | 支持版本  |
|---------|-----|-----|-------|-----------|-------|
| key     | -   | -   | -     | 键值        | -     |
| session | -   | -   | false | session存储 | 1.0.3 |

### code示例

```javascript
const { delStoreData } = utilsStore('key的前缀')

delStoreData('key')
```

## 清空全部缓存

`clearStoreAll()` `支持版本：V0.0.3`

### code示例

```javascript
const { clearStoreAll } = utilsStore()

clearStoreAll()
```


## 获取全部缓存

`getAllStore()` `支持版本：V0.0.3`

### 返回内容

| 类型  | 说明       |
|-----|----------|
| -   | 返回 相关的数据 |

### code示例

```javascript
const { getAllStore } = utilsStore('key的前缀')

getAllStore()
```
