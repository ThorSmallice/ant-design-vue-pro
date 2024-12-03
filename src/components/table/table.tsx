import initDefaultProps from '@src/tools'
import { Table as ATable, Form } from 'ant-design-vue'
import { computed, defineComponent, VNode } from 'vue'
import { tableProps } from './index.type'
import useColumns from './useColumns'
import useDataSource from './useDataSource'
import useQueryForm, { TableFormInstance } from './useQueryForm'
import usePagination from './usePagination'
import useParams from './useParams'

export interface TableSlots {
    queryFormExtraLeft?: (form: TableFormInstance) => VNode[]
    queryFormExtraCenter?: (form: TableFormInstance) => VNode[]
    queryFormExtraRight?: (form: TableFormInstance) => VNode[]
}
const Table = defineComponent({
    name: 'DTable',

    props: initDefaultProps(tableProps(), {}),

    setup(props, { expose, emit, slots }) {
        console.log(slots)
        const { resColumns } = useColumns({
            columns: props.columns,
        })

        const { QueryForm, QueryFormInstance, queryFormParams } = useQueryForm({
            filterFormItem: props?.queryFormItem,
            formProps: props?.queryFormProps,
            rules: props?.queryFormRules,
            useFormOptions: props?.queryUseFormOptions,
            queryFormRowProps: props?.queryFormRowProps,
            queryFormColProps: props?.queryFormColProps,
            queryFormFlexProps: props?.queryFormFlexProps,
            queryFormSubmitBtn: props?.queryFormSubmitBtn,
            queryFormResetBtn: props?.queryFormResetBtn,
            slots,
        })

        const { pagination, resultParams } = useParams({
            params: props?.params,
            ownPagin: props?.ownPagin,
            requestParamsFormatter: props?.requestParamsFormatter,
            fieldsNames: props?.fieldsNames,
            queryFormParams,
        })

        const { source, loading, total, updateSource } = useDataSource({
            api: props?.apis?.list,
            fieldsNames: props?.fieldsNames,

            params: resultParams,
            onSourceSuccess: props?.onSourceSuccess,
            onSourceError: props?.onSourceError,
            emit,
        })

        const Pagination = usePagination({
            pagination,
            total,
            props: props?.ownPaginProps,
        })

        const RenderPagination = computed(() => {
            return props?.ownPagin && props?.showOwnPagination ? (
                <div class={['d-table-pagination-wrap']}>
                    <Pagination></Pagination>
                </div>
            ) : null
        })

        const RenderQueryForm = computed(() => {
            return props?.queryForm ? (
                <div class={['d-table-query-form']}>
                    <QueryForm></QueryForm>
                </div>
            ) : null
        })

        expose({
            Pagination,
            updateSource,
            QueryForm,
            QueryFormInstance,
        })

        return () => (
            <div class={['d-table', props?.full ? 'd-table-full' : null]}>
                {RenderQueryForm.value}
                <div class={['d-table-wrap']}>
                    <ATable
                        pagination={false}
                        columns={resColumns.value}
                        loading={loading.value}
                        dataSource={source.value}
                    ></ATable>
                </div>

                {RenderPagination.value}
            </div>
        )
    },
}) as unknown as {
    new (): { $slots: TableSlots }
}

export default Table
