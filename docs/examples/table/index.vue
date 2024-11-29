<template>
    <div style="width: 100%; height: 500px">
        <Table
            full
            ref="tableRef"
            :params="params"
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
            :onSourceSuccess="onSourceSuccess"
            :filterFormItem="filterFormItem"
        ></Table>
    </div>
</template>

<script setup lang="ts">
import { Table, TableProps } from '@dbthor/ant-design-vue-pro'
import axios from 'axios'
import { computed, reactive, ref } from 'vue'
// TableConfig.fieldsNames.default.list = ['data', 'data', 'list']
// TableConfig.fieldsNames.default.total = ['data', 'data', 'total']
const tableRef = ref()

const filterFormItem = computed(() => {
    return [
        {
            label: '城市名称',
            name: 'cityName',
        },
        {
            label: '农作物名称',
            name: 'name',
        },
    ]
})

axios.defaults.baseURL = '/api'
axios.defaults.headers = {
    Authorization: 'Bearer 1b5b0d733bcd4e458f4fd2cb4fb9c110',
} as any

const onSourceSuccess: TableProps['onSourceSuccess'] = async (res) => {
    return {
        total: res?.data?.data?.total,
        list: res?.data?.data?.list,
    }
}
const params = reactive({
    cityName: '',
})
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
        dataIndex: 'cityName',
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
    await axios.get('/hnz/base/crop/page', { params, ...config })
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
