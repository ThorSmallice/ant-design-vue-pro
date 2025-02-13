---
---

<script lang="ts" setup>
import { ref,h } from 'vue'   
import setAntdConfig from '@docs/config/antd-vue-dbthor'
setAntdConfig()
import Base from '@docs/examples/table/base.vue'; 
import Table from '@docs/examples/table/index.vue'; 

 
</script>

# Table 表格

> 基于 ant-design-vue Table 封装，内置 CRUD、表单搜索、表头排序、数据导入导出等功能

## 配置

::: code-group

<<< @/../config/antd-vue-dbthor.tsx [config.tsx]

<<< @/../apis/request.ts [axiosConfig.ts]

<<< @/../apis/user.ts [apis/user.ts]

:::

> 本页示例均基于以上配置编写

## 基本用法

<Base></Base>

::: details Code

<<< @/../examples/table/base.vue

:::

<!-- <Table></Table> -->

## Props

### Table

| 参数                            | 说明                                                                                          | 类型                                                                                          | 默认值                                                                                    | 版本 | global |
| :------------------------------ | :-------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------- | :--: | :----: |
| ...                             | 继承 antd-vue [TableProps](https://www.antdv.com/components/table-cn#api)                     | -                                                                                             | -                                                                                         |  -   |   -    |
| full                            | 表格是否撑满容器                                                                              | boolean                                                                                       | false                                                                                     |  -   |   \*   |
| scroll                          | 表格是否可滚动，也可以指定滚动区域的宽、高 [配置项](#scroll)                                  | object                                                                                        | -                                                                                         |  -   |   \*   |
| autoSizeConfig                  | 表格自动计算高度函数防抖配置 [配置项](#autosizeconfig)                                        | object                                                                                        | -                                                                                         |  -   |   \*   |
| minScollHeight                  | 指定自动计算表格 scroll.y 值的最小高度, scroll.y 指定为 number 时该值不生效                   | number                                                                                        | 50                                                                                        |  -   |   \*   |
| autoRequest                     | 指定表格自动请求列表数据配置 [配置项](#autorequest)                                           | false / object                                                                                | -                                                                                         |  -   |   \*   |
| apis                            | 提供给表格内置请求的 api [配置项](#apis)                                                      | object                                                                                        | -                                                                                         |  -   |   -    |
| fieldsNames                     | 配置表格调用 api 后从返回结果中拿取数据的字段 [配置项](#fieldsnames)                          | object                                                                                        | -                                                                                         |  -   |   \*   |
| tableTextConfig                 | 配置表格内置提示的文本 [配置项](#tabletextconfig)                                             | object                                                                                        | -                                                                                         |  -   |   \*   |
| params                          | 请求时额外添加的参数                                                                          | object                                                                                        | -                                                                                         |  -   |   -    |
| columns                         | 表格列配置                                                                                    | [TableColumnProps](#tablecolumnprops)[]                                                       | -                                                                                         |  -   |   -    |
| columnsTitleNoWrap              | 统一列头不换行                                                                                | boolean                                                                                       | true                                                                                      |  -   |   \*   |
| columnsAlign                    | 统一列对齐方式                                                                                | 'left' / 'center' / 'right'                                                                   | 'left'                                                                                    |  -   |   \*   |
| columnsSorter                   | 统一列排序配置, 除['index','control']列,其他列均内置了排序逻辑                                | [ColumnProps](https://www.antdv.com/components/table-cn#column)['sorter']                     | true                                                                                      |  -   |   \*   |
| columnsEllipsis                 | 统一列的 ellipsis 属性                                                                        | boolean                                                                                       | true                                                                                      |  -   |   \*   |
| columnsTimeFormat               | 当 column.type == 'date'时,处理时间显示的[格式](https://day.js.org/docs/zh-CN/display/format) | string                                                                                        | 'YYYY-MM-DD HH:mm:ss'                                                                     |  -   |   \*   |
| columnsEmptyText                | 统一列取值为空时显示的内容                                                                    | VNode / string                                                                                | '-'                                                                                       |  -   |   \*   |
| indexColumn                     | 开启序号列                                                                                    | boolean                                                                                       | true                                                                                      |  -   |   \*   |
| indexColumnWidth                | 序号列宽度                                                                                    | number                                                                                        | 80                                                                                        |  -   |   \*   |
| indexColumnProps                | 序号列 Props                                                                                  | [TableColumnProps](#tablecolumnprops)                                                         | -                                                                                         |  -   |   \*   |
| controlColumn                   | 开启操作列                                                                                    | boolean                                                                                       | true                                                                                      |  -   |   \*   |
| controlColumnWidth              | 操作列宽度                                                                                    | number                                                                                        | 220                                                                                       |  -   |   \*   |
| controlColumnWidthProps         | 操作列 Props                                                                                  | [TableColumnProps](#tablecolumnprops)                                                         | -                                                                                         |  -   |   \*   |
| controlColumnBtns               | 操作列按钮配置项                                                                              | [controlColumnBtns](#controlcolumnbtns)                                                       | -                                                                                         |  -   |   \*   |
| columnSettingBtn                | 列配置按钮                                                                                    | false / [OwnPopoverProps](#ownpopoverprops)                                                   | true                                                                                      |  -   |   \*   |
| ownPagin                        | 开启内置分页                                                                                  | boolean                                                                                       | true                                                                                      |  -   |   \*   |
| ownPaginProps                   | 内置分页器 Props                                                                              | [paginationProps](https://www.antdv.com/components/pagination-cn#api)                         | [object](#ownpaginprops)                                                                  |  -   |   \*   |
| queryForm                       | 显示筛选表单                                                                                  | boolean                                                                                       | true                                                                                      |  -   |   \*   |
| queryFormDefaultValues          | 筛选表单默认值                                                                                | object                                                                                        | -                                                                                         |  -   |   -    |
| queryFormProps                  | 筛选表单的 Props                                                                              | [FormProps](https://www.antdv.com/components/form-cn#api)                                     | -                                                                                         |  -   |   \*   |
| queryFormItems                  | 筛选表单项配置                                                                                | [TableQueryFormItemProps](#tablequeryformitemprops)[]                                         | -                                                                                         |  -   |   -    |
| queryFormRowProps               | 筛选表单行配置                                                                                | [RowProps](https://www.antdv.com/components/grid-cn#row)                                      | -                                                                                         |  -   |   \*   |
| queryFormColProps               | 筛选表单列配置                                                                                | [ColProps](https://www.antdv.com/components/grid-cn#col)                                      | -                                                                                         |  -   |   \*   |
| queryFormFlexProps              | 筛选表单外层 flex 容器配置                                                                    | [FlexProps](https://www.antdv.com/components/flex-cn#api)                                     | -                                                                                         |  -   |   \*   |
| queryFormSubmitBtn              | 筛选表单提交按钮                                                                              | boolean / (form: [TableQueryFormInstance](#tablequeryforminstance)) => VNode                  | -                                                                                         |  -   |   \*   |
| queryFormSubmitBtnProps         | 筛选表单提交按钮 的 Props                                                                     | false/[OwnBtnProps](#ownbtnprops)                                                             | -                                                                                         |  -   |   \*   |
| queryFormResetBtn               | 筛选表单重置按钮                                                                              | boolean / (form: [TableQueryFormInstance](#tablequeryforminstance)) => VNode                  | -                                                                                         |  -   |   \*   |
| queryFormResetBtnProps          | 筛选表单重置按钮 的 Props                                                                     | false/[OwnBtnProps](#ownbtnprops)                                                             | -                                                                                         |  -   |   \*   |
| queryFormControlFormItemProps   | 配置筛选表单放置操作按钮的 FormItem                                                           | [FormItemProps](https://www.antdv.com/components/form-cn#form-item)                           | -                                                                                         |  -   |   \*   |
| queryFormSubmitWithReset        | 筛选表单点击重置触发提交                                                                      | boolean                                                                                       | false                                                                                     |  -   |   \*   |
| queryFormTimeFormat             | 筛选表单 时间参数提交时的[格式](https://day.js.org/docs/zh-CN/display/format)                 | string                                                                                        | 'YYYY-MM-DD HH:mm:ss'                                                                     |  -   |   \*   |
| cuFormProps                     | 新增/编辑表单配置项                                                                           | [FormProps](https://www.antdv.com/components/form-cn#api)                                     | -                                                                                         |  -   |   \*   |
| cuFormRules                     | 新增/编辑表单 校验规则                                                                        | [RuleObject](https://www.antdv.com/components/form-cn#%E6%A0%A1%E9%AA%8C%E8%A7%84%E5%88%99)[] | -                                                                                         |  -   |   -    |
| cuFormDefaultValues             | 新增/编辑表单 默认值                                                                          | object                                                                                        | -                                                                                         |  -   |   -    |
| cuFormModalProps                | 新增/编辑表单 Modal 配置项                                                                    | [ModalProps](https://www.antdv.com/components/modal-cn#api)                                   | \{ <br/>&nbsp;&nbsp;&nbsp;width:'65%',<br/>&nbsp;&nbsp;&nbsp;destroyOnClose:true <br/> \} |  -   |   \*   |
| cuFormRowProps                  | 新增/编辑表单 Row 配置                                                                        | [RowProps](https://www.antdv.com/components/grid-cn#row)                                      | -                                                                                         |  -   |   \*   |
| cuFormColProps                  | 新增/编辑表单 Col 配置                                                                        | [ColProps](https://www.antdv.com/components/grid-cn#col)                                      | -                                                                                         |  -   |   \*   |
| cuFormBackFillByGetDetail       | 编辑表单回填内容通过 apis.details 获取，否则使用表中当前行数据                                | boolean                                                                                       | true                                                                                      |  -   |   \*   |
| detailModalProps                | 详情 Modal 配置项                                                                             | [ModalProps](https://www.antdv.com/components/modal-cn#api)                                   | -                                                                                         |  -   |   \*   |
| detailDescProps                 | 详情描述列表配置项                                                                            | [DescriptionsProps](https://www.antdv.com/components/descriptions-cn#descriptions-props)      | -                                                                                         |  -   |   \*   |
| detailDescItemProps             | 详情描述列表 Item 配置项                                                                      | [TableDescItemsProps](#tabledescitemsprops)                                                   | -                                                                                         |  -   |   \*   |
| detailDescItemEmptyText         | 详情描述项值为空值显示的内容                                                                  | VNode /string                                                                                 | '-'                                                                                       |  -   |   \*   |
| detailDescItemTimeFormat        | 详情描述项值为日期类型时显示的[格式](https://day.js.org/docs/zh-CN/display/format)            | string                                                                                        | 'YYYY-MM-DD HH:mm:ss'                                                                     |  -   |   \*   |
| detailBackFillByGetDetail       | 详情内容通过 apis.details 获取，否则使用表中当前行数据                                        | boolean                                                                                       | true                                                                                      |  -   |   \*   |
| ciesBtns                        | 显示内置表格操作按钮组                                                                        | boolean                                                                                       | true                                                                                      |  -   |   \*   |
| ciesBtnsInQueryForm             | 内置表格操作按钮组显示在筛选表单中                                                            | boolean                                                                                       | false                                                                                     |  -   |   \*   |
| createBtn                       | 新增按钮                                                                                      | false/[OwnBtnProps](#ownbtnprops)                                                             | -                                                                                         |  -   |   \*   |
| importBtn                       | 导入按钮                                                                                      | false/[OwnBtnProps](#ownbtnprops)                                                             | -                                                                                         |  -   |   \*   |
| importUploadProps               | 导入上传按钮的 props                                                                          | [UploadProps](https://www.antdv.com/components/upload-cn#api)                                 | -                                                                                         |  -   |   \*   |
| importFileParamsFormatter       | 导入文件参数处理函数                                                                          | (options: UploadRequestOption) =>Promise\<any\>                                               | -                                                                                         |  -   |   \*   |
| exportDropdown                  | 下拉导出按钮                                                                                  | false/[OwnDropProps](#owndropprops)                                                           | -                                                                                         |  -   |   \*   |
| exportAllBtn                    | 导出全部按钮                                                                                  | false/[OwnBtnProps](#ownbtnprops)                                                             | -                                                                                         |  -   |   \*   |
| exportBtnMode                   | 导出按钮模式 'dropdown'显示为下拉按钮，'all'时只显示导出全部按钮                              | 'dropdown' / 'all'                                                                            | 'dropdown'                                                                                |  -   |   \*   |
| exportCurrentPageBtn            | 导出当前页                                                                                    | false/[OwnBtnProps](#ownbtnprops)                                                             | -                                                                                         |  -   |   \*   |
| exportFileByParams              | 导出数据通过筛选表单参数                                                                      | boolean                                                                                       | false                                                                                     |  -   |   \*   |
| exportFileParamsFormatter       | 导出数据时的参数处理函数                                                                      | (vals?: any, type?: "currentPage" / "allPage") => Promise\<any\>                              | 'page'                                                                                    |  -   |   \*   |
| exportFileName                  | 导出数据的文件名称                                                                            | string                                                                                        | dayjs().valueOf()                                                                         |  -   |   -    |
| downloadTemplateBtn             | 下载模板按钮                                                                                  | false/[OwnBtnProps](#ownbtnprops)                                                             | -                                                                                         |  -   |   \*   |
| templateFileName                | 模板文件名                                                                                    | string                                                                                        | dayjs().valueOf()                                                                         |  -   |   -    |
| downloadTempalteParamsFormatter | 下载模板的参数处理函数                                                                        | ( params:object)=>Promise\<object\>                                                           | -                                                                                         |  -   |   \*   |
| requestParamsFormatter          | 列表数据请求参数最终处理函数                                                                  | ( params:object)=>Promise\<object\>                                                           | -                                                                                         |  -   |   \*   |
| value(v-model)                  | 表格双向绑定的数据,内部请求的时也能通过该属性在外部获取操作,用于可编辑表格                    | Ref<DataItem[]>                                                                               | -                                                                                         |  -   |   -    |

### TableColumnProps

| 参数             | 说明                                                                                                      | 类型                                                                                                                     | 默认值   | 必填 |
| :--------------- | :-------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------- | :------- | :--: |
| ...              | 继承 antd-vue [ColumnProps](https://www.antdv.com/components/table-cn#column)                             | -                                                                                                                        | -        |      |
| hidden           | 隐藏列                                                                                                    | boolean                                                                                                                  | -        |      |
| type             | 内容类型 可选 序号/操作/时间/数字                                                                         | 'index' / 'control' / 'date' / 'number'                                                                                  | -        |      |
| nowrap           | 列头不换行                                                                                                | boolean                                                                                                                  | -        |      |
| emptyText        | 值为空时显示的内容                                                                                        | VNode / string                                                                                                           | -        |      |
| timeFormat       | type 为'date'时,显示的时间[格式](https://day.js.org/docs/zh-CN/display/format)                            | string                                                                                                                   | -        |      |
| numberFormat     | type 为'number'时,显示的数字格式                                                                          | [Numeral.format](http://numeraljs.com/#format) / (val:Numeral,local: string/number) => string / number / VNode           | '0[.]00' |      |
| numberComputed   | type 为'number'时用于数字运算,返回结果将回填至 numeral 进行格式化。当 numberFormat 为函数时，该属性不生效 | (val:[Big.Big](https://github.com/MikeMcl/big.js#readme),Big: [Big](https://github.com/MikeMcl/big.js#readme)) => number | -        |      |
| formItemProps    | 列对应到 cuForm(新增/编辑表单) 中的表单项 [配置项](#formitemprops)                                        | object                                                                                                                   | -        |      |
| descItemProps    | 列对应到 detailDesc(详情描述列表) 中的描述项 [配置项](#descitemprops)                                     | object                                                                                                                   | -        |      |
| editable         | 是否可编辑                                                                                                | boolean                                                                                                                  | -        |      |
| editControl      | 控件类型                                                                                                  | [ControlMapType](#controlmaptype)                                                                                        | -        |      |
| editControlProps | 控件的 props                                                                                              | object                                                                                                                   | -        |      |

### formItemProps

| 参数          | 说明                                                                              | 类型                                                                | 默认值               | 必填 |
| :------------ | :-------------------------------------------------------------------------------- | :------------------------------------------------------------------ | :------------------- | :--: |
| ...           | 继承 antd-vue [FormItemProps](https://www.antdv.com/components/form-cn#form-item) | -                                                                   | -                    |      |
| name          | 表单域 model 字段                                                                 | string                                                              | -                    |      |
| control       | 控件类型                                                                          | [ControlMapType](#controlmaptype)                                   | ControlMapType.Input |      |
| controlProps  | 控件 Props                                                                        | object                                                              | -                    |      |
| colProps      | 所在列的配置                                                                      | [ColProps](https://www.antdv.com/components/grid-cn#col)            | -                    |      |
| sort          | 显示位置的排序                                                                    | number                                                              | -                    |      |
| customControl | 自定义控件,返回一个控件,绑定 model 对应值即可                                     | (options,model: 表单绑定的 model) => VNode / JSX.Element            | -                    |      |
| customRender  | 自定义渲染,可用于自定义多个收集项,收集项需要用 FormItem 包裹                      | (model: Reactive\<any\>, form: FormInstance) => VNode / JSX.Element | -                    |      |

### descItemProps

| 参数   | 说明                                                                                       | 类型                                                                                   | 必填 |
| :----- | :----------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------- | :--- |
| ...    | 继承 antd-vue [DescItemProps](https://www.antdv.com/components/descriptions-cn#item-props) |                                                                                        |      |
| hidden | 是否隐藏                                                                                   | boolean                                                                                |      |
| render | 自定义渲染                                                                                 | (\_: any, record: any, column: TableColumnProps, index: number) => VNode / JSX.Element |      |

### autoRequest

::: tip 注意

-   autoRequest 配置项同步 vue watch 的 Options,详见[Vue-Watch](https://cn.vuejs.org/api/reactivity-core.html#watch);
-   默认情况下 Table 将监听 queryFormParams、params、page、pageSize 最终组成的参数 resParams 去调用 apis.list, 虽然内部只 watch 了 resParams,但由于依赖问题,apis.list 在发生变化时也会触发数据更新
-   autoRequest 为 false 时将不创建 watch, 意味着将不自动发起请求
-   autoRequest 配置只有初始化时生效,不能动态修改

:::

| 参数                | 说明                                               | 类型    | 默认值 | 版本 | 必填 |
| :------------------ | :------------------------------------------------- | :------ | :----- | :--: | :--: |
| immediate           | 立即执行                                           | boolean | true   |  -   |      |
| deep                | 强制深度遍历 resParams，以便在深层级变更时触发回调 | boolean | -      |  -   |      |
| flush               | 调整回调函数的刷新时机                             | boolean | -      |  -   |      |
| onTrack / onTrigger | 调试侦听器的依赖                                   | boolean | -      |  -   |      |
| once                | 请求只会运行一次，首次运行后自动停止。             | boolean | -      |  -   |      |

### apis

| 参数     | 说明                                                       | 类型                                                                | 默认值 | 版本 | 必填 |
| :------- | :--------------------------------------------------------- | :------------------------------------------------------------------ | :----- | :--: | :--: |
| list     | 获取数据列表                                               | (params?:any,config?:AxiosRequestConfig) => Promise\<AxioResponse\> | -      |  -   |      |
| details  | 获取单行详情数据                                           | (data?:any,config?:AxiosRequestConfig) => Promise\<AxioResponse\>   | -      |  -   |      |
| create   | 新增数据                                                   | (data?:any,config?:AxiosRequestConfig) => Promise\<AxioResponse\>   | -      |  -   |      |
| update   | 更新数据                                                   | (data?:any,config?:AxiosRequestConfig) => Promise\<AxioResponse\>   | -      |  -   |      |
| delete   | 删除单行数据                                               | (params?:any,config?:AxiosRequestConfig) => Promise\<AxioResponse\> | -      |  -   |      |
| export   | 导出数据, api 需设置 responseType: 'blob'                  | (params?:any,config?:AxiosRequestConfig) => Promise\<AxioResponse\> | -      |  -   |      |
| import   | 导入数据, api 需设置 'content-type': 'multipart/form-data' | (data?:any,config?:AxiosRequestConfig) => Promise\<AxioResponse\>   | -      |  -   |      |
| template | 导出数据模板, api 需设置 responseType: 'blob'              | (params?:any,config?:AxiosRequestConfig) => Promise\<AxioResponse\> | -      |  -   |      |

### fieldsNames

| 参数            | 说明                                             | 类型              | 默认值     | 必填 |
| :-------------- | :----------------------------------------------- | :---------------- | :--------- | :--: |
| page            | 页码 (调用 apis.list 时参数中的 page )           | string            | 'page'     |  \*  |
| pageSize        | 每页条目数 (调用 apis.list 时参数中的 pageSize ) | string            | 'pageSize' |  \*  |
| total           | 调用 apis.list 后拿取数据总数的字段              | string / string[] | 'total'    |  \*  |
| list            | 调用 apis.list 后拿取数据列表的字段              | string / string[] | 'list'     |  \*  |
| details         | 调用 apis.details 后拿取数据的字段               | string / string[] | 'data'     |  \*  |
| export          | 调用 apis.export 后拿取数据的字段                | string / string[] | 'data'     |  \*  |
| template        | 调用 apis.template 后拿取数据的字段              | string / string[] | 'data'     |  \*  |
| editCellTempKey | 可编辑单元格绑定值所属的 key,默认取行数据的'id'  | string            | 'id'       |  \*  |

### controlColumnBtns

| 参数   | 说明     | 类型                                                   | 默认值 |
| :----- | :------- | :----------------------------------------------------- | :----- |
| detail | 详情按钮 | false / ButtonProps \& \{ children?: VNode / string \} |        |
| edit   | 编辑按钮 | false / ButtonProps \& \{ children?: VNode / string \} |        |
| delete | 删除按钮 | false / ButtonProps \& \{ children?: VNode / string \} |        |

### TableQueryFormItemProps

| 参数          | 说明                                                                              | 类型                                                                | 默认值               | 必填 |
| :------------ | :-------------------------------------------------------------------------------- | :------------------------------------------------------------------ | :------------------- | :--: |
| ...           | 继承 antd-vue [FormItemProps](https://www.antdv.com/components/form-cn#form-item) | -                                                                   | -                    |      |
| control       | 控件类型                                                                          | [ControlMapType](#controlmaptype)                                   | ControlMapType.Input |      |
| controlProps  | 控件 Props                                                                        | object                                                              | -                    |      |
| colProps      | 所在列的配置                                                                      | [ColProps](https://www.antdv.com/components/grid-cn#col)            | -                    |      |
| customControl | 自定义控件,返回一个控件,绑定 model 对应值即可                                     | (model: 表单域绑定的 model, name:string, realName: string) => VNode | -                    |      |

### TableQueryFormInstance

| 参数   | 说明                          | 类型                | 默认值 | 必填 |
| :----- | :---------------------------- | :------------------ | :----- | :--: |
| ...    | 继承 antd-vue 的 FormInstance |                     |        |
| submit | 提交方法                      | (vals: any) => void |        |
| reset  | 重置方法                      | () => void          |        |

### OwnBtnProps

| 参数     | 说明                                                                        | 类型                             | 默认值 | 必填 |
| :------- | :-------------------------------------------------------------------------- | :------------------------------- | :----- | :--: |
| ...      | 继承 antd-vue [ButtonProps](https://www.antdv.com/components/button-cn#api) |                                  |        |      |
| children | Button 的子节点                                                             | JSX.Element[] / VNode[] / string |        |
| class    | -                                                                           | string                           |        |
| style    | -                                                                           | CSSStyleSheet                    |        |

### OwnPopoverProps

| 参数        | 说明                                                                          | 类型                             | 默认值 | 必填 |
| :---------- | :---------------------------------------------------------------------------- | :------------------------------- | :----- | :--: |
| ...         | 继承 antd-vue [PopoverProps](https://www.antdv.com/components/popover-cn#api) |                                  |        |      |
| children    | Button 的子节点                                                               | JSX.Element[] / VNode[] / string |        |
| class       | -                                                                             | string                           |        |
| style       | -                                                                             | CSSStyleSheet                    |        |
| buttonProps | 气泡按钮的 props                                                              | ButtonProps                      |        |

### OwnDropProps

| 参数        | 说明                                                                            | 类型                             | 默认值 | 必填 |
| :---------- | :------------------------------------------------------------------------------ | :------------------------------- | :----- | :--: |
| ...         | 继承 antd-vue [DropdownProps](https://www.antdv.com/components/dropdown-cn#api) |                                  |        |      |
| children    | Button 的子节点                                                                 | JSX.Element[] / VNode[] / string |        |
| class       | -                                                                               | string                           |        |
| style       | -                                                                               | CSSStyleSheet                    |        |
| buttonProps | 下拉按钮的 props                                                                | ButtonProps                      |        |

### TableDescItemsProps

| 参数     | 说明                                                                        | 类型                             | 默认值 | 必填 |
| :------- | :-------------------------------------------------------------------------- | :------------------------------- | :----- | :--: |
| ...      | 继承 antd-vue [ButtonProps](https://www.antdv.com/components/button-cn#api) |                                  |        |      |
| children | Button 的子节点                                                             | JSX.Element[] / VNode[] / string |        |
| class    | -                                                                           | string                           |        |
| style    | -                                                                           | CSSStyleSheet                    |        |

### ControlMapType

> 目前支持的控件类型

`Input | InputNumber |  Select | DatePicker | RangePicker | Checkbox | CheckboxGroup | Radio | RadioGroup | TextArea`

### scroll

| 参数                     | 说明                                                                                                                                        | 类型                            | 默认值        | 版本 | global |
| :----------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------ | :------------ | :--: | :----: |
| scrollToFirstRowOnChange | 当分页、排序、筛选变化后是否滚动到表格顶部                                                                                                  | boolean                         | true          |  -   |   \*   |
| x                        | 设置横向滚动，也可用于指定滚动区域的宽，<br/>可以设置为像素值，百分比，true 和 'max-content'                                                | string / number / 'max-content' | 'max-content' |  -   |   \*   |
| y                        | 设置纵向滚动，也可用于指定滚动区域的高，可以设置为像素值。<br/>值为'auto'时将自动计算高度，<br/>注意 Table 的父容器需有高度或者为 flex 容器 | string / number / 'auto'        | 'auto'        |  -   |   \*   |

### autoSizeConfig

| 参数         |                      说明                      | 类型                          | 默认值       | 版本 | global |
| :----------- | :--------------------------------------------: | :---------------------------- | :----------- | :--: | :----: |
| wait         |                延迟执行的毫秒数                | number                        | 300          |  -   |   -    |
| options      |                  一个选项对象                  | object                        | -            |  -   |   -    |
| -signal      |    AbortSignal 对象，用于取消防抖函数的执行    | AbortSignal                   | -            |  -   |   -    |
| -edges       |        一个数组，指定函数应在何时被调用        | Array<'leading' \ 'trailing'> | ['trailing'] |  -   |   -    |
| ——'leading'  |     如果包含，函数将在第一次调用时立即执行     | -                             | -            |  -   |   -    |
| ——'trailing' | 如果包含，函数将在距离上次调用 wait 毫秒后执行 | -                             | -            |  -   |   -    |

### tableTextConfig

| 参数                     | 说明             | 类型   | 默认值          | 版本 | global |
| :----------------------- | :--------------- | :----- | :-------------- | :--: | :----: |
| modalTitle               | modal 框的 title | object | -               |  -   |   \*   |
| -create                  | 新增 modal       | string | '新增'          |  -   |   \*   |
| -update                  | 编辑 modal       | string | '编辑'          |  -   |   \*   |
| -details                 | 详情 modal       | string | '详情'          |  -   |   \*   |
| -create                  | 新增 modal       | string | '新增'          |  -   |   \*   |
| message                  | message 的内容   | object | -               |  -   |   \*   |
| -createSuccess           | -                | string | '新增成功!'     |  -   |   \*   |
| -createError             | -                | string | '新增失败!'     |  -   |   \*   |
| -updateSuccess           | -                | string | '编辑成功!'     |  -   |   \*   |
| -updateError             | -                | string | '编辑失败!'     |  -   |   \*   |
| -deleteSuccess           | -                | string | '删除成功!'     |  -   |   \*   |
| -deleteError             | -                | string | '删除失败!'     |  -   |   \*   |
| -exportSuccess           | -                | string | '导出成功!'     |  -   |   \*   |
| -exportError             | -                | string | '导出失败!'     |  -   |   \*   |
| -importSuccess           | -                | string | '导入成功!'     |  -   |   \*   |
| -importError             | -                | string | '导入失败!'     |  -   |   \*   |
| -downloadTemplateSuccess | -                | string | '模板下载成功!' |  -   |   \*   |
| -downloadTemplateError   | -                | string | '模板下载失败!' |  -   |   \*   |

### ownPaginProps

| 参数            | 说明 | 类型     | 默认值                          |
| :-------------- | :--- | :------- | :------------------------------ |
| showSizeChanger | -    | boolean  | true                            |
| showTotal       | -    | function | (total) => \`共${total}条数据\` |
| showQuickJumper | -    | boolean  | true                            |
| defaultPageSize | -    | number   | 10                              |

## Event

| 参数                      | 说明                                                                      | 类型                                                                                                                                   | 默认值 | 版本 | global |
| :------------------------ | :------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- | :----- | :--: | :----: |
| onBeforeRequestSource     | 请求列表数据前触发,返回 false 时不请求                                    | (params: object) => Promise\<any/boolean\>                                                                                             | -      |  -   |   -    |
| onSourceSuccess           | 列表数据请求成功触发,用于处理填入列表的数据                               | (res: AxiosResponse) =>Promise\<[TableSourceResult](#tablesourceresult)\>                                                              | -      |  -   |   \*   |
| onSourceError             | 列表数据请求失败触发                                                      | (err: Error) => void                                                                                                                   | -      |  -   |   \*   |
| onBeforeRequestDetails    | 获取单行详情数据前触发,用于处理获取单行详情的参数                         | ( params:object)=>Promise\<object\>                                                                                                    | -      |  -   |   \*   |
| onGetRowDetail            | 成功获取单行详情数据触发,用于设置填入编辑表单/详情 的数据源               | (res: AxiosResponse) => Promise\<object\>                                                                                              | -      |  -   |   \*   |
| onBeforeRowEditBackFill   | 点编辑,回填表单内容前触发，用于处理回填进编辑表单的数据                   | (res: AxiosResponse, record?: any ) => Promise\<object\>                                                                               | -      |  -   |   \*   |
| onBeforeCuFormSubmit      | 新增/编辑表单提交前触发,用于修改将提交的表单数据,返回 false 则不发起请求  | (vals: object,metaValues?: any)=> Promise\<object/false\>                                                                              | -      |  -   |   \*   |
| onCuFormSubmitSuccess     | 新增/编辑成功触发,返回 false 则中断内置的 message                         | (res: AxiosResponse, info?: any) => boolean/void                                                                                       | -      |  -   |   \*   |
| onCuFormSubmitError       | 新增/编辑失败触发,返回 false 则中断内置的 message                         | (res: Error, cuModalFormIsEdit?: boolean) => false/void                                                                                | -      |  -   |   \*   |
| onCuFormCancel            | 新增/编辑 Modal onCancel 时触发,返回 false 则不关闭                       | () => boolean / void                                                                                                                   | -      |  -   |   -    |
| onBeforeRowDelete         | 删除单行数据前触发,用于处理调用 apis.delete 的参数                        | (vals: object,metaValues?: any)=> Promise\<object/false\>                                                                              | -      |  -   |   \*   |
| onRowDeleteSuccess        | 删除成功触发,返回 false 则中断内置的 message                              | (res: AxiosResponse, info?: any) => boolean / void                                                                                     | -      |  -   |   \*   |
| onRowDeleteError          | 删除失败触发,返回 false 则中断内置的 message                              | (err: Error) => false / void                                                                                                           | -      |  -   |   \*   |
| onExportRequestSuccess    | apis.export 调用成功触发,用于处理返回结果,返回 false 则需自定义下载逻辑   | (res: AxiosResponse) => Promise\<[DownloadResResponse](#downloadresresponse)/false\>                                                   | -      |  -   |   \*   |
| onExportSuccess           | 导出成功触发,返回 false 则中断内置的 message                              | (downloadRes:JsDownloadFile) => Promise<boolean / void>                                                                                | -      |  -   |   \*   |
| onExportError             | 导出失败触发,返回 false 则中断内置的 message                              | (err: Error) => Promise<boolean / void>                                                                                                | -      |  -   |   \*   |
| onImportSuccess           | 导入成功触发,返回 false 则中断内置的 message                              | (res: AxiosResponse) => Promise<void / boolean>                                                                                        | -      |  -   |   \*   |
| onImportError             | 导入失败触发,返回 false 则中断内置的 message                              | (err: Error) => Promise<boolean / void>                                                                                                | -      |  -   |   \*   |
| onTemplateRequestSuccess  | apis.template 调用成功触发,用于处理返回结果,返回 false 则需自定义下载逻辑 | (res: AxiosResponse) => Promise<[DownloadResResponse](#downloadresresponse) / false>                                                   | -      |  -   |   \*   |
| onTemplateDownloadSuccess | 模板下载成功触发,返回 false 则中断内置的 message                          | (downloadRes:JsDownloadFile) => Promise<boolean / void>                                                                                | -      |  -   |   \*   |
| onTemplateDownloadError   | 模板下载失败触发,返回 false 则中断内置的 message                          | (err: Error) => Promise<boolean / void>                                                                                                | -      |  -   |   \*   |
| onCellEditConfirm         | 编辑单元格,点击确定时触发,返回 false 则中断内置回填逻辑,需自定义          | (info: [CellEditConfirmInfo](#celleditconfirminfo) ,editData: UnwrapRef<Reactive<Record<string, DataItem>>>) => Promise<boolean/ void> | -      |  -   |   -    |

### TableSourceResult

| 参数     | 说明     | 类型   | 必填 |
| :------- | :------- | :----- | :--: |
| total    | 数据总数 | number |  \*  |
| list     | 数据列表 | any[]  |  \*  |
| page     | 页码     | number |      |
| pageSize | 每页条数 | number |      |

### DownloadResResponse

| 参数     | 说明                                                                                 | 类型   | 必填 |
| :------- | :----------------------------------------------------------------------------------- | :----- | :--: |
| thumbUrl | 下载地址                                                                             | string |  \*  |
| filename | 文件名                                                                               | string |      |
| config   | js-file-downloader 的[配置项](https://github.com/AleeeKoi/js-file-downloader#readme) | object |      |

### CellEditConfirmInfo

| 参数          | 说明                          | 类型              | 必填 |
| :------------ | :---------------------------- | :---------------- | :--: |
| name          | 字段名                        | string / string[] |      |
| dataIndex     | TableColumnProps['dataIndex'] | string / string[] |      |
| handlePath    | 实际操作的字段路径            | string            |      |
| record        | 当前行的数据                  | DataItem          |      |
| value         | 控件输入的值                  | any               |      |
| closeCellEdit | 关闭编辑的方法                | () => void        |      |

## Slot

| 参数                    | 说明                                          | 类型                                                                                       |
| :---------------------- | :-------------------------------------------- | :----------------------------------------------------------------------------------------- |
| ...                     | 继承 antd-vue-table 原本的 slot               |                                                                                            |
| customCiesBtns          | 自定义表格按钮 新增/导入/导出/下载模板/列配置 | v-slot:customCiesBtns="[customCiesBtnsOpt](#customciesbtnsopt)"                            |
| customControlColumnBtns | 自定义操作列内容                              | v-slot:customControlColumnBtns="[customControlColumnBtnsOpt](#customcontrolcolumnbtnsopt)" |
| customQueryFormBtns     | 自定义筛选表单的按钮组                        | v-slot:customQueryFormBtns="[customQueryFormBtnsOpt](#customqueryformbtnsopt)              |

### customCiesBtnsOpt

```ts
interface customCiesBtnsOpt {
    CreateBtn: VNode // 新增按钮
    ImportBtn: VNode // 导入按钮
    ExportDropDown: VNode // 下拉导出按钮 （包含导出当前页/全部页 按钮）
    ExportCurrentPageBtn: VNode // 导出当前页按钮
    ExportAllBtn: VNode // 导出全部按钮
    ColumnSettingBtn: VNode // 列配置按钮
    DownloadTemplateBtn: VNode // 下载模板按钮
}
```

### customControlColumnBtnsOpt

```ts
interface customControlColumnBtnsOpt {
    DetailBtn: VNode // 详情按钮
    EditBtn: VNode // 编辑按钮
    DeleteBtn: VNode // 删除按钮
    deleteRow: (params: any) => Promise<void> //  删除当前行，自定义删除按钮时 @click绑定这个方法,需传入params供apis.delete请求使用
    editRow: (params: any) => Promise<void> //  编辑当前行，自定义编辑按钮时 @click绑定这个方法,需传入params供apis.update请求使用
    openRowDetails: (params: any) => Promise<void> //  打开当前行的详情modal，自定义编辑按钮时 @click绑定这个方法,需传入params供apis.details请求使用
    rowInfo: obj // 当前行/列的信息
    metaColumnInfo: TableColumnProps // 当前行列的源配置信息
}
```

### customQueryFormBtnsOpt

```ts
interface customQueryFormBtnsOpt {
    CreateBtn: VNode // 新增按钮
    ImportBtn: VNode // 导入按钮
    ExportDropDown: VNode // 下拉导出按钮 （包含导出当前页/全部页 按钮）
    ExportCurrentPageBtn: VNode // 导出当前页按钮
    ExportAllBtn: VNode // 导出全部按钮
    ColumnSettingBtn: VNode // 列配置按钮
    DownloadTemplateBtn: VNode // 下载模板按钮
    SubmitBtn: VNode // 提交按钮
    ResetBtn: VNode // 重置按钮
    QueryFormInstance: VNode // 筛选表单的实例对象
}
```

## 默认全局配置

::: details table.tsx

<<< @/../../src/config/table.tsx

:::
