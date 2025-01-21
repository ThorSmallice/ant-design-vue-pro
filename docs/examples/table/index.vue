<template>
    <Table
        ref="tableRef"
        :full="true"
        export-file-name="测试.xlsx"
        :cu-form-default-values="initalValues"
        :cu-form-props="{
            labelCol: {
                span: 6,
            },
        }"
        :columns="columns"
        :query-form-items="queryFormItem"
        @before-cu-form-submit="beforeSubmit"
        :apis="{
            list: getContractManagePageApi,
            details: getContractManageDetailApi,
            export: exportApi,
            import: importApi,
            template: templateApi,
            create: createContractManagePageApi,
        }"
        v-model:value="dataSource"
        @before-row-edit-back-fill="beforeEdit"
        :params="params"
        @cu-form-model-change="onModelChange"
        @source-success="onsuccess"
        :downloadTempalteParamsFormatter="downloadTempalteParamsFormatter"
        templateFileName="模板.xlsx"
        :onBeforeRequestDetails="onBeforeRequestDetails"
        @cell-edit-confirm="cellEditConfirm"
    >
    </Table>
</template>

<script setup lang="tsx">
import { ControlMapType, Table, TableProps, TableConfig } from 'antd-vue-dbthor'
import dayjs, { Dayjs } from 'dayjs'
import { computed, ref, toRaw, watch } from 'vue'
import request from 'axios'
const dataSource = ref([])

watch(
    dataSource,
    (cur, prev) => {
        console.log('🚀 ~ watch ~ prev:', cur, prev)
    },
    { deep: true }
)
const cellEditConfirm = async () => {}
const tableRef = ref()
const abc = ref()
TableConfig.fieldsNames.page = 'pageNo'
const onBeforeRequestDetails = async (record: any) => {
    return {
        id: record?.id,
        companyId: record?.companyId,
    }
}
const onModelChange = (a) => {
    abc.value = a.status
}
const onsuccess = async (res) => {
    return {
        list: res?.data?.data?.list,
        total: res?.data?.data?.total,
    }
}
const downloadTempalteParamsFormatter = ({ companyId }) => {
    return {
        companyId,
    }
}
const axios = request.create()
axios.interceptors.request.use(async (req) => {
    req.headers['Authorization'] = 'Bearer 14724419e5ba41efaae64d91bed10d7b'
    req.headers['tenant-id'] = '1820759402696224769'
    return req
})
axios.interceptors.response.use(async (res) => {
    return res
})
const getContractManagePageApi = async (params?: any, config?: any) =>
    await axios.get('/admin-api/wms/task-plan/page', { params })

const exportApi = async (params) => {
    return axios.get('/admin-api/wms/contract/export-excel', { params, responseType: 'blob' })
}
const templateApi = async (params) => {
    return axios.get('/admin-api/basic/config/template/get', { params, responseType: 'blob' })
}
const getContractManageDetailApi = async (params?: any) =>
    await axios.get('/admin-api/wms/task-plan/get', { params })

const createContractManagePageApi = async (data) =>
    await axios.post('/admin-api/wms/task-plan/create', { data })

