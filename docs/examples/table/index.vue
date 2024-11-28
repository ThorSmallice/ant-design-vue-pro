<template>
    <div style="width: 100%; height: 500px">
        <Table
            :columns="columns"
            :apis="{
                list: listApi,
                details: detailsApi,
                create: createApi,
                update: updateApi,
                delete: deleteApi,
                export: exportApi,
                import: importApi,
            }"
        ></Table>
    </div>
</template>

<script setup lang="ts">
import { Table, TableProps } from '@dbthor/ant-design-vue-pro'
import axios from 'axios'
import { reactive } from 'vue'

const columns = reactive<TableProps['columns']>([
    {
        title: 'id',
        dataIndex: 'id',
        // hidden: true,
        // formItemProps: {
        //     hidden: true,
        // },
    },
    {
        title: '城市名称',
        dataIndex: 'cityId',
        width: 150,
        // formItemProps: {
        //     controlType: 'Select',
        //     controlProps: {},
        // },
        // search: true,
        // filterComp: 'Select',
        // filterCompProps: {},

        // render: (text, record) => {
        //     return record?.cityName
        // },
    },
    {
        title: '农作物名称',
        dataIndex: 'name',
        width: 150,
        // formItemProps: {
        //     rules: [{ required: true, message: '请输入农作物名称' }],
        //     controlType: 'Input',
        // },
        // search: true,
    },
    {
        title: '农作物品种',
        dataIndex: 'kind',
        width: 150,
        // formItemProps: {
        //     controlType: 'Input',
        //     rules: [{ required: true }],
        // },
        // search: true,
    },
    {
        title: '农作物分布区域',
        dataIndex: 'area',
        width: 150,
        // formItemProps: {
        //     controlType: 'Input',
        //     rules: [{ required: true }],
        // },
    },
    {
        title: '农作物需水量(m³/亩)',
        dataIndex: 'waterQuantity',
        width: 150,
        // formItemProps: {
        //     controlType: 'InputNumber',
        //     controlProps: {
        //         readOnly: true,
        //         placeholder: '只读属性，无需填写',
        //     },
        // },
    },
    {
        title: '农作物用水量(m³/亩)',
        dataIndex: 'useWaterQuantity',
        width: 150,
        // formItemProps: {
        //     controlType: 'InputNumber',
        // },
    },
])
const listApi = async (params?: any, config?: any) =>
    await axios.get('/api/hnz/base/crop/page', { params, ...config })
const detailsApi = async (params?: any, config?: any) =>
    await axios.get('/hnz/base/crop/get', { params, ...config })
const createApi = async (params?: any, config?: any) =>
    await axios.post('/hnz/base/crop/create', { params, ...config })
const updateApi = async (params?: any, config?: any) =>
    await axios.put('/hnz/base/crop/update', { params, ...config })
const deleteApi = async (params?: any, config?: any) =>
    await axios.delete('/hnz/base/crop/delete', { params, ...config })
const exportApi = async (params?: any, config?: any) => await axios.get('', { params, ...config })
const importApi = async (params?: any, config?: any) => await axios.post('', { params, ...config })
</script>

<style lang="scss" scoped></style>
