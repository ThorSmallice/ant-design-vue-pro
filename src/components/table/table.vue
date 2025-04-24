<template>
    <div :class="['db-table', full ? 'db-table-full' : null]" ref="tableRef">
        <div :class="['db-table-query-form']" v-if="queryForm">
            <QueryForm></QueryForm>
        </div>

        <div :class="['db-table-cies-btns-wrap']" v-if="!ciesBtnsInQueryForm && (ciesBtns)">
            <template v-if="slots?.customCiesBtns">
                <slot name="customCiesBtns" :CreateBtn="CreateBtn" :ImportBtn="ImportBtn"
                    :ExportDropDown="ExportDropDown" :ExportCurrentPageBtn="ExportCurrentPageBtn"
                    :ExportAllBtn="ExportAllBtn" :ColumnSettingBtn="ColumnSettingBtn"
                    :DownloadTemplateBtn="DownloadTemplateBtn"></slot>
            </template>
            <template v-else>
                <Flex justify="space-between">
                    <Flex :gap="8">
                        <CreateBtn></CreateBtn>
                        <ImportBtn></ImportBtn>

                        <ExportDropDown v-if="exportBtnMode === 'dropdown'"></ExportDropDown>
                        <ExportAllBtn v-if="exportBtnMode === 'all'"></ExportAllBtn>
                        <DownloadTemplateBtn></DownloadTemplateBtn>
                    </Flex>


                    <ColumnSettingBtn></ColumnSettingBtn>

                </Flex>
            </template>
        </div>

        <div :class="['db-table-wrap']" ref="tableWrapRef">
            <ATable :sticky="true" :rowKey="rowKey" :pagination="false" :columns="resColumns" :data-source="data_source"
                :loading="loading" @resize-column="onResizeColumn" :scroll="resScroll" :table-layout="tableLayout"
                :showHeader="showHeader" :showSorterTooltip="showSorterTooltip" v-bind="o">
                <template v-for="slot in aTableSlots" :key="slot" v-slot:[slot]="temp">
                    <slot :name="slot" v-bind="temp"></slot>
                </template>
            </ATable>
        </div>

        <div :class="['db-table-pagination-wrap']" v-if="ownPagin">
            <Pagination></Pagination>
        </div>
        <component :is="CUModalForm"></component>
        <component :is="DetailModal"></component>
    </div>
</template>

<script setup lang="tsx">
import config from '@config/index'
import { Table as ATable, Flex, TableColumnProps } from 'ant-design-vue'
import { computed, reactive, ref, toValue, unref, watch } from 'vue'
import { TableInstance, TableProps, TableSlots } from './index.d'
import useAutoSize from './useAutoSize'
import useColumns from './useColumns'
import useCU from './useCU'
import useDataSource from './useDataSource'
import useDetail from './useDetail'
import useDownloadTemplate from './useDownloadTemplate'
import useExport from './useExport'
import useImport from './useImport'
import usePagination from './usePagination'
import useParams from './useParams'
import useQueryForm from './useQueryForm'

defineOptions({
    name: 'DbTable',
})
const data_source = defineModel('value', { default: [] })

const tableRef = ref()
const tableWrapRef = ref()
const slots = defineSlots<TableSlots>()

const emits = defineEmits<{
    (e: 'cuFormModelChange', currentModel: any, prevModel: any): void
    (e: 'cuFormEditStatusChange', cuFormEditStatus: boolean): void
    (e: 'queryFormModelChange', currentModel: any, prevModel: any): void
}>()
const aTableSlots = computed(() => {
    return Object?.keys?.(slots)
})

const onResizeColumn = (w: number, col: TableColumnProps) => {
    col['width'] = w
}

