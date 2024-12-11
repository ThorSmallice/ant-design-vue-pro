import { TableProps } from '@src/components'

export const TableConfig: TableProps = {
    tableTextConfig: {
        modalTitle: {
            create: '新增',
            update: '编辑',
            detail: '详情',
        },
        message: {
            createSuccess: '新增成功!',
            createError: '新增失败!',
            updateSuccess: '编辑成功!',
            updateError: '编辑失败!',
            deleteSuccess: '删除成功!',
            deleteError: '删除失败!',
        },
    },
    detailDescItemEmptyText: '-',
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
    queryFormSubmitBtnProps: {
        type: 'primary',
        children: '查询',
    },
    queryFormResetBtnProps: {
        children: '重置',
    },
}

const GlobalComponentDefalutPropsConfig = {
    Table: TableConfig,
}

export default GlobalComponentDefalutPropsConfig
