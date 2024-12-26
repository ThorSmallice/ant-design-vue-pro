<template>
    <div :class="['db-table', full ? 'db-table-full' : null]" ref="tableRef">
        <div :class="['db-table-query-form']" v-if="queryForm">
            <QueryForm></QueryForm>
        </div>

        <div :class="['db-table-cies-btns-wrap']" v-if="ciesBtns">
            <Space>
                <template v-if="slots?.customCiesBtns">
                    <slot
                        name="customCiesBtns"
                        :CreateBtn="CreateBtn"
                        :ImportBtn="ImportBtn"
                        :ExportDropDown="ExportDropDown"
                        :ExportCurrentPageBtn="ExportCurrentPageBtn"
                        :ExportAllBtn="ExportAllBtn"
                    ></slot>
                </template>
                <template v-else>
                    <CreateBtn v-if="createBtn"></CreateBtn>
                    <ImportBtn v-if="importBtn"></ImportBtn>
                    <ExportDropDown v-if="exportDropdown"></ExportDropDown>
                </template>
            </Space>
        </div>

        <div :class="['db-table-wrap']" ref="tableWrapRef">
            <ATable
                :rowKey="rowKey"
                :pagination="false"
                :columns="resColumns"
                :data-source="source"
                :loading="loading"
                @resize-column="onResizeColumn"
                :scroll="resScroll"
                :table-layout="tableLayout"
                :showHeader="showHeader"
                v-bind="o"
            >
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

<script setup lang="tsx" async>
import config from '@config/index'
import { Table as ATable, Space, TableColumnProps } from 'ant-design-vue'
import { computed, reactive, ref, toRaw, unref, useTemplateRef, watch } from 'vue'
import { ATableSlotsWhiteList, TableProps, TableSlots } from './index.type'
import useAutoSize from './useAutoSize'
import useColumns from './useColumns'
import useCU from './useCU'
import useDataSource from './useDataSource'
import useDetail from './useDetail'
import useExport from './useExport'
import useImport from './useImport'
import usePagination from './usePagination'
import useParams from './useParams'
import useQueryForm from './useQueryForm'

defineOptions({
    name: 'DbTable',
})

const tableRef = ref()
const tableWrapRef = ref()
const slots = defineSlots<TableSlots>()

const emits = defineEmits<{
    (e: 'cuFormModelChange', currentModel: any, prevModel: any): void
    (e: 'cuFormEditStatusChange', cuFormEditStatus: boolean): void
}>()
const aTableSlots = computed(() => {
    return Object?.keys?.(slots)?.filter?.(
        (key: string) => ATableSlotsWhiteList?.indexOf(key) !== -1
    )
})
const onResizeColumn = (w: number, col: TableColumnProps) => {
    col['width'] = w
}