const {
    full = config.table.full,
    scroll = config.table.scroll,
    autoSizeConfig = config.table.autoSizeConfig,
    minScollHeight = config.table.minScollHeight,
    autoRequest = config.table.autoRequest,
    autoRequestDependencies = config.table.autoRequestDependencies,
    apis,
    fieldsNames = config.table.fieldsNames,
    tableTextConfig = config.table.tableTextConfig,

    params,

    rowKey = 'id',

    columns,
    columnsTitleNoWrap = config.table.columnsTitleNoWrap,
    columnsAlign = config.table.columnsAlign,
    columnsSorter = config.table.columnsSorter,
    columnsEllipsis = config.table.columnsEllipsis,
    columnsTimeFormat = config.table.columnsTimeFormat,
    columnsEmptyText = config.table.columnsEmptyText,

    indexColumn = config.table.indexColumn,
    indexColumnWidth = config.table.indexColumnWidth,
    indexColumnProps = config.table.indexColumnProps,
    controlColumn = config.table.controlColumn,
    controlColumnWidth = config.table.controlColumnWidth,
    controlColumnWidthProps = config.table.controlColumnWidthProps,
    controlColumnBtns = config.table.controlColumnBtns,

    showSorterTooltip = config.table.showSorterTooltip,
    columnSettingBtn = config.table.columnSettingBtn,
    requestParamsFormatter = config.table.requestParamsFormatter,
    onBeforeRequestSource,
    onBeforeUpdateSourceFromWatch,

    onBeforeRequestDetails = config.table.onBeforeRequestDetails,
    onSourceSuccess = config.table.onSourceSuccess,
    onSourceError = config.table.onSourceError,
    onBeforeRowEditBackFill = config.table.onBeforeRowEditBackFill,
    onGetRowDetail = config.table.onGetRowDetail,
    onBeforeCuFormSubmit = config.table.onBeforeCuFormSubmit,
    onCuFormSubmitSuccess = config.table.onCuFormSubmitSuccess,
    onCuFormSubmitError = config.table.onCuFormSubmitError,
    onCuFormCancel,
    onBeforeRowDelete = config.table.onBeforeRowDelete,
    onRowDeleteSuccess = config.table.onRowDeleteSuccess,
    onRowDeleteError = config.table.onRowDeleteError,

    ownPagin = config.table.ownPagin,
    ownPaginProps = config.table.ownPaginProps,

    queryForm = config.table.queryForm,
    queryFormItems,
    queryFormDefaultValues,
    queryFormProps = config.table.queryFormProps,
    queryFormSubmitWithReset = config.table.queryFormSubmitWithReset,
    queryFormRowProps = config.table.queryFormRowProps,
    queryFormColProps = config.table.queryFormColProps,
    queryFormFlexProps = config.table.queryFormFlexProps,
    queryFormSubmitBtn = config.table.queryFormSubmitBtn,
    queryFormResetBtn = config.table.queryFormResetBtn,
    queryFormSubmitBtnProps = config.table.queryFormSubmitBtnProps,
    queryFormResetBtnProps = config.table.queryFormResetBtnProps,
    queryFormControlFormItemProps = config.table.queryFormControlFormItemProps,
    queryFormTimeFormat = config.table.queryFormTimeFormat,

    cuFormProps = config.table.cuFormProps,
    cuFormRules,
    cuFormDefaultValues,
    cuFormModalProps = config.table.cuFormModalProps,
    cuFormRowProps = config.table.cuFormRowProps,
    cuFormColProps = config.table.cuFormColProps,
    cuFormBackFillByGetDetail = config.table.cuFormBackFillByGetDetail,

    detailBackFillByGetDetail = config.table.detailBackFillByGetDetail,
    detailDescItemEmptyText = config.table.detailDescItemEmptyText,
    detailDescItemProps = config.table.detailDescItemProps,
    detailDescItemTimeFormat = config.table.detailDescItemTimeFormat,
    detailModalProps = config.table.detailModalProps,
    detailDescProps = config.table.detailDescProps,

    ciesBtns = config.table.ciesBtns,
    ciesBtnsInQueryForm = config.table.ciesBtnsInQueryForm,
    createBtn = config.table.createBtn,
    importBtn = config.table.importBtn,
    exportBtnMode = config.table.exportBtnMode,
    exportDropdown = config.table.exportDropdown,
    exportCurrentPageBtn = config.table.exportCurrentPageBtn,
    exportAllBtn = config.table.exportAllBtn,
    tableLayout = config.table.tableLayout,

    exportFileByParams = config.table.exportFileByParams,
    exportFileParamsFormatter = config.table.exportFileParamsFormatter,
    exportFileName,
    onExportRequestSuccess = config.table.onExportRequestSuccess,
    onExportSuccess = config.table.onExportSuccess,
    onExportError = config.table.onExportError,

    importUploadProps = config.table.importUploadProps,
    importFileParamsFormatter = config.table.importFileParamsFormatter,
    onImportSuccess = config.table.onImportSuccess,
    onImportError = config.table.onImportError,
    showHeader = null,
    dataSource,
    templateFileName,
    downloadTemplateBtn = config.table.downloadTemplateBtn,
    downloadTempalteParamsFormatter = config.table.downloadTempalteParamsFormatter,
    onTemplateRequestSuccess = config.table.onTemplateRequestSuccess,
    onTemplateDownloadSuccess = config.table.onTemplateDownloadSuccess,
    onTemplateDownloadError = config.table.onTemplateDownloadError,

    onCellEditConfirm,

    ...o
} = defineProps<TableProps>()

