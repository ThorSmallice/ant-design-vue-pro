---
---

# Table

> 基于 ant-design-vue Table 封装，内置 CRUD、表单搜索、表头排序、数据导入导出等功能

## 基础示例

<div style="height:500px;overflow:hidden;">
    <Base></Base>
</div>

::: details Code
<<< @../../examples/table/base.vue
:::

<!-- <Table></Table> -->

<Modal v-model:open="open" :footer="null" width="80%" :bodyStyle="{height:'100vh'}" title="基础示例">
    <!-- <Table :style="{width:'100%'}"></Table> -->
</Modal>
<Button :icon="h(FullscreenOutlined)" type="link" title="展开" @click="click"></Button>

::: details Code
<<< @../../examples/table/index.vue
:::

<script lang="ts" setup>
import { ref,h } from 'vue' 
import Base from '@docs/examples/table/base.vue';
import Table from '@examples/table/index.vue';
import {Modal,Button} from 'ant-design-vue';
import { FullscreenOutlined } from '@ant-design/icons-vue';

const open = ref(false)
const click = () => {
    open.value = true
}

</script>

<style module>

</style>
