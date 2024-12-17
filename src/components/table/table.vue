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
                        :ExportBtn="ExportBtn"
                    ></slot>
                </template>
                <template v-else>
                    <CreateBtn v-if="createBtn"></CreateBtn>
                    <ImportBtn v-if="importBtn"></ImportBtn>
                    <ExportBtn v-if="exportBtn"></ExportBtn>
                </template>
            </Space>
        </div>

        <div :class="['db-table-wrap']">
            <ATable
                :pagination="false"
                :columns="resColumns"
                :data-source="source"
                :loading="loading"
                @resize-column="onResizeColumn"
                :scroll="scroll"
                :table-layout="tableLayout"
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
import { computed, ref, watch } from 'vue'
import { ATableSlotsWhiteList, TableProps, TableSlots } from './index.type'
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

const tableRef = ref<HTMLDivElement>()

const slots = defineSlots<TableSlots>()

const emits = defineEmits<{}>()
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
    requestParamsFormatter = config.table.requestParamsFormatter,
    fieldsNames = config.table.fieldsNames,
    onSourceSuccess = config.table.onSourceSuccess,
    onSourceError = config.table.onSourceError,
    onBeforeRowEditBackFill = config.table.onBeforeRowEditBackFill,
    onGetRowDetail = config.table.onGetRowDetail,
    onBeforeCuFormSubmit = config.table.onBeforeCuFormSubmit,
    onCuFormSubmitSuccess = config.table.onCuFormSubmitSuccess,
    onCuFormSubmitError = config.table.onCuFormSubmitError,
    onBeforeRowDelete = config.table.onBeforeRowDelete,
    onRowDeleteSuccess = config.table.onRowDeleteSuccess,
    onRowDeleteError = config.table.onRowDeleteError,

    ownPagin = config.table.ownPagin,
    ownPaginProps = config.table.ownPaginProps,

    queryForm = config.table.queryForm,
    queryFormItem,
    queryFormProps = config.table.queryFormProps,
    queryFormSubmitWithReset = config.table.queryFormSubmitWithReset,
    queryFormRowProps = config.table.queryFormRowProps,
    queryFormColProps = config.table.queryFormColProps,
    queryFormFlexProps = config.table.queryFormFlexProps,
    queryFormSubmitBtn = config.table.queryFormSubmitBtn,
    queryFormResetBtn = config.table.queryFormResetBtn,
    queryFormSubmitBtnProps = config.table.queryFormSubmitBtnProps,
    queryFormResetBtnProps = config.table.queryFormResetBtnProps,

    columns,
    indexColumn = config.table.indexColumn,
    indexColumnWidth = config.table.indexColumnWidth,
    controlColumn = config.table.controlColumn,
    controlColumnWidth = config.table.controlColumnWidth,
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

    ciesBtns = config.table.ciesBtns,
    ciesBtnsInQueryForm = config.table.ciesBtnsInQueryForm,
    createBtn = config.table.createBtn,
    importBtn = config.table.importBtn,
    exportBtn = config.table.exportBtn,
    scroll = config.table.scroll,
    tableLayout = config.table.tableLayout,
    dataSource,

    showHeader,

    ...o
} = defineProps<TableProps>()

const ciesBtnsVNode = ref({})
const { ImportBtn } = $$(useImport())
const { ExportBtn } = $$(useExport())

const { QueryForm, QueryFormInstance, queryFormParams } = $$(
    useQueryForm({
        queryFormItem,
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
        queryFormParams,
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
const { CreateBtn, CUModalForm, openCUModalForm, cuFormModel, cuModalLoading, cuModalFormIsEdit } =
    $$(
        useCU({
            apis,
            createBtn,
            columns,
            cuFormProps,

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
        })
    )
const { openDetailModal, detailModalLoading, detailsDataSource, DetailModal } = $$(
    useDetail({
        columns,
        detailDescItemEmptyText,
        detailDescItemProps,
        detailDescItemTimeFormat,
        tableTextConfig,
    })
)

const { resColumns }: any = $$(
    useColumns({
        columns,
        columnsAlign,
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
    })
)

const Pagination = $$(usePagination({ pagination, total, ownPaginProps }))

watch(
    [CreateBtn, ImportBtn, ExportBtn],
    () => {
        ciesBtnsVNode.value = { CreateBtn, ImportBtn, ExportBtn }
    },
    {
        immediate: true,
    }
)
defineExpose({
    QueryForm,
    QueryFormInstance,
    updateSource,
    Pagination,
    cuModalFormIsEdit,
    CreateBtn,
    ImportBtn,
    ExportBtn,
})
</script>

<style scoped></style>