const ciesBtnsVNode = ref({})

const { QueryForm, QueryFormInstance, queryFormParams, queryFormState } = $$(
    useQueryForm({
        queryFormItems,
        queryFormProps,
        queryFormSubmitWithReset,
        queryFormRowProps,
        queryFormColProps,
        queryFormFlexProps,
        queryFormSubmitBtn,
        queryFormResetBtn,
        queryFormSubmitBtnProps,
        queryFormResetBtnProps,
        queryFormControlFormItemProps,
        ciesBtnsInQueryForm,
        ciesBtnsVNode,
        defaultValues: queryFormDefaultValues,
        emits,
    })
)

const state = reactive({
    values: {},
})
const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()
}
const handleReset = (clearFilters) => {
    clearFilters({ confirm: true })
}
const { resultParams, pagination } = $$(
    useParams({
        params,
        ownPagin,
        ownPaginProps,
        requestParamsFormatter,
        fieldsNames,
        queryFormTimeFormat,
        queryFormParams,
    })
)

const { DownloadTemplateBtn } = $$(
    useDownloadTemplate({
        apis,
        fieldsNames,
        templateFileName,
        downloadTemplateBtn,
        downloadTempalteParamsFormatter,
        onTemplateRequestSuccess,
        onTemplateDownloadSuccess,
        onTemplateDownloadError,
        resultParams,
        tableTextConfig,
    })
)
const { ExportDropDown, ExportCurrentPageBtn, ExportAllBtn } = $$(
    useExport({
        apis,
        fieldsNames,
        pagination,
        exportDropdown,
        exportCurrentPageBtn,
        exportAllBtn,
        resultParams,
        exportFileByParams,
        exportFileName,
        exportFileParamsFormatter,
        tableTextConfig,
        onExportSuccess,
        onExportError,
        onExportRequestSuccess,
    })
)
const { source, loading, total, updateSource }: any = $$(
    useDataSource({
        api: apis,
        fieldsNames,
        params: resultParams,
        onSourceSuccess,
        onSourceError,
        autoRequest,
        autoRequestDependencies,
        dataSource,
        onBeforeRequestSource,
        onBeforeUpdateSourceFromWatch,
    })
)

watch(
    () => source,
    () => {
        data_source.value = source?.value
    },
    {
        deep: true,
        immediate: true,
    }
)
const { ImportBtn } = $$(
    useImport({
        apis,
        tableTextConfig,
        importBtn,
        importUploadProps,
        importFileParamsFormatter,
        onImportSuccess,
        onImportError,
        updateSource,
    })
)

