# `isElement` 是否为元素

`支持版本：V0.0.2`

## 参数说明 {#parameter}

| 参数  | 类型  | 可选值 | 默认值 | 说明    |
|-----|-----|-----|-----|-------|
| val | -   | -   | -   | 判断的内容 |

## 返回内容 {#return}

| 类型      | 说明                       |
|---------|--------------------------|
| Boolean | 是就返回 `true`，否则返回 `false` |

## code示例 {#code}

```html
<template>
    <div ref="idRef">元素</div>
</template>

<script setup>
    import {ref, onMounted} from 'vue'

    import { isType } from "vue-utils-plus"
    const { isElement } = isType()

    const idRef = ref(null)

    onMounted(() => {
        console.log(isElement(idRef.value))
    })
</script>
```
