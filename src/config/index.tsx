import { TableProps } from '@src/components'

export const TableConfig: TableProps = {
    cuFormBackFillByGetDetail: true,
    cuFormModalProps: {
        width: '65%',
    },
    cuFormProps: {
        labelCol: {
            span: 10,
        },
    },
    cuFormColProps: {
        span: 8,
    },
    columnsTitleNoWrap: true,
    columnsAlign: 'left',
    createBtn: {
        children: '新增',
    },
    importBtn: {
        children: '导入',
    },
    exportBtn: {
        children: '导出',
    },
    controlColumnBtns: {
        detail: {
            type: 'link',
            children: '详情',
        },
        edit: {
            type: 'link',
            children: '编辑',
        },
        delete: {
            type: 'link',
            danger: true,
            children: '删除',
        },
    },
    columnsEmptyText: '-',
    columnsTimeFormat: 'YYYY-MM-DD HH:mm:ss',
    fieldsNames: {
        list: 'list',
        page: 'page',
        pageSize: 'pageSize',
        total: 'total',
        detail: 'data',
    },
}

const GlobalComponentDefalutPropsConfig = {
    Table: TableConfig,
}

export default GlobalComponentDefalutPropsConfig
