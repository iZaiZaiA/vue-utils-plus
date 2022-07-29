# `isImageDom` 是否为图片节点

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
    <img src="xxxxx.png" ref="idRef" alt="">元素</img>
</template>

<script setup>
    import {ref, onMounted} from 'vue'

    import { isType } from "vue-utils-plus"
    const { isImageDom } = isType()

    const idRef = ref(null)

    onMounted(() => {
        console.log(isImageDom(idRef.value))
    })
</script>
```
