import { TableProps } from '@src/components'
import {
    CloudDownloadOutlined,
    ExportOutlined,
    ImportOutlined,
    PlusOutlined,
    SearchOutlined,
    SettingOutlined,
    UndoOutlined,
} from '@ant-design/icons-vue'

export const TableConfig: TableProps = {
    showSorterTooltip: true,
    full: false,
    autoRequest: {
        immediate: true,
    },
    scroll: {
        x: 'max-content',
        y: 'auto',
        scrollToFirstRowOnChange: true,
    },
    tableLayout: 'fixed',
    fieldsNames: {
        page: 'page',
        pageSize: 'pageSize',
        total: 'total',
        list: 'list',
        details: 'data',
        export: 'data',
        template: 'data',
        editCellTempKey: 'id',
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
    onExportRequestSuccess: null,
    onExportSuccess: null,
    onExportError: null,
    importFileParamsFormatter: null,
    exportFileParamsFormatter: null,
    onImportSuccess: null,
    onImportError: null,
    downloadTempalteParamsFormatter: null,
    onTemplateRequestSuccess: null,
    onTemplateDownloadSuccess: null,
    onTemplateDownloadError: null,

    showOwnPager: true,
    ownPagin: true,
    ownPaginProps: {
        showSizeChanger: true,
        showTotal: (total) => `共${total}条数据`,
        showQuickJumper: true,
        defaultPageSize: 10,
    },

    queryForm: true,

    queryFormProps: null,
    queryFormSubmitWithReset: false,
    queryFormRowProps: null,
    queryFormColProps: null,
    queryFormFlexProps: null,
    queryFormSubmitBtn: true,
    queryFormResetBtn: true,
    queryFormTimeFormat: 'YYYY-MM-DD HH:mm:ss',
    queryFormSubmitBtnProps: {
        type: 'primary',
        children: '查询',
        icon: <SearchOutlined />,
    },
    queryFormResetBtnProps: {
        children: '重置',
        icon: <UndoOutlined />,
    },
    queryFormControlFormItemProps: {
        class: 'w-auto',
    },
    queryFormItemsControlProps: null,
    indexColumn: true,
    indexColumnWidth: 80,
    indexColumnProps: {},

    controlColumn: true,
    controlColumnWidth: 220,
    controlColumnWidthProps: {},
    columnsAlign: 'left',
    columnsEllipsis: true,
    columnsSorter: true,
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
            details: '详情',
        },
        message: {
            createSuccess: '新增成功!',
            createError: '新增失败!',
            updateSuccess: '编辑成功!',
            updateError: '编辑失败!',
            deleteSuccess: '删除成功!',
            deleteError: '删除失败!',
            exportSuccess: '导出成功!',
            exportError: '导出失败!',
            importSuccess: '导入成功!',
            importError: '导入失败!',
            downloadTemplateSuccess: '模板下载成功!',
            downloadTemplateError: '模板下载失败!',
        },
    },

    detailBackFillByGetDetail: true,
    detailDescItemEmptyText: '-',
    detailDescItemProps: null,
    detailDescItemTimeFormat: 'YYYY-MM-DD HH:mm:ss',
    detailModalProps: {},
    detailDescProps: {},
    ciesBtns: true,
    ciesBtnsInQueryForm: false,
    createBtn: {
        children: '新增',
        icon: <PlusOutlined />,
    },
    importBtn: {
        children: '导入',
        icon: <ImportOutlined />,
    },
    exportBtnMode: 'dropdown',
    exportDropdown: {
        children: '导出',
        buttonProps: {
            icon: <ExportOutlined />,
        },
    },

    exportCurrentPageBtn: {
        children: '导出当前页',
    },
    exportAllBtn: {
        children: '导出全部',
    },
    downloadTemplateBtn: {
        children: '下载模板',
        icon: <CloudDownloadOutlined />,
    },
    columnSettingBtn: {
        children: '',
        buttonProps: {
            title: '列配置',
            icon: <SettingOutlined />,
        },
    },
    exportFileByParams: false,
    importUploadProps: null,
    autoSizeConfig: null,
    minScollHeight: 50,
}
