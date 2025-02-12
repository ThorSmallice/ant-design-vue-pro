<template>
    <Table
        ref="tableRef"
        :full="true"
        export-file-name="测试.xlsx"
        :cu-form-back-fill-by-get-detail="false"
        :detail-back-fill-by-get-detail="false"
        :cu-form-default-values="initalValues"
        :cu-form-props="{
            labelCol: {
                span: 6,
            },
        }"
        :columns="columns"
        :query-form-items="queryFormItem"
        :apis="{
            list: getContractManagePageApi,
            details: getContractManageDetailApi,
            export: exportApi,
            import: importApi,
            template: templateApi,
            create: createContractManagePageApi,
        }"
        v-model:value="dataSource"
        :params="params"
        :downloadTempalteParamsFormatter="downloadTempalteParamsFormatter"
        templateFileName="模板.xlsx"
        :onBeforeRequestDetails="onBeforeRequestDetails"
        @cell-edit-confirm="cellEditConfirm"
    >
    </Table>
</template>

<script setup lang="tsx">
import { ControlMapType, Table, TableConfig, TableProps } from 'antd-vue-dbthor'
import request from 'axios'
import { computed, ref } from 'vue'
const dataSource = ref([])

const cellEditConfirm = async () => {}
const tableRef = ref()
TableConfig.fieldsNames = {
    ...TableConfig.fieldsNames,
    list: ['data', 'list'],
    page: 'pageNo',
}

const onBeforeRequestDetails = async (record: any) => {
    return {
        id: record?.id,
        companyId: record?.companyId,
    }
}

const downloadTempalteParamsFormatter = ({ companyId }) => {
    return {
        companyId,
    }
}
const axios = request.create({
    baseURL: '/admin-api',
})
axios.interceptors.request.use(async (req) => {
    req.headers['Authorization'] = 'Bearer 14724419e5ba41efaae64d91bed10d7b'
    req.headers['tenant-id'] = '1820759402696224769'
    return req
})
axios.interceptors.response.use(async (res) => {
    console.log('🚀 ~ axios.interceptors.response.use ~ res:', res)
    return res?.data
})
const getContractManagePageApi = async (params?: any, config?: any) =>
    await axios.get('/wms/task-plan/page', { params })

const exportApi = async (params) => {
    return axios.get('/wms/contract/export-excel', { params, responseType: 'blob' })
}
const templateApi = async (params) => {
    return axios.get('/basic/config/template/get', { params, responseType: 'blob' })
}
const getContractManageDetailApi = async (params?: any) =>
    await axios.get('/wms/task-plan/get', { params })

const createContractManagePageApi = async (data) =>
    await axios.post('/wms/task-plan/create', { data })

const importApi = async (data) => {
    return axios.post(
        '/basic/config/import-excel',
        {
            companyId: '1821098661168885761',
            ...data,
        },
        {
            headers: {
                'content-type': 'multipart/form-data',
            },
        }
    )
}

const companyId = '1821098661168885761'
const params = computed(() => ({
    companyId,
}))

const initalValues = ref({
    companyId,
    status: '履约中',
    reminder: 15,
})

