<template>
    <Table
        :columns="columns"
        :query-form-items="queryFormItems"
        :apis="apis"
        @source-success="onSourceSuccess"
        @get-row-detail="onGetRowDetail"
        :fields-names="{
            ...TableConfig.fieldsNames,
            list: 'custom-data-source',
            total: 'custom-total-name',
        }"
    ></Table>
</template>

<script setup lang="tsx">
import {
    createUserApi,
    deleteUserApi,
    getUserDetailsApi,
    getUsersPageApi,
    updateUserApi,
} from '@docs/apis/user'
import { ControlMapType, Table, TableConfig, TableProps } from 'antd-vue-dbthor'
import { AxiosResponse } from 'axios'
import { computed, ref } from 'vue'

const apis = ref({
    list: getUsersPageApi,
    details: getUserDetailsApi,
    create: createUserApi,
    update: updateUserApi,
    delete: deleteUserApi,
})

const onSourceSuccess = async (res: AxiosResponse) => {
    // 返回的对象将作为表格数据/总数的取值源, 需匹配fieldsNames
    return {
        'custom-data-source': res?.data?.data?.list,
        'custom-total-name': res?.data?.data?.total,
    }
}
const onGetRowDetail = async (res: AxiosResponse) => {
    // 获取的单行详情直接返回要渲染的数据即可
    return res?.data?.data
}

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
