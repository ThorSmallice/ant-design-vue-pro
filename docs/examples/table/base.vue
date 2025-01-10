<template>
    <Table
        :own-pagin="true"
        :columns="columns"
        :control-column-width="150"
        :query-form-items="queryFormItems"
        :apis="{
            list: getUsersApi,
            details: getUserDetailsApi,
            create: createUserApi,
            delete: deleteUserApi,
            update: updateUserApi,
            export: async () => {},
        }"
        :fields-names="{
            ...TableConfig.fieldsNames,
            list: ['data', 'data'],
            total: ['data', 'total'],
            details: ['data', 'data'],
        }"
        ref="tableRef"
        :query-form-default-values="defaultValues"
        :export-dropdown="false"
        :export-btn-mode="'all'"
    >
    </Table>
</template>

<script setup lang="tsx">
import {
    Button,
    DatePicker,
    Image,
    Input,
    Select,
    TableColumn,
    TableColumnGroup,
} from 'ant-design-vue'
import { ControlMapType, Table, TableConfig, TableInstance, TableProps } from 'antd-vue-dbthor'
import { computed, Ref, ref, watch } from 'vue'
import axios from '@docs/apis/request'
import dayjs from 'dayjs'

const tableRef = ref<TableInstance>()
const getUsersApi = async (params?: any, config?: any) =>
    await axios.get('/wms/task-plan/page', { params, ...config })
const getUserDetailsApi = async ({ id }: any, config?: any) => await axios.get(`/api/users/${id}`)
const createUserApi = async (data?: any, config?: any) => await axios.post('/users', data, config)
const deleteUserApi = async ({ id }: any, config?: any) => await axios.delete(`/api/users/${id}`)
const updateUserApi = async ({ id, ...data }: any, config?: any) => {
    return await axios.put(`/api/users/${id}`, data, config)
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

const defaultValues = ref({
    email: '1',
    time: [dayjs(), dayjs().add(1, 'day')],
})
const queryFormItems = computed((): TableProps['queryFormItems'] => [
    {
        label: 'first_name',
        name: 'first_name',
    },
    {
        label: 'email',
        name: 'email',
        customControl: (model, name) => {
            console.log(model)
            return (
                <Select
                    v-model:value={model.values['email']}
                    style="width:200px;"
                    options={[
                        {
                            label: '1',
                            value: '1',
                        },
                        {
                            label: '2',
                            value: '2',
                        },
                    ]}
                ></Select>
            )
        },
    },
    {
        label: 'time',
        name: 'time',
        control: 'RangePicker',
    },
])
</script>

<style scoped></style>
