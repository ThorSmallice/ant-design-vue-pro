# 更新日志

## v1.0.123-133

### 新增

-   table descItemsProps 新增 render 配置
-   table descItemsProps 新增 sort 配置
-   增加 isTree 配置项,解决树状表格 autoSize 对于 Y 值的计算问题

### Bug Fixes

-   更改 cuform 提交按钮的 loading 开启时机
-   修复 ciesBtn 传参污染问题

## v1.0.122

### 新增

-   TableInstance 新增 resetCuFormModel 方法
-   TableInstance 新增 CUModalFormInstance 方法

### 变更

-   TableInstance setCuFormModel 方法从直接替换输入对象改为逐项变更

## v1.0.121

### 新增

-   Table 删除行若是当前页最后一行,则自动切换到上一页

## v1.0.119 ~ v1.0.120

### Bug Fixes

-   更改 Table 组件 dataSouce 赋值逻辑,解决 autoRequest===false 情况下,调用 updataSource 不生效问题

## v1.0.118

### 新增

-   Table setQueryFormModel 方法

### Bug Fixes

-   Table 监听 params 的错误

## v1.0.117

## Bug Fixes

-   修复 table datasource 赋值后，total 不更新问题

## v1.0.116

### 新增

-   新增 Table 组件 queryFormOperationBtnsLayout 配置项，提供三种表单操作按钮布局

### Bug Fixes

-   修复 table datasource 属性不更新问题

## v1.0.113~115

### Bug Fixes

-   修改 table datasource 更新方式
-   修改 customCiesBtnSlot 类型
-   修复 table slot 转发的 key 值问题
-   修复 table type=number 时对空值的处理

## v1.0.111~112

### 新增

-   允许 Table 组件 columns 配置项 formItemProps.customControl /formItemProps.customRender 获取 cuform 的 edit 状态
-   Table 新增 getCuModalFormIsEdit 方法
-   Table 新增 setCuFormModel 方法

## v1.0.110

### Bug Fixes

-   修复 Table 树形表头的排序问题

## v1.0.108~109

### Bug Fixes

-   修复 Table 组件默认插槽报错问题

## v1.0.106~107

### 新增

-   新增 Table 组件 queryFormItemsControlProps 配置项，支持配置查询表单公共属性

## v1.0.105

### Bug Fixes

-   修复 Table 组件 columnsSorter 属性失效问题

## v1.0.99~104

### 新特性

-   Table 组件 expose resetPage 方法
-   Table 组件 expose loading 状态

### Bug Fixes

-   修复类型文件导出问题
-   修复 Table 组件详情弹窗中时间戳格式显示为空的问题
-   修复 Table 组件 CiesBtn 为空时,占位丢失问题

## v1.0.98

### Bug Fixes

-   Modal 组件某些场景下位置错乱问题

## v1.0.97

### 新特性

-   新增 Modal 组件，支持全屏、拖拽、最大化高度

## v1.0.96

### Bug Fixes

-   Table 组件删除计算表头宽度逻辑，回归 antd 本来的特性

## v1.0.95

### Bug Fixes

-   Table 组件列头显示控件序号列显示错乱问题

### 新特性

-   新增 查询表单项支持时间范围参数自动回填
-   新增 单元格编辑支持时间范围类型修改
-   新增 scroll.x = 'auto',自动计算 scroll.x

### 优化

-   单元格编辑图标显示
-   单元格编辑支持失焦、回车确认回填
