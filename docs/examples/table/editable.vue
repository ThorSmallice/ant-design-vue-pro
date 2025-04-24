<template>
    <Table v-model:value="value" columns-align="center" :columns="columns" :query-form-items="queryFormItems"
        template-file-name="用户列表模板.xlsx" export-file-name="用户列表数据.xlsx" :apis="apis">
    </Table>
    <Table :cies-btns="false" :own-pagin="false" columns-align="center" :query-form="false" :control-column="false"
        :data-source="value" bordered :columns="columns1"></Table>
</template>

<script setup lang="tsx">
import {
    createUserApi,
    deleteUserApi,
    downloadUserTemplateByBlobApi,
    exportUsersByBufferApi,
    getUserDetailsApi,
    getUsersPageApi,
    importUserApi,
    updateUserApi,
} from '@docs/apis/user'
import { ControlMapType, Table, TableProps } from 'antd-vue-dbthor'
import { computed, ref } from 'vue'


const value = ref<TableProps['dataSource']>([])
const apis = ref<TableProps['apis']>({
    list: getUsersPageApi,
    details: getUserDetailsApi,
    create: createUserApi,
    update: updateUserApi,
    delete: deleteUserApi,
    template: downloadUserTemplateByBlobApi,
    export: exportUsersByBufferApi,
    import: importUserApi

})

const sexOptions = [
    {
        label: '男',
        value: 1,
    },
    {
        label: '女',
        value: 0,
    },
]

const columns = computed((): TableProps['columns'] => {
    return [
        {
            title: 'id',
            dataIndex: 'id',
            hidden: true,
            formItemProps: {
                hidden: true,
            },
            descItemProps: {
                hidden: true,
            },
        },

        {
            title: '用户名',
            dataIndex: 'username',
            width: 200,
            editable: true,
            editControlProps: {
                bordered: false
            }
        },

        {
            title: '昵称',
            width: 100,
            dataIndex: 'nickname',
            editable: true
            // editable 默认会取formItemProps中的控件配置  

        },
        {
            title: '年龄',
            dataIndex: 'age',
            type: 'number',
            formItemProps: {
                control: ControlMapType.InputNumber,

            },
            width: 100,
            editable: true,

        },
        {
            title: '性别',
            dataIndex: 'sex',
            formItemProps: {
                control: ControlMapType.Select,
                controlProps: {
                    options: sexOptions,
                    allowClear: false
                },
            },
            width: 150,
            editable: true,
            customRender: ({ text }) => sexOptions?.find?.(({ value }) => value === text)?.label,
        },
        {
            title: '职业',
            dataIndex: 'occupation',
            width: 100,
        },
        {
            title: "创建时间",
            dataIndex: 'createTime',
            type: 'date',
            width: 200,
            formItemProps: {
                hidden: true
            },

        },
        {
            title: "更新时间",
            dataIndex: 'updateTime',
            type: 'date',
            width: 200,
            formItemProps: {
                control: ControlMapType.DatePicker,
                controlProps: {
                    showTime: true
                }
            },
            editable: true,


        },
        {
            title: '时间范围',
            dataIndex: [['createTime'], ['updateTime']],
            type: 'date-range',
            width: 400,
            formItemProps: {
                name: "createTime-updateTime",
                control: ControlMapType.RangePicker,
                controlProps: {
                    showTime: true
                }
            },
            editable: true,

        }
    ]
})

const columns1 = computed(() => columns.value.map((item => ({ ...item, editable: false }))))



const queryFormItems = computed((): TableProps['queryFormItems'] => [
    {
        label: '用户名',
        name: 'username',
    },
    {
        label: '昵称',
        name: 'nickname',
    },
    {
        label: '年龄',
        name: 'age',
    },
    {
        label: '性别',
        name: 'sex',
        control: ControlMapType.Select,
        controlProps: {
            options: sexOptions,
            style: {
                width: '120px',
            },
        },
    },
    {
        label: '时间范围',
        name: "createTime-updateTime",
        control: ControlMapType.RangePicker,

    }

])


</script>

<style scoped></style>
