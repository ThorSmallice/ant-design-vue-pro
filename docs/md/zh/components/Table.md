---
---

# Table

> 基于 ant-design-vue Table 封装，内置 CRUD、表单搜索、表头排序、数据导入导出等功能

## 基础示例

<div style="overflow:hidden;">
    <Base></Base>
</div>

::: details Code
<<< @../../examples/table/base.vue
:::

<!-- <Table></Table> -->

<Modal v-model:open="open" :footer="null" width="80%" :bodyStyle="{height:'100vh'}" title="基础示例">
    <Table :style="{width:'100%'}"></Table>
</Modal>
<Button :icon="h(FullscreenOutlined)" type="link" title="展开" @click="click"></Button>

::: details Code
<<< @../../examples/table/index.vue
:::

## API

### Table

|      参数      |                              说明                              |  类型   |              默认值              |     版本      |     glob      |
| :------------: | :------------------------------------------------------------: | :-----: | :------------------------------: | :-----------: | :-----------: |
|      full      |                        表格是否撑满容器                        | boolean |              false               |               |      \*       |
|     scroll     | 表格是否可滚动，也可以指定滚动区域的宽、高。 [配置项](#scroll) | object  | \{ x: "max-content",y: "auto" \} |               |      \*       |
| autoSizeConfig |       表格自动计算高度防抖配置 [配置项](#autoSizeConfig)       | object  |          :-----------:           | :-----------: | :-----------: |
| zebra stripes  |                            are neat                            |   $1    |

### scroll

|           参数           |                                             说明                                             |     类型      |    默认值     | 版本 | glob |
| :----------------------: | :------------------------------------------------------------------------------------------: | :-----------: | :-----------: | :--: | :--: |
| scrollToFirstRowOnChange |                          当分页、排序、筛选变化后是否滚动到表格顶部                          |    boolean    |     false     |  -   |  \*  |
|            x             | 设置横向滚动，也可用于指定滚动区域的宽，<br/>可以设置为像素值，百分比，true 和 'max-content' | string number | "max-content" |      |  \*  |
|            y             |                   设置纵向滚动，也可用于指定滚动区域的高，可以设置为像素值                   |               |               |  \*  |

### autoSizeConfig

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
