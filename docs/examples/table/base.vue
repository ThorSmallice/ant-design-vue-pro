<template>
    <Table
        :columns="columns"
        :query-form-items="queryFormItems"
        :apis="{
            create: createUserApi,
            list: getUsersPageApi,
            update: updateUserApi,
            delete: deleteUserApi,
            details: getUserDetailsApi,
            template: downloadUserTemplateApi,
            export: exportUsersApi,
            import: importUserApi,
        }"
        :table-text-config="{
            ...TableConfig.tableTextConfig,
            modalTitle: {
                create: '新增用户',
                update: '修改用户信息',
                details: '用户详情',
            },
        }"
    >
    </Table>
</template>

<script setup lang="tsx">
import {
    createUserApi,
    deleteUserApi,
    downloadUserTemplateApi,
    exportUsersApi,
    getUserDetailsApi,
    getUsersPageApi,
    importUserApi,
    updateUserApi,
} from '@docs/apis/user'
import { ControlMapType, Table, TableConfig, TableProps } from 'antd-vue-dbthor'
import { computed, ref } from 'vue'

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

const columns = ref<TableProps['columns']>([
    {
        title: 'id',
        hidden: true,
        dataIndex: 'id',
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
    },
    {
        title: '昵称',
        dataIndex: 'nickname',
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
        customRender: ({ text }) => (text ? '男' : '女'),
    },
    {
        title: '年龄',
        dataIndex: 'age',
        formItemProps: {
            control: ControlMapType.InputNumber,
        },
    },
    {
        title: '职业',
        dataIndex: 'occupation',
    },
])

const queryFormItems = computed<TableProps['queryFormItems']>(() => [
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
