<template>
    <Table
        columns-align="center"
        :columns="columns"
        :query-form-items="queryFormItems"
        template-file-name="用户列表模板.xlsx"
        export-file-name="用户列表数据.xlsx"
        :apis="apis"
    >
    </Table>
</template>

<script setup lang="tsx">
import {
    createUserApi,
    deleteUserApi,
    getUserDetailsApi,
    getUsersPageApi,
    updateUserApi,
} from '@docs/apis/user'
import { ControlMapType, Table, TableProps } from 'antd-vue-dbthor'
import { computed, ref } from 'vue'

const apis = ref({
    list: getUsersPageApi,
    details: getUserDetailsApi,
    create: createUserApi,
    update: updateUserApi,
    delete: deleteUserApi,
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
            width: 100,
            dataIndex: 'age',
            type: 'number',
            formItemProps: {
                control: ControlMapType.InputNumber,
            },
        },
        {
            title: '性别',
            width: 100,
            dataIndex: 'sex',
            formItemProps: {
                control: ControlMapType.Select,
                controlProps: {
                    options: sexOptions,
                },
            },
            customRender: ({ text }) => sexOptions?.find?.(({ value }) => value === text)?.label,
        },
        {
            title: '职业',
            width: 100,
            dataIndex: 'occupation',
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
