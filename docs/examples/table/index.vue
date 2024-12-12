<template>
    <div style="width: 100%; height: 500px" class="flex flex-col overflow-hidden">
        <!-- <Button @click="click">点我</Button> -->
        <Table
            ref="tableRef"
            :columns="columns"
            :apis="apis"
            :queryFormItem="queryFormItem"
            :queryFormColProps="{
                span: 24 / queryFormItem.length,
            }"
            :queryFormResetBtn="open"
            :queryFormSubmitBtn="open"
            :colResizable="open"
            :fieldsNames="fieldsNames"
            :queryFormSubmitWithReset="true"
            :onBeforeCuFormSubmit="onBeforeCuFormSubmit"
            :cies-btns-in-query-form="true"
            :scroll="{
                x: 'max-content',
            }"
        >
            <template #queryFormExtraLeft>
                <Button>left</Button>
            </template>
            <template #queryFormExtraCenter>
                <Button>center</Button>
            </template>
            <template #queryFormExtraRight>
                <Button>right</Button>
            </template>
            <template #controlColumnBtnExtraDetailStart="{ opt, metaColumn }">
                <Button @click="() => console.log(opt, metaColumn)">start</Button>
            </template>
            <template #controlColumnBtnExtraEditLeft>
                <Button>left</Button>
            </template>
            <template #controlColumnBtnExtraEditRight>
                <Button>right</Button>
            </template>
            <template #controlColumnBtnExtraEnd>
                <Button>end</Button>
            </template>
        </Table>
    </div>
</template>

<script setup lang="ts">
import { Table } from 'antd-vue-dbthor'

import { ControlMapType } from '@src/components/table/control'
import { TableQueryFormItemProps } from '@src/components/table/useQueryForm'
import axios from 'axios'
import { Button } from 'ant-design-vue'
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { TableColumnProps } from '@src/components/table/useColumns'
defineOptions({
    inheritAttrs: true,
})
defineProps()
// TableConfig.fieldsNames.default.list = ['data', 'data', 'list']
// TableConfig.fieldsNames.default.total = ['data', 'data', 'total']
const tableRef = ref()
const options = ref([])
const fieldsNames = ref({
    page: 'page',
    pageSize: 'pageSize',
    detail: ['data', 'data'],
    list: ['data', 'data', 'list'],
    total: ['data', 'data', 'total'],
})
const open = ref(true)
const click = () => {
    open.value = !open.value
}

const rowEdit = async (record) => {
    console.log('🚀 ~ rowEdit ~ record:', record)
}
const queryFormItem = computed((): TableQueryFormItemProps[] => {
    return [
        {
            label: '城市名称',
            name: 'cityName',
            control: ControlMapType.Select,
            controlProps: {
                options: options.value,
            },
        },
        {
            label: '农作物名称',
            name: 'name',
        },
    ]
})

axios.defaults.baseURL = '/api'
axios.defaults.headers = {
    Authorization: 'Bearer 9ba3f553f1f14f9d837b15f58138f715',
} as any

// const onSourceSuccess: TableProps['onSourceSuccess'] = async (res) => {
//     return {
//         total: res?.data?.data?.total,
//         list: res?.data?.data?.list,
//     }
// }

const asyncColumns = ref([])
const columns = computed(() => {
    return asyncColumns.value as TableColumnProps[]
})

onMounted(() => {
    setTimeout(() => {
        options.value = [
            {
                label: '泽库',
                value: 1,
            },
            {
                label: '同仁',
                value: 2,
            },
        ]

        asyncColumns.value = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80,
                hidden: true,
                formItemProps: {
                    hidden: true,
                },
            },
            {
                title: '城市名称',
                dataIndex: 'cityId',
                width: 150,

                formItemProps: {
                    control: 'Select',
                    controlProps: {
                        options: [
                            {
                                label: '泽库县',
                                value: 3,
                            },
                            {
                                label: '尖扎县',
                                value: 2,
                            },
                        ],
                    },
                },
                customRender: ({ record }: any) => {
                    return record?.cityName
                },
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
                formItemProps: {
                    rules: [{ required: true, message: '请输入农作物名称' }],
                    controlType: 'Input',
                },
                // search: true,
            },
            {
                title: '农作物品种',
                dataIndex: 'kind',
                width: 150,
                formItemProps: {
                    control: 'Input',
                    rules: [{ required: true }],
                },
                // search: true,
            },
            {
                title: '农作物分布区域',
                dataIndex: 'area',
                width: 150,
                formItemProps: {
                    controlType: 'Input',
                    rules: [{ required: true }],
                },
            },
            {
                title: '农作物需水量(m³/亩)',
                dataIndex: 'waterQuantity',
                width: 150,
                formItemProps: {
                    control: 'InputNumber',
                    controlProps: {
                        disabled: true,
                        placeholder: '只读属性，无需填写',
                    },
                },
            },
            {
                title: '农作物用水量(m³/亩)',
                dataIndex: 'useWaterQuantity',
                width: 150,
                formItemProps: {
                    control: 'InputNumber',
                },
            },
        ] as TableColumnProps[]
    }, 1000)
})

const onBeforeCuFormSubmit = (vals) => {
    return {
        ...vals,
        cityName: options.value?.find(({ value }) => value === vals.cityId)?.label,
    }
}
const listApi = async (params?: any, config?: any) =>
    await axios.get('/hnz/base/crop/page', { params, ...config })
const detailsApi = async (params?: any, config?: any) =>
    await axios.get('/hnz/base/crop/get', { params, ...config })
const createApi = async (data?: any, config?: any) =>
    await axios.post('/hnz/base/crop/create', data)
const updateApi = async (data?: any, config?: any) => await axios.put('/hnz/base/crop/update', data)
const deleteApi = async (params?: any, config?: any) =>
    await axios.delete('/hnz/base/crop/delete', { params, ...config })
const exportApi = async (params?: any, config?: any) => await axios.get('', { params, ...config })
const importApi = async (params?: any, config?: any) => await axios.post('', { params, ...config })

const apis = {
    list: listApi,
    details: detailsApi,
    create: createApi,
    update: updateApi,
    delete: deleteApi,
    export: exportApi,
    import: importApi,
}
</script>

<style lang="scss" scoped></style>
