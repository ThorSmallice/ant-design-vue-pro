<template>
    <div :class="['d-table', full ? 'd-table-full' : null]">
        <div :class="['d-table-query-form']" v-if="queryForm">
            <QueryForm></QueryForm>
        </div>
        <div :class="['d-table-wrap']">
            <ATable
                :pagination="false"
                :columns="resColumns"
                :data-source="source"
                :loading="loading"
                @resize-column="onResizeColumn"
            >
                <template #headerCell="{ title, column }">
                    <slot name="headerCell" :title="title" :column="column"></slot>
                </template>
            </ATable>
        </div>
        <div :class="['d-table-pagination-wrap']" v-if="ownPagin">
            <Pagination></Pagination>
        </div>
    </div>
</template>

<script setup lang="tsx">
import config from '@config/index'
import { Table as ATable, TableColumnProps } from 'ant-design-vue'
import { mergeConfigProps, TableProps, TableSlots } from './index.type'
import useColumns from './useColumns'
import useDataSource from './useDataSource'
import usePagination from './usePagination'
import useParams from './useParams'
import useQueryForm from './useQueryForm'
import { useSlots } from 'vue'
defineOptions({
    name: 'DTable',
})

defineSlots<TableSlots>()

// const slots = $(useSlots())

const onResizeColumn = (w: number, col: TableColumnProps) => {
    col['width'] = w
}
const {
    columns,
    apis,
    params,
    requestParamsFormatter,
    fieldsNames,
    ownPagin,
    ownPaginProps,

    onSourceSuccess,
    onSourceError,

    queryForm,
    queryFormItem,
    queryFormProps,
    queryFormRules,
    queryUseFormOptions,
    queryFormRowProps,
    queryFormColProps,
    queryFormFlexProps,
    queryFormSubmitBtn,
    queryFormResetBtn,
} = $(
    withDefaults(defineProps<TableProps>(), {
        ...mergeConfigProps(config.Table),
        full: false,
        params: () => ({}),
        apis: () => ({}),
        ownPagin: true,
        queryForm: true,
        queryFormSubmitBtn: true,
        queryFormResetBtn: true,
    })
)

const { resColumns }: any = $$(
    useColumns({
        columns,
    })
)

const { QueryForm, QueryFormInstance, queryFormParams } = $$(
    useQueryForm({
        queryFormItem,
        queryFormProps,
        queryFormRules,
        queryUseFormOptions,
        queryFormRowProps,
        queryFormColProps,
        queryFormFlexProps,
        queryFormSubmitBtn,
        queryFormResetBtn,
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

const Pagination = $$(usePagination({ pagination, total, ownPaginProps }))

defineExpose({
    QueryForm,
    QueryFormInstance,
    updateSource,
    Pagination,
})
</script>

<style scoped></style>
