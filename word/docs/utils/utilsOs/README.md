# 系统操作

一些涉及到系统或浏览器的方法函数

```javascript
import { utilsOs } from "vue-utils-plus"
```

## 获取系统当前主题类型

`useOsTheme()` `支持版本：V1.0.4`

### 返回内容

| 类型  | 说明                  |
|-----|---------------------|
| -   | 返回 `light` 或 `dark` |


### code示例

```javascript
const { useOsTheme } = utilsOs()

useOsTheme()
```