const importApi = async (data) => {
    return axios.post(
        '/admin-api/basic/config/import-excel',
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
            title: '签署乙方',
            dataIndex: 'signatory',
            width: 80,
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
            title: '合同类型',
            dataIndex: 'typeId',
            width: 120,

            customRender: ({ record }: any) => record?.type || '-',
        },
        {
            title: '合同名称',
            dataIndex: 'name',
            width: 240,
            editable: true,
            formItemProps: {
                sort: 2,
                rules: [
                    {
                        required: true,
                    },
                ],
                controlProps: {
                    maxlength: 100,
                },
            },
        },
        {
            title: '合同编号',
            dataIndex: ['code', 'number'],
            editable: true,
            width: 200,
            formItemProps: {
                sort: 1,
                controlProps: {
                    maxlength: 50,
                },
            },
        },
        {
            title: '履约状态',
            width: 120,
            dataIndex: 'performanceStatus',
            formItemProps: {
                hidden: true,
            },
            descItemProps: {
                hidden: true,
            },
        },
        {
            title: '合同有效时间',
            dataIndex: 'taskStartTime',
            editable: true,
            type: 'date',
            width: 240,
            formItemProps: {
                sort: 4,
                control: ControlMapType.DatePicker,
                // name: 'effectiveTime',
                rules: [
                    {
                        required: true,
                    },
                ],
            },
            // customRender: ({ record }: any) => {
            //     return (
            //         dayjs?.(record?.taskStartTime)?.format?.(timeFormat) +
            //         '~' +
            //         dayjs?.(record?.taskEndTime)?.format?.(timeFormat)
            //     )
            // },
        },
        {
            title: '签署日期',
            dataIndex: 'signature',
            width: 200,
            formItemProps: {
                sort: 5,
                control: ControlMapType.DatePicker,
            },
            type: 'date',
            timeFormat,
        },
        {
            title: '合同状态',
            dataIndex: 'status',
            hidden: true,
        },
        {
            title: '合同负责人',
            dataIndex: 'person',
            hidden: true,
        },
        {
            title: '到期提醒',
            dataIndex: 'reminder',
            hidden: true,
            formItemProps: {
                control: ControlMapType.InputNumber,
                controlProps: {
                    addonAfter: '天',
                    precision: 0,
                    step: 1,
                },
            },
        },
        {
            title: '负责人联系电话',
            dataIndex: 'phone',
            hidden: true,
        },
        {
            title: '操作人员',
            dataIndex: 'operatorName',
            width: 200,
            formItemProps: {
                hidden: true,
            },
        },
        {
            title: '操作时间',
            dataIndex: 'updateTime',
            width: 200,
            formItemProps: {
                hidden: true,
            },
        },
        {
            title: '备注',
            dataIndex: 'remark',
            width: 200,
            ellipsis: true,
            formItemProps: {
                control: ControlMapType.TextArea,
                colProps: {
                    span: 20,
                },
                labelCol: {
                    span: 3,
                },
            },
        },
        {
            title: '附件',
            dataIndex: 'files',
            hidden: true,
            formItemProps: {
                colProps: {
                    span: 20,
                },
                labelCol: {
                    span: 3,
                },
            },
        },
    ]
})

const queryFormItem = computed((): TableProps['queryFormItems'] => {
    return [
        {
            label: '签署乙方',
            name: ['signatory', 'name'],
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
        },
        {
            label: '履约状态',
            name: 'performanceStatus',
            control: ControlMapType.Select,
        },
    ]
})

const beforeSubmit = async ({ typeId, signature, effectiveTime, ...vals }: any) => {
    return {
        ...vals,
        companyId,
        effectiveStartTime: dayjs(effectiveTime[0])?.format(timeFormat),
        effectiveEndTime: dayjs(effectiveTime[1])?.format(timeFormat),
        signature: dayjs(signature)?.format(timeFormat),
        typeId: typeId?.value,
        type: typeId?.label,
    }
}

const beforeEdit = async ({ typeId, type, effectiveStartTime, effectiveEndTime, ...vals }) => {
    return {
        ...vals,
        typeId: {
            label: type,
            value: typeId,
        },
        effectiveTime: [dayjs(effectiveStartTime), dayjs(effectiveEndTime)],
    }
}

const requestParamsFormatter = async ({ effectiveStartTime, ...vals }) => {
    return {
        effectivesStartTime: effectiveStartTime?.map?.((item, i) =>
            i == 0
                ? dayjs(item)?.startOf('day')?.format('YYYY-MM-DD HH:mm:ss')
                : dayjs(item)?.endOf('day')?.format?.('YYYY-MM-DD HH:mm:ss')
        ),
        ...vals,
    }
}
const stopTasks = async ({ id }: any) => {}
</script>

<style scoped></style>