const {
    apis,
    full = config.table.full,
    params,
    rowKey = 'id',
    requestParamsFormatter = config.table.requestParamsFormatter,
    fieldsNames = config.table.fieldsNames,
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
    queryFormProps = config.table.queryFormProps,
    queryFormSubmitWithReset = config.table.queryFormSubmitWithReset,
    queryFormRowProps = config.table.queryFormRowProps,
    queryFormColProps = config.table.queryFormColProps,
    queryFormFlexProps = config.table.queryFormFlexProps,
    queryFormSubmitBtn = config.table.queryFormSubmitBtn,
    queryFormResetBtn = config.table.queryFormResetBtn,
    queryFormSubmitBtnProps = config.table.queryFormSubmitBtnProps,
    queryFormResetBtnProps = config.table.queryFormResetBtnProps,
    queryFormTimeFormat = config.table.queryFormTimeFormat,

    columns,
    indexColumn = config.table.indexColumn,
    indexColumnWidth = config.table.indexColumnWidth,
    indexColumnProps = config.table.indexColumnProps,
    controlColumn = config.table.controlColumn,
    controlColumnWidth = config.table.controlColumnWidth,
    controlColumnWidthProps = config.table.controlColumnWidthProps,

    columnsEllipsis = config.table.columnsEllipsis,
    columnsAlign = config.table.columnsAlign,
    columnsTitleNoWrap = config.table.columnsTitleNoWrap,
    columnsTimeFormat = config.table.columnsTimeFormat,
    columnsEmptyText = config.table.columnsEmptyText,
    controlColumnBtns = config.table.controlColumnBtns,

    cuFormProps = config.table.cuFormProps,
    cuFormRules,
    cuFormDefaultValues,
    cuFormModalProps = config.table.cuFormModalProps,
    cuFormRowProps = config.table.cuFormRowProps,
    cuFormColProps = config.table.cuFormColProps,
    cuFormBackFillByGetDetail = config.table.cuFormBackFillByGetDetail,
    tableTextConfig = config.table.tableTextConfig,

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
    exportDropdown = config.table.exportDropdown,
    exportCurrentPageBtn = config.table.exportCurrentPageBtn,
    exportAllBtn = config.table.exportAllBtn,
    scroll = config.table.scroll,
    tableLayout = config.table.tableLayout,
    dataSource,

    exportFileByParams = config.table.exportFileByParams,
    exportFileParamsFormat = config.table.exportFileParamsFormat,
    exportFileName,
    onExportRequestSuccess = config.table.onExportRequestSuccess,
    onExportSuccess = config.table.onExportSuccess,
    onExportError = config.table.onExportError,

    importUploadProps = config.table.importUploadProps,
    importFileParamsFormat = config.table.importFileParamsFormat,
    onImportSuccess = config.table.onImportSuccess,
    onImportError = config.table.onImportError,
    showHeader = null,

    autoSizeConfig = config.table.autoSizeConfig,
    minScollHeight = config.table.minScollHeight,
    ...o
} = defineProps<TableProps>()

const { x, y } = $$(
    useAutoSize({
        scroll,
        autoSizeConfig,
        minScollHeight,
        wrapContainer: tableWrapRef,
        subtractEleClasses: [
            '.ant-table-title',
            '.ant-table-thead',
            '.ant-table-footer',
            '.ant-table-summary',
        ],
        tableRealRegionClasses: ['.ant-table-tbody'],
    })
)
const resScroll = computed((): { x: any; y: any } => {
    return { x: x.value, y: y.value }
})

const ciesBtnsVNode = ref({})

const { QueryForm, QueryFormInstance, queryFormParams } = $$(
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
        ciesBtnsInQueryForm,
        ciesBtnsVNode,
    })
)

const { resultParams, pagination } = $$(
    useParams({
        params,
        ownPagin,
        requestParamsFormatter,
        fieldsNames,
        queryFormTimeFormat,
        queryFormParams,
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
        exportFileParamsFormat,
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
        dataSource,
    })
)
const { ImportBtn } = $$(
    useImport({
        apis,
        tableTextConfig,
        importBtn,
        importUploadProps,
        importFileParamsFormat,
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

const { resColumns }: any = $$(
    useColumns({
        columns,
        columnsAlign,
        columnsEllipsis,
        columnsTitleNoWrap,
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
    })
)

const Pagination = $$(usePagination({ pagination, total, ownPaginProps }))

watch(
    [CreateBtn, ImportBtn, ExportDropDown, ExportCurrentPageBtn, ExportAllBtn],
    () => {
        ciesBtnsVNode.value = {
            CreateBtn,
            ImportBtn,
            ExportDropDown,
            ExportCurrentPageBtn,
            ExportAllBtn,
        }
    },
    {
        immediate: true,
    }
)
defineExpose({
    source,
    updateSource,
    QueryForm,
    QueryFormInstance,
    Pagination,
    cuModalFormIsEdit: toRaw(cuModalFormIsEdit),
    cuFormModel: toRaw(cuFormModel),
    CreateBtn,
    ImportBtn,
    ExportDropDown,
    ExportCurrentPageBtn,
    ExportAllBtn,
})
</script>

<style scoped></style>
