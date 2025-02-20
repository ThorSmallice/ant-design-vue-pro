## 取值配置

::: info

表格内置了新增改查/下载模板/导出/导入逻辑功能,在配置了 apis 后需要根据请求返回值的数据结构来配置取值方式

配置表格的取值主要有两种方式:

-   fieldsNames
-   Event (优先级 > fieldsNames )
-   fieldsNames.list 和 fieldsNames.total 两个字段比较特殊,在使用@source-success 回填字段时需结合 fieldsNames,使它们能对应上

:::

<Tabs>
    <TabPane key="1" tab="配置 fieldsNames"> 
        <FieldsNames></FieldsNames>
    </TabPane>
    <TabPane key="2" tab="配置event">
        <FieldsNamesEvent></FieldsNamesEvent>
    </TabPane>

</Tabs>

::: details Code

::: code-group

<<< @/../examples/table/fieldsNames.vue [配置 fieldsNames]

<<< @/../examples/table/fieldsNames-event.vue{6-12,36-45} [配置 Event]

:::
