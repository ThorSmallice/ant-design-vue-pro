<template>
    <Table
        :columns="columns"
        :query-form-items="queryFormItems"
        :apis="apis"
        :fieldsNames="{
            ...TableConfig.fieldsNames, // [!code focus]
            list: ['data', 'list'], // [!code focus]
            total: ['data', 'total'], // [!code focus]
            details: ['data'], // [!code focus]
        }"
    ></Table>
</template>

<script setup lang="tsx">
import Axios from 'axios'

const axios = Axios.create({
    baseURL: import.meta.env.VITE_REQUEST_BASE_URL,
})

axios.interceptors.response.use((resp) => resp.data) // [!code focus]

import { ControlMapType, Table, TableConfig, TableProps } from 'antd-vue-dbthor'
import { computed, ref } from 'vue'

const apis = ref({
    list: async (params?: any) => await axios.get('/public/users/page', { params }),
    details: async (params?: any) => await axios.get('/public/users', { params }),
    create: async (data?: any) => await axios.post('/public/users', data),
    update: async ({ id, ...data }: any) => await axios.put(`/public/users/${id}`, data),
    delete: async ({ id }: any) => await axios.delete(`/public/users/${id}`),
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
