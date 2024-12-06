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
            ></ATable>
        </div>
        <div :class="['d-table-pagination-wrap']" v-if="ownPagin">
            <Pagination></Pagination>
        </div>
    </div>
</template>

<script setup lang="tsx">
import { Table as ATable, TableColumnProps } from 'ant-design-vue'
import config from '@config/index'
import { mergeConfigProps, TableProps } from './index.type'
import useColumns from './useColumns'
import useQueryForm from './useQueryForm'
import usePagination from './usePagination'
import useParams from './useParams'
import { watch } from 'vue'
import useDataSource from './useDataSource'
defineOptions({
    name: 'DTable',
})

const onResizeColumn = (w: number, col: TableColumnProps) => {
    col['width'] = w
}
const {
    columns,
    colResizable,
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
        colResizable,
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

console.log(apis.list)
const { source, loading, total, updateSource }: any = $$(
    useDataSource({
        api: apis,
        fieldsNames,
        params: resultParams,
        onSourceSuccess,
        onSourceError,
    })
)
watch(source, () => {
    console.log('🚀 ~ resultParams:', source)
})
const Pagination = $$(usePagination({ pagination, total, ownPaginProps }))

defineExpose({
    QueryForm,
    QueryFormInstance,
    updateSource,
    Pagination,
})
</script>

<style scoped></style>
