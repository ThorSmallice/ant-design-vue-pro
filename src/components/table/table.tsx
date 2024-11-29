import initDefaultProps from '@src/tools'
import { Table as ATable } from 'ant-design-vue'
import { computed, defineComponent } from 'vue'
import { tableProps } from './index.type'
import useColumns from './useColumns'
import useDataSource from './useDataSource'
import usePagination from './usePagination'
import useParams from './useParams'
import useFilterForm from './useFilterForm'
export default defineComponent({
    name: 'DTable',

    props: initDefaultProps(tableProps(), {}),

    setup(props, { expose, emit }) {
        const { resColumns } = useColumns({
            columns: props.columns,
        })
        const { pagination } = useParams()

        const { source, loading, total, updateSource } = useDataSource({
            api: props?.apis?.list,
            ownPagin: props?.ownPagin,
            fieldsNames: props?.fieldsNames,
            pagination,
            params: props?.params,
            requestParamsFormatter: props?.requestParamsFormatter,
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
            return props.ownPagin && props.showOwnPagination ? (
                <div class={['d-table-pagination-wrap']}>
                    <Pagination></Pagination>
                </div>
            ) : null
        })

        const {} = useFilterForm({
            filterFormItem: props?.filterFormItem,
        })

        expose({
            Pagination,
            updateSource,
        })

        return () => (
            <div class={['d-table', props?.full ? 'd-table-full' : null]}>
                {}
                <div class={['d-table-control-wrap']}></div>
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
