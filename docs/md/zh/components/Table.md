---
---

# Table

## 基础示例

<Table></Table>

<Modal v-model:open="open" :footer="null" width="80%" :bodyStyle="{height:'100vh'}" title="基础示例">
    <Table :style="{width:'100%'}"></Table>
</Modal>
<Button :icon="h(FullscreenOutlined)" type="link" title="展开" @click="click"></Button>

::: details Code
<<< @../../examples/table/index.vue
:::

<script lang="ts" setup>
import { ref,h } from 'vue' 
import Table from '@examples/table/index.vue'
import {Modal,Button} from 'ant-design-vue'
import { FullscreenOutlined } from '@ant-design/icons-vue';

const open = ref(false)
const click = () => {
    open.value = true
}

</script>

<style module>

</style>
