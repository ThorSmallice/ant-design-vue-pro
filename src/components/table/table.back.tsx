import initDefaultProps from '@src/tools'
import { Table as ATable, TableColumnProps } from 'ant-design-vue'
import { computed, defineComponent, toRef } from 'vue'
import { TableProps, tableProps, TableSetupCtx } from './index.type'
import useColumns from './useColumns'
import useDataSource from './useDataSource'
import usePagination from './usePagination'
import useParams from './useParams'
import useQueryForm from './useQueryForm'

const Table = defineComponent({
    name: 'DTable',
    props: initDefaultProps(tableProps(), {}),
    setup(props, { expose, emit, slots }: TableSetupCtx) {
        // const { columns } = defineProps(props)
        const { columns } = $(props)

        //   const a =  computed(() => {
        //         console.log(columns, 123123)
        //         return columns
        //     })
        // const onResizeColumn = (w: number, col: TableColumnProps) => {
        //     col['width'] = w
        // }
        const { resColumns } = $$(
            useColumns({
                columns: columns,
                colResizable: props.colResizable,
            })
        )
        // const { QueryForm, QueryFormInstance, queryFormParams } = useQueryForm({
        //     filterFormItem: props?.queryFormItem,
        //     formProps: props?.queryFormProps,
        //     rules: props?.queryFormRules,
        //     useFormOptions: props?.queryUseFormOptions,
        //     queryFormRowProps: props?.queryFormRowProps,
        //     queryFormColProps: props?.queryFormColProps,
        //     queryFormFlexProps: props?.queryFormFlexProps,
        //     queryFormSubmitBtn: props?.queryFormSubmitBtn,
        //     queryFormResetBtn: props?.queryFormResetBtn,
        //     slots,
        // })
        // const RenderQueryForm = computed(() => {
        //     return props?.queryForm ? (
        //         <div class={['d-table-query-form']}>
        //             <QueryForm></QueryForm>
        //         </div>
        //     ) : null
        // })
        // const { pagination, resultParams } = useParams({
        //     params: props?.params,
        //     ownPagin: props?.ownPagin,
        //     requestParamsFormatter: props?.requestParamsFormatter,
        //     fieldsNames: props?.fieldsNames,
        //     queryFormParams,
        // })
        // const { source, loading, total, updateSource } = useDataSource({
        //     api: props?.apis?.list,
        //     fieldsNames: props?.fieldsNames,

        //     params: resultParams,
        //     onSourceSuccess: props?.onSourceSuccess,
        //     onSourceError: props?.onSourceError,
        //     emit,
        // })
        // const Pagination = usePagination({
        //     pagination,
        //     total,
        //     props: props?.ownPaginProps,
        // })
        // const RenderPagination = computed(() => {
        //     return props?.ownPagin && props?.showOwnPagination ? (
        //         <div class={['d-table-pagination-wrap']}>
        //             <Pagination></Pagination>
        //         </div>
        //     ) : null
        // })
        // expose({
        //     Pagination,
        //     updateSource,
        //     QueryForm,
        //     QueryFormInstance,
        // })

        return () => {
            return (
                <div class={['d-table', props?.full ? 'd-table-full' : null]}>
                    {/* {RenderQueryForm.value} */}
                    <div class={['d-table-wrap']}>
                        <ATable
                            pagination={false}
                            columns={resColumns.value}
                            // loading={loading.value}
                            // dataSource={source.value}
                            // onResizeColumn={onResizeColumn}
                        ></ATable>
                    </div>

                    {/* {RenderPagination.value} */}
                </div>
            )
        }
    },
})

export default Table
