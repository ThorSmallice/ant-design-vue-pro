<template>
    <Button @click="click">点我</Button>
    <Table
        :own-pagin="true"
        :columns="columns"
        full
        :control-column-width="150"
        :query-form-items="queryFormItems"
        :cies-btns-in-query-form="true"
        :apis="{
            list: listApi,
            details: getUserDetailsApi,
            create: createUserApi,
            delete: deleteUserApi,
            update: updateUserApi,
        }"
        :fields-names="{
            ...TableConfig.fieldsNames,
            list: ['data', 'data'],
            total: ['data', 'total'],
            detail: ['data', 'data'],
        }"
    >
    </Table>
</template>

<script setup lang="tsx">
import { Button, Image, TableColumn, TableColumnGroup } from 'ant-design-vue'
import { ControlMapType, Table, TableConfig, TableProps } from 'antd-vue-dbthor'
import { ref } from 'vue'
import axios from '@docs/apis/request'

const getUsersApi = async (params?: any, config?: any) =>
    await axios.get('https://6776432412a55a9a7d0b0dfc.mockapi.io/api/users', { params, ...config })
const getUserDetailsApi = async ({ id }: any, config?: any) => await axios.get(`/api/users/${id}`)
const createUserApi = async (data?: any, config?: any) => await axios.post('/users', data, config)
const deleteUserApi = async ({ id }: any, config?: any) => await axios.delete(`/api/users/${id}`)
const updateUserApi = async ({ id, ...data }: any, config?: any) => {
    return await axios.put(`/api/users/${id}`, data, config)
}
const listApi = ref(getUsersApi)
const getContractManagePageApi = async (params?: any, config?: any) =>
    await axios.get('/admin-api/wms/task-plan/page', { params })
const click = () => {
    listApi.value = getContractManagePageApi
}

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
        title: 'first_name',
        dataIndex: 'first_name',
        formItemProps: {
            hidden: true,
        },
    },
    {
        title: 'last_name',
        dataIndex: 'last_name',
        formItemProps: {
            hidden: true,
        },
    },
    {
        title: 'email',
        dataIndex: 'email',
        formItemProps: {
            hidden: true,
        },
    },
    {
        title: 'avatar',
        dataIndex: 'avatar',
        sorter: false,
        formItemProps: {
            hidden: true,
        },
        customRender: ({ text }) => <Image width={30} src={text}></Image>,
    },
    {
        title: 'name',
        dataIndex: 'name',
        hidden: true,
    },
    {
        title: 'job',
        dataIndex: 'job',
        hidden: true,
    },
])

const queryFormItems = ref<TableProps['queryFormItems']>([
    {
        label: 'first_name',
        name: 'first_name',
    },
    {
        label: 'email',
        name: 'email',
    },
])
</script>

<style scoped></style>
