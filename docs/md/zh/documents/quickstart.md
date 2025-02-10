# 快速开始

## 安装

### 前置准备

-   [Vue.js](https://cn.vuejs.org/) V3.5 及以上版本
-   [Ant-design-vue](https://www.antdv.com/docs/vue/introduce-cn) V4.x

::: code-group

```sh [npm]
$ npm add --save antd-vue-dbthor
```

```sh [pnpm]
$ pnpm add antd-vue-dbthor
```

```sh [yarn]
$ yarn add antd-vue-dbthor
```

:::

## 使用

### 全局注册

::: code-group

```ts [main.ts]
import antdVueDbthor from 'antd-vue-dbthor'
import { createApp } from 'vue'
import App from 'app.vue'

const app = createApp(App)
app.use(antdVueDbthor)

app.mount('#app')
```

```vue [App.vue]
<template>
    <div id="app">
        <db-table></db-table>
    </div>
</template>
```

:::

### 按需引入

::: code-group

```ts [main.ts]
import antdVueDbthor from 'antd-vue-dbthor'
import { createApp } from 'vue'
import App from 'app.vue'

const app = createApp(App)
app.mount('#app')
```

```vue [App.vue]
<template>
    <div id="app">
        <Table></Table>
    </div>
</template>

<script setup lang="ts">
import { Table } from 'antd-vue-dbthor'
</script>
```

:::
