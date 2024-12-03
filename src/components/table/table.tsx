import initDefaultProps from '@src/tools'
import { Table as ATable } from 'ant-design-vue'
import { computed, defineComponent } from 'vue'
import { tableProps } from './index.type'
import useColumns from './useColumns'
import useDataSource from './useDataSource'
import useQueryForm from './useQueryForm'
import usePagination from './usePagination'
import useParams from './useParams'
export default defineComponent({
    name: 'DTable',

    props: initDefaultProps(tableProps(), {}),

    setup(props, { expose, emit }) {
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
            return props?.ownQueryForm ? (
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
})
