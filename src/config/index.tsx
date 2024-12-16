import { TableProps } from '@src/components'

export const TableConfig: TableProps = {
    full: false,
    scroll: {
        x: true,
    },
    fieldsNames: {
        list: 'list',
        page: 'page',
        pageSize: 'pageSize',
        total: 'total',
        detail: 'data',
    },
    onSourceSuccess: null,
    onSourceError: null,
    onBeforeRowEditBackFill: null,
    onGetRowDetail: null,
    onBeforeCuFormSubmit: null,
    onCuFormSubmitSuccess: null,
    onCuFormSubmitError: null,
    onBeforeRowDelete: null,
    onRowDeleteSuccess: null,
    onRowDeleteError: null,

    ownPagin: true,
    ownPaginProps: {
        showSizeChanger: true,
        showTotal: (total) => `共${total}条数据`,
        showQuickJumper: true,
    },

    queryForm: true,

    queryFormProps: null,
    queryFormSubmitWithReset: false,
    queryFormRowProps: null,
    queryFormColProps: null,
    queryFormFlexProps: null,
    queryFormSubmitBtn: true,
    queryFormResetBtn: true,
    queryFormSubmitBtnProps: {
        type: 'primary',
        children: '查询',
    },
    queryFormResetBtnProps: {
        children: '重置',
    },

    indexColumn: true,
    controlColumn: true,
    columnsAlign: 'left',
    columnsTitleNoWrap: true,
    columnsTimeFormat: 'YYYY-MM-DD HH:mm:ss',
    columnsEmptyText: '-',
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

    cuFormProps: {
        labelCol: {
            span: 10,
        },
    },
    cuFormRules: null,
    cuFormModalProps: {
        width: '65%',
        destroyOnClose: true,
    },
    cuFormRowProps: null,
    cuFormColProps: {
        span: 8,
    },
    cuFormBackFillByGetDetail: true,
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

    detailBackFillByGetDetail: true,
    detailDescItemEmptyText: '-',
    detailDescItemProps: null,
    detailDescItemTimeFormat: 'YYYY-MM-DD HH:mm:ss',

    ciesBtns: true,
    ciesBtnsInQueryForm: false,
    createBtn: {
        children: '新增',
    },
    importBtn: {
        children: '导入',
    },
    exportBtn: {
        children: '导出',
    },
}

const GlobalComponentDefalutPropsConfig = {
    table: TableConfig,
}
export default GlobalComponentDefalutPropsConfig