const timeFormat = 'YYYY-MM-DD'
defineOptions({
    name: 'ContractManagement',
})

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
            title: '任务类别',
            dataIndex: 'category',
            width: 120,
            editable: true,
            formItemProps: {
                control: ControlMapType.Select,
                controlProps: {
                    options: [
                        {
                            value: '维修',
                            label: '维修',
                        },
                        {
                            value: '整改',
                            label: '整改',
                        },
                        {
                            value: '巡检',
                            label: '巡检',
                        },
                    ],
                },
                sort: 1,
                rules: [
                    {
                        required: true,
                    },
                ],
            },
        },
        {
            title: '计划编号',
            dataIndex: 'planCode',
            width: 120,

            formItemProps: {
                hidden: true,
            },
            descItemProps: {
                hidden: true,
            },
        },
        {
            title: '计划名称',
            dataIndex: 'name',
            width: 220,
            ellipsis: true,
            formItemProps: {
                sort: 0,
                rules: [
                    {
                        required: true,
                    },
                ],
            },
        },
        {
            title: '任务类型',
            dataIndex: 'type',
            width: 120,
            editable: true,
            formItemProps: {
                sort: 4,
                rules: [
                    {
                        required: true,
                    },
                ],
                control: ControlMapType.Select,
                controlProps: {
                    mode: 'multiple',
                    options: [
                        {
                            label: '临时任务',
                            value: '临时任务',
                        },
                        {
                            label: '周期任务',
                            value: '周期任务',
                        },
                    ],
                },
            },
        },

        {
            title: '任务表单',
            hidden: true,
            dataIndex: 'taskFromId',
            formItemProps: {
                sort: 3,
                hidden: true,
            },
            descItemProps: {
                hidden: true,
            },
        },

        {
            title: '任务周期',
            dataIndex: 'gap',
            width: 180,
            formItemProps: {
                hidden: true,
            },
            descItemProps: {
                hidden: true,
            },
            customRender: ({ record }: any) => record?.periodDesc || '-',
        },
        {
            title: '起始时间',
            dataIndex: [['taskStartTime'], ['taskEndTime']],
            editable: true,
            type: 'date-range',
            formItemProps: {
                name: 'taskEffectTime',
                control: ControlMapType.RangePicker,
            },
            width: 400,
        },
        {
            title: '开始日期',
            dataIndex: 'taskStartTime',
            type: 'date',
            width: 220,
            ellipsis: true,
            formItemProps: {
                control: ControlMapType.DatePicker,
            },
        },
        {
            title: '结束日期',
            dataIndex: 'taskEndTime',
            type: 'date',
            width: 220,
            ellipsis: true,
            formItemProps: {
                control: ControlMapType.DatePicker,
            },
        },

        {
            title: '设备总数',
            width: 100,
            dataIndex: 'equNum',
            formItemProps: {
                hidden: true,
            },
            descItemProps: {
                hidden: true,
            },
        },
        {
            title: '计划状态',
            dataIndex: 'status',
            width: 100,
            formItemProps: {
                hidden: true,
            },
            descItemProps: {
                hidden: true,
            },
            customRender: ({ record }: any) => record?.statusDesc || '-',
        },
        {
            title: '操作人员',
            dataIndex: 'updaterName',
            width: 220,
            ellipsis: true,

            formItemProps: {
                hidden: true,
            },
            descItemProps: {
                hidden: true,
            },
        },
        {
            title: '操作时间',
            dataIndex: 'updateTime',
            width: 220,
            ellipsis: true,

            type: 'date',
            timeFormat,
            formItemProps: {
                hidden: true,
            },
            descItemProps: {
                hidden: true,
            },
        },
        {
            title: '备注',
            dataIndex: ['remark', 'text', 'content'],
            width: 220,
            ellipsis: true,
            formItemProps: {
                sort: 6,
                control: ControlMapType.TextArea,
                colProps: {
                    span: 20,
                },
                labelCol: {
                    span: 2,
                },
            },
        },
    ]
})

const queryFormItem = computed((): TableProps['queryFormItems'] => {
    return [
        {
            label: '签署乙方',
            name: 'name',
        },
        {
            label: '合同开始时间',
            name: 'effectiveStartTime',
            control: ControlMapType.RangePicker,
        },
        {
            label: '合同类型',
            name: 'typeId',
            control: ControlMapType.Select,
            controlProps: {
                options: [
                    {
                        value: 1,
                        label: '类型1',
                    },
                    {
                        value: 2,
                        label: '类型2',
                    },
                    {
                        value: 3,
                        label: '类型3',
                    },
                ],
            },
        },
        {
            label: '履约状态',
            name: 'performanceStatus',
            control: ControlMapType.Select,
            controlProps: {
                fieldNames: {
                    label: 'name',
                    value: 'id',
                },
                options: [
                    {
                        id: 1,
                        name: '维修',
                    },
                    {
                        id: 2,
                        name: '整改',
                    },
                    {
                        id: 3,
                        name: '巡检',
                    },
                ],
            },
        },
    ]
})
</script>

<style scoped></style>
