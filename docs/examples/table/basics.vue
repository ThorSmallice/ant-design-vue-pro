<template>
    <Table columns-align="center" :index-column-width="80" :columns="columns" :query-form-items="queryFormItems"
        template-file-name="用户列表模板.xlsx" export-file-name="用户列表数据.xlsx" :apis="apis">
    </Table>
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
import { computed, ref, reactive } from 'vue'

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
            width: 100,
        },

        {
            title: '昵称',
            width: 100,
            dataIndex: 'nickname',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            type: 'number',
            formItemProps: {
                control: ControlMapType.InputNumber,
            },
            width: 100,
        },
        {
            title: '性别',
            dataIndex: 'sex',
            formItemProps: {
                control: ControlMapType.Select,
                controlProps: {
                    options: sexOptions,
                },
            },
            width: 100,

            customRender: ({ text }) => sexOptions?.find?.(({ value }) => value === text)?.label,
        },
        {
            title: '职业',
            dataIndex: 'occupation',
            width: 100,
        },
    ]
})

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
])
</script>

<style scoped></style>
