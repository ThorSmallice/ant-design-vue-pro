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

<script setup lang="tsx">
import config from '@config/index'
import { Table as ATable, Space, TableColumnProps } from 'ant-design-vue'
import {
    computed,
    inject,
    mergeProps,
    provide,
    ref,
    toRef,
    toRefs,
    useTemplateRef,
    watch,
} from 'vue'
import { ATableSlotsWhiteList, mergeConfigProps, TableProps, TableSlots } from './index.type'
import useColumns from './useColumns'
import useCU from './useCU'
import useDataSource from './useDataSource'
import useDetail from './useDetail'
import useExport from './useExport'
import useImport from './useImport'
import usePagination from './usePagination'
import useParams from './useParams'
import useQueryForm from './useQueryForm'
import { merge } from 'es-toolkit'
defineOptions({
    name: 'DbTable',
})

const tableRef = useTemplateRef('tableRef')
const slots = defineSlots<TableSlots>()

const emits = defineEmits<{}>()
const aTableSlots = computed(() => {
    return Object?.keys?.(slots)?.filter?.(
        (key: string) => ATableSlotsWhiteList?.indexOf(key) !== -1
    )
})
const GlobalDefaultProps: any = inject('GlobalDefaultProps')
const onResizeColumn = (w: number, col: TableColumnProps) => {
    col['width'] = w
}

const props = withDefaults(defineProps<TableProps>(), {
    // ...mergeConfigProps(config.Table),
    params: () => ({}),
    apis: () => ({}),
})

const resProps = $(
    computed(() => {
        console.log('🚀 ~ GlobalDefaultProps:', GlobalDefaultProps, props)

        return {
            ...GlobalDefaultProps.table,
            ...props,
        }
    })
)
console.log('🚀 ~ resProps ~ resProps:', resProps)

const {
    apis,
    full,
    params,
    requestParamsFormatter,

    fieldsNames,
    onSourceSuccess,
    onSourceError,
    onBeforeRowEditBackFill,
    onGetRowDetail,
    onBeforeCuFormSubmit,
    onCuFormSubmitSuccess,
    onCuFormSubmitError,
    onBeforeRowDelete,
    onRowDeleteSuccess,
    onRowDeleteError,

    ownPagin,
    ownPaginProps,

    queryForm,
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

    columns,
    indexColumn,
    controlColumn,
    columnsAlign,
    columnsTitleNoWrap,
    columnsTimeFormat,
    columnsEmptyText,
    controlColumnBtns,

    cuFormProps,
    cuFormRules,
    cuFormModalProps,
    cuFormRowProps,
    cuFormColProps,
    cuFormBackFillByGetDetail,
    tableTextConfig,

    detailBackFillByGetDetail,
    detailDescItemEmptyText,
    detailDescItemProps,
    detailDescItemTimeFormat,

    ciesBtns,
    ciesBtnsInQueryForm,
    createBtn,
    importBtn,
    exportBtn,
} = $(resProps)

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