const { CreateBtn, CUModalForm, openCUModalForm, cuFormModel, cuModalLoading, cuModalFormIsEdit } =
    $$(
        useCU({
            apis,
            createBtn,
            columns,
            columnsTimeFormat,
            cuFormProps,
            onCuFormCancel,
            cuFormRules,
            cuFormModalProps,
            cuFormRowProps,
            cuFormColProps,
            tableRef,
            onBeforeCuFormSubmit,
            onCuFormSubmitSuccess,
            onCuFormSubmitError,
            updateSource,
            tableTextConfig,
            defaultValues: cuFormDefaultValues,
            emits,
        })
    )
const { openDetailModal, detailModalLoading, detailsDataSource, DetailModal } = $$(
    useDetail({
        columns,
        detailDescItemEmptyText,
        detailDescItemProps,
        detailDescItemTimeFormat,
        tableTextConfig,
        detailModalProps,
        detailDescProps,
    })
)

const { resColumns, ColumnSettingBtn }: any = $$(
    useColumns({
        columns,
        columnsAlign,
        columnsEllipsis,
        columnsTitleNoWrap,
        columnsSorter,
        pagination,
        columnsTimeFormat,
        columnsEmptyText,
        controlColumnBtns,
        apis,
        indexColumn,
        controlColumn,
        openCUModalForm,
        updateSource,
        cuFormModel: cuFormModel as any,
        onBeforeRowEditBackFill,
        cuModalLoading: cuModalLoading as any,
        cuFormBackFillByGetDetail,
        fieldsNames,
        onGetRowDetail,
        onBeforeRowDelete,
        onRowDeleteSuccess,
        onRowDeleteError,
        openDetailModal,
        detailModalLoading: detailModalLoading as any,
        detailsDataSource,
        detailBackFillByGetDetail,
        tableTextConfig,
        indexColumnProps,
        indexColumnWidth,
        controlColumnWidth,
        controlColumnWidthProps,
        columnSettingBtn,
        onBeforeRequestDetails,
        onCellEditConfirm,
        emits,
    })
)

const { Pagination } = $$(usePagination({ pagination, total, ownPaginProps }))

const { x, y, scrollToFirstRowOnChange, onResize } = $$(
    useAutoSize({
        resColumns,
        scroll,
        autoSizeConfig,
        minScollHeight,
        wrapContainer: tableWrapRef,
        subtractEleClasses: [
            '.ant-table-title',
            '.ant-table-thead',
            '.ant-table-footer',
            '.ant-table-summary',
            '.ant-table-pagination',
        ],
        tableRealRegionClasses: ['.ant-table-tbody'],
        tableScrollWrapClass: '.ant-table-body',
        source,
    })
)

const resScroll = computed(() => {
    return {
        x: unref(x.value),
        y: unref(y.value),
        scrollToFirstRowOnChange: unref(scrollToFirstRowOnChange.value),
    }
})

watch(
    [
        CreateBtn,
        ImportBtn,
        ExportDropDown,
        ExportCurrentPageBtn,
        ExportAllBtn,
        ColumnSettingBtn,
        DownloadTemplateBtn,
    ],
    () => {
        ciesBtnsVNode.value = {
            CreateBtn,
            ImportBtn,
            ExportDropDown,
            ExportCurrentPageBtn,
            ExportAllBtn,
            ColumnSettingBtn,
            DownloadTemplateBtn,
        }
    },
    {
        immediate: true,
    }
)

defineExpose<TableInstance>({
    source: source,
    updateSource,
    QueryForm: unref(QueryForm),
    queryFormModel: unref(queryFormState),
    QueryFormInstance: unref(QueryFormInstance),
    Pagination: unref(Pagination),
    cuModalFormIsEdit: cuModalFormIsEdit,
    cuFormModel: unref(cuFormModel),
    CreateBtn: unref(CreateBtn),
    ImportBtn: unref(ImportBtn),
    ExportDropDown: unref(ExportDropDown),
    ExportCurrentPageBtn: unref(ExportCurrentPageBtn),
    ExportAllBtn: unref(ExportAllBtn),
    onResize: unref(onResize),
})
</script>

<style scoped></style>
