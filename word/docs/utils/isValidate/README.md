# 内容验证

各种验证的方法

```javascript
import { isValidate } from "vue-utils-plus"
```


## 是否存在大小写字母

`isAlphabets()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| val | -   | -   | -   | 内容  |

### 返回内容

| 类型      | 说明                        |
|---------|---------------------------|
| Boolean | 存在就返回 `true`，否则返回 `false` |

### code示例

```javascript
const { isAlphabets } = isValidate()

isAlphabets('aBc1')
```


## 验证邮箱地址

`isEmail()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| val | -   | -   | -   | 内容  |

### 返回内容

| 类型      | 说明                        |
|---------|---------------------------|
| Boolean | 通过就返回 `true`，否则返回 `false` |

### code示例

```javascript
const { isEmail } = isValidate()

isEmail('806606688@qq.com')
```


## 验证身份证号码

`isIdCard()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| val | -   | -   | -   | 内容  |

### 返回内容

| 类型      | 说明                        |
|---------|---------------------------|
| Boolean | 通过就返回 `true`，否则返回 `false` |

### code示例

```javascript
const { isIdCard } = isValidate()

isIdCard('身份证号码')
```


## 小写字母

`isLowerCase()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| val | -   | -   | -   | 内容  |

### 返回内容

| 类型      | 说明                        |
|---------|---------------------------|
| Boolean | 存在就返回 `true`，否则返回 `false` |

### code示例

```javascript
const { isLowerCase } = isValidate()

isLowerCase('aaaa')
```


## 验证手机号码

`isMobile()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| val | -   | -   | -   | 内容  |

### 返回内容

| 类型      | 说明                  |
|---------|---------------------|
| Boolean | 返回 `true` 或 `false` |

### code示例

```javascript
const { isMobile } = isValidate()

isMobile('手机号码')
```


## 验证名称是否正确

`isName()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| val | -   | -   | -   | 内容  |

### 返回内容

| 类型      | 说明                  |
|---------|---------------------|
| Boolean | 返回 `true` 或 `false` |

### code示例

```javascript
const { isName } = isValidate()

isName('iZaiZaiA')
```


## 验证是否为整数

`isNum()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| val | -   | -   | -   | 内容  |

### 返回内容

| 类型      | 说明                  |
|---------|---------------------|
| Boolean | 返回 `true` 或 `false` |

### code示例

```javascript
const { isNum } = isValidate()

isNum(10.02)
```

# 验证是否为小数

`isNumord()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| val | -   | -   | -   | 内容  |

### 返回内容

| 类型      | 说明                  |
|---------|---------------------|
| Boolean | 返回 `true` 或 `false` |

### code示例

```javascript
const { isNumord } = isValidate()

isNumord(10)
```


## 验证电话号码

`isPhone()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| val | -   | -   | -   | 内容  |

### 返回内容

| 类型      | 说明                  |
|---------|---------------------|
| Boolean | 返回 `true` 或 `false` |

### code示例

```javascript
const { isPhone } = isValidate()

isPhone('手机号码')
```


## 验证手机号码是否正确

`isPhoneVal()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| val | -   | -   | -   | 内容  |

### 返回内容

| 类型      | 说明                  |
|---------|---------------------|
| Boolean | 返回 `true` 或 `false` |

### code示例

```javascript
const { isPhoneVal } = isValidate()

isPhoneVal('手机号码')
```


## 验证大写字母

`isUpperCase()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| val | -   | -   | -   | 内容  |

### 返回内容

| 类型      | 说明                  |
|---------|---------------------|
| Boolean | 返回 `true` 或 `false` |

### code示例

```javascript
const { isUpperCase } = isValidate()

isUpperCase('BBBBAAA')
```


## 验证合法Url

`isUrlVal()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| val | -   | -   | -   | 内容  |

### 返回内容

| 类型      | 说明                  |
|---------|---------------------|
| Boolean | 返回 `true` 或 `false` |

### code示例

```javascript
const { isUrlVal } = isValidate()

isUrlVal('网址')
```


## 判断是否为空

`isValidateNull()` `支持版本：V0.0.2`

### 参数说明

| 参数  | 类型  | 可选值 | 默认值 | 说明  |
|-----|-----|-----|-----|-----|
| val | -   | -   | -   | 内容  |

### 返回内容

| 类型      | 说明                  |
|---------|---------------------|
| Boolean | 返回 `true` 或 `false` |

### code示例

```javascript
const { isValidateNull } = isValidate()

isValidateNull({})
```


## 饿了么UI表单验证

`formValidate()` `支持版本：V0.0.7`

### 参数说明

| 参数      | 类型  | 可选值 | 默认值 | 说明  |
|---------|-----|-----|-----|-----|
| formRef | -   | -   | -   | ref |

### 返回内容

| 类型      | 说明                  |
|---------|---------------------|
| Boolean | 返回 `true` 或 `false` |

### code示例

```javascript
const { formValidate } = isValidate()

const formRef = ref(null)

const onSubmit = async () => {
    //注意，此方法是异步的。
   const res = await formValidate(formRef.value)
    console.log(res) // true or false
}
```
