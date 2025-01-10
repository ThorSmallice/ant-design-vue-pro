---
---

# Table

> 基于 ant-design-vue Table 封装，内置 CRUD、表单搜索、表头排序、数据导入导出等功能

## 基础示例

<div style="height:500px; overflow:hidden;">
<Table></Table>
</div>

## API

### Table

| 参数            | 说明                                                                        |                  类型                   | 默认值 | 版本 | global |
| :-------------- | :-------------------------------------------------------------------------- | :-------------------------------------: | :----: | :--: | :----: |
| full            | 表格是否撑满容器                                                            |                 boolean                 | false  |  -   |   \*   |
| scroll          | 表格是否可滚动，也可以指定滚动区域的宽、高 [配置项](#scroll)                |                 object                  |   -    |  -   |   \*   |
| autoSizeConfig  | 表格自动计算高度函数防抖配置 [配置项](#autosizeconfig)                      |                 object                  |   -    |  -   |   \*   |
| minScollHeight  | 指定自动计算表格 scroll.y 值的最小高度, scroll.y 指定为 number 时该值不生效 |                 number                  |   50   |  -   |   \*   |
| autoRequest     | 指定表格自动请求列表数据配置 [配置项](#autorequest)                         |             false / object              |   -    |  -   |   \*   |
| apis            | 提供给表格内置请求的 api [配置项](#apis)                                    |                 object                  |   -    |  -   |   -    |
| fieldsNames     | 配置表格调用 api 后从返回结果中拿取数据的字段 [配置项](#fieldsnames)        |                 object                  |   -    |  -   |   \*   |
| tableTextConfig | 配置表格内置提示的文本 [配置项](#tabletextconfig)                           |                 object                  |   -    |  -   |   \*   |
| params          | 请求时额外添加的参数                                                        |                 object                  |   -    |  -   |   -    |
| columns         | 表格列配置                                                                  | [TableColumnProps](#tablecolumnprops)[] |   -    |  -   |   -    |

### TableColumnProps

| 参数         | 说明                                                                           |                                                      类型                                                      | 默认值 | 版本 | global |
| :----------- | :----------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------: | :----: | :--: | :----: |
| ...          | 继承 antd-vue [ColumnProps](https://www.antdv.com/components/table-cn#column)  |                                                       -                                                        |   -    |  -   |   -    |
| hidden       | 隐藏列                                                                         |                                                    boolean                                                     |   -    |  -   |   -    |
| type         | 内容类型 可选 序号/操作/时间/数字                                              |                                    'index' / 'control' / 'date' / 'number'                                     |   -    |  -   |   -    |
| nowrap       | 列头不换行                                                                     |                                                    boolean                                                     |   -    |  -   |   -    |
| emptyText    | 值为空时显示的内容                                                             |                                                 VNode / string                                                 |   -    |  -   |   -    |
| timeFormat   | type 为'date'时,显示的时间[格式](https://day.js.org/docs/zh-CN/display/format) |                                                     string                                                     |   -    |  -   |   -    |
| numberFormat | type 为'number'时,显示的数字格式                                               | [Numeral.format](http://numeraljs.com/#format) / (val:Numeral,local: string/number) => string / number / VNode |   -    |  -   |   -    |

### autoRequest

::: tip 注意

-   autoRequest 配置项同步 vue watch 的 Options,详见[Vue-Watch](https://cn.vuejs.org/api/reactivity-core.html#watch);
-   默认情况下 Table 将监听 queryFormParams、params、page、pageSize 最终组成的参数 resParams 去调用 apis.list, 虽然内部只 watch 了 resParams,但由于依赖问题,apis.list 在发生变化时也会触发数据更新
-   autoRequest 为 false 时将不创建 watch, 意味着将不自动发起请求
-   autoRequest 配置只有初始化时生效,不建议动态修改

:::

| 参数                | 说明                                               |  类型   | 默认值 | 版本 | global |
| :------------------ | :------------------------------------------------- | :-----: | :----: | :--: | :----: |
| immediate           | 立即执行                                           | boolean |  true  |  -   |   \*   |
| deep                | 强制深度遍历 resParams，以便在深层级变更时触发回调 | boolean |   -    |  -   |   \*   |
| flush               | 调整回调函数的刷新时机                             | boolean |   -    |  -   |   \*   |
| onTrack / onTrigger | 调试侦听器的依赖                                   | boolean |   -    |  -   |   \*   |
| once                | 请求只会运行一次，首次运行后自动停止。             | boolean |   -    |  -   |   \*   |

### apis

| 参数     | 说明                                                       |                                类型                                 | 默认值 | 版本 | global |
| :------- | :--------------------------------------------------------- | :-----------------------------------------------------------------: | :----: | :--: | :----: |
| list     | 获取数据列表                                               | (params?:any,config?:AxiosRequestConfig) => Promise\<AxioResponse\> |   -    |  -   |   -    |
| details  | 获取单行详情数据                                           |  (data?:any,config?:AxiosRequestConfig) => Promise\<AxioResponse\>  |   -    |  -   |   -    |
| create   | 新增数据                                                   |  (data?:any,config?:AxiosRequestConfig) => Promise\<AxioResponse\>  |   -    |  -   |   -    |
| update   | 更新数据                                                   |  (data?:any,config?:AxiosRequestConfig) => Promise\<AxioResponse\>  |   -    |  -   |   -    |
| delete   | 删除单行数据                                               | (params?:any,config?:AxiosRequestConfig) => Promise\<AxioResponse\> |   -    |  -   |   -    |
| export   | 导出数据, api 需设置 responseType: 'blob'                  | (params?:any,config?:AxiosRequestConfig) => Promise\<AxioResponse\> |   -    |  -   |   -    |
| import   | 导入数据, api 需设置 'content-type': 'multipart/form-data' |  (data?:any,config?:AxiosRequestConfig) => Promise\<AxioResponse\>  |   -    |  -   |   -    |
| template | 导出数据模板, api 需设置 responseType: 'blob'              | (params?:any,config?:AxiosRequestConfig) => Promise\<AxioResponse\> |   -    |  -   |   -    |

### fieldsNames

| 参数     | 说明                                             |       类型        |   默认值   | 版本 | global |
| :------- | :----------------------------------------------- | :---------------: | :--------: | :--: | :----: |
| page     | 页码 (调用 apis.list 时参数中的 page )           |      string       |   'page'   |  -   |   -    |
| pageSize | 每页条目数 (调用 apis.list 时参数中的 pageSize ) |      string       | 'pageSize' |  -   |   -    |
| total    | 调用 apis.list 后拿取数据总数的字段              | string / string[] |  'total'   |  -   |   -    |
| list     | 调用 apis.list 后拿取数据列表的字段              | string / string[] |   'list'   |  -   |   -    |
| details  | 调用 apis.details 后拿取数据的字段               | string / string[] |   'data'   |  -   |   -    |
| export   | 调用 apis.export 后拿取数据的字段                | string / string[] |   'data'   |  -   |   -    |
| template | 调用 apis.template 后拿取数据的字段              | string / string[] |   'data'   |  -   |   -    |

### scroll

| 参数                     | 说明                                                                                                                                        |              类型               |    默认值     | 版本 | global |
| :----------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ | :-----------------------------: | :-----------: | :--: | :----: |
| scrollToFirstRowOnChange | 当分页、排序、筛选变化后是否滚动到表格顶部                                                                                                  |             boolean             |     false     |  -   |   \*   |
| x                        | 设置横向滚动，也可用于指定滚动区域的宽，<br/>可以设置为像素值，百分比，true 和 'max-content'                                                | string / number / 'max-content' | 'max-content' |  -   |   \*   |
| y                        | 设置纵向滚动，也可用于指定滚动区域的高，可以设置为像素值。<br/>值为'auto'时将自动计算高度，<br/>注意 Table 的父容器需有高度或者为 flex 容器 |    string / number / 'auto'     |    'auto'     |  -   |   \*   |

### autoSizeConfig

| 参数         |                      说明                      |             类型              |    默认值    | 版本 | global |
| :----------- | :--------------------------------------------: | :---------------------------: | :----------: | :--: | :----: |
| wait         |                延迟执行的毫秒数                |            number             |     300      |  -   |   -    |
| options      |                  一个选项对象                  |            object             |      -       |  -   |   -    |
| -signal      |    AbortSignal 对象，用于取消防抖函数的执行    |          AbortSignal          |      -       |  -   |   -    |
| -edges       |        一个数组，指定函数应在何时被调用        | Array<'leading' \ 'trailing'> | ['trailing'] |  -   |   -    |
| ——'leading'  |     如果包含，函数将在第一次调用时立即执行     |               -               |      -       |  -   |   -    |
| ——'trailing' | 如果包含，函数将在距离上次调用 wait 毫秒后执行 |               -               |      -       |  -   |   -    |

### tableTextConfig

| 参数                     |       说明       |  类型  |     默认值      | 版本 | global |
| :----------------------- | :--------------: | :----: | :-------------: | :--: | :----: |
| modalTitle               | modal 框的 title | object |        -        |  -   |   \*   |
| -create                  |    新增 modal    | string |     '新增'      |  -   |   \*   |
| -update                  |    编辑 modal    | string |     '编辑'      |  -   |   \*   |
| -details                 |    详情 modal    | string |     '详情'      |  -   |   \*   |
| -create                  |    新增 modal    | string |     '新增'      |  -   |   \*   |
| message                  |  message 的内容  | object |        -        |  -   |   \*   |
| -createSuccess           |        -         | string |   '新增成功!'   |  -   |   \*   |
| -createError             |        -         | string |   '新增失败!'   |  -   |   \*   |
| -updateSuccess           |        -         | string |   '编辑成功!'   |  -   |   \*   |
| -updateError             |        -         | string |   '编辑失败!'   |  -   |   \*   |
| -deleteSuccess           |        -         | string |   '删除成功!'   |  -   |   \*   |
| -deleteError             |        -         | string |   '删除失败!'   |  -   |   \*   |
| -exportSuccess           |        -         | string |   '导出成功!'   |  -   |   \*   |
| -exportError             |        -         | string |   '导出失败!'   |  -   |   \*   |
| -importSuccess           |        -         | string |   '导入成功!'   |  -   |   \*   |
| -importError             |        -         | string |   '导入失败!'   |  -   |   \*   |
| -downloadTemplateSuccess |        -         | string | '模板下载成功!' |  -   |   \*   |
| -downloadTemplateError   |        -         | string | '模板下载失败!' |  -   |   \*   |

---

<script lang="ts" setup>
import { ref,h } from 'vue' 
import Base from '@docs/examples/table/base.vue';
import Test from '@docs/examples/table/test.vue';
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
