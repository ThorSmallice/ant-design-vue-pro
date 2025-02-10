# 全局配置

> antd-vue-dbthor 提供组件全局配置,在各 component Props 表中 global 标"\*"的属性表示支持全局更改,需要注意的是这里的全局配置并不支持响应式,但是在组件调用时都可以进行更改,建议仅在项目初始化时设置。

> [!Info]
> 此处的全局配置仅对扩展的功能生效,并不影响 ant-design-vue ConfigProvider 控制的配置

## 项目初始化时修改

::: code-group

```ts [main.ts]
import antdVueDbthor from 'antd-vue-dbthor'
import { createApp } from 'vue'
import App from 'app.vue'
import { setConfig } from 'config.ts'

const app = createApp(App)
setConfig()
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

```ts [config.ts]
import { TableConfig } from 'antd-vue-dbthor'

export const setConfig = () => {
    TableConfig.full = true
    ...修改其他属性
}
```

:::

## 组件调用时修改

> 非必要不推荐

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
import { Table, TableConfig } from 'antd-vue-dbthor'
TableConfig.full = true
</script>
```

:::

## 默认值

::: code-group

<<< @/../../src/config/index.tsx

<<< @/../../src/config/table.tsx

:::
