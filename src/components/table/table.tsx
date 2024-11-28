import initDefaultProps from '@src/tools'
import { defineComponent } from 'vue'
import { tableProps } from './index.type'
import useDataSource from './useDataSource'
import { Table as ATable } from 'ant-design-vue'
import usePagination from './usePagination'
import useParams from './useParams'
import useColumns from './useColumns'
export default defineComponent({
    name: 'DTable',

    props: initDefaultProps(tableProps(), {}),

    setup(props) {
        const { resColumns } = useColumns({
            columns: props.columns,
        })
        const { pagination } = useParams()

        const { source, loading, total } = useDataSource({
            apis: props?.apis,
            ownPagin: props?.ownPagin,
            fieldsNames: props?.fieldsNames,
            pagination,
        })
        const Pagination = usePagination({
            pagination,
            total,
        })

        return () => (
            <div class={['d-table', props?.full ? 'd-table-full' : null]}>
                <div class={['d-table-control-wrap']}></div>
                <div class={['d-table-wrap']}>
                    <ATable
                        columns={resColumns.value}
                        loading={loading.value}
                        dataSource={source}
                    ></ATable>
                </div>
                {props.ownPagin && props.showOwnPagination ? (
                    <div class={['d-table-pagination-wrap']}>
                        <Pagination></Pagination>
                    </div>
                ) : null}
            </div>
        )
    },
})
